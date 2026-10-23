import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7의 문제 형식을 알고 주제·목적 문제를 푼다',
		'Part 3 대화에서 장소와 직업을 알아낸다',
		'Part 4 전화 메시지의 흐름을 따라간다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 7은 이런 문제입니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 7은 글을 읽고 그 내용에 관한 문제를 푸는 파트입니다. 모두 54문항으로 RC의 절반이 넘습니다. 이메일, 공지, 광고, 기사, 문자 메시지 같은 글이 나옵니다.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'**문제를 먼저** 읽습니다. 무엇을 찾아야 하는지 알고 글을 읽어야 빠릅니다.',
						'글에서 **근거가 되는 문장**을 찾습니다.',
						'근거 문장과 뜻이 같은 보기를 고릅니다. 정답은 글의 말을 **다른 말로 바꿔** 쓴 경우가 많습니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Ms. Yoon will be ==out of the office==.',
							ko: '윤 씨는 사무실에 없을 것입니다.',
							note: '보기에서는 "Ms. Yoon will be ==away==."로 바뀌어 나옵니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '이 프로그램에서는 한 세트의 문제를 모두 풀면 아래에 지문 해석이 나옵니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '주제·목적 문제',
			blocks: [
				{
					type: 'p',
					text: '글을 **왜 썼는지**, **무엇에 관한 글인지** 묻는 문제입니다. 거의 모든 지문의 첫 문제로 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['What is the purpose of the e-mail?', '이메일의 목적은 무엇인가?'],
						['Why was the memo written?', '회람은 왜 쓰였는가?'],
						['What is the notice mainly about?', '공지는 주로 무엇에 관한 것인가?'],
						['What is being advertised?', '무엇이 광고되고 있는가?']
					]
				},
				{
					type: 'box',
					title: '근거를 찾는 곳',
					items: [
						'답은 대부분 **첫 두세 문장**에 있습니다.',
						'이메일과 회람은 **Subject**(제목) 줄을 먼저 봅니다.',
						'목적을 알리는 표현 — I am writing to ~ / This is to inform you that ~ / We are pleased to announce ~'
					]
				}
			]
		},
		{
			type: 'set',
			part: 7,
			label: '이메일',
			passages: [
				{
					kind: '이메일',
					head: [
						['To', 'Daniel Cho'],
						['From', 'Lisa Park'],
						['Subject', 'Meeting schedule change'],
						['Date', 'May 3']
					],
					body: [
						'Dear Mr. Cho,',
						'I am writing to let you know that our meeting on Thursday has been moved. The new time is Friday at 2 P.M. The meeting room is the same, Room 305.',
						'Our manager, Ms. Yoon, will be out of the office on Thursday, so she asked me to change the date. Please bring the sales report for April.',
						'If Friday does not work for you, please reply to this e-mail by Wednesday.',
						'Best regards,',
						'Lisa Park'
					],
					ko: [
						'조 선생님께,',
						'목요일 회의가 변경되었음을 알려 드리려고 메일을 씁니다. 새 시간은 금요일 오후 2시입니다. 회의실은 그대로 305호입니다.',
						'저희 관리자인 윤 씨가 목요일에 사무실에 없어서 저에게 날짜를 바꿔 달라고 요청했습니다. 4월 영업 보고서를 가져와 주세요.',
						'금요일이 어려우시면 수요일까지 이 이메일에 답장해 주세요.',
						'리사 박 드림'
					]
				}
			],
			questions: [
				{
					id: 'd25-01',
					text: 'What is the purpose of the e-mail?',
					ko: '이메일의 목적은 무엇인가?',
					options: [
						'To cancel a meeting',
						'To announce a schedule change',
						'To reserve a meeting room',
						'To introduce a new manager'
					],
					optionsKo: [
						'회의를 취소하려고',
						'일정 변경을 알리려고',
						'회의실을 예약하려고',
						'새 관리자를 소개하려고'
					],
					answer: 1,
					why: '제목이 Meeting schedule change이고, 첫 문장에서 our meeting on Thursday has been moved(목요일 회의가 변경되었다)라고 했습니다.'
				},
				{
					id: 'd25-02',
					text: 'Why was the meeting moved?',
					ko: '회의는 왜 변경되었는가?',
					options: [
						'The room is not available.',
						'Mr. Cho asked for a change.',
						'Ms. Yoon will be away.',
						'The report is not ready.'
					],
					optionsKo: [
						'회의실을 쓸 수 없다.',
						'조 씨가 변경을 요청했다.',
						'윤 씨가 자리에 없다.',
						'보고서가 준비되지 않았다.'
					],
					answer: 2,
					why: 'Ms. Yoon, will be out of the office on Thursday, so she asked me to change the date라고 했습니다. out of the office가 보기에서 away로 바뀌었습니다.'
				},
				{
					id: 'd25-03',
					text: 'What should Mr. Cho do if he cannot attend on Friday?',
					ko: '조 씨는 금요일에 참석할 수 없으면 무엇을 해야 하는가?',
					options: [
						'Call Ms. Yoon',
						'Visit Room 305',
						'Send the report by mail',
						'Reply to the e-mail'
					],
					optionsKo: [
						'윤 씨에게 전화한다',
						'305호를 방문한다',
						'보고서를 우편으로 보낸다',
						'이메일에 답장한다'
					],
					answer: 3,
					why: '마지막 문단에서 If Friday does not work for you, please reply to this e-mail by Wednesday라고 했습니다.'
				}
			],
			vocab: [
				['let ~ know', '~에게 알리다'],
				['out of the office', '사무실에 없는'],
				['sales report', '영업 보고서'],
				['reply to', '~에 답장하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Notice to All Tenants',
					body: [
						'The elevator in Building B will be out of service on Monday, June 10, from 9 A.M. to 3 P.M. A technician will replace some old parts during this time.',
						'Please use the stairs or the elevator in Building A. We are sorry for the inconvenience.',
						'If you need help carrying heavy items, please call the management office at 555-0142.',
						'Riverside Apartments Management Office'
					],
					ko: [
						'B동 엘리베이터는 6월 10일 월요일 오전 9시부터 오후 3시까지 운행하지 않습니다. 이 시간 동안 기술자가 낡은 부품 몇 개를 교체할 예정입니다.',
						'계단이나 A동 엘리베이터를 이용해 주세요. 불편을 드려 죄송합니다.',
						'무거운 짐을 옮기는 데 도움이 필요하시면 관리 사무소 555-0142로 전화해 주세요.',
						'리버사이드 아파트 관리 사무소'
					]
				}
			],
			questions: [
				{
					id: 'd25-04',
					text: 'What is the notice mainly about?',
					ko: '공지는 주로 무엇에 관한 것인가?',
					options: [
						'Elevator repair work',
						'A new building',
						'A change in office hours',
						'A moving service'
					],
					optionsKo: ['엘리베이터 수리 작업', '새 건물', '사무소 운영 시간 변경', '이사 서비스'],
					answer: 0,
					why: '첫 문단에서 엘리베이터가 운행하지 않고 A technician will replace some old parts(기술자가 낡은 부품을 교체한다)라고 했습니다.'
				},
				{
					id: 'd25-05',
					text: 'How long will the work take?',
					ko: '작업은 얼마나 걸리는가?',
					options: ['Three hours', 'Five hours', 'Six hours', 'Nine hours'],
					optionsKo: ['3시간', '5시간', '6시간', '9시간'],
					answer: 2,
					why: 'from 9 A.M. to 3 P.M.(오전 9시부터 오후 3시까지)이므로 6시간입니다.'
				},
				{
					id: 'd25-06',
					text: 'Why would a tenant call the management office?',
					ko: '입주자는 왜 관리 사무소에 전화하겠는가?',
					options: [
						'To report a problem',
						'To get help with heavy items',
						'To reserve the elevator',
						'To pay the rent'
					],
					optionsKo: [
						'문제를 신고하려고',
						'무거운 짐 옮기는 도움을 받으려고',
						'엘리베이터를 예약하려고',
						'집세를 내려고'
					],
					answer: 1,
					why: 'If you need help carrying heavy items, please call the management office라고 했습니다.'
				}
			],
			vocab: [
				['tenant', '입주자, 세입자'],
				['out of service', '운행하지 않는'],
				['replace', '교체하다'],
				['management office', '관리 사무소']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Sunny Day Café — Now Open!',
					body: [
						'Sunny Day Café opened last week on Maple Street, next to the city library. We serve fresh coffee, sandwiches, and homemade cakes every day from 7 A.M. to 8 P.M.',
						'To celebrate our opening, all drinks are 20 percent off until the end of this month. Bring this advertisement and get a free cookie with your order.',
						'We also take orders for office meetings. Call us at 555-0178 for details.'
					],
					ko: [
						'서니 데이 카페가 지난주 메이플가, 시립 도서관 옆에 문을 열었습니다. 매일 오전 7시부터 오후 8시까지 신선한 커피, 샌드위치, 직접 만든 케이크를 제공합니다.',
						'개업을 기념해 이번 달 말까지 모든 음료를 20퍼센트 할인합니다. 이 광고를 가져오시면 주문하실 때 쿠키를 무료로 드립니다.',
						'사무실 회의용 주문도 받습니다. 자세한 내용은 555-0178로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd25-07',
					text: 'What is being advertised?',
					ko: '무엇이 광고되고 있는가?',
					options: ['A library', 'A baking class', 'A new café', 'A delivery company'],
					optionsKo: ['도서관', '제빵 수업', '새 카페', '배송 회사'],
					answer: 2,
					why: '제목이 Sunny Day Café — Now Open!이고, 첫 문장에서 카페가 opened last week(지난주에 문을 열었다)라고 했습니다.'
				},
				{
					id: 'd25-08',
					text: 'How can customers get a free cookie?',
					ko: '고객은 어떻게 쿠키를 무료로 받을 수 있는가?',
					options: [
						'By ordering online',
						'By visiting before 7 A.M.',
						'By buying a cake',
						'By bringing the advertisement'
					],
					optionsKo: [
						'온라인으로 주문해서',
						'오전 7시 전에 방문해서',
						'케이크를 사서',
						'광고를 가져와서'
					],
					answer: 3,
					why: 'Bring this advertisement and get a free cookie with your order라고 했습니다.'
				},
				{
					id: 'd25-09',
					text: 'Where is the café located?',
					ko: '카페는 어디에 있는가?',
					options: [
						'Next to a library',
						'Inside a shopping mall',
						'Across from a school',
						'Near a train station'
					],
					optionsKo: ['도서관 옆', '쇼핑몰 안', '학교 맞은편', '기차역 근처'],
					answer: 0,
					why: '첫 문장에서 on Maple Street, next to the city library라고 했습니다.'
				}
			],
			vocab: [
				['serve', '제공하다'],
				['homemade', '직접 만든'],
				['celebrate', '기념하다'],
				['advertisement', '광고'],
				['take orders', '주문을 받다']
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
						['To', 'All employees'],
						['From', 'Human Resources'],
						['Subject', 'Free health checkups']
					],
					body: [
						'This is to inform you that free health checkups will be offered to all full-time employees next month. The checkups will take place at Hanbit Medical Center, which is a five-minute walk from our office.',
						'You can choose any weekday from July 8 to July 19. To sign up, please fill out the form on the company Web site by June 28.',
						'The checkup takes about one hour. Do not eat anything for eight hours before your appointment.',
						'If you have questions, please contact Jina Min in Human Resources.'
					],
					ko: [
						'다음 달에 모든 정규직 직원에게 무료 건강 검진을 제공함을 알려 드립니다. 검진은 사무실에서 걸어서 5분 거리에 있는 한빛 의료 센터에서 진행됩니다.',
						'7월 8일부터 7월 19일 사이의 평일 중 원하는 날을 고를 수 있습니다. 신청하려면 6월 28일까지 회사 웹사이트의 양식을 작성해 주세요.',
						'검진은 약 한 시간이 걸립니다. 예약 시간 전 8시간 동안은 아무것도 드시지 마세요.',
						'질문이 있으면 인사부의 민지나 씨에게 연락해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd25-10',
					text: 'Why was the memo written?',
					ko: '회람은 왜 쓰였는가?',
					options: [
						'To announce a health checkup program',
						'To introduce a new employee',
						'To explain a change in work hours',
						'To ask employees to work overtime'
					],
					optionsKo: [
						'건강 검진 프로그램을 알리려고',
						'새 직원을 소개하려고',
						'근무 시간 변경을 설명하려고',
						'직원들에게 초과 근무를 요청하려고'
					],
					answer: 0,
					why: '제목이 Free health checkups이고, 첫 문장이 This is to inform you that free health checkups will be offered로 시작합니다.'
				},
				{
					id: 'd25-11',
					text: 'Who can get a free checkup?',
					ko: '누가 무료 검진을 받을 수 있는가?',
					options: [
						'All visitors',
						'Part-time workers',
						'Full-time employees',
						'New employees only'
					],
					optionsKo: ['모든 방문객', '시간제 근무자', '정규직 직원', '신입 직원만'],
					answer: 2,
					why: '첫 문장에서 will be offered to all full-time employees(모든 정규직 직원에게 제공된다)라고 했습니다.'
				},
				{
					id: 'd25-12',
					text: 'What should employees do by June 28?',
					ko: '직원들은 6월 28일까지 무엇을 해야 하는가?',
					options: [
						'Visit the medical center',
						'Complete an online form',
						'Call Jina Min',
						'Pay a fee'
					],
					optionsKo: [
						'의료 센터를 방문한다',
						'온라인 양식을 작성한다',
						'민지나 씨에게 전화한다',
						'요금을 낸다'
					],
					answer: 1,
					why: 'please fill out the form on the company Web site by June 28라고 했습니다. fill out the form on the Web site가 보기에서 Complete an online form으로 바뀌었습니다.'
				},
				{
					id: 'd25-13',
					text: 'What are employees told to do before the checkup?',
					ko: '직원들은 검진 전에 무엇을 하라는 말을 듣는가?',
					options: [
						'Bring an ID card',
						'Arrive one hour early',
						'Drink a lot of water',
						'Avoid eating'
					],
					optionsKo: [
						'신분증을 가져온다',
						'한 시간 일찍 도착한다',
						'물을 많이 마신다',
						'음식을 먹지 않는다'
					],
					answer: 3,
					why: 'Do not eat anything for eight hours before your appointment라고 했습니다. Do not eat가 보기에서 Avoid eating으로 바뀌었습니다.'
				}
			],
			vocab: [
				['health checkup', '건강 검진'],
				['full-time employee', '정규직 직원'],
				['take place', '진행되다'],
				['sign up', '신청하다'],
				['fill out', '작성하다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 대화를 듣고 장소와 직업 찾기',
			blocks: [
				{
					type: 'p',
					text: 'Part 3는 두세 사람의 **대화**를 듣고 문제 세 개를 푸는 파트입니다. 대화 13개, 모두 39문항이 나옵니다. 문제와 보기는 문제지에 인쇄되어 있습니다.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'대화를 듣기 **전에** 문제 세 개를 먼저 읽습니다.',
						'문제는 대화가 흘러가는 순서대로 나옵니다. 첫 문제의 답은 대화 앞부분에 있습니다.',
						'들으면서 바로 답을 고릅니다.'
					]
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['Where does the conversation take place?', '대화는 어디에서 이루어지는가?'],
						['Where do the speakers work?', '화자들은 어디에서 일하는가?'],
						['Who most likely is the man?', '남자는 누구일 것 같은가?']
					]
				},
				{
					type: 'box',
					title: '장소와 직업을 알려 주는 단어',
					items: [
						'reservation, check in, room key → 호텔',
						'menu, table, order, dish → 식당',
						'prescription, medicine → 약국',
						'boarding pass, gate, flight → 공항'
					]
				},
				{
					type: 'tip',
					text: '장소나 직업은 대화에서 직접 말해 주지 않습니다. 들리는 단어 여러 개를 모아 짐작합니다.'
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['W', 'Good afternoon. I have a reservation under the name Kim.'],
				[
					'M',
					'Welcome, Ms. Kim. Yes, I see it here. You are staying for two nights in a single room.'
				],
				['W', "That's right. Is breakfast included?"],
				[
					'M',
					'Yes, it is. Breakfast is served from seven to ten on the second floor. Here is your room key. Your room is 508.'
				],
				['W', 'Thank you. Could you tell me where the elevator is?'],
				['M', "It's right behind you, next to the gift shop."]
			],
			scriptKo: [
				'안녕하세요. 김이라는 이름으로 예약했습니다.',
				'어서 오세요, 김 선생님. 네, 여기 있네요. 1인실에서 2박 하시는군요.',
				'맞아요. 아침 식사가 포함되어 있나요?',
				'네, 포함되어 있습니다. 아침 식사는 2층에서 7시부터 10시까지 제공됩니다. 여기 객실 열쇠입니다. 객실은 508호입니다.',
				'감사합니다. 엘리베이터가 어디 있는지 알려 주시겠어요?',
				'바로 뒤, 기념품 가게 옆에 있습니다.'
			],
			questions: [
				{
					id: 'd25-14',
					text: 'Where does the conversation most likely take place?',
					ko: '대화는 어디에서 이루어지는 것 같은가?',
					options: ['At a restaurant', 'At a hotel', 'At an airport', 'At a gift shop'],
					optionsKo: ['식당에서', '호텔에서', '공항에서', '기념품 가게에서'],
					answer: 1,
					why: 'reservation(예약), staying for two nights(2박), room key(객실 열쇠)에서 호텔임을 알 수 있습니다.'
				},
				{
					id: 'd25-15',
					text: 'Who most likely is the man?',
					ko: '남자는 누구일 것 같은가?',
					options: ['A front desk clerk', 'A tour guide', 'A waiter', 'A taxi driver'],
					optionsKo: ['안내 데스크 직원', '관광 안내원', '웨이터', '택시 기사'],
					answer: 0,
					why: '남자는 예약을 확인하고 객실 열쇠를 건네주고 있습니다. 호텔 안내 데스크 직원입니다.'
				},
				{
					id: 'd25-16',
					text: 'What does the woman ask about at the end of the conversation?',
					ko: '여자는 대화 끝에서 무엇에 관해 묻는가?',
					options: [
						'The room price',
						'The checkout time',
						'The location of the elevator',
						'The gift shop hours'
					],
					optionsKo: ['객실 요금', '퇴실 시간', '엘리베이터의 위치', '기념품 가게 운영 시간'],
					answer: 2,
					why: '여자가 마지막에 Could you tell me where the elevator is?라고 물었습니다.'
				}
			],
			vocab: [
				['reservation', '예약'],
				['single room', '1인실'],
				['be included', '포함되다'],
				['serve', '제공하다'],
				['gift shop', '기념품 가게']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['M', 'Hi, Sora. Did the new menus arrive from the printer?'],
				['W', 'Not yet. They said the menus would come this afternoon, before the dinner service.'],
				['M', 'Good. We need them tonight. A lot of customers have booked tables for the weekend.'],
				['W', "I know. I'll call the print shop now and check the delivery time."],
				['M', "Thanks. I'll tell the kitchen staff about the new dishes."]
			],
			scriptKo: [
				'안녕하세요, 소라 씨. 인쇄소에서 새 메뉴판이 도착했나요?',
				'아직이요. 오늘 오후, 저녁 영업 전에 온다고 했어요.',
				'좋아요. 오늘 밤에 필요해요. 주말에 테이블을 예약한 손님이 많거든요.',
				'알아요. 지금 인쇄소에 전화해서 배송 시간을 확인할게요.',
				'고마워요. 저는 주방 직원들에게 새 요리에 대해 알려 줄게요.'
			],
			questions: [
				{
					id: 'd25-17',
					text: 'Where do the speakers most likely work?',
					ko: '화자들은 어디에서 일하는 것 같은가?',
					options: ['At a print shop', 'At a bookstore', 'At a hotel', 'At a restaurant'],
					optionsKo: ['인쇄소에서', '서점에서', '호텔에서', '식당에서'],
					answer: 3,
					why: 'menus(메뉴판), dinner service(저녁 영업), booked tables(테이블 예약), kitchen staff(주방 직원)에서 식당임을 알 수 있습니다. 인쇄소는 메뉴판을 만드는 곳일 뿐입니다.'
				},
				{
					id: 'd25-18',
					text: 'What are the speakers waiting for?',
					ko: '화자들은 무엇을 기다리고 있는가?',
					options: ['New menus', 'Kitchen equipment', 'A food delivery', 'Weekend staff'],
					optionsKo: ['새 메뉴판', '주방 장비', '식재료 배송', '주말 근무 직원'],
					answer: 0,
					why: '남자가 Did the new menus arrive?라고 묻고, 여자가 Not yet이라고 답했습니다.'
				},
				{
					id: 'd25-19',
					text: 'What will the woman do next?',
					ko: '여자는 다음에 무엇을 할 것인가?',
					options: [
						'Talk to the kitchen staff',
						'Make a phone call',
						'Print some menus',
						'Book a table'
					],
					optionsKo: [
						'주방 직원들과 이야기한다',
						'전화를 건다',
						'메뉴판을 인쇄한다',
						'테이블을 예약한다'
					],
					answer: 1,
					why: "여자가 I'll call the print shop now라고 했습니다. call이 보기에서 Make a phone call로 바뀌었습니다. 주방 직원에게 말하는 것은 남자입니다."
				}
			],
			vocab: [
				['printer', '인쇄소, 인쇄업자'],
				['dinner service', '저녁 영업'],
				['book a table', '테이블을 예약하다'],
				['delivery time', '배송 시간'],
				['dish', '요리']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 전화 메시지 듣기',
			blocks: [
				{
					type: 'p',
					text: 'Part 4는 **한 사람이 길게 말하는 담화**를 듣고 문제 세 개를 푸는 파트입니다. 담화 10개, 모두 30문항이 나옵니다. 전화 메시지, 안내 방송, 광고, 회의 발언 등이 나옵니다.'
				},
				{
					type: 'box',
					title: '전화 메시지의 흐름',
					items: [
						'**누구인지** — Hello, this is Jenny from Bright Smile Dental Clinic.',
						"**왜 전화했는지** — I'm calling about ~ / I'm calling to ~",
						'**무엇을 해 달라는지** — Please call me back at ~ / Please let us know ~'
					]
				},
				{
					type: 'table',
					head: ['질문', '답이 나오는 곳'],
					rows: [
						['Where does the speaker work?', '첫 문장 (this is ~ from ~)'],
						['Why is the speaker calling?', "I'm calling 뒤"],
						['What is the listener asked to do?', '마지막 부분 (Please ~)']
					]
				},
				{
					type: 'tip',
					text: '문제 세 개는 메시지의 **처음, 중간, 끝** 순서로 나옵니다. 듣기 전에 문제를 읽어 두면 어디를 들어야 할지 알 수 있습니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '전화 메시지',
			script: [
				[
					'W',
					"Hello, this is Jenny from Bright Smile Dental Clinic. I'm calling for Mr. Alex Jung."
				],
				[
					'W',
					'You have an appointment with Dr. Lee this Thursday at 10 A.M. Unfortunately, Dr. Lee will be at a conference that day.'
				],
				[
					'W',
					'We would like to move your appointment to Friday at the same time. Please call us back at 555-0126 to let us know if Friday works for you.'
				],
				['W', 'Thank you, and have a nice day.']
			],
			scriptKo: [
				'안녕하세요, 브라이트 스마일 치과의 제니입니다. 알렉스 정 님께 전화드립니다.',
				'이번 주 목요일 오전 10시에 이 선생님 진료 예약이 있으신데요. 죄송하게도 이 선생님이 그날 학회에 참석합니다.',
				'예약을 금요일 같은 시간으로 옮기고 싶습니다. 금요일이 괜찮으신지 555-0126으로 다시 전화해 알려 주세요.',
				'감사합니다. 좋은 하루 보내세요.'
			],
			questions: [
				{
					id: 'd25-20',
					text: 'Where does the speaker work?',
					ko: '화자는 어디에서 일하는가?',
					options: [
						'At a dental clinic',
						'At a conference center',
						'At a pharmacy',
						'At a travel agency'
					],
					optionsKo: ['치과에서', '회의장에서', '약국에서', '여행사에서'],
					answer: 0,
					why: '첫 문장에서 this is Jenny from Bright Smile Dental Clinic이라고 자신을 소개했습니다.'
				},
				{
					id: 'd25-21',
					text: 'Why is the speaker calling?',
					ko: '화자는 왜 전화하고 있는가?',
					options: [
						'To cancel a conference',
						'To confirm a payment',
						'To change an appointment',
						'To introduce a new doctor'
					],
					optionsKo: [
						'학회를 취소하려고',
						'결제를 확인하려고',
						'예약을 변경하려고',
						'새 의사를 소개하려고'
					],
					answer: 2,
					why: 'We would like to move your appointment to Friday라고 했습니다. move가 보기에서 change로 바뀌었습니다.'
				},
				{
					id: 'd25-22',
					text: 'What is the listener asked to do?',
					ko: '청자는 무엇을 하라고 요청받는가?',
					options: [
						'Visit the clinic today',
						'Return the call',
						'Send an e-mail',
						'Bring an ID card'
					],
					optionsKo: [
						'오늘 치과를 방문한다',
						'다시 전화한다',
						'이메일을 보낸다',
						'신분증을 가져온다'
					],
					answer: 1,
					why: 'Please call us back at 555-0126이라고 했습니다. call back이 보기에서 Return the call로 바뀌었습니다.'
				}
			],
			vocab: [
				['dental clinic', '치과'],
				['appointment', '예약'],
				['unfortunately', '죄송하게도, 안타깝게도'],
				['conference', '학회'],
				['call back', '다시 전화하다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '전화 메시지',
			script: [
				['M', 'Hi, Ms. Baek. This is Tom Rivera from Ace Furniture.'],
				[
					'M',
					"I'm calling about the desk you ordered last week. It arrived at our store this morning, and it's ready for delivery."
				],
				[
					'M',
					'We can deliver it on Wednesday or Saturday. The delivery is free, and it takes about thirty minutes to set up.'
				],
				['M', 'Please call me at 555-0193 and tell me which day is better for you. Thanks.']
			],
			scriptKo: [
				'안녕하세요, 백 선생님. 에이스 가구의 톰 리베라입니다.',
				'지난주에 주문하신 책상 때문에 전화드립니다. 오늘 아침에 저희 매장에 도착해서 배송할 준비가 되었습니다.',
				'수요일이나 토요일에 배송해 드릴 수 있습니다. 배송은 무료이고, 설치하는 데 30분 정도 걸립니다.',
				'555-0193으로 전화하셔서 어느 날이 더 좋은지 알려 주세요. 감사합니다.'
			],
			questions: [
				{
					id: 'd25-23',
					text: 'What type of business does the speaker work for?',
					ko: '화자는 어떤 업체에서 일하는가?',
					options: [
						'A moving company',
						'A computer store',
						'A delivery restaurant',
						'A furniture store'
					],
					optionsKo: ['이삿짐 회사', '컴퓨터 매장', '배달 음식점', '가구 매장'],
					answer: 3,
					why: '첫 부분에서 This is Tom Rivera from Ace Furniture라고 했고, 주문한 책상에 관해 이야기합니다.'
				},
				{
					id: 'd25-24',
					text: 'What does the speaker say about the delivery?',
					ko: '화자는 배송에 대해 무엇이라고 말하는가?',
					options: [
						'It costs thirty dollars.',
						'It is free of charge.',
						'It will be late.',
						'It was canceled.'
					],
					optionsKo: ['30달러가 든다.', '무료이다.', '늦어질 것이다.', '취소되었다.'],
					answer: 1,
					why: 'The delivery is free라고 했습니다. free가 보기에서 free of charge로 바뀌었습니다. thirty는 설치에 걸리는 시간(30분)입니다.'
				},
				{
					id: 'd25-25',
					text: 'What does the speaker ask the listener to do?',
					ko: '화자는 청자에게 무엇을 하라고 요청하는가?',
					options: [
						'Choose a delivery day',
						'Visit the store',
						'Pay in advance',
						'Order another desk'
					],
					optionsKo: [
						'배송 날짜를 고른다',
						'매장을 방문한다',
						'미리 결제한다',
						'책상을 하나 더 주문한다'
					],
					answer: 0,
					why: 'tell me which day is better for you(어느 날이 더 좋은지 알려 달라)라고 했습니다.'
				}
			],
			vocab: [
				['order', '주문하다'],
				['be ready for delivery', '배송할 준비가 되다'],
				['deliver', '배송하다'],
				['set up', '설치하다'],
				['free of charge', '무료의']
			]
		}
	]
} satisfies DayContent;
