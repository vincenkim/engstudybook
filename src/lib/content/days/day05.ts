import type { DayContent } from '../schema';

export default {
	goals: [
		'시간 표현을 보고 시제를 고른다',
		'현재완료와 과거를 구분한다',
		'How 질문에서 뒤에 오는 말을 듣는다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '시제는 시간 표현이 알려 줍니다',
			blocks: [
				{
					type: 'p',
					text: '보기가 같은 동사의 여러 시제라면 문장에서 **시간 표현**을 찾으세요. 시간 표현이 시제를 정해 줍니다.'
				},
				{
					type: 'table',
					head: ['시제', '모양', '함께 나오는 시간 표현'],
					rows: [
						['현재', 'works / work', 'every day, usually, always, often'],
						['과거', 'worked', 'yesterday, last week, two days ago, in 2020'],
						['미래', 'will work', 'tomorrow, next month, soon']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The shop ==opens== at nine every day.',
							ko: '그 가게는 매일 9시에 문을 엽니다.',
							note: 'every day → 현재'
						},
						{
							en: 'The shop ==opened== last year.',
							ko: '그 가게는 작년에 문을 열었습니다.',
							note: 'last year → 과거'
						},
						{
							en: 'The shop ==will open== next week.',
							ko: '그 가게는 다음 주에 문을 열 것입니다.',
							note: 'next week → 미래'
						}
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '진행과 완료',
			blocks: [
				{
					type: 'table',
					head: ['시제', '모양', '함께 나오는 시간 표현'],
					rows: [
						['현재진행', 'is / are working', 'now, currently, at the moment'],
						[
							'현재완료',
							'has / have worked',
							'since 2020, for the past three years, recently, already'
						]
					]
				},
				{
					type: 'box',
					title: '현재완료와 과거 구분',
					items: [
						'**since + 과거 시점**, **for / over the past + 기간** → 현재완료 — has worked here ==since 2020==',
						'**yesterday, last ~, ~ ago** → 과거. 현재완료와 함께 쓰지 않습니다.'
					]
				},
				{
					type: 'tip',
					text: 'when, if, before, after 뒤에서는 미래의 일도 **현재 시제**로 씁니다. — When the manager ==arrives==, the meeting will begin.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Mr. Yang ------- the Busan office last week.',
			options: ['visits', 'visited', 'will visit', 'has visited'],
			answer: 1,
			ko: '양 씨는 지난주에 부산 사무실을 방문했습니다.',
			steps: [
				'보기가 모두 visit의 여러 시제입니다. 시제 문제입니다.',
				'문장에서 시간 표현을 찾습니다. **last week**(지난주)가 있습니다.',
				'last가 붙은 표현은 과거를 나타냅니다. 과거형 **visited**가 정답입니다. has visited는 last week와 함께 쓸 수 없습니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The company ------- its products online since 2019.',
			options: ['sells', 'sold', 'will sell', 'has sold'],
			answer: 3,
			ko: '그 회사는 2019년부터 온라인으로 제품을 판매해 왔습니다.',
			steps: [
				'보기가 모두 sell의 여러 시제입니다. 시간 표현을 찾습니다.',
				'**since 2019**(2019년부터)가 있습니다. since는 과거부터 지금까지 이어지는 일을 나타냅니다.',
				'since는 현재완료와 함께 씁니다. 정답은 (D) **has sold**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-01',
			text: 'Ms. Bae usually ------- to work by subway.',
			options: ['commutes', 'commuted', 'will commute', 'is commuting'],
			answer: 0,
			ko: '배 씨는 보통 지하철로 출근합니다.',
			why: 'usually(보통)는 반복되는 습관을 나타내므로 현재 시제 commutes가 정답입니다.',
			notes: ['현재 (정답)', '과거', '미래', '현재진행'],
			vocab: [
				['usually', '보통'],
				['commute', '통근하다'],
				['by subway', '지하철로']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-02',
			text: 'The company ------- a new product line next month.',
			options: ['launched', 'has launched', 'was launching', 'will launch'],
			answer: 3,
			ko: '그 회사는 다음 달에 신제품군을 출시할 예정입니다.',
			why: 'next month(다음 달)는 미래를 나타내므로 will launch가 정답입니다.',
			notes: ['과거', '현재완료', '과거진행', '미래 (정답)'],
			vocab: [
				['launch', '출시하다'],
				['product line', '제품군']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-03',
			text: 'Mr. Noh ------- the contract two days ago.',
			options: ['signs', 'signed', 'has signed', 'will sign'],
			answer: 1,
			ko: '노 씨는 이틀 전에 계약서에 서명했습니다.',
			why: 'two days ago(이틀 전)는 과거를 나타내므로 signed가 정답입니다. ago는 현재완료와 함께 쓰지 않습니다.',
			notes: ['현재', '과거 (정답)', '현재완료 — ago와 함께 쓰지 않음', '미래'],
			vocab: [
				['sign', '서명하다'],
				['contract', '계약서'],
				['ago', '~ 전에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-04',
			text: 'The technicians ------- the new equipment at the moment.',
			options: ['install', 'installed', 'are installing', 'have installed'],
			answer: 2,
			ko: '기술자들이 지금 새 장비를 설치하고 있습니다.',
			why: 'at the moment(지금)는 진행 중인 일을 나타내므로 현재진행 are installing이 정답입니다.',
			notes: ['현재', '과거', '현재진행 (정답)', '현재완료'],
			vocab: [
				['technician', '기술자'],
				['install', '설치하다'],
				['equipment', '장비'],
				['at the moment', '지금']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-05',
			text: 'Sales ------- by 15 percent since the new advertisement appeared.',
			options: ['have increased', 'increase', 'will increase', 'increasing'],
			answer: 0,
			ko: '새 광고가 나온 이후로 매출이 15퍼센트 증가했습니다.',
			why: 'since(~ 이후로)는 과거부터 지금까지 이어지는 일을 나타내므로 현재완료 have increased가 정답입니다.',
			notes: ['현재완료 (정답)', '현재', '미래', '-ing형 — 동사가 될 수 없음'],
			vocab: [
				['sales', '매출'],
				['increase', '증가하다'],
				['since', '~ 이후로'],
				['advertisement', '광고']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-06',
			text: 'The museum ------- at 6 P.M. every day.',
			options: ['closed', 'closes', 'is closing', 'has closed'],
			answer: 1,
			ko: '그 박물관은 매일 오후 6시에 문을 닫습니다.',
			why: 'every day(매일)는 반복되는 일을 나타내므로 현재 시제 closes가 정답입니다.',
			notes: ['과거', '현재 (정답)', '현재진행', '현재완료'],
			vocab: [
				['museum', '박물관'],
				['close', '문을 닫다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-07',
			text: 'Ms. Seo ------- for this company for the past ten years.',
			options: ['works', 'is working', 'will work', 'has worked'],
			answer: 3,
			ko: '서 씨는 지난 10년 동안 이 회사에서 일해 왔습니다.',
			why: 'for the past ten years(지난 10년 동안)는 과거부터 지금까지 이어지는 기간이므로 현재완료 has worked가 정답입니다.',
			notes: ['현재', '현재진행', '미래', '현재완료 (정답)'],
			vocab: [
				['for the past ~ years', '지난 ~년 동안'],
				['work for', '~에서 일하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-08',
			text: 'The construction of the bridge ------- last October.',
			options: ['begins', 'has begun', 'began', 'will begin'],
			answer: 2,
			ko: '그 다리의 공사는 지난 10월에 시작되었습니다.',
			why: 'last October(지난 10월)는 과거를 나타내므로 began이 정답입니다. last가 붙은 표현은 현재완료와 함께 쓰지 않습니다.',
			notes: ['현재', '현재완료 — last와 함께 쓰지 않음', '과거 (정답)', '미래'],
			vocab: [
				['construction', '공사'],
				['bridge', '다리'],
				['begin', '시작되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-09',
			text: 'When Ms. Ha ------- from her business trip, we will discuss the plan.',
			options: ['will return', 'returns', 'returned', 'returning'],
			answer: 1,
			ko: '하 씨가 출장에서 돌아오면 그 계획을 논의할 것입니다.',
			why: 'when, if, before, after 뒤에서는 미래의 일도 현재 시제로 씁니다. 그래서 will return이 아니라 returns가 정답입니다.',
			notes: ['미래 — when 뒤에는 쓰지 않음', '현재 (정답)', '과거', '-ing형 — 동사가 될 수 없음'],
			vocab: [
				['return', '돌아오다'],
				['business trip', '출장'],
				['discuss', '논의하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-10',
			text: 'The store ------- its business hours recently.',
			options: ['has extended', 'extends', 'will extend', 'is extending'],
			answer: 0,
			ko: '그 매장은 최근에 영업시간을 연장했습니다.',
			why: 'recently(최근에)는 현재완료나 과거와 함께 씁니다. 보기 중 현재완료 has extended가 정답입니다.',
			notes: ['현재완료 (정답)', '현재', '미래', '현재진행'],
			vocab: [
				['extend', '연장하다'],
				['business hours', '영업시간'],
				['recently', '최근에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-11',
			text: 'Currently, the IT department ------- the security system.',
			options: ['upgraded', 'will upgrade', 'is upgrading', 'to upgrade'],
			answer: 2,
			ko: '현재 IT 부서가 보안 시스템을 업그레이드하고 있습니다.',
			why: 'Currently(현재)는 진행 중인 일을 나타내므로 현재진행 is upgrading이 정답입니다.',
			notes: ['과거', '미래', '현재진행 (정답)', 'to부정사 — 동사가 될 수 없음'],
			vocab: [
				['currently', '현재'],
				['upgrade', '업그레이드하다'],
				['security', '보안']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-12',
			text: 'The president ------- the factory three times last year.',
			options: ['inspects', 'inspected', 'has inspected', 'will inspect'],
			answer: 1,
			ko: '사장은 작년에 그 공장을 세 번 점검했습니다.',
			why: 'last year(작년)는 과거를 나타내므로 inspected가 정답입니다.',
			notes: ['현재', '과거 (정답)', '현재완료 — last와 함께 쓰지 않음', '미래'],
			vocab: [
				['president', '사장'],
				['inspect', '점검하다'],
				['factory', '공장']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-13',
			text: 'Our office ------- to a new building next spring.',
			options: ['moved', 'has moved', 'was moving', 'will move'],
			answer: 3,
			ko: '저희 사무실은 내년 봄에 새 건물로 이전할 예정입니다.',
			why: 'next spring(내년 봄)은 미래를 나타내므로 will move가 정답입니다.',
			notes: ['과거', '현재완료', '과거진행', '미래 (정답)'],
			vocab: [
				['move to', '~로 이전하다'],
				['next spring', '내년 봄']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-14',
			text: 'The manager has already ------- the vacation schedule.',
			options: ['approved', 'approve', 'approves', 'approving'],
			answer: 0,
			ko: '관리자는 이미 휴가 일정을 승인했습니다.',
			why: 'has 뒤에서 현재완료를 만드는 과거분사(-ed) 자리입니다. already(이미)는 현재완료와 자주 함께 나옵니다.',
			notes: ['과거분사 (정답)', '동사원형', '-s가 붙은 동사', '-ing형'],
			vocab: [
				['already', '이미'],
				['approve', '승인하다'],
				['vacation schedule', '휴가 일정']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd05-15',
			text: 'Prices ------- steady over the past six months.',
			options: ['remain', 'are remaining', 'have remained', 'will remain'],
			answer: 2,
			ko: '지난 6개월 동안 가격이 안정적으로 유지되었습니다.',
			why: 'over the past six months(지난 6개월 동안)는 과거부터 지금까지의 기간이므로 현재완료 have remained가 정답입니다.',
			notes: ['현재', '현재진행', '현재완료 (정답)', '미래'],
			vocab: [
				['remain steady', '안정적으로 유지되다'],
				['over the past ~', '지난 ~ 동안']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'How 의문문: 뒤에 오는 말을 듣는다',
			blocks: [
				{
					type: 'p',
					text: 'How도 **바로 뒤에 오는 말**에 따라 묻는 내용이 달라집니다.'
				},
				{
					type: 'table',
					head: ['질문', '묻는 것', '응답 예'],
					rows: [
						['How + 동사 ~?', '방법·수단', 'By bus. / Through the Web site.'],
						['How long ~?', '기간', 'About an hour. / For two weeks.'],
						['How often ~?', '빈도', 'Once a month. / Every Monday.'],
						['How many / much ~?', '수량·금액', 'About thirty. / Twenty dollars.'],
						['How soon ~?', '얼마나 빨리', 'In ten minutes. / By Friday.'],
						['How far ~?', '거리', 'About five kilometers.'],
						['How was ~?', '소감', 'It went very well.']
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'**Yes / No**로 시작하는 응답',
						'How 뒤의 말과 맞지 않는 응답 — How long에 빈도(Twice a week.)로 답하기'
					]
				},
				{
					type: 'tip',
					text: 'How long은 **기간**, How often은 **횟수**입니다. 둘을 가장 많이 헷갈립니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'How long does the flight to Jeju take?',
			options: ['At gate twelve.', 'Twice a week.', 'About an hour.'],
			answer: 2,
			ko: '제주행 비행기는 얼마나 걸리나요?',
			optionsKo: ['12번 탑승구에서요.', '일주일에 두 번이요.', '한 시간 정도요.'],
			steps: [
				'**How long**으로 시작합니다. How는 바로 뒤 단어가 중요합니다. 걸리는 시간을 묻는 질문입니다.',
				'(A)는 장소로 답했습니다. 지웁니다.',
				'(B)는 빈도로 답했습니다. How often에 대한 답이므로 지웁니다.',
				'(C)는 걸리는 시간으로 답했습니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-16',
			script: 'How do you get to work?',
			options: ['By subway.', "At nine o'clock.", 'In the marketing department.'],
			answer: 0,
			ko: '어떻게 출근하세요?',
			optionsKo: ['지하철로요.', '9시에요.', '마케팅 부서에서요.'],
			why: 'How + 동사는 방법을 묻습니다. by + 교통수단으로 답한 (A)가 정답입니다.',
			notes: ['교통수단 (정답)', '시각 — When에 대한 답', '장소 — Where에 대한 답'],
			vocab: [
				['get to work', '출근하다'],
				['by subway', '지하철로']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-17',
			script: 'How long will the meeting last?',
			options: ['In room five.', 'Last Monday.', 'About two hours.'],
			answer: 2,
			ko: '회의는 얼마나 오래 걸리나요?',
			optionsKo: ['5번 방에서요.', '지난주 월요일에요.', '2시간 정도요.'],
			why: 'How long은 기간을 묻습니다. 걸리는 시간으로 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', 'last(계속되다)와 철자가 같은 last(지난)', '기간 (정답)'],
			vocab: [
				['how long', '얼마나 오래'],
				['last', '계속되다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-18',
			script: 'How often do you check your e-mail?',
			options: ['By phone.', 'Several times a day.', 'Yes, I checked it.'],
			answer: 1,
			ko: '이메일을 얼마나 자주 확인하세요?',
			optionsKo: ['전화로요.', '하루에 여러 번이요.', '네, 확인했어요.'],
			why: 'How often은 빈도를 묻습니다. 횟수로 답한 (B)가 정답입니다.',
			notes: ['방법 — How에 대한 답', '빈도 (정답)', 'Yes로 시작, check 반복'],
			vocab: [
				['how often', '얼마나 자주'],
				['several times a day', '하루에 여러 번']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-19',
			script: 'How many people are coming to the workshop?',
			options: ['Around forty.', 'In the afternoon.', 'They came by bus.'],
			answer: 0,
			ko: '워크숍에 몇 명이 오나요?',
			optionsKo: ['40명쯤이요.', '오후에요.', '그들은 버스로 왔어요.'],
			why: 'How many는 수를 묻습니다. 숫자로 답한 (A)가 정답입니다.',
			notes: ['수 (정답)', '시간 — When에 대한 답', 'come의 과거형 came, 방법으로 답함'],
			vocab: [
				['how many', '몇 명, 몇 개'],
				['around', '약, ~쯤']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-20',
			script: 'How much does this desk cost?',
			options: ['It is made of wood.', 'One hundred fifty dollars.', 'In the furniture section.'],
			answer: 1,
			ko: '이 책상은 얼마인가요?',
			optionsKo: ['나무로 만들었어요.', '150달러예요.', '가구 코너에요.'],
			why: 'How much ~ cost는 가격을 묻습니다. 금액으로 답한 (B)가 정답입니다.',
			notes: ['재료 — 질문과 무관', '금액 (정답)', '장소 — Where에 대한 답'],
			vocab: [
				['cost', '(값이) ~이다'],
				['be made of', '~로 만들어지다'],
				['furniture', '가구']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-21',
			script: 'How was your trip to Singapore?',
			options: ['For five days.', 'By plane.', 'It went very well.'],
			answer: 2,
			ko: '싱가포르 출장은 어땠나요?',
			optionsKo: ['5일 동안이요.', '비행기로요.', '아주 잘 진행됐어요.'],
			why: 'How was ~?는 어땠는지 묻습니다. 소감으로 답한 (C)가 정답입니다.',
			notes: ['기간 — How long에 대한 답', '교통수단 — 질문과 무관', '소감 (정답)'],
			vocab: [
				['trip', '여행, 출장'],
				['go well', '잘 진행되다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-22',
			script: 'How can I reset my password?',
			options: ['Click the link in the e-mail.', 'Yes, you can.', 'Every three months.'],
			answer: 0,
			ko: '비밀번호는 어떻게 재설정하나요?',
			optionsKo: ['이메일에 있는 링크를 누르세요.', '네, 할 수 있어요.', '3개월마다요.'],
			why: '방법을 알려 준 (A)가 정답입니다.',
			notes: ['방법 (정답)', 'Yes로 시작', '빈도 — How often에 대한 답'],
			vocab: [
				['reset', '재설정하다'],
				['password', '비밀번호'],
				['click', '누르다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-23',
			script: 'How soon can you finish the report?',
			options: ['It is ten pages long.', 'Mr. Kim wrote it.', 'By tomorrow morning.'],
			answer: 2,
			ko: '보고서를 얼마나 빨리 끝낼 수 있나요?',
			optionsKo: ['10쪽 분량이에요.', '김 씨가 썼어요.', '내일 아침까지요.'],
			why: 'How soon은 얼마나 빨리 되는지 묻습니다. 기한으로 답한 (C)가 정답입니다.',
			notes: ['분량 — 질문과 무관', '사람 — Who에 대한 답', '기한 (정답)'],
			vocab: [
				['how soon', '얼마나 빨리'],
				['finish', '끝내다'],
				['by', '~까지']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-24',
			script: 'How far is the hotel from the airport?',
			options: ['By shuttle bus.', 'About ten kilometers.', 'For two nights.'],
			answer: 1,
			ko: '호텔은 공항에서 얼마나 먼가요?',
			optionsKo: ['셔틀버스로요.', '10킬로미터 정도요.', '이틀 밤 동안이요.'],
			why: 'How far는 거리를 묻습니다. 거리로 답한 (B)가 정답입니다.',
			notes: ['교통수단 — How에 대한 답', '거리 (정답)', '기간 — How long에 대한 답'],
			vocab: [
				['how far', '얼마나 먼'],
				['airport', '공항']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd05-25',
			script: 'How did you hear about this job opening?',
			options: ['A friend told me.', 'Next Monday.', 'Yes, I heard it.'],
			answer: 0,
			ko: '이 채용 공고는 어떻게 알게 되셨나요?',
			optionsKo: ['친구가 알려 줬어요.', '다음 주 월요일에요.', '네, 들었어요.'],
			why: '알게 된 경로를 설명한 (A)가 정답입니다.',
			notes: ['경로 (정답)', '시간 — When에 대한 답', 'Yes로 시작, hear의 과거형 heard'],
			vocab: [
				['hear about', '~에 대해 듣다'],
				['job opening', '채용 공고']
			]
		}
	]
} satisfies DayContent;
