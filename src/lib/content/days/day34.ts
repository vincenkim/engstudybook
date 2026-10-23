import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 문자 메시지와 온라인 채팅을 읽고 의도 문제를 푼다',
		'Part 3 풀이 요령을 정리하고 여러 유형을 섞어 푼다',
		'Part 4 담화 종류별 흐름을 정리하고 여러 유형을 섞어 푼다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '문자 메시지와 온라인 채팅 읽는 법',
			blocks: [
				{
					type: 'p',
					text: 'Part 7에는 **문자 메시지**(text-message chain)와 **온라인 채팅**(online chat discussion)이 거의 매번 나옵니다. 문자 메시지는 두 사람이, 온라인 채팅은 세 명 이상이 짧은 말을 주고받습니다. 문장은 쉽지만 누가 한 말인지 놓치면 틀립니다.'
				},
				{
					type: 'box',
					title: '읽는 순서',
					items: [
						'**누가 누구에게** 쓰는지 봅니다. 첫 두 메시지에서 동료인지, 상사인지, 고객인지 알 수 있습니다.',
						'**시각 순서**대로 위에서 아래로 읽습니다. 무슨 일이 생겼고 누가 어떤 답을 했는지 따라갑니다.',
						'**마지막 두 메시지**에서 누가 무엇을 하기로 했는지 확인합니다. 다음에 할 일 문제의 답이 여기 있습니다.'
					]
				},
				{
					type: 'table',
					head: ['짧은 구어 표현', '뜻'],
					rows: [
						['No problem. / Sure thing.', '문제없어요. / 물론이죠. (부탁을 들어줄 때)'],
						['That works for me.', '저는 그게 좋아요. (제안에 동의할 때)'],
						['That will do.', '그거면 됩니다.'],
						['I wish I could.', '그러고 싶지만 안 돼요. (거절할 때)'],
						['Will do.', '그렇게 할게요.'],
						['I can stop by.', '제가 들를 수 있어요.'],
						['Found it. / Got it.', '찾았어요. / 알겠어요.']
					]
				},
				{
					type: 'tip',
					text: '온라인 채팅에는 이름이 여러 개 나옵니다. 문제에 나온 이름을 지문에서 먼저 찾고, 그 사람이 쓴 메시지를 중심으로 읽습니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '의도 문제: 바로 앞 메시지를 봅니다',
			blocks: [
				{
					type: 'p',
					text: '문자·채팅 지문에는 어떤 시각에 쓴 짧은 말이 **무슨 뜻인지** 묻는 문제가 하나씩 나옵니다. 의도 문제라고 부릅니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'At 10:05 A.M., what does Mr. Lim most likely mean when he writes, "No problem"?',
							'오전 10시 5분에 임 씨가 "No problem"이라고 쓴 것은 무슨 뜻일 것 같은가?'
						],
						[
							'At 2:14 P.M., what does Ms. Cho most likely mean when she writes, "Will do"?',
							'오후 2시 14분에 조 씨가 "Will do"라고 쓴 것은 무슨 뜻일 것 같은가?'
						]
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'질문의 **시각**으로 그 메시지를 찾습니다.',
						'**바로 앞 메시지**를 읽습니다. 그 말이 무엇에 대한 대답인지 봅니다.',
						'앞 메시지의 내용이 들어 있는 보기를 고릅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Could you send me the file? — ==No problem.==',
							ko: '파일을 보내 주시겠어요? — 문제없어요.',
							note: '정답 보기: He will send a file. (부탁을 들어주겠다)'
						},
						{
							en: 'Sorry, I will be ten minutes late. — ==No problem.==',
							ko: '죄송해요, 10분 늦을 거예요. — 괜찮아요.',
							note: '정답 보기: He does not mind waiting. (기다려도 괜찮다)'
						}
					]
				},
				{
					type: 'tip',
					text: '같은 말도 앞 메시지에 따라 뜻이 달라집니다. 인용된 말의 사전 뜻만 옮긴 보기는 함정입니다.'
				}
			]
		},
		{
			type: 'set',
			part: 7,
			label: '문자 메시지',
			passages: [
				{
					kind: '문자 메시지',
					body: [
						{
							chat: [
								[
									'Hana Seo',
									'9:12 A.M.',
									'Brian, are you at the office? My train to Daejeon is forty minutes late.'
								],
								['Brian Lim', '9:14 A.M.', 'Yes, I am at my desk. What do you need?'],
								[
									'Hana Seo',
									'9:15 A.M.',
									'I have a 10:30 meeting with Mr. Silva at Green Table Foods. Could you call him and say I will be there around 11:00?'
								],
								['Brian Lim', '9:16 A.M.', 'No problem. Do you have his number?'],
								[
									'Hana Seo',
									'9:17 A.M.',
									'It is on his business card. The card is on my desk, next to the phone.'
								],
								[
									'Brian Lim',
									'9:19 A.M.',
									'Found it. I will call him right now and text you back.'
								],
								['Hana Seo', '9:20 A.M.', 'Thanks a lot. I will buy you lunch tomorrow.']
							]
						}
					],
					ko: [
						'서하나 (오전 9:12): 브라이언, 사무실에 있어요? 제가 탄 대전행 기차가 40분 늦어지고 있어요.',
						'브라이언 임 (오전 9:14): 네, 제 자리에 있어요. 무엇이 필요하세요?',
						'서하나 (오전 9:15): 10시 30분에 그린 테이블 푸드의 실바 씨와 회의가 있어요. 그분께 전화해서 제가 11시쯤 도착한다고 전해 주시겠어요?',
						'브라이언 임 (오전 9:16): 문제없어요. 그분 전화번호를 갖고 계세요?',
						'서하나 (오전 9:17): 그분 명함에 있어요. 명함은 제 책상 위, 전화기 옆에 있어요.',
						'브라이언 임 (오전 9:19): 찾았어요. 지금 바로 전화하고 문자로 알려 드릴게요.',
						'서하나 (오전 9:20): 정말 고마워요. 내일 점심 살게요.'
					]
				}
			],
			questions: [
				{
					id: 'd34-01',
					text: 'What problem does Ms. Seo have?',
					ko: '서 씨에게는 어떤 문제가 있는가?',
					options: [
						'She lost a business card.',
						'Her train is behind schedule.',
						'She forgot about a meeting.',
						'Her phone is not working.'
					],
					optionsKo: [
						'명함을 잃어버렸다.',
						'기차가 예정보다 늦어지고 있다.',
						'회의를 잊어버렸다.',
						'전화기가 작동하지 않는다.'
					],
					answer: 1,
					why: '첫 메시지에서 My train to Daejeon is forty minutes late(대전행 기차가 40분 늦는다)라고 했습니다. late가 보기에서 behind schedule로 바뀌었습니다.'
				},
				{
					id: 'd34-02',
					text: 'At 9:16 A.M., what does Mr. Lim most likely mean when he writes, "No problem"?',
					ko: '오전 9시 16분에 임 씨가 "No problem"이라고 쓴 것은 무슨 뜻일 것 같은가?',
					options: [
						'He does not mind waiting for Ms. Seo.',
						'He has already fixed an issue.',
						'He can go to the meeting himself.',
						'He is willing to make a call for Ms. Seo.'
					],
					optionsKo: [
						'서 씨를 기다려도 괜찮다.',
						'이미 문제를 해결했다.',
						'자신이 직접 회의에 갈 수 있다.',
						'서 씨를 대신해 기꺼이 전화하겠다.'
					],
					answer: 3,
					why: '바로 앞 9시 15분 메시지에서 서 씨가 Could you call him and say I will be there around 11:00?이라고 부탁했습니다. No problem은 그 부탁을 들어주겠다는 뜻입니다.'
				},
				{
					id: 'd34-03',
					text: "Where can Mr. Lim find Mr. Silva's phone number?",
					ko: '임 씨는 실바 씨의 전화번호를 어디에서 찾을 수 있는가?',
					options: [
						"On a card on Ms. Seo's desk",
						'In an e-mail from Mr. Silva',
						'On the company Web site',
						'In a train schedule'
					],
					optionsKo: [
						'서 씨 책상 위의 명함에서',
						'실바 씨가 보낸 이메일에서',
						'회사 웹사이트에서',
						'기차 시간표에서'
					],
					answer: 0,
					why: 'It is on his business card. The card is on my desk, next to the phone이라고 했습니다. 번호는 서 씨 책상 위에 있는 명함에 적혀 있습니다.'
				}
			],
			vocab: [
				['business card', '명함'],
				['right now', '지금 바로'],
				['text ~ back', '~에게 문자로 답하다'],
				['behind schedule', '예정보다 늦은'],
				['be willing to', '기꺼이 ~하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '문자 메시지',
			passages: [
				{
					kind: '문자 메시지',
					body: [
						{
							chat: [
								[
									'Jinwoo Ahn',
									'1:40 P.M.',
									'Hello, Ms. Grant. This is Jinwoo Ahn from Bluehill Cooling. I am coming to fix your office air conditioner today.'
								],
								[
									'Olivia Grant',
									'1:42 P.M.',
									'Hi, Mr. Ahn. We are expecting you at 2:00. Is there a problem?'
								],
								[
									'Jinwoo Ahn',
									'1:43 P.M.',
									'My last job took longer than planned. Would 3:00 be all right?'
								],
								[
									'Olivia Grant',
									'1:45 P.M.',
									'That works for me. Our office is on the fourth floor. Please check in at the security desk first.'
								],
								['Jinwoo Ahn', '1:46 P.M.', 'Will do. Is there a place to park my van?'],
								[
									'Olivia Grant',
									'1:48 P.M.',
									'Yes. Visitors can park behind the building for free.'
								],
								['Jinwoo Ahn', '1:49 P.M.', 'Great. See you at 3:00.']
							]
						}
					],
					ko: [
						'안진우 (오후 1:40): 안녕하세요, 그랜트 선생님. 블루힐 쿨링의 안진우입니다. 오늘 사무실 에어컨을 고치러 갑니다.',
						'올리비아 그랜트 (오후 1:42): 안녕하세요, 안 선생님. 2시에 오시는 걸로 알고 있는데요. 무슨 문제가 있나요?',
						'안진우 (오후 1:43): 앞의 작업이 예정보다 오래 걸렸습니다. 3시도 괜찮을까요?',
						'올리비아 그랜트 (오후 1:45): 저는 괜찮아요. 사무실은 4층에 있어요. 먼저 보안 데스크에서 방문 등록을 해 주세요.',
						'안진우 (오후 1:46): 그렇게 하겠습니다. 제 승합차를 세울 곳이 있나요?',
						'올리비아 그랜트 (오후 1:48): 네. 방문객은 건물 뒤에 무료로 주차할 수 있어요.',
						'안진우 (오후 1:49): 좋습니다. 3시에 뵙겠습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd34-04',
					text: 'Who most likely is Mr. Ahn?',
					ko: '안 씨는 누구일 것 같은가?',
					options: [
						'A security guard',
						'A delivery driver',
						'A repair technician',
						'A building manager'
					],
					optionsKo: ['보안 요원', '배송 기사', '수리 기사', '건물 관리인'],
					answer: 2,
					why: '첫 메시지에서 I am coming to fix your office air conditioner today(오늘 사무실 에어컨을 고치러 간다)라고 했습니다. 고장 난 기계를 고치는 수리 기사입니다.'
				},
				{
					id: 'd34-05',
					text: 'At 1:45 P.M., what does Ms. Grant most likely mean when she writes, "That works for me"?',
					ko: '오후 1시 45분에 그랜트 씨가 "That works for me"라고 쓴 것은 무슨 뜻일 것 같은가?',
					options: [
						'She accepts a later arrival time.',
						'The air conditioner is working again.',
						'She works on the fourth floor.',
						'She will finish a job herself.'
					],
					optionsKo: [
						'더 늦은 도착 시간을 받아들인다.',
						'에어컨이 다시 작동한다.',
						'자신은 4층에서 일한다.',
						'자신이 직접 작업을 끝내겠다.'
					],
					answer: 0,
					why: '바로 앞 메시지에서 안 씨가 Would 3:00 be all right?(3시도 괜찮을까요?)이라고 물었습니다. That works for me는 그 시간이 괜찮다는 뜻입니다. 여기서 work는 "일하다"가 아니라 "(일정이) 맞다"입니다.'
				},
				{
					id: 'd34-06',
					text: 'What does Ms. Grant indicate about parking?',
					ko: '그랜트 씨는 주차에 대해 무엇이라고 말하는가?',
					options: [
						'It is on the fourth floor.',
						'It is not open until 3:00.',
						'It is in front of the building.',
						'It costs nothing for visitors.'
					],
					optionsKo: [
						'4층에 있다.',
						'3시가 되어야 문을 연다.',
						'건물 앞에 있다.',
						'방문객은 돈을 내지 않는다.'
					],
					answer: 3,
					why: 'Visitors can park behind the building for free라고 했습니다. for free가 보기에서 costs nothing으로 바뀌었습니다. 주차 장소는 건물 앞이 아니라 뒤(behind)입니다.'
				}
			],
			vocab: [
				['fix', '고치다'],
				['take longer than planned', '예정보다 오래 걸리다'],
				['check in', '방문 등록을 하다'],
				['security desk', '보안 데스크'],
				['for free', '무료로']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '온라인 채팅',
			passages: [
				{
					kind: '온라인 채팅',
					body: [
						{
							chat: [
								[
									'Mina Kwon',
									'10:02 A.M.',
									'Good morning. The trade fair starts on Friday. Is everything ready for our booth?'
								],
								[
									'David Shaw',
									'10:04 A.M.',
									'The posters arrived yesterday. But the staff T-shirts are still at the shop.'
								],
								['Mina Kwon', '10:05 A.M.', 'When can we get them?'],
								[
									'David Shaw',
									'10:07 A.M.',
									'They will be ready tomorrow afternoon, but the shop does not deliver.'
								],
								['Yuna Oh', '10:08 A.M.', 'I can stop by. The shop is near my house.'],
								[
									'Mina Kwon',
									'10:09 A.M.',
									'That would be a big help, Yuna. David, how many boxes are there?'
								],
								['David Shaw', '10:11 A.M.', 'Just two. They are not heavy.'],
								[
									'Yuna Oh',
									'10:12 A.M.',
									'OK. I will bring them to the office on Thursday morning.'
								],
								[
									'Mina Kwon',
									'10:13 A.M.',
									'Perfect. I will book a van to carry everything to the fair.'
								]
							]
						}
					],
					ko: [
						'권미나 (오전 10:02): 좋은 아침입니다. 무역 박람회가 금요일에 시작합니다. 우리 부스 준비는 다 되었나요?',
						'데이비드 쇼 (오전 10:04): 포스터는 어제 도착했어요. 그런데 직원용 티셔츠가 아직 가게에 있어요.',
						'권미나 (오전 10:05): 언제 받을 수 있나요?',
						'데이비드 쇼 (오전 10:07): 내일 오후에 준비되는데, 그 가게는 배달을 하지 않아요.',
						'오유나 (오전 10:08): 제가 들를 수 있어요. 그 가게가 저희 집 근처예요.',
						'권미나 (오전 10:09): 그러면 큰 도움이 되겠어요, 유나 씨. 데이비드 씨, 상자가 몇 개인가요?',
						'데이비드 쇼 (오전 10:11): 두 개뿐이에요. 무겁지 않아요.',
						'오유나 (오전 10:12): 알겠어요. 목요일 아침에 사무실로 가져올게요.',
						'권미나 (오전 10:13): 좋아요. 저는 박람회장까지 전부 실어 갈 승합차를 예약할게요.'
					]
				}
			],
			questions: [
				{
					id: 'd34-07',
					text: 'What are the writers mainly discussing?',
					ko: '글쓴이들은 주로 무엇에 관해 이야기하고 있는가?',
					options: [
						'A design for a poster',
						'Preparations for an event',
						'A delivery to a customer',
						'Plans for a company trip'
					],
					optionsKo: ['포스터 디자인', '행사 준비', '고객에게 보내는 배송', '회사 여행 계획'],
					answer: 1,
					why: '첫 메시지에서 The trade fair starts on Friday. Is everything ready for our booth?라고 묻고, 이어서 포스터와 티셔츠 준비 상황을 이야기합니다. trade fair가 보기에서 event로 바뀌었습니다.'
				},
				{
					id: 'd34-08',
					text: 'At 10:08 A.M., what does Ms. Oh most likely mean when she writes, "I can stop by"?',
					ko: '오전 10시 8분에 오 씨가 "I can stop by"라고 쓴 것은 무슨 뜻일 것 같은가?',
					options: [
						"She will visit Mr. Shaw's house.",
						'She can stop working early.',
						'She will pick up some items.',
						'She can stay at the booth.'
					],
					optionsKo: [
						'쇼 씨의 집을 방문하겠다.',
						'일을 일찍 끝낼 수 있다.',
						'물건을 찾아오겠다.',
						'부스에 머물 수 있다.'
					],
					answer: 2,
					why: '바로 앞 메시지에서 쇼 씨가 the shop does not deliver(가게가 배달을 하지 않는다)라고 했습니다. I can stop by는 자신이 가게에 들러 티셔츠를 찾아오겠다는 뜻입니다.'
				},
				{
					id: 'd34-09',
					text: 'What will Ms. Kwon most likely do next?',
					ko: '권 씨는 다음에 무엇을 할 것 같은가?',
					options: [
						'Reserve a vehicle',
						'Print some posters',
						'Carry some boxes home',
						'Call the shop'
					],
					optionsKo: [
						'차량을 예약한다',
						'포스터를 인쇄한다',
						'상자를 집으로 가져간다',
						'가게에 전화한다'
					],
					answer: 0,
					why: '마지막 메시지에서 I will book a van이라고 했습니다. book a van이 보기에서 Reserve a vehicle로 바뀌었습니다.'
				}
			],
			vocab: [
				['trade fair', '무역 박람회'],
				['booth', '부스, 전시 공간'],
				['deliver', '배달하다'],
				['stop by', '들르다'],
				['book', '예약하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '온라인 채팅',
			passages: [
				{
					kind: '온라인 채팅',
					body: [
						{
							chat: [
								[
									'Laura Meyer',
									'8:05 A.M.',
									'Good morning, team. Minho is sick and cannot come in today. Can anyone work his shift, from 1:00 to 6:00?'
								],
								['Chris Pak', '8:07 A.M.', 'I wish I could. I have a dentist appointment at 2:00.'],
								[
									'Sara Ito',
									'8:09 A.M.',
									'I can come in, but not until 2:00. My class ends at 1:30.'
								],
								['Laura Meyer', '8:10 A.M.', 'That will do. I can cover the first hour myself.'],
								['Sara Ito', '8:11 A.M.', 'Great. Should I work at the register?'],
								[
									'Laura Meyer',
									'8:13 A.M.',
									'No, please help in the stockroom. A big delivery of winter coats is coming at 3:00.'
								],
								[
									'Leo Brandt',
									'8:14 A.M.',
									'My shift ends at 3:00, but I can stay one more hour to help Sara.'
								],
								[
									'Laura Meyer',
									'8:15 A.M.',
									'Thank you both. I will update the schedule and post it in the break room.'
								]
							]
						}
					],
					ko: [
						'로라 마이어 (오전 8:05): 좋은 아침입니다, 여러분. 민호 씨가 아파서 오늘 나올 수 없어요. 1시부터 6시까지 민호 씨 근무 시간에 일할 수 있는 분 있나요?',
						'크리스 박 (오전 8:07): 그러고 싶지만 안 되겠어요. 2시에 치과 예약이 있어요.',
						'사라 이토 (오전 8:09): 제가 나갈 수 있는데, 2시가 되어야 가능해요. 수업이 1시 30분에 끝나거든요.',
						'로라 마이어 (오전 8:10): 그거면 돼요. 첫 한 시간은 제가 맡을게요.',
						'사라 이토 (오전 8:11): 좋아요. 계산대에서 일하면 되나요?',
						'로라 마이어 (오전 8:13): 아니요, 창고에서 도와주세요. 3시에 겨울 코트가 많이 배송될 거예요.',
						'레오 브란트 (오전 8:14): 제 근무는 3시에 끝나지만, 한 시간 더 남아서 사라 씨를 도울 수 있어요.',
						'로라 마이어 (오전 8:15): 두 분 다 고마워요. 근무표를 고쳐서 휴게실에 붙여 둘게요.'
					]
				}
			],
			questions: [
				{
					id: 'd34-10',
					text: 'What problem does Ms. Meyer mention?',
					ko: '마이어 씨는 어떤 문제를 언급하는가?',
					options: [
						'A delivery is late.',
						'The register is broken.',
						'An employee is ill.',
						'The store will close early.'
					],
					optionsKo: [
						'배송이 늦어지고 있다.',
						'계산대가 고장 났다.',
						'직원 한 명이 아프다.',
						'매장이 일찍 문을 닫는다.'
					],
					answer: 2,
					why: '첫 메시지에서 Minho is sick and cannot come in today(민호 씨가 아파서 오늘 나올 수 없다)라고 했습니다. sick이 보기에서 ill로 바뀌었습니다.'
				},
				{
					id: 'd34-11',
					text: 'At 8:07 A.M., what does Mr. Pak most likely mean when he writes, "I wish I could"?',
					ko: '오전 8시 7분에 박 씨가 "I wish I could"라고 쓴 것은 무슨 뜻일 것 같은가?',
					options: [
						'He wants to change an appointment.',
						'He is unable to take the shift.',
						'He hopes Minho gets well soon.',
						'He would like to work more hours.'
					],
					optionsKo: [
						'예약을 바꾸고 싶다.',
						'그 근무를 맡을 수 없다.',
						'민호 씨가 빨리 낫기를 바란다.',
						'더 많은 시간을 일하고 싶다.'
					],
					answer: 1,
					why: '바로 앞 메시지에서 마이어 씨가 Can anyone work his shift, from 1:00 to 6:00?이라고 물었습니다. I wish I could는 하고 싶지만 할 수 없다는 뜻이고, 이어서 2시에 치과 예약이 있다는 이유를 말합니다.'
				},
				{
					id: 'd34-12',
					text: 'What is expected to arrive at 3:00?',
					ko: '3시에 무엇이 도착할 예정인가?',
					options: [
						'A new work schedule',
						'A group of customers',
						'A new employee',
						'A shipment of clothing'
					],
					optionsKo: ['새 근무표', '단체 고객', '새 직원', '의류 배송품'],
					answer: 3,
					why: 'A big delivery of winter coats is coming at 3:00라고 했습니다. delivery가 보기에서 shipment로, winter coats가 clothing으로 바뀌었습니다.'
				},
				{
					id: 'd34-13',
					text: 'What does Ms. Meyer say she will do?',
					ko: '마이어 씨는 무엇을 하겠다고 말하는가?',
					options: [
						'Call Minho at home',
						'Order more winter coats',
						'Revise a work schedule',
						'Take a class at 1:30'
					],
					optionsKo: [
						'민호 씨 집에 전화한다',
						'겨울 코트를 더 주문한다',
						'근무표를 수정한다',
						'1시 30분에 수업을 듣는다'
					],
					answer: 2,
					why: '마지막 메시지에서 I will update the schedule and post it in the break room이라고 했습니다. update the schedule이 보기에서 Revise a work schedule로 바뀌었습니다.'
				}
			],
			vocab: [
				['shift', '근무 시간, 교대 근무'],
				['cover', '(남의 일을) 대신 맡다'],
				['register', '계산대'],
				['stockroom', '창고'],
				['update', '고치다, 최신으로 바꾸다'],
				['break room', '휴게실']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 풀이 요령 정리',
			blocks: [
				{
					type: 'p',
					text: '오늘은 지금까지 배운 Part 3 유형을 섞어서 풉니다. 유형이 달라도 푸는 방법은 같습니다.'
				},
				{
					type: 'box',
					title: '풀이 요령 네 가지',
					items: [
						'**문제를 먼저 읽습니다.** 대화가 나오기 전에 문제 세 개의 의문사와 주어를 봅니다.',
						'**문제 순서 = 대화 순서.** 첫 문제의 답은 앞부분에, 셋째 문제의 답은 끝부분에 있습니다.',
						'**남자와 여자를 구분합니다.** What does the ==woman== ask ~?이면 여자의 말에서 답이 나옵니다.',
						'**바꿔 말하기를 예상합니다.** 들린 단어가 그대로 있는 보기보다 뜻이 같은 보기가 정답입니다.'
					]
				},
				{
					type: 'table',
					head: ['유형', '질문', '답이 나오는 곳'],
					rows: [
						['장소·직업', 'Where does the conversation take place?', '앞부분의 단어 여러 개'],
						['주제', 'What are the speakers discussing?', '첫 두 마디'],
						['세부 사항', 'What problem does the man mention?', '문제의 핵심 단어가 들리는 곳'],
						['제안·요청', 'What does the man suggest?', "Why don't you ~? / Could you ~?"],
						['화자의 의도', 'What does the woman mean when she says, "~"?', '바로 앞 사람의 말'],
						['다음에 할 일', 'What will the man do next?', "마지막 말 (I'll ~)"]
					]
				},
				{
					type: 'tip',
					text: '답을 못 들은 문제는 오래 붙잡지 않습니다. 하나를 고르고 다음 문제로 눈을 옮깁니다.'
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['W', "Hi, I'm here to pick up my suit. Here is my ticket."],
				[
					'M',
					"Thank you. Let me check. I'm sorry, but your suit is not ready yet. Our cleaning machine broke down yesterday."
				],
				['W', 'Oh, no. I need it for a business trip on Friday.'],
				[
					'M',
					"It will be done by tomorrow evening. Why don't you leave your address? We can bring it to your home for free."
				],
				['W', "That would be great. I'll write it down for you."]
			],
			scriptKo: [
				'안녕하세요, 정장을 찾으러 왔어요. 여기 보관표입니다.',
				'감사합니다. 확인해 보겠습니다. 죄송하지만 정장이 아직 준비되지 않았습니다. 어제 세탁 기계가 고장 났거든요.',
				'아, 이런. 금요일 출장 때 필요한데요.',
				'내일 저녁까지는 끝납니다. 주소를 남겨 주시면 어떨까요? 댁으로 무료로 가져다드릴 수 있습니다.',
				'그러면 좋겠네요. 적어 드릴게요.'
			],
			questions: [
				{
					id: 'd34-14',
					text: 'Where most likely are the speakers?',
					ko: '화자들은 어디에 있는 것 같은가?',
					options: [
						'At a clothing store',
						'At a train station',
						"At a dry cleaner's",
						'At a post office'
					],
					optionsKo: ['옷 가게에서', '기차역에서', '세탁소에서', '우체국에서'],
					answer: 2,
					why: 'pick up my suit(정장을 찾으러), Our cleaning machine(세탁 기계)에서 세탁소임을 알 수 있습니다. ticket은 여기서 옷을 맡기고 받은 보관표입니다.'
				},
				{
					id: 'd34-15',
					text: 'Why is the suit not ready?',
					ko: '정장은 왜 준비되지 않았는가?',
					options: [
						'A machine stopped working.',
						'The ticket was lost.',
						'The shop was closed yesterday.',
						'A worker is on a business trip.'
					],
					optionsKo: [
						'기계가 작동을 멈췄다.',
						'보관표를 잃어버렸다.',
						'가게가 어제 문을 닫았다.',
						'직원이 출장 중이다.'
					],
					answer: 0,
					why: '남자가 Our cleaning machine broke down yesterday라고 했습니다. broke down이 보기에서 stopped working으로 바뀌었습니다.'
				},
				{
					id: 'd34-16',
					text: 'What does the man suggest the woman do?',
					ko: '남자는 여자에게 무엇을 하라고 제안하는가?',
					options: [
						'Come back on Friday',
						'Give him her address',
						'Pay a delivery fee',
						'Buy a new suit'
					],
					optionsKo: ['금요일에 다시 온다', '주소를 알려 준다', '배송비를 낸다', '새 정장을 산다'],
					answer: 1,
					why: "남자가 Why don't you leave your address?라고 제안했습니다. leave your address가 보기에서 Give him her address로 바뀌었습니다. 배달은 무료(for free)이므로 배송비는 내지 않습니다."
				}
			],
			vocab: [
				['pick up', '찾아가다'],
				['break down', '고장 나다'],
				['business trip', '출장'],
				["Why don't you ~?", '~하는 게 어때요?'],
				['write down', '적다']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					"Hi, Jisoo. It's already Friday afternoon. Are the slides for the sales presentation ready?"
				],
				['W', 'Almost. I just need the sales numbers for March. Do you have them?'],
				[
					'M',
					"No. The accounting team prepares those numbers, and they haven't sent anything yet."
				],
				['W', 'The presentation is Monday morning.'],
				['M', "I know. I'll go to the accounting office right now and ask Mr. Reed."],
				['W', "Thanks. I'll work on the other slides while you're gone."]
			],
			scriptKo: [
				'안녕하세요, 지수 씨. 벌써 금요일 오후네요. 영업 발표용 슬라이드는 준비되었나요?',
				'거의요. 3월 매출 수치만 있으면 돼요. 갖고 계세요?',
				'아니요. 그 수치는 회계팀이 준비하는데, 아직 아무것도 보내지 않았어요.',
				'발표가 월요일 아침이에요.',
				'알아요. 지금 바로 회계팀 사무실에 가서 리드 씨에게 물어볼게요.',
				'고마워요. 가 계신 동안 저는 나머지 슬라이드를 작업할게요.'
			],
			questions: [
				{
					id: 'd34-17',
					text: 'What are the speakers mainly discussing?',
					ko: '화자들은 주로 무엇에 관해 이야기하고 있는가?',
					options: [
						'A job interview',
						'An accounting class',
						'A sales trip',
						'Materials for a presentation'
					],
					optionsKo: ['채용 면접', '회계 수업', '영업 출장', '발표 자료'],
					answer: 3,
					why: '남자가 첫 말에서 Are the slides for the sales presentation ready?라고 묻고, 두 사람이 슬라이드에 넣을 수치를 이야기합니다. slides가 보기에서 Materials로 바뀌었습니다.'
				},
				{
					id: 'd34-18',
					text: 'What does the woman mean when she says, "The presentation is Monday morning"?',
					ko: '여자가 "The presentation is Monday morning"이라고 말한 것은 무슨 뜻인가?',
					options: [
						'She wants to change the date.',
						'She needs some information quickly.',
						'She cannot attend the event.',
						'She has already finished her work.'
					],
					optionsKo: [
						'날짜를 바꾸고 싶다.',
						'정보가 빨리 필요하다.',
						'행사에 참석할 수 없다.',
						'이미 일을 끝냈다.'
					],
					answer: 1,
					why: "바로 앞에서 남자가 they haven't sent anything yet(아직 아무것도 보내지 않았다)이라고 했습니다. 오늘이 금요일 오후이고 발표가 월요일 아침이라 시간이 없으니, 수치가 빨리 필요하다는 뜻입니다."
				},
				{
					id: 'd34-19',
					text: 'What will the man do next?',
					ko: '남자는 다음에 무엇을 할 것인가?',
					options: [
						'Send an e-mail',
						'Finish the slides',
						'Visit another department',
						'Call a client'
					],
					optionsKo: [
						'이메일을 보낸다',
						'슬라이드를 완성한다',
						'다른 부서를 방문한다',
						'고객에게 전화한다'
					],
					answer: 2,
					why: "남자가 I'll go to the accounting office right now라고 했습니다. go to the accounting office가 보기에서 Visit another department로 바뀌었습니다. 슬라이드를 만드는 사람은 여자입니다."
				}
			],
			vocab: [
				['slide', '슬라이드, 발표 화면'],
				['sales numbers', '매출 수치'],
				['accounting team', '회계팀'],
				['work on', '~을 작업하다'],
				['department', '부서']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 풀이 요령 정리',
			blocks: [
				{
					type: 'p',
					text: 'Part 4 담화는 종류마다 말하는 순서가 정해져 있습니다. 종류를 알면 어디에서 무슨 말이 나올지 미리 알 수 있습니다.'
				},
				{
					type: 'table',
					head: ['담화 종류', '처음', '중간', '끝'],
					rows: [
						['전화 메시지', '누구인지', '전화한 이유', '요청'],
						['안내 방송', '누구에게, 어디에서', '알리는 내용', '부탁·당부'],
						['광고', '무엇을 파는지', '장점, 할인', '연락·방문 방법'],
						['회의 발췌', '안건', '자세한 내용', '직원이 할 일'],
						['뉴스', '무슨 소식인지', '자세한 내용', '다음 순서'],
						['인물 소개', '누구인지', '경력', '지금부터 할 일']
					]
				},
				{
					type: 'box',
					title: '문제도 처음·중간·끝 순서',
					items: [
						'첫 문제 — 화자, 청자, 장소, 주제. **첫 두 문장**에서 답이 나옵니다.',
						'둘째 문제 — 세부 내용. **중간**에서 이유, 숫자, 날짜를 듣습니다.',
						'셋째 문제 — 요청, 다음에 할 일. **마지막 문장**까지 듣습니다.'
					]
				},
				{
					type: 'tip',
					text: '실제 시험에서는 담화 앞에 "Questions 71 through 73 refer to the following ==advertisement==."처럼 담화 종류를 먼저 말해 줍니다. 이 말을 듣고 흐름을 떠올립니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '안내 방송',
			script: [
				['W', 'Good evening, and welcome to the Bellwood Theater.'],
				[
					'W',
					"Tonight's play will begin ten minutes late because one of our actors is stuck in traffic. We are sorry for the delay."
				],
				[
					'W',
					'While you wait, drinks and snacks are on sale in the lobby. Please remember that food is not allowed inside the hall.'
				],
				[
					'W',
					'Also, please turn off your mobile phones before the play begins. Thank you, and enjoy the show.'
				]
			],
			scriptKo: [
				'안녕하세요, 벨우드 극장에 오신 것을 환영합니다.',
				'배우 한 명이 교통 체증에 갇혀 있어서 오늘 밤 연극은 10분 늦게 시작합니다. 지연되어 죄송합니다.',
				'기다리시는 동안 로비에서 음료와 간식을 판매합니다. 음식은 공연장 안으로 가져가실 수 없다는 점을 기억해 주세요.',
				'또한 연극이 시작되기 전에 휴대 전화를 꺼 주세요. 감사합니다. 즐거운 관람 되세요.'
			],
			questions: [
				{
					id: 'd34-20',
					text: 'Where is the announcement being made?',
					ko: '안내 방송은 어디에서 나오고 있는가?',
					options: ['At a theater', 'At a bus station', 'At a restaurant', 'At a phone store'],
					optionsKo: ['극장에서', '버스 정류장에서', '식당에서', '휴대 전화 매장에서'],
					answer: 0,
					why: '첫 문장에서 welcome to the Bellwood Theater라고 했고, 이어서 연극(play)과 배우(actors)에 관해 말합니다.'
				},
				{
					id: 'd34-21',
					text: 'Why will the play start late?',
					ko: '연극은 왜 늦게 시작하는가?',
					options: [
						'The hall is still being cleaned.',
						'A performer has not arrived.',
						'Many seats are still empty.',
						'The lobby is too crowded.'
					],
					optionsKo: [
						'공연장을 아직 청소하고 있다.',
						'출연자가 도착하지 않았다.',
						'빈 좌석이 아직 많다.',
						'로비가 너무 붐빈다.'
					],
					answer: 1,
					why: 'because one of our actors is stuck in traffic(배우 한 명이 교통 체증에 갇혀 있어서)이라고 했습니다. actor가 보기에서 performer로 바뀌었습니다.'
				},
				{
					id: 'd34-22',
					text: 'What does the speaker ask the listeners to do before the play?',
					ko: '화자는 청자들에게 연극 전에 무엇을 하라고 요청하는가?',
					options: [
						'Buy tickets in the lobby',
						'Bring snacks to their seats',
						'Wait outside the building',
						'Switch off their phones'
					],
					optionsKo: [
						'로비에서 입장권을 산다',
						'간식을 좌석으로 가져간다',
						'건물 밖에서 기다린다',
						'휴대 전화를 끈다'
					],
					answer: 3,
					why: 'please turn off your mobile phones before the play begins라고 했습니다. turn off가 보기에서 Switch off로 바뀌었습니다. 음식은 공연장 안으로 가져갈 수 없습니다(food is not allowed inside the hall).'
				}
			],
			vocab: [
				['play', '연극'],
				['be stuck in traffic', '교통 체증에 갇히다'],
				['delay', '지연'],
				['on sale', '판매 중인'],
				['be allowed', '허용되다'],
				['turn off', '끄다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '광고',
			script: [
				[
					'M',
					'Do you need a photo for your passport or job application? Visit Clear Shot Studio on Mill Road.'
				],
				[
					'M',
					'You do not need to make an appointment. Just walk in, and your photos will be ready in ten minutes. We also take family photos and photos for company Web sites.'
				],
				[
					'M',
					'This month, students get twenty percent off all passport photos. Just show your student card. We are open from nine to seven, Monday through Saturday.'
				]
			],
			scriptKo: [
				'여권이나 입사 지원에 쓸 사진이 필요하신가요? 밀 로드에 있는 클리어 샷 스튜디오로 오세요.',
				'예약하실 필요가 없습니다. 그냥 들어오시면 10분 만에 사진이 준비됩니다. 가족사진과 회사 웹사이트용 사진도 찍어 드립니다.',
				'이번 달에는 학생에게 모든 여권 사진을 20퍼센트 할인해 드립니다. 학생증만 보여 주세요. 월요일부터 토요일까지 9시부터 7시까지 문을 엽니다.'
			],
			questions: [
				{
					id: 'd34-23',
					text: 'What kind of business is being advertised?',
					ko: '어떤 업체가 광고되고 있는가?',
					options: ['A passport office', 'A job agency', 'A photo studio', 'A print shop'],
					optionsKo: ['여권 발급 사무소', '직업소개소', '사진관', '인쇄소'],
					answer: 2,
					why: '첫 문장에서 Do you need a photo for your passport or job application?이라고 묻고 Clear Shot Studio로 오라고 합니다. 여권 사진과 가족사진을 찍어 주는 사진관입니다.'
				},
				{
					id: 'd34-24',
					text: 'What does the speaker say about the service?',
					ko: '화자는 서비스에 대해 무엇이라고 말하는가?',
					options: [
						'It is offered only on weekends.',
						'Customers can come without booking.',
						'It takes about one hour.',
						'It is free for families.'
					],
					optionsKo: [
						'주말에만 제공된다.',
						'고객은 예약 없이 와도 된다.',
						'한 시간쯤 걸린다.',
						'가족에게는 무료이다.'
					],
					answer: 1,
					why: 'You do not need to make an appointment. Just walk in이라고 했습니다. 예약이 필요 없다는 말이 보기에서 come without booking으로 바뀌었습니다. 사진은 10분 만에 준비됩니다.'
				},
				{
					id: 'd34-25',
					text: 'How can students get a discount?',
					ko: '학생은 어떻게 할인을 받을 수 있는가?',
					options: [
						'By presenting a student ID',
						'By visiting on a Saturday',
						'By bringing a family member',
						'By ordering on the Web site'
					],
					optionsKo: [
						'학생증을 보여 줘서',
						'토요일에 방문해서',
						'가족을 데려와서',
						'웹사이트에서 주문해서'
					],
					answer: 0,
					why: 'students get twenty percent off all passport photos라고 한 뒤 Just show your student card라고 했습니다. show your student card가 보기에서 presenting a student ID로 바뀌었습니다.'
				}
			],
			vocab: [
				['passport', '여권'],
				['job application', '입사 지원'],
				['make an appointment', '예약하다'],
				['walk in', '예약 없이 방문하다'],
				['student card', '학생증']
			]
		}
	]
} satisfies DayContent;
