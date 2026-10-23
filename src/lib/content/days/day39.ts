import type { DayContent } from '../schema';

export default {
	goals: [
		'듣기 11문항을 한 번씩만 듣고 답을 고른다',
		'Part 3에서 표와 대화를 함께 보고 시각 자료 문제를 푼다',
		'읽기 14문항을 9분 안에 풀고 틀린 문제를 다시 푼다'
	],
	pages: [
		{
			type: 'lesson',
			tag: '모의고사 안내',
			section: 'RC',
			title: '미니 모의고사 3: 여행과 교통',
			blocks: [
				{
					type: 'p',
					text: '3회차도 **실제 시험 순서**대로 25문항을 풉니다. 배경은 여행과 교통입니다. 공항, 기차역, 호텔, 렌터카에 관한 말이 많이 나옵니다.'
				},
				{
					type: 'table',
					head: ['파트', '문항 수', '문제 형식'],
					rows: [
						['Part 2', '5', '질문을 듣고 알맞은 응답 고르기'],
						['Part 3', '3', '대화 1개를 듣고 풀기 (표를 함께 보는 문제 포함)'],
						['Part 4', '3', '담화 1개를 듣고 풀기'],
						['Part 5', '7', '문장의 빈칸 채우기'],
						['Part 6', '4', '지문 1개의 빈칸 채우기'],
						['Part 7', '3', '지문 1개를 읽고 풀기']
					]
				},
				{
					type: 'box',
					title: '푸는 방법',
					items: [
						'시작하기 전에 "목차" 버튼으로 첫 화면에 가서 설정의 **채점 방식**을 "다 풀고 채점"으로 바꿉니다.',
						'권장 시간은 **약 15분**입니다. 듣기 11문항에 6분, 읽기 14문항에 9분 정도를 씁니다.',
						'Part 3에는 표가 함께 나옵니다. 음성을 틀기 전에 문제와 표를 먼저 읽습니다.',
						'모르는 문제는 답을 하나 고르고 넘어갑니다.'
					]
				},
				{
					type: 'box',
					title: '끝난 뒤에',
					items: [
						'마지막 화면에서 **채점하기**를 눌러 파트별 점수를 확인합니다.',
						'"틀린 문제만 다시 풀기"를 눌러 ==틀린 문제만== 한 번 더 풉니다.'
					]
				},
				{
					type: 'tip',
					text: '시각 자료 문제의 보기는 표의 한 칸에서 나옵니다. 대화에서는 그 칸을 직접 말하지 않고 **같은 줄의 다른 칸**을 알려 주는 단서를 말합니다.'
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd39-01',
			script: 'Which gate does the flight to Osaka leave from?',
			options: ['About two hours.', 'Gate fourteen, I think.', 'Yes, I left it at home.'],
			answer: 1,
			ko: '오사카행 항공편은 몇 번 탑승구에서 출발하나요?',
			optionsKo: ['두 시간쯤이요.', '14번 탑승구일 거예요.', '네, 집에 두고 왔어요.'],
			why: 'Which gate로 물었으므로 탑승구 번호로 답한 (B)가 정답입니다.',
			notes: [
				'소요 시간 — How long에 대한 답',
				'탑승구 번호 (정답)',
				'Yes로 시작, leave의 과거형 left'
			],
			vocab: [
				['gate', '탑승구'],
				['flight', '항공편'],
				['leave from', '~에서 출발하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd39-02',
			script: 'Where can I store my luggage until check-in?',
			options: ['We can keep it at the front desk.', 'I checked it twice.', 'Around noon.'],
			answer: 0,
			ko: '입실 전까지 짐을 어디에 맡길 수 있나요?',
			optionsKo: ['안내 데스크에서 보관해 드릴 수 있어요.', '두 번 확인했어요.', '정오쯤에요.'],
			why: 'Where로 물었으므로 짐을 맡길 장소를 알려 준 (A)가 정답입니다.',
			notes: ['장소 (정답)', 'check 반복 — 질문과 무관', '시간 — When에 대한 답'],
			vocab: [
				['store', '보관하다'],
				['luggage', '짐'],
				['check-in', '입실 수속'],
				['front desk', '안내 데스크']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd39-03',
			script: "Didn't you book a rental car for the trip?",
			options: [
				'A three-day trip.',
				'I rented an apartment last year.',
				"We'll be taking the train instead."
			],
			answer: 2,
			ko: '여행에 쓸 렌터카를 예약하지 않았나요?',
			optionsKo: [
				'3일간의 여행이에요.',
				'저는 작년에 아파트를 빌렸어요.',
				'대신 기차를 탈 거예요.'
			],
			why: '"예약하지 않았다"고 직접 말하지 않고 기차를 탈 것이라고 돌려 말한 (C)가 정답입니다. 렌터카가 필요 없다는 뜻입니다.',
			notes: [
				'trip 반복 — 질문과 무관',
				'rental과 비슷한 rented — 내용이 무관함',
				'돌려 말한 응답 (정답)'
			],
			vocab: [
				['book', '예약하다'],
				['rental car', '렌터카'],
				['instead', '대신']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd39-04',
			script: 'Would you prefer a window seat or an aisle seat?',
			options: [
				'An aisle seat, if possible.',
				'Yes, please open the window.',
				'Seat belts are required.'
			],
			answer: 0,
			ko: '창가 좌석이 좋으세요, 통로 좌석이 좋으세요?',
			optionsKo: [
				'가능하면 통로 좌석으로요.',
				'네, 창문을 열어 주세요.',
				'안전벨트를 꼭 매야 합니다.'
			],
			why: 'or로 둘 중 하나를 고르게 하는 질문입니다. 통로 좌석을 고른 (A)가 정답입니다.',
			notes: ['하나를 고름 (정답)', 'Yes로 시작, window 반복', 'seat 반복 — 질문과 무관'],
			vocab: [
				['prefer', '더 좋아하다'],
				['window seat', '창가 좌석'],
				['aisle seat', '통로 좌석'],
				['if possible', '가능하면']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd39-05',
			script: 'The subway line to the airport is not running today.',
			options: ['A subway map, please.', 'Then we should take a bus.', 'I run every morning.'],
			answer: 1,
			ko: '공항으로 가는 지하철 노선이 오늘 운행하지 않아요.',
			optionsKo: [
				'지하철 노선도 주세요.',
				'그럼 버스를 타야겠네요.',
				'저는 매일 아침 달리기를 해요.'
			],
			why: '지하철이 다니지 않는다는 말에 "그럼 버스를 타야겠다"고 다른 방법을 말한 (B)가 정답입니다.',
			notes: [
				'subway 반복 — 내용이 무관함',
				'다른 방법을 말함 (정답)',
				'run(운행하다)과 철자가 같은 run(달리다)'
			],
			vocab: [
				['subway line', '지하철 노선'],
				['run', '운행하다'],
				['take a bus', '버스를 타다']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					'Excuse me. I just missed my train to Redfield. It left at nine thirty. Can I change my ticket?'
				],
				[
					'W',
					'Sure. The next train leaves at ten fifteen, but it is a local train. It takes two hours.'
				],
				['M', 'That is too slow. I would like a seat on the next express, please.'],
				['W', 'No problem. There is no extra charge. Here is your new ticket.'],
				['M', 'Thank you. Is there a place to get coffee while I wait?'],
				['W', 'Yes, there is a café next to the waiting room.']
			],
			scriptKo: [
				'실례합니다. 방금 레드필드행 기차를 놓쳤어요. 9시 30분에 출발했거든요. 표를 바꿀 수 있나요?',
				'그럼요. 다음 기차는 10시 15분에 출발하는데 완행열차예요. 두 시간이 걸립니다.',
				'너무 느리네요. 다음 급행열차 좌석으로 주세요.',
				'알겠습니다. 추가 요금은 없습니다. 여기 새 표입니다.',
				'감사합니다. 기다리는 동안 커피를 살 만한 곳이 있나요?',
				'네, 대합실 옆에 카페가 있습니다.'
			],
			graphic: {
				title: 'Trains to Redfield',
				head: ['Train', 'Departure', 'Platform'],
				rows: [
					['Express 101', '9:30 A.M.', '2'],
					['Local 205', '10:15 A.M.', '4'],
					['Express 103', '11:00 A.M.', '3'],
					['Local 207', '11:45 A.M.', '1']
				]
			},
			questions: [
				{
					id: 'd39-06',
					text: "What is the man's problem?",
					ko: '남자의 문제는 무엇인가?',
					options: [
						'He did not catch his train.',
						'He lost his ticket.',
						'He went to the wrong station.',
						'He forgot his bag.'
					],
					optionsKo: [
						'기차를 타지 못했다.',
						'표를 잃어버렸다.',
						'다른 역으로 갔다.',
						'가방을 두고 왔다.'
					],
					answer: 0,
					why: '남자가 첫 줄에서 I just missed my train to Redfield라고 했습니다. missed가 보기에서 did not catch로 바뀌었습니다.'
				},
				{
					id: 'd39-07',
					text: 'Look at the graphic. Which platform will the man go to?',
					ko: '시각 자료를 보시오. 남자는 어느 승강장으로 갈 것인가?',
					options: ['Platform 1', 'Platform 2', 'Platform 3', 'Platform 4'],
					optionsKo: ['1번 승강장', '2번 승강장', '3번 승강장', '4번 승강장'],
					answer: 2,
					why: '남자는 10시 15분 완행열차가 느리다며 I would like a seat on the next express라고 했습니다. 표에서 그다음 급행은 11시에 출발하는 Express 103이고, 승강장은 3번입니다. 2번은 놓친 기차, 4번은 완행열차의 승강장입니다.'
				},
				{
					id: 'd39-08',
					text: 'What does the man want to do while he waits?',
					ko: '남자는 기다리는 동안 무엇을 하고 싶어 하는가?',
					options: ['Read a newspaper', 'Charge his phone', 'Buy a gift', 'Get a drink'],
					optionsKo: ['신문을 읽는다', '휴대 전화를 충전한다', '선물을 산다', '마실 것을 산다'],
					answer: 3,
					why: '남자가 Is there a place to get coffee while I wait?라고 물었습니다. coffee가 보기에서 a drink로 바뀌었습니다.'
				}
			],
			vocab: [
				['miss', '놓치다'],
				['local train', '완행열차'],
				['express', '급행열차'],
				['extra charge', '추가 요금'],
				['waiting room', '대합실']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '기내 방송',
			script: [
				[
					'M',
					'Good afternoon, passengers. This is your captain speaking. Welcome aboard Flight 305 to Taipei.'
				],
				[
					'M',
					'We are sorry for the late departure. A heavy rain shower closed the runway for thirty minutes. Our flight time today will be about two hours.'
				],
				[
					'M',
					'The weather in Taipei is sunny, with a light wind. Our cabin crew will soon come around with free drinks and snacks.'
				],
				[
					'M',
					'Please keep your seat belt fastened while you are in your seat. Thank you for flying with us.'
				]
			],
			scriptKo: [
				'승객 여러분, 안녕하십니까. 기장입니다. 타이베이행 305편에 탑승하신 것을 환영합니다.',
				'출발이 늦어져 죄송합니다. 강한 소나기로 활주로가 30분 동안 닫혀 있었습니다. 오늘 비행시간은 약 두 시간입니다.',
				'타이베이의 날씨는 맑고 바람이 약하게 붑니다. 잠시 후 승무원들이 무료 음료와 간식을 가지고 찾아뵙겠습니다.',
				'자리에 앉아 계시는 동안에는 안전벨트를 매 주십시오. 저희 항공편을 이용해 주셔서 감사합니다.'
			],
			questions: [
				{
					id: 'd39-09',
					text: 'Who is the speaker?',
					ko: '화자는 누구인가?',
					options: ['A travel agent', 'A hotel manager', 'A pilot', 'A bus driver'],
					optionsKo: ['여행사 직원', '호텔 지배인', '조종사', '버스 기사'],
					answer: 2,
					why: '첫 줄에서 This is your captain speaking이라고 했습니다. captain(기장)이 보기에서 A pilot으로 바뀌었습니다.'
				},
				{
					id: 'd39-10',
					text: 'Why was the departure delayed?',
					ko: '출발은 왜 지연되었는가?',
					options: [
						'A passenger was late.',
						'The weather was bad.',
						'The plane needed repairs.',
						'The crew arrived late.'
					],
					optionsKo: [
						'승객 한 명이 늦었다.',
						'날씨가 나빴다.',
						'비행기를 수리해야 했다.',
						'승무원이 늦게 도착했다.'
					],
					answer: 1,
					why: 'A heavy rain shower closed the runway for thirty minutes라고 했습니다. 소나기 때문에 활주로가 닫혔다는 말이 보기에서 The weather was bad로 바뀌었습니다.'
				},
				{
					id: 'd39-11',
					text: 'What will the cabin crew do soon?',
					ko: '승무원들은 곧 무엇을 할 것인가?',
					options: [
						'Check tickets',
						'Collect headphones',
						'Sell gifts',
						'Hand out food and drinks'
					],
					optionsKo: ['표를 확인한다', '헤드폰을 걷는다', '선물을 판다', '음식과 음료를 나눠 준다'],
					answer: 3,
					why: 'Our cabin crew will soon come around with free drinks and snacks라고 했습니다. come around with free drinks and snacks가 보기에서 Hand out food and drinks로 바뀌었습니다.'
				}
			],
			vocab: [
				['captain', '기장'],
				['departure', '출발'],
				['runway', '활주로'],
				['flight time', '비행시간'],
				['cabin crew', '승무원'],
				['fasten', '매다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-12',
			text: 'The airport shuttle was ------- crowded on Saturday morning.',
			options: ['extreme', 'extremely', 'extremes', 'extremity'],
			answer: 1,
			ko: '토요일 아침에 공항 셔틀버스는 몹시 붐볐습니다.',
			why: '빈칸은 be동사 was와 형용사 crowded 사이입니다. 형용사를 꾸미는 것은 부사이므로 extremely가 정답입니다.',
			notes: ['형용사', '부사 (정답)', '명사의 복수형', '명사'],
			vocab: [
				['airport shuttle', '공항 셔틀버스'],
				['extremely', '몹시, 매우'],
				['crowded', '붐비는']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-13',
			text: 'Ms. Ishida ------- to Singapore on business next Tuesday.',
			options: ['traveled', 'has traveled', 'traveling', 'will travel'],
			answer: 3,
			ko: '이시다 씨는 다음 주 화요일에 업무차 싱가포르에 갑니다.',
			why: '문장 끝의 next Tuesday(다음 주 화요일)가 미래를 나타냅니다. 미래 시제 will travel이 정답입니다.',
			notes: ['과거', '현재완료', '-ing형 — 동사가 될 수 없음', '미래 (정답)'],
			vocab: [
				['travel', '이동하다, 여행하다'],
				['on business', '업무차']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-14',
			text: 'Please check the departure time before ------- for the airport.',
			options: ['leaving', 'leave', 'left', 'leaves'],
			answer: 0,
			ko: '공항으로 떠나기 전에 출발 시간을 확인해 주세요.',
			why: '빈칸 앞에 전치사 before가 있습니다. 전치사 뒤에 동사를 쓰려면 동명사로 바꿔야 하므로 leaving이 정답입니다.',
			notes: ['동명사 (정답)', '동사원형', '과거형', '-s가 붙은 동사'],
			vocab: [
				['departure time', '출발 시간'],
				['leave for', '~로 떠나다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-15',
			text: 'All passengers must stay in their seats ------- takeoff and landing.',
			options: ['while', 'because', 'during', 'although'],
			answer: 2,
			ko: '모든 승객은 이륙과 착륙 중에 자리에 앉아 있어야 합니다.',
			why: '빈칸 뒤 takeoff and landing(이륙과 착륙)은 주어와 동사가 없는 명사 덩어리입니다. 명사 앞에는 전치사가 오므로 during(~ 동안)이 정답입니다. while은 뜻이 같지만 접속사라서 뒤에 주어 + 동사가 옵니다.',
			notes: [
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사 (정답)',
				'접속사 — 뒤에 주어 + 동사가 와야 함'
			],
			vocab: [
				['passenger', '승객'],
				['takeoff', '이륙'],
				['landing', '착륙'],
				['during', '~ 동안']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-16',
			text: 'The night train to Busan is ------- than the morning train.',
			options: ['quiet', 'quieter', 'quietest', 'quietly'],
			answer: 1,
			ko: '부산행 야간열차는 아침 열차보다 조용합니다.',
			why: '빈칸 뒤에 than(~보다)이 있으므로 비교급 quieter가 정답입니다.',
			notes: ['원급', '비교급 (정답)', '최상급', '부사'],
			vocab: [
				['night train', '야간열차'],
				['quiet', '조용한'],
				['than', '~보다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-17',
			text: 'The airline charges an extra ------- for each additional bag.',
			options: ['fee', 'route', 'delay', 'view'],
			answer: 0,
			ko: '그 항공사는 가방이 하나 추가될 때마다 추가 요금을 부과합니다.',
			why: '빈칸 앞 동사 charges(부과하다)와 짝이 되는 명사를 찾습니다. charge an extra fee는 "추가 요금을 부과하다"입니다.',
			notes: ['요금 (정답)', '노선', '지연', '전망'],
			vocab: [
				['airline', '항공사'],
				['charge', '(요금을) 부과하다'],
				['extra fee', '추가 요금'],
				['additional', '추가의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd39-18',
			text: 'Mr. Seo will ------- a hotel room near the convention center for two nights.',
			options: ['attend', 'depart', 'reserve', 'deliver'],
			answer: 2,
			ko: '서 씨는 컨벤션 센터 근처의 호텔 객실을 2박 예약할 것입니다.',
			why: '빈칸 뒤 a hotel room(호텔 객실)과 짝이 되는 동사를 찾습니다. reserve a room은 "객실을 예약하다"입니다.',
			notes: ['참석하다', '출발하다', '예약하다 (정답)', '배달하다'],
			vocab: [
				['reserve', '예약하다'],
				['convention center', '컨벤션 센터'],
				['for two nights', '2박 동안']
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
						['To', 'Dojin Maeng'],
						['From', 'Seaside Hotel Reservations'],
						['Subject', 'Your reservation']
					],
					body: [
						'Dear Mr. Maeng,',
						'Thank you for choosing Seaside Hotel. Your reservation for a double room from August 5 to August 8 {1}.',
						'Check-in begins at 3 P.M. If you plan to arrive late at night, please let us know {2} advance.',
						'We also offer a free shuttle bus from the airport. {3} You can find the bus stop outside Exit 4.',
						'If you need to change your booking, please call 555-0134. We hope you enjoy {4} stay with us.',
						'Seaside Hotel Reservations Team'
					],
					ko: [
						'맹 선생님께,',
						'시사이드 호텔을 선택해 주셔서 감사합니다. 8월 5일부터 8월 8일까지 2인실 예약이 확정되었습니다.',
						'입실은 오후 3시부터입니다. 밤늦게 도착하실 예정이면 미리 알려 주세요.',
						'공항에서 오는 무료 셔틀버스도 운행합니다. 셔틀버스는 오후 10시까지 30분마다 다닙니다. 버스 정류장은 4번 출구 밖에 있습니다.',
						'예약을 변경해야 하면 555-0134로 전화해 주세요. 저희 호텔에서 즐겁게 머무르시기 바랍니다.',
						'시사이드 호텔 예약팀'
					]
				}
			],
			questions: [
				{
					id: 'd39-19',
					options: ['has been confirmed', 'has confirmed', 'confirming', 'will confirm'],
					answer: 0,
					why: '주어 Your reservation(예약)은 "확정되는" 대상이고 빈칸 뒤에 목적어가 없습니다. 수동태 has been confirmed가 정답입니다.',
					notes: [
						'수동태 (정답)',
						'능동 — 뒤에 목적어가 필요함',
						'-ing형 — 동사가 될 수 없음',
						'능동 — 뒤에 목적어가 필요함'
					]
				},
				{
					id: 'd39-20',
					options: ['on', 'at', 'in', 'for'],
					answer: 2,
					why: 'in advance는 "미리"라는 뜻으로 통째로 쓰는 표현입니다. 늦게 도착할 예정이면 미리 알려 달라는 흐름에 맞습니다.',
					notes: [
						'advance와 함께 쓰지 않음',
						'advance와 함께 쓰지 않음',
						'in advance — 미리 (정답)',
						'advance와 함께 쓰지 않음'
					]
				},
				{
					id: 'd39-21',
					options: [
						'The pool is closed for cleaning today.',
						'It runs every thirty minutes until 10 P.M.',
						'Your room has a view of the sea.',
						'Please return the car by noon.'
					],
					optionsKo: [
						'수영장은 오늘 청소 때문에 닫습니다.',
						'셔틀버스는 오후 10시까지 30분마다 다닙니다.',
						'객실에서는 바다가 보입니다.',
						'차는 정오까지 반납해 주세요.'
					],
					answer: 1,
					why: '앞 문장에서 a free shuttle bus(무료 셔틀버스)를 소개했고, 뒤 문장은 버스 정류장의 위치를 알려 줍니다. 그 사이에는 셔틀버스를 It으로 받아 운행 간격을 알려 주는 (B)가 들어가야 합니다.'
				},
				{
					id: 'd39-22',
					options: ['you', 'yours', 'yourself', 'your'],
					answer: 3,
					why: '빈칸 뒤에 명사 stay(숙박)가 있습니다. 명사 앞에는 소유격이 오므로 your가 정답입니다.',
					notes: [
						'주격·목적격',
						'소유대명사 — 뒤에 명사가 올 수 없음',
						'재귀대명사',
						'소유격 (정답)'
					]
				}
			],
			vocab: [
				['reservation', '예약'],
				['confirm', '확정하다'],
				['check-in', '입실 수속'],
				['in advance', '미리'],
				['shuttle bus', '셔틀버스'],
				['booking', '예약']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Blue Coast Car Rental',
					body: [
						'Are you planning a trip to Jeju? Rent a car from Blue Coast Car Rental and see the island at your own speed. Our office is right outside the airport arrival hall, so you can pick up your car as soon as you land.',
						'Small cars start at 40 dollars a day. Book on our Web site at least three days before your trip and save 10 percent. A road map and a child seat are included at no extra cost.',
						"To rent a car, you must be at least 21 years old and show a valid driver's license. For more information, call us at 555-0171."
					],
					ko: [
						'제주 여행을 계획하고 계신가요? 블루 코스트 렌터카에서 차를 빌려 원하는 속도로 섬을 둘러보세요. 저희 사무실은 공항 도착장 바로 밖에 있어서 도착하자마자 차를 받으실 수 있습니다.',
						'소형차는 하루 40달러부터입니다. 여행 3일 전까지 웹사이트에서 예약하시면 10퍼센트를 할인받습니다. 도로 지도와 어린이용 카시트는 추가 요금 없이 드립니다.',
						'차를 빌리려면 만 21세 이상이어야 하고 유효한 운전면허증을 보여 주셔야 합니다. 자세한 내용은 555-0171로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd39-23',
					text: 'What is being advertised?',
					ko: '무엇이 광고되고 있는가?',
					options: [
						'A travel insurance plan',
						'A vehicle rental service',
						'A driving school',
						'An airport hotel'
					],
					optionsKo: ['여행자 보험 상품', '차량 대여 서비스', '운전 학원', '공항 호텔'],
					answer: 1,
					why: '제목이 Blue Coast Car Rental이고, 첫 문단에서 Rent a car from Blue Coast Car Rental이라고 했습니다. car가 보기에서 vehicle로 바뀌었습니다.'
				},
				{
					id: 'd39-24',
					text: 'How can customers save 10 percent?',
					ko: '고객은 어떻게 10퍼센트를 할인받을 수 있는가?',
					options: [
						'By paying in cash',
						'By renting a small car',
						'By reserving online in advance',
						'By showing a plane ticket'
					],
					optionsKo: [
						'현금으로 결제해서',
						'소형차를 빌려서',
						'미리 온라인으로 예약해서',
						'항공권을 보여 줘서'
					],
					answer: 2,
					why: 'Book on our Web site at least three days before your trip and save 10 percent라고 했습니다. Book on our Web site가 보기에서 reserving online으로, at least three days before your trip이 in advance로 바뀌었습니다.'
				},
				{
					id: 'd39-25',
					text: 'Who most likely cannot rent a car from Blue Coast Car Rental?',
					ko: '블루 코스트 렌터카에서 차를 빌릴 수 없는 사람은 누구이겠는가?',
					options: [
						'A person who is 19 years old',
						'A person traveling with a child',
						'A person who needs a car for one day',
						'A person arriving by plane'
					],
					optionsKo: [
						'19세인 사람',
						'아이와 함께 여행하는 사람',
						'하루 동안 차가 필요한 사람',
						'비행기로 도착하는 사람'
					],
					answer: 0,
					why: 'you must be at least 21 years old라고 했으므로 19세인 사람은 차를 빌릴 수 없습니다. 어린이용 카시트를 주고(a child seat), 하루 단위로 요금을 받으며(40 dollars a day), 사무실이 공항 앞에 있으므로 나머지 사람은 빌릴 수 있습니다.'
				}
			],
			vocab: [
				['rent', '빌리다'],
				['arrival hall', '도착장'],
				['pick up', '받아 가다'],
				['at no extra cost', '추가 요금 없이'],
				['valid', '유효한'],
				["driver's license", '운전면허증']
			]
		}
	]
} satisfies DayContent;
