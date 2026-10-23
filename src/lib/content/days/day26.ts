import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 세부 정보 문제를 질문의 키워드로 찾아 푼다',
		'Part 3 대화의 주제를 첫 두 줄에서 잡는다',
		'Part 4 안내 방송의 흐름을 따라간다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '세부 정보 문제',
			blocks: [
				{
					type: 'p',
					text: '글에 나온 **구체적인 정보 하나**를 묻는 문제입니다. 날짜, 시간, 장소, 금액, 사람, 방법을 묻습니다. Part 7에서 가장 많이 나오는 유형입니다.'
				},
				{
					type: 'table',
					head: ['질문', '찾을 것'],
					rows: [
						['When will the event take place?', '날짜·시간'],
						['Where should visitors park?', '장소'],
						['Who is Ms. Davis?', '직업·직책'],
						['How much is the monthly fee?', '금액'],
						['How can readers get a coupon?', '방법'],
						['What are employees asked to bring?', '해야 할 일']
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'질문에서 **키워드**를 찾습니다. 사람 이름, 날짜, 숫자, 장소처럼 눈에 잘 띄는 말입니다.',
						'지문에서 그 키워드가 나오는 곳을 찾습니다. 글 전체를 다 읽지 않아도 됩니다.',
						'키워드가 있는 **문장과 그 앞뒤 문장**을 읽고 답을 고릅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'When will ==Mr. Jang== visit the ==factory==?',
							ko: '장 씨는 언제 공장을 방문하는가?',
							note: '키워드는 Mr. Jang과 factory입니다. 지문에서 이 두 말이 나오는 문장을 찾습니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '지문에 숫자나 날짜가 여러 개 나오면 다른 숫자가 오답 보기로 나옵니다. 그 숫자가 **무엇을 가리키는지** 확인하고 고릅니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '정답은 말을 바꿔서 나옵니다',
			blocks: [
				{
					type: 'p',
					text: '세부 정보 문제의 정답 보기는 지문의 말을 그대로 쓰지 않고 **뜻이 같은 다른 말**로 바꿔 씁니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Parking is ==free== for hotel guests.',
							ko: '호텔 투숙객은 주차가 무료입니다.',
							note: '보기에서는 "Guests can park ==at no cost==."로 나옵니다.'
						},
						{
							en: 'Please ==e-mail== Mr. Ko by Friday.',
							ko: '금요일까지 고 씨에게 이메일을 보내 주세요.',
							note: '보기에서는 "==Contact== Mr. Ko"로 나옵니다.'
						},
						{
							en: 'The shop sells ==desks and chairs==.',
							ko: '그 가게는 책상과 의자를 팝니다.',
							note: '보기에서는 "The shop sells ==furniture==."로 나옵니다.'
						}
					]
				},
				{
					type: 'box',
					title: '자주 나오는 바꿔 쓰기',
					items: [
						'**비슷한 뜻의 말** — begin → start, buy → purchase, free → at no cost',
						'**더 넓은 말** — coffee and tea → drinks, desk → furniture, bus → transportation',
						'**숫자를 풀어 쓴 말** — half price → 50 percent off, 24 hours → one day'
					]
				},
				{
					type: 'tip',
					text: '지문의 단어가 그대로 들어 있어도 내용이 다르면 오답입니다. 단어가 아니라 **내용**이 맞는지 봅니다.'
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
						['To', 'Sumin Tak'],
						['From', 'Laura Finch, Event Coordinator'],
						['Subject', 'Your talk at the Green Office Forum'],
						['Date', 'August 20']
					],
					body: [
						'Dear Ms. Tak,',
						'Thank you for agreeing to speak at the Green Office Forum. Your talk is on Friday, September 12, at 2 P.M. in Hall B.',
						'You will have forty minutes to speak and ten minutes for questions. Please send me your slides by September 5 so that we can test them on our computer.',
						'We will pay for one night at the Garden Plaza Hotel, which is across the street from the forum. When you arrive at the forum, please pick up your name tag at the registration desk.',
						'Best regards,',
						'Laura Finch'
					],
					ko: [
						'탁 선생님께,',
						'그린 오피스 포럼에서 강연해 주시기로 해서 감사합니다. 강연은 9월 12일 금요일 오후 2시에 B홀에서 있습니다.',
						'강연 40분, 질의응답 10분이 주어집니다. 저희 컴퓨터에서 미리 확인할 수 있도록 9월 5일까지 발표 자료를 보내 주세요.',
						'포럼 장소 길 건너에 있는 가든 플라자 호텔의 1박 숙박비는 저희가 부담합니다. 포럼에 도착하시면 등록 데스크에서 이름표를 받아 가세요.',
						'로라 핀치 드림'
					]
				}
			],
			questions: [
				{
					id: 'd26-01',
					text: 'What is Ms. Tak asked to send by September 5?',
					ko: '탁 씨는 9월 5일까지 무엇을 보내 달라고 요청받는가?',
					options: [
						'Materials for her talk',
						'A hotel bill',
						'A list of questions',
						'A registration form'
					],
					optionsKo: ['강연 자료', '호텔 청구서', '질문 목록', '등록 양식'],
					answer: 0,
					why: 'Please send me your slides by September 5라고 했습니다. 질문의 키워드 September 5가 나오는 문장에 답이 있습니다. slides가 보기에서 Materials for her talk으로 바뀌었습니다.'
				},
				{
					id: 'd26-02',
					text: 'What will the forum pay for?',
					ko: '포럼 측은 무엇의 비용을 내는가?',
					options: ['A plane ticket', 'A hotel room', 'A taxi ride', 'A dinner'],
					optionsKo: ['항공권', '호텔 객실', '택시 요금', '저녁 식사'],
					answer: 1,
					why: 'We will pay for one night at the Garden Plaza Hotel이라고 했습니다. one night at the Garden Plaza Hotel이 보기에서 A hotel room으로 바뀌었습니다.'
				},
				{
					id: 'd26-03',
					text: 'What should Ms. Tak pick up at the registration desk?',
					ko: '탁 씨는 등록 데스크에서 무엇을 받아야 하는가?',
					options: ['A room key', 'A parking pass', 'A set of slides', 'A name tag'],
					optionsKo: ['객실 열쇠', '주차권', '발표 자료', '이름표'],
					answer: 3,
					why: 'please pick up your name tag at the registration desk라고 했습니다. 질문의 키워드 registration desk가 나오는 문장에 답이 있습니다.'
				}
			],
			vocab: [
				['agree to', '~하기로 하다'],
				['talk', '강연'],
				['slide', '발표 자료, 슬라이드'],
				['pay for', '~의 비용을 내다'],
				['name tag', '이름표']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'Ironleaf Frying Pan — Care Instructions',
					body: [
						'Thank you for buying an Ironleaf frying pan. Before you use it for the first time, wash it with warm water and soap.',
						'Always cook on low or medium heat. High heat can damage the surface of the pan. Use wooden or plastic tools, because metal tools may scratch it.',
						'After cooking, let the pan cool down, and then wash it by hand. Do not put it in a dishwasher.',
						'This pan comes with a two-year warranty. Please keep your receipt. If you have a problem, call our service center at 555-0119.'
					],
					ko: [
						'아이언리프 프라이팬을 구입해 주셔서 감사합니다. 처음 사용하기 전에 따뜻한 물과 세제로 씻어 주세요.',
						'항상 약한 불이나 중간 불에서 조리하세요. 센 불은 팬의 표면을 상하게 할 수 있습니다. 금속 도구는 흠집을 낼 수 있으니 나무나 플라스틱 도구를 사용하세요.',
						'조리한 뒤에는 팬을 식힌 다음 손으로 씻으세요. 식기세척기에 넣지 마세요.',
						'이 팬은 보증 기간이 2년입니다. 영수증을 보관해 주세요. 문제가 있으면 서비스 센터 555-0119로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd26-04',
					text: 'What should users do before using the pan for the first time?',
					ko: '팬을 처음 사용하기 전에 무엇을 해야 하는가?',
					options: [
						'Heat it for ten minutes',
						'Put oil on it',
						'Clean it',
						'Call the service center'
					],
					optionsKo: ['10분 동안 달군다', '기름을 바른다', '씻는다', '서비스 센터에 전화한다'],
					answer: 2,
					why: 'Before you use it for the first time, wash it with warm water and soap라고 했습니다. wash가 보기에서 Clean으로 바뀌었습니다.'
				},
				{
					id: 'd26-05',
					text: 'According to the instructions, what can damage the surface of the pan?',
					ko: '안내문에 따르면 무엇이 팬의 표면을 상하게 할 수 있는가?',
					options: [
						'Washing it by hand',
						'Cooking at a high temperature',
						'Using wooden tools',
						'Letting it cool down'
					],
					optionsKo: [
						'손으로 씻는 것',
						'높은 온도에서 조리하는 것',
						'나무 도구를 쓰는 것',
						'식히는 것'
					],
					answer: 1,
					why: 'High heat can damage the surface of the pan이라고 했습니다. High heat가 보기에서 a high temperature로 바뀌었습니다. 손으로 씻는 것과 나무 도구는 안내문이 권하는 방법입니다.'
				},
				{
					id: 'd26-06',
					text: 'How long is the warranty?',
					ko: '보증 기간은 얼마나 되는가?',
					options: ['Six months', 'One year', 'Two years', 'Five years'],
					optionsKo: ['6개월', '1년', '2년', '5년'],
					answer: 2,
					why: 'This pan comes with a two-year warranty라고 했습니다. 질문의 키워드 warranty가 나오는 문장에 답이 있습니다.'
				}
			],
			vocab: [
				['frying pan', '프라이팬'],
				['surface', '표면'],
				['scratch', '흠집을 내다'],
				['by hand', '손으로'],
				['warranty', '보증']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '기사',
			passages: [
				{
					kind: '기사',
					title: 'Clearbeam Solar to Build Factory in Millbrook',
					body: [
						'MILLBROOK — Clearbeam Solar announced on Monday that it will build a new factory in Millbrook. Construction will begin in March and take about one year.',
						'The factory will make solar panels for homes. The company plans to hire 300 workers, and most of them will come from the local area.',
						'"Millbrook has good roads and many skilled workers," said Elena Park, the president of Clearbeam Solar. "It is the perfect place for us."',
						'People who want to work at the factory can apply on the company Web site starting in January.'
					],
					ko: [
						'밀브룩 — 클리어빔 솔라는 밀브룩에 새 공장을 짓겠다고 월요일에 발표했습니다. 공사는 3월에 시작해 약 1년이 걸립니다.',
						'공장은 가정용 태양광 패널을 생산합니다. 회사는 직원 300명을 채용할 계획이며, 대부분 이 지역 사람을 뽑을 예정입니다.',
						'클리어빔 솔라의 사장 엘레나 박 씨는 "밀브룩은 도로가 좋고 숙련된 인력이 많습니다."라며 "저희에게 꼭 맞는 곳입니다."라고 말했습니다.',
						'공장에서 일하고 싶은 사람은 1월부터 회사 웹사이트에서 지원할 수 있습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd26-07',
					text: 'What is the article mainly about?',
					ko: '기사는 주로 무엇에 관한 것인가?',
					options: [
						'A plan to build a factory',
						'A new road in Millbrook',
						'A sale on solar panels',
						'A change of company president'
					],
					optionsKo: [
						'공장을 짓는 계획',
						'밀브룩의 새 도로',
						'태양광 패널 할인 행사',
						'회사 사장 교체'
					],
					answer: 0,
					why: '제목이 Clearbeam Solar to Build Factory in Millbrook이고, 첫 문장에서 it will build a new factory in Millbrook이라고 했습니다.'
				},
				{
					id: 'd26-08',
					text: 'When will construction begin?',
					ko: '공사는 언제 시작하는가?',
					options: ['In January', 'In March', 'In June', 'In December'],
					optionsKo: ['1월에', '3월에', '6월에', '12월에'],
					answer: 1,
					why: 'Construction will begin in March라고 했습니다. 질문의 키워드 construction이 나오는 문장에 답이 있습니다. January는 입사 지원을 받기 시작하는 때입니다.'
				},
				{
					id: 'd26-09',
					text: 'How can people apply for a job at the factory?',
					ko: '공장 일자리에는 어떻게 지원할 수 있는가?',
					options: [
						'By visiting the factory',
						'By calling Ms. Park',
						'By mailing a letter',
						'By going online'
					],
					optionsKo: ['공장을 방문해서', '박 씨에게 전화해서', '편지를 부쳐서', '인터넷으로'],
					answer: 3,
					why: 'can apply on the company Web site라고 했습니다. on the company Web site가 보기에서 By going online으로 바뀌었습니다.'
				}
			],
			vocab: [
				['announce', '발표하다'],
				['construction', '공사'],
				['hire', '채용하다'],
				['skilled', '숙련된'],
				['apply', '지원하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '웹 페이지',
			passages: [
				{
					kind: '웹 페이지',
					title: 'Morning Leaf Tea — Shipping Information',
					body: [
						'We send out orders from Monday to Friday. Orders placed before 2 P.M. leave our shop on the same day.',
						{
							table: {
								head: ['Shipping type', 'Delivery time', 'Cost'],
								rows: [
									['Standard', '4 to 6 business days', '$4'],
									['Fast', '2 business days', '$9'],
									['Next-day', '1 business day', '$15']
								]
							}
						},
						'Standard shipping is free for orders of $50 or more. At this time, we do not ship to other countries.',
						'If an item arrives damaged, please e-mail a photo of it to our customer service team within seven days. We will send you a new one at no charge.'
					],
					ko: [
						'주문 상품은 월요일부터 금요일까지 발송합니다. 오후 2시 전에 주문하시면 당일에 가게에서 출발합니다.',
						'배송 종류: 일반 — 영업일 4~6일, 4달러 / 빠른 배송 — 영업일 2일, 9달러 / 익일 배송 — 영업일 1일, 15달러',
						'50달러 이상 주문하시면 일반 배송은 무료입니다. 현재 해외로는 배송하지 않습니다.',
						'상품이 파손된 채 도착하면 7일 안에 고객 서비스 팀으로 사진을 이메일로 보내 주세요. 새 상품을 무료로 보내 드립니다.'
					]
				}
			],
			questions: [
				{
					id: 'd26-10',
					text: 'When must an order be placed to be sent on the same day?',
					ko: '당일에 발송되려면 언제까지 주문해야 하는가?',
					options: ['Before noon', 'Before 2 P.M.', 'Before 4 P.M.', 'Before 6 P.M.'],
					optionsKo: ['정오 전', '오후 2시 전', '오후 4시 전', '오후 6시 전'],
					answer: 1,
					why: 'Orders placed before 2 P.M. leave our shop on the same day라고 했습니다. leave our shop이 질문에서 be sent로 바뀌었습니다.'
				},
				{
					id: 'd26-11',
					text: 'How much does shipping cost if it takes two business days?',
					ko: '영업일로 이틀이 걸리는 배송은 얼마인가?',
					options: ['$2', '$4', '$9', '$15'],
					optionsKo: ['2달러', '4달러', '9달러', '15달러'],
					answer: 2,
					why: '표의 Delivery time 칸에서 2 business days를 찾으면 Fast이고, 그 줄의 Cost는 $9입니다.'
				},
				{
					id: 'd26-12',
					text: 'How can customers get free standard shipping?',
					ko: '고객은 어떻게 일반 배송을 무료로 받을 수 있는가?',
					options: [
						'By spending at least $50',
						'By ordering before 2 P.M.',
						'By ordering on a weekday',
						'By sending a photo'
					],
					optionsKo: [
						'50달러 이상 구매해서',
						'오후 2시 전에 주문해서',
						'평일에 주문해서',
						'사진을 보내서'
					],
					answer: 0,
					why: 'Standard shipping is free for orders of $50 or more라고 했습니다. orders of $50 or more가 보기에서 spending at least $50로 바뀌었습니다.'
				},
				{
					id: 'd26-13',
					text: 'What should customers do if an item arrives damaged?',
					ko: '상품이 파손된 채 도착하면 고객은 무엇을 해야 하는가?',
					options: [
						'Phone the shop',
						'Mail the item back',
						'Go to the shop',
						'Send a picture by e-mail'
					],
					optionsKo: [
						'가게에 전화한다',
						'상품을 우편으로 돌려보낸다',
						'가게에 간다',
						'사진을 이메일로 보낸다'
					],
					answer: 3,
					why: 'If an item arrives damaged, please e-mail a photo of it to our customer service team이라고 했습니다. e-mail a photo가 보기에서 Send a picture by e-mail로 바뀌었습니다.'
				}
			],
			vocab: [
				['send out', '발송하다'],
				['business day', '영업일'],
				['shipping', '배송'],
				['damaged', '파손된'],
				['at no charge', '무료로']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 대화의 주제 찾기',
			blocks: [
				{
					type: 'p',
					text: '**무엇에 관한 대화인지** 묻는 문제입니다. 세 문제 중 첫 문제로 자주 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['What are the speakers discussing?', '화자들은 무엇에 대해 이야기하고 있는가?'],
						['What is the conversation mainly about?', '대화는 주로 무엇에 관한 것인가?'],
						['What are the speakers talking about?', '화자들은 무엇에 대해 말하고 있는가?']
					]
				},
				{
					type: 'box',
					title: '답은 첫 두 줄에 있습니다',
					items: [
						'첫 번째 사람이 **화제**를 꺼냅니다. 질문이나 부탁으로 시작하는 경우가 많습니다.',
						'두 번째 사람이 그 화제를 받아 이야기를 이어 갑니다.',
						'첫 두 줄에서 **되풀이되는 말**이 주제입니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Have you booked the ==flight== to Busan yet?',
							ko: '부산행 항공편을 벌써 예약했어요?',
							note: '주제 → travel plans (출장 계획)'
						},
						{
							en: 'How was the ==job interview== yesterday?',
							ko: '어제 면접은 어땠어요?',
							note: '주제 → a job interview (면접)'
						}
					]
				},
				{
					type: 'tip',
					text: '대화 뒷부분에 잠깐 나오는 단어로 만든 보기는 함정입니다. 첫 문제는 대화의 **앞부분**을 듣고 바로 고릅니다.'
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['M', "Ms. Seo, do you have a minute? I'd like to take three days off next month."],
				['W', 'Sure. Which days are you thinking of?'],
				['M', 'From the tenth to the twelfth. My brother is getting married in Daegu.'],
				[
					'W',
					"How nice! Those days should be fine, but don't forget that the monthly report is due on the fourteenth."
				],
				['M', "I know. I'll finish it before I leave."],
				['W', 'Good. Then please fill out a vacation request form and bring it to me today.']
			],
			scriptKo: [
				'서 선생님, 잠깐 시간 있으세요? 다음 달에 3일 휴가를 내고 싶습니다.',
				'그럼요. 어느 날을 생각하고 있어요?',
				'10일부터 12일까지요. 형이 대구에서 결혼하거든요.',
				'잘됐네요! 그 날짜는 괜찮을 것 같아요. 다만 월간 보고서 마감이 14일이라는 것을 잊지 마세요.',
				'알고 있습니다. 가기 전에 끝내겠습니다.',
				'좋아요. 그럼 휴가 신청서를 작성해서 오늘 저에게 가져다주세요.'
			],
			questions: [
				{
					id: 'd26-14',
					text: 'What are the speakers mainly discussing?',
					ko: '화자들은 주로 무엇에 대해 이야기하고 있는가?',
					options: [
						'A monthly report',
						'A wedding gift',
						'A request for time off',
						'A business trip to Daegu'
					],
					optionsKo: ['월간 보고서', '결혼 선물', '휴가 요청', '대구 출장'],
					answer: 2,
					why: "남자가 첫 줄에서 I'd like to take three days off next month라고 했고, 여자가 둘째 줄에서 Which days are you thinking of?라고 받았습니다. 휴가를 내는 일이 주제입니다. 보고서는 뒤에 잠깐 나올 뿐입니다."
				},
				{
					id: 'd26-15',
					text: 'Why does the man want to take days off?',
					ko: '남자는 왜 휴가를 내고 싶어 하는가?',
					options: [
						'To attend a family event',
						'To finish a report',
						'To move to a new home',
						'To visit a client'
					],
					optionsKo: [
						'가족 행사에 참석하려고',
						'보고서를 끝내려고',
						'새 집으로 이사하려고',
						'고객을 방문하려고'
					],
					answer: 0,
					why: '남자가 My brother is getting married in Daegu라고 했습니다. 형제의 결혼식이 보기에서 a family event로 바뀌었습니다.'
				},
				{
					id: 'd26-16',
					text: 'What does the woman ask the man to do today?',
					ko: '여자는 남자에게 오늘 무엇을 하라고 요청하는가?',
					options: ['Finish a report', 'Submit a form', 'Call his brother', 'Check a calendar'],
					optionsKo: ['보고서를 끝낸다', '양식을 제출한다', '형에게 전화한다', '달력을 확인한다'],
					answer: 1,
					why: '여자가 마지막에 please fill out a vacation request form and bring it to me today라고 했습니다. 작성해서 가져오는 것이 보기에서 Submit a form으로 바뀌었습니다.'
				}
			],
			vocab: [
				['take a day off', '하루 휴가를 내다'],
				['get married', '결혼하다'],
				['monthly report', '월간 보고서'],
				['be due', '마감이다'],
				['vacation request form', '휴가 신청서']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					'Ms. Jin, we need to count the inventory before the new season starts. When should we do it?'
				],
				[
					'W',
					'How about this Sunday? The store is closed, so we can count everything without customers around.'
				],
				['M', 'Good idea. How much time will we need?'],
				[
					'W',
					"Last time, it took five hours with four people. We have more shoes now, so I'll ask two more staff members to help."
				],
				['M', "Great. I'll order lunch for everyone."],
				['W', "Thanks. I'll print the item lists on Saturday evening."]
			],
			scriptKo: [
				'진 선생님, 새 시즌이 시작되기 전에 재고를 세어야 해요. 언제 하면 좋을까요?',
				'이번 일요일은 어때요? 매장이 쉬는 날이라 손님 없이 전부 셀 수 있어요.',
				'좋은 생각이네요. 시간은 얼마나 필요할까요?',
				'지난번에는 네 명이서 다섯 시간이 걸렸어요. 지금은 신발이 더 많으니까 직원 두 명에게 더 도와 달라고 할게요.',
				'좋아요. 제가 모두의 점심을 주문할게요.',
				'고마워요. 저는 토요일 저녁에 품목 목록을 인쇄해 둘게요.'
			],
			questions: [
				{
					id: 'd26-17',
					text: 'What is the conversation mainly about?',
					ko: '대화는 주로 무엇에 관한 것인가?',
					options: [
						'Hiring new staff',
						'Ordering new shoes',
						'Changing store hours',
						'Counting the items in a store'
					],
					optionsKo: ['새 직원 채용', '새 신발 주문', '매장 영업시간 변경', '매장 물품 수 세기'],
					answer: 3,
					why: '남자가 첫 줄에서 we need to count the inventory(재고를 세어야 한다)라고 했고, 여자가 둘째 줄에서 we can count everything이라고 받았습니다. 첫 두 줄에 모두 count가 나옵니다.'
				},
				{
					id: 'd26-18',
					text: 'Why does the woman suggest Sunday?',
					ko: '여자는 왜 일요일을 제안하는가?',
					options: [
						'The store will be closed.',
						'More staff work on Sundays.',
						'A delivery will arrive that day.',
						'The new season starts on Sunday.'
					],
					optionsKo: [
						'매장이 문을 닫는다.',
						'일요일에 일하는 직원이 더 많다.',
						'그날 배송이 도착한다.',
						'새 시즌이 일요일에 시작된다.'
					],
					answer: 0,
					why: '여자가 The store is closed, so we can count everything without customers around라고 했습니다. 매장이 쉬는 날이어서 일요일을 제안했습니다.'
				},
				{
					id: 'd26-19',
					text: 'What does the man say he will do?',
					ko: '남자는 무엇을 하겠다고 말하는가?',
					options: [
						'Print some lists',
						'Order a meal',
						'Call two staff members',
						'Count the shoes alone'
					],
					optionsKo: [
						'목록을 인쇄한다',
						'식사를 주문한다',
						'직원 두 명에게 전화한다',
						'혼자 신발을 센다'
					],
					answer: 1,
					why: "남자가 I'll order lunch for everyone이라고 했습니다. lunch가 보기에서 a meal로 바뀌었습니다. 목록을 인쇄하는 사람은 여자입니다."
				}
			],
			vocab: [
				['inventory', '재고'],
				['count', '세다'],
				['new season', '새 시즌'],
				['last time', '지난번에'],
				['item list', '품목 목록']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 안내 방송 듣기',
			blocks: [
				{
					type: 'p',
					text: '공항, 기차역, 매장, 건물에서 **여러 사람에게 알리는 말**입니다. 말하는 순서가 거의 정해져 있습니다.'
				},
				{
					type: 'box',
					title: '안내 방송의 흐름',
					items: [
						'**누구에게** — Attention, passengers. / Attention, shoppers. / May I have your attention, please?',
						'**무슨 일인지** — 지연, 변경, 마감, 공사. will be delayed / has changed / will close',
						'**어떻게 하라는지** — Please go to ~ / Please check ~ / Please ask ~'
					]
				},
				{
					type: 'table',
					head: ['질문', '답이 나오는 곳'],
					rows: [
						['Where is the announcement being made?', '첫 문장 (Attention, ~)'],
						['Why is the flight delayed?', '중간 (because of ~, due to ~)'],
						['What are listeners asked to do?', '끝부분 (Please ~)']
					]
				},
				{
					type: 'box',
					title: '장소를 알려 주는 단어',
					items: [
						'passengers, flight, gate, boarding → 공항',
						'passengers, train, platform, track → 기차역',
						'shoppers, aisle, checkout counter → 매장',
						'visitors, lobby, elevator, security desk → 건물'
					]
				},
				{
					type: 'tip',
					text: '시각이나 번호 같은 숫자가 두 개 이상 나옵니다. **바뀌기 전**과 **바뀐 뒤**를 구분해서 듣습니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '안내 방송',
			script: [
				['W', 'Attention, passengers waiting for the ten thirty train to Ashford.'],
				[
					'W',
					"Because of a signal problem, the train will leave thirty minutes late. The new departure time is eleven o'clock."
				],
				[
					'W',
					'Please note that the platform has also changed. The train will now leave from platform five, not platform two.'
				],
				[
					'W',
					'If you need help with your bags, please ask a staff member in a blue uniform. We apologize for the late departure.'
				]
			],
			scriptKo: [
				'10시 30분 애시퍼드행 열차를 기다리시는 승객 여러분께 알려 드립니다.',
				'신호 문제로 열차가 30분 늦게 출발합니다. 새 출발 시각은 11시입니다.',
				'승강장도 변경되었으니 유의해 주세요. 열차는 2번 승강장이 아니라 5번 승강장에서 출발합니다.',
				'짐을 옮기는 데 도움이 필요하시면 파란색 유니폼을 입은 직원에게 말씀해 주세요. 출발이 늦어져 죄송합니다.'
			],
			questions: [
				{
					id: 'd26-20',
					text: 'Where is the announcement most likely being made?',
					ko: '안내 방송은 어디에서 나오는 것 같은가?',
					options: ['At a train station', 'At an airport', 'At a bus terminal', 'At a ferry dock'],
					optionsKo: ['기차역에서', '공항에서', '버스 터미널에서', '여객선 부두에서'],
					answer: 0,
					why: '첫 문장의 passengers(승객), train(열차)과 뒤에 나오는 platform(승강장)에서 기차역임을 알 수 있습니다.'
				},
				{
					id: 'd26-21',
					text: 'What time will the train leave?',
					ko: '열차는 몇 시에 출발하는가?',
					options: ['At 10:00', 'At 10:30', 'At 11:00', 'At 11:30'],
					optionsKo: ['10시', '10시 30분', '11시', '11시 30분'],
					answer: 2,
					why: "The new departure time is eleven o'clock이라고 했습니다. ten thirty는 원래 출발 시각입니다."
				},
				{
					id: 'd26-22',
					text: 'What should listeners do if they need help with their bags?',
					ko: '청자들은 짐을 옮기는 데 도움이 필요하면 무엇을 해야 하는가?',
					options: [
						'Go to the ticket office',
						'Speak to an employee',
						'Use a cart',
						'Call a phone number'
					],
					optionsKo: ['매표소로 간다', '직원에게 말한다', '카트를 이용한다', '전화를 건다'],
					answer: 1,
					why: 'If you need help with your bags, please ask a staff member in a blue uniform이라고 했습니다. ask a staff member가 보기에서 Speak to an employee로 바뀌었습니다.'
				}
			],
			vocab: [
				['passenger', '승객'],
				['signal', '신호'],
				['departure time', '출발 시각'],
				['platform', '승강장'],
				['staff member', '직원']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '안내 방송',
			script: [
				[
					'M',
					'May I have your attention, please? This is a message for everyone in the Dayton Building.'
				],
				[
					'M',
					'The water will be turned off today from one P.M. to three P.M. A repair crew needs to replace a broken pipe on the fourth floor.'
				],
				[
					'M',
					'During this time, you will not be able to use the restrooms or the kitchen sinks. Free bottled water will be available at the security desk in the lobby.'
				],
				[
					'M',
					'If the work takes longer than planned, we will make another announcement. We are sorry for the trouble.'
				]
			],
			scriptKo: [
				'안내 말씀 드립니다. 데이턴 빌딩에 계신 모든 분께 알려 드립니다.',
				'오늘 오후 1시부터 3시까지 수도 공급이 중단됩니다. 수리 작업반이 4층의 파손된 배관을 교체해야 합니다.',
				'이 시간 동안에는 화장실과 탕비실 싱크대를 사용할 수 없습니다. 로비 보안 데스크에서 생수를 무료로 드립니다.',
				'작업이 예정보다 길어지면 다시 안내해 드리겠습니다. 불편을 드려 죄송합니다.'
			],
			questions: [
				{
					id: 'd26-23',
					text: 'What will happen at one P.M.?',
					ko: '오후 1시에 무슨 일이 있는가?',
					options: [
						'The building will close.',
						'The water will be shut off.',
						'An alarm will be tested.',
						'The elevators will stop.'
					],
					optionsKo: [
						'건물이 문을 닫는다.',
						'수도 공급이 끊긴다.',
						'경보기를 점검한다.',
						'엘리베이터가 멈춘다.'
					],
					answer: 1,
					why: 'The water will be turned off today from one P.M. to three P.M.이라고 했습니다. turned off가 보기에서 shut off로 바뀌었습니다.'
				},
				{
					id: 'd26-24',
					text: 'Why is the work necessary?',
					ko: '작업은 왜 필요한가?',
					options: [
						'A pipe is damaged.',
						'A sink is too small.',
						'The lobby is being painted.',
						'A new restroom is being built.'
					],
					optionsKo: [
						'배관이 파손되었다.',
						'싱크대가 너무 작다.',
						'로비를 칠하고 있다.',
						'새 화장실을 짓고 있다.'
					],
					answer: 0,
					why: 'A repair crew needs to replace a broken pipe on the fourth floor라고 했습니다. a broken pipe가 보기에서 A pipe is damaged로 바뀌었습니다.'
				},
				{
					id: 'd26-25',
					text: 'What can listeners get in the lobby?',
					ko: '청자들은 로비에서 무엇을 받을 수 있는가?',
					options: ['A repair schedule', 'A visitor pass', 'A cup of coffee', 'Drinking water'],
					optionsKo: ['수리 일정표', '방문증', '커피 한 잔', '마실 물'],
					answer: 3,
					why: 'Free bottled water will be available at the security desk in the lobby라고 했습니다. bottled water가 보기에서 Drinking water로 바뀌었습니다.'
				}
			],
			vocab: [
				['turn off', '끄다, 잠그다'],
				['repair crew', '수리 작업반'],
				['pipe', '배관'],
				['restroom', '화장실'],
				['bottled water', '생수']
			]
		}
	]
} satisfies DayContent;
