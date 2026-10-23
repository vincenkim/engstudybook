import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 4에서 앞뒤 말을 듣고 화자의 의도를 고른다',
		'Part 6 문장 삽입 문제를 앞뒤 문장의 연결로 푼다',
		'네 번의 모의고사 결과를 비교해 다시 풀 Day를 정한다'
	],
	pages: [
		{
			type: 'lesson',
			tag: '모의고사 안내',
			section: 'RC',
			title: '미니 모의고사 4: 채용과 행사',
			blocks: [
				{
					type: 'p',
					text: '마지막 4회차입니다. **실제 시험 순서**대로 25문항을 풉니다. 배경은 채용과 행사입니다. 지원, 면접, 취업 박람회, 행사 안내에 관한 말이 많이 나옵니다.'
				},
				{
					type: 'table',
					head: ['파트', '문항 수', '문제 형식'],
					rows: [
						['Part 2', '5', '질문을 듣고 알맞은 응답 고르기'],
						['Part 3', '3', '대화 1개를 듣고 풀기'],
						['Part 4', '3', '담화 1개를 듣고 풀기 (화자의 의도 문제 포함)'],
						['Part 5', '7', '문장의 빈칸 채우기'],
						['Part 6', '4', '지문 1개의 빈칸 채우기'],
						['Part 7', '3', '지문 1개를 읽고 풀기']
					]
				},
				{
					type: 'box',
					title: '푸는 방법',
					items: [
						'첫 화면의 설정에서 **채점 방식**이 "다 풀고 채점"인지 확인하고 시작합니다. "목차" 버튼을 누르면 첫 화면으로 갑니다.',
						'권장 시간은 **약 15분**입니다. 앞의 세 회차보다 시간을 덜 쓰는 것을 목표로 합니다.',
						'화자의 의도 문제는 따옴표 안의 말만 듣고 풀 수 없습니다. 그 말 **바로 앞 문장**을 듣고 뜻을 정합니다.',
						'문장 삽입 문제는 빈칸 **뒤 문장**이 앞의 무엇을 받아 이어지는지 봅니다.'
					]
				},
				{
					type: 'box',
					title: '끝난 뒤에',
					items: [
						'마지막 화면에서 채점한 뒤 "틀린 문제만 다시 풀기"로 ==틀린 문제만== 한 번 더 풉니다.',
						'네 회차의 파트별 점수를 나란히 놓고 가장 약한 파트를 찾습니다.'
					]
				},
				{
					type: 'p',
					text: '**40일 과정을 마친 뒤에는** 두 가지를 합니다. 먼저 목차에서 점수가 낮은 Day를 골라 틀린 문제만 다시 풉니다. 약한 파트가 Part 5·6이면 1~2단계, Part 7이나 Part 3·4이면 3단계의 Day부터 봅니다. 그다음에는 듣기 100문항과 읽기 100문항을 2시간 동안 푸는 **실제 길이의 모의고사**로 넘어가 시간 배분을 연습합니다.'
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd40-01',
			script: 'Who booked the restaurant for the retirement party?',
			options: [
				'Yes, it was a great party.',
				'At seven on Friday.',
				'Ms. Hwang from general affairs.'
			],
			answer: 2,
			ko: '퇴임 파티를 할 식당은 누가 예약했나요?',
			optionsKo: ['네, 멋진 파티였어요.', '금요일 7시에요.', '총무부의 황 씨요.'],
			why: 'Who로 물었으므로 사람 이름과 부서로 답한 (C)가 정답입니다.',
			notes: ['Yes로 시작, party 반복', '시간 — When에 대한 답', '사람 (정답)'],
			vocab: [
				['book', '예약하다'],
				['retirement party', '퇴임 파티'],
				['general affairs', '총무부']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd40-02',
			script: 'How many applications have we received so far?',
			options: ['I applied last month.', "I haven't counted them yet.", 'Before the interview.'],
			answer: 1,
			ko: '지금까지 지원서가 몇 통 들어왔나요?',
			optionsKo: ['저는 지난달에 지원했어요.', '아직 세어 보지 않았어요.', '면접 전에요.'],
			why: '숫자를 말하지 않고 "아직 세어 보지 않았다"고 돌려 말한 (B)가 정답입니다. 아직 모른다는 응답은 정답이 되는 경우가 많습니다.',
			notes: [
				'application과 비슷한 applied — 질문과 무관',
				'아직 모른다는 응답 (정답)',
				'시점 — When에 대한 답'
			],
			vocab: [
				['application', '지원서'],
				['receive', '받다'],
				['so far', '지금까지'],
				['count', '세다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd40-03',
			script: "The banquet hall can hold two hundred guests, can't it?",
			options: ["Yes, it's large enough.", 'Hold the line, please.', 'At a hotel downtown.'],
			answer: 0,
			ko: '연회장은 손님 200명을 수용할 수 있죠, 그렇지 않나요?',
			optionsKo: [
				'네, 충분히 넓어요.',
				'전화를 끊지 말고 기다려 주세요.',
				'시내에 있는 호텔에서요.'
			],
			why: '수용할 수 있다는 뜻으로 Yes라고 답하고 "충분히 넓다"고 덧붙인 (A)가 정답입니다.',
			notes: [
				'Yes + 덧붙이는 말 (정답)',
				'hold(수용하다)와 철자가 같은 hold(기다리다)',
				'장소 — Where에 대한 답'
			],
			vocab: [
				['banquet hall', '연회장'],
				['hold', '수용하다'],
				['guest', '손님'],
				['large enough', '충분히 넓은']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd40-04',
			script: 'Do you want to interview the applicants in person or by video call?',
			options: ['Yes, I do.', 'A new camera.', "I'd rather meet them face to face."],
			answer: 2,
			ko: '지원자들을 직접 만나서 면접할까요, 화상 통화로 할까요?',
			optionsKo: ['네, 그래요.', '새 카메라요.', '직접 얼굴을 보고 만나는 편이 좋겠어요.'],
			why: '둘 중 직접 만나는 쪽을 고른 (C)가 정답입니다. in person이 face to face로 바뀌었습니다.',
			notes: [
				'Yes로 시작 — 선택 의문문에 맞지 않음',
				'video에서 떠오르는 camera — 질문과 무관',
				'다른 말로 바꿔 고름 (정답)'
			],
			vocab: [
				['applicant', '지원자'],
				['in person', '직접 만나서'],
				['video call', '화상 통화'],
				['face to face', '얼굴을 마주하고']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd40-05',
			script: 'The guest speaker just called to say she will be late.',
			options: [
				"Then let's change the order of the program.",
				'A late breakfast.',
				'The speakers are too loud.'
			],
			answer: 0,
			ko: '초청 연사가 방금 전화해서 늦는다고 했어요.',
			optionsKo: [
				'그럼 프로그램 순서를 바꿉시다.',
				'늦은 아침 식사요.',
				'스피커 소리가 너무 커요.'
			],
			why: '연사가 늦는다는 말에 "그럼 순서를 바꾸자"고 해결책을 말한 (A)가 정답입니다.',
			notes: [
				'해결책을 말함 (정답)',
				'late 반복 — 내용이 무관함',
				'speaker(연사)와 철자가 같은 speaker(스피커)'
			],
			vocab: [
				['guest speaker', '초청 연사'],
				['be late', '늦다'],
				['order', '순서'],
				['program', '행사 순서, 프로그램']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['M', 'Sena, how many people have applied for the designer position?'],
				['W', 'Twelve so far, but only three of them have the experience we need.'],
				[
					'M',
					"That's fewer than I expected. Why don't we keep the job posting online for one more week?"
				],
				['W', "Good idea. I'll also put it on the university job board."],
				['M', "Thanks. In the meantime, let's interview those three people on Thursday."],
				['W', "Sure. I'll call them this afternoon to set up the times."]
			],
			scriptKo: [
				'세나 씨, 디자이너 자리에 몇 명이 지원했나요?',
				'지금까지 열두 명인데, 우리가 원하는 경력을 갖춘 사람은 세 명뿐이에요.',
				'생각보다 적네요. 채용 공고를 온라인에 일주일 더 올려 두면 어떨까요?',
				'좋은 생각이에요. 대학교 취업 게시판에도 올릴게요.',
				'고마워요. 그동안 그 세 사람은 목요일에 면접을 봅시다.',
				'네. 오늘 오후에 제가 전화해서 시간을 정할게요.'
			],
			questions: [
				{
					id: 'd40-06',
					text: 'What are the speakers mainly discussing?',
					ko: '화자들은 주로 무엇에 관해 이야기하고 있는가?',
					options: [
						'Designing a Web site',
						'Finding a new employee',
						'Visiting a university',
						'Ordering office furniture'
					],
					optionsKo: [
						'웹사이트 디자인하기',
						'새 직원 구하기',
						'대학교 방문하기',
						'사무용 가구 주문하기'
					],
					answer: 1,
					why: '남자가 how many people have applied for the designer position?이라고 묻고, 이어서 채용 공고와 면접 이야기를 합니다. 디자이너를 새로 뽑는 일에 관한 대화입니다.'
				},
				{
					id: 'd40-07',
					text: 'What does the man suggest?',
					ko: '남자는 무엇을 제안하는가?',
					options: [
						'Keeping an advertisement up longer',
						'Raising the salary',
						'Hiring all twelve applicants',
						'Closing the position today'
					],
					optionsKo: [
						'공고를 더 오래 올려 두기',
						'급여 올리기',
						'지원자 열두 명을 모두 채용하기',
						'오늘 모집을 마감하기'
					],
					answer: 0,
					why: "남자가 Why don't we keep the job posting online for one more week?이라고 제안했습니다. job posting이 보기에서 advertisement로, for one more week가 longer로 바뀌었습니다."
				},
				{
					id: 'd40-08',
					text: 'What will the woman do this afternoon?',
					ko: '여자는 오늘 오후에 무엇을 할 것인가?',
					options: [
						'Write a job description',
						'Visit a university',
						'Order new computers',
						'Contact some applicants'
					],
					optionsKo: [
						'직무 설명서를 쓴다',
						'대학교를 방문한다',
						'새 컴퓨터를 주문한다',
						'지원자 몇 명에게 연락한다'
					],
					answer: 3,
					why: "여자가 I'll call them this afternoon to set up the times라고 했습니다. them은 면접을 볼 세 사람이고, call이 보기에서 Contact로 바뀌었습니다."
				}
			],
			vocab: [
				['apply for', '~에 지원하다'],
				['position', '자리, 직책'],
				['job posting', '채용 공고'],
				['job board', '취업 게시판'],
				['in the meantime', '그동안'],
				['set up', '(일정을) 정하다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발췌',
			script: [
				[
					'W',
					'One last thing, everyone. Our company will have a booth at the city job fair next Friday.'
				],
				[
					'W',
					'We expect many students to stop by, so we need four employees to answer their questions about working here. You will be at the fair from ten to three, and lunch is provided.'
				],
				['W', 'Mr. Yoon in human resources has the list. Three people have already signed up.'],
				['W', 'If you are interested, please talk to him today.']
			],
			scriptKo: [
				'여러분, 마지막으로 하나만 더 말씀드리겠습니다. 다음 주 금요일 시 취업 박람회에 우리 회사 부스가 설치됩니다.',
				'학생들이 많이 들를 것으로 예상되어, 우리 회사에서 일하는 것에 관한 질문에 답해 줄 직원 네 명이 필요합니다. 박람회장에는 10시부터 3시까지 있게 되며 점심이 제공됩니다.',
				'명단은 인사부의 윤 씨가 가지고 있습니다. 이미 세 명이 신청했습니다.',
				'관심 있는 분은 오늘 윤 씨에게 이야기해 주세요.'
			],
			questions: [
				{
					id: 'd40-09',
					text: 'What is the speaker mainly talking about?',
					ko: '화자는 주로 무엇에 관해 말하고 있는가?',
					options: [
						'A new company office',
						'A lunch menu',
						'Helpers needed for an event',
						'A tour for students'
					],
					optionsKo: ['회사의 새 사무실', '점심 메뉴', '행사에 필요한 도우미', '학생을 위한 견학'],
					answer: 2,
					why: 'Our company will have a booth at the city job fair라고 한 뒤 we need four employees to answer their questions라고 했습니다. 취업 박람회에서 일할 직원을 구한다는 말이 보기에서 Helpers needed for an event로 바뀌었습니다.'
				},
				{
					id: 'd40-10',
					text: 'What does the speaker imply when she says, "Three people have already signed up"?',
					ko: '화자가 "이미 세 명이 신청했습니다"라고 말할 때 암시하는 것은 무엇인가?',
					options: [
						'Only one place is left.',
						'The fair was canceled.',
						'The list is too long.',
						'More booths are needed.'
					],
					optionsKo: [
						'자리가 하나만 남았다.',
						'박람회가 취소되었다.',
						'명단이 너무 길다.',
						'부스가 더 필요하다.'
					],
					answer: 0,
					why: '앞에서 we need four employees(직원 네 명이 필요하다)라고 했습니다. 이미 세 명이 신청했으므로 남은 자리는 하나뿐이니 서두르라는 뜻입니다.'
				},
				{
					id: 'd40-11',
					text: 'What should interested listeners do?',
					ko: '관심 있는 청자들은 무엇을 해야 하는가?',
					options: [
						'Send an e-mail to students',
						'Speak to a coworker',
						'Go to the fair early',
						'Bring their own lunch'
					],
					optionsKo: [
						'학생들에게 이메일을 보낸다',
						'동료에게 이야기한다',
						'박람회장에 일찍 간다',
						'점심을 직접 가져온다'
					],
					answer: 1,
					why: 'Mr. Yoon in human resources has the list라고 한 뒤 If you are interested, please talk to him today라고 했습니다. talk to him이 보기에서 Speak to a coworker로 바뀌었습니다.'
				}
			],
			vocab: [
				['booth', '부스, 전시 공간'],
				['job fair', '취업 박람회'],
				['stop by', '들르다'],
				['human resources', '인사부'],
				['sign up', '신청하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-12',
			text: 'Mr. Fontaine was very ------- during his job interview.',
			options: ['confidence', 'confidently', 'confident', 'confide'],
			answer: 2,
			ko: '폰테인 씨는 면접 내내 매우 자신감이 있었습니다.',
			why: '빈칸은 be동사 was와 부사 very 뒤입니다. be동사 뒤에서 주어를 설명하는 형용사 자리이므로 confident가 정답입니다.',
			notes: ['명사', '부사', '형용사 (정답)', '동사'],
			vocab: [
				['confident', '자신감 있는'],
				['during', '~ 동안'],
				['job interview', '면접']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-13',
			text: 'The hiring manager asked ------- to arrive ten minutes early.',
			options: ['me', 'I', 'my', 'mine'],
			answer: 0,
			ko: '채용 담당자는 저에게 10분 일찍 도착하라고 했습니다.',
			why: '빈칸은 동사 asked 뒤 목적어 자리입니다. ask + 목적어 + to부정사는 "~에게 …해 달라고 하다"이므로 목적격 me가 정답입니다.',
			notes: [
				'목적격 (정답)',
				'주격 — 목적어 자리에 올 수 없음',
				'소유격 — 뒤에 명사가 필요함',
				'소유대명사 — 가리키는 대상이 없음'
			],
			vocab: [
				['hiring manager', '채용 담당자'],
				['ask ~ to', '~에게 …해 달라고 하다'],
				['arrive early', '일찍 도착하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-14',
			text: 'The name tags for the trade show ------- on the table by the door.',
			options: ['is', 'was', 'be', 'are'],
			answer: 3,
			ko: '무역 박람회용 이름표는 문 옆 탁자 위에 있습니다.',
			why: '주어는 The name tags이고 for the trade show는 꾸미는 말입니다. 주어가 복수이므로 are가 정답입니다. 빈칸 바로 앞의 show를 주어로 착각하지 않도록 합니다.',
			notes: [
				'단수 동사 — 주어는 복수 name tags',
				'단수 동사의 과거형',
				'동사원형 — 주어 뒤에 그대로 쓸 수 없음',
				'복수 동사 (정답)'
			],
			vocab: [
				['name tag', '이름표'],
				['trade show', '무역 박람회'],
				['by the door', '문 옆에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-15',
			text: 'The documents ------- for the position must be sent by Friday.',
			options: ['require', 'required', 'requiring', 'requires'],
			answer: 1,
			ko: '그 직책에 필요한 서류는 금요일까지 보내야 합니다.',
			why: '문장의 동사는 must be sent입니다. 빈칸은 명사 The documents를 뒤에서 꾸미는 분사 자리이고, 서류는 "요구되는" 것이므로 과거분사 required가 정답입니다.',
			notes: [
				'동사 — 동사 must be sent가 이미 있음',
				'과거분사 (정답)',
				'현재분사 — 뒤에 목적어가 필요함',
				'-s가 붙은 동사'
			],
			vocab: [
				['document', '서류'],
				['required', '필요한, 요구되는'],
				['position', '직책']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-16',
			text: 'The singer ------- performed at the opening ceremony is from Jeonju.',
			options: ['which', 'whose', 'what', 'who'],
			answer: 3,
			ko: '개막식에서 공연한 가수는 전주 출신입니다.',
			why: '빈칸 앞 The singer는 사람이고, 빈칸 뒤에 동사 performed가 바로 옵니다. 사람을 받는 주격 관계대명사 who가 정답입니다.',
			notes: [
				'사물을 받음',
				'소유격 — 뒤에 명사가 필요함',
				'앞에 꾸밈을 받는 명사가 있으면 쓸 수 없음',
				'사람을 받는 주격 (정답)'
			],
			vocab: [
				['perform', '공연하다'],
				['opening ceremony', '개막식'],
				['be from', '~ 출신이다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-17',
			text: 'Only ------- applicants will be invited to an interview.',
			options: ['qualified', 'crowded', 'expired', 'delayed'],
			answer: 0,
			ko: '자격을 갖춘 지원자만 면접에 초대됩니다.',
			why: '빈칸 뒤 applicants(지원자)를 꾸미는 형용사를 찾습니다. qualified applicants는 "자격을 갖춘 지원자"입니다.',
			notes: [
				'자격을 갖춘 (정답)',
				'붐비는 — 장소에 씀',
				'기한이 지난 — 카드·쿠폰에 씀',
				'지연된 — 일정·교통편에 씀'
			],
			vocab: [
				['qualified', '자격을 갖춘'],
				['applicant', '지원자'],
				['be invited to', '~에 초대되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd40-18',
			text: 'Please confirm your ------- at the dinner by replying to this invitation.',
			options: ['deadline', 'attendance', 'salary', 'opening'],
			answer: 1,
			ko: '이 초대장에 답장하여 만찬 참석 여부를 확인해 주세요.',
			why: '초대장에 답장해서 확인해 주는 것은 참석 여부입니다. confirm your attendance는 "참석을 확인하다"입니다.',
			notes: ['마감', '참석 (정답)', '급여', '공석, 개업'],
			vocab: [
				['confirm', '확인하다'],
				['attendance', '참석'],
				['reply to', '~에 답장하다'],
				['invitation', '초대장']
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
						['To', 'Owen Blake'],
						['From', 'Dahye Gong'],
						['Subject', 'Thank you']
					],
					body: [
						'Dear Mr. Blake,',
						'Thank you for meeting with me. I really {1} our talk about the marketing team yesterday.',
						'After the interview, I became even more interested in the position. {2} I believe this experience will help me in the job.',
						'I have attached a {3} of my past projects, as you requested. Please let me know if you need anything else.',
						'I am available to start work {4} May 1. Thank you again for your time.',
						'Dahye Gong'
					],
					ko: [
						'블레이크 선생님께,',
						'저를 만나 주셔서 감사합니다. 어제 마케팅팀에 관해 나눈 이야기가 정말 즐거웠습니다.',
						'면접을 본 뒤 이 자리에 더욱 관심이 생겼습니다. 말씀드린 대로 저는 광고 회사에서 3년 동안 일했습니다. 이 경험이 업무에 도움이 될 것이라고 생각합니다.',
						'요청하신 대로 제가 했던 프로젝트 목록을 첨부했습니다. 더 필요한 것이 있으면 알려 주세요.',
						'저는 5월 1일에 근무를 시작할 수 있습니다. 시간을 내 주셔서 다시 한번 감사드립니다.',
						'공다혜'
					]
				}
			],
			questions: [
				{
					id: 'd40-19',
					options: ['enjoy', 'enjoyed', 'will enjoy', 'enjoying'],
					answer: 1,
					why: '문장 끝의 yesterday(어제)가 과거를 나타냅니다. 과거 시제 enjoyed가 정답입니다.',
					notes: [
						'현재 — yesterday와 맞지 않음',
						'과거 (정답)',
						'미래 — yesterday와 맞지 않음',
						'-ing형 — 동사가 될 수 없음'
					]
				},
				{
					id: 'd40-20',
					options: [
						'The office is open from nine to six.',
						'Unfortunately, I cannot attend the interview.',
						'Your order will arrive next week.',
						'As I mentioned, I worked at an advertising company for three years.'
					],
					optionsKo: [
						'사무실은 9시부터 6시까지 엽니다.',
						'죄송하지만 면접에 참석할 수 없습니다.',
						'주문하신 물건은 다음 주에 도착합니다.',
						'말씀드린 대로 저는 광고 회사에서 3년 동안 일했습니다.'
					],
					answer: 3,
					why: '뒤 문장의 this experience(이 경험)가 가리킬 내용이 앞에 있어야 합니다. 광고 회사에서 3년 동안 일했다는 (D)가 들어가야 "이 경험"이 이어집니다. (B)는 면접을 이미 보았으므로 맞지 않습니다.'
				},
				{
					id: 'd40-21',
					options: ['list', 'seat', 'fee', 'trip'],
					answer: 0,
					why: 'a list of my past projects는 "제가 했던 프로젝트 목록"입니다. 보기 중 이메일에 첨부해 보낼 수 있는 것은 목록뿐입니다.',
					notes: ['목록 (정답)', '좌석', '요금', '여행']
				},
				{
					id: 'd40-22',
					options: ['at', 'in', 'on', 'to'],
					answer: 2,
					why: '빈칸 뒤 May 1은 날짜입니다. 날짜와 요일 앞에는 on을 씁니다.',
					notes: [
						'시각 앞에 씀 (at 9 A.M.)',
						'월·연도 앞에 씀 (in May)',
						'날짜·요일 앞에 씀 (정답)',
						'방향 — ~로'
					]
				}
			],
			vocab: [
				['meet with', '~와 만나다'],
				['interested in', '~에 관심 있는'],
				['position', '자리, 직책'],
				['attach', '첨부하다'],
				['as you requested', '요청하신 대로'],
				['available', '시간이 되는']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Millbrook Charity Run',
					body: [
						'The tenth Millbrook Charity Run will take place on Sunday, October 11, at Millbrook Sports Park. Runners can choose the 5-kilometer course or the 10-kilometer course. Both races start at 9 A.M.',
						"The entry fee is 20 dollars, and all of the money will go to the city children's hospital. Every runner will receive a T-shirt and a bottle of water.",
						'To take part, register online by September 30. We also need 50 volunteers to hand out water along the course. If you would like to help, please call the event office at 555-0157.'
					],
					ko: [
						'제10회 밀브룩 자선 달리기 대회가 10월 11일 일요일에 밀브룩 체육공원에서 열립니다. 참가자는 5킬로미터 코스와 10킬로미터 코스 중에서 고를 수 있습니다. 두 경기 모두 오전 9시에 시작합니다.',
						'참가비는 20달러이며, 모인 돈은 모두 시립 어린이 병원에 전달됩니다. 참가자 모두에게 티셔츠와 물 한 병을 드립니다.',
						'참가하려면 9월 30일까지 온라인으로 신청하세요. 코스에서 물을 나눠 줄 자원봉사자 50명도 필요합니다. 돕고 싶으신 분은 행사 사무실 555-0157로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd40-23',
					text: 'What is the notice mainly about?',
					ko: '공지는 주로 무엇에 관한 것인가?',
					options: [
						'A race that raises money',
						'The opening of a sports park',
						'A sale on running shoes',
						'A change in hospital hours'
					],
					optionsKo: [
						'기금을 모으는 달리기 대회',
						'체육공원 개장',
						'운동화 할인 행사',
						'병원 진료 시간 변경'
					],
					answer: 0,
					why: "첫 문장에서 Charity Run이 열린다고 알리고, 둘째 문단에서 all of the money will go to the city children's hospital이라고 했습니다. 병원을 돕기 위해 돈을 모으는 달리기 대회에 관한 글입니다."
				},
				{
					id: 'd40-24',
					text: 'What will every runner receive?',
					ko: '참가자는 모두 무엇을 받는가?',
					options: ['A medal', 'A free meal', 'A running cap', 'A shirt and a drink'],
					optionsKo: ['메달', '무료 식사', '달리기용 모자', '셔츠와 마실 것'],
					answer: 3,
					why: 'Every runner will receive a T-shirt and a bottle of water라고 했습니다. a T-shirt and a bottle of water가 보기에서 A shirt and a drink로 바뀌었습니다.'
				},
				{
					id: 'd40-25',
					text: 'What is NOT mentioned about the event?',
					ko: '행사에 대해 언급되지 않은 것은 무엇인가?',
					options: [
						'The starting time',
						'The cost to enter',
						'The age limit for runners',
						'The place where it is held'
					],
					optionsKo: ['시작 시간', '참가 비용', '참가자의 나이 제한', '열리는 장소'],
					answer: 2,
					why: '(A)는 Both races start at 9 A.M., (B)는 The entry fee is 20 dollars, (D)는 at Millbrook Sports Park로 나와 있습니다. 참가자의 나이 제한에 대한 말은 없으므로 (C)가 정답입니다.'
				}
			],
			vocab: [
				['charity', '자선'],
				['take place', '열리다'],
				['entry fee', '참가비'],
				['take part', '참가하다'],
				['volunteer', '자원봉사자'],
				['hand out', '나눠 주다']
			]
		}
	]
} satisfies DayContent;
