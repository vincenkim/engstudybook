// 로컬 보기용 최소 렌더러: 이 폴더의 *.dc.html 화면(x-dc 템플릿)을 브라우저에서 그린다.
// 지원 범위는 이 화면들이 쓰는 것만: {{경로}} 치환, sc-for, sc-if, onClick/onChange, setState.
(function () {
  const WHOLE = /^\s*\{\{([^}]+)\}\}\s*$/;
  const ANY = /\{\{([^}]+)\}\}/g;
  const BOOLEAN_PROPS = ['checked', 'disabled', 'selected'];

  document.head.insertAdjacentHTML('beforeend', '<style>x-dc{display:none}</style>');

  function lookup(scope, path) {
    const key = path.trim();
    if (key === 'true') return true;
    if (key === 'false') return false;
    return key.split('.').reduce((value, part) => (value == null ? undefined : value[part]), scope);
  }

  function interpolate(text, scope) {
    return text.replace(ANY, (_, path) => {
      const value = lookup(scope, path);
      return value == null ? '' : String(value);
    });
  }

  function setAttribute(element, name, raw, scope) {
    if (name.startsWith('hint-')) return;
    const whole = raw.match(WHOLE);
    if (/^on[a-z]+$/.test(name)) {
      const handler = whole && lookup(scope, whole[1]);
      if (typeof handler === 'function') element.addEventListener(name.slice(2), handler);
      return;
    }
    if (!whole) {
      element.setAttribute(name, interpolate(raw, scope));
      return;
    }
    const value = lookup(scope, whole[1]);
    if (BOOLEAN_PROPS.includes(name)) {
      if (value) element.setAttribute(name, '');
      element[name] = !!value;
    } else if (value != null && value !== false) {
      element.setAttribute(name, value === true ? '' : String(value));
    }
  }

  function build(node, scope, parent) {
    if (node.nodeType === Node.TEXT_NODE) {
      parent.appendChild(document.createTextNode(interpolate(node.nodeValue, scope)));
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.localName;
    if (tag === 'helmet') return;
    if (tag === 'sc-for') {
      const list = lookup(scope, node.getAttribute('list').match(WHOLE)[1]) || [];
      const as = node.getAttribute('as') || 'item';
      list.forEach((item, index) => {
        const inner = Object.assign(Object.create(scope), { [as]: item, $index: index });
        node.childNodes.forEach(child => build(child, inner, parent));
      });
      return;
    }
    if (tag === 'sc-if') {
      if (lookup(scope, node.getAttribute('value').match(WHOLE)[1])) {
        node.childNodes.forEach(child => build(child, scope, parent));
      }
      return;
    }
    const element = document.createElementNS(node.namespaceURI, tag);
    for (const attribute of node.attributes) setAttribute(element, attribute.name, attribute.value, scope);
    node.childNodes.forEach(child => build(child, scope, element));
    parent.appendChild(element);
  }

  class DCLogic {
    constructor(props) {
      this.props = props || {};
      this.state = {};
    }
    setState(patch) {
      this.state = { ...this.state, ...(typeof patch === 'function' ? patch(this.state) : patch) };
      this.forceUpdate();
    }
    forceUpdate() {
      this.render();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const template = document.querySelector('x-dc');
    const helmet = template.querySelector('helmet');
    if (helmet) [...helmet.children].forEach(child => document.head.appendChild(child));

    const source = document.querySelector('script[data-dc-script]').textContent;
    const Component = new Function('DCLogic', source + '\nreturn Component;')(DCLogic);
    const component = new Component({});
    const mount = document.createElement('div');
    template.after(mount);

    component.render = () => {
      const values = component.renderVals();
      mount.replaceChildren();
      template.childNodes.forEach(child => build(child, values, mount));
    };
    component.render();
  });
})();
