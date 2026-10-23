import type { DayContent } from '../schema';

export default {
	goals: [
		'이중 지문을 읽는 순서를 알고 연계 문제를 푼다',
		'Part 3의 문제 유형을 정리하고 3인 대화와 시각 자료 문제를 푼다',
		'Part 4의 문제 유형을 정리하고 시각 자료와 화자의 의도 문제를 푼다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '이중 지문은 이런 문제입니다',
			blocks: [
				{
					type: 'p',
					text: '**이중 지문**은 서로 관련된 글 **두 개**를 읽고 문제 **다섯 개**를 푸는 세트입니다. 실제 시험에서는 Part 7 뒷부분(176~200번)에 지문 2개에 5문항짜리 세트가 2개, 지문 3개에 5문항짜리 세트가 3개 나옵니다.'
				},
				{
					type: 'table',
					head: ['첫 번째 지문', '두 번째 지문'],
					rows: [
						['광고', '고객의 문의·예약 이메일'],
						['공지·안내문', '신청 양식, 신청 이메일'],
						['일정표', '일정 변경을 알리는 이메일'],
						['이메일', '그 이메일에 대한 답장']
					]
				},
				{
					type: 'box',
					title: '읽는 순서',
					items: [
						'두 지문의 **종류와 관계**를 먼저 파악합니다. 제목, 보낸 사람, 받는 사람, 날짜를 훑어보면 "광고와 고객의 예약 이메일"처럼 관계가 보입니다.',
						'**문제를 읽습니다.** 무엇을 묻는지, 어느 지문에서 찾아야 하는지 확인합니다.',
						'**해당 지문**에서 근거를 찾습니다. 질문에 나온 이름이나 낱말이 있는 지문을 봅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'According to the ==schedule==, when does the workshop begin?',
							ko: '일정표에 따르면, 워크숍은 언제 시작하는가?',
							note: '질문에 지문의 종류가 나오면 그 지문에서만 찾습니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '다섯 문제 중 서너 문제는 한 지문만 읽어도 풀립니다. 단일 지문 문제를 풀 때와 똑같이 풉니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '연계 문제 푸는 법',
			blocks: [
				{
					type: 'p',
					text: '**연계 문제**는 두 지문의 정보를 **합쳐야** 풀리는 문제입니다. 한 세트 다섯 문제 중 한두 문제가 나옵니다. 한 지문만 읽으면 답이 하나로 정해지지 않습니다.'
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'한 지문에서 **단서**를 찾습니다. 요일, 시간, 인원수, 물건의 종류 같은 말입니다.',
						'다른 지문에서 그 단서에 **해당하는 정보**를 찾습니다. 표가 있으면 표에서 그 줄을 찾습니다.',
						'두 정보를 합쳐 보기를 고릅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'E-mail: I will join the ==Friday== class.',
							ko: '이메일: 저는 금요일 수업에 참여하겠습니다.',
							note: '단서는 "금요일 수업"입니다. 이메일에는 강사 이름이 없습니다.'
						},
						{
							en: 'Schedule: ==Friday== — Yoga — ==Ms. Han==',
							ko: '일정표: 금요일 — 요가 — 한 강사',
							note: '일정표에서 금요일 줄을 찾으면 강사가 Ms. Han임을 알 수 있습니다.'
						},
						{
							en: 'Q. Who will teach the class that the writer joins?',
							ko: '글쓴이가 참여하는 수업은 누가 가르치는가?',
							note: '정답은 Ms. Han입니다. 이메일의 단서와 일정표의 정보를 합쳐야 나옵니다.'
						}
					]
				},
				{
					type: 'table',
					head: ['한 지문의 단서', '다른 지문에서 찾을 정보'],
					rows: [
						['요일·날짜·시간', '그때의 수업, 장소, 담당자'],
						['인원수, 머무는 기간', '단체 요금, 무료 혜택'],
						['물건·서비스의 종류', '종류별 가격']
					]
				},
				{
					type: 'tip',
					text: '질문에 **most likely**나 **suggested**가 있고 답이 한 지문에 그대로 나오지 않으면 연계 문제일 가능성이 큽니다. 표와 조건(If ~) 문장을 눈여겨봅니다.'
				}
			]
		},
		{
			type: 'set',
			part: 7,
			label: '기사',
			passages: [
				{
					kind: '기사',
					title: 'Fix-It Saturday Comes to Glenhaven',
					body: [
						'Do you have a broken lamp or a chair with a loose leg? Do not throw it away. Starting in June, the town of Glenhaven will hold Fix-It Saturday at the town hall on the first Saturday of every month.',
						'At the event, volunteers will repair small household items while the owners wait. The service is free, but visitors must pay for any new parts.',
						'"We want to reduce waste and save residents money," said the event organizer, Mr. Samir Nasser. Each visitor may bring up to two items. Large items such as refrigerators cannot be accepted.'
					],
					ko: [
						'고장 난 전등이나 다리가 흔들리는 의자가 있습니까? 버리지 마세요. 6월부터 글렌헤이븐시는 매달 첫째 토요일에 시청에서 픽스잇 새터데이를 엽니다.',
						'행사에서는 주인이 기다리는 동안 자원봉사자들이 작은 가정용품을 고쳐 줍니다. 서비스는 무료이지만 새 부품이 필요하면 방문객이 그 값을 내야 합니다.',
						'행사를 준비한 사미르 나세르 씨는 "쓰레기를 줄이고 주민들의 돈을 아껴 드리고 싶습니다."라고 말했습니다. 방문객 한 사람이 물건을 두 개까지 가져올 수 있습니다. 냉장고 같은 큰 물건은 받지 않습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd36-01',
					text: 'What is the article mainly about?',
					ko: '기사는 주로 무엇에 관한 것인가?',
					options: [
						'A sale at a furniture store',
						'A monthly repair event',
						'A new town hall building',
						'A class for volunteers'
					],
					optionsKo: [
						'가구점의 할인 행사',
						'매달 열리는 수리 행사',
						'새 시청 건물',
						'자원봉사자를 위한 수업'
					],
					answer: 1,
					why: '첫 문단에서 Fix-It Saturday를 on the first Saturday of every month(매달 첫째 토요일)에 연다고 했고, 둘째 문단에서 volunteers will repair small household items라고 했습니다. 매달 열리는 수리 행사에 관한 기사입니다.'
				},
				{
					id: 'd36-02',
					text: 'What must visitors pay for?',
					ko: '방문객은 무엇에 대해 돈을 내야 하는가?',
					options: [
						'Entry to the town hall',
						'The work of the volunteers',
						'New parts for their items',
						'Parking near the event'
					],
					optionsKo: [
						'시청 입장',
						'자원봉사자들의 작업',
						'물건에 들어가는 새 부품',
						'행사장 근처 주차'
					],
					answer: 2,
					why: 'The service is free, but visitors must pay for any new parts라고 했습니다. 고쳐 주는 일 자체는 무료이고, 새 부품값만 냅니다.'
				},
				{
					id: 'd36-03',
					text: 'What is indicated about Fix-It Saturday?',
					ko: '픽스잇 새터데이에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It takes place every week.',
						'It is held at a school.',
						'It is run by a repair company.',
						'It does not accept large items.'
					],
					optionsKo: [
						'매주 열린다.',
						'학교에서 열린다.',
						'수리 업체가 운영한다.',
						'큰 물건은 받지 않는다.'
					],
					answer: 3,
					why: 'Large items such as refrigerators cannot be accepted라고 했습니다. cannot be accepted가 보기에서 does not accept로 바뀌었습니다. 행사는 매달 한 번 town hall(시청)에서 열리고, 수리는 volunteers(자원봉사자)가 합니다.'
				}
			],
			vocab: [
				['throw away', '버리다'],
				['hold', '(행사를) 열다'],
				['volunteer', '자원봉사자'],
				['household item', '가정용품'],
				['reduce waste', '쓰레기를 줄이다'],
				['up to', '최대 ~까지']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '안내문과 이메일',
			passages: [
				{
					kind: '안내문',
					title: 'Coral Bay Aquarium — Daily Programs',
					body: [
						'Join one of our daily programs led by aquarium staff. Each program lasts thirty minutes and is free with your ticket.',
						{
							table: {
								head: ['Program', 'Time', 'Place', 'Guide'],
								rows: [
									['Sea Turtle Talk', '10:00 A.M.', 'Ocean Tank', 'Mr. Ruiz'],
									['Penguin Feeding', '11:30 A.M.', 'Ice Hall', 'Ms. Tanaka'],
									['Shark Feeding', '1:30 P.M.', 'Deep Sea Tunnel', 'Mr. Olsen'],
									['Touch Pool Tour', '3:00 P.M.', 'Discovery Room', 'Ms. Bell']
								]
							}
						},
						'Groups of fifteen or more people must book a program at least one week before their visit. Tickets are $12 each, but groups of twenty or more pay only $9 per person.'
					],
					ko: [
						'[안내문] 코럴 베이 수족관 — 일일 프로그램',
						'수족관 직원이 진행하는 일일 프로그램에 참여해 보세요. 각 프로그램은 30분 동안 진행되며 입장권이 있으면 무료입니다.',
						'프로그램 / 시간 / 장소 / 안내자 — 바다거북 이야기 / 오전 10시 / 오션 탱크 / 루이스 씨, 펭귄 먹이 주기 / 오전 11시 30분 / 아이스 홀 / 다나카 씨, 상어 먹이 주기 / 오후 1시 30분 / 심해 터널 / 올슨 씨, 터치 풀 투어 / 오후 3시 / 디스커버리 룸 / 벨 씨',
						'15명 이상의 단체는 방문하기 적어도 일주일 전에 프로그램을 예약해야 합니다. 입장권은 한 장에 12달러이지만 20명 이상의 단체는 한 사람당 9달러만 냅니다.'
					]
				},
				{
					kind: '이메일',
					head: [
						['To', 'Coral Bay Aquarium'],
						['From', 'Soo-ah Choi'],
						['Subject', 'Group visit on May 15'],
						['Date', 'May 4']
					],
					body: [
						'Hello,',
						'I am a teacher at Northgate Elementary School. I am planning a class trip to your aquarium on Friday, May 15. Twenty-four students and two teachers will come.',
						'We will arrive at about noon, and our bus leaves at 2:30. We would like to join the program that starts at 1:30. Could you book it for our group?',
						'Also, the students will bring their own lunches. Is there a place where they can eat?',
						'Thank you,',
						'Soo-ah Choi'
					],
					ko: [
						'[이메일] 최수아 → 코럴 베이 수족관, 제목: 5월 15일 단체 방문, 5월 4일',
						'안녕하세요.',
						'저는 노스게이트 초등학교의 교사입니다. 5월 15일 금요일에 귀 수족관으로 현장 학습을 갈 계획입니다. 학생 24명과 교사 2명이 갑니다.',
						'저희는 정오쯤 도착하고 버스는 2시 30분에 떠납니다. 1시 30분에 시작하는 프로그램에 참여하고 싶습니다. 저희 단체를 위해 예약해 주시겠어요?',
						'그리고 학생들이 각자 점심을 가져갑니다. 학생들이 먹을 수 있는 장소가 있나요?',
						'감사합니다. 최수아 드림'
					]
				}
			],
			questions: [
				{
					id: 'd36-04',
					text: 'What is true about the daily programs?',
					ko: '일일 프로그램에 대해 사실인 것은 무엇인가?',
					options: [
						'They are included in the ticket price.',
						'They are held only on weekends.',
						'They last for one hour.',
						'They are led by volunteers.'
					],
					optionsKo: [
						'입장권 가격에 포함되어 있다.',
						'주말에만 열린다.',
						'한 시간 동안 진행된다.',
						'자원봉사자가 진행한다.'
					],
					answer: 0,
					why: '안내문에서 Each program lasts thirty minutes and is free with your ticket라고 했습니다. free with your ticket가 보기에서 included in the ticket price로 바뀌었습니다. 프로그램은 매일(daily) 열리고 30분 동안 진행되며, aquarium staff(수족관 직원)가 이끕니다.'
				},
				{
					id: 'd36-05',
					text: 'What must a group of fifteen people do?',
					ko: '15명인 단체는 무엇을 해야 하는가?',
					options: [
						'Pay $9 per person',
						'Arrive before 10:00 A.M.',
						'Reserve a program in advance',
						'Bring their own guide'
					],
					optionsKo: [
						'한 사람당 9달러를 낸다',
						'오전 10시 전에 도착한다',
						'프로그램을 미리 예약한다',
						'안내자를 직접 데려온다'
					],
					answer: 2,
					why: '안내문에서 Groups of fifteen or more people must book a program at least one week before their visit라고 했습니다. book이 보기에서 Reserve로, at least one week before가 in advance로 바뀌었습니다. 9달러는 20명 이상인 단체의 요금입니다.'
				},
				{
					id: 'd36-06',
					text: "How much will each person in Ms. Choi's group most likely pay for a ticket?",
					ko: '최 씨의 단체는 입장권 값으로 한 사람당 얼마를 낼 것 같은가?',
					options: ['$3', '$9', '$12', '$15'],
					optionsKo: ['3달러', '9달러', '12달러', '15달러'],
					answer: 1,
					why: '연계 문제입니다. 이메일에서 Twenty-four students and two teachers will come이라고 했으므로 모두 26명입니다. 안내문에 groups of twenty or more pay only $9 per person이라고 했으므로 한 사람당 9달러입니다. 12달러는 단체가 아닐 때의 요금입니다.'
				},
				{
					id: 'd36-07',
					text: "Who will most likely lead the program that Ms. Choi's group joins?",
					ko: '최 씨의 단체가 참여하는 프로그램은 누가 진행할 것 같은가?',
					options: ['Mr. Ruiz', 'Ms. Tanaka', 'Ms. Bell', 'Mr. Olsen'],
					optionsKo: ['루이스 씨', '다나카 씨', '벨 씨', '올슨 씨'],
					answer: 3,
					why: '연계 문제입니다. 이메일에서 We would like to join the program that starts at 1:30라고 했습니다. 안내문의 표에서 1:30 P.M.에 시작하는 프로그램은 Shark Feeding이고 안내자는 Mr. Olsen입니다.'
				},
				{
					id: 'd36-08',
					text: 'What does Ms. Choi ask about?',
					ko: '최 씨는 무엇에 관해 묻는가?',
					options: [
						'A place to have lunch',
						'A parking space for the bus',
						'A discount for teachers',
						'The price of a group photo'
					],
					optionsKo: ['점심을 먹을 장소', '버스 주차 공간', '교사 할인', '단체 사진 가격'],
					answer: 0,
					why: '이메일 끝에서 the students will bring their own lunches. Is there a place where they can eat?이라고 물었습니다. a place where they can eat가 보기에서 A place to have lunch로 바뀌었습니다.'
				}
			],
			vocab: [
				['daily', '매일의'],
				['last', '계속되다'],
				['feeding', '먹이 주기'],
				['at least', '적어도'],
				['per person', '한 사람당'],
				['class trip', '현장 학습']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고와 이메일',
			passages: [
				{
					kind: '광고',
					title: 'Cozy Tails Pet Hotel',
					body: [
						'Are you going away on a business trip or a vacation? Leave your pet with us. Cozy Tails Pet Hotel has cared for dogs and cats for more than ten years.',
						'A stay costs $40 per night for a dog and $25 per night for a cat. Every pet gets a private room and two meals a day. If your pet stays five nights or longer, we will give it a bath for free.',
						'We are open every day from 7 A.M. to 8 P.M. To make a reservation, call 555-0167 or send us an e-mail.'
					],
					ko: [
						'[광고] 코지 테일스 반려동물 호텔',
						'출장이나 휴가로 집을 비우시나요? 반려동물을 저희에게 맡기세요. 코지 테일스 반려동물 호텔은 10년 넘게 개와 고양이를 돌봐 왔습니다.',
						'숙박 요금은 개는 하룻밤에 40달러, 고양이는 하룻밤에 25달러입니다. 모든 반려동물에게 개인실과 하루 두 번의 식사를 제공합니다. 반려동물이 5박 이상 묵으면 무료로 목욕을 시켜 드립니다.',
						'매일 오전 7시부터 오후 8시까지 문을 엽니다. 예약하시려면 555-0167로 전화하시거나 이메일을 보내 주세요.'
					]
				},
				{
					kind: '이메일',
					head: [
						['To', 'Cozy Tails Pet Hotel'],
						['From', 'Irene Kwak'],
						['Subject', 'Reservation request'],
						['Date', 'July 20']
					],
					body: [
						'Hello,',
						'A coworker told me about your hotel, and I would like to make a reservation. I am going to Singapore for a trade fair, so I need someone to look after my cat, Momo. I will bring her on Monday, August 3, and pick her up on Sunday, August 9.',
						'Momo has a weak stomach and eats special food. May I bring her food from home?',
						'Thank you,',
						'Irene Kwak'
					],
					ko: [
						'[이메일] 아이린 곽 → 코지 테일스 반려동물 호텔, 제목: 예약 요청, 7월 20일',
						'안녕하세요.',
						'동료에게 귀 호텔 이야기를 듣고 예약하고 싶어 연락드립니다. 제가 무역 박람회 때문에 싱가포르에 가게 되어 제 고양이 모모를 돌봐 줄 곳이 필요합니다. 8월 3일 월요일에 데려가고 8월 9일 일요일에 데리러 가겠습니다.',
						'모모는 위가 약해서 특별한 사료를 먹습니다. 집에서 사료를 가져가도 될까요?',
						'감사합니다. 아이린 곽 드림'
					]
				}
			],
			questions: [
				{
					id: 'd36-09',
					text: 'What is indicated about Cozy Tails Pet Hotel?',
					ko: '코지 테일스 반려동물 호텔에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It is closed on Sundays.',
						'It cares for dogs only.',
						'It has been in business for over ten years.',
						'It takes reservations only by phone.'
					],
					optionsKo: [
						'일요일에는 문을 닫는다.',
						'개만 돌본다.',
						'10년 넘게 영업해 왔다.',
						'전화로만 예약을 받는다.'
					],
					answer: 2,
					why: '광고에서 Cozy Tails Pet Hotel has cared for dogs and cats for more than ten years라고 했습니다. more than ten years가 보기에서 over ten years로 바뀌었습니다. 문은 every day(매일) 열고, 예약은 전화와 이메일로 받습니다.'
				},
				{
					id: 'd36-10',
					text: 'According to the advertisement, what does every pet receive?',
					ko: '광고에 따르면, 모든 반려동물은 무엇을 받는가?',
					options: ['A room of its own', 'Three meals a day', 'A daily walk', 'A new toy'],
					optionsKo: ['혼자 쓰는 방', '하루 세 번의 식사', '매일 하는 산책', '새 장난감'],
					answer: 0,
					why: '광고에서 Every pet gets a private room and two meals a day라고 했습니다. a private room이 보기에서 A room of its own으로 바뀌었습니다. 식사는 하루 두 번입니다.'
				},
				{
					id: 'd36-11',
					text: 'How did Ms. Kwak learn about the hotel?',
					ko: '곽 씨는 호텔을 어떻게 알게 되었는가?',
					options: [
						'From a newspaper advertisement',
						'From a Web site',
						'From a trade fair',
						'From someone she works with'
					],
					optionsKo: ['신문 광고에서', '웹사이트에서', '무역 박람회에서', '함께 일하는 사람에게서'],
					answer: 3,
					why: '이메일 첫 문장에서 A coworker told me about your hotel이라고 했습니다. coworker가 보기에서 someone she works with로 바뀌었습니다. 무역 박람회는 곽 씨가 싱가포르에 가는 이유입니다.'
				},
				{
					id: 'd36-12',
					text: 'How much will Ms. Kwak most likely pay per night?',
					ko: '곽 씨는 하룻밤에 얼마를 낼 것 같은가?',
					options: ['$20', '$25', '$40', '$65'],
					optionsKo: ['20달러', '25달러', '40달러', '65달러'],
					answer: 1,
					why: '연계 문제입니다. 이메일에서 I need someone to look after my cat, Momo라고 했으므로 맡기는 동물은 고양이입니다. 광고에 $40 per night for a dog and $25 per night for a cat이라고 했으므로 하룻밤에 25달러입니다.'
				},
				{
					id: 'd36-13',
					text: 'What is suggested about Momo?',
					ko: '모모에 대해 암시된 것은 무엇인가?',
					options: [
						'She will share a room with another cat.',
						'She will eat three meals a day.',
						'She will get a bath at no charge.',
						'She will stay for two weeks.'
					],
					optionsKo: [
						'다른 고양이와 방을 함께 쓸 것이다.',
						'하루에 세 번 식사할 것이다.',
						'무료로 목욕을 받을 것이다.',
						'2주 동안 묵을 것이다.'
					],
					answer: 2,
					why: '연계 문제입니다. 이메일에서 I will bring her on Monday, August 3, and pick her up on Sunday, August 9라고 했으므로 여섯 밤을 묵습니다. 광고에 If your pet stays five nights or longer, we will give it a bath for free라고 했으므로 무료로 목욕을 받습니다. for free가 보기에서 at no charge로 바뀌었습니다.'
				}
			],
			vocab: [
				['business trip', '출장'],
				['care for', '~을 돌보다'],
				['per night', '하룻밤에'],
				['private room', '개인실'],
				['look after', '~을 돌보다'],
				['trade fair', '무역 박람회']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3 마무리: 유형별로 들을 곳',
			blocks: [
				{
					type: 'p',
					text: 'Part 3에서 배운 문제 유형을 한 번에 정리합니다. 유형마다 **답이 나오는 자리**가 정해져 있습니다. 대화를 듣기 전에 문제를 읽고 유형을 알아보면 어디를 들어야 할지 알 수 있습니다.'
				},
				{
					type: 'table',
					head: ['유형', '질문 예', '들을 곳'],
					rows: [
						[
							'장소·직업',
							'Where are the speakers? / Who is the man?',
							'앞부분. 단어 여러 개를 모아 짐작합니다.'
						],
						[
							'주제·문제점',
							'What are the speakers discussing? / What problem does the woman mention?',
							'첫 한두 마디'
						],
						['세부 사항', 'What does the man say about ~?', '질문의 핵심어가 들리는 곳'],
						[
							'제안·요청',
							'What does the man suggest? / What does the man ask the woman to do?',
							"Why don't you ~, Could you ~, Please ~ 뒤"
						],
						['다음에 할 일', 'What will the woman do next?', "마지막 말. I'll ~ 뒤"],
						[
							'화자의 의도',
							'What does the woman mean when she says, "~"?',
							'인용된 말의 바로 앞 말'
						],
						['시각 자료', 'Look at the graphic. ~', '표에서 보기에 **없는** 칸의 정보']
					]
				},
				{
					type: 'box',
					title: '3인 대화와 시각 자료',
					items: [
						'**3인 대화** — 질문에 이름이 나오면 그 이름이 불린 뒤에 대답하는 사람의 말을 듣습니다. 누가 무엇을 하겠다고 했는지 구분합니다.',
						'**시각 자료** — 보기가 가격이면 대화에서는 가격을 말하지 않습니다. 물건의 이름처럼 표의 다른 칸에 있는 말을 듣고 표에서 답을 찾습니다.',
						'**바꿔 말하기** — 들은 말이 보기에 그대로 나오지 않습니다. report가 document로 바뀌는 것처럼 뜻이 넓은 말로 바뀝니다.'
					]
				},
				{
					type: 'tip',
					text: '세 문제는 대화 순서대로 나옵니다. 한 문제를 놓쳤으면 붙잡지 말고 바로 다음 문제로 넘어갑니다.'
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '3인 대화',
			script: [
				['W', 'Good morning, Oscar, Minho. This is the office I told you about.'],
				['M1', "It's bright, and it's bigger than our current office. What do you think, Minho?"],
				['M2', 'I like it, but twelve of our employees drive to work. Is there parking?'],
				['W', "Yes, there's a parking garage under the building. Each company can use ten spaces."],
				['M2', 'Ten is not enough for us.'],
				[
					'W',
					"You can rent extra spaces for a monthly fee. The price list is in my car, so I'll go and get it now."
				],
				['M1', "Thanks. We'll wait here."]
			],
			scriptKo: [
				'안녕하세요, 오스카 씨, 민호 씨. 여기가 제가 말씀드린 사무실입니다.',
				'밝고, 지금 우리 사무실보다 넓네요. 민호 씨는 어떻게 생각해요?',
				'마음에 들어요. 그런데 우리 직원 중 열두 명이 차로 출근하잖아요. 주차장이 있나요?',
				'네, 건물 지하에 주차장이 있습니다. 회사마다 열 자리를 쓸 수 있습니다.',
				'열 자리로는 부족한데요.',
				'매달 요금을 내면 자리를 더 빌릴 수 있습니다. 요금표가 제 차에 있으니 지금 가서 가져오겠습니다.',
				'고맙습니다. 여기서 기다릴게요.'
			],
			questions: [
				{
					id: 'd36-14',
					text: 'Who most likely is the woman?',
					ko: '여자는 누구일 것 같은가?',
					options: [
						'A parking attendant',
						'An interior designer',
						'A real estate agent',
						'A bank clerk'
					],
					optionsKo: ['주차 관리인', '실내 디자이너', '부동산 중개인', '은행 직원'],
					answer: 2,
					why: '여자가 This is the office I told you about라며 사무실을 보여 주고, 주차 자리를 빌리는 조건을 설명합니다. 사무실을 소개하는 부동산 중개인입니다.'
				},
				{
					id: 'd36-15',
					text: 'What is Minho concerned about?',
					ko: '민호는 무엇을 걱정하는가?',
					options: [
						'The size of the office',
						'The number of parking spaces',
						'The monthly rent',
						'The location of the building'
					],
					optionsKo: ['사무실의 크기', '주차 자리의 수', '월 임대료', '건물의 위치'],
					answer: 1,
					why: 'What do you think, Minho?라는 질문에 대답한 남자가 Minho입니다. 그는 Is there parking?이라고 묻고, 열 자리를 쓸 수 있다는 말에 Ten is not enough for us라고 했습니다.'
				},
				{
					id: 'd36-16',
					text: 'What will the woman do next?',
					ko: '여자는 다음에 무엇을 할 것인가?',
					options: [
						'Get a document',
						'Show the men another office',
						'Call the building owner',
						'Move her car'
					],
					optionsKo: [
						'서류를 가져온다',
						'남자들에게 다른 사무실을 보여 준다',
						'건물 주인에게 전화한다',
						'차를 옮긴다'
					],
					answer: 0,
					why: "여자가 The price list is in my car, so I'll go and get it now라고 했습니다. price list가 보기에서 a document로 바뀌었습니다. 차를 옮기는 것이 아니라 차에 있는 요금표를 가지러 가는 것입니다."
				}
			],
			vocab: [
				['current', '현재의'],
				['drive to work', '차로 출근하다'],
				['parking garage', '주차장 (건물)'],
				['rent', '빌리다, 임대하다'],
				['monthly fee', '월 요금'],
				['price list', '요금표, 가격표']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화와 가격표',
			script: [
				[
					'W',
					"Hello. I'd like to have this painting framed. It's a gift for my manager, who is moving to another city."
				],
				['M', 'We have four kinds of frames. The prices are on this card.'],
				['W', 'The gold one is too bright for an office wall. I will take the black wood frame.'],
				['M', 'Good choice. It will be ready on Thursday.'],
				['W', 'Oh, the farewell party is on Wednesday. Could you finish it by then?'],
				[
					'M',
					"Yes, I can do that. Please write your phone number here, and I'll call you when it is done."
				]
			],
			scriptKo: [
				'안녕하세요. 이 그림을 액자에 넣고 싶어요. 다른 도시로 옮겨 가는 팀장님께 드릴 선물이에요.',
				'액자는 네 종류가 있습니다. 가격은 이 카드에 나와 있습니다.',
				'금색은 사무실 벽에 걸기에는 너무 화려해요. 검은색 나무 액자로 할게요.',
				'잘 고르셨습니다. 목요일에 준비됩니다.',
				'아, 송별회가 수요일이에요. 그때까지 끝내 주실 수 있나요?',
				'네, 가능합니다. 여기에 전화번호를 적어 주시면 다 되었을 때 전화드리겠습니다.'
			],
			graphic: {
				title: 'Frame Prices',
				head: ['Frame', 'Price'],
				rows: [
					['White plastic', '$20'],
					['Black wood', '$35'],
					['Silver metal', '$45'],
					['Gold metal', '$60']
				]
			},
			questions: [
				{
					id: 'd36-17',
					text: 'Why is the woman buying a gift?',
					ko: '여자는 왜 선물을 사는가?',
					options: [
						'A coworker is getting married.',
						'A new office is opening.',
						'A client is visiting.',
						'Her manager is moving away.'
					],
					optionsKo: [
						'동료가 결혼한다.',
						'새 사무실이 문을 연다.',
						'고객이 방문한다.',
						'팀장이 다른 곳으로 떠난다.'
					],
					answer: 3,
					why: "It's a gift for my manager, who is moving to another city라고 했습니다. moving to another city가 보기에서 moving away로 바뀌었습니다."
				},
				{
					id: 'd36-18',
					text: 'Look at the graphic. How much is the frame that the woman chooses?',
					ko: '시각 자료를 보시오. 여자가 고른 액자는 얼마인가?',
					options: ['$20', '$35', '$45', '$60'],
					optionsKo: ['20달러', '35달러', '45달러', '60달러'],
					answer: 1,
					why: '여자가 I will take the black wood frame이라고 했고, 가격표에서 Black wood는 $35입니다. 금색 액자는 too bright for an office wall이라고 하며 고르지 않았습니다.'
				},
				{
					id: 'd36-19',
					text: 'What does the man ask the woman to do?',
					ko: '남자는 여자에게 무엇을 하라고 요청하는가?',
					options: [
						'Provide her phone number',
						'Pay in advance',
						'Come back on Thursday',
						'Choose a different frame'
					],
					optionsKo: [
						'전화번호를 알려 준다',
						'미리 결제한다',
						'목요일에 다시 온다',
						'다른 액자를 고른다'
					],
					answer: 0,
					why: '남자가 Please write your phone number here라고 했습니다. write your phone number가 보기에서 Provide her phone number로 바뀌었습니다. Thursday는 남자가 처음에 말한 완성 날짜입니다.'
				}
			],
			vocab: [
				['frame', '액자, 액자에 넣다'],
				['painting', '그림'],
				['bright', '밝은, 화려한'],
				['farewell party', '송별회'],
				['by then', '그때까지']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4 마무리: 유형별로 들을 곳',
			blocks: [
				{
					type: 'p',
					text: 'Part 4에서 배운 내용을 정리합니다. 먼저 **첫 문장**을 듣고 담화의 종류를 알아낸 뒤, 문제 유형에 따라 들을 곳을 정합니다.'
				},
				{
					type: 'box',
					title: '담화의 종류는 첫 문장에서 알 수 있습니다',
					items: [
						"**전화 메시지** — This is ~ from ~. I'm calling about ~.",
						'**안내 방송** — Attention, passengers.',
						'**광고** — Are you looking for ~? / Do you love ~?',
						'**회의 발췌** — Thanks for coming, everyone.',
						"**뉴스·방송** — You're listening to ~.",
						'**인물 소개** — Please welcome ~.'
					]
				},
				{
					type: 'table',
					head: ['유형', '질문 예', '들을 곳'],
					rows: [
						['화자·장소', 'Who is the speaker? / Where does the speaker work?', '첫 한두 문장'],
						['주제·목적', 'What is being advertised? / Why is the speaker calling?', '앞부분'],
						['세부 사항', 'What does the speaker say about ~?', '질문의 핵심어가 들리는 곳'],
						[
							'요청·다음에 할 일',
							'What are the listeners asked to do? / What will the speaker do next?',
							'마지막 부분. Please ~ 뒤'
						],
						['시각 자료', 'Look at the graphic. ~', '표에서 보기에 **없는** 칸의 정보'],
						[
							'화자의 의도',
							'What does the speaker imply when he says, "~"?',
							'인용된 말의 바로 앞 문장'
						]
					]
				},
				{
					type: 'tip',
					text: '화자의 의도 문제는 인용된 말만 해석하면 틀립니다. 그 말을 **왜** 했는지를 바로 앞 문장에서 찾습니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '전화 메시지와 영업시간표',
			script: [
				[
					'W',
					'Hello, Mr. Doyle. This is Carla from Blue Owl Eyewear. Your new glasses arrived this morning, and they are ready for you.'
				],
				[
					'W',
					'I remember that you work until seven on weekdays. So please come on the day we stay open the latest. You can see our hours on the card I gave you.'
				],
				[
					'W',
					'When you come, please bring your old glasses. We will clean them for free. See you soon.'
				]
			],
			scriptKo: [
				'안녕하세요, 도일 선생님. 블루 아울 안경점의 칼라입니다. 새 안경이 오늘 아침에 도착해서 찾아가실 수 있습니다.',
				'평일에는 7시까지 일하신다고 하셨지요. 그러니 저희가 가장 늦게까지 문을 여는 날에 와 주세요. 영업시간은 제가 드린 카드에서 확인하실 수 있습니다.',
				'오실 때 쓰시던 안경을 가져오세요. 무료로 닦아 드리겠습니다. 곧 뵙겠습니다.'
			],
			graphic: {
				title: 'Store Hours',
				head: ['Day', 'Hours'],
				rows: [
					['Monday', '9 A.M. to 6 P.M.'],
					['Tuesday', '9 A.M. to 6 P.M.'],
					['Wednesday', '9 A.M. to 6 P.M.'],
					['Thursday', '9 A.M. to 8 P.M.'],
					['Friday', '9 A.M. to 6 P.M.'],
					['Saturday', '10 A.M. to 3 P.M.']
				]
			},
			questions: [
				{
					id: 'd36-20',
					text: 'Why is the speaker calling?',
					ko: '화자는 왜 전화하고 있는가?',
					options: [
						'To schedule an eye exam',
						'To say that an order is ready',
						'To ask about a payment',
						'To announce new store hours'
					],
					optionsKo: [
						'시력 검사 일정을 잡으려고',
						'주문한 물건이 준비되었다고 알리려고',
						'결제에 관해 물어보려고',
						'새 영업시간을 알리려고'
					],
					answer: 1,
					why: 'Your new glasses arrived this morning, and they are ready for you라고 했습니다. new glasses가 보기에서 an order로 바뀌었습니다.'
				},
				{
					id: 'd36-21',
					text: 'Look at the graphic. When should the listener visit the store?',
					ko: '시각 자료를 보시오. 청자는 언제 매장을 방문해야 하는가?',
					options: ['On Monday', 'On Wednesday', 'On Thursday', 'On Saturday'],
					optionsKo: ['월요일에', '수요일에', '목요일에', '토요일에'],
					answer: 2,
					why: '화자가 please come on the day we stay open the latest라고 했습니다. 영업시간표에서 가장 늦게까지 문을 여는 날은 오후 8시에 닫는 Thursday입니다.'
				},
				{
					id: 'd36-22',
					text: 'What does the speaker offer to do for free?',
					ko: '화자는 무엇을 무료로 해 주겠다고 하는가?',
					options: [
						'Deliver an order',
						"Check the listener's eyes",
						'Repair a frame',
						'Clean some glasses'
					],
					optionsKo: [
						'주문품을 배달한다',
						'청자의 시력을 검사한다',
						'안경테를 수리한다',
						'안경을 닦아 준다'
					],
					answer: 3,
					why: 'please bring your old glasses. We will clean them for free라고 했습니다. them은 청자가 쓰던 안경입니다.'
				}
			],
			vocab: [
				['glasses', '안경'],
				['arrive', '도착하다'],
				['on weekdays', '평일에'],
				['stay open', '문을 열어 두다'],
				['for free', '무료로']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '광고',
			script: [
				[
					'M',
					'Do you love live music? Then come to the Starlight Jazz Night at Willow Park on Saturday, July eighteenth.'
				],
				[
					'M',
					'Five bands will play from six until ten P.M. Food trucks will be there all evening, so you do not need to eat dinner first.'
				],
				[
					'M',
					'Tickets are twenty dollars and are sold only on our Web site. Last year, tickets sold out in two days.'
				],
				['M', 'Children under twelve can enter for free. Come and enjoy a summer evening with us.']
			],
			scriptKo: [
				'라이브 음악을 좋아하시나요? 그렇다면 7월 18일 토요일 윌로 공원에서 열리는 스타라이트 재즈의 밤에 오세요.',
				'다섯 밴드가 오후 6시부터 10시까지 연주합니다. 저녁 내내 푸드 트럭이 있으니 저녁을 먼저 드시고 올 필요가 없습니다.',
				'입장권은 20달러이고 저희 웹사이트에서만 판매합니다. 작년에는 입장권이 이틀 만에 매진되었습니다.',
				'12세 미만 어린이는 무료로 입장할 수 있습니다. 오셔서 저희와 함께 여름 저녁을 즐기세요.'
			],
			questions: [
				{
					id: 'd36-23',
					text: 'What event is being advertised?',
					ko: '어떤 행사가 광고되고 있는가?',
					options: ['A music event', 'A food festival', 'A park opening', 'A dance class'],
					optionsKo: ['음악 행사', '음식 축제', '공원 개장', '춤 수업'],
					answer: 0,
					why: 'come to the Starlight Jazz Night at Willow Park라고 했고, Five bands will play라고 했습니다. Jazz Night이 보기에서 A music event로 바뀌었습니다. 푸드 트럭은 행사장에서 음식을 파는 것일 뿐입니다.'
				},
				{
					id: 'd36-24',
					text: 'What does the speaker imply when he says, "Last year, tickets sold out in two days"?',
					ko: '화자가 "작년에는 입장권이 이틀 만에 매진되었습니다"라고 말할 때 암시하는 것은 무엇인가?',
					options: [
						'The event was canceled last year.',
						'Tickets are cheaper this year.',
						'The park is too small for the event.',
						'Listeners should buy tickets soon.'
					],
					optionsKo: [
						'작년에 행사가 취소되었다.',
						'올해는 입장권이 더 싸다.',
						'공원이 행사를 하기에 너무 작다.',
						'청자들은 입장권을 빨리 사야 한다.'
					],
					answer: 3,
					why: '바로 앞에서 Tickets are twenty dollars and are sold only on our Web site라고 입장권 사는 방법을 알려 주었습니다. 작년에 이틀 만에 매진되었다는 말은 올해도 빨리 팔릴 테니 서둘러 사라는 뜻입니다.'
				},
				{
					id: 'd36-25',
					text: 'Who can attend the event for free?',
					ko: '누가 행사에 무료로 참석할 수 있는가?',
					options: [
						'People who arrive before six',
						'Children younger than twelve',
						'Groups of five or more',
						'Visitors who buy dinner'
					],
					optionsKo: [
						'6시 전에 도착하는 사람',
						'12세보다 어린 아이',
						'5명 이상의 단체',
						'저녁을 사 먹는 방문객'
					],
					answer: 1,
					why: 'Children under twelve can enter for free라고 했습니다. under twelve가 보기에서 younger than twelve로 바뀌었습니다.'
				}
			],
			vocab: [
				['live music', '라이브 음악'],
				['band', '밴드'],
				['food truck', '푸드 트럭'],
				['sell out', '매진되다'],
				['under twelve', '12세 미만'],
				['enter', '입장하다']
			]
		}
	]
} satisfies DayContent;
