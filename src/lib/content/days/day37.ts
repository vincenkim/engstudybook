import type { DayContent } from '../schema';

export default {
	goals: [
		'전 파트 25문항을 15분 안에 끝까지 푼다',
		'Part 2에서 질문의 첫 단어를 듣고 오답을 지운다',
		'Part 5는 보기를 먼저 보고 문법 문제와 어휘 문제를 가려 푼다'
	],
	pages: [
		{
			type: 'lesson',
			tag: '모의고사 안내',
			section: 'RC',
			title: '미니 모의고사 1: 사무실과 회의',
			blocks: [
				{
					type: 'p',
					text: '오늘부터 나흘 동안은 새 개념을 배우지 않고 **실제 시험 순서**대로 25문항을 풉니다. 듣기(Part 2·3·4)를 먼저 풀고 읽기(Part 5·6·7)를 풉니다. 1회차의 배경은 사무실과 회의입니다.'
				},
				{
					type: 'table',
					head: ['파트', '문항 수', '문제 형식'],
					rows: [
						['Part 2', '5', '질문을 듣고 알맞은 응답 고르기'],
						['Part 3', '3', '대화 1개를 듣고 풀기'],
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
						'시작하기 전에 첫 화면의 설정에서 **채점 방식**을 "다 풀고 채점"으로 바꿉니다. 위의 "목차" 버튼을 누르면 첫 화면으로 갑니다.',
						'권장 시간은 **약 15분**입니다. 시계를 옆에 두고 시작합니다.',
						'듣기는 한 번만 듣고 답을 고릅니다. 스크립트는 채점한 뒤에 봅니다.',
						'모르는 문제는 하나를 고르고 넘어갑니다. 빈칸으로 남기지 않습니다.'
					]
				},
				{
					type: 'box',
					title: '끝난 뒤에',
					items: [
						'마지막 화면에서 채점하고 파트별 점수를 확인합니다.',
						'"틀린 문제만 다시 풀기"를 눌러 ==틀린 문제만== 한 번 더 풉니다. 해설은 다시 푼 뒤에 읽습니다.'
					]
				},
				{
					type: 'tip',
					text: '한 문제에 오래 머물면 뒤에 있는 쉬운 문제를 풀 시간이 없어집니다. 모의고사에서는 점수보다 **끝까지 푸는 것**이 먼저입니다.'
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd37-01',
			script: 'When should I send the invitations for the quarterly meeting?',
			options: ['In the training room.', 'By Wednesday at the latest.', 'Yes, she was invited.'],
			answer: 1,
			ko: '분기 회의 초대장은 언제 보내야 하나요?',
			optionsKo: ['교육실에서요.', '늦어도 수요일까지요.', '네, 그녀는 초대받았어요.'],
			why: 'When으로 물었으므로 기한으로 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '기한 (정답)', 'Yes로 시작, invitation과 비슷한 invited'],
			vocab: [
				['invitation', '초대장'],
				['quarterly', '분기의'],
				['at the latest', '늦어도']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd37-02',
			script: 'Who has the key to the supply room?',
			options: ["It isn't locked.", 'At nine tomorrow.', 'Yes, a box of envelopes.'],
			answer: 0,
			ko: '비품실 열쇠는 누가 가지고 있나요?',
			optionsKo: ['잠겨 있지 않아요.', '내일 9시에요.', '네, 봉투 한 상자요.'],
			why: '사람을 말하지 않고 "잠겨 있지 않다", 즉 열쇠가 필요 없다고 돌려 말한 (A)가 정답입니다.',
			notes: [
				'열쇠가 필요 없다는 응답 (정답)',
				'시간 — When에 대한 답',
				'Yes로 시작, supply에서 떠오르는 물건'
			],
			vocab: [
				['key to', '~의 열쇠'],
				['supply room', '비품실'],
				['locked', '잠긴']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd37-03',
			script: 'Do you know how to set up the video call?',
			options: ['About thirty minutes long.', 'She set the table.', 'Ms. Lim showed me yesterday.'],
			answer: 2,
			ko: '화상 통화를 어떻게 설정하는지 아세요?',
			optionsKo: ['30분 정도 길이예요.', '그녀가 식탁을 차렸어요.', '임 씨가 어제 알려 줬어요.'],
			why: 'Yes / No 없이 "임 씨가 어제 알려 줬다", 즉 방법을 안다고 돌려 말한 (C)가 정답입니다.',
			notes: [
				'길이 — How long에 대한 답',
				'set 반복 — set the table은 "식탁을 차리다"',
				'방법을 안다는 응답 (정답)'
			],
			vocab: [
				['set up', '설정하다, 준비하다'],
				['video call', '화상 통화'],
				['show', '알려 주다, 보여 주다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd37-04',
			script: 'How about asking Ms. Wong to lead the budget meeting?',
			options: [
				'Good idea. She knows the numbers best.',
				'About two hours.',
				"It's within our budget."
			],
			answer: 0,
			ko: '웡 씨에게 예산 회의 진행을 부탁하는 게 어때요?',
			optionsKo: [
				'좋은 생각이에요. 그분이 수치를 가장 잘 알아요.',
				'두 시간쯤이요.',
				'그건 우리 예산 범위 안이에요.'
			],
			why: 'How about ~?은 방법이나 시간을 묻는 말이 아니라 "~하는 게 어때요?"라는 제안입니다. Good idea로 동의한 (A)가 정답입니다.',
			notes: ['제안에 동의함 (정답)', '시간 — How long에 대한 답', 'budget 반복 — 질문과 무관'],
			vocab: [
				['How about -ing?', '~하는 게 어때요?'],
				['lead', '진행하다, 이끌다'],
				['budget', '예산'],
				['within', '~ 범위 안에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd37-05',
			script: "I don't think we have enough chairs for the workshop.",
			options: [
				'He was the chairperson.',
				'There are extra ones next door.',
				'It was a long workshop.'
			],
			answer: 1,
			ko: '워크숍에 쓸 의자가 부족한 것 같아요.',
			optionsKo: ['그가 의장이었어요.', '옆방에 여분이 있어요.', '긴 워크숍이었어요.'],
			why: '의자가 부족하다는 말에 옆방에 여분이 있다고 해결책을 말한 (B)가 정답입니다.',
			notes: [
				'chairs와 발음이 비슷한 chairperson',
				'해결책을 말함 (정답)',
				'workshop 반복 — 지난 일을 말함'
			],
			vocab: [
				['enough', '충분한'],
				['extra', '여분의'],
				['next door', '옆방에, 옆집에']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					'Sophie, could you go to the planning meeting for me tomorrow? I have to visit a client in the morning.'
				],
				['W', 'Sure, I can do that. What time does it start?'],
				['M', "At ten, in the manager's office. It usually takes about an hour."],
				['W', 'Okay. Is there anything I should bring?'],
				['M', "Just our team's monthly report. I'll e-mail it to you this afternoon."],
				['W', "Great. I'll take notes and give them to you after the meeting."]
			],
			scriptKo: [
				'소피 씨, 내일 기획 회의에 저 대신 가 줄 수 있어요? 저는 오전에 고객을 방문해야 해요.',
				'네, 그럴게요. 몇 시에 시작하나요?',
				'10시에 부장님 사무실에서요. 보통 한 시간쯤 걸려요.',
				'알겠어요. 제가 가져가야 할 것이 있나요?',
				'우리 팀 월간 보고서만요. 오늘 오후에 이메일로 보내 줄게요.',
				'좋아요. 제가 메모해서 회의가 끝나면 드릴게요.'
			],
			questions: [
				{
					id: 'd37-06',
					text: 'What does the man ask the woman to do?',
					ko: '남자는 여자에게 무엇을 해 달라고 부탁하는가?',
					options: [
						'Visit a client',
						'Attend a meeting in his place',
						'Write a monthly report',
						'Change a meeting time'
					],
					optionsKo: [
						'고객을 방문한다',
						'자기 대신 회의에 참석한다',
						'월간 보고서를 쓴다',
						'회의 시간을 바꾼다'
					],
					answer: 1,
					why: '남자가 could you go to the planning meeting for me tomorrow?라고 했습니다. go to ~ for me가 보기에서 Attend ~ in his place로 바뀌었습니다. 고객을 방문하는 사람은 남자입니다.'
				},
				{
					id: 'd37-07',
					text: 'What will the man send to the woman?',
					ko: '남자는 여자에게 무엇을 보낼 것인가?',
					options: ['A meeting schedule', "A client's address", 'A map of the office', 'A report'],
					optionsKo: ['회의 일정표', '고객의 주소', '사무실 지도', '보고서'],
					answer: 3,
					why: "남자가 Just our team's monthly report. I'll e-mail it to you this afternoon이라고 했습니다. it은 monthly report를 가리킵니다."
				},
				{
					id: 'd37-08',
					text: 'What does the woman say she will do?',
					ko: '여자는 무엇을 하겠다고 말하는가?',
					options: [
						'Write down what is discussed',
						'Call the manager',
						'Order lunch for the team',
						'Send an e-mail to a client'
					],
					optionsKo: [
						'논의된 내용을 적는다',
						'부장에게 전화한다',
						'팀 점심을 주문한다',
						'고객에게 이메일을 보낸다'
					],
					answer: 0,
					why: "여자가 마지막에 I'll take notes and give them to you after the meeting이라고 했습니다. take notes가 보기에서 Write down what is discussed로 바뀌었습니다."
				}
			],
			vocab: [
				['planning meeting', '기획 회의'],
				['for me', '나 대신'],
				['client', '고객'],
				['monthly report', '월간 보고서'],
				['take notes', '메모하다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발췌',
			script: [
				['M', 'Now, I have some news from our head office. Please listen carefully.'],
				[
					'M',
					'Next Wednesday, three directors will visit this branch. They want to see how our team works.'
				],
				[
					'M',
					'They will arrive at ten and walk around the office, so please keep your desks clean that morning.'
				],
				[
					'M',
					'At noon, we will all have lunch together in the cafeteria. If you have questions about the visit, please ask Ms. Chung.'
				]
			],
			scriptKo: [
				'이제 본사에서 온 소식을 전해 드리겠습니다. 잘 들어 주세요.',
				'다음 주 수요일에 이사 세 분이 우리 지점을 방문합니다. 우리 팀이 어떻게 일하는지 보고 싶어 하십니다.',
				'10시에 도착해 사무실을 둘러보실 예정이니 그날 아침에는 책상을 깨끗하게 해 두세요.',
				'정오에는 구내식당에서 다 함께 점심을 먹습니다. 방문에 관해 질문이 있으면 정 씨에게 물어보세요.'
			],
			questions: [
				{
					id: 'd37-09',
					text: 'What will happen next Wednesday?',
					ko: '다음 주 수요일에 무슨 일이 있는가?',
					options: [
						'A new branch will open.',
						'The office will be painted.',
						'Some directors will visit the office.',
						'A training session will be held.'
					],
					optionsKo: [
						'새 지점이 문을 연다.',
						'사무실에 페인트칠을 한다.',
						'이사 몇 명이 사무실을 방문한다.',
						'교육이 열린다.'
					],
					answer: 2,
					why: 'Next Wednesday, three directors will visit this branch라고 했습니다. this branch가 보기에서 the office로 바뀌었습니다.'
				},
				{
					id: 'd37-10',
					text: 'What are the listeners asked to do?',
					ko: '청자들은 무엇을 하라고 요청받는가?',
					options: [
						'Keep their desks tidy',
						'Arrive before ten',
						'Prepare a presentation',
						'Wear name tags'
					],
					optionsKo: [
						'책상을 깔끔하게 해 둔다',
						'10시 전에 도착한다',
						'발표를 준비한다',
						'이름표를 단다'
					],
					answer: 0,
					why: 'please keep your desks clean that morning이라고 했습니다. clean이 보기에서 tidy로 바뀌었습니다. ten은 이사들이 도착하는 시각입니다.'
				},
				{
					id: 'd37-11',
					text: 'What will the listeners do at noon?',
					ko: '청자들은 정오에 무엇을 할 것인가?',
					options: [
						'Walk around the office',
						'Go to the head office',
						'Attend another meeting',
						'Have a meal together'
					],
					optionsKo: ['사무실을 둘러본다', '본사에 간다', '다른 회의에 참석한다', '함께 식사한다'],
					answer: 3,
					why: 'At noon, we will all have lunch together in the cafeteria라고 했습니다. have lunch가 보기에서 Have a meal로 바뀌었습니다. 사무실을 둘러보는 것은 이사들이 하는 일입니다.'
				}
			],
			vocab: [
				['director', '이사'],
				['head office', '본사'],
				['branch', '지점'],
				['walk around', '둘러보다'],
				['cafeteria', '구내식당'],
				['tidy', '깔끔한']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-12',
			text: 'Ms. Tran ------- reviews the meeting minutes before she sends them out.',
			options: ['careful', 'carefully', 'care', 'carefulness'],
			answer: 1,
			ko: '트란 씨는 회의록을 발송하기 전에 꼼꼼히 검토합니다.',
			why: '주어 Ms. Tran과 동사 reviews 사이는 동사를 꾸미는 부사 자리입니다. -ly가 붙은 carefully가 정답입니다.',
			notes: ['형용사 — 동사를 꾸미지 못함', '부사 (정답)', '명사·동사', '명사'],
			vocab: [
				['carefully', '꼼꼼히, 주의 깊게'],
				['review', '검토하다'],
				['meeting minutes', '회의록'],
				['send out', '발송하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-13',
			text: "The department head will ------- the new schedule at this afternoon's meeting.",
			options: ['attend', 'invite', 'arrive', 'announce'],
			answer: 3,
			ko: '부서장은 오늘 오후 회의에서 새 일정을 발표할 것입니다.',
			why: '보기가 모두 동사이고 뜻이 다른 어휘 문제입니다. 빈칸 뒤 목적어 the new schedule(새 일정)은 "발표하는" 것이므로 announce가 정답입니다.',
			notes: [
				'참석하다 — 일정에 참석할 수는 없음',
				'초대하다 — 사람을 목적어로 씀',
				'도착하다 — 목적어를 쓰지 못함',
				'발표하다 (정답)'
			],
			vocab: [
				['department head', '부서장'],
				['announce', '발표하다'],
				['schedule', '일정']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-14',
			text: 'Ms. Sato and Mr. Bae will explain ------- ideas at the next staff meeting.',
			options: ['they', 'their', 'them', 'theirs'],
			answer: 1,
			ko: '사토 씨와 배 씨는 다음 직원 회의에서 자신들의 아이디어를 설명할 것입니다.',
			why: '빈칸 뒤에 명사 ideas가 있습니다. 명사 앞에서 "~의"라는 뜻을 나타내는 소유격 their가 정답입니다.',
			notes: [
				'주격 — 동사 앞에 씀',
				'소유격 (정답)',
				'목적격 — 뒤에 명사가 올 수 없음',
				'소유대명사 — 뒤에 명사가 올 수 없음'
			],
			vocab: [
				['explain', '설명하다'],
				['idea', '아이디어, 생각'],
				['staff meeting', '직원 회의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-15',
			text: 'The agenda for the board meeting ------- to all members yesterday.',
			options: ['was sent', 'sent', 'is sending', 'to send'],
			answer: 0,
			ko: '이사회 회의 안건은 어제 모든 위원에게 발송되었습니다.',
			why: '주어 The agenda(안건)는 보내는 것이 아니라 "보내지는" 것이고, 빈칸 뒤에 목적어가 없습니다. yesterday가 있으므로 과거 수동태 was sent가 정답입니다.',
			notes: [
				'과거 수동태 (정답)',
				'능동태 — 뒤에 목적어가 있어야 함',
				'현재진행 능동태 — yesterday와 맞지 않음',
				'to부정사 — 동사가 될 수 없음'
			],
			vocab: [
				['agenda', '안건, 의제'],
				['board meeting', '이사회 회의'],
				['member', '위원, 구성원']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-16',
			text: 'The meeting will begin ------- at nine, so please do not be late.',
			options: ['recently', 'highly', 'promptly', 'previously'],
			answer: 2,
			ko: '회의는 9시 정각에 시작하니 늦지 마세요.',
			why: '보기가 모두 부사이고 뜻이 다른 어휘 문제입니다. promptly at + 시각은 "~시 정각에"라는 표현이고, 늦지 말라는 뒤 내용과도 맞습니다.',
			notes: [
				'최근에 — 지난 일에 씀',
				'매우 — 시각 앞에 쓰지 않음',
				'정각에 (정답)',
				'이전에 — 지난 일에 씀'
			],
			vocab: [
				['promptly', '정각에, 지체 없이'],
				['begin', '시작하다'],
				['be late', '늦다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-17',
			text: '------- the meeting room was small, all twelve team members attended the training.',
			options: ['Although', 'Despite', 'During', 'Because of'],
			answer: 0,
			ko: '회의실은 작았지만 팀원 열두 명이 모두 교육에 참석했습니다.',
			why: '빈칸 뒤 the meeting room was small은 주어 + 동사입니다. 주어 + 동사 앞에는 접속사가 오므로, 보기 중 하나뿐인 접속사 Although가 정답입니다.',
			notes: [
				'접속사, 비록 ~이지만 (정답)',
				'전치사 — 뒤에 명사가 와야 함',
				'전치사 — 뒤에 명사가 와야 함',
				'전치사 — 뒤에 명사가 와야 함'
			],
			vocab: [
				['although', '비록 ~이지만'],
				['attend', '참석하다'],
				['training', '교육']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd37-18',
			text: 'Ms. Ferrari ordered a printer ------- can also scan and copy documents.',
			options: ['who', 'whose', 'which', 'it'],
			answer: 2,
			ko: '페라리 씨는 문서를 스캔하고 복사할 수도 있는 프린터를 주문했습니다.',
			why: '선행사 a printer가 사물이고 빈칸 뒤에 동사 can scan이 옵니다. 사물 선행사 뒤, 동사 앞이므로 which가 정답입니다.',
			notes: [
				'who — 선행사가 사람일 때 씀',
				'whose — 뒤에 명사가 와야 함',
				'which (정답)',
				'it — 두 문장을 이어 주지 못함'
			],
			vocab: [
				['order', '주문하다'],
				['scan', '스캔하다'],
				['document', '문서']
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
						['To', 'Marketing team'],
						['From', 'Olivia Grant'],
						['Subject', "Notes from Monday's meeting"]
					],
					body: [
						'Thank you all for attending the meeting on Monday. Here is a short {1} of our decisions.',
						'First, the new brochure will be printed next month, not this month. The design team needs more time {2} the photos.',
						'Second, Mr. Bell will visit the printing company on Friday. {3}',
						'Our next meeting will be {4} on June 12 at 2 P.M. in Room 4. I will send the agenda next week.',
						'Olivia Grant'
					],
					ko: [
						'월요일 회의에 참석해 주셔서 모두 감사합니다. 결정한 내용을 간단히 요약해 드립니다.',
						'첫째, 새 안내 책자는 이번 달이 아니라 다음 달에 인쇄합니다. 디자인팀이 사진을 고를 시간이 더 필요합니다.',
						'둘째, 벨 씨가 금요일에 인쇄 회사를 방문합니다. 그는 컬러 인쇄 가격을 문의할 것입니다.',
						'다음 회의는 6월 12일 오후 2시에 4호실에서 열립니다. 안건은 다음 주에 보내 드리겠습니다.',
						'올리비아 그랜트'
					]
				}
			],
			questions: [
				{
					id: 'd37-19',
					options: ['summary', 'salary', 'visitor', 'building'],
					answer: 0,
					why: '회의에 참석해 줘서 고맙다고 한 뒤 결정한 내용을 첫째, 둘째로 정리해 줍니다. a short summary of our decisions는 "결정 내용의 간단한 요약"입니다.',
					notes: ['요약 (정답)', '급여', '방문객', '건물']
				},
				{
					id: 'd37-20',
					options: ['choose', 'chose', 'to choose', 'chooses'],
					answer: 2,
					why: '문장의 동사는 needs입니다. 빈칸은 명사 time을 뒤에서 꾸미는 자리이므로 to부정사가 옵니다. time to + 동사원형은 "~할 시간"입니다.',
					notes: [
						'동사원형 — 동사 needs가 이미 있음',
						'과거형 — 동사 needs가 이미 있음',
						'to부정사 (정답)',
						'-s가 붙은 동사 — 동사 needs가 이미 있음'
					]
				},
				{
					id: 'd37-21',
					options: [
						'Lunch was served after the meeting.',
						'She joined our team in March.',
						'The meeting room was too cold on Monday.',
						'He will ask about the price of color printing.'
					],
					optionsKo: [
						'회의가 끝난 뒤 점심이 제공되었습니다.',
						'그녀는 3월에 우리 팀에 합류했습니다.',
						'월요일에 회의실이 너무 추웠습니다.',
						'그는 컬러 인쇄 가격을 문의할 것입니다.'
					],
					answer: 3,
					why: '앞 문장에서 벨 씨가 금요일에 인쇄 회사를 방문한다고 했습니다. 방문해서 무엇을 할지 알려 주는 (D)가 이어집니다. He는 Mr. Bell을 가리킵니다. (B)의 She는 가리키는 사람이 없습니다.'
				},
				{
					id: 'd37-22',
					options: ['hold', 'held', 'holding', 'holds'],
					answer: 1,
					why: '회의는 여는 것이 아니라 "열리는" 것입니다. will be 뒤에서 수동태를 만드는 과거분사 held가 정답입니다. be held는 "열리다"입니다.',
					notes: [
						'동사원형 — be 뒤에 올 수 없음',
						'과거분사 (정답)',
						'-ing형 — 회의가 무언가를 여는 것이 아님',
						'-s가 붙은 동사 — be 뒤에 올 수 없음'
					]
				}
			],
			vocab: [
				['attend', '참석하다'],
				['summary', '요약'],
				['decision', '결정'],
				['brochure', '안내 책자'],
				['printing company', '인쇄 회사'],
				['be held', '열리다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '회람',
			passages: [
				{
					kind: '회람',
					head: [
						['To', 'Sales team'],
						['From', 'Grace Oh'],
						['Subject', 'Wednesday meeting'],
						['Date', 'March 10']
					],
					body: [
						'Here is the plan for our monthly sales meeting this Wednesday. Please note that we will meet in Conference Room B on the sixth floor, not in our usual room.',
						{
							table: {
								head: ['Time', 'Topic', 'Speaker'],
								rows: [
									['10:00 A.M.', 'February sales results', 'Grace Oh'],
									['10:20 A.M.', 'Spring product catalog', 'Brian Keller'],
									['10:40 A.M.', 'Questions and answers', 'Everyone']
								]
							}
						},
						'Brian joined our team only two weeks ago, so this will be his first presentation here. I have attached a draft of the catalog to this memo. Please read it before the meeting.',
						'If you cannot come, please let me know by noon on Tuesday.'
					],
					ko: [
						'이번 주 수요일 월간 영업 회의 계획을 알려 드립니다. 평소 쓰던 방이 아니라 6층 B 회의실에서 모인다는 점에 유의해 주세요.',
						'시간표 — 오전 10시: 2월 매출 실적(그레이스 오) / 오전 10시 20분: 봄 상품 카탈로그(브라이언 켈러) / 오전 10시 40분: 질의응답(전원)',
						'브라이언은 2주 전에 우리 팀에 합류했으므로 이번이 이곳에서 하는 첫 발표입니다. 이 회람에 카탈로그 초안을 첨부했습니다. 회의 전에 읽어 주세요.',
						'참석할 수 없으면 화요일 정오까지 저에게 알려 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd37-23',
					text: 'What is the purpose of the memo?',
					ko: '회람의 목적은 무엇인가?',
					options: [
						'To report February sales results',
						'To welcome a new customer',
						'To order a product catalog',
						'To share the plan for a meeting'
					],
					optionsKo: [
						'2월 매출 실적을 보고하려고',
						'새 고객을 환영하려고',
						'상품 카탈로그를 주문하려고',
						'회의 계획을 알리려고'
					],
					answer: 3,
					why: '첫 문장이 Here is the plan for our monthly sales meeting this Wednesday입니다. 이어서 장소와 시간표를 알려 주므로 회의 계획을 알리는 글입니다.'
				},
				{
					id: 'd37-24',
					text: 'What is suggested about the monthly sales meeting?',
					ko: '월간 영업 회의에 대해 암시된 것은 무엇인가?',
					options: [
						'It is held every Monday.',
						'It usually takes place in a different room.',
						'It will last all day.',
						'It is only for new employees.'
					],
					optionsKo: [
						'매주 월요일에 열린다.',
						'평소에는 다른 방에서 열린다.',
						'하루 종일 진행된다.',
						'신입 직원만 참석한다.'
					],
					answer: 1,
					why: 'we will meet in Conference Room B on the sixth floor, not in our usual room이라고 했습니다. "평소 쓰던 방이 아니다"라는 말에서 보통은 다른 방에서 회의한다는 것을 알 수 있습니다.'
				},
				{
					id: 'd37-25',
					text: 'What are team members asked to do before the meeting?',
					ko: '팀원들은 회의 전에 무엇을 하라고 요청받는가?',
					options: [
						'Look at an attached file',
						'Reserve Conference Room B',
						'Send questions to Mr. Keller',
						'Print the sales results'
					],
					optionsKo: [
						'첨부 파일을 본다',
						'B 회의실을 예약한다',
						'켈러 씨에게 질문을 보낸다',
						'매출 실적을 인쇄한다'
					],
					answer: 0,
					why: 'I have attached a draft of the catalog to this memo. Please read it before the meeting이라고 했습니다. 첨부한 카탈로그 초안을 읽으라는 말이 보기에서 Look at an attached file로 바뀌었습니다.'
				}
			],
			vocab: [
				['monthly', '월간의'],
				['usual', '평소의'],
				['sales results', '매출 실적'],
				['attach', '첨부하다'],
				['draft', '초안'],
				['by noon', '정오까지']
			]
		}
	]
} satisfies DayContent;
