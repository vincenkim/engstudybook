import type { DayContent } from '../schema';

export default {
	goals: [
		'함께 다니는 동사와 명사의 짝을 익힌다',
		'이메일과 편지의 흐름을 알고 Part 6 빈칸을 푼다',
		'평서문에 어울리는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '동사와 명사는 짝으로 다닙니다',
			blocks: [
				{
					type: 'p',
					text: '영어에는 **늘 함께 다니는 동사와 명사**가 있습니다. "주문하다"는 ==place== an order, "결정하다"는 ==make== a decision입니다. 짝을 알면 문장을 다 해석하지 않아도 답이 보입니다.'
				},
				{
					type: 'box',
					title: '문제는 두 가지로 나옵니다',
					items: [
						'보기가 **동사 네 개**이면 빈칸 뒤의 명사를 봅니다. — ==reach== an agreement',
						'보기가 **명사 네 개**이면 빈칸 앞의 동사를 봅니다. — pay ==attention==',
						'동사와 명사 사이에 a, the, 형용사가 끼어도 짝은 그대로입니다. — make a **final** decision'
					]
				},
				{
					type: 'tip',
					text: '우리말로 옮겨서 고르면 틀립니다. "결정을 하다"는 do a decision이 아니라 **make a decision**입니다. 표현을 통째로 외우세요.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '자주 나오는 동사 + 명사 짝',
			blocks: [
				{
					type: 'table',
					head: ['표현', '뜻', '이렇게 씁니다'],
					rows: [
						['make a decision', '결정하다', 'make a final decision'],
						['make a payment', '결제하다', 'make a payment online'],
						['take a break', '쉬다', 'take a short break'],
						['take notes', '메모하다', 'take notes in class'],
						['take place', '(행사가) 열리다', 'take place on Friday'],
						['place an order', '주문하다', 'place an order by phone'],
						['pay attention to', '~에 주의를 기울이다', 'pay attention to the rules'],
						['meet the needs', '요구를 충족하다', 'meet the needs of customers']
					]
				},
				{
					type: 'table',
					head: ['표현', '뜻', '이렇게 씁니다'],
					rows: [
						['attend a meeting', '회의에 참석하다', 'attend a seminar'],
						['hold a meeting', '회의를 열다', 'hold an event'],
						['give a presentation', '발표하다', 'give a speech'],
						['sign a contract', '계약서에 서명하다', 'sign a form'],
						['reach an agreement', '합의에 이르다', 'reach a final agreement'],
						['conduct a survey', '설문 조사를 하다', 'conduct an interview'],
						['leave a message', '메시지를 남기다', 'leave a message for Ms. Lee'],
						['play a role', '역할을 하다', 'play an important role']
					]
				},
				{
					type: 'tip',
					text: '**attend**와 **reach**는 뒤에 전치사 없이 바로 명사가 옵니다. participate **in**, arrive **at**과 구별하세요.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Shin will ------- a presentation on the new product tomorrow.',
			options: ['say', 'speak', 'give', 'tell'],
			answer: 2,
			ko: '신 씨는 내일 신제품에 관해 발표할 것입니다.',
			steps: [
				'보기가 모두 동사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 뒤의 명사는 **a presentation**(발표)입니다. 이 명사와 짝이 되는 동사를 찾습니다.',
				'"발표하다"는 **give** a presentation입니다. say, speak, tell은 모두 "말하다"라는 뜻이지만 presentation과 함께 쓰지 않습니다.',
				'정답은 (C) **give**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Our department holds a ------- every Monday to share weekly plans.',
			options: ['decision', 'meeting', 'break', 'attention'],
			answer: 1,
			ko: '우리 부서는 주간 계획을 공유하기 위해 매주 월요일에 회의를 엽니다.',
			steps: [
				'보기가 모두 명사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 앞의 동사는 **holds**입니다. hold와 짝이 되는 명사를 찾습니다. hold a meeting은 "회의를 열다"입니다.',
				'나머지는 짝이 되는 동사가 다릅니다. make a decision, take a break, pay attention.',
				'계획을 공유한다(to share weekly plans)는 내용과도 맞습니다. 정답은 (B) **meeting**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-01',
			text: 'The directors will ------- a final decision on the new office next week.',
			options: ['do', 'make', 'say', 'put'],
			answer: 1,
			ko: '이사들은 다음 주에 새 사무실에 관해 최종 결정을 내릴 것입니다.',
			why: '빈칸 뒤의 명사 decision과 짝이 되는 동사는 make입니다. make a decision은 "결정하다"입니다.',
			notes: ['하다 — decision과 함께 쓰지 않음', 'make a decision (정답)', '말하다', '놓다'],
			vocab: [
				['director', '이사'],
				['make a decision', '결정하다'],
				['final', '최종의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-02',
			text: 'You can make a ------- by credit card or by bank transfer.',
			options: ['payment', 'meeting', 'survey', 'break'],
			answer: 0,
			ko: '신용카드나 계좌 이체로 결제할 수 있습니다.',
			why: '빈칸 앞의 동사 make와 짝이 되고, 신용카드(credit card)로 하는 것은 payment입니다. make a payment는 "결제하다"입니다.',
			notes: ['결제 (정답)', '회의', '설문 조사', '휴식'],
			vocab: [
				['make a payment', '결제하다'],
				['credit card', '신용카드'],
				['bank transfer', '계좌 이체']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-03',
			text: 'Every team leader must ------- the budget meeting on Thursday afternoon.',
			options: ['go', 'arrive', 'participate', 'attend'],
			answer: 3,
			ko: '모든 팀장은 목요일 오후 예산 회의에 참석해야 합니다.',
			why: '빈칸 뒤에 전치사 없이 명사 the budget meeting이 바로 옵니다. 전치사 없이 "~에 참석하다"로 쓰는 동사는 attend입니다.',
			notes: [
				'go to로 써야 함',
				'arrive at으로 써야 함',
				'participate in으로 써야 함',
				'attend a meeting (정답)'
			],
			vocab: [
				['team leader', '팀장'],
				['attend a meeting', '회의에 참석하다'],
				['budget', '예산']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-04',
			text: 'Ms. Bae always takes ------- during meetings and shares them with her team.',
			options: ['needs', 'agreements', 'notes', 'presentations'],
			answer: 2,
			ko: '배 씨는 회의 중에 항상 메모를 하고 그것을 팀원들과 공유합니다.',
			why: '빈칸 앞의 동사 takes와 짝이 되는 명사는 notes입니다. take notes는 "메모하다"입니다.',
			notes: ['요구 — meet과 짝', '합의 — reach와 짝', '메모 (정답)', '발표 — give와 짝'],
			vocab: [
				['take notes', '메모하다'],
				['during', '~ 동안'],
				['share', '공유하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-05',
			text: 'Mr. Tanaka ------- an order for twenty office chairs this morning.',
			options: ['attended', 'reached', 'placed', 'conducted'],
			answer: 2,
			ko: '다나카 씨는 오늘 아침 사무용 의자 20개를 주문했습니다.',
			why: '빈칸 뒤의 명사 an order와 짝이 되는 동사는 place입니다. place an order는 "주문하다"입니다.',
			notes: [
				'참석했다 — meeting과 짝',
				'이르렀다 — agreement와 짝',
				'place an order (정답)',
				'실시했다 — survey와 짝'
			],
			vocab: [
				['place an order', '주문하다'],
				['office chair', '사무용 의자']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-06',
			text: 'Both companies will sign a two-year ------- at the meeting tomorrow.',
			options: ['contract', 'decision', 'attention', 'break'],
			answer: 0,
			ko: '두 회사는 내일 회의에서 2년 계약서에 서명할 것입니다.',
			why: '빈칸 앞의 동사 sign(서명하다)과 짝이 되는 명사는 contract입니다. sign a contract는 "계약서에 서명하다"입니다.',
			notes: ['계약서 (정답)', '결정 — make와 짝', '주의 — pay와 짝', '휴식 — take와 짝'],
			vocab: [
				['both', '둘 다'],
				['sign a contract', '계약서에 서명하다'],
				['two-year', '2년짜리의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-07',
			text: 'The buyer and the seller finally ------- an agreement on the price.',
			options: ['arrived', 'reached', 'paid', 'attended'],
			answer: 1,
			ko: '구매자와 판매자는 마침내 가격에 합의했습니다.',
			why: '빈칸 뒤의 명사 an agreement와 짝이 되는 동사는 reach입니다. reach an agreement는 "합의에 이르다"입니다.',
			notes: [
				'arrive at으로 써야 함',
				'reach an agreement (정답)',
				'지불했다',
				'참석했다 — meeting과 짝'
			],
			vocab: [
				['buyer', '구매자'],
				['seller', '판매자'],
				['reach an agreement', '합의에 이르다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-08',
			text: 'Please pay close ------- to the safety instructions before using the machine.',
			options: ['decision', 'agreement', 'presentation', 'attention'],
			answer: 3,
			ko: '기계를 사용하기 전에 안전 수칙에 각별히 주의를 기울여 주세요.',
			why: '빈칸 앞의 동사 pay, 뒤의 전치사 to와 짝이 되는 명사는 attention입니다. pay attention to는 "~에 주의를 기울이다"입니다.',
			notes: ['결정 — make와 짝', '합의 — reach와 짝', '발표 — give와 짝', '주의 (정답)'],
			vocab: [
				['pay attention to', '~에 주의를 기울이다'],
				['safety instructions', '안전 수칙'],
				['machine', '기계']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-09',
			text: 'The restaurant ------- a survey to find out what its customers want.',
			options: ['signed', 'paid', 'arrived', 'conducted'],
			answer: 3,
			ko: '그 식당은 고객이 무엇을 원하는지 알아보려고 설문 조사를 했습니다.',
			why: '빈칸 뒤의 명사 a survey와 짝이 되는 동사는 conduct입니다. conduct a survey는 "설문 조사를 하다"입니다.',
			notes: [
				'서명했다 — contract와 짝',
				'지불했다',
				'도착했다 — 뒤에 명사가 바로 올 수 없음',
				'conduct a survey (정답)'
			],
			vocab: [
				['conduct a survey', '설문 조사를 하다'],
				['find out', '알아내다'],
				['customer', '고객']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-10',
			text: 'After working for three hours, Mr. Lim took a short ------- for coffee.',
			options: ['agreement', 'break', 'attention', 'presentation'],
			answer: 1,
			ko: '세 시간 동안 일한 뒤 임 씨는 커피를 마시며 잠깐 쉬었습니다.',
			why: '빈칸 앞의 동사 took과 짝이 되는 명사는 break입니다. take a break는 "쉬다"입니다. 세 시간 일한 뒤라는 내용과도 맞습니다.',
			notes: ['합의 — reach와 짝', '휴식 (정답)', '주의 — pay와 짝', '발표 — give와 짝'],
			vocab: [
				['take a break', '쉬다'],
				['short', '짧은']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-11',
			text: 'The opening ceremony will ------- place in the main hall at 10 A.M.',
			options: ['take', 'make', 'do', 'get'],
			answer: 0,
			ko: '개막식은 오전 10시에 대강당에서 열립니다.',
			why: '빈칸 뒤의 place와 짝이 되는 동사는 take입니다. take place는 "(행사가) 열리다"입니다.',
			notes: ['take place (정답)', '만들다', '하다', '얻다'],
			vocab: [
				['opening ceremony', '개막식'],
				['take place', '열리다'],
				['main hall', '대강당']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd21-12',
			text: 'The new delivery service was designed to meet the ------- of busy customers.',
			options: ['breaks', 'notes', 'needs', 'meetings'],
			answer: 2,
			ko: '새 배달 서비스는 바쁜 고객의 요구를 충족하도록 만들어졌습니다.',
			why: '빈칸 앞의 동사 meet과 짝이 되는 명사는 needs입니다. meet the needs of는 "~의 요구를 충족하다"입니다.',
			notes: ['휴식 — take와 짝', '메모 — take와 짝', '요구 (정답)', '회의 — hold, attend와 짝'],
			vocab: [
				['delivery service', '배달 서비스'],
				['be designed to', '~하도록 만들어지다'],
				['meet the needs', '요구를 충족하다']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '이메일과 편지는 흐름이 정해져 있습니다',
			blocks: [
				{
					type: 'p',
					text: '이메일과 편지는 **정해진 순서**로 씁니다. 순서를 알면 빈칸에 어떤 말이 올지 미리 짐작할 수 있습니다.'
				},
				{
					type: 'table',
					head: ['순서', '하는 일', '자주 쓰는 표현'],
					rows: [
						['인사', '받는 사람을 부릅니다.', 'Dear Mr. Kim,'],
						['쓴 목적', '왜 쓰는지 밝힙니다.', 'I am writing to ~ / Thank you for ~'],
						['세부 내용', '날짜, 장소, 이유를 알립니다.', 'The event will take place on ~'],
						['요청', '읽는 사람이 할 일을 말합니다.', 'Please ~ / Could you ~?'],
						['맺음말', '끝인사를 합니다.', 'I look forward to ~ / Sincerely,']
					]
				},
				{
					type: 'box',
					title: '자주 쓰는 맺음 표현',
					items: [
						'I look forward to **hearing** from you. — 답장을 기다리겠습니다. (to 뒤에 -ing)',
						'Please let me know if you have any questions. — 궁금한 점이 있으면 알려 주세요.',
						'Thank you for your understanding. — 양해해 주셔서 감사합니다.',
						'Sincerely, / Best regards, — 이름 앞에 쓰는 끝인사'
					]
				},
				{
					type: 'tip',
					text: '문장 삽입 빈칸은 **위치**를 먼저 봅니다. 글의 첫머리에는 쓴 목적이, 끝에는 요청이나 맺음 표현이 자주 들어갑니다.'
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
						['To', 'Peter Ross'],
						['From', 'Soyeon Jang, Daon Office Supplies'],
						['Subject', 'Your order']
					],
					body: [
						'Dear Mr. Ross,',
						'Thank you for placing an order with Daon Office Supplies. I am writing {1} you about a change in the delivery date.',
						'The desk lamps you ordered are currently out of stock. {2} We will send your order as soon as they come in.',
						'I am very sorry about this delay. If you would like to {3} your order, please let me know by Friday. Otherwise, the items {4} to your office next week.',
						'Sincerely,',
						'Soyeon Jang'
					],
					ko: [
						'로스 씨께,',
						'다온 사무용품에 주문해 주셔서 감사합니다. 배송 날짜가 바뀌어 알려 드리려고 이메일을 씁니다.',
						'주문하신 책상용 스탠드는 지금 재고가 없습니다. 새 제품은 월요일에 저희 창고에 도착합니다. 제품이 들어오는 대로 주문품을 보내 드리겠습니다.',
						'늦어져서 정말 죄송합니다. 주문을 취소하고 싶으시면 금요일까지 알려 주세요. 그렇지 않으면 물건은 다음 주에 사무실로 배달됩니다.',
						'장소연 드림'
					]
				}
			],
			questions: [
				{
					id: 'd21-13',
					options: ['inform', 'to inform', 'informed', 'information'],
					answer: 1,
					why: 'I am writing만으로 문장이 완성됩니다. 뒤에는 "알려 드리려고"라는 목적을 나타내는 to부정사 to inform이 옵니다. I am writing to inform you는 이메일 첫머리에 자주 쓰는 표현입니다.',
					notes: [
						'동사원형 — am writing 뒤에 동사가 또 올 수 없음',
						'to부정사 (정답)',
						'과거형 — 동사가 또 올 수 없음',
						'명사'
					]
				},
				{
					id: 'd21-14',
					options: [
						'New ones will arrive at our warehouse on Monday.',
						'Our store opened ten years ago.',
						'The lamps were delivered to your office yesterday.',
						'Our catalog has more than 500 items.'
					],
					optionsKo: [
						'새 제품은 월요일에 저희 창고에 도착합니다.',
						'저희 매장은 10년 전에 문을 열었습니다.',
						'스탠드는 어제 귀하의 사무실로 배달되었습니다.',
						'저희 카탈로그에는 500개가 넘는 제품이 있습니다.'
					],
					answer: 0,
					why: '앞 문장에서 스탠드가 out of stock(재고 없음)이라고 했고, 뒤 문장에 as soon as they come in(들어오는 대로)이 있습니다. they는 새로 들어올 제품을 가리키므로, 새 제품이 월요일에 도착한다는 (A)가 정답입니다.'
				},
				{
					id: 'd21-15',
					options: ['place', 'attend', 'reach', 'cancel'],
					answer: 3,
					why: '뒤 문장이 Otherwise(그렇지 않으면)로 시작해 물건을 다음 주에 배달한다고 합니다. 빈칸은 배달을 원하지 않는 경우이므로 cancel(취소하다)이 정답입니다.',
					notes: ['(주문을) 하다 — 주문은 이미 했음', '참석하다', '이르다', '취소하다 (정답)']
				},
				{
					id: 'd21-16',
					options: ['will deliver', 'delivered', 'will be delivered', 'delivering'],
					answer: 2,
					why: '주어 the items(물건)는 "배달되는" 대상이고, 뒤에 next week(다음 주)가 있습니다. 미래 시제 수동태 will be delivered가 정답입니다.',
					notes: [
						'미래 능동 — 뒤에 목적어가 없음',
						'과거 — next week와 맞지 않음',
						'미래 수동 (정답)',
						'-ing형 — 동사가 될 수 없음'
					]
				}
			],
			vocab: [
				['place an order', '주문하다'],
				['inform', '알리다'],
				['out of stock', '재고가 없는'],
				['warehouse', '창고'],
				['otherwise', '그렇지 않으면'],
				['deliver', '배달하다']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '편지',
			passages: [
				{
					kind: '편지',
					body: [
						'Dear Ms. Novak,',
						'I am pleased to invite you to the Small Business Forum at the Pine Hill Convention Center on October 12. More than 300 store owners {1} the forum every year.',
						'We would like you to {2} a presentation on online marketing. Your talk would be about 40 minutes long. We will pay for your hotel room and train tickets.',
						'A schedule of the forum is {3} with this letter. Please send us your answer by August 31. {4}',
						'Sincerely,',
						'Junho Baek, Event Manager'
					],
					ko: [
						'노박 씨께,',
						'10월 12일 파인힐 컨벤션 센터에서 열리는 소상공인 포럼에 귀하를 초대하게 되어 기쁩니다. 매년 300명이 넘는 매장 주인이 포럼에 참석합니다.',
						'귀하께서 온라인 마케팅에 관해 발표해 주시기를 바랍니다. 강연 시간은 약 40분입니다. 호텔 객실과 기차표 비용은 저희가 부담하겠습니다.',
						'포럼 일정표를 이 편지에 동봉했습니다. 8월 31일까지 답을 보내 주세요. 답장을 기다리겠습니다.',
						'행사 담당자 백준호 드림'
					]
				}
			],
			questions: [
				{
					id: 'd21-17',
					options: ['attend', 'attends', 'attending', 'to attend'],
					answer: 0,
					why: '주어가 복수 More than 300 store owners이고, 문장 끝에 every year(매년)가 있습니다. 반복되는 일을 나타내는 현재 시제의 복수 동사 attend가 정답입니다.',
					notes: [
						'현재 복수 동사 (정답)',
						'현재 단수 동사 — 주어가 복수',
						'-ing형 — 동사가 될 수 없음',
						'to부정사 — 동사가 될 수 없음'
					]
				},
				{
					id: 'd21-18',
					options: ['take', 'reach', 'give', 'pay'],
					answer: 2,
					why: '빈칸 뒤의 명사 a presentation과 짝이 되는 동사는 give입니다. 뒤 문장의 Your talk(귀하의 강연)와도 이어집니다.',
					notes: [
						'take a break, take notes의 짝',
						'reach an agreement의 짝',
						'give a presentation (정답)',
						'pay attention의 짝'
					]
				},
				{
					id: 'd21-19',
					options: ['enclose', 'enclosed', 'enclosing', 'encloses'],
					answer: 1,
					why: '일정표는 편지에 "동봉되는" 대상입니다. is 뒤에서 수동태를 만드는 과거분사 enclosed가 정답입니다. be enclosed with는 "~에 동봉되다"입니다.',
					notes: [
						'동사원형 — is 뒤에 올 수 없음',
						'과거분사 (정답)',
						'-ing형 — 뒤에 목적어가 없음',
						'현재 단수 동사 — is 뒤에 올 수 없음'
					]
				},
				{
					id: 'd21-20',
					options: [
						'Thank you for speaking at the forum last week.',
						'The hotel is closed for repairs this month.',
						'Your order will arrive within three days.',
						'I look forward to hearing from you.'
					],
					optionsKo: [
						'지난주 포럼에서 강연해 주셔서 감사합니다.',
						'그 호텔은 이번 달에 수리 때문에 문을 닫습니다.',
						'주문하신 물건은 3일 안에 도착합니다.',
						'답장을 기다리겠습니다.'
					],
					answer: 3,
					why: '빈칸은 편지의 맨 끝, Sincerely 바로 앞입니다. 앞 문장에서 Please send us your answer by August 31(8월 31일까지 답을 보내 달라)라고 했으므로, 답장을 기다리겠다는 맺음 표현 (D)가 정답입니다. 포럼은 아직 열리지 않았으므로 (A)는 맞지 않습니다.'
				}
			],
			vocab: [
				['invite', '초대하다'],
				['store owner', '매장 주인'],
				['give a presentation', '발표하다'],
				['be enclosed with', '~에 동봉되다'],
				['look forward to -ing', '~하기를 기다리다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: 평서문',
			blocks: [
				{
					type: 'p',
					text: '오늘은 평서문을 복습합니다. 질문이 아니라 문제, 의견, 소식을 말하는 문장입니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'의문사가 없으므로 **문장 전체의 뜻**을 들어야 합니다.',
						'**문제를 알리는 말** → 해결책, 도와주겠다는 말',
						'**의견** → 동의하는 말 (I agree. / So do I.)',
						"**소식** → 반응하는 말 (That's great news.)",
						'들린 단어를 반복하거나 발음이 비슷한 단어를 쓴 보기를 먼저 지웁니다.'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd21-21',
			script: 'The projector in room two is not turning on.',
			options: ['A group project.', 'It is my turn.', 'Let me take a look at it.'],
			answer: 2,
			ko: '2번 회의실 프로젝터가 켜지지 않아요.',
			optionsKo: ['조별 과제요.', '제 차례예요.', '제가 한번 볼게요.'],
			why: '문제를 알리는 말에 살펴보겠다고 답한 (C)가 정답입니다.',
			notes: [
				'projector와 비슷한 project',
				'turn(켜지다)과 철자가 같은 turn(차례)',
				'해결하겠다는 응답 (정답)'
			],
			vocab: [
				['projector', '프로젝터'],
				['turn on', '켜지다'],
				['take a look at', '~을 살펴보다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd21-22',
			script: 'I think we should hire more staff for the holiday season.',
			options: ['I agree. It gets very busy then.', 'A higher price.', 'On the holiday.'],
			answer: 0,
			ko: '연휴 기간에 대비해 직원을 더 뽑아야 할 것 같아요.',
			optionsKo: ['동의해요. 그때는 정말 바쁘니까요.', '더 높은 가격이요.', '휴일에요.'],
			why: '의견에 동의한 (A)가 정답입니다.',
			notes: ['동의 (정답)', 'hire와 발음이 비슷한 higher', 'holiday 반복 — 말한 내용과 무관'],
			vocab: [
				['hire', '채용하다'],
				['staff', '직원'],
				['holiday season', '연휴 기간']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd21-23',
			script: 'The client really liked our new design.',
			options: ['A design school.', "That's good to hear.", 'I like Italian food.'],
			answer: 1,
			ko: '고객이 우리의 새 디자인을 정말 마음에 들어 했어요.',
			optionsKo: ['디자인 학교요.', '반가운 소식이네요.', '저는 이탈리아 음식을 좋아해요.'],
			why: '좋은 소식에 반응한 (B)가 정답입니다.',
			notes: [
				'design 반복 — 말한 내용과 무관',
				'소식에 대한 반응 (정답)',
				'like 반복 — 말한 내용과 무관'
			],
			vocab: [
				['client', '고객'],
				["That's good to hear", '반가운 소식이네요']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd21-24',
			script: 'The morning train to Daejeon is sold out.',
			options: ["Then let's take a later one.", 'A training session.', 'I sold my old car.'],
			answer: 0,
			ko: '대전행 오전 기차는 매진됐어요.',
			optionsKo: ['그럼 더 늦은 기차를 탑시다.', '교육 과정이요.', '저는 예전 차를 팔았어요.'],
			why: '표가 없다는 말에 대안을 제시한 (A)가 정답입니다.',
			notes: [
				'대안 제시 (정답)',
				'train과 비슷한 training',
				'sold out(매진된)과 비슷한 sold(팔았다)'
			],
			vocab: [
				['sold out', '매진된'],
				['later', '더 늦은'],
				['training session', '교육 과정']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd21-25',
			script: 'I forgot to bring my laptop charger.',
			options: ['Free of charge.', 'Yes, I brought lunch.', 'You can use mine.'],
			answer: 2,
			ko: '노트북 충전기를 깜빡하고 안 가져왔어요.',
			optionsKo: ['무료예요.', '네, 점심을 싸 왔어요.', '제 것을 쓰세요.'],
			why: '충전기가 없다는 말에 자기 것을 쓰라고 한 (C)가 정답입니다.',
			notes: [
				'charger와 비슷한 charge',
				'질문이 아닌데 Yes로 답함, bring의 과거형 brought',
				'해결책 (정답)'
			],
			vocab: [
				['forget to', '~하는 것을 잊다'],
				['charger', '충전기'],
				['free of charge', '무료로']
			]
		}
	]
} satisfies DayContent;
