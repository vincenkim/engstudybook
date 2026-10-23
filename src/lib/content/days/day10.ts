import type { DayContent } from '../schema';

export default {
	goals: [
		'시간 전치사 at / on / in, by / until, for / during을 구분한다',
		'장소·방향 전치사와 짝 표현을 익힌다',
		'제안·요청하는 말에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '시간 전치사',
			blocks: [
				{
					type: 'p',
					text: '보기가 모두 전치사이면 빈칸 **뒤에 오는 말**을 봅니다. 시각인지, 요일인지, 기간인지에 따라 전치사가 정해집니다.'
				},
				{
					type: 'table',
					head: ['전치사', '쓰임', '예'],
					rows: [
						['at', '시각', 'at 3 P.M., at noon'],
						['on', '요일·날짜', 'on Monday, on May 5'],
						['in', '월·연도·계절', 'in March, in 2026'],
						['by', '~까지 (마감)', 'submit it by Friday'],
						['until', '~까지 (계속)', 'open until 9 P.M.'],
						['for', '~ 동안 + 숫자 기간', 'for three days'],
						['during', '~ 동안 + 행사·기간 이름', 'during the meeting'],
						['since', '~ 이후로', 'since last year'],
						['within', '~ 이내에', 'within 30 days']
					]
				},
				{
					type: 'box',
					title: 'by와 until',
					items: [
						'**by** — 그때까지 **한 번 끝내면** 되는 일 (submit, finish, return, arrive, receive)',
						'**until** — 그때까지 **계속되는** 일 (stay, wait, remain, be open, last)'
					]
				},
				{
					type: 'box',
					title: 'for와 during',
					items: [
						'**for** + 숫자가 있는 기간 — for two hours',
						'**during** + 행사·기간의 이름 — during the conference'
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '장소·방향 전치사',
			blocks: [
				{
					type: 'table',
					head: ['전치사', '쓰임', '예'],
					rows: [
						['at', '지점·건물', 'at the airport, at the front desk'],
						['in', '~ 안에 (공간·도시)', 'in the office, in Seoul'],
						['on', '~ 위에 (표면·층·거리)', 'on the desk, on the second floor'],
						['to', '~로, ~에게 (도착지)', 'go to the bank, send it to Mr. Kim'],
						['from', '~로부터', 'from the supplier'],
						['between', '(둘) 사이에', 'between the bank and the café'],
						['next to / near', '~ 옆에 / 근처에', 'next to the elevator'],
						['across from', '~ 맞은편에', 'across from the park'],
						['throughout', '~ 곳곳에, ~ 전체에', 'throughout the building']
					]
				},
				{
					type: 'tip',
					text: '**from A to B**, **between A and B**는 짝으로 다닙니다. 문장에서 to나 and가 보이면 짝을 떠올리세요.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Please submit your report ------- Friday.',
			options: ['by', 'until', 'during', 'for'],
			answer: 0,
			ko: '금요일까지 보고서를 제출해 주세요.',
			steps: [
				'보기가 모두 전치사입니다. 빈칸 뒤 말과의 관계를 봅니다.',
				'빈칸 뒤는 **Friday**라는 시점입니다. during과 for는 기간 앞에 쓰므로 지웁니다.',
				'submit(제출하다)은 그때까지 **한 번 끝내면** 되는 일입니다. 마감을 나타내는 **by**가 정답입니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The store will stay open ------- 10 P.M. this week.',
			options: ['by', 'for', 'during', 'until'],
			answer: 3,
			ko: '그 매장은 이번 주에 오후 10시까지 문을 엽니다.',
			steps: [
				'빈칸 뒤는 **10 P.M.**이라는 시점입니다. for와 during은 기간 앞에 쓰므로 지웁니다.',
				'stay open(계속 열려 있다)은 그때까지 **계속되는** 상태입니다.',
				'계속을 나타내는 **until**이 정답입니다. 정답은 (D)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-01',
			text: 'The meeting will begin ------- 2 P.M. in the main conference room.',
			options: ['at', 'on', 'in', 'for'],
			answer: 0,
			ko: '회의는 대회의실에서 오후 2시에 시작됩니다.',
			why: '2 P.M. 같은 시각 앞에는 at을 씁니다.',
			notes: ['시각 앞 (정답)', '요일·날짜 앞', '월·연도 앞', '숫자 기간 앞'],
			vocab: [
				['begin', '시작하다'],
				['conference room', '회의실']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-02',
			text: 'The new policy takes effect ------- Monday.',
			options: ['at', 'on', 'in', 'during'],
			answer: 1,
			ko: '새 정책은 월요일에 시행됩니다.',
			why: '요일 앞에는 on을 씁니다.',
			notes: ['시각 앞', '요일·날짜 앞 (정답)', '월·연도 앞', '행사·기간 이름 앞'],
			vocab: [
				['policy', '정책'],
				['take effect', '시행되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-03',
			text: 'Our company was founded ------- 1998.',
			options: ['at', 'on', 'in', 'by'],
			answer: 2,
			ko: '저희 회사는 1998년에 설립되었습니다.',
			why: '연도 앞에는 in을 씁니다.',
			notes: ['시각 앞', '요일·날짜 앞', '월·연도 앞 (정답)', '~까지 (마감)'],
			vocab: [['found', '설립하다']]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-04',
			text: 'All applications must be received ------- the end of the month.',
			options: ['until', 'since', 'between', 'by'],
			answer: 3,
			ko: '모든 지원서는 이번 달 말까지 접수되어야 합니다.',
			why: '그때까지 한 번 끝나면 되는 일(receive)에는 by를 씁니다. until은 그때까지 계속되는 일에 씁니다.',
			notes: [
				'~까지 (계속) — 한 번 끝나는 일에는 쓰지 않음',
				'~ 이후로',
				'(둘) 사이에',
				'~까지 (마감) (정답)'
			],
			vocab: [
				['application', '지원서'],
				['receive', '접수하다, 받다'],
				['by the end of', '~ 말까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-05',
			text: 'The library is open ------- 9 P.M. on weekdays.',
			options: ['by', 'until', 'during', 'since'],
			answer: 1,
			ko: '그 도서관은 평일에 오후 9시까지 문을 엽니다.',
			why: '문을 여는 상태가 그때까지 계속되므로 until을 씁니다.',
			notes: [
				'~까지 (마감) — 계속되는 일에는 쓰지 않음',
				'~까지 (계속) (정답)',
				'~ 동안',
				'~ 이후로'
			],
			vocab: [
				['library', '도서관'],
				['weekday', '평일']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-06',
			text: 'Mr. Koo has worked here ------- three years.',
			options: ['for', 'during', 'since', 'by'],
			answer: 0,
			ko: '구 씨는 이곳에서 3년 동안 일했습니다.',
			why: 'three years처럼 숫자가 있는 기간 앞에는 for를 씁니다.',
			notes: [
				'~ 동안 + 숫자 기간 (정답)',
				'~ 동안 + 행사·기간 이름',
				'~ 이후로 + 시작 시점',
				'~까지 (마감)'
			],
			vocab: [
				['work', '일하다'],
				['for three years', '3년 동안']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-07',
			text: 'Please turn off your phone ------- the presentation.',
			options: ['between', 'since', 'during', 'within'],
			answer: 2,
			ko: '발표 중에는 휴대 전화를 꺼 주세요.',
			why: 'the presentation 같은 행사 이름 앞에서 "~ 동안"은 during을 씁니다.',
			notes: ['(둘) 사이에', '~ 이후로', '~ 동안 + 행사 이름 (정답)', '~ 이내에 + 숫자 기간'],
			vocab: [
				['turn off', '끄다'],
				['presentation', '발표']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-08',
			text: 'The package will arrive ------- two business days.',
			options: ['since', 'until', 'between', 'within'],
			answer: 3,
			ko: '소포는 영업일 기준 이틀 이내에 도착할 것입니다.',
			why: 'within + 기간은 "~ 이내에"입니다.',
			notes: ['~ 이후로', '~까지 (계속)', '(둘) 사이에', '~ 이내에 (정답)'],
			vocab: [
				['package', '소포'],
				['arrive', '도착하다'],
				['business day', '영업일']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-09',
			text: 'Sales have increased ------- last summer.',
			options: ['since', 'for', 'during', 'within'],
			answer: 0,
			ko: '지난여름 이후로 매출이 증가했습니다.',
			why: 'last summer는 시작 시점입니다. "~ 이후로 지금까지"는 since를 쓰고, 현재완료(have increased)와 함께 나옵니다.',
			notes: [
				'~ 이후로 + 시작 시점 (정답)',
				'~ 동안 + 숫자 기간',
				'~ 동안 + 행사 이름',
				'~ 이내에'
			],
			vocab: [
				['sales', '매출'],
				['increase', '증가하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-10',
			text: 'The café is located ------- the bank and the post office.',
			options: ['next', 'between', 'across', 'throughout'],
			answer: 1,
			ko: '그 카페는 은행과 우체국 사이에 있습니다.',
			why: 'between A and B는 "A와 B 사이에"입니다. and가 짝이라는 신호입니다.',
			notes: ['next to로 써야 함', 'between A and B (정답)', 'across from으로 써야 함', '~ 곳곳에'],
			vocab: [
				['be located', '위치해 있다'],
				['between A and B', 'A와 B 사이에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-11',
			text: 'The meeting room is ------- the third floor.',
			options: ['on', 'in', 'at', 'to'],
			answer: 0,
			ko: '회의실은 3층에 있습니다.',
			why: '층(floor) 앞에는 on을 씁니다.',
			notes: ['층·표면 앞 (정답)', '~ 안에', '지점 앞', '~로 (방향)'],
			vocab: [
				['meeting room', '회의실'],
				['floor', '층']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-12',
			text: 'The shuttle bus runs ------- the hotel to the airport every hour.',
			options: ['between', 'at', 'in', 'from'],
			answer: 3,
			ko: '셔틀버스는 호텔에서 공항까지 매시간 운행합니다.',
			why: 'from A to B는 "A에서 B까지"입니다. 뒤의 to가 짝이라는 신호입니다.',
			notes: ['between A and B로 써야 함', '지점 앞', '~ 안에', 'from A to B (정답)'],
			vocab: [
				['run', '운행하다'],
				['from A to B', 'A에서 B까지'],
				['every hour', '매시간']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-13',
			text: 'Free Wi-Fi is available ------- the building.',
			options: ['between', 'since', 'throughout', 'during'],
			answer: 2,
			ko: '건물 전체에서 무료 와이파이를 이용할 수 있습니다.',
			why: 'throughout + 장소는 "~ 곳곳에, ~ 전체에"입니다.',
			notes: ['(둘) 사이에', '~ 이후로', '~ 전체에 (정답)', '~ 동안 — 장소 앞에 쓰지 않음'],
			vocab: [
				['available', '이용할 수 있는'],
				['throughout', '~ 전체에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-14',
			text: 'The pharmacy is ------- from the subway station.',
			options: ['next', 'across', 'between', 'throughout'],
			answer: 1,
			ko: '그 약국은 지하철역 맞은편에 있습니다.',
			why: 'across from은 "~ 맞은편에"입니다. 뒤의 from이 짝이라는 신호입니다.',
			notes: ['next to로 써야 함', 'across from (정답)', 'between A and B로 써야 함', '~ 곳곳에'],
			vocab: [
				['pharmacy', '약국'],
				['across from', '~ 맞은편에'],
				['subway station', '지하철역']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd10-15',
			text: 'Please send the invoice ------- the accounting department.',
			options: ['at', 'on', 'to', 'in'],
			answer: 2,
			ko: '청구서를 회계부로 보내 주세요.',
			why: 'send A to B는 "A를 B에게 보내다"입니다. 도착지 앞에는 to를 씁니다.',
			notes: ['지점 앞', '표면·요일 앞', '~에게, ~로 (정답)', '~ 안에'],
			vocab: [
				['send A to B', 'A를 B에게 보내다'],
				['invoice', '청구서'],
				['accounting department', '회계부']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '제안·요청문: 수락하거나 거절한다',
			blocks: [
				{
					type: 'p',
					text: '무엇을 하자고 **제안**하거나 해 달라고 **요청**하는 말입니다. 정답은 수락이나 거절입니다.'
				},
				{
					type: 'table',
					head: ['종류', '표현'],
					rows: [
						['제안', "Why don't we ~? / How about ~? / Let's ~. / Shall we ~?"],
						['요청', 'Can you ~? / Could you ~? / Would you mind -ing? / Please ~.'],
						['해 주겠다는 제안', 'Would you like me to ~?']
					]
				},
				{
					type: 'table',
					head: ['응답', '예'],
					rows: [
						['수락', "Sure. / Of course. / No problem. / That's a good idea. / Sounds good."],
						['거절', "I'm sorry, but ~. / I'm afraid I can't. / Thanks, but ~."],
						['되묻기·다른 제안', "What time? / Let's wait a little."]
					]
				},
				{
					type: 'tip',
					text: 'Would you mind ~?의 mind는 "꺼리다"입니다. **Not at all.**(전혀 꺼리지 않아요)이 수락입니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Could you send me the meeting notes?',
			options: ['Yes, I met him.', "Sure, I'll e-mail them now.", 'A notebook.'],
			answer: 1,
			ko: '회의 메모를 보내 주실 수 있나요?',
			optionsKo: ['네, 그를 만났어요.', '물론이죠, 지금 이메일로 보낼게요.', '공책이요.'],
			steps: [
				'**Could you ~?**는 부탁하는 말입니다. 수락이나 거절이 정답입니다.',
				'(A)는 Yes로 시작했지만 meeting과 비슷한 met을 써서 관계없는 말을 했습니다. 지웁니다.',
				'(C)는 notes와 비슷한 notebook을 썼습니다. 지웁니다.',
				'(B)는 Sure로 수락하고 어떻게 할지 덧붙였습니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-16',
			script: 'Could you help me move this table?',
			options: ['Sure, where do you want it?', 'A table for six.', 'Yes, I moved last year.'],
			answer: 0,
			ko: '이 탁자 옮기는 것을 도와주실 수 있나요?',
			optionsKo: ['물론이죠, 어디에 둘까요?', '6인용 테이블이요.', '네, 저는 작년에 이사했어요.'],
			why: 'Sure로 부탁을 받아들인 (A)가 정답입니다.',
			notes: [
				'수락 (정답)',
				'table 반복 — 질문과 무관',
				'move(옮기다)와 철자가 같은 move(이사하다)'
			],
			vocab: [
				['move', '옮기다'],
				['Sure', '물론이죠']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-17',
			script: "Why don't we have lunch together today?",
			options: ['Because I was hungry.', 'Sounds good to me.', 'The lunch menu.'],
			answer: 1,
			ko: '오늘 점심 같이 먹는 게 어때요?',
			optionsKo: ['배가 고팠기 때문이에요.', '좋아요.', '점심 메뉴요.'],
			why: "Why don't we ~?는 제안입니다. Sounds good으로 받아들인 (B)가 정답입니다.",
			notes: [
				'Because로 시작하지만 제안에 대한 답이 아님',
				'수락 (정답)',
				'lunch 반복 — 질문과 무관'
			],
			vocab: [
				["Why don't we ~?", '~하는 게 어때요?'],
				['Sounds good', '좋아요']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-18',
			script: 'Would you mind closing the window?',
			options: ["Yes, it's closed.", 'A window seat.', 'Not at all.'],
			answer: 2,
			ko: '창문을 닫아 주시겠어요?',
			optionsKo: ['네, 닫혀 있어요.', '창가 좌석이요.', '그럼요, 닫을게요.'],
			why: 'Would you mind ~?는 "~하는 것을 꺼리시나요?"라는 뜻입니다. Not at all(전혀 꺼리지 않는다)이 수락입니다.',
			notes: ['close 반복 — 부탁에 대한 답이 아님', 'window 반복 — 질문과 무관', '수락 (정답)'],
			vocab: [
				['Would you mind -ing?', '~해 주시겠어요?'],
				['Not at all', '전혀요 (수락)']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-19',
			script: "Let's take a taxi to the station.",
			options: ["Good idea, we're running late.", 'A tax form.', 'At the station.'],
			answer: 0,
			ko: '역까지 택시를 탑시다.',
			optionsKo: ['좋은 생각이에요, 우리 늦었어요.', '세금 양식이요.', '역에서요.'],
			why: "Let's ~는 제안입니다. Good idea로 받아들인 (A)가 정답입니다.",
			notes: ['수락 (정답)', 'taxi와 발음이 비슷한 tax', 'station 반복 — 장소로 답함'],
			vocab: [
				["Let's ~", '~합시다'],
				['run late', '늦다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-20',
			script: 'Can you cover my shift on Saturday?',
			options: ['A new cover.', 'Yes, it shifted.', "I'm sorry, I have plans that day."],
			answer: 2,
			ko: '토요일에 제 근무를 대신해 줄 수 있나요?',
			optionsKo: ['새 덮개요.', '네, 그것이 옮겨졌어요.', '죄송해요, 그날은 약속이 있어요.'],
			why: "I'm sorry로 부탁을 거절하고 이유를 말한 (C)가 정답입니다.",
			notes: [
				'cover(대신하다)와 철자가 같은 cover(덮개)',
				'shift(근무)와 철자가 같은 shift(옮기다)',
				'거절 + 이유 (정답)'
			],
			vocab: [
				['cover a shift', '근무를 대신하다'],
				['have plans', '약속이 있다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-21',
			script: "How about meeting at three o'clock?",
			options: ['In the lobby.', 'That works for me.', 'Three people.'],
			answer: 1,
			ko: '3시에 만나는 게 어때요?',
			optionsKo: ['로비에서요.', '저는 좋아요.', '세 명이요.'],
			why: 'How about ~?은 제안입니다. That works for me(저는 괜찮아요)로 받아들인 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '수락 (정답)', 'three 반복 — 인원으로 답함'],
			vocab: [
				['How about -ing?', '~하는 게 어때요?'],
				['That works for me', '저는 괜찮아요']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-22',
			script: 'Would you like me to print the agenda?',
			options: ['Yes, that would be helpful.', 'On the printer.', 'A long agenda.'],
			answer: 0,
			ko: '안건을 인쇄해 드릴까요?',
			optionsKo: ['네, 그러면 도움이 되겠어요.', '프린터 위에요.', '긴 안건이에요.'],
			why: 'Would you like me to ~?는 "제가 ~해 드릴까요?"라는 제안입니다. 받아들인 (A)가 정답입니다.',
			notes: ['수락 (정답)', 'print와 비슷한 printer — 장소로 답함', 'agenda 반복 — 질문과 무관'],
			vocab: [
				['Would you like me to ~?', '제가 ~해 드릴까요?'],
				['agenda', '안건'],
				['helpful', '도움이 되는']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-23',
			script: 'Could you tell me where the restroom is?',
			options: ['Take a rest.', 'Yes, I could.', "It's down the hall on the left."],
			answer: 2,
			ko: '화장실이 어디인지 알려 주실 수 있나요?',
			optionsKo: ['쉬세요.', '네, 할 수 있어요.', '복도를 따라가면 왼쪽에 있어요.'],
			why: '위치를 바로 알려 준 (C)가 정답입니다. Could you tell me where ~?는 사실상 Where 질문입니다.',
			notes: [
				'restroom과 비슷한 rest',
				'Yes만 말하고 위치를 알려 주지 않음',
				'위치를 알려 줌 (정답)'
			],
			vocab: [
				['restroom', '화장실'],
				['down the hall', '복도를 따라']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-24',
			script: 'Shall we start the meeting now?',
			options: ['It started yesterday.', "Let's wait for Mr. Ham.", 'In room three.'],
			answer: 1,
			ko: '이제 회의를 시작할까요?',
			optionsKo: ['어제 시작했어요.', '함 씨를 기다립시다.', '3번 방에서요.'],
			why: 'Shall we ~?는 제안입니다. 조금 기다리자고 답한 (B)가 정답입니다.',
			notes: [
				'start 반복 — 시제가 맞지 않음',
				'다른 제안으로 답함 (정답)',
				'장소 — Where에 대한 답'
			],
			vocab: [
				['Shall we ~?', '~할까요?'],
				['wait for', '~을 기다리다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd10-25',
			script: 'Please let me know when the client arrives.',
			options: ["OK, I'll call you right away.", 'At the arrival gate.', 'A new client.'],
			answer: 0,
			ko: '고객이 도착하면 알려 주세요.',
			optionsKo: ['네, 바로 전화드릴게요.', '도착 게이트에서요.', '새 고객이에요.'],
			why: 'Please ~는 부탁입니다. OK로 받아들인 (A)가 정답입니다.',
			notes: ['수락 (정답)', 'arrive와 비슷한 arrival — 장소로 답함', 'client 반복 — 질문과 무관'],
			vocab: [
				['let me know', '알려 주다'],
				['right away', '바로']
			]
		}
	]
} satisfies DayContent;
