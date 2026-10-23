import type { DayContent } from '../schema';

export default {
	goals: [
		'어휘 문제를 알아보고 짝이 되는 말로 푼다',
		'업무와 구매에 자주 나오는 명사를 익힌다',
		'Part 6의 문제 형식을 알고 문법 빈칸을 푼다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '어휘 문제는 이렇게 풉니다',
			blocks: [
				{
					type: 'p',
					text: '보기 네 개가 **같은 품사인데 뜻이 서로 다르면** 어휘 문제입니다. 2026년 2월 정기시험을 분석한 학원 총평에 따르면 Part 5·6의 46문항 중 15문항이 어휘 문제였습니다.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'보기를 보고 어휘 문제인지 확인합니다.',
						'빈칸 **앞뒤의 짝**을 봅니다. 동사 + 명사, 형용사 + 명사는 함께 다니는 짝이 있습니다. — make an ==appointment==, meet the ==deadline==',
						'짝으로 풀리지 않으면 문장 전체를 해석해 뜻이 맞는 것을 고릅니다.'
					]
				},
				{
					type: 'tip',
					text: '단어는 뜻만 외우지 말고 **함께 쓰는 동사**와 묶어서 외우세요. 시험에서는 그 짝이 그대로 나옵니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '자주 나오는 명사',
			blocks: [
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['appointment', '(병원·상담) 예약', 'make an appointment'],
						['reservation', '(식당·호텔) 예약', 'make a reservation'],
						['deadline', '마감', 'meet the deadline'],
						['experience', '경험, 경력', 'work experience'],
						['opportunity', '기회', 'a great opportunity'],
						['requirement', '요건', 'meet the requirements'],
						['increase', '증가', 'an increase in sales']
					]
				},
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['receipt', '영수증', 'keep the receipt'],
						['refund', '환불', 'request a refund'],
						['invoice', '청구서', 'send an invoice'],
						['estimate', '견적', 'a price estimate'],
						['warranty', '보증', 'a two-year warranty'],
						['policy', '정책, 규정', 'return policy'],
						['shipment', '배송, 배송품', 'a delay in shipment']
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: "Please send the ------- for last month's order to our accounting team.",
			options: ['opportunity', 'experience', 'invoice', 'appointment'],
			answer: 2,
			ko: '지난달 주문에 대한 청구서를 저희 회계팀으로 보내 주세요.',
			steps: [
				'보기가 모두 명사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				"빈칸 앞 동사는 **send**이고, 뒤에 for last month's order(지난달 주문에 대한)와 accounting team(회계팀)이 있습니다.",
				'주문에 대해 회계팀으로 보내는 것은 **invoice**(청구서)입니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Do made a dinner ------- at the hotel restaurant.',
			options: ['reservation', 'refund', 'policy', 'shipment'],
			answer: 0,
			ko: '도 씨는 호텔 식당에 저녁 식사를 예약했습니다.',
			steps: [
				'보기가 모두 명사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 앞 동사 **made**와 짝이 되는 명사를 찾습니다. make a reservation은 "예약하다"입니다.',
				'식당과도 뜻이 맞습니다. 정답은 (A) **reservation**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-01',
			text: 'Please keep your ------- in case you need to return the item.',
			options: ['schedule', 'receipt', 'estimate', 'deadline'],
			answer: 1,
			ko: '물건을 반품해야 할 경우에 대비해 영수증을 보관하세요.',
			why: '반품할 때 필요한 것은 영수증입니다. keep the receipt는 "영수증을 보관하다"입니다.',
			notes: ['일정', '영수증 (정답)', '견적', '마감'],
			vocab: [
				['receipt', '영수증'],
				['in case', '~할 경우에 대비해'],
				['return', '반품하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-02',
			text: 'Mr. Hong called the clinic to make an ------- for Friday.',
			options: ['appointment', 'opportunity', 'experience', 'increase'],
			answer: 0,
			ko: '홍 씨는 금요일 진료를 예약하려고 병원에 전화했습니다.',
			why: 'make an appointment는 "(병원·상담을) 예약하다"입니다. 병원(clinic)과 뜻이 맞습니다.',
			notes: ['예약 (정답)', '기회', '경험', '증가'],
			vocab: [
				['make an appointment', '예약하다'],
				['clinic', '병원, 진료소']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-03',
			text: 'The marketing team worked overtime to meet the -------.',
			options: ['refund', 'warranty', 'receipt', 'deadline'],
			answer: 3,
			ko: '마케팅팀은 마감을 맞추기 위해 초과 근무를 했습니다.',
			why: 'meet the deadline은 "마감을 맞추다"입니다. 초과 근무를 한 이유로 알맞습니다.',
			notes: ['환불', '보증', '영수증', '마감 (정답)'],
			vocab: [
				['work overtime', '초과 근무를 하다'],
				['meet the deadline', '마감을 맞추다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-04',
			text: 'The store has a strict return -------.',
			options: ['purchase', 'shipment', 'policy', 'opportunity'],
			answer: 2,
			ko: '그 매장은 반품 규정이 엄격합니다.',
			why: 'return policy는 "반품 규정"입니다. strict(엄격한)와도 어울립니다.',
			notes: ['구매', '배송', '규정 (정답)', '기회'],
			vocab: [
				['strict', '엄격한'],
				['return policy', '반품 규정']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-05',
			text: 'This laptop comes with a two-year -------.',
			options: ['warranty', 'estimate', 'appointment', 'deadline'],
			answer: 0,
			ko: '이 노트북에는 2년 보증이 딸려 있습니다.',
			why: '제품에 딸려 오는 것은 보증입니다. a two-year warranty는 "2년 보증"입니다.',
			notes: ['보증 (정답)', '견적', '예약', '마감'],
			vocab: [
				['come with', '~이 딸려 있다'],
				['warranty', '보증']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-06',
			text: 'Customers can request a full ------- within 14 days.',
			options: ['requirement', 'shipment', 'refund', 'experience'],
			answer: 2,
			ko: '고객은 14일 이내에 전액 환불을 요청할 수 있습니다.',
			why: 'request a refund는 "환불을 요청하다"이고, a full refund는 "전액 환불"입니다.',
			notes: ['요건', '배송', '환불 (정답)', '경험'],
			vocab: [
				['request', '요청하다'],
				['full refund', '전액 환불'],
				['within', '~ 이내에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-07',
			text: 'The contractor gave us a price ------- for the repair work.',
			options: ['appointment', 'estimate', 'experience', 'deadline'],
			answer: 1,
			ko: '시공업자는 수리 작업에 대한 가격 견적을 주었습니다.',
			why: 'a price estimate는 "가격 견적"입니다. 작업 전에 업자가 주는 것으로 알맞습니다.',
			notes: ['예약', '견적 (정답)', '경험', '마감'],
			vocab: [
				['contractor', '시공업자'],
				['price estimate', '가격 견적'],
				['repair work', '수리 작업']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-08',
			text: 'Three years of sales ------- is required for this position.',
			options: ['estimate', 'invoice', 'shipment', 'experience'],
			answer: 3,
			ko: '이 직책에는 3년의 영업 경력이 필요합니다.',
			why: 'three years of ~ experience는 "~년의 경력"입니다. 채용 요건으로 알맞습니다.',
			notes: ['견적', '청구서', '배송', '경력 (정답)'],
			vocab: [
				['sales experience', '영업 경력'],
				['be required', '필요하다'],
				['position', '직책']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-09',
			text: 'Due to bad weather, there will be a delay in the ------- of your order.',
			options: ['shipment', 'appointment', 'requirement', 'warranty'],
			answer: 0,
			ko: '악천후로 인해 주문하신 물건의 배송이 지연될 예정입니다.',
			why: 'a delay in the shipment는 "배송 지연"입니다. 날씨 때문에 늦어지는 것으로 알맞습니다.',
			notes: ['배송 (정답)', '예약', '요건', '보증'],
			vocab: [
				['due to', '~ 때문에'],
				['delay', '지연'],
				['shipment', '배송']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-10',
			text: 'The seminar is a great ------- to meet people in your field.',
			options: ['invoice', 'refund', 'opportunity', 'estimate'],
			answer: 2,
			ko: '그 세미나는 같은 분야의 사람들을 만날 좋은 기회입니다.',
			why: 'an opportunity to + 동사원형은 "~할 기회"입니다.',
			notes: ['청구서', '환불', '기회 (정답)', '견적'],
			vocab: [
				['opportunity to', '~할 기회'],
				['field', '분야']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-11',
			text: 'There was a sharp ------- in online sales last month.',
			options: ['appointment', 'policy', 'receipt', 'increase'],
			answer: 3,
			ko: '지난달에 온라인 매출이 급격히 증가했습니다.',
			why: 'an increase in은 "~의 증가"입니다. sharp(급격한)와도 어울립니다.',
			notes: ['예약', '규정', '영수증', '증가 (정답)'],
			vocab: [
				['sharp', '급격한'],
				['an increase in', '~의 증가'],
				['online sales', '온라인 매출']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd17-12',
			text: 'Applicants must meet all of the job -------.',
			options: ['shipments', 'requirements', 'refunds', 'receipts'],
			answer: 1,
			ko: '지원자는 직무 요건을 모두 충족해야 합니다.',
			why: 'meet the requirements는 "요건을 충족하다"입니다. 지원자(applicants)와 뜻이 맞습니다.',
			notes: ['배송품', '요건 (정답)', '환불', '영수증'],
			vocab: [
				['applicant', '지원자'],
				['meet the requirements', '요건을 충족하다']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 6는 이런 문제입니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 6는 **지문 하나에 빈칸이 네 개** 있는 문제입니다. 지문 네 개, 모두 16문항이 나옵니다. 이메일, 공지, 광고 같은 짧은 글이 나옵니다.'
				},
				{
					type: 'table',
					head: ['빈칸 종류', '푸는 법'],
					rows: [
						['품사·동사 모양', 'Part 5처럼 빈칸 앞뒤만 보고 풉니다.'],
						['시제', '빈칸이 있는 문장만으로는 부족합니다. **앞뒤 문장**의 시점을 봅니다.'],
						['대명사', '**앞 문장**에서 가리키는 대상을 찾습니다.'],
						['어휘', '글 전체의 흐름에 맞는 뜻을 고릅니다.']
					]
				},
				{
					type: 'tip',
					text: '이 프로그램에서는 빈칸이 (1), (2)처럼 번호로 표시됩니다. 답을 고르면 지문의 빈칸에 정답이 채워집니다.'
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
						['To', 'All staff'],
						['From', 'Mina Seo, Office Manager'],
						['Subject', 'Office cleaning']
					],
					body: [
						'Dear staff,',
						'The carpets in our office will be cleaned this Saturday. The cleaning crew {1} at 9 A.M. and should finish by noon.',
						'Please remove all personal items from the floor before you leave on Friday. {2} left on the floor may be moved by the crew.',
						'The work will be done {3}, so the office will be ready on Monday morning. Thank you for your {4}.',
						'Mina Seo'
					],
					ko: [
						'직원 여러분께,',
						'이번 주 토요일에 사무실 카펫을 청소할 예정입니다. 청소 작업반은 오전 9시에 도착해 정오까지 끝낼 것입니다.',
						'금요일에 퇴근하기 전에 바닥에 있는 개인 물품을 모두 치워 주세요. 바닥에 남아 있는 물건은 작업반이 옮길 수 있습니다.',
						'작업은 빠르게 진행되므로 월요일 아침에는 사무실을 쓸 수 있습니다. 협조해 주셔서 감사합니다.',
						'서미나'
					]
				}
			],
			questions: [
				{
					id: 'd17-13',
					options: ['arrived', 'has arrived', 'will arrive', 'arriving'],
					answer: 2,
					why: '앞 문장에서 청소는 this Saturday(이번 주 토요일)에 한다고 했습니다. 앞으로의 일이므로 미래 시제 will arrive가 정답입니다.',
					notes: ['과거', '현재완료', '미래 (정답)', '-ing형 — 동사가 될 수 없음']
				},
				{
					id: 'd17-14',
					options: ['Anyone', 'Anything', 'They', 'Its'],
					answer: 1,
					why: '앞 문장의 personal items(개인 물품)를 받아 "바닥에 남아 있는 것은 무엇이든"이라는 뜻이 되어야 합니다. 사물을 가리키는 Anything이 정답입니다.',
					notes: [
						'누구든 — 사람을 가리킴',
						'무엇이든 (정답)',
						'주격 — 뒤의 left가 꾸밀 수 없음',
						'소유격 — 뒤에 명사가 필요함'
					]
				},
				{
					id: 'd17-15',
					options: ['quickly', 'quick', 'quickness', 'quicker'],
					answer: 0,
					why: 'The work will be done까지로 문장이 완성됩니다. 빼도 되는 자리이므로 부사 quickly가 정답입니다.',
					notes: ['부사 (정답)', '형용사', '명사', '형용사의 비교급']
				},
				{
					id: 'd17-16',
					options: ['reservation', 'estimate', 'experience', 'cooperation'],
					answer: 3,
					why: '물품을 치워 달라고 부탁한 뒤의 인사입니다. Thank you for your cooperation은 "협조해 주셔서 감사합니다"라는 표현입니다.',
					notes: ['예약', '견적', '경험', '협조 (정답)']
				}
			],
			vocab: [
				['cleaning crew', '청소 작업반'],
				['remove', '치우다'],
				['personal items', '개인 물품'],
				['cooperation', '협조']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'Greenfield Library — New Opening Hours',
					body: [
						'Starting March 1, Greenfield Library will be open until 9 P.M. on weekdays. Many visitors have asked for longer hours, {1} we are happy to make this change.',
						'The library will also add a new study room on the second floor. The room can be {2} online or at the front desk.',
						'Please note that the library will be closed on February 28 to prepare for these changes. We apologize for any {3}.',
						'For more {4}, please visit our Web site.'
					],
					ko: [
						'3월 1일부터 그린필드 도서관은 평일에 오후 9시까지 문을 엽니다. 많은 방문객이 더 긴 운영 시간을 요청하셔서 기쁜 마음으로 이렇게 변경합니다.',
						'도서관은 2층에 새 학습실도 마련합니다. 학습실은 온라인이나 안내 데스크에서 예약할 수 있습니다.',
						'이 변경을 준비하기 위해 2월 28일에는 도서관이 문을 닫으니 유의해 주세요. 불편을 드려 죄송합니다.',
						'자세한 정보는 저희 웹사이트를 방문해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd17-17',
					options: ['so', 'but', 'or', 'because'],
					answer: 0,
					why: '방문객이 요청한 것이 원인이고 운영 시간을 바꾸는 것이 결과입니다. 결과를 이끄는 so(그래서)가 정답입니다.',
					notes: ['그래서 (정답)', '그러나', '또는', '~ 때문에 — 원인과 결과가 뒤바뀜']
				},
				{
					id: 'd17-18',
					options: ['reserve', 'reserved', 'reserving', 'reservation'],
					answer: 1,
					why: '학습실은 "예약되는" 대상입니다. can be 뒤에서 수동태를 만드는 과거분사 reserved가 정답입니다.',
					notes: ['동사원형', '과거분사 (정답)', '-ing형', '명사']
				},
				{
					id: 'd17-19',
					options: ['experience', 'opportunity', 'inconvenience', 'increase'],
					answer: 2,
					why: '도서관이 하루 문을 닫는다고 알린 뒤의 사과입니다. We apologize for any inconvenience는 "불편을 드려 죄송합니다"라는 표현입니다.',
					notes: ['경험', '기회', '불편 (정답)', '증가']
				},
				{
					id: 'd17-20',
					options: ['inform', 'informed', 'informative', 'information'],
					answer: 3,
					why: '전치사 For와 형용사 more 뒤는 명사 자리입니다. For more information은 "자세한 정보는"이라는 표현입니다.',
					notes: ['동사', '과거형', '형용사', '명사 (정답)']
				}
			],
			vocab: [
				['starting', '~부터'],
				['ask for', '~을 요청하다'],
				['study room', '학습실'],
				['apologize for', '~에 대해 사과하다'],
				['inconvenience', '불편']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: Who · Where · When',
			blocks: [
				{
					type: 'p',
					text: '2단계에서는 매일 Part 2를 다섯 문제씩 복습합니다. 오늘은 Who, Where, When입니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'**Who** → 사람 이름, 직책, 부서',
						'**Where** → 장소, 위치, 물어볼 사람',
						'**When** → 시점, 기한',
						'의문사로 묻는 질문에 **Yes / No**로 시작하는 보기는 오답입니다.',
						'시간을 물었는데 장소로, 장소를 물었는데 시간으로 답한 보기를 먼저 지웁니다.'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd17-21',
			script: 'Who approved the new budget?',
			options: ['Next week.', 'The finance director.', "Yes, it's new."],
			answer: 1,
			ko: '새 예산은 누가 승인했나요?',
			optionsKo: ['다음 주에요.', '재무 이사요.', '네, 새것이에요.'],
			why: 'Who로 물었으므로 직책으로 답한 (B)가 정답입니다.',
			notes: ['시간 — When에 대한 답', '직책 (정답)', 'Yes로 시작, new 반복'],
			vocab: [
				['approve', '승인하다'],
				['finance director', '재무 이사']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd17-22',
			script: 'Where can I get a visitor pass?',
			options: ['At the security desk.', 'Tomorrow morning.', 'I passed the test.'],
			answer: 0,
			ko: '방문증은 어디에서 받을 수 있나요?',
			optionsKo: ['보안 데스크에서요.', '내일 아침에요.', '저는 시험에 합격했어요.'],
			why: 'Where로 물었으므로 장소로 답한 (A)가 정답입니다.',
			notes: ['장소 (정답)', '시간 — When에 대한 답', 'pass(출입증)와 철자가 같은 pass(합격하다)'],
			vocab: [
				['visitor pass', '방문증'],
				['security desk', '보안 데스크']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd17-23',
			script: 'When does the sale end?',
			options: ['At the mall.', 'Fifty percent off.', 'This Sunday.'],
			answer: 2,
			ko: '할인 행사는 언제 끝나나요?',
			optionsKo: ['쇼핑몰에서요.', '50퍼센트 할인이에요.', '이번 주 일요일에요.'],
			why: 'When으로 물었으므로 시점으로 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', 'sale에서 떠오르는 할인율', '시점 (정답)'],
			vocab: [
				['sale', '할인 행사'],
				['end', '끝나다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd17-24',
			script: 'Who should I give my time sheet to?',
			options: ['Your team leader.', 'Twice a month.', "It's time to go."],
			answer: 0,
			ko: '근무 시간 기록표는 누구에게 내야 하나요?',
			optionsKo: ['팀장님께요.', '한 달에 두 번이요.', '갈 시간이에요.'],
			why: 'Who로 물었으므로 직책으로 답한 (A)가 정답입니다.',
			notes: ['직책 (정답)', '빈도 — How often에 대한 답', 'time 반복 — 질문과 무관'],
			vocab: [
				['time sheet', '근무 시간 기록표'],
				['team leader', '팀장']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd17-25',
			script: 'Where did you put the client files?',
			options: ['A new client.', 'In the cabinet behind you.', 'Yesterday afternoon.'],
			answer: 1,
			ko: '고객 파일을 어디에 두었나요?',
			optionsKo: ['새 고객이에요.', '당신 뒤에 있는 캐비닛에요.', '어제 오후에요.'],
			why: 'Where로 물었으므로 장소로 답한 (B)가 정답입니다.',
			notes: ['client 반복 — 질문과 무관', '장소 (정답)', '시간 — When에 대한 답'],
			vocab: [
				['client file', '고객 파일'],
				['cabinet', '캐비닛'],
				['behind', '~ 뒤에']
			]
		}
	]
} satisfies DayContent;
