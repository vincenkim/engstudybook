import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 NOT 문제와 사실 확인 문제를 소거법으로 푼다',
		'Part 3 대화에서 문제의 키워드가 나오는 말을 듣는다',
		'Part 4 광고의 흐름을 따라간다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: 'NOT 문제와 사실 확인 문제',
			blocks: [
				{
					type: 'p',
					text: '보기 네 개를 지문과 **하나씩 대조**해야 하는 문제입니다. 근거가 한 문장에 모여 있지 않고 지문 여러 곳에 흩어져 있습니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['What is NOT mentioned in the notice?', '공지에 언급되지 않은 것은 무엇인가?'],
						['What is NOT included in the price?', '가격에 포함되지 않은 것은 무엇인가?'],
						['What is indicated about the store?', '매장에 대해 알 수 있는 것은 무엇인가?'],
						['What is true about the event?', '행사에 대해 사실인 것은 무엇인가?']
					]
				},
				{
					type: 'box',
					title: '소거법으로 풉니다',
					items: [
						'보기를 하나 읽고, 그 내용이 지문에 있는지 찾습니다.',
						'**NOT 문제** — 지문에 있는 보기 세 개를 지웁니다. **남는 하나**가 정답입니다.',
						'**사실 확인 문제** — 지문과 다르거나 지문에 없는 보기 세 개를 지웁니다. 지문과 **맞는 하나**가 정답입니다.'
					]
				},
				{
					type: 'tip',
					text: 'NOT은 항상 대문자로 쓰여 있습니다. NOT을 놓치면 지문에 **있는** 보기를 고르게 됩니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '보기를 하나씩 지우는 법',
			blocks: [
				{
					type: 'p',
					text: '짧은 글로 순서를 확인합니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The tour price includes ==a hotel room==, ==breakfast==, and ==a bus ticket==.',
							ko: '여행 요금에는 호텔 객실, 아침 식사, 버스표가 포함됩니다.',
							note: 'What is NOT included in the price? — (A) A room (B) A meal (C) A bus ticket (D) A museum ticket → 지문에 있는 (A), (B), (C)를 지우면 ==(D)==가 남습니다.'
						},
						{
							en: 'The shop is open from 9 A.M. to 6 P.M., ==Monday through Saturday==.',
							ko: '가게는 월요일부터 토요일까지 오전 9시부터 오후 6시까지 엽니다.',
							note: 'What is true about the shop? — "It is open every day."는 지문과 다릅니다. "It is ==closed on Sundays==."가 지문과 맞습니다.'
						}
					]
				},
				{
					type: 'box',
					title: '자주 빠지는 함정',
					items: [
						'지문의 단어가 들어 있지만 **숫자나 대상이 다른** 보기',
						'상식으로는 그럴듯하지만 **지문에 없는** 보기',
						'보기는 지문의 말을 **바꿔 쓴** 것입니다. 단어가 다르다고 바로 지우지 않습니다. (breakfast → a meal)'
					]
				},
				{
					type: 'tip',
					text: '보기 네 개를 모두 확인해야 해서 시간이 걸립니다. 보기의 키워드를 지문에서 하나씩 찾아 표시하며 지워 나갑니다.'
				}
			]
		},
		{
			type: 'set',
			part: 7,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Staff Photo Day',
					body: [
						'New photos of all employees will be taken for the company Web site on Tuesday, March 11. A professional photographer will set up a small studio in Room 201.',
						'Each department has its own time. Sales staff should come at 9 A.M., accounting staff at 10 A.M., and all other staff at 11 A.M. Each photo takes about five minutes.',
						'Please wear a dark jacket and a white shirt.',
						'You will receive your photo by e-mail within one week. If you will be away on March 11, please tell Ms. Tran in Human Resources, and she will choose another day for you.'
					],
					ko: [
						'회사 웹사이트에 올릴 전 직원의 새 사진을 3월 11일 화요일에 촬영합니다. 전문 사진작가가 201호에 작은 촬영실을 마련합니다.',
						'부서마다 시간이 다릅니다. 영업부 직원은 오전 9시, 회계부 직원은 오전 10시, 그 밖의 직원은 오전 11시에 오세요. 한 사람당 5분 정도 걸립니다.',
						'어두운 색 재킷과 흰색 셔츠를 입어 주세요.',
						'사진은 일주일 안에 이메일로 받게 됩니다. 3월 11일에 자리에 없으면 인사부의 트란 씨에게 알려 주세요. 다른 날을 정해 드립니다.'
					]
				}
			],
			questions: [
				{
					id: 'd27-01',
					text: 'What is the purpose of the notice?',
					ko: '공지의 목적은 무엇인가?',
					options: [
						'To announce a photo session for staff',
						'To introduce a new photographer',
						'To ask for pictures of a company event',
						'To explain a change to the Web site'
					],
					optionsKo: [
						'직원 사진 촬영을 알리려고',
						'새 사진작가를 소개하려고',
						'회사 행사 사진을 요청하려고',
						'웹사이트 변경을 설명하려고'
					],
					answer: 0,
					why: '첫 문장에서 New photos of all employees will be taken이라고 알리고, 이어서 장소, 시간, 옷차림을 안내합니다. 직원 사진 촬영을 알리는 글입니다.'
				},
				{
					id: 'd27-02',
					text: 'When should accounting staff go to Room 201?',
					ko: '회계부 직원은 언제 201호로 가야 하는가?',
					options: ['At 9 A.M.', 'At 10 A.M.', 'At 11 A.M.', 'At noon'],
					optionsKo: ['오전 9시', '오전 10시', '오전 11시', '정오'],
					answer: 1,
					why: 'Sales staff should come at 9 A.M., accounting staff at 10 A.M., and all other staff at 11 A.M.이라고 했습니다. 질문의 키워드 accounting staff 바로 뒤에 시각이 나옵니다.'
				},
				{
					id: 'd27-03',
					text: 'What is NOT mentioned in the notice?',
					ko: '공지에 언급되지 않은 것은 무엇인가?',
					options: [
						'Where the photos will be taken',
						'What employees should wear',
						'How employees will get their photos',
						'How much the photos cost'
					],
					optionsKo: [
						'사진을 찍는 장소',
						'직원들이 입어야 할 옷',
						'직원들이 사진을 받는 방법',
						'사진 비용'
					],
					answer: 3,
					why: '(A)는 in Room 201, (B)는 Please wear a dark jacket and a white shirt, (C)는 You will receive your photo by e-mail로 지문에 있습니다. 사진 비용은 어디에도 없으므로 (D)가 정답입니다.'
				}
			],
			vocab: [
				['professional', '전문적인'],
				['photographer', '사진작가'],
				['department', '부서'],
				['accounting', '회계'],
				['within one week', '일주일 안에']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Swift Hands Moving — We Carry, You Relax',
					body: [
						'Moving day does not have to be stressful. For over twenty years, Swift Hands Moving has helped families and businesses in Oakdale move to new places.',
						'Our service includes packing, loading, and delivery. We bring all the boxes, so you do not need to buy any. Our trucks are available seven days a week, including holidays.',
						'Call us at 555-0137 for a free price estimate. Customers who book by June 30 will receive 10 percent off.',
						'Please note that we do not move pianos.'
					],
					ko: [
						'이삿날이 꼭 힘들 필요는 없습니다. 스위프트 핸즈 이사는 20년 넘게 오크데일의 가정과 회사의 이사를 도와 왔습니다.',
						'저희 서비스에는 포장, 짐 싣기, 배송이 포함됩니다. 상자는 저희가 모두 가져가므로 따로 사실 필요가 없습니다. 트럭은 공휴일을 포함해 일주일 내내 이용할 수 있습니다.',
						'555-0137로 전화해 무료 견적을 받아 보세요. 6월 30일까지 예약하시는 고객은 10퍼센트 할인을 받습니다.',
						'피아노는 운반하지 않으니 유의해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd27-04',
					text: 'What is indicated about Swift Hands Moving?',
					ko: '스위프트 핸즈 이사에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It is a new company.',
						'It has many years of experience.',
						'It is closed on holidays.',
						'It moves pianos at no extra cost.'
					],
					optionsKo: [
						'새로 생긴 회사이다.',
						'오랜 경험이 있다.',
						'공휴일에는 쉰다.',
						'추가 비용 없이 피아노를 운반한다.'
					],
					answer: 1,
					why: '(B)는 For over twenty years, Swift Hands Moving has helped families and businesses와 맞으므로 정답입니다. (A) 20년이 넘었으므로 새 회사가 아닙니다. (C) seven days a week, including holidays이므로 공휴일에도 일합니다. (D) we do not move pianos라고 했습니다.'
				},
				{
					id: 'd27-05',
					text: 'What is NOT mentioned as part of the service?',
					ko: '서비스 내용으로 언급되지 않은 것은 무엇인가?',
					options: [
						'Packing items',
						'Supplying boxes',
						'Cleaning the new home',
						'Delivering items'
					],
					optionsKo: ['짐 포장', '상자 제공', '새 집 청소', '짐 배송'],
					answer: 2,
					why: '(A)와 (D)는 Our service includes packing, loading, and delivery에, (B)는 We bring all the boxes에 있습니다. 청소는 지문에 없으므로 (C)가 정답입니다.'
				},
				{
					id: 'd27-06',
					text: 'What should customers do to receive 10 percent off?',
					ko: '고객은 10퍼센트 할인을 받으려면 무엇을 해야 하는가?',
					options: [
						'Book by the end of June',
						'Call on a holiday',
						'Buy their own boxes',
						'Move on a weekday'
					],
					optionsKo: [
						'6월 말까지 예약한다',
						'공휴일에 전화한다',
						'상자를 직접 산다',
						'평일에 이사한다'
					],
					answer: 0,
					why: 'Customers who book by June 30 will receive 10 percent off라고 했습니다. by June 30가 보기에서 by the end of June으로 바뀌었습니다.'
				}
			],
			vocab: [
				['stressful', '힘든, 스트레스가 많은'],
				['packing', '포장'],
				['loading', '짐 싣기'],
				['estimate', '견적'],
				['book', '예약하다']
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
						['To', 'All staff'],
						['From', 'Victor Reyes, Facilities Manager'],
						['Subject', 'Cafeteria renovation'],
						['Date', 'June 30']
					],
					body: [
						'The staff cafeteria on the second floor will be closed from Monday, July 7, to Friday, July 18. During this time, we will build a new kitchen and change the floor.',
						'While the cafeteria is closed, sandwiches and drinks will be sold in the first-floor lobby from 11:30 A.M. to 1:30 P.M. You may also eat your own lunch in Meeting Room C. The microwave ovens will be moved there.',
						'The cafeteria will open again on Monday, July 21, with forty more seats and a salad bar. Meal prices will stay the same.'
					],
					ko: [
						'2층 직원 식당은 7월 7일 월요일부터 7월 18일 금요일까지 문을 닫습니다. 이 기간에 주방을 새로 만들고 바닥을 교체합니다.',
						'식당이 닫는 동안 1층 로비에서 오전 11시 30분부터 오후 1시 30분까지 샌드위치와 음료를 판매합니다. 가져온 점심은 C 회의실에서 드셔도 됩니다. 전자레인지도 그곳으로 옮깁니다.',
						'식당은 7월 21일 월요일에 좌석 40개와 샐러드 바를 더해 다시 엽니다. 식사 가격은 그대로입니다.'
					]
				}
			],
			questions: [
				{
					id: 'd27-07',
					text: 'Where can employees buy food while the cafeteria is closed?',
					ko: '식당이 닫는 동안 직원들은 어디에서 음식을 살 수 있는가?',
					options: [
						'In the lobby',
						'In Meeting Room C',
						'On the second floor',
						'In the parking lot'
					],
					optionsKo: ['로비에서', 'C 회의실에서', '2층에서', '주차장에서'],
					answer: 0,
					why: 'sandwiches and drinks will be sold in the first-floor lobby라고 했습니다. Meeting Room C는 음식을 사는 곳이 아니라 가져온 점심을 먹는 곳입니다.'
				},
				{
					id: 'd27-08',
					text: 'What is true about Meeting Room C?',
					ko: 'C 회의실에 대해 사실인 것은 무엇인가?',
					options: [
						'Sandwiches will be sold there.',
						'It will be closed for two weeks.',
						'Staff may have lunch there.',
						'It has a new salad bar.'
					],
					optionsKo: [
						'샌드위치를 그곳에서 판다.',
						'2주 동안 문을 닫는다.',
						'직원들이 그곳에서 점심을 먹어도 된다.',
						'새 샐러드 바가 있다.'
					],
					answer: 2,
					why: '(C)는 You may also eat your own lunch in Meeting Room C와 맞으므로 정답입니다. (A) 샌드위치는 the first-floor lobby에서 팝니다. (B) 2주 동안 닫는 곳은 cafeteria입니다. (D) a salad bar는 다시 여는 cafeteria에 생깁니다.'
				},
				{
					id: 'd27-09',
					text: 'What is NOT mentioned as a change to the cafeteria?',
					ko: '식당의 달라지는 점으로 언급되지 않은 것은 무엇인가?',
					options: ['A new kitchen', 'More seats', 'A salad bar', 'Lower prices'],
					optionsKo: ['새 주방', '더 많은 좌석', '샐러드 바', '더 싼 가격'],
					answer: 3,
					why: '(A)는 we will build a new kitchen, (B)는 forty more seats, (C)는 a salad bar로 지문에 있습니다. 가격은 Meal prices will stay the same이라고 했으므로 달라지지 않습니다. (D)가 정답입니다.'
				}
			],
			vocab: [
				['cafeteria', '구내식당'],
				['renovation', '보수, 개조'],
				['lobby', '로비'],
				['microwave oven', '전자레인지'],
				['stay the same', '그대로이다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '웹 페이지',
			passages: [
				{
					kind: '웹 페이지',
					title: 'Blue Harbor Boat Tours',
					body: [
						'See the city from the water! Our boats leave from Pier 3, next to the fish market, every day from April to October.',
						{
							table: {
								head: ['Tour', 'Departure', 'Length', 'Price'],
								rows: [
									['Morning Tour', '9 A.M.', '1 hour', '$15'],
									['Island Tour', '11 A.M.', '4 hours', '$45'],
									['Sunset Tour', '6 P.M.', '2 hours', '$28']
								]
							}
						},
						'The Island Tour includes lunch on Gull Island. Drinks and snacks are sold on every boat.',
						'Children under six ride for free. Please arrive at least fifteen minutes before departure.',
						'Tours may be canceled in bad weather. If we cancel a tour, you will get all of your money back.'
					],
					ko: [
						'물 위에서 도시를 구경하세요! 저희 배는 4월부터 10월까지 매일 수산 시장 옆 3번 부두에서 출발합니다.',
						'투어 안내: 오전 투어 — 오전 9시 출발, 1시간, 15달러 / 섬 투어 — 오전 11시 출발, 4시간, 45달러 / 일몰 투어 — 오후 6시 출발, 2시간, 28달러',
						'섬 투어에는 걸 아일랜드에서 먹는 점심이 포함되어 있습니다. 음료와 간식은 모든 배에서 판매합니다.',
						'6세 미만 어린이는 무료입니다. 출발 15분 전까지 도착해 주세요.',
						'날씨가 나쁘면 투어가 취소될 수 있습니다. 저희가 투어를 취소하면 요금을 전액 돌려 드립니다.'
					]
				}
			],
			questions: [
				{
					id: 'd27-10',
					text: 'What is indicated about Blue Harbor Boat Tours?',
					ko: '블루 하버 보트 투어에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It is open for only part of the year.',
						'It has three piers.',
						'It is closed on Mondays.',
						'It sells tickets online.'
					],
					optionsKo: [
						'한 해 중 일부 기간에만 운영한다.',
						'부두가 세 개 있다.',
						'월요일에는 쉰다.',
						'온라인으로 표를 판다.'
					],
					answer: 0,
					why: '(A)는 every day from April to October와 맞으므로 정답입니다. 4월부터 10월까지만 운영합니다. (B) Pier 3는 부두 번호입니다. (C) every day이므로 쉬는 요일이 없습니다. (D) 표를 파는 방법은 나와 있지 않습니다.'
				},
				{
					id: 'd27-11',
					text: 'What time does the longest tour leave?',
					ko: '가장 긴 투어는 몇 시에 출발하는가?',
					options: ['At 9 A.M.', 'At 10 A.M.', 'At 11 A.M.', 'At 6 P.M.'],
					optionsKo: ['오전 9시', '오전 10시', '오전 11시', '오후 6시'],
					answer: 2,
					why: '표의 Length 칸에서 가장 긴 것은 4 hours인 Island Tour입니다. Island Tour의 Departure는 11 A.M.입니다.'
				},
				{
					id: 'd27-12',
					text: 'What is NOT stated on the Web page?',
					ko: '웹 페이지에 나와 있지 않은 것은 무엇인가?',
					options: [
						'Where the boats leave from',
						'How to buy tickets',
						'How long each tour takes',
						'What happens in bad weather'
					],
					optionsKo: [
						'배가 출발하는 곳',
						'표를 사는 방법',
						'투어마다 걸리는 시간',
						'날씨가 나쁠 때 생기는 일'
					],
					answer: 1,
					why: '(A)는 Our boats leave from Pier 3, (C)는 표의 Length 칸, (D)는 Tours may be canceled in bad weather에 있습니다. 표를 사는 방법은 어디에도 없으므로 (B)가 정답입니다.'
				},
				{
					id: 'd27-13',
					text: 'What will customers receive if a tour is canceled?',
					ko: '투어가 취소되면 고객은 무엇을 받는가?',
					options: ['A free lunch', 'A ticket for another day', 'A gift card', 'A full refund'],
					optionsKo: ['무료 점심', '다른 날짜의 표', '상품권', '전액 환불'],
					answer: 3,
					why: 'If we cancel a tour, you will get all of your money back이라고 했습니다. all of your money back이 보기에서 A full refund로 바뀌었습니다.'
				}
			],
			vocab: [
				['pier', '부두'],
				['departure', '출발'],
				['ride for free', '무료로 타다'],
				['cancel', '취소하다'],
				['full refund', '전액 환불']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 세부 사항 듣기',
			blocks: [
				{
					type: 'p',
					text: '대화에서 말한 **구체적인 내용 하나**를 묻는 문제입니다. 세 문제 중 둘째, 셋째 문제로 자주 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '들을 곳'],
					rows: [
						['What does the man say about the schedule?', '남자의 말 중 schedule이 나오는 곳'],
						['What problem does the woman mention?', '여자가 말하는 문제 상황'],
						['When will the order arrive?', '시간·요일·날짜'],
						['Where is the report now?', '장소']
					]
				},
				{
					type: 'box',
					title: '키워드를 미리 읽습니다',
					items: [
						'대화가 나오기 전에 문제에서 **키워드**(명사, 사람 이름, 숫자)에 표시합니다.',
						'**What does the man say** ~?로 물으면 남자의 말에, **What does the woman say** ~?로 물으면 여자의 말에 답이 있습니다.',
						'키워드가 들리면 **그 문장과 바로 다음 문장**에 집중합니다.'
					]
				},
				{
					type: 'tip',
					text: "문제 상황은 but, unfortunately, I'm sorry 뒤에 자주 나옵니다."
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					'Hi, this is Peter Lang. I have a haircut appointment at three today, but my meeting is running late. Can I come at five instead?'
				],
				['W', "Let me look at the schedule. I'm sorry, but we are fully booked after three today."],
				['M', 'I see. What about tomorrow?'],
				['W', 'Tomorrow, we have an opening at noon.'],
				['M', 'Noon is fine. Will it take long? I have to be back at my office by one.'],
				['W', "A haircut takes about thirty minutes, so you'll have plenty of time."],
				['M', 'Great. See you tomorrow.']
			],
			scriptKo: [
				'안녕하세요, 피터 랭입니다. 오늘 3시에 커트 예약이 있는데 회의가 늦어지고 있어요. 대신 5시에 가도 될까요?',
				'일정을 확인해 보겠습니다. 죄송하지만 오늘 3시 이후로는 예약이 꽉 찼습니다.',
				'그렇군요. 내일은 어떤가요?',
				'내일은 정오에 빈 시간이 있습니다.',
				'정오 좋아요. 오래 걸리나요? 1시까지 사무실에 돌아가야 해서요.',
				'커트는 30분 정도 걸리니까 시간은 충분하실 거예요.',
				'좋아요. 내일 뵙겠습니다.'
			],
			questions: [
				{
					id: 'd27-14',
					text: 'What problem does the man mention?',
					ko: '남자는 어떤 문제를 말하는가?',
					options: [
						'A meeting is taking longer than expected.',
						'He lost his appointment card.',
						'His office is far from the shop.',
						'He forgot the time of his appointment.'
					],
					optionsKo: [
						'회의가 예상보다 길어지고 있다.',
						'예약 카드를 잃어버렸다.',
						'사무실이 가게에서 멀다.',
						'예약 시간을 잊어버렸다.'
					],
					answer: 0,
					why: '남자가 첫 줄에서 but my meeting is running late라고 했습니다. but 뒤에 문제 상황이 나옵니다. running late가 보기에서 taking longer than expected로 바뀌었습니다.'
				},
				{
					id: 'd27-15',
					text: 'What does the woman say about the schedule for today?',
					ko: '여자는 오늘 일정에 대해 무엇이라고 말하는가?',
					options: [
						'The shop will close at three.',
						'A worker is out sick.',
						'There are no free times after three.',
						'The man is too early.'
					],
					optionsKo: [
						'가게가 3시에 문을 닫는다.',
						'직원이 아파서 쉰다.',
						'3시 이후에는 빈 시간이 없다.',
						'남자가 너무 일찍 왔다.'
					],
					answer: 2,
					why: '여자가 we are fully booked after three today라고 했습니다. fully booked(예약이 꽉 찬)가 보기에서 no free times로 바뀌었습니다.'
				},
				{
					id: 'd27-16',
					text: 'How long does a haircut take?',
					ko: '커트는 얼마나 걸리는가?',
					options: [
						'About ten minutes',
						'About half an hour',
						'About one hour',
						'About three hours'
					],
					optionsKo: ['약 10분', '약 30분', '약 한 시간', '약 세 시간'],
					answer: 1,
					why: '여자가 A haircut takes about thirty minutes라고 했습니다. thirty minutes가 보기에서 half an hour로 바뀌었습니다.'
				}
			],
			vocab: [
				['haircut', '커트, 이발'],
				['run late', '늦어지다'],
				['fully booked', '예약이 꽉 찬'],
				['opening', '빈 시간'],
				['plenty of', '충분한']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					"Ms. Hong, I'm writing an article about your team for the company newsletter. Could I ask you a few questions?"
				],
				['W', "Sure, but I'm leaving for the airport in an hour. Can we do it by e-mail?"],
				[
					'M',
					"Of course. I'll send the questions this afternoon. I also need a photo of your team."
				],
				['W', "We took one at the awards dinner last month. I'll ask Mr. Kwon to send it."],
				['M', 'Perfect. The newsletter comes out on Friday, so please reply by Wednesday.'],
				['W', "No problem. I'll write my answers tonight."]
			],
			scriptKo: [
				'홍 선생님, 사내 소식지에 선생님 팀에 관한 기사를 쓰고 있어요. 몇 가지 여쭤봐도 될까요?',
				'그럼요. 그런데 한 시간 뒤에 공항으로 출발해야 해요. 이메일로 해도 될까요?',
				'물론이죠. 오늘 오후에 질문을 보내 드릴게요. 팀 사진도 한 장 필요해요.',
				'지난달 시상식 만찬에서 찍은 것이 있어요. 권 선생님께 보내 달라고 할게요.',
				'좋아요. 소식지가 금요일에 나오니까 수요일까지 답장해 주세요.',
				'알겠어요. 오늘 밤에 답을 쓸게요.'
			],
			questions: [
				{
					id: 'd27-17',
					text: 'What does the woman say she will do in an hour?',
					ko: '여자는 한 시간 뒤에 무엇을 한다고 말하는가?',
					options: ['Attend a dinner', 'Meet Mr. Kwon', 'Check into a hotel', 'Go to the airport'],
					optionsKo: ['만찬에 참석한다', '권 씨를 만난다', '호텔에 체크인한다', '공항에 간다'],
					answer: 3,
					why: "여자가 I'm leaving for the airport in an hour라고 했습니다. 질문의 키워드 in an hour가 나오는 문장입니다. leaving for가 보기에서 Go to로 바뀌었습니다."
				},
				{
					id: 'd27-18',
					text: 'What does the man need besides answers to his questions?',
					ko: '남자는 질문에 대한 답 외에 무엇이 필요한가?',
					options: [
						'A list of team members',
						'A copy of an award',
						'A picture of the team',
						'A map of the airport'
					],
					optionsKo: ['팀원 명단', '상장 사본', '팀 사진', '공항 지도'],
					answer: 2,
					why: '남자가 I also need a photo of your team이라고 했습니다. photo가 보기에서 picture로 바뀌었습니다.'
				},
				{
					id: 'd27-19',
					text: 'When should the woman reply?',
					ko: '여자는 언제까지 답장해야 하는가?',
					options: ['By Monday', 'By Wednesday', 'By Friday', 'By next month'],
					optionsKo: ['월요일까지', '수요일까지', '금요일까지', '다음 달까지'],
					answer: 1,
					why: '남자가 please reply by Wednesday라고 했습니다. Friday는 소식지가 나오는 날입니다.'
				}
			],
			vocab: [
				['article', '기사'],
				['newsletter', '소식지'],
				['leave for', '~로 출발하다'],
				['awards dinner', '시상식 만찬'],
				['come out', '(책·잡지가) 나오다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 광고 듣기',
			blocks: [
				{
					type: 'p',
					text: 'Part 4 광고는 라디오 광고처럼 **상품이나 서비스를 알리는 말**입니다. 말하는 순서가 거의 같습니다.'
				},
				{
					type: 'box',
					title: '광고의 흐름',
					items: [
						'**무엇을 광고하는지** — 질문으로 시작하는 경우가 많습니다. Are you looking for ~? / Do you need ~?',
						'**특징과 혜택** — 무엇이 좋은지, 얼마나 깎아 주는지. 20 percent off / free delivery',
						'**기한과 이용 방법** — until Sunday / this week only / Visit our Web site / Call us at ~'
					]
				},
				{
					type: 'table',
					head: ['질문', '답이 나오는 곳'],
					rows: [
						['What is being advertised?', '첫 부분 (업체 이름, 상품 이름)'],
						['How much is the discount?', '중간 (percent off, half price)'],
						['When does the offer end?', '끝부분 (until ~, by ~, before ~)'],
						['How can listeners get more information?', '마지막 문장 (visit, call)']
					]
				},
				{
					type: 'tip',
					text: '숫자가 여러 개 들립니다. **할인율**인지, **금액**인지, **기한**인지 구분해서 듣습니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '광고',
			script: [
				[
					'W',
					'Are you dreaming of a warm beach this winter? Blue Wave Travel has the perfect trip for you.'
				],
				[
					'W',
					'Our five-day trip to Cebu includes round-trip flights, a hotel by the sea, and breakfast every morning. A local guide will travel with you.'
				],
				[
					'W',
					'The price is nine hundred dollars per person. But if you book by November thirtieth, you will get fifteen percent off.'
				],
				['W', 'To learn more, call us at 555-0182 or visit our office on Main Street.']
			],
			scriptKo: [
				'올겨울 따뜻한 해변을 꿈꾸고 계신가요? 블루 웨이브 여행사에 꼭 맞는 여행이 있습니다.',
				'5일간의 세부 여행에는 왕복 항공편, 바닷가 호텔, 매일 아침 식사가 포함됩니다. 현지 가이드가 함께 다닙니다.',
				'요금은 1인당 900달러입니다. 11월 30일까지 예약하시면 15퍼센트를 할인해 드립니다.',
				'자세한 내용은 555-0182로 전화하시거나 메인가에 있는 저희 사무실을 방문해 주세요.'
			],
			questions: [
				{
					id: 'd27-20',
					text: 'What is being advertised?',
					ko: '무엇이 광고되고 있는가?',
					options: [
						'A hotel opening',
						'A language course',
						'A vacation package',
						'An airline sale'
					],
					optionsKo: ['호텔 개업', '어학 강좌', '여행 상품', '항공권 할인 행사'],
					answer: 2,
					why: '첫 부분에서 Blue Wave Travel has the perfect trip for you라고 했고, 이어서 Our five-day trip to Cebu의 내용을 소개합니다. 항공편, 호텔, 식사를 묶은 여행 상품입니다.'
				},
				{
					id: 'd27-21',
					text: 'What is included in the trip?',
					ko: '여행에 무엇이 포함되어 있는가?',
					options: ['Travel insurance', 'A morning meal', 'A rental car', 'A museum ticket'],
					optionsKo: ['여행자 보험', '아침 식사', '렌터카', '박물관 입장권'],
					answer: 1,
					why: 'includes round-trip flights, a hotel by the sea, and breakfast every morning이라고 했습니다. breakfast가 보기에서 A morning meal로 바뀌었습니다.'
				},
				{
					id: 'd27-22',
					text: 'How much is the discount for booking early?',
					ko: '일찍 예약하면 얼마나 할인되는가?',
					options: ['5 percent', '9 percent', '15 percent', '30 percent'],
					optionsKo: ['5퍼센트', '9퍼센트', '15퍼센트', '30퍼센트'],
					answer: 2,
					why: 'if you book by November thirtieth, you will get fifteen percent off라고 했습니다. nine은 요금(nine hundred dollars)에, thirtieth는 날짜에 나오는 숫자입니다.'
				}
			],
			vocab: [
				['round-trip flight', '왕복 항공편'],
				['local guide', '현지 가이드'],
				['per person', '1인당'],
				['percent off', '~퍼센트 할인'],
				['learn more', '더 알아보다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '광고',
			script: [
				[
					'M',
					'Have you always wanted to play the guitar? At Melody House Music School, it is never too late to start.'
				],
				[
					'M',
					'We offer evening lessons for adults, and our classes are small, with no more than six students. You do not need to buy a guitar. We will lend you one for free.'
				],
				['M', 'Sign up before March first, and your first lesson costs nothing.'],
				[
					'M',
					'Melody House is on Elm Street, right across from the post office. Call 555-0146 today to save your place.'
				]
			],
			scriptKo: [
				'늘 기타를 쳐 보고 싶으셨나요? 멜로디 하우스 음악 학원에서는 언제 시작해도 늦지 않습니다.',
				'성인을 위한 저녁 수업이 있고, 수업은 학생이 여섯 명을 넘지 않는 소규모입니다. 기타를 살 필요도 없습니다. 무료로 빌려 드립니다.',
				'3월 1일 전에 등록하시면 첫 수업은 무료입니다.',
				'멜로디 하우스는 엘름가, 우체국 바로 맞은편에 있습니다. 오늘 555-0146으로 전화해 자리를 잡으세요.'
			],
			questions: [
				{
					id: 'd27-23',
					text: 'What kind of business is being advertised?',
					ko: '어떤 업체가 광고되고 있는가?',
					options: ['A music school', 'A guitar store', 'A concert hall', 'A post office'],
					optionsKo: ['음악 학원', '기타 매장', '공연장', '우체국'],
					answer: 0,
					why: '첫 부분에서 At Melody House Music School이라고 했고, evening lessons for adults(성인을 위한 저녁 수업)를 소개합니다. 기타는 빌려주는 것이지 파는 것이 아닙니다.'
				},
				{
					id: 'd27-24',
					text: 'What does the speaker say about the classes?',
					ko: '화자는 수업에 대해 무엇이라고 말하는가?',
					options: [
						'They are held in the morning.',
						'They are for children.',
						'They have six teachers.',
						'They have few students.'
					],
					optionsKo: [
						'오전에 열린다.',
						'어린이를 위한 것이다.',
						'교사가 여섯 명이다.',
						'학생 수가 적다.'
					],
					answer: 3,
					why: 'our classes are small, with no more than six students라고 했습니다. small이 보기에서 few students로 바뀌었습니다. six는 교사가 아니라 학생 수입니다.'
				},
				{
					id: 'd27-25',
					text: 'How can listeners get a free first lesson?',
					ko: '청자들은 어떻게 첫 수업을 무료로 받을 수 있는가?',
					options: [
						'By signing up before March 1',
						'By coming with a friend',
						'By buying a guitar',
						'By visiting the post office'
					],
					optionsKo: [
						'3월 1일 전에 등록해서',
						'친구를 데려와서',
						'기타를 사서',
						'우체국을 방문해서'
					],
					answer: 0,
					why: 'Sign up before March first, and your first lesson costs nothing이라고 했습니다. costs nothing이 질문에서 free로 바뀌었습니다.'
				}
			],
			vocab: [
				['lesson', '수업, 강습'],
				['adult', '성인'],
				['no more than', '~을 넘지 않는'],
				['lend', '빌려주다'],
				['save a place', '자리를 잡아 두다']
			]
		}
	]
} satisfies DayContent;
