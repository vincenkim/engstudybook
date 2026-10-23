import type { DayContent } from '../schema';

export default {
	goals: [
		'전치사와 짝을 이루는 형용사·동사 표현을 익힌다',
		'공지와 회람의 흐름을 알고 Part 6 빈칸을 푼다',
		'돌려 말하는 응답을 알아듣는다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '전치사는 짝이 정해져 있습니다',
			blocks: [
				{
					type: 'p',
					text: '형용사나 동사 뒤에 오는 전치사는 **단어마다 정해져 있습니다.** be interested ==in==, depend ==on==처럼 짝째로 외워야 합니다. 전치사의 뜻을 따져서는 고를 수 없습니다.'
				},
				{
					type: 'box',
					title: '문제는 두 가지로 나옵니다',
					items: [
						'보기가 **전치사 네 개**이면 빈칸 앞의 형용사·동사를 봅니다. — be responsible ==for==',
						'보기가 **형용사·동사 네 개**이면 빈칸 뒤의 전치사를 봅니다. — ==comply== with the rules'
					]
				},
				{
					type: 'table',
					head: ['표현', '뜻', '이렇게 씁니다'],
					rows: [
						['be interested in', '~에 관심이 있다', 'be interested in the job'],
						['be responsible for', '~을 책임지다, 담당하다', 'be responsible for sales'],
						['be satisfied with', '~에 만족하다', 'be satisfied with the result'],
						['be aware of', '~을 알고 있다', 'be aware of the problem'],
						['be familiar with', '~을 잘 알다', 'be familiar with the system']
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '동사의 짝 전치사와 굳어진 표현',
			blocks: [
				{
					type: 'table',
					head: ['표현', '뜻', '이렇게 씁니다'],
					rows: [
						['depend on', '~에 달려 있다', 'depend on the weather'],
						['apply for', '~에 지원하다, 신청하다', 'apply for a job'],
						['participate in', '~에 참가하다', 'participate in a workshop'],
						['comply with', '(규정을) 따르다', 'comply with the law'],
						['consist of', '~으로 이루어지다', 'consist of five members'],
						['respond to', '~에 답하다', 'respond to an e-mail']
					]
				},
				{
					type: 'table',
					head: ['표현', '뜻', '이렇게 씁니다'],
					rows: [
						['in advance', '미리', 'book in advance'],
						['on time', '제시간에', 'arrive on time'],
						['in charge of', '~을 맡고 있는', 'be in charge of the project'],
						['on behalf of', '~을 대신하여', 'on behalf of the company'],
						['at no cost', '무료로', 'at no cost to you']
					]
				},
				{
					type: 'tip',
					text: '우리말 조사에 속지 마세요. "~에 익숙하다"는 familiar **with**, "~에 지원하다"는 apply **for**입니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Mr. Oh is responsible ------- the safety of all factory workers.',
			options: ['at', 'for', 'of', 'in'],
			answer: 1,
			ko: '오 씨는 모든 공장 근로자의 안전을 책임지고 있습니다.',
			steps: [
				'보기가 모두 전치사입니다. 빈칸 앞에 짝이 되는 말이 있는지 봅니다.',
				'빈칸 앞에 형용사 **responsible**이 있습니다. responsible은 전치사 for와 짝을 이룹니다.',
				'be responsible for는 "~을 책임지다"입니다. 정답은 (B) **for**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The price of the tour ------- on the number of people in your group.',
			options: ['consists', 'responds', 'depends', 'complies'],
			answer: 2,
			ko: '여행 상품의 가격은 일행의 인원수에 달려 있습니다.',
			steps: [
				'보기가 모두 동사이고 뜻이 서로 다릅니다. 빈칸 뒤의 전치사를 봅니다.',
				'빈칸 뒤에 **on**이 있습니다. 보기 중 on과 짝을 이루는 동사는 depend입니다.',
				'나머지는 짝이 되는 전치사가 다릅니다. consist of, respond to, comply with.',
				'depend on은 "~에 달려 있다"입니다. 가격이 인원수에 달려 있다는 뜻도 맞습니다. 정답은 (C) **depends**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-01',
			text: 'Most guests were satisfied ------- the service at the new hotel.',
			options: ['with', 'for', 'to', 'of'],
			answer: 0,
			ko: '손님 대부분은 새 호텔의 서비스에 만족했습니다.',
			why: '빈칸 앞의 satisfied는 전치사 with와 짝을 이룹니다. be satisfied with는 "~에 만족하다"입니다.',
			notes: ['be satisfied with (정답)', '~을 위해', '~에게', '~의'],
			vocab: [
				['guest', '손님, 투숙객'],
				['be satisfied with', '~에 만족하다'],
				['service', '서비스']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-02',
			text: 'Ms. Hwang is ------- for ordering supplies for the whole office.',
			options: ['aware', 'familiar', 'responsible', 'interested'],
			answer: 2,
			ko: '황 씨는 사무실 전체의 비품 주문을 담당합니다.',
			why: '빈칸 뒤에 전치사 for가 있습니다. for와 짝을 이루는 형용사는 responsible입니다. be responsible for는 "~을 담당하다"입니다.',
			notes: [
				'aware of로 씀',
				'familiar with로 씀',
				'responsible for (정답)',
				'interested in으로 씀'
			],
			vocab: [
				['be responsible for', '~을 담당하다'],
				['supplies', '비품'],
				['whole', '전체의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-03',
			text: 'The delivery time depends ------- the size of your order.',
			options: ['in', 'at', 'on', 'for'],
			answer: 2,
			ko: '배송 시간은 주문량에 따라 달라집니다.',
			why: '빈칸 앞의 동사 depends는 전치사 on과 짝을 이룹니다. depend on은 "~에 달려 있다"입니다.',
			notes: ['~ 안에', '~에서', 'depend on (정답)', '~을 위해'],
			vocab: [
				['delivery time', '배송 시간'],
				['depend on', '~에 달려 있다'],
				['size', '크기, 규모']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-04',
			text: 'More than fifty employees will ------- in the charity run this weekend.',
			options: ['attend', 'participate', 'comply', 'depend'],
			answer: 1,
			ko: '이번 주말 자선 달리기 대회에 50명이 넘는 직원이 참가합니다.',
			why: '빈칸 뒤에 전치사 in이 있습니다. in과 짝을 이루는 동사는 participate입니다. attend는 뜻이 비슷하지만 전치사 없이 씁니다.',
			notes: [
				'참석하다 — 전치사 없이 씀',
				'participate in (정답)',
				'comply with로 씀',
				'depend on으로 씀'
			],
			vocab: [
				['participate in', '~에 참가하다'],
				['charity run', '자선 달리기 대회'],
				['more than', '~보다 많은']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-05',
			text: 'All tenants should be aware ------- the changes to the parking rules.',
			options: ['in', 'on', 'to', 'of'],
			answer: 3,
			ko: '모든 입주자는 주차 규정이 바뀐 것을 알고 있어야 합니다.',
			why: '빈칸 앞의 aware는 전치사 of와 짝을 이룹니다. be aware of는 "~을 알고 있다"입니다.',
			notes: ['~ 안에', '~ 위에', '~에게', 'be aware of (정답)'],
			vocab: [
				['tenant', '입주자, 세입자'],
				['be aware of', '~을 알고 있다'],
				['parking rules', '주차 규정']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-06',
			text: "All restaurants must ------- with the city's food safety rules.",
			options: ['comply', 'depend', 'apply', 'consist'],
			answer: 0,
			ko: '모든 식당은 시의 식품 안전 규정을 따라야 합니다.',
			why: '빈칸 뒤에 전치사 with가 있습니다. with와 짝을 이루는 동사는 comply입니다. comply with는 "(규정을) 따르다"입니다.',
			notes: ['comply with (정답)', 'depend on으로 씀', 'apply for로 씀', 'consist of로 씀'],
			vocab: [
				['comply with', '(규정을) 따르다'],
				['food safety', '식품 안전'],
				['rule', '규정']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-07',
			text: 'Mr. Sato applied ------- a sales position at a travel agency.',
			options: ['of', 'for', 'on', 'from'],
			answer: 1,
			ko: '사토 씨는 여행사의 영업직에 지원했습니다.',
			why: '빈칸 앞의 동사 applied는 전치사 for와 짝을 이룹니다. apply for는 "~에 지원하다"입니다.',
			notes: ['~의', 'apply for (정답)', '~ 위에', '~로부터'],
			vocab: [
				['apply for', '~에 지원하다'],
				['sales position', '영업직'],
				['travel agency', '여행사']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-08',
			text: 'Several companies are ------- in renting space in the new office building.',
			options: ['satisfied', 'aware', 'responsible', 'interested'],
			answer: 3,
			ko: '여러 회사가 새 사무용 건물의 공간을 임대하는 데 관심이 있습니다.',
			why: '빈칸 뒤에 전치사 in이 있습니다. in과 짝을 이루는 형용사는 interested입니다. be interested in은 "~에 관심이 있다"입니다.',
			notes: [
				'satisfied with로 씀',
				'aware of로 씀',
				'responsible for로 씀',
				'interested in (정답)'
			],
			vocab: [
				['be interested in', '~에 관심이 있다'],
				['rent', '임대하다'],
				['space', '공간']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-09',
			text: 'Ms. Ahn is familiar ------- the accounting software that we use.',
			options: ['of', 'at', 'with', 'for'],
			answer: 2,
			ko: '안 씨는 우리가 쓰는 회계 소프트웨어를 잘 압니다.',
			why: '빈칸 앞의 familiar는 전치사 with와 짝을 이룹니다. be familiar with는 "~을 잘 알다"입니다.',
			notes: ['~의', '~에서', 'be familiar with (정답)', '~을 위해'],
			vocab: [
				['be familiar with', '~을 잘 알다'],
				['accounting', '회계'],
				['software', '소프트웨어']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-10',
			text: 'Our support team will ------- to your question within 24 hours.',
			options: ['depend', 'respond', 'consist', 'participate'],
			answer: 1,
			ko: '저희 지원팀이 24시간 안에 질문에 답해 드리겠습니다.',
			why: '빈칸 뒤에 전치사 to가 있습니다. to와 짝을 이루는 동사는 respond입니다. respond to는 "~에 답하다"입니다.',
			notes: ['depend on으로 씀', 'respond to (정답)', 'consist of로 씀', 'participate in으로 씀'],
			vocab: [
				['support team', '지원팀'],
				['respond to', '~에 답하다'],
				['within', '~ 이내에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-11',
			text: 'The breakfast set consists ------- eggs, toast, and a cup of coffee.',
			options: ['of', 'with', 'for', 'by'],
			answer: 0,
			ko: '아침 세트는 달걀, 토스트, 커피 한 잔으로 이루어져 있습니다.',
			why: '빈칸 앞의 동사 consists는 전치사 of와 짝을 이룹니다. consist of는 "~으로 이루어지다"입니다.',
			notes: ['consist of (정답)', '~와 함께', '~을 위해', '~에 의해'],
			vocab: [
				['breakfast set', '아침 세트'],
				['consist of', '~으로 이루어지다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd22-12',
			text: 'Please make sure that all drivers are ------- of the new speed limit.',
			options: ['satisfied', 'responsible', 'interested', 'aware'],
			answer: 3,
			ko: '모든 운전자가 새 제한 속도를 알고 있는지 확인해 주세요.',
			why: '빈칸 뒤에 전치사 of가 있습니다. of와 짝을 이루는 형용사는 aware입니다. be aware of는 "~을 알고 있다"입니다.',
			notes: [
				'satisfied with로 씀',
				'responsible for로 씀',
				'interested in으로 씀',
				'aware of (정답)'
			],
			vocab: [
				['make sure', '확인하다'],
				['be aware of', '~을 알고 있다'],
				['speed limit', '제한 속도']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '공지와 회람은 세 가지를 알립니다',
			blocks: [
				{
					type: 'p',
					text: '**공지**(notice)는 고객이나 주민처럼 여러 사람에게, **회람**(memo)은 회사 안의 직원에게 알리는 글입니다. 둘 다 같은 순서로 씁니다.'
				},
				{
					type: 'table',
					head: ['순서', '내용', '자주 쓰는 표현'],
					rows: [
						[
							'무엇을 알리는지',
							'첫 문장에 나옵니다.',
							'We are pleased to announce ~ / Please be aware that ~'
						],
						['언제·어디서', '날짜, 시간, 장소, 이유', 'from May 1 / in Room 3 / due to ~'],
						['해야 할 일', '읽는 사람에게 부탁하는 일', 'Please ~ / Employees must ~ / in advance']
					]
				},
				{
					type: 'box',
					title: '빈칸을 풀 때',
					items: [
						'회람은 머리말의 **Subject**(제목)를 먼저 읽습니다. 글의 주제가 거기에 있습니다.',
						'**시제 빈칸**은 날짜를 봅니다. 앞으로 있을 일을 알리는 글이므로 미래 시제가 자주 정답입니다.',
						'**문장 삽입**은 앞뒤 문장의 it, they, the new one 같은 말이 무엇을 가리키는지 봅니다.'
					]
				}
			]
		},
		{
			type: 'set',
			part: 6,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Free Computer Classes at Oakwood Community Center',
					body: [
						'Oakwood Community Center {1} free computer classes for adults next month. The classes will be held every Tuesday evening from 7 P.M. to 9 P.M. in Room 3.',
						'All Oakwood residents can participate at no {2}. However, there are only 20 seats. {3}',
						'To sign up, visit the front desk or call 555-0167. Residents {4} are interested in teaching a class should speak to Ms. Rivera.'
					],
					ko: [
						'오크우드 주민 센터는 다음 달에 성인을 위한 무료 컴퓨터 수업을 엽니다. 수업은 매주 화요일 저녁 7시부터 9시까지 3호실에서 열립니다.',
						'오크우드 주민은 누구나 무료로 참가할 수 있습니다. 다만 자리는 20석뿐입니다. 참가하려면 미리 등록해 주세요.',
						'신청하려면 안내 데스크를 방문하거나 555-0167로 전화해 주세요. 수업을 가르치는 데 관심이 있는 주민은 리베라 씨에게 말씀해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd22-13',
					options: ['offered', 'will offer', 'has offered', 'offering'],
					answer: 1,
					why: '문장 끝에 next month(다음 달)가 있습니다. 앞으로의 일이므로 미래 시제 will offer가 정답입니다.',
					notes: ['과거', '미래 (정답)', '현재완료', '-ing형 — 동사가 될 수 없음']
				},
				{
					id: 'd22-14',
					options: ['cost', 'advance', 'behalf', 'reason'],
					answer: 0,
					why: '제목에 Free(무료)가 있고, 빈칸 앞에 at no가 있습니다. at no cost는 "무료로"라는 표현입니다.',
					notes: [
						'비용 — at no cost (정답)',
						'in advance(미리)에 쓰는 말',
						'on behalf of(~을 대신하여)에 쓰는 말',
						'이유'
					]
				},
				{
					id: 'd22-15',
					options: [
						'The center was built thirty years ago.',
						'All of the classes ended last week.',
						'Please register in advance if you want to join.',
						'Computers are sold on the second floor.'
					],
					optionsKo: [
						'센터는 30년 전에 지어졌습니다.',
						'모든 수업은 지난주에 끝났습니다.',
						'참가하려면 미리 등록해 주세요.',
						'컴퓨터는 2층에서 판매합니다.'
					],
					answer: 2,
					why: '앞 문장에서 there are only 20 seats(자리가 20석뿐)라고 했습니다. 자리가 적으니 미리 등록하라는 (C)가 이어집니다. 다음 문단의 To sign up(신청하려면)과도 연결됩니다.'
				},
				{
					id: 'd22-16',
					options: ['which', 'whose', 'they', 'who'],
					answer: 3,
					why: '빈칸 앞의 Residents(주민)는 사람이고, 빈칸 뒤에 동사 are가 바로 옵니다. 사람을 꾸미는 주격 관계대명사 who가 정답입니다.',
					notes: [
						'사물을 꾸밈',
						'뒤에 명사가 필요함',
						'대명사 — 문장을 이어 줄 수 없음',
						'사람 + 주격 (정답)'
					]
				}
			],
			vocab: [
				['community center', '주민 센터'],
				['resident', '주민'],
				['at no cost', '무료로'],
				['in advance', '미리'],
				['sign up', '신청하다'],
				['be interested in', '~에 관심이 있다']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '회람',
			passages: [
				{
					kind: '회람',
					head: [
						['To', 'All employees'],
						['From', 'Hyunwoo Nam, Human Resources'],
						['Date', 'March 4'],
						['Subject', 'New ID cards']
					],
					body: [
						'From April 1, all employees will need a new ID card to enter the building. After March 31, the old cards will not work.',
						'New cards will be {1} at the security office from March 18 to March 22. The office is open from 9 A.M. to 5 P.M. Please bring your old card with {2}. {3}',
						'If you have any questions, please contact Ms. Seong, who is in {4} of the new card system.'
					],
					ko: [
						'4월 1일부터 모든 직원은 건물에 들어올 때 새 사원증이 필요합니다. 3월 31일이 지나면 기존 사원증은 쓸 수 없습니다.',
						'새 사원증은 3월 18일부터 3월 22일까지 보안실에서 발급합니다. 보안실은 오전 9시부터 오후 5시까지 엽니다. 기존 사원증을 가지고 오세요. 기존 사원증은 새 사원증을 받을 때 회수합니다.',
						'궁금한 점이 있으면 새 사원증 시스템을 맡고 있는 성 씨에게 연락해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd22-17',
					options: ['issue', 'issuing', 'issued', 'issues'],
					answer: 2,
					why: '새 사원증은 "발급되는" 대상입니다. will be 뒤에서 수동태를 만드는 과거분사 issued가 정답입니다.',
					notes: [
						'동사원형 — be 뒤에 올 수 없음',
						'-ing형 — 뒤에 목적어가 없음',
						'과거분사 (정답)',
						'현재 단수 동사 — be 뒤에 올 수 없음'
					]
				},
				{
					id: 'd22-18',
					options: ['you', 'your', 'yours', 'yourself'],
					answer: 0,
					why: '전치사 with 뒤는 목적격 자리입니다. bring ~ with you는 "~을 가지고 오다"라는 표현입니다.',
					notes: [
						'목적격 (정답)',
						'소유격 — 뒤에 명사가 필요함',
						'소유대명사 — "당신의 것"',
						'재귀대명사 — 이 표현에는 쓰지 않음'
					]
				},
				{
					id: 'd22-19',
					options: [
						'The cafeteria will serve lunch as usual.',
						'It will be collected when you receive the new one.',
						'Visitors enjoyed the tour of the building.',
						'The security office moved to another city.'
					],
					optionsKo: [
						'구내식당은 평소처럼 점심을 제공합니다.',
						'기존 사원증은 새 사원증을 받을 때 회수합니다.',
						'방문객들은 건물 견학을 즐겼습니다.',
						'보안실은 다른 도시로 이전했습니다.'
					],
					answer: 1,
					why: '앞 문장에서 your old card(기존 사원증)를 가져오라고 했습니다. (B)의 It은 기존 사원증을, the new one은 새 사원증을 가리킵니다. 가져온 사원증을 어떻게 하는지 설명하므로 흐름이 이어집니다.'
				},
				{
					id: 'd22-20',
					options: ['advance', 'cost', 'time', 'charge'],
					answer: 3,
					why: '빈칸 앞의 in, 뒤의 of와 짝이 되는 명사는 charge입니다. in charge of는 "~을 맡고 있는"이라는 표현입니다. 문의할 담당자를 알려 주는 문장과 뜻이 맞습니다.',
					notes: [
						'in advance(미리)에 쓰는 말',
						'at no cost(무료로)에 쓰는 말',
						'on time(제시간에)에 쓰는 말',
						'in charge of (정답)'
					]
				}
			],
			vocab: [
				['ID card', '사원증'],
				['issue', '발급하다'],
				['security office', '보안실'],
				['collect', '회수하다'],
				['in charge of', '~을 맡고 있는']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: 돌려 말하는 응답',
			blocks: [
				{
					type: 'p',
					text: '오늘은 질문에 바로 답하지 않는 응답을 복습합니다. 다섯 문제 모두 돌려 말하는 응답이 정답입니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						"**모른다** — I'm not sure. / I have no idea.",
						"**확인하겠다** — Let me check. / I'll find out.",
						"**아직 정해지지 않았다** — It hasn't been decided yet.",
						'**다른 사람에게 물어보라** — Ask Ms. Kim. / Mr. Lee would know.',
						'**상황 설명** — 사정을 말해 Yes / No를 대신합니다.',
						'의문사에 맞는 답이 없으면 **오답 두 개를 먼저 지웁니다.**'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd22-21',
			script: 'Who left this box at the front door?',
			options: ['Next to the door.', 'I have no idea.', 'Turn left at the light.'],
			answer: 1,
			ko: '누가 이 상자를 정문에 두고 갔나요?',
			optionsKo: ['문 옆에요.', '전혀 모르겠어요.', '신호등에서 왼쪽으로 도세요.'],
			why: '사람을 말하는 대신 "모르겠다"고 답한 (B)가 정답입니다.',
			notes: [
				'장소 — Where에 대한 답',
				'모른다는 응답 (정답)',
				'left(두고 갔다)와 철자가 같은 left(왼쪽)'
			],
			vocab: [
				['leave', '두고 가다'],
				['front door', '정문'],
				['have no idea', '전혀 모르다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd22-22',
			script: 'Do we have enough paper cups for the event?',
			options: [
				'Let me check the storage room.',
				'I would like a cup of tea.',
				'It was a big event.'
			],
			answer: 0,
			ko: '행사에 쓸 종이컵이 충분히 있나요?',
			optionsKo: ['창고를 확인해 볼게요.', '차 한 잔 마시고 싶어요.', '큰 행사였어요.'],
			why: 'Yes / No 대신 "창고를 확인해 보겠다"고 답한 (A)가 정답입니다.',
			notes: ['확인하겠다는 응답 (정답)', 'cup 반복 — 질문과 무관', 'event 반복 — 지난 일로 답함'],
			vocab: [
				['enough', '충분한'],
				['paper cup', '종이컵'],
				['storage room', '창고']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd22-23',
			script: 'Where will the new branch open?',
			options: ['In two months.', 'A branch manager.', "The location hasn't been chosen yet."],
			answer: 2,
			ko: '새 지점은 어디에 여나요?',
			optionsKo: ['두 달 뒤에요.', '지점장이요.', '장소는 아직 정해지지 않았어요.'],
			why: '장소를 말하는 대신 "아직 정해지지 않았다"고 답한 (C)가 정답입니다.',
			notes: [
				'시간 — When에 대한 답',
				'branch 반복 — 질문과 무관',
				'아직 정해지지 않았다는 응답 (정답)'
			],
			vocab: [
				['branch', '지점'],
				['location', '장소, 위치'],
				['choose', '고르다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd22-24',
			script: 'How do I request a parking permit?',
			options: ['Ms. Pyo at the front desk handles that.', 'A parking lot.', 'Last Thursday.'],
			answer: 0,
			ko: '주차 허가증은 어떻게 신청하나요?',
			optionsKo: ['안내 데스크의 표 씨가 그 일을 담당해요.', '주차장이요.', '지난 목요일에요.'],
			why: '방법을 말하는 대신 담당자를 알려 준 (A)가 정답입니다. 그 사람에게 물어보라는 뜻입니다.',
			notes: ['담당자를 알려 줌 (정답)', 'parking 반복 — 질문과 무관', '시간 — When에 대한 답'],
			vocab: [
				['request', '신청하다'],
				['parking permit', '주차 허가증'],
				['handle', '담당하다, 처리하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd22-25',
			script: 'Can you give me a ride to the station after work?',
			options: ['A train station.', 'Sorry, I took the bus today.', 'It works well.'],
			answer: 1,
			ko: '퇴근 후에 역까지 태워 줄 수 있나요?',
			optionsKo: ['기차역이요.', '미안해요, 오늘은 버스를 타고 왔어요.', '잘 작동해요.'],
			why: 'No 대신 "오늘은 버스를 타고 왔다"고 사정을 말해 태워 줄 수 없다는 뜻을 전한 (B)가 정답입니다.',
			notes: [
				'station 반복 — 질문과 무관',
				'상황 설명으로 거절 (정답)',
				'work(일)와 철자가 같은 work(작동하다)'
			],
			vocab: [
				['give ~ a ride', '~를 태워 주다'],
				['take the bus', '버스를 타다'],
				['after work', '퇴근 후에']
			]
		}
	]
} satisfies DayContent;
