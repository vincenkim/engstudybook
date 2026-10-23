import type { DayContent } from '../schema';

export default {
	goals: [
		'자주 나오는 동사를 목적어·전치사와 묶어 익힌다',
		'Part 6 어휘 빈칸을 앞뒤 문장의 흐름으로 푼다',
		'What · Which · How · Why 의문문의 응답을 복습한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '동사 어휘는 뒤에 오는 말을 봅니다',
			blocks: [
				{
					type: 'p',
					text: '보기 네 개가 모두 동사이고 뜻이 서로 다르면 동사 어휘 문제입니다. 동사는 **뒤에 오는 목적어**와 짝을 이룹니다. 빈칸 뒤의 명사를 먼저 보세요.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'빈칸 뒤의 **목적어**를 봅니다. — ==attend== a meeting, ==submit== a report, ==renew== a license',
						'목적어 뒤의 **전치사**도 단서입니다. — provide A ==with== B, replace A ==with== B',
						'짝으로 풀리지 않으면 문장 전체를 해석해 뜻이 맞는 것을 고릅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The company will ==provide== all staff ==with== uniforms.',
							ko: '회사는 모든 직원에게 유니폼을 제공할 것입니다.',
							note: 'provide A with B — A에게 B를 제공하다'
						},
						{
							en: 'Please ==replace== the old battery ==with== a new one.',
							ko: '오래된 배터리를 새것으로 교체하세요.',
							note: 'replace A with B — A를 B로 교체하다'
						}
					]
				},
				{
					type: 'tip',
					text: 'attend는 "~에 참석하다"이지만 뒤에 전치사를 쓰지 않습니다. attend to a meeting이 아니라 **attend a meeting**입니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '자주 나오는 동사',
			blocks: [
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['attend', '참석하다', 'attend a meeting'],
						['submit', '제출하다', 'submit a report'],
						['confirm', '확인하다', 'confirm a reservation'],
						['postpone', '연기하다', 'postpone a meeting until Friday'],
						['approve', '승인하다', 'approve a request'],
						['review', '검토하다', 'review a contract'],
						['hire', '채용하다', 'hire new staff'],
						['require', '요구하다, 필요로 하다', 'require A to do']
					]
				},
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['provide', '제공하다', 'provide A with B'],
						['replace', '교체하다', 'replace A with B'],
						['deliver', '배달하다', 'deliver an order'],
						['reduce', '줄이다', 'reduce costs'],
						['expand', '확장하다', 'expand a business'],
						['renew', '갱신하다', 'renew a license'],
						['launch', '출시하다, 시작하다', 'launch a new product']
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'More than fifty managers will ------- the leadership workshop in Busan next week.',
			options: ['attend', 'submit', 'hire', 'reduce'],
			answer: 0,
			ko: '50명이 넘는 관리자가 다음 주 부산에서 열리는 리더십 워크숍에 참석할 것입니다.',
			steps: [
				'보기가 모두 동사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 뒤의 목적어는 **the leadership workshop**(리더십 워크숍)입니다. 행사와 짝이 되는 동사를 찾습니다.',
				'attend a workshop은 "워크숍에 참석하다"입니다. attend 뒤에는 전치사 없이 바로 목적어가 옵니다. 정답은 (A) **attend**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The supplier agreed to ------- the broken chairs with new ones.',
			options: ['confirm', 'postpone', 'replace', 'attend'],
			answer: 2,
			ko: '공급업체는 부서진 의자를 새것으로 교체해 주기로 했습니다.',
			steps: [
				'보기가 모두 동사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 뒤에 목적어 the broken chairs가 있고, 그 뒤에 **with** new ones가 이어집니다.',
				'replace A with B는 "A를 B로 교체하다"입니다. 정답은 (C) **replace**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-01',
			text: 'Please ------- your expense report to the accounting office by Friday.',
			options: ['attend', 'submit', 'hire', 'expand'],
			answer: 1,
			ko: '금요일까지 경비 보고서를 회계 사무실에 제출해 주세요.',
			why: 'submit a report는 "보고서를 제출하다"입니다. 뒤의 to the accounting office(회계 사무실에)와 by Friday(금요일까지)도 제출과 어울립니다.',
			notes: ['참석하다', '제출하다 (정답)', '채용하다', '확장하다'],
			vocab: [
				['submit', '제출하다'],
				['expense report', '경비 보고서'],
				['accounting office', '회계 사무실']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-02',
			text: 'The legal team will ------- the contract carefully before Ms. Im signs it.',
			options: ['review', 'attend', 'hire', 'expand'],
			answer: 0,
			ko: '법무팀은 임 씨가 서명하기 전에 계약서를 꼼꼼히 검토할 것입니다.',
			why: 'review a contract는 "계약서를 검토하다"입니다. carefully(꼼꼼히)와 서명하기 전이라는 내용이 단서입니다.',
			notes: ['검토하다 (정답)', '참석하다', '채용하다', '확장하다'],
			vocab: [
				['review', '검토하다'],
				['contract', '계약서'],
				['carefully', '꼼꼼히'],
				['sign', '서명하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-03',
			text: 'The conference center will ------- all speakers with a laptop and a microphone.',
			options: ['postpone', 'deliver', 'reduce', 'provide'],
			answer: 3,
			ko: '회의장은 모든 발표자에게 노트북과 마이크를 제공할 것입니다.',
			why: 'provide A with B는 "A에게 B를 제공하다"입니다. 목적어 all speakers 뒤의 with가 단서입니다.',
			notes: ['연기하다', '배달하다', '줄이다', '제공하다 (정답)'],
			vocab: [
				['provide A with B', 'A에게 B를 제공하다'],
				['conference center', '회의장'],
				['speaker', '발표자']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-04',
			text: "Mr. Jung needs to ------- his driver's license before it expires next month.",
			options: ['deliver', 'expand', 'renew', 'hire'],
			answer: 2,
			ko: '정 씨는 다음 달에 만료되기 전에 운전면허를 갱신해야 합니다.',
			why: 'renew a license는 "면허를 갱신하다"입니다. before it expires(만료되기 전에)가 단서입니다.',
			notes: ['배달하다', '확장하다', '갱신하다 (정답)', '채용하다'],
			vocab: [
				['renew', '갱신하다'],
				["driver's license", '운전면허'],
				['expire', '만료되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-05',
			text: 'The director must ------- all travel requests before employees book their flights.',
			options: ['hire', 'attend', 'approve', 'launch'],
			answer: 2,
			ko: '직원들이 항공편을 예약하기 전에 이사가 모든 출장 신청을 승인해야 합니다.',
			why: 'approve a request는 "신청을 승인하다"입니다. 이사(director)가 직원의 신청(requests)에 대해 하는 일로 알맞습니다.',
			notes: ['채용하다', '참석하다', '승인하다 (정답)', '출시하다'],
			vocab: [
				['approve', '승인하다'],
				['travel request', '출장 신청'],
				['book a flight', '항공편을 예약하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-06',
			text: 'The factory installed new machines to ------- its energy costs.',
			options: ['reduce', 'renew', 'deliver', 'submit'],
			answer: 0,
			ko: '그 공장은 에너지 비용을 줄이기 위해 새 기계를 설치했습니다.',
			why: 'reduce costs는 "비용을 줄이다"입니다. 새 기계를 설치한 목적으로 알맞습니다.',
			notes: ['줄이다 (정답)', '갱신하다', '배달하다', '제출하다'],
			vocab: [
				['install', '설치하다'],
				['reduce costs', '비용을 줄이다'],
				['energy', '에너지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-07',
			text: 'The online course ------- students to complete a short test every week.',
			options: ['delivers', 'requires', 'attends', 'reduces'],
			answer: 1,
			ko: '그 온라인 강좌는 수강생에게 매주 짧은 시험을 치르도록 요구합니다.',
			why: 'require + 사람 + to + 동사원형은 "~에게 …하도록 요구하다"입니다. 빈칸 뒤의 students to complete가 단서입니다.',
			notes: ['배달하다', '요구하다 (정답)', '참석하다', '줄이다'],
			vocab: [
				['require A to do', 'A에게 ~하도록 요구하다'],
				['complete', '마치다, 끝내다'],
				['every week', '매주']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-08',
			text: 'After two years of development, Halden Electronics will ------- its new smartphone in March.',
			options: ['reduce', 'renew', 'require', 'launch'],
			answer: 3,
			ko: '2년간의 개발 끝에 홀든 전자는 3월에 새 스마트폰을 출시할 것입니다.',
			why: 'launch a product는 "제품을 출시하다"입니다. 개발(development)을 마친 뒤에 하는 일로 알맞습니다.',
			notes: ['줄이다', '갱신하다', '요구하다', '출시하다 (정답)'],
			vocab: [
				['launch', '출시하다'],
				['development', '개발']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-09',
			text: 'The restaurant chain plans to ------- its business into three more cities next year.',
			options: ['submit', 'approve', 'confirm', 'expand'],
			answer: 3,
			ko: '그 식당 체인은 내년에 세 개 도시로 사업을 더 확장할 계획입니다.',
			why: 'expand a business into는 "사업을 ~로 확장하다"입니다. into three more cities(세 도시로 더)가 단서입니다.',
			notes: ['제출하다', '승인하다', '확인하다', '확장하다 (정답)'],
			vocab: [
				['expand', '확장하다'],
				['restaurant chain', '식당 체인'],
				['plan to', '~할 계획이다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-10',
			text: 'The store promises to ------- all online orders within two business days.',
			options: ['deliver', 'require', 'launch', 'expand'],
			answer: 0,
			ko: '그 매장은 모든 온라인 주문을 영업일 기준 이틀 안에 배달하겠다고 약속합니다.',
			why: 'deliver an order는 "주문품을 배달하다"입니다. within two business days(영업일 이틀 안에)와도 어울립니다.',
			notes: ['배달하다 (정답)', '요구하다', '출시하다', '확장하다'],
			vocab: [
				['deliver', '배달하다'],
				['online order', '온라인 주문'],
				['business day', '영업일']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-11',
			text: 'The travel agent sent Ms. Yoon an e-mail to ------- her flight to Singapore.',
			options: ['expand', 'hire', 'confirm', 'reduce'],
			answer: 2,
			ko: '여행사 직원은 싱가포르행 항공편을 확인해 주려고 윤 씨에게 이메일을 보냈습니다.',
			why: 'confirm a flight는 "항공편 예약을 확인하다"입니다. 여행사 직원이 고객에게 이메일을 보낸 목적으로 알맞습니다.',
			notes: ['확장하다', '채용하다', '확인하다 (정답)', '줄이다'],
			vocab: [
				['confirm', '확인하다'],
				['travel agent', '여행사 직원'],
				['flight', '항공편']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd18-12',
			text: 'The company ------- ten more engineers for its new research center last month.',
			options: ['renewed', 'hired', 'postponed', 'submitted'],
			answer: 1,
			ko: '그 회사는 지난달에 새 연구소에서 일할 엔지니어 열 명을 더 채용했습니다.',
			why: '빈칸 뒤의 목적어가 사람(engineers)입니다. hire는 "(사람을) 채용하다"입니다.',
			notes: ['갱신했다', '채용했다 (정답)', '연기했다', '제출했다'],
			vocab: [
				['hire', '채용하다'],
				['engineer', '엔지니어, 기술자'],
				['research center', '연구소']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 6 어휘 빈칸: 앞뒤 문장을 봅니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 5의 어휘 문제는 한 문장 안에서 풀립니다. Part 6의 어휘 빈칸은 다릅니다. **빈칸이 있는 문장만 보면 보기 여러 개가 말이 됩니다.**'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Your order has been -------.',
							ko: '고객님의 주문이 ( )되었습니다.',
							note: 'confirmed(확인된), delivered(배달된), canceled(취소된) 모두 들어갈 수 있습니다.'
						},
						{
							en: 'Your order has been ==canceled==. You will receive a full refund within five days.',
							ko: '고객님의 주문이 취소되었습니다. 5일 안에 전액 환불을 받으실 것입니다.',
							note: '뒤 문장에 환불 이야기가 나옴 → 취소'
						}
					]
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'보기를 보고 어휘 빈칸인지 확인합니다.',
						'빈칸이 있는 문장을 읽고, 말이 되는 보기를 남깁니다.',
						'**앞 문장과 뒤 문장**을 읽습니다. 날짜, 이유, 다음에 할 일이 단서가 됩니다.',
						'남은 보기 중 앞뒤 흐름과 맞는 것을 고릅니다.'
					]
				},
				{
					type: 'tip',
					text: '어휘 빈칸의 단서는 **뒤 문장**에 있는 경우가 많습니다. 빈칸에서 멈추지 말고 한 문장 더 읽으세요.'
				}
			]
		},
		{
			type: 'set',
			part: 6,
			label: '이메일',
			passages: [
				{
					kind: '이메일',
					head: [
						['To', 'Sales team'],
						['From', 'Daniel Cho, Training Manager'],
						['Subject', 'Product training']
					],
					body: [
						'Dear sales team members,',
						'The product training planned for this Thursday has been {1}. Our trainer, Ms. Rivera, is sick this week, so the session will now take place next Tuesday at 2 P.M. in Room 301.',
						'All team members must {2} the session. If you are not able to come on Tuesday, please tell me by Friday.',
						'I {3} the training materials to everyone tomorrow morning. Please read {4} before the session so that you can ask questions.',
						'Daniel Cho'
					],
					ko: [
						'영업팀 여러분께,',
						'이번 주 목요일로 예정되었던 제품 교육이 연기되었습니다. 강사인 리베라 씨가 이번 주에 아파서, 교육은 다음 주 화요일 오후 2시에 301호에서 진행됩니다.',
						'팀원은 모두 교육에 참석해야 합니다. 화요일에 올 수 없으면 금요일까지 저에게 알려 주세요.',
						'내일 아침에 모든 분께 교육 자료를 보내 드리겠습니다. 질문할 수 있도록 교육 전에 읽어 보세요.',
						'대니얼 조'
					]
				}
			],
			questions: [
				{
					id: 'd18-13',
					options: ['confirmed', 'completed', 'postponed', 'approved'],
					answer: 2,
					why: '빈칸이 있는 문장만 보면 네 보기가 모두 들어갈 수 있습니다. 뒤 문장에서 강사가 아파서 the session will now take place next Tuesday(교육은 다음 주 화요일에 진행된다)라고 했습니다. 날짜가 미뤄졌으므로 postponed가 정답입니다.',
					notes: [
						'확정된 — 날짜가 바뀌었으므로 맞지 않음',
						'끝난 — 아직 하지 않은 교육',
						'연기된 (정답)',
						'승인된 — 뒤 문장과 이어지지 않음'
					]
				},
				{
					id: 'd18-14',
					options: ['attend', 'reduce', 'approve', 'replace'],
					answer: 0,
					why: '뒤 문장에서 If you are not able to come(올 수 없으면)이라고 했습니다. 모두 와야 한다는 뜻이므로 attend(참석하다)가 정답입니다.',
					notes: ['참석하다 (정답)', '줄이다', '승인하다', '교체하다']
				},
				{
					id: 'd18-15',
					options: ['sent', 'have sent', 'sending', 'will send'],
					answer: 3,
					why: '같은 문장에 tomorrow morning(내일 아침)이 있습니다. 앞으로의 일이므로 미래 시제 will send가 정답입니다.',
					notes: ['과거', '현재완료', '-ing형 — 동사가 될 수 없음', '미래 (정답)']
				},
				{
					id: 'd18-16',
					options: ['they', 'them', 'their', 'themselves'],
					answer: 1,
					why: '동사 read 뒤의 목적어 자리입니다. 앞 문장의 the training materials(교육 자료)를 가리키는 목적격 them이 정답입니다.',
					notes: [
						'주격',
						'목적격 (정답)',
						'소유격 — 뒤에 명사가 필요함',
						'재귀대명사 — 주어 you와 맞지 않음'
					]
				}
			],
			vocab: [
				['take place', '열리다, 진행되다'],
				['session', '(교육) 시간, 모임'],
				['be able to', '~할 수 있다'],
				['training materials', '교육 자료'],
				['so that', '~할 수 있도록']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Hillside Fitness Center — Notice to Members',
					body: [
						'Hillside Fitness Center will {1} its swimming pool from July 3 to July 9. During this week, workers will put in new floor tiles and repair the water system.',
						'Members can still use the gym and the yoga rooms {2} the repair work. The opening hours of the center will not change.',
						'We understand that the work may be inconvenient for you. To thank you for your patience, we will {3} every membership by one week at no charge.',
						'The pool will be {4} cleaned before it opens again on July 10.'
					],
					ko: [
						'힐사이드 피트니스 센터는 7월 3일부터 7월 9일까지 수영장을 닫습니다. 이 한 주 동안 작업자들이 바닥 타일을 새로 깔고 급수 시설을 수리합니다.',
						'수리 작업 중에도 회원 여러분은 헬스장과 요가실을 계속 이용할 수 있습니다. 센터 운영 시간은 바뀌지 않습니다.',
						'공사로 불편하실 수 있다는 점을 알고 있습니다. 기다려 주시는 데 대한 감사의 뜻으로 모든 회원권을 무료로 1주일 연장해 드립니다.',
						'수영장은 7월 10일에 다시 열기 전에 완전히 청소됩니다.'
					]
				}
			],
			questions: [
				{
					id: 'd18-17',
					options: ['open', 'close', 'sell', 'visit'],
					answer: 1,
					why: '뒤 문장에서 그 기간에 workers will put in new floor tiles and repair the water system(작업자들이 타일을 깔고 급수 시설을 수리한다)이라고 했습니다. 공사 중에는 수영장을 쓸 수 없으므로 close(닫다)가 정답입니다. 마지막 문장의 opens again(다시 연다)도 단서입니다.',
					notes: ['열다 — 공사 기간과 맞지 않음', '닫다 (정답)', '팔다', '방문하다']
				},
				{
					id: 'd18-18',
					options: ['during', 'while', 'when', 'because'],
					answer: 0,
					why: '빈칸 뒤가 the repair work라는 명사입니다. 명사 앞에는 전치사가 옵니다. during(~ 동안)이 정답입니다.',
					notes: [
						'전치사 (정답)',
						'접속사 — 뒤에 주어 + 동사가 와야 함',
						'접속사 — 뒤에 주어 + 동사가 와야 함',
						'접속사 — 뒤에 주어 + 동사가 와야 함'
					]
				},
				{
					id: 'd18-19',
					options: ['cancel', 'reduce', 'extend', 'review'],
					answer: 2,
					why: '앞 문장에서 공사가 불편할 수 있다고 했고, To thank you for your patience(기다려 주셔서 감사하는 뜻으로)라고 했습니다. 회원에게 이로운 일이어야 하므로 "회원권을 1주일 연장하다"가 되는 extend가 정답입니다.',
					notes: ['취소하다', '줄이다 — 감사의 뜻과 반대', '연장하다 (정답)', '검토하다']
				},
				{
					id: 'd18-20',
					options: ['complete', 'completion', 'completed', 'completely'],
					answer: 3,
					why: 'will be와 과거분사 cleaned 사이는 빼도 되는 자리입니다. 부사 completely가 정답입니다.',
					notes: ['형용사·동사', '명사', '과거분사·과거형', '부사 (정답)']
				}
			],
			vocab: [
				['put in', '설치하다, 깔다'],
				['repair work', '수리 작업'],
				['inconvenient', '불편한'],
				['patience', '인내, 기다려 줌'],
				['membership', '회원권, 회원 자격'],
				['at no charge', '무료로']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: What · Which · How · Why',
			blocks: [
				{
					type: 'p',
					text: '오늘은 What, Which, How, Why로 묻는 질문을 다섯 문제 복습합니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'**What / Which** → 바로 뒤의 명사를 듣습니다. What time(시각), What kind(종류), Which floor(층)',
						'**How** → 뒤에 오는 말이 답을 정합니다. How long(기간), How often(빈도), How much(가격)',
						'**Why** → 이유. Because가 없어도 이유를 말하면 정답입니다. To + 동사원형(목적)도 정답입니다.',
						'의문사로 묻는 질문에 **Yes / No**로 시작하는 보기는 오답입니다.',
						'기간을 물었는데 가격으로, 방법을 물었는데 기간으로 답한 보기를 먼저 지웁니다.'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd18-21',
			script: 'What is the fastest way to get to the convention center?',
			options: ['About three days.', 'Take subway line two.', 'Yes, it was fast.'],
			answer: 1,
			ko: '컨벤션 센터까지 가는 가장 빠른 방법은 무엇인가요?',
			optionsKo: ['3일쯤이요.', '지하철 2호선을 타세요.', '네, 빨랐어요.'],
			why: 'What is the fastest way로 가는 방법을 물었으므로 교통수단을 알려 준 (B)가 정답입니다.',
			notes: ['기간 — How long에 대한 답', '교통수단 (정답)', 'Yes로 시작, fast 반복'],
			vocab: [
				['the fastest way', '가장 빠른 방법'],
				['get to', '~에 가다'],
				['subway line', '지하철 노선']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd18-22',
			script: 'Which department does Ms. Noh work in?',
			options: ['Customer service.', 'Since last April.', 'Yes, she works hard.'],
			answer: 0,
			ko: '노 씨는 어느 부서에서 일하나요?',
			optionsKo: ['고객 서비스부요.', '지난 4월부터요.', '네, 그녀는 열심히 일해요.'],
			why: 'Which department로 부서를 물었으므로 부서 이름으로 답한 (A)가 정답입니다.',
			notes: ['부서 이름 (정답)', '시점 — How long에 대한 답', 'Yes로 시작, work 반복'],
			vocab: [
				['department', '부서'],
				['customer service', '고객 서비스']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd18-23',
			script: 'How long is the warranty on this refrigerator?',
			options: ['In the kitchen.', 'About five hundred dollars.', 'Two years.'],
			answer: 2,
			ko: '이 냉장고의 보증 기간은 얼마나 되나요?',
			optionsKo: ['부엌에요.', '500달러쯤이에요.', '2년이에요.'],
			why: 'How long으로 기간을 물었으므로 기간으로 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '가격 — How much에 대한 답', '기간 (정답)'],
			vocab: [
				['warranty', '보증'],
				['refrigerator', '냉장고']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd18-24',
			script: 'Why is the sales team working late tonight?',
			options: ['They have a deadline tomorrow.', "Until nine o'clock.", 'On the eighth floor.'],
			answer: 0,
			ko: '영업팀은 왜 오늘 밤늦게까지 일하나요?',
			optionsKo: ['내일이 마감이에요.', '9시까지요.', '8층에서요.'],
			why: 'Why로 이유를 물었습니다. Because 없이 이유를 말한 (A)가 정답입니다.',
			notes: ['이유 (정답)', '시점 — How late에 대한 답', '장소 — Where에 대한 답'],
			vocab: [
				['work late', '늦게까지 일하다'],
				['deadline', '마감']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd18-25',
			script: 'How often does the shuttle bus run?',
			options: ['From the main gate.', 'Every twenty minutes.', 'I run in the park.'],
			answer: 1,
			ko: '셔틀버스는 얼마나 자주 다니나요?',
			optionsKo: ['정문에서요.', '20분마다요.', '저는 공원에서 달려요.'],
			why: 'How often으로 빈도를 물었으므로 "20분마다"라고 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '빈도 (정답)', 'run(운행하다)과 철자가 같은 run(달리다)'],
			vocab: [
				['how often', '얼마나 자주'],
				['shuttle bus', '셔틀버스'],
				['run', '(버스가) 운행하다']
			]
		}
	]
} satisfies DayContent;
