import type { DayContent } from '../schema';

export default {
	goals: [
		'빈칸이 동사 자리인지 알아본다',
		'진짜 주어를 찾아 단수·복수를 맞춘다',
		'What·Which 질문에서 뒤에 오는 말을 듣는다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '문장에는 동사가 꼭 있어야 합니다',
			blocks: [
				{
					type: 'p',
					text: '영어 문장에는 **동사**가 반드시 하나 있어야 합니다. 문장에 동사가 보이지 않으면 빈칸이 동사 자리입니다.'
				},
				{
					type: 'box',
					title: '동사 자리에 올 수 없는 것',
					items: [
						'**to + 동사원형** — to open',
						'**-ing만 있는 형태** — opening (is opening처럼 be동사가 있어야 동사가 됩니다)',
						'**명사·형용사·부사**'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The store ==opens== at 9 A.M.',
							ko: '그 매장은 오전 9시에 문을 엽니다.',
							note: 'opening, to open은 동사 자리에 올 수 없습니다.'
						}
					]
				},
				{
					type: 'tip',
					text: 'will, can, must, should 같은 조동사 뒤에는 항상 **동사원형**이 옵니다. — must ==register==, will ==open=='
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '주어와 동사의 수 일치',
			blocks: [
				{
					type: 'p',
					text: '현재 시제에서는 주어가 하나(단수)인지 여럿(복수)인지에 따라 동사 모양이 달라집니다.'
				},
				{
					type: 'table',
					head: ['주어', '일반동사', 'be동사', 'have'],
					rows: [
						['단수 (The manager, It)', 'work==s==', 'is / was', 'has'],
						['복수 (The managers, They)', 'work', 'are / were', 'have']
					]
				},
				{
					type: 'tip',
					text: '명사는 -s가 붙으면 복수지만, 동사는 -s가 붙으면 **단수**입니다. 반대라는 점을 기억하세요.'
				},
				{
					type: 'box',
					title: '단수로 취급하는 주어',
					items: [
						'**each / every + 단수 명사** — Every seat ==is== taken.',
						'**-ing로 시작하는 주어** — Opening a store ==costs== a lot.'
					]
				},
				{
					type: 'box',
					title: '복수로 취급하는 주어',
					items: [
						'**A and B** — Mr. Lee and Ms. Choi ==share== an office.',
						'**many / several / a few + 복수 명사** — Several guests ==are== waiting.'
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '진짜 주어 찾기',
			blocks: [
				{
					type: 'p',
					text: '주어와 동사 사이에 **전치사 + 명사**가 끼어 있으면 동사 바로 앞 명사에 속기 쉽습니다. 낀 말을 괄호로 묶고 맨 앞의 진짜 주어를 보세요.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The price (of these items) ==is== high.',
							ko: '이 물품들의 가격은 높습니다.',
							note: '진짜 주어는 price(단수) → is'
						},
						{
							en: 'The workers (in the factory) ==wear== helmets.',
							ko: '공장의 작업자들은 안전모를 씁니다.',
							note: '진짜 주어는 workers(복수) → wear'
						}
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The new store ------- at 10 A.M. every day.',
			options: ['opening', 'to open', 'opens', 'open'],
			answer: 2,
			ko: '새 매장은 매일 오전 10시에 문을 엽니다.',
			steps: [
				'문장에 동사가 보이지 않습니다. 빈칸이 **동사 자리**입니다.',
				'opening과 to open은 동사 자리에 올 수 없습니다. opens와 open이 남습니다.',
				'주어 The new store는 단수입니다. 단수 주어에는 -s가 붙은 **opens**가 옵니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The reports on the desk ------- to Mr. Han.',
			options: ['belong', 'belongs', 'belonging', 'to belong'],
			answer: 0,
			ko: '책상 위의 보고서들은 한 씨의 것입니다.',
			steps: [
				'문장에 동사가 보이지 않습니다. 빈칸이 동사 자리이므로 belonging과 to belong은 지웁니다.',
				'동사 바로 앞의 desk에 속으면 안 됩니다. on the desk는 낀 말이고, 진짜 주어는 **The reports**(복수)입니다.',
				'복수 주어에는 -s가 없는 **belong**이 옵니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-01',
			text: 'The marketing manager ------- a meeting every Monday morning.',
			options: ['hold', 'holds', 'holding', 'to hold'],
			answer: 1,
			ko: '마케팅 관리자는 매주 월요일 아침에 회의를 엽니다.',
			why: '문장에 동사가 없으므로 빈칸은 동사 자리입니다. 주어 The marketing manager가 단수이므로 -s가 붙은 holds가 정답입니다.',
			notes: [
				'복수 주어에 쓰는 동사',
				'단수 주어에 쓰는 동사 (정답)',
				'-ing형 — 혼자서는 동사가 될 수 없음',
				'to부정사 — 동사가 될 수 없음'
			],
			vocab: [
				['hold a meeting', '회의를 열다'],
				['every Monday', '매주 월요일']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-02',
			text: 'All visitors must ------- at the front desk.',
			options: ['register', 'registers', 'registered', 'registering'],
			answer: 0,
			ko: '모든 방문객은 안내 데스크에서 등록해야 합니다.',
			why: '조동사 must 뒤에는 동사원형이 옵니다.',
			notes: ['동사원형 (정답)', '-s가 붙은 동사', '과거형', '-ing형'],
			vocab: [
				['visitor', '방문객'],
				['register', '등록하다'],
				['front desk', '안내 데스크']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-03',
			text: 'The price of raw materials ------- risen sharply this year.',
			options: ['have', 'having', 'has', 'to have'],
			answer: 2,
			ko: '올해 원자재 가격이 급격히 올랐습니다.',
			why: '진짜 주어는 The price(단수)입니다. of raw materials는 주어와 동사 사이에 낀 말이므로 materials에 속으면 안 됩니다. 단수 주어에는 has가 옵니다.',
			notes: [
				'복수 주어에 쓰는 동사',
				'-ing형 — 동사가 될 수 없음',
				'단수 주어에 쓰는 동사 (정답)',
				'to부정사 — 동사가 될 수 없음'
			],
			vocab: [
				['raw material', '원자재'],
				['rise', '오르다'],
				['sharply', '급격히']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-04',
			text: 'Mr. Shin ------- the quarterly report to the board yesterday.',
			options: ['present', 'presenting', 'to present', 'presented'],
			answer: 3,
			ko: '신 씨는 어제 이사회에 분기 보고서를 발표했습니다.',
			why: '문장에 동사가 없으므로 빈칸은 동사 자리입니다. yesterday가 있으므로 과거형 presented가 정답입니다.',
			notes: [
				'복수 주어에 쓰는 현재형',
				'-ing형 — 동사가 될 수 없음',
				'to부정사 — 동사가 될 수 없음',
				'과거형 (정답)'
			],
			vocab: [
				['present', '발표하다'],
				['quarterly report', '분기 보고서'],
				['board', '이사회']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-05',
			text: 'Each employee ------- an ID badge on the first day.',
			options: ['receives', 'receive', 'receiving', 'to receive'],
			answer: 0,
			ko: '직원은 각자 첫날에 사원증을 받습니다.',
			why: 'each + 단수 명사는 단수로 취급합니다. 단수 주어에는 -s가 붙은 receives가 옵니다.',
			notes: ['단수 주어에 쓰는 동사 (정답)', '복수 주어에 쓰는 동사', '-ing형', 'to부정사'],
			vocab: [
				['each', '각각의'],
				['ID badge', '사원증'],
				['receive', '받다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-06',
			text: 'The instructions in the manual ------- easy to understand.',
			options: ['is', 'being', 'are', 'be'],
			answer: 2,
			ko: '설명서에 있는 지시 사항은 이해하기 쉽습니다.',
			why: '진짜 주어는 The instructions(복수)입니다. in the manual은 낀 말입니다. 복수 주어에는 are가 옵니다.',
			notes: [
				'단수 주어에 쓰는 be동사',
				'-ing형 — 동사가 될 수 없음',
				'복수 주어에 쓰는 be동사 (정답)',
				'동사원형 — 조동사 뒤에 씀'
			],
			vocab: [
				['instructions', '지시 사항'],
				['manual', '설명서'],
				['understand', '이해하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-07',
			text: 'Our customer service center ------- open 24 hours a day.',
			options: ['are', 'is', 'be', 'being'],
			answer: 1,
			ko: '저희 고객 서비스 센터는 하루 24시간 운영합니다.',
			why: '주어 Our customer service center가 단수이므로 is가 정답입니다.',
			notes: ['복수 주어에 쓰는 be동사', '단수 주어에 쓰는 be동사 (정답)', '동사원형', '-ing형'],
			vocab: [
				['customer service center', '고객 서비스 센터'],
				['open', '영업 중인']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-08',
			text: 'Many customers ------- our online store on weekends.',
			options: ['visits', 'visiting', 'to visit', 'visit'],
			answer: 3,
			ko: '많은 고객이 주말에 저희 온라인 매장을 방문합니다.',
			why: 'many + 복수 명사는 복수 주어입니다. 복수 주어에는 -s가 없는 visit가 옵니다.',
			notes: ['단수 주어에 쓰는 동사', '-ing형', 'to부정사', '복수 주어에 쓰는 동사 (정답)'],
			vocab: [
				['customer', '고객'],
				['on weekends', '주말에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-09',
			text: 'The company will ------- three new branches next year.',
			options: ['open', 'opens', 'opened', 'opening'],
			answer: 0,
			ko: '그 회사는 내년에 지점 세 곳을 새로 열 예정입니다.',
			why: '조동사 will 뒤에는 동사원형이 옵니다.',
			notes: ['동사원형 (정답)', '-s가 붙은 동사', '과거형', '-ing형'],
			vocab: [
				['branch', '지점'],
				['next year', '내년']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-10',
			text: 'The employees in the sales department ------- on Saturdays once a month.',
			options: ['works', 'work', 'working', 'to work'],
			answer: 1,
			ko: '영업부 직원들은 한 달에 한 번 토요일에 근무합니다.',
			why: '진짜 주어는 The employees(복수)입니다. in the sales department는 낀 말이므로 department에 속으면 안 됩니다. 복수 주어에는 work가 옵니다.',
			notes: ['단수 주어에 쓰는 동사', '복수 주어에 쓰는 동사 (정답)', '-ing형', 'to부정사'],
			vocab: [
				['sales department', '영업부'],
				['once a month', '한 달에 한 번']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-11',
			text: 'Ms. Oh and Mr. Tak ------- the weekly staff meeting.',
			options: ['leads', 'leading', 'lead', 'to lead'],
			answer: 2,
			ko: '오 씨와 탁 씨가 주간 직원 회의를 진행합니다.',
			why: 'A and B는 두 사람이므로 복수 주어입니다. 복수 주어에는 -s가 없는 lead가 옵니다.',
			notes: ['단수 주어에 쓰는 동사', '-ing형', '복수 주어에 쓰는 동사 (정답)', 'to부정사'],
			vocab: [
				['lead', '진행하다, 이끌다'],
				['weekly', '주간의'],
				['staff meeting', '직원 회의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-12',
			text: 'Every room in the hotel ------- a view of the ocean.',
			options: ['offer', 'offering', 'to offer', 'offers'],
			answer: 3,
			ko: '그 호텔의 모든 객실에서는 바다가 보입니다.',
			why: 'every + 단수 명사는 단수로 취급합니다. 단수 주어에는 -s가 붙은 offers가 옵니다.',
			notes: ['복수 주어에 쓰는 동사', '-ing형', 'to부정사', '단수 주어에 쓰는 동사 (정답)'],
			vocab: [
				['every', '모든'],
				['view', '전망'],
				['ocean', '바다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-13',
			text: 'Customers can ------- their orders on our Web site.',
			options: ['tracks', 'track', 'tracked', 'tracking'],
			answer: 1,
			ko: '고객은 저희 웹사이트에서 주문을 추적할 수 있습니다.',
			why: '조동사 can 뒤에는 동사원형이 옵니다.',
			notes: ['-s가 붙은 동사', '동사원형 (정답)', '과거형', '-ing형'],
			vocab: [
				['track', '추적하다'],
				['order', '주문']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-14',
			text: 'Hiring new employees ------- a lot of time.',
			options: ['takes', 'take', 'taking', 'to take'],
			answer: 0,
			ko: '신입 직원을 채용하는 데는 시간이 많이 걸립니다.',
			why: '-ing로 시작하는 주어(Hiring new employees)는 "~하는 것"이라는 뜻으로 단수로 취급합니다. employees에 속지 말고 takes를 고르세요.',
			notes: ['단수 주어에 쓰는 동사 (정답)', '복수 주어에 쓰는 동사', '-ing형', 'to부정사'],
			vocab: [
				['hire', '채용하다'],
				['take time', '시간이 걸리다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd04-15',
			text: 'Several members of the committee ------- against the proposal.',
			options: ['was', 'is', 'were', 'be'],
			answer: 2,
			ko: '위원회의 몇몇 위원은 그 제안에 반대했습니다.',
			why: '진짜 주어는 Several members(복수)입니다. of the committee는 낀 말입니다. 복수 주어에는 were가 옵니다.',
			notes: [
				'단수 주어에 쓰는 be동사',
				'단수 주어에 쓰는 be동사',
				'복수 주어에 쓰는 be동사 (정답)',
				'동사원형'
			],
			vocab: [
				['several', '몇몇의'],
				['committee', '위원회'],
				['against', '~에 반대하여'],
				['proposal', '제안']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'What·Which 의문문: 뒤에 오는 말을 듣는다',
			blocks: [
				{
					type: 'p',
					text: 'What과 Which는 **바로 뒤에 오는 말**에 따라 묻는 내용이 달라집니다. 첫 단어만 듣지 말고 두세 단어까지 들으세요.'
				},
				{
					type: 'table',
					head: ['질문', '묻는 것', '응답 예'],
					rows: [
						['What time ~?', '시각', 'At ten thirty.'],
						['What kind of ~?', '종류', 'An Italian restaurant.'],
						["What's the price / fee ~?", '금액', 'Fifty dollars.'],
						['What do you think of ~?', '의견', "It's very useful."],
						['What should I ~?', '할 일·물건', 'Fill out this form.'],
						['Which + 명사 ~?', '여럿 중 하나', 'The one on the left.']
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'**Yes / No**로 시작하는 응답',
						'What 뒤의 말과 맞지 않는 응답 — What time에 장소로 답하기',
						'질문에 나온 단어와 **철자·발음이 같은 다른 뜻의 단어**가 들어간 응답'
					]
				},
				{
					type: 'tip',
					text: 'Which 질문의 정답에는 **the one**(~한 것)이 자주 나옵니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'What time does the bank close?',
			options: ['Next to the post office.', 'At four thirty.', "Yes, it's very close."],
			answer: 1,
			ko: '은행은 몇 시에 문을 닫나요?',
			optionsKo: ['우체국 옆에요.', '4시 30분에요.', '네, 아주 가까워요.'],
			steps: [
				'**What time**으로 시작합니다. What은 바로 뒤 단어가 중요합니다. 시각을 묻는 질문입니다.',
				'(A)는 장소로 답했습니다. 지웁니다.',
				'(C)는 Yes로 시작했고, close(닫다)와 철자가 같은 close(가까운)를 썼습니다. 지웁니다.',
				'(B)는 시각으로 답했습니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-16',
			script: 'What time does the workshop begin?',
			options: ['In the training room.', "At two o'clock.", 'About sales skills.'],
			answer: 1,
			ko: '워크숍은 몇 시에 시작하나요?',
			optionsKo: ['교육실에서요.', '2시에요.', '영업 기술에 관해서요.'],
			why: 'What time은 시각을 묻습니다. 시각으로 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '시각 (정답)', '주제 — 질문과 무관'],
			vocab: [
				['workshop', '워크숍'],
				['begin', '시작하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-17',
			script: 'What kind of business does Mr. Park run?',
			options: ['A small bakery.', 'He runs every morning.', 'Yes, very kind.'],
			answer: 0,
			ko: '박 씨는 어떤 사업을 하나요?',
			optionsKo: ['작은 제과점이요.', '그는 매일 아침 달리기를 해요.', '네, 아주 친절해요.'],
			why: 'What kind of는 종류를 묻습니다. 사업의 종류로 답한 (A)가 정답입니다.',
			notes: [
				'종류 (정답)',
				'run(운영하다)과 철자가 같은 run(달리다)',
				'Yes로 시작, kind(종류)와 철자가 같은 kind(친절한)'
			],
			vocab: [
				['what kind of', '어떤 종류의'],
				['run a business', '사업을 운영하다'],
				['bakery', '제과점']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-18',
			script: "What's the registration fee for the conference?",
			options: ['On the Web site.', 'I registered yesterday.', 'Eighty dollars per person.'],
			answer: 2,
			ko: '학회 등록비는 얼마인가요?',
			optionsKo: ['웹사이트에요.', '저는 어제 등록했어요.', '1인당 80달러예요.'],
			why: 'fee(요금)를 물었으므로 금액으로 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', 'registration과 비슷한 registered', '금액 (정답)'],
			vocab: [
				['registration fee', '등록비'],
				['conference', '학회, 회의'],
				['per person', '1인당']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-19',
			script: 'Which floor is the accounting department on?',
			options: ['The fifth.', 'By elevator.', 'Yes, it is.'],
			answer: 0,
			ko: '회계부는 몇 층에 있나요?',
			optionsKo: ['5층이요.', '엘리베이터로요.', '네, 그래요.'],
			why: 'Which floor로 층을 물었으므로 층수로 답한 (A)가 정답입니다.',
			notes: ['층수 (정답)', '방법 — How에 대한 답', 'Yes로 시작'],
			vocab: [
				['floor', '층'],
				['accounting department', '회계부']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-20',
			script: 'What do you think of the new logo?',
			options: ['On the front page.', 'The design team.', 'It looks very modern.'],
			answer: 2,
			ko: '새 로고를 어떻게 생각하세요?',
			optionsKo: ['첫 페이지에요.', '디자인팀이요.', '아주 현대적으로 보여요.'],
			why: 'What do you think of는 의견을 묻습니다. 의견으로 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '사람 — Who에 대한 답', '의견 (정답)'],
			vocab: [
				['What do you think of', '~을 어떻게 생각하세요'],
				['modern', '현대적인']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-21',
			script: 'What should I bring to the interview?',
			options: ['At ten in the morning.', 'A copy of your résumé.', 'Room 302.'],
			answer: 1,
			ko: '면접에 무엇을 가져가야 하나요?',
			optionsKo: ['오전 10시에요.', '이력서 사본이요.', '302호요.'],
			why: '가져갈 물건으로 답한 (B)가 정답입니다.',
			notes: ['시각 — When에 대한 답', '물건 (정답)', '장소 — Where에 대한 답'],
			vocab: [
				['bring', '가져가다'],
				['interview', '면접'],
				['résumé', '이력서']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-22',
			script: 'Which printer should I use?',
			options: ['The one near the window.', 'Twenty pages.', 'Yes, you should.'],
			answer: 0,
			ko: '어느 프린터를 써야 하나요?',
			optionsKo: ['창가에 있는 거요.', '20쪽이요.', '네, 그래야 해요.'],
			why: 'Which 질문에는 the one(~한 것)으로 하나를 골라 주는 응답이 자주 정답이 됩니다.',
			notes: ['하나를 골라 줌 (정답)', '분량 — How many에 대한 답', 'Yes로 시작'],
			vocab: [
				['the one', '~한 것'],
				['near', '~ 가까이에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-23',
			script: "What's the topic of today's seminar?",
			options: ['In the main hall.', 'Online marketing.', 'It starts at three.'],
			answer: 1,
			ko: '오늘 세미나의 주제는 무엇인가요?',
			optionsKo: ['본관 홀에서요.', '온라인 마케팅이요.', '3시에 시작해요.'],
			why: '주제를 물었으므로 주제로 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '주제 (정답)', '시각 — When에 대한 답'],
			vocab: [
				['topic', '주제'],
				['seminar', '세미나']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-24',
			script: 'What happened to the delivery truck?',
			options: ['Three boxes.', 'To the warehouse.', 'It had a flat tire.'],
			answer: 2,
			ko: '배송 트럭에 무슨 일이 있었나요?',
			optionsKo: ['상자 세 개요.', '창고로요.', '타이어에 펑크가 났어요.'],
			why: 'What happened는 일어난 일을 묻습니다. 일어난 일을 설명한 (C)가 정답입니다.',
			notes: ['수량 — How many에 대한 답', '장소 — Where에 대한 답', '일어난 일 (정답)'],
			vocab: [
				['happen', '일어나다'],
				['delivery truck', '배송 트럭'],
				['flat tire', '펑크 난 타이어']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd04-25',
			script: 'Which of these designs do you prefer?',
			options: ['I like the second one.', 'Yes, I designed it.', 'On the top shelf.'],
			answer: 0,
			ko: '이 디자인들 중 어느 것이 더 마음에 드세요?',
			optionsKo: ['두 번째 것이 좋아요.', '네, 제가 디자인했어요.', '맨 위 선반에요.'],
			why: '여럿 중 하나를 골라 답한 (A)가 정답입니다.',
			notes: ['하나를 골라 줌 (정답)', 'Yes로 시작, design 반복', '장소 — Where에 대한 답'],
			vocab: [
				['prefer', '더 좋아하다'],
				['design', '디자인']
			]
		}
	]
} satisfies DayContent;
