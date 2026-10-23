import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 추론 문제를 근거 문장으로 푼다',
		'Part 3 대화에서 다음에 할 일을 알아낸다',
		'Part 4 회의 발췌의 흐름을 따라간다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '추론 문제',
			blocks: [
				{
					type: 'p',
					text: '글에 **직접 쓰여 있지 않지만** 글의 내용으로 알 수 있는 것을 고르는 문제입니다. 질문에 suggested, most likely, probably가 보이면 추론 문제입니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['What is suggested about Mr. Han?', '한 씨에 대해 알 수 있는 것은 무엇인가?'],
						['Who most likely is Ms. Cole?', '콜 씨는 누구일 것 같은가?'],
						['What will Mr. Reed probably do?', '리드 씨는 무엇을 할 것 같은가?'],
						['For whom is the notice most likely intended?', '공지는 누구를 위한 것 같은가?']
					]
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'질문에 나온 **이름이나 단어**를 글에서 찾습니다.',
						'그 앞뒤에서 **근거 문장**을 찾습니다.',
						'근거 문장에서 **한 걸음만** 나아간 보기를 고릅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: '==Welcome back== to Coral Hotel, Mr. Han.',
							ko: '코럴 호텔에 다시 오신 것을 환영합니다, 한 선생님.',
							note: 'Welcome back이 근거입니다. 한 씨가 ==전에도 이 호텔에 온 적이 있다==는 것을 알 수 있습니다.'
						},
						{
							en: 'Please show your ==staff ID== at the gate.',
							ko: '입구에서 직원증을 보여 주세요.',
							note: 'staff ID(직원증)가 근거입니다. 이 글은 ==직원들==에게 쓴 것임을 알 수 있습니다.'
						}
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '근거 없는 비약은 오답입니다',
			blocks: [
				{
					type: 'p',
					text: '추론 문제의 오답은 "그럴 수도 있겠다" 싶은 내용입니다. 글에 **근거 문장이 없으면** 답이 아닙니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The store will ==reopen== on March 2 after the repair work.',
							ko: '매장은 보수 공사 후 3월 2일에 다시 문을 엽니다.',
							note: '알 수 있는 것 — 매장이 ==지금은 닫혀 있다==. 알 수 없는 것 — 매장이 더 넓어진다, 가격이 오른다.'
						}
					]
				},
				{
					type: 'table',
					head: ['글에 나온 말', '알 수 있는 것'],
					rows: [
						['again, another, as usual', '전에도 한 적이 있다'],
						['new, for the first time', '처음이다'],
						['하는 일 (fixed my car)', '그 사람의 직업 (정비사)'],
						['날짜와 요일', '일이 일어나는 순서']
					]
				},
				{
					type: 'tip',
					text: '보기를 고른 뒤 "어느 문장 때문인가?"를 스스로 묻습니다. 문장을 짚을 수 없으면 답이 아닙니다.'
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
						['To', 'Minjae Kwon'],
						['From', 'Tessa Morgan'],
						['Subject', 'Your subscription'],
						['Date', 'April 9']
					],
					body: [
						'Dear Mr. Kwon,',
						'Thank you for renewing your subscription to Weekend Traveler for another year. We have received your payment of thirty-six dollars. Your next issue will arrive in early May.',
						'As a thank-you gift, we are sending you a small travel bag. It will be mailed separately and should arrive within ten days.',
						'Our records show that your magazines are delivered to 25 Birch Lane. If you have moved, please update your address on our Web site before April 20.',
						'Sincerely,',
						'Tessa Morgan',
						'Reader Services, Weekend Traveler'
					],
					ko: [
						'권 선생님께,',
						'위크엔드 트래블러 구독을 1년 더 연장해 주셔서 감사합니다. 보내 주신 36달러는 잘 받았습니다. 다음 호는 5월 초에 도착합니다.',
						'감사의 선물로 작은 여행 가방을 보내 드립니다. 선물은 따로 발송되며 열흘 안에 도착할 것입니다.',
						'저희 기록에는 잡지가 버치 레인 25번지로 배달되는 것으로 나와 있습니다. 이사하셨다면 4월 20일 전에 웹사이트에서 주소를 고쳐 주세요.',
						'테사 모건 드림',
						'위크엔드 트래블러 독자 서비스부'
					]
				}
			],
			questions: [
				{
					id: 'd28-01',
					text: 'What is suggested about Mr. Kwon?',
					ko: '권 씨에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'He writes articles about travel.',
						'He has not paid for the magazine yet.',
						'He has received the magazine before.',
						'He recently moved to Birch Lane.'
					],
					optionsKo: [
						'여행에 관한 기사를 쓴다.',
						'아직 잡지 값을 내지 않았다.',
						'전에도 이 잡지를 받아 보았다.',
						'최근에 버치 레인으로 이사했다.'
					],
					answer: 2,
					why: 'Thank you for renewing your subscription to Weekend Traveler for another year에서 renewing(연장하는 것)과 another year(1년 더)가 근거입니다. 구독을 연장했다는 것은 지금까지도 이 잡지를 받아 보았다는 뜻입니다. 버치 레인은 기록에 있는 주소일 뿐, 최근에 이사했다는 말은 없습니다.'
				},
				{
					id: 'd28-02',
					text: 'What is indicated about the gift?',
					ko: '선물에 대해 언급된 것은 무엇인가?',
					options: [
						'It will arrive with the May issue.',
						'It will be sent in a separate package.',
						'It must be ordered on the Web site.',
						'It costs thirty-six dollars.'
					],
					optionsKo: [
						'5월 호와 함께 도착한다.',
						'별도의 소포로 발송된다.',
						'웹사이트에서 주문해야 한다.',
						'36달러이다.'
					],
					answer: 1,
					why: 'It will be mailed separately and should arrive within ten days라고 했습니다. mailed separately(따로 발송되는)가 보기에서 sent in a separate package로 바뀌었습니다. thirty-six dollars는 구독료입니다.'
				},
				{
					id: 'd28-03',
					text: 'Why might Mr. Kwon visit the Web site?',
					ko: '권 씨는 왜 웹사이트를 방문하겠는가?',
					options: [
						'To change his delivery address',
						'To read the May issue',
						'To pay for another year',
						'To choose a different gift'
					],
					optionsKo: [
						'배송 주소를 바꾸려고',
						'5월 호를 읽으려고',
						'1년 치를 더 결제하려고',
						'다른 선물을 고르려고'
					],
					answer: 0,
					why: 'If you have moved, please update your address on our Web site before April 20라고 했습니다. update your address가 보기에서 change his delivery address로 바뀌었습니다.'
				}
			],
			vocab: [
				['renew', '연장하다, 갱신하다'],
				['subscription', '구독'],
				['issue', '(잡지의) 호'],
				['separately', '따로'],
				['records', '기록'],
				['update', '(정보를) 고치다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Sunrise Yoga Studio — Locker Policy',
					body: [
						'Starting August 1, the lockers in the changing rooms will be for daily use only. Please take your belongings home after each class. Items left overnight will be moved to the front desk.',
						'We are making this change because many members cannot find an empty locker in the evening. The lockers are often full by 6 P.M.',
						'If you want to keep your yoga mat here, you can rent a private locker for five dollars a month. Please ask at the front desk to sign up.',
						'Thank you for your understanding.'
					],
					ko: [
						'8월 1일부터 탈의실 사물함은 당일 이용만 가능합니다. 수업이 끝나면 소지품을 집으로 가져가 주세요. 밤새 남아 있는 물건은 안내 데스크로 옮깁니다.',
						'저녁에 빈 사물함을 찾지 못하는 회원이 많아서 이렇게 변경합니다. 사물함은 오후 6시면 가득 찰 때가 많습니다.',
						'요가 매트를 이곳에 보관하고 싶으시면 한 달에 5달러로 개인 사물함을 빌릴 수 있습니다. 안내 데스크에 문의해 신청해 주세요.',
						'양해해 주셔서 감사합니다.'
					]
				}
			],
			questions: [
				{
					id: 'd28-04',
					text: 'For whom is the notice most likely intended?',
					ko: '공지는 누구를 위한 것 같은가?',
					options: [
						'Hotel guests',
						'Locker repair workers',
						'People who take yoga classes',
						'New front desk workers'
					],
					optionsKo: [
						'호텔 투숙객',
						'사물함 수리 기사',
						'요가 수업을 듣는 사람들',
						'새로 온 안내 데스크 직원'
					],
					answer: 2,
					why: 'Please take your belongings home after each class(수업이 끝나면 소지품을 가져가 달라)와 many members cannot find an empty locker가 근거입니다. 수업을 듣고 사물함을 쓰는 회원들에게 쓴 글입니다.'
				},
				{
					id: 'd28-05',
					text: 'What is suggested about the studio?',
					ko: '스튜디오에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It is crowded in the evening.',
						'It will close for repairs in August.',
						'It has lost many members this year.',
						'It closes at 6 P.M.'
					],
					optionsKo: [
						'저녁에 붐빈다.',
						'8월에 수리 때문에 문을 닫는다.',
						'올해 회원이 많이 줄었다.',
						'오후 6시에 문을 닫는다.'
					],
					answer: 0,
					why: 'many members cannot find an empty locker in the evening과 The lockers are often full by 6 P.M.이 근거입니다. 저녁에 빈 사물함이 없다는 것은 그 시간에 오는 사람이 많다는 뜻입니다. 6 P.M.은 사물함이 가득 차는 시간입니다.'
				},
				{
					id: 'd28-06',
					text: 'How can members leave their items at the studio overnight?',
					ko: '회원들은 어떻게 하면 물건을 스튜디오에 밤새 둘 수 있는가?',
					options: [
						'By bringing their own lock',
						'By coming to a morning class',
						'By filling out an online form',
						'By paying a monthly fee'
					],
					optionsKo: [
						'자물쇠를 직접 가져와서',
						'아침 수업에 와서',
						'온라인 양식을 작성해서',
						'매달 요금을 내서'
					],
					answer: 3,
					why: 'you can rent a private locker for five dollars a month라고 했습니다. five dollars a month가 보기에서 a monthly fee로 바뀌었습니다. 신청은 온라인이 아니라 안내 데스크에서 합니다.'
				}
			],
			vocab: [
				['locker', '사물함'],
				['changing room', '탈의실'],
				['belongings', '소지품'],
				['overnight', '밤새'],
				['rent', '빌리다'],
				['sign up', '신청하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '후기',
			passages: [
				{
					kind: '후기',
					title: 'Clearwater Home Services',
					head: [
						['Review by', 'Hana Lim'],
						['Rating', '5 out of 5']
					],
					body: [
						'The pipe under my kitchen sink started leaking on Sunday night. I called Clearwater Home Services at 8 A.M. on Monday, and Mr. Novak arrived at my apartment within an hour.',
						'He found the problem quickly and replaced an old part. The repair took only thirty minutes and cost sixty dollars. He also checked the pipes in my bathroom at no charge.',
						"Mr. Novak was polite and explained everything clearly. I have already given the company's phone number to two of my neighbors."
					],
					ko: [
						'일요일 밤에 부엌 싱크대 아래 배관에서 물이 새기 시작했습니다. 월요일 오전 8시에 클리어워터 홈 서비스에 전화했더니 노박 씨가 한 시간 안에 제 아파트에 도착했습니다.',
						'그는 문제를 금방 찾아 낡은 부품을 교체했습니다. 수리는 30분밖에 걸리지 않았고 60달러가 들었습니다. 그는 욕실 배관도 무료로 점검해 주었습니다.',
						'노박 씨는 예의 바르고 모든 것을 알기 쉽게 설명해 주었습니다. 저는 이미 이웃 두 명에게 이 업체의 전화번호를 알려 주었습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd28-07',
					text: 'Who most likely is Mr. Novak?',
					ko: '노박 씨는 누구일 것 같은가?',
					options: [
						"Ms. Lim's neighbor",
						'A plumber',
						'A kitchen designer',
						'An apartment manager'
					],
					optionsKo: ['임 씨의 이웃', '배관공', '주방 디자이너', '아파트 관리인'],
					answer: 1,
					why: '임 씨가 업체에 전화하자 Mr. Novak arrived at my apartment within an hour라고 했고, He found the problem quickly and replaced an old part라고 했습니다. 물이 새는 배관을 고치러 업체에서 온 사람이므로 배관공입니다.'
				},
				{
					id: 'd28-08',
					text: 'What did Mr. Novak do for free?',
					ko: '노박 씨는 무엇을 무료로 해 주었는가?',
					options: [
						'He replaced an old part.',
						'He installed a new sink.',
						'He painted the kitchen wall.',
						'He checked the bathroom pipes.'
					],
					optionsKo: [
						'낡은 부품을 교체했다.',
						'새 싱크대를 설치했다.',
						'부엌 벽을 칠했다.',
						'욕실 배관을 점검했다.'
					],
					answer: 3,
					why: 'He also checked the pipes in my bathroom at no charge라고 했습니다. at no charge가 질문에서 for free로 바뀌었습니다. 부품 교체는 sixty dollars가 든 수리입니다.'
				},
				{
					id: 'd28-09',
					text: 'What is suggested about Ms. Lim?',
					ko: '임 씨에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'She recommended the company to other people.',
						'She paid more than she expected.',
						'She waited at home all day.',
						'She fixed the pipe by herself.'
					],
					optionsKo: [
						'다른 사람들에게 그 업체를 추천했다.',
						'예상보다 돈을 더 냈다.',
						'하루 종일 집에서 기다렸다.',
						'배관을 직접 고쳤다.'
					],
					answer: 0,
					why: "I have already given the company's phone number to two of my neighbors(이웃 두 명에게 업체 전화번호를 알려 주었다)가 근거입니다. 만점을 주고 전화번호까지 알려 준 것은 업체를 추천했다는 뜻입니다. 노박 씨는 within an hour에 왔으므로 하루 종일 기다리지 않았습니다."
				}
			],
			vocab: [
				['leak', '(물이) 새다'],
				['plumber', '배관공'],
				['replace', '교체하다'],
				['at no charge', '무료로'],
				['polite', '예의 바른'],
				['neighbor', '이웃']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '기사',
			passages: [
				{
					kind: '기사',
					title: 'Garden Opens on Former Parking Lot',
					body: [
						'MILLBROOK — A new community garden opened on Cedar Street last Saturday. The land was an empty parking lot for more than ten years.',
						'The city provided the soil and the tools, and forty volunteers built the garden in just two weekends. "I have never grown anything before, but my neighbors are teaching me," said Daeho Yoon, one of the volunteers.',
						'Residents can rent a growing space for ten dollars a year. All sixty spaces were taken within three days, so the city is now looking for a second site.',
						'A free class on growing tomatoes will be held at the garden on May 9.'
					],
					ko: [
						'밀브룩 — 지난 토요일 시더가에 새 공동체 텃밭이 문을 열었습니다. 이 땅은 10년 넘게 빈 주차장이었습니다.',
						'시에서 흙과 도구를 제공했고, 자원봉사자 40명이 단 두 번의 주말 만에 텃밭을 만들었습니다. 자원봉사자 중 한 명인 윤대호 씨는 "저는 지금까지 아무것도 길러 본 적이 없지만, 이웃들이 가르쳐 주고 있습니다"라고 말했습니다.',
						'주민들은 1년에 10달러로 재배 공간을 빌릴 수 있습니다. 공간 60곳이 사흘 만에 모두 나가서, 시는 현재 두 번째 부지를 찾고 있습니다.',
						'5월 9일에는 텃밭에서 토마토 기르기 무료 강좌가 열립니다.'
					]
				}
			],
			questions: [
				{
					id: 'd28-10',
					text: 'What is the article mainly about?',
					ko: '기사는 주로 무엇에 관한 것인가?',
					options: [
						'A change in parking rules',
						'A cooking class for residents',
						'A new garden for local residents',
						'A plan to build city offices'
					],
					optionsKo: [
						'주차 규정 변경',
						'주민을 위한 요리 강좌',
						'지역 주민을 위한 새 텃밭',
						'시청 사무실 건설 계획'
					],
					answer: 2,
					why: '제목이 Garden Opens on Former Parking Lot이고, 첫 문장에서 A new community garden opened on Cedar Street last Saturday라고 했습니다. community garden이 보기에서 garden for local residents로 바뀌었습니다.'
				},
				{
					id: 'd28-11',
					text: 'What is suggested about Mr. Yoon?',
					ko: '윤 씨에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'He works for the city.',
						'He is new to gardening.',
						'He owns the land on Cedar Street.',
						'He will teach the tomato class.'
					],
					optionsKo: [
						'시에서 일한다.',
						'텃밭 가꾸기를 처음 해 본다.',
						'시더가의 땅을 소유하고 있다.',
						'토마토 강좌를 가르칠 것이다.'
					],
					answer: 1,
					why: 'I have never grown anything before, but my neighbors are teaching me(아무것도 길러 본 적이 없지만 이웃들이 가르쳐 주고 있다)가 근거입니다. 길러 본 적이 없고 지금 배우는 중이므로 텃밭 가꾸기를 처음 해 보는 사람입니다. 윤 씨는 시 직원이 아니라 one of the volunteers입니다.'
				},
				{
					id: 'd28-12',
					text: 'What is indicated about the growing spaces?',
					ko: '재배 공간에 대해 언급된 것은 무엇인가?',
					options: [
						'They cost sixty dollars a year.',
						'They were built by city workers.',
						'Some of them are still available.',
						'All of them have been rented.'
					],
					optionsKo: [
						'1년에 60달러이다.',
						'시 직원들이 만들었다.',
						'일부는 아직 남아 있다.',
						'모두 대여되었다.'
					],
					answer: 3,
					why: 'All sixty spaces were taken within three days라고 했습니다. were taken(다 나갔다)이 보기에서 have been rented로 바뀌었습니다. sixty는 공간의 수이고, 요금은 ten dollars a year입니다.'
				},
				{
					id: 'd28-13',
					text: 'What will the city probably do?',
					ko: '시는 무엇을 할 것 같은가?',
					options: [
						'Create another garden',
						'Close the Cedar Street garden',
						'Raise the yearly fee',
						'Turn the garden back into a parking lot'
					],
					optionsKo: [
						'텃밭을 하나 더 만든다',
						'시더가 텃밭을 닫는다',
						'연간 요금을 올린다',
						'텃밭을 다시 주차장으로 바꾼다'
					],
					answer: 0,
					why: 'All sixty spaces were taken within three days, so the city is now looking for a second site가 근거입니다. 공간이 모두 나가서 두 번째 부지를 찾고 있으므로, 시는 텃밭을 하나 더 만들 것으로 보입니다.'
				}
			],
			vocab: [
				['community garden', '공동체 텃밭'],
				['volunteer', '자원봉사자'],
				['soil', '흙'],
				['resident', '주민'],
				['be taken', '(자리가) 다 차다'],
				['site', '부지, 장소']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 다음에 할 일 찾기',
			blocks: [
				{
					type: 'p',
					text: '대화가 끝난 뒤 화자가 **무엇을 할지** 묻는 문제입니다. 세 문제 중 **마지막 문제**로 자주 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['What will the man do next?', '남자는 다음에 무엇을 할 것인가?'],
						['What does the woman say she will do?', '여자는 무엇을 하겠다고 말하는가?'],
						['What will the woman most likely do next?', '여자는 다음에 무엇을 할 것 같은가?']
					]
				},
				{
					type: 'box',
					title: '답이 나오는 곳',
					items: [
						'답은 대화의 **마지막 한두 대사**에 있습니다.',
						"신호가 되는 말 — **I'll ~**(제가 ~할게요) / **Let me ~**(제가 ~해 볼게요) / I'm going to ~",
						'질문이 **남자**를 묻는지 **여자**를 묻는지 먼저 확인합니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: "W: ==I'll== call the supplier.",
							ko: '여: 제가 납품 업체에 전화할게요.',
							note: '여자가 할 일 — 전화하기'
						},
						{
							en: 'M: Then ==let me== check the stock.',
							ko: '남: 그럼 저는 재고를 확인해 볼게요.',
							note: '남자가 할 일 — 재고 확인'
						}
					]
				},
				{
					type: 'tip',
					text: '두 사람이 각자 할 일을 말하면 **다른 사람이 할 일**이 오답 보기로 나옵니다. 누가 한 말인지 구분해서 듣습니다.'
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'W',
					'Mr. Gil, these contracts must reach the Daegu branch by tomorrow morning. Has the courier picked them up yet?'
				],
				['M', "No. The regular pickup was at two o'clock, and we missed it."],
				['W', "That's a problem. Is there another way to send them today?"],
				[
					'M',
					"The post office near the station has an overnight service, and it is open until six. I'll take the envelope there right now."
				],
				['W', "Thank you. Then I'll call the Daegu branch and tell them when to expect it."]
			],
			scriptKo: [
				'길 선생님, 이 계약서들이 내일 아침까지 대구 지사에 도착해야 해요. 택배 기사가 가져갔나요?',
				'아니요. 정기 수거가 2시였는데 우리가 놓쳤어요.',
				'큰일이네요. 오늘 보낼 다른 방법이 있을까요?',
				'역 근처 우체국에 익일 배송 서비스가 있고, 6시까지 문을 열어요. 제가 지금 바로 봉투를 거기로 가져갈게요.',
				'고마워요. 그럼 저는 대구 지사에 전화해서 언제 도착할지 알려 줄게요.'
			],
			questions: [
				{
					id: 'd28-14',
					text: 'What do the speakers need to send?',
					ko: '화자들은 무엇을 보내야 하는가?',
					options: ['Product samples', 'Some documents', 'A payment', 'A gift'],
					optionsKo: ['제품 견본', '서류', '대금', '선물'],
					answer: 1,
					why: '여자가 these contracts must reach the Daegu branch by tomorrow morning이라고 했습니다. contracts(계약서)가 보기에서 documents로 바뀌었습니다.'
				},
				{
					id: 'd28-15',
					text: 'What problem does the man mention?',
					ko: '남자는 어떤 문제를 말하는가?',
					options: [
						'A branch office is closed.',
						'An address is wrong.',
						'A pickup time has already passed.',
						'A contract has not been signed.'
					],
					optionsKo: [
						'지사가 문을 닫았다.',
						'주소가 틀렸다.',
						'수거 시간이 이미 지났다.',
						'계약서에 서명하지 않았다.'
					],
					answer: 2,
					why: "남자가 The regular pickup was at two o'clock, and we missed it이라고 했습니다. 정해진 수거 시간을 놓쳐서 택배로 보낼 수 없다는 말입니다."
				},
				{
					id: 'd28-16',
					text: 'What will the man do next?',
					ko: '남자는 다음에 무엇을 할 것인가?',
					options: [
						'Call the Daegu branch',
						'Wait for the courier',
						'Sign the contracts',
						'Go to a post office'
					],
					optionsKo: [
						'대구 지사에 전화한다',
						'택배 기사를 기다린다',
						'계약서에 서명한다',
						'우체국에 간다'
					],
					answer: 3,
					why: "남자가 The post office near the station has an overnight service라고 한 뒤 I'll take the envelope there right now라고 했습니다. there는 우체국입니다. 대구 지사에 전화하는 것은 여자입니다."
				}
			],
			vocab: [
				['contract', '계약서'],
				['branch', '지사, 지점'],
				['courier', '택배 기사'],
				['pickup', '수거'],
				['overnight service', '익일 배송 서비스'],
				['envelope', '봉투']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['M', 'Good morning. I reserved a small car for three days. My name is Daniel Ross.'],
				[
					'W',
					"Yes, Mr. Ross. I'm sorry, but your car came back late and is still being cleaned. It will be ready in about forty minutes."
				],
				['M', 'Forty minutes? I have to be at a factory in Milton by ten.'],
				[
					'W',
					'In that case, I can give you a larger car at the same price. It is parked right outside.'
				],
				['M', 'That would really help. Thank you.'],
				['W', "I'll get the keys from the office. Please wait here."]
			],
			scriptKo: [
				'안녕하세요. 소형차를 사흘 동안 예약했습니다. 제 이름은 대니얼 로스입니다.',
				'네, 로스 선생님. 죄송하지만 고객님 차가 늦게 반납되어 아직 세차 중입니다. 40분쯤 뒤에 준비됩니다.',
				'40분이요? 저는 10시까지 밀턴에 있는 공장에 가야 하는데요.',
				'그러시면 같은 요금으로 더 큰 차를 드릴 수 있습니다. 바로 밖에 주차되어 있습니다.',
				'그러면 큰 도움이 되겠네요. 감사합니다.',
				'사무실에서 열쇠를 가져오겠습니다. 여기서 기다려 주세요.'
			],
			questions: [
				{
					id: 'd28-17',
					text: 'Where does the conversation most likely take place?',
					ko: '대화는 어디에서 이루어지는 것 같은가?',
					options: [
						'At a car rental office',
						'At a car repair shop',
						'At a parking garage',
						'At a factory'
					],
					optionsKo: ['렌터카 사무소에서', '자동차 정비소에서', '주차장에서', '공장에서'],
					answer: 0,
					why: 'I reserved a small car for three days(소형차를 사흘 동안 예약했다), your car came back late(차가 늦게 반납되었다), at the same price(같은 요금으로)에서 차를 빌려주는 곳임을 알 수 있습니다.'
				},
				{
					id: 'd28-18',
					text: 'What does the woman offer the man?',
					ko: '여자는 남자에게 무엇을 해 주겠다고 하는가?',
					options: [
						'A lower price',
						'A ride to the factory',
						'A different car at no extra cost',
						'A free road map'
					],
					optionsKo: [
						'더 싼 요금',
						'공장까지 태워 주기',
						'추가 요금 없는 다른 차',
						'무료 도로 지도'
					],
					answer: 2,
					why: '여자가 I can give you a larger car at the same price라고 했습니다. a larger car가 보기에서 A different car로, at the same price가 at no extra cost로 바뀌었습니다.'
				},
				{
					id: 'd28-19',
					text: 'What does the woman say she will do?',
					ko: '여자는 무엇을 하겠다고 말하는가?',
					options: [
						'Clean the small car',
						'Bring some keys',
						'Call the factory',
						'Move the car outside'
					],
					optionsKo: [
						'소형차를 세차한다',
						'열쇠를 가져온다',
						'공장에 전화한다',
						'차를 밖으로 옮긴다'
					],
					answer: 1,
					why: "여자가 마지막에 I'll get the keys from the office라고 했습니다. get이 보기에서 Bring으로 바뀌었습니다."
				}
			],
			vocab: [
				['reserve', '예약하다'],
				['come back late', '늦게 돌아오다'],
				['in that case', '그런 경우에는'],
				['at the same price', '같은 가격에'],
				['be parked', '주차되어 있다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 회의 발췌 듣기',
			blocks: [
				{
					type: 'p',
					text: '회의에서 **상사나 진행자**가 직원들에게 하는 말입니다. 문제지에는 excerpt from a meeting(회의 발췌)이라고 나옵니다.'
				},
				{
					type: 'box',
					title: '회의 발췌의 흐름',
					items: [
						"**안건** — Let's get started. / Today, I'd like to talk about ~",
						'**변화나 문제** — Starting next month, ~ / We have received complaints about ~',
						"**직원들이 할 일** — Please ~ / I'd like you to ~ / Make sure to ~"
					]
				},
				{
					type: 'table',
					head: ['질문', '답이 나오는 곳'],
					rows: [
						['What is the speaker mainly discussing?', '첫 부분 (안건)'],
						['What problem does the speaker mention?', '중간 (변화나 문제)'],
						['What are the listeners asked to do?', '마지막 부분 (Please ~)']
					]
				},
				{
					type: 'tip',
					text: '회의 발췌의 청자는 **같은 회사 직원들**입니다. 어떤 직원들인지는 화자가 말하는 일의 내용으로 짐작합니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발췌',
			script: [
				['W', "Let's start the meeting. Today's main topic is how we record our working hours."],
				[
					'W',
					'Starting next week, we will stop using paper time cards. Instead, you will enter your hours on a mobile application. It is faster, and it will reduce mistakes in your paychecks.'
				],
				[
					'W',
					'Please download the application to your phone by Friday. Mr. Ko from the payroll team will be in this room after lunch today to help anyone who has trouble.'
				]
			],
			scriptKo: [
				'회의를 시작하겠습니다. 오늘의 주요 안건은 근무 시간을 기록하는 방법입니다.',
				'다음 주부터 종이 근무 기록표를 쓰지 않습니다. 대신 모바일 애플리케이션에 근무 시간을 입력합니다. 더 빠르고, 급여에서 생기는 실수도 줄어듭니다.',
				'금요일까지 휴대 전화에 애플리케이션을 내려받아 주세요. 급여팀의 고 씨가 오늘 점심 이후 이 회의실에 와서 어려움이 있는 분을 도와 드립니다.'
			],
			questions: [
				{
					id: 'd28-20',
					text: 'What is the speaker mainly discussing?',
					ko: '화자는 주로 무엇에 대해 이야기하는가?',
					options: [
						'A new system for recording work time',
						'A change in lunch breaks',
						'A plan to hire more staff',
						'A delay in paychecks'
					],
					optionsKo: [
						'근무 시간을 기록하는 새 방식',
						'점심시간 변경',
						'직원을 더 뽑는 계획',
						'급여 지급 지연'
					],
					answer: 0,
					why: "첫 부분에서 Today's main topic is how we record our working hours라고 했고, 이어서 paper time cards 대신 mobile application을 쓴다고 했습니다. 기록 방식이 새로 바뀐다는 이야기입니다."
				},
				{
					id: 'd28-21',
					text: 'According to the speaker, what is an advantage of the change?',
					ko: '화자에 따르면 이 변화의 장점은 무엇인가?',
					options: [
						'Staff can leave work earlier.',
						'Phones will be provided.',
						'There will be fewer errors.',
						'Pay will be higher.'
					],
					optionsKo: [
						'직원들이 더 일찍 퇴근할 수 있다.',
						'휴대 전화가 지급된다.',
						'오류가 줄어든다.',
						'급여가 오른다.'
					],
					answer: 2,
					why: 'it will reduce mistakes in your paychecks라고 했습니다. reduce mistakes가 보기에서 fewer errors로 바뀌었습니다.'
				},
				{
					id: 'd28-22',
					text: 'What are the listeners asked to do by Friday?',
					ko: '청자들은 금요일까지 무엇을 하라고 요청받는가?',
					options: [
						'Return their paper cards',
						'Install an application',
						'Visit the payroll office',
						'Sign a form'
					],
					optionsKo: [
						'종이 기록표를 반납한다',
						'애플리케이션을 설치한다',
						'급여 사무실을 방문한다',
						'양식에 서명한다'
					],
					answer: 1,
					why: 'Please download the application to your phone by Friday라고 했습니다. download가 보기에서 Install로 바뀌었습니다.'
				}
			],
			vocab: [
				['working hours', '근무 시간'],
				['time card', '근무 기록표'],
				['enter', '입력하다'],
				['reduce', '줄이다'],
				['paycheck', '급여'],
				['payroll', '급여 관리']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발췌',
			script: [
				['M', "Good morning, team. The first item on today's list is safety in our warehouse."],
				[
					'M',
					'Last week, two workers slipped on a wet floor near the loading doors. Luckily, nobody was badly hurt. But we must be more careful, especially on rainy days.'
				],
				[
					'M',
					'From now on, everyone must wear safety shoes inside the warehouse. If you do not have a pair, pick one up from Ms. Tran in the supply room. They are free.'
				],
				['M', 'Also, please report any water on the floor to your team leader right away.']
			],
			scriptKo: [
				'안녕하세요, 여러분. 오늘의 첫 번째 안건은 창고 안전입니다.',
				'지난주에 직원 두 명이 하역장 문 근처의 젖은 바닥에서 미끄러졌습니다. 다행히 크게 다친 사람은 없었습니다. 하지만 특히 비 오는 날에는 더 조심해야 합니다.',
				'이제부터 창고 안에서는 모두 안전화를 신어야 합니다. 안전화가 없는 분은 비품실의 트란 씨에게 가서 한 켤레 받으세요. 무료입니다.',
				'또 바닥에 물이 있으면 바로 팀장에게 알려 주세요.'
			],
			questions: [
				{
					id: 'd28-23',
					text: 'What happened last week?',
					ko: '지난주에 어떤 일이 있었는가?',
					options: [
						'A delivery arrived late.',
						'Some workers had an accident.',
						'A door was broken.',
						'New workers were hired.'
					],
					optionsKo: [
						'배송품이 늦게 도착했다.',
						'직원 몇 명이 사고를 당했다.',
						'문이 고장 났다.',
						'새 직원들을 뽑았다.'
					],
					answer: 1,
					why: 'Last week, two workers slipped on a wet floor near the loading doors(직원 두 명이 젖은 바닥에서 미끄러졌다)라고 했습니다. slipped on a wet floor가 보기에서 had an accident로 바뀌었습니다.'
				},
				{
					id: 'd28-24',
					text: 'What must the listeners do from now on?',
					ko: '청자들은 이제부터 무엇을 해야 하는가?',
					options: [
						'Wear special shoes',
						'Clean the floor every morning',
						'Use a different door',
						'Work in pairs'
					],
					optionsKo: [
						'특수한 신발을 신는다',
						'매일 아침 바닥을 청소한다',
						'다른 문을 이용한다',
						'둘씩 짝지어 일한다'
					],
					answer: 0,
					why: 'From now on, everyone must wear safety shoes inside the warehouse라고 했습니다. safety shoes가 보기에서 special shoes로 바뀌었습니다. 담화의 a pair는 신발 한 켤레를 말합니다.'
				},
				{
					id: 'd28-25',
					text: 'What should the listeners report to their team leader?',
					ko: '청자들은 팀장에게 무엇을 알려야 하는가?',
					options: ['A late delivery', 'A broken door', 'A missing worker', 'A wet floor'],
					optionsKo: ['늦은 배송', '고장 난 문', '자리에 없는 직원', '젖은 바닥'],
					answer: 3,
					why: 'please report any water on the floor to your team leader right away라고 했습니다. water on the floor가 보기에서 A wet floor로 바뀌었습니다.'
				}
			],
			vocab: [
				['warehouse', '창고'],
				['slip', '미끄러지다'],
				['badly hurt', '크게 다친'],
				['safety shoes', '안전화'],
				['supply room', '비품실'],
				['report', '알리다, 보고하다']
			]
		}
	]
} satisfies DayContent;
