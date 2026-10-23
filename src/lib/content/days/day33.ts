import type { DayContent } from '../schema';

export default {
	goals: [
		'광고·안내문을 무엇을 → 혜택 → 조건·기한 → 연락 방법 순서로 읽는다',
		'Part 3 대화의 말이 보기에서 어떻게 바뀌는지 알아본다',
		'Part 4 담화에서 들린 단어를 그대로 쓴 오답을 피한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '광고·안내문을 읽는 순서',
			blocks: [
				{
					type: 'p',
					text: '**광고**(advertisement)는 상품, 강좌, 일자리 등을 알리는 글이고, **안내문**(information)은 시설이나 서비스를 이용하는 방법을 알려 주는 글입니다. 읽는 사람이 궁금해할 내용이 정해진 순서로 나옵니다.'
				},
				{
					type: 'box',
					title: '읽는 순서',
					items: [
						'**무엇을** — 제목과 첫 문장에서 무엇을 알리는 글인지 봅니다.',
						'**특징·혜택** — 할인율, 무료로 주는 것, 좋은 점이 나옵니다.',
						'**조건·기한** — 누가, 언제까지, 어떻게 해야 혜택을 받는지 나옵니다.',
						'**연락 방법** — 끝부분에 전화, 웹사이트, 방문 장소가 나옵니다.'
					]
				},
				{
					type: 'table',
					head: ['표현', '뜻'],
					rows: [
						['up to 40 percent off', '최대 40퍼센트 할인'],
						['at no additional charge', '추가 비용 없이'],
						['for members only', '회원 전용'],
						['with any purchase over $30', '30달러 넘게 사면'],
						['valid until June 30', '6월 30일까지 유효'],
						['in-store only', '매장에서만'],
						['preferred but not required', '우대하지만 필수는 아님']
					]
				},
				{
					type: 'tip',
					text: '구인 광고도 같은 순서입니다. 어떤 일자리인지 → 하는 일과 급여 → 지원 조건 → 지원 방법.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '조건·기한·대상을 묻는 문제',
			blocks: [
				{
					type: 'p',
					text: '광고·안내문에서는 혜택 자체보다 **조건**을 묻는 문제가 많습니다. 할인을 받으려면 무엇을 해야 하는지, 언제까지인지, 누구에게 해당하는지를 찾습니다.'
				},
				{
					type: 'table',
					head: ['질문', '찾을 것'],
					rows: [
						['What is being advertised?', '제목과 첫 문장'],
						['How can customers get the lower price?', '조건 (members, with ~, by + 날짜)'],
						['When is the last day of the sale?', '기한 (until, by, through)'],
						['Who is the course designed for?', '대상 (for ~)'],
						['What is a requirement for the job?', '필수 조건 (must, required)']
					]
				},
				{
					type: 'box',
					title: '자주 빠지는 함정',
					items: [
						'할인율이 **두 개 이상** 나옵니다. 어느 상품에, 누구에게 적용되는 숫자인지 구분합니다.',
						'**날짜가 두 개** 나옵니다. 행사나 수업이 시작하는 날과 일찍 신청하면 값을 깎아 주는 기한은 다릅니다.',
						'**예외 문장**이 정답이 됩니다. only, not이 들어간 문장을 놓치지 않습니다.',
						'구인 광고의 **must**(필수)와 **preferred**(우대)를 바꿔 놓은 보기는 오답입니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Jackets are 20 percent off. ==Students== get ==an extra 5 percent== off.',
							ko: '재킷은 20퍼센트 할인합니다. 학생은 5퍼센트를 더 할인받습니다.',
							note: '추가 할인의 조건은 "학생"입니다. 20과 5가 각각 누구에게 해당하는지 구분합니다.'
						}
					]
				}
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Northfield Sports — End-of-Season Sale',
					body: [
						'From August 20 to August 31, all running shoes and hiking boots at Northfield Sports are 30 percent off. Summer clothing, including T-shirts and swimwear, is 50 percent off.',
						'Members of our Rewards Club get an extra 10 percent off everything in the store. Not a member yet? Joining is free and takes only two minutes at the checkout counter.',
						'This sale is for in-store purchases only. Prices on our Web site will not change. We are open daily from 10 A.M. to 9 P.M. at 25 Harbor Road.'
					],
					ko: [
						'8월 20일부터 8월 31일까지 노스필드 스포츠의 모든 러닝화와 등산화를 30퍼센트 할인합니다. 티셔츠와 수영복을 포함한 여름 의류는 50퍼센트 할인합니다.',
						'리워즈 클럽 회원은 매장의 모든 상품을 10퍼센트 더 할인받습니다. 아직 회원이 아니신가요? 가입은 무료이고 계산대에서 2분이면 됩니다.',
						'이번 할인은 매장에서 구매할 때만 적용됩니다. 웹사이트의 가격은 바뀌지 않습니다. 하버로 25번지에서 매일 오전 10시부터 오후 9시까지 영업합니다.'
					]
				}
			],
			questions: [
				{
					id: 'd33-01',
					text: 'What is being advertised?',
					ko: '무엇이 광고되고 있는가?',
					options: [
						'A new line of hiking boots',
						'A discount event at a store',
						'A running club for members',
						'An online shopping site'
					],
					optionsKo: [
						'새로 나온 등산화 제품',
						'매장의 할인 행사',
						'회원을 위한 달리기 동호회',
						'온라인 쇼핑 사이트'
					],
					answer: 1,
					why: '제목이 End-of-Season Sale이고, 첫 문장에서 all running shoes and hiking boots at Northfield Sports are 30 percent off라고 했습니다. 매장의 할인 행사를 알리는 광고입니다.'
				},
				{
					id: 'd33-02',
					text: 'How can customers get an additional discount?',
					ko: '고객은 어떻게 추가 할인을 받을 수 있는가?',
					options: [
						'By shopping on the Web site',
						'By buying two pairs of shoes',
						'By joining a membership program',
						'By visiting before 10 A.M.'
					],
					optionsKo: [
						'웹사이트에서 구매해서',
						'신발 두 켤레를 사서',
						'회원 프로그램에 가입해서',
						'오전 10시 전에 방문해서'
					],
					answer: 2,
					why: 'Members of our Rewards Club get an extra 10 percent off everything in the store라고 했습니다. 추가 할인의 조건은 회원이라는 점입니다. Rewards Club이 보기에서 a membership program으로 바뀌었습니다.'
				},
				{
					id: 'd33-03',
					text: 'What is indicated about the sale?',
					ko: '할인 행사에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It is not available online.',
						'It lasts for one month.',
						'It includes winter clothing.',
						'It is for club members only.'
					],
					optionsKo: [
						'온라인에서는 적용되지 않는다.',
						'한 달 동안 계속된다.',
						'겨울 의류가 포함된다.',
						'클럽 회원만 대상이다.'
					],
					answer: 0,
					why: 'This sale is for in-store purchases only. Prices on our Web site will not change라고 했습니다. 매장에서만 할인하므로 온라인에서는 할인받을 수 없습니다. 기간은 12일이고, 회원이 아니어도 기본 할인은 받습니다.'
				}
			],
			vocab: [
				['end-of-season sale', '시즌 마감 할인'],
				['an extra 10 percent off', '10퍼센트 추가 할인'],
				['join', '가입하다'],
				['checkout counter', '계산대'],
				['in-store purchase', '매장 구매'],
				['daily', '매일']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Learn Spreadsheets in Four Weeks',
					body: [
						'Stonegate Learning Center is offering a new evening course for office workers. In just four weeks, you will learn how to make tables, use simple formulas, and create charts.',
						'Classes meet every Tuesday and Thursday from 7 P.M. to 8:30 P.M., starting May 5. Each class has no more than twelve students, so everyone gets help from the teacher.',
						'The fee is $120, and the textbook is included. Sign up by April 24 and pay only $100. To register, visit our Web site or stop by our office on Elm Street.'
					],
					ko: [
						'스톤게이트 학습 센터가 직장인을 위한 새 저녁 강좌를 엽니다. 단 4주 만에 표를 만들고, 간단한 수식을 쓰고, 차트를 만드는 법을 배웁니다.',
						'수업은 5월 5일부터 매주 화요일과 목요일 오후 7시부터 8시 30분까지 있습니다. 한 반의 학생은 12명을 넘지 않아서 모두가 강사의 도움을 받을 수 있습니다.',
						'수강료는 120달러이고 교재가 포함되어 있습니다. 4월 24일까지 신청하면 100달러만 내면 됩니다. 등록하려면 웹사이트를 방문하거나 엘름가에 있는 사무실에 들러 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd33-04',
					text: 'Who is the course designed for?',
					ko: '강좌는 누구를 위해 만들어졌는가?',
					options: [
						'High school students',
						'Computer engineers',
						'School teachers',
						'People who work in offices'
					],
					optionsKo: ['고등학생', '컴퓨터 기술자', '학교 교사', '사무실에서 일하는 사람'],
					answer: 3,
					why: '첫 문장에서 a new evening course for office workers라고 했습니다. office workers가 보기에서 People who work in offices로 바뀌었습니다.'
				},
				{
					id: 'd33-05',
					text: 'What is true about the classes?',
					ko: '수업에 대해 사실인 것은 무엇인가?',
					options: [
						'They are held twice a week.',
						'They take place in the morning.',
						'They last for two hours.',
						'They have twenty students each.'
					],
					optionsKo: [
						'일주일에 두 번 열린다.',
						'오전에 진행된다.',
						'두 시간 동안 이어진다.',
						'한 반에 학생이 20명이다.'
					],
					answer: 0,
					why: 'Classes meet every Tuesday and Thursday라고 했으므로 일주일에 두 번입니다. 시간은 from 7 P.M. to 8:30 P.M.으로 저녁 한 시간 반이고, 학생은 no more than twelve(12명 이하)입니다.'
				},
				{
					id: 'd33-06',
					text: 'How can students pay a lower fee?',
					ko: '수강생은 어떻게 수강료를 덜 낼 수 있는가?',
					options: [
						'By bringing a friend',
						'By buying the textbook separately',
						'By paying at the office',
						'By registering early'
					],
					optionsKo: [
						'친구를 데려와서',
						'교재를 따로 사서',
						'사무실에서 결제해서',
						'일찍 등록해서'
					],
					answer: 3,
					why: 'The fee is $120이지만 Sign up by April 24 and pay only $100이라고 했습니다. 기한 안에 신청하는 것이 조건입니다. Sign up by April 24가 보기에서 registering early로 바뀌었습니다.'
				}
			],
			vocab: [
				['spreadsheet', '스프레드시트 (표 계산 프로그램)'],
				['office worker', '직장인, 사무직 근로자'],
				['formula', '수식'],
				['no more than', '~을 넘지 않는'],
				['fee', '수강료, 요금'],
				['sign up', '신청하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'Using the Study Rooms at Marlow Public Library',
					body: [
						'Marlow Public Library has six study rooms on the third floor. Each room has a table, a whiteboard, and seats for up to eight people.',
						'Rooms can be reserved online or at the information desk up to two weeks in advance. You need a library card to make a reservation. Each group may use a room for a maximum of two hours a day.',
						'Drinks with lids are allowed, but food is not. Please erase the whiteboard and turn off the lights when you leave. If you are more than fifteen minutes late, your reservation will be given to another group.'
					],
					ko: [
						'말로 공공 도서관 3층에는 스터디룸이 여섯 개 있습니다. 방마다 테이블 하나, 화이트보드 하나, 그리고 최대 8명이 앉을 수 있는 좌석이 있습니다.',
						'방은 온라인이나 안내 데스크에서 2주 전부터 예약할 수 있습니다. 예약하려면 도서관 카드가 필요합니다. 한 모임은 하루에 최대 2시간까지 방을 쓸 수 있습니다.',
						'뚜껑이 있는 음료는 가져올 수 있지만 음식은 안 됩니다. 나갈 때 화이트보드를 지우고 불을 꺼 주세요. 15분 넘게 늦으면 예약이 다른 모임에 넘어갑니다.'
					]
				}
			],
			questions: [
				{
					id: 'd33-07',
					text: 'What is the purpose of the information?',
					ko: '안내문의 목적은 무엇인가?',
					options: [
						'To announce the opening of a new library',
						'To explain how to use some rooms',
						'To advertise a study group',
						'To ask for book donations'
					],
					optionsKo: [
						'새 도서관 개관을 알리려고',
						'방을 이용하는 방법을 설명하려고',
						'공부 모임을 광고하려고',
						'도서 기증을 요청하려고'
					],
					answer: 1,
					why: '제목이 Using the Study Rooms at Marlow Public Library이고, 예약 방법, 이용 시간, 지켜야 할 규칙을 차례로 알려 줍니다.'
				},
				{
					id: 'd33-08',
					text: 'What is NOT mentioned as being in each study room?',
					ko: '각 스터디룸에 있는 것으로 언급되지 않은 것은 무엇인가?',
					options: ['A table', 'A whiteboard', 'A computer', 'Seats'],
					optionsKo: ['테이블', '화이트보드', '컴퓨터', '좌석'],
					answer: 2,
					why: 'Each room has a table, a whiteboard, and seats for up to eight people이라고 했습니다. 컴퓨터는 나오지 않습니다.'
				},
				{
					id: 'd33-09',
					text: 'What will happen if a group arrives twenty minutes late?',
					ko: '모임이 20분 늦게 도착하면 어떻게 되는가?',
					options: [
						'The room may be given to other people.',
						'The group must pay a late fee.',
						'The group can stay two hours longer.',
						'The library card will be taken away.'
					],
					optionsKo: [
						'방이 다른 사람들에게 넘어갈 수 있다.',
						'모임은 연체료를 내야 한다.',
						'모임은 두 시간 더 머물 수 있다.',
						'도서관 카드를 빼앗긴다.'
					],
					answer: 0,
					why: 'If you are more than fifteen minutes late, your reservation will be given to another group이라고 했습니다. 20분은 15분을 넘으므로 방이 다른 사람들에게 넘어갈 수 있습니다.'
				}
			],
			vocab: [
				['study room', '스터디룸'],
				['up to', '최대 ~까지'],
				['in advance', '미리'],
				['make a reservation', '예약하다'],
				['a maximum of', '최대'],
				['lid', '뚜껑']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '구인 광고',
			passages: [
				{
					kind: '구인 광고',
					title: 'Bloomfield Garden Center Is Hiring',
					body: [
						'Bloomfield Garden Center is looking for two part-time sales assistants for the busy spring season. The job starts on March 2 and continues until the end of June.',
						'Assistants will help customers choose plants, water the flowers, and work at the cash register. You must be able to work on Saturdays and Sundays. Experience in a shop is preferred but not required. We will train you.',
						'The pay is $16 per hour, and staff get 20 percent off all products. To apply, send your résumé by e-mail to our manager, Ms. Nora Kim, by February 13. We will interview applicants the following week.'
					],
					ko: [
						'블룸필드 가든 센터가 바쁜 봄철에 일할 시간제 판매 보조 직원 두 명을 찾습니다. 근무는 3월 2일에 시작해 6월 말까지 이어집니다.',
						'보조 직원은 고객이 식물을 고르는 것을 돕고, 꽃에 물을 주고, 계산대에서 일합니다. 토요일과 일요일에 근무할 수 있어야 합니다. 매장 근무 경험이 있으면 좋지만 필수는 아닙니다. 저희가 교육해 드립니다.',
						'급여는 시간당 16달러이고, 직원은 모든 상품을 20퍼센트 할인받습니다. 지원하려면 2월 13일까지 매니저 노라 김 씨에게 이메일로 이력서를 보내 주세요. 면접은 그다음 주에 진행됩니다.'
					]
				}
			],
			questions: [
				{
					id: 'd33-10',
					text: 'What position is being advertised?',
					ko: '어떤 일자리가 광고되고 있는가?',
					options: [
						'A full-time store manager',
						'A delivery driver',
						'A part-time shop worker',
						'A garden designer'
					],
					optionsKo: ['정규직 매장 관리자', '배송 기사', '시간제 매장 직원', '정원 설계사'],
					answer: 2,
					why: '첫 문장에서 two part-time sales assistants를 찾는다고 했습니다. sales assistants가 보기에서 shop worker로 바뀌었습니다.'
				},
				{
					id: 'd33-11',
					text: 'What is a requirement for the job?',
					ko: '이 일자리의 필수 조건은 무엇인가?',
					options: [
						'Experience in a shop',
						'Being available on weekends',
						"A driver's license",
						'Knowledge of many plants'
					],
					optionsKo: [
						'매장 근무 경험',
						'주말에 근무할 수 있을 것',
						'운전면허',
						'여러 식물에 대한 지식'
					],
					answer: 1,
					why: 'You must be able to work on Saturdays and Sundays라고 했습니다. Saturdays and Sundays가 보기에서 weekends로 바뀌었습니다. 매장 근무 경험은 preferred but not required(우대하지만 필수는 아님)입니다.'
				},
				{
					id: 'd33-12',
					text: 'What is NOT mentioned as a duty of the assistants?',
					ko: '보조 직원의 업무로 언급되지 않은 것은 무엇인가?',
					options: [
						'Helping shoppers pick plants',
						'Watering flowers',
						'Taking payments',
						'Delivering plants to homes'
					],
					optionsKo: [
						'손님이 식물을 고르는 것을 돕기',
						'꽃에 물 주기',
						'계산 받기',
						'식물을 집으로 배달하기'
					],
					answer: 3,
					why: 'help customers choose plants, water the flowers, and work at the cash register라고 했습니다. 고르는 것을 돕기, 물 주기, 계산은 있지만 배달은 없습니다.'
				},
				{
					id: 'd33-13',
					text: 'What do staff members receive?',
					ko: '직원들은 무엇을 받는가?',
					options: [
						'A discount on purchases',
						'Free plants every month',
						'A bonus in June',
						'Free lunch on weekends'
					],
					optionsKo: ['구매 시 할인', '매달 무료 식물', '6월의 상여금', '주말 무료 점심'],
					answer: 0,
					why: 'staff get 20 percent off all products라고 했습니다. 20 percent off all products가 보기에서 A discount on purchases로 바뀌었습니다.'
				}
			],
			vocab: [
				['part-time', '시간제의'],
				['sales assistant', '판매 보조 직원'],
				['preferred', '우대하는'],
				['required', '필수인'],
				['apply', '지원하다'],
				['résumé', '이력서']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 대화의 말이 보기에서 바뀝니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 3의 정답 보기는 대화에서 들린 말을 **그대로 쓰지 않습니다**. 뜻이 같은 **다른 말로 바꿔** 씁니다. 이것을 바꿔 말하기(paraphrasing)라고 합니다.'
				},
				{
					type: 'table',
					head: ['대화에서 들리는 말', '보기에 나오는 말'],
					rows: [
						['call the supplier', 'contact a business'],
						['buy a new laptop', 'purchase a computer'],
						['fix the copier', 'repair a machine'],
						['in a few days', 'later this week'],
						['e-mail the file', 'send a document'],
						['It is too expensive.', 'The price is high.'],
						['talk to my manager', 'speak with a supervisor']
					]
				},
				{
					type: 'box',
					title: '바꾸는 방법 세 가지',
					items: [
						'**뜻이 같은 단어**로 — buy → purchase, fix → repair, call → contact',
						'**더 넓은 말**로 — laptop → computer, copier → machine, file → document',
						'**묶어서** — a desk and two chairs → some furniture'
					]
				},
				{
					type: 'tip',
					text: '대화에서 들린 단어가 **그대로** 들어 있는 보기를 조심합니다. 단어는 같아도 내용이 다르면 오답입니다.'
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
					'Hello. I saw your advertisement for the two-bedroom apartment on Cedar Street. Is it still available?'
				],
				[
					'M',
					'Yes, it is. The rent is nine hundred dollars a month, and it is a five-minute walk from the subway station.'
				],
				['W', 'That sounds good. Could I see it sometime this week?'],
				['M', 'Sure. I can show you the apartment on Thursday at six.'],
				['W', 'Great. Do I need to bring anything?'],
				['M', "Just a photo ID. I'll e-mail you a map so that you can find the building easily."]
			],
			scriptKo: [
				'안녕하세요. 시더가에 있는 방 두 개짜리 아파트 광고를 봤어요. 아직 나와 있나요?',
				'네, 있습니다. 월세는 한 달에 900달러이고, 지하철역에서 걸어서 5분 거리입니다.',
				'좋네요. 이번 주 중에 볼 수 있을까요?',
				'물론이죠. 목요일 6시에 아파트를 보여 드릴 수 있습니다.',
				'좋아요. 가져가야 할 것이 있나요?',
				'사진이 있는 신분증만 가져오시면 됩니다. 건물을 쉽게 찾으실 수 있게 지도를 이메일로 보내 드리겠습니다.'
			],
			questions: [
				{
					id: 'd33-14',
					text: 'Why is the woman calling?',
					ko: '여자는 왜 전화하고 있는가?',
					options: [
						'To place an advertisement',
						'To ask about a place to live',
						'To buy a subway pass',
						'To report a problem with her apartment'
					],
					optionsKo: [
						'광고를 내려고',
						'살 곳에 대해 문의하려고',
						'지하철 승차권을 사려고',
						'자기 아파트의 문제를 알리려고'
					],
					answer: 1,
					why: '여자가 I saw your advertisement for the two-bedroom apartment on Cedar Street. Is it still available?이라고 했습니다. apartment가 보기에서 a place to live로 바뀌었습니다. 광고는 여자가 본 것이지 내려는 것이 아닙니다.'
				},
				{
					id: 'd33-15',
					text: 'What does the man say about the apartment?',
					ko: '남자는 아파트에 대해 무엇이라고 말하는가?',
					options: [
						'It has five bedrooms.',
						'It was rented last month.',
						'It is on a quiet street.',
						'It is close to public transportation.'
					],
					optionsKo: [
						'침실이 다섯 개이다.',
						'지난달에 계약되었다.',
						'조용한 거리에 있다.',
						'대중교통과 가깝다.'
					],
					answer: 3,
					why: '남자가 it is a five-minute walk from the subway station이라고 했습니다. a five-minute walk가 보기에서 close로, the subway station이 public transportation으로 바뀌었습니다. five는 걸어서 걸리는 시간이고 침실은 두 개입니다.'
				},
				{
					id: 'd33-16',
					text: 'What will the man send the woman?',
					ko: '남자는 여자에게 무엇을 보낼 것인가?',
					options: [
						'Directions to a place',
						'A photo of the apartment',
						'A copy of the advertisement',
						'A monthly bill'
					],
					optionsKo: ['어떤 장소로 가는 길 안내', '아파트 사진', '광고 사본', '월 청구서'],
					answer: 0,
					why: "남자가 I'll e-mail you a map so that you can find the building easily라고 했습니다. a map이 보기에서 Directions로, the building이 a place로 바뀌었습니다. photo ID는 여자가 가져갈 것입니다."
				}
			],
			vocab: [
				['advertisement', '광고'],
				['available', '(집·물건이) 나와 있는'],
				['rent', '월세, 집세'],
				['photo ID', '사진이 있는 신분증'],
				['public transportation', '대중교통'],
				['directions', '길 안내']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['M', 'Jenna, the new employee workshop is on Friday. Have you booked a room yet?'],
				[
					'W',
					'I tried, but the large conference room is being painted this week. We have to use the cafeteria instead.'
				],
				['M', 'The cafeteria? All right. How many people should we expect?'],
				[
					'W',
					'Twenty-five. I still need to make copies of the handbook, but the copy machine on our floor is out of paper.'
				],
				['M', "There are boxes of paper in the storage room. I'll get one for you right now."],
				['W', 'Thanks. Then I can finish the copies before lunch.']
			],
			scriptKo: [
				'제나 씨, 신입 사원 워크숍이 금요일이에요. 방은 예약했나요?',
				'해 보려고 했는데, 대회의실은 이번 주에 페인트칠을 하고 있어요. 대신 구내식당을 써야 해요.',
				'구내식당이요? 알겠어요. 몇 명이 올 예정이죠?',
				'25명이요. 안내서를 복사해야 하는데, 우리 층 복사기에 종이가 떨어졌어요.',
				'창고에 종이 상자가 있어요. 지금 바로 하나 가져다줄게요.',
				'고마워요. 그러면 점심 전에 복사를 끝낼 수 있겠네요.'
			],
			questions: [
				{
					id: 'd33-17',
					text: 'What event are the speakers preparing for?',
					ko: '화자들은 어떤 행사를 준비하고 있는가?',
					options: [
						'A lunch for new employees',
						'A conference with clients',
						'A training session for new staff',
						'A painting class'
					],
					optionsKo: [
						'신입 사원을 위한 점심 식사',
						'고객과의 회의',
						'신입 직원을 위한 교육',
						'그림 수업'
					],
					answer: 2,
					why: '남자가 the new employee workshop is on Friday라고 했습니다. workshop이 보기에서 A training session으로, new employee가 new staff로 바뀌었습니다. lunch, conference, painted는 대화에 들리지만 행사의 종류가 아닙니다.'
				},
				{
					id: 'd33-18',
					text: 'Why are the speakers unable to use the conference room?',
					ko: '화자들은 왜 회의실을 쓸 수 없는가?',
					options: [
						'Some work is being done there.',
						'It is too small for twenty-five people.',
						'The cafeteria is closed this week.',
						'It was booked for a lunch.'
					],
					optionsKo: [
						'그곳에서 작업이 진행 중이다.',
						'25명이 쓰기에 너무 작다.',
						'구내식당이 이번 주에 문을 닫는다.',
						'점심 식사용으로 예약되었다.'
					],
					answer: 0,
					why: '여자가 the large conference room is being painted this week라고 했습니다. is being painted가 보기에서 Some work is being done으로 바뀌었습니다.'
				},
				{
					id: 'd33-19',
					text: 'What will the man do next?',
					ko: '남자는 다음에 무엇을 할 것인가?',
					options: [
						'Make copies of the handbook',
						'Repair the copy machine',
						'Book the cafeteria',
						'Bring some supplies'
					],
					optionsKo: [
						'안내서를 복사한다',
						'복사기를 수리한다',
						'구내식당을 예약한다',
						'비품을 가져온다'
					],
					answer: 3,
					why: "남자가 There are boxes of paper in the storage room. I'll get one for you right now라고 했습니다. 종이 한 상자를 가져다주는 것이 보기에서 Bring some supplies로 바뀌었습니다. 복사는 여자가 할 일입니다."
				}
			],
			vocab: [
				['workshop', '워크숍, 연수'],
				['conference room', '회의실'],
				['cafeteria', '구내식당'],
				['handbook', '안내서'],
				['out of paper', '종이가 떨어진'],
				['supplies', '비품, 용품']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 담화의 말도 보기에서 바뀝니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 4에서도 원리는 같습니다. 담화에서 들린 말이 보기에서는 **다른 말**로 나옵니다. 한 사람이 쉬지 않고 말하므로, 들린 단어만 붙잡고 있으면 다음 내용을 놓칩니다.'
				},
				{
					type: 'table',
					head: ['담화에서 들리는 말', '보기에 나오는 말'],
					rows: [
						['Show your ticket at the door.', 'Present a ticket'],
						['Visit our Web site.', 'Go online'],
						['The train will leave thirty minutes late.', 'A departure is delayed.'],
						['Fill out the survey.', 'Complete a form'],
						['We will give you a free umbrella.', 'Receive a gift'],
						['The road is closed.', 'A street cannot be used.']
					]
				},
				{
					type: 'box',
					title: '들린 단어가 그대로 있는 보기',
					items: [
						'담화 — "The **library** opens at nine, but the **parking lot** is **closed** today."',
						'오답 — The library is closed today. (library와 closed가 모두 들렸지만 내용이 다릅니다.)',
						'정답 — A parking area cannot be used. (들린 단어는 parking뿐이지만 뜻이 같습니다.)'
					]
				},
				{
					type: 'box',
					title: '듣는 요령',
					items: [
						'단어가 아니라 **내용**을 기억합니다. "주차장을 오늘 못 쓴다"처럼 우리말로 떠올립니다.',
						'보기를 미리 읽을 때 명사만 보지 말고 **동사까지** 읽습니다. 오답은 명사는 맞고 동사가 틀린 경우가 많습니다.'
					]
				},
				{
					type: 'tip',
					text: '들린 단어가 있는 보기가 항상 오답인 것은 아닙니다. 단어가 같은지가 아니라 **뜻이 같은지**로 고릅니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '견학 안내',
			script: [
				[
					'W',
					"Welcome to the Goldcrest Chocolate Factory. I'm Rosa, and I'll be showing you around this afternoon."
				],
				[
					'W',
					'Our tour takes about forty minutes. First, we will watch a short video about the history of the company. Then we will walk through the area where the chocolate is made.'
				],
				[
					'W',
					'Please do not take pictures inside the factory. Also, keep your bags in the lockers by the entrance.'
				],
				[
					'W',
					'At the end of the tour, everyone will get a free box of chocolates. Now, please follow me.'
				]
			],
			scriptKo: [
				'골드크레스트 초콜릿 공장에 오신 것을 환영합니다. 저는 로사이고, 오늘 오후에 여러분을 안내하겠습니다.',
				'견학은 약 40분이 걸립니다. 먼저 회사의 역사에 관한 짧은 영상을 봅니다. 그다음 초콜릿을 만드는 구역을 걸어서 지나갑니다.',
				'공장 안에서는 사진을 찍지 말아 주세요. 또 가방은 입구 옆 사물함에 넣어 두세요.',
				'견학이 끝나면 모두에게 초콜릿 한 상자를 무료로 드립니다. 이제 저를 따라오세요.'
			],
			questions: [
				{
					id: 'd33-20',
					text: 'What will the listeners do first?',
					ko: '청자들은 먼저 무엇을 할 것인가?',
					options: [
						'Walk through the factory',
						'Read about the company history',
						'See a film',
						'Make some chocolate'
					],
					optionsKo: [
						'공장을 걸어서 지나간다',
						'회사의 역사에 관한 글을 읽는다',
						'영상을 본다',
						'초콜릿을 만든다'
					],
					answer: 2,
					why: 'First, we will watch a short video about the history of the company라고 했습니다. watch a short video가 보기에서 See a film으로 바뀌었습니다. 공장을 걸어서 지나가는 것은 그다음입니다.'
				},
				{
					id: 'd33-21',
					text: 'What does the speaker tell the listeners not to do?',
					ko: '화자는 청자들에게 무엇을 하지 말라고 하는가?',
					options: [
						'Take photographs',
						'Put bags in the lockers',
						'Wait by the entrance',
						'Follow the guide'
					],
					optionsKo: [
						'사진을 찍는다',
						'가방을 사물함에 넣는다',
						'입구 옆에서 기다린다',
						'안내원을 따라간다'
					],
					answer: 0,
					why: 'Please do not take pictures inside the factory라고 했습니다. pictures가 보기에서 photographs로 바뀌었습니다. 가방을 사물함에 넣는 것은 하라고 한 일입니다.'
				},
				{
					id: 'd33-22',
					text: 'What will the listeners receive after the tour?',
					ko: '청자들은 견학이 끝난 뒤 무엇을 받을 것인가?',
					options: [
						'A free tour ticket',
						'A box for their bags',
						'A video about chocolate',
						'Some sweets at no cost'
					],
					optionsKo: [
						'무료 견학 입장권',
						'가방을 넣을 상자',
						'초콜릿에 관한 영상',
						'무료로 주는 단것'
					],
					answer: 3,
					why: 'everyone will get a free box of chocolates라고 했습니다. chocolates가 보기에서 sweets로, free가 at no cost로 바뀌었습니다. free와 box가 그대로 들어 있는 보기는 내용이 다릅니다.'
				}
			],
			vocab: [
				['show ~ around', '~에게 구경시켜 주다'],
				['tour', '견학'],
				['take pictures', '사진을 찍다'],
				['locker', '사물함'],
				['sweets', '단것, 사탕류'],
				['at no cost', '무료로']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '녹음 메시지',
			script: [
				['M', 'Thank you for calling Ashford City Pool. We are closed at the moment.'],
				[
					'M',
					'Our regular hours are 6 A.M. to 9 P.M. every day. Please note that the pool will be closed all day this Sunday because we are cleaning the water tanks.'
				],
				[
					'M',
					'Swimming lessons for children begin next month. Spaces fill up quickly, so we suggest you sign up on our Web site soon.'
				],
				['M', 'To speak with a staff member, please call again during business hours. Goodbye.']
			],
			scriptKo: [
				'애슈퍼드 시립 수영장에 전화해 주셔서 감사합니다. 지금은 운영 시간이 아닙니다.',
				'정규 운영 시간은 매일 오전 6시부터 오후 9시까지입니다. 이번 주 일요일에는 물탱크를 청소하므로 하루 종일 문을 닫는다는 점을 알려 드립니다.',
				'어린이 수영 강습이 다음 달에 시작합니다. 자리가 빨리 차니 웹사이트에서 서둘러 신청하시기를 권합니다.',
				'직원과 통화하시려면 영업시간에 다시 전화해 주세요. 안녕히 계세요.'
			],
			questions: [
				{
					id: 'd33-23',
					text: 'Why will the pool be closed on Sunday?',
					ko: '수영장은 왜 일요일에 문을 닫는가?',
					options: [
						'Children will have swimming lessons.',
						'Maintenance work is planned.',
						'The water tanks will be replaced.',
						'Staff members will be away.'
					],
					optionsKo: [
						'어린이들이 수영 강습을 받는다.',
						'정비 작업이 예정되어 있다.',
						'물탱크를 교체한다.',
						'직원들이 자리를 비운다.'
					],
					answer: 1,
					why: 'the pool will be closed all day this Sunday because we are cleaning the water tanks라고 했습니다. cleaning the water tanks가 보기에서 Maintenance work로 바뀌었습니다. 물탱크는 교체하는 것이 아니라 청소합니다.'
				},
				{
					id: 'd33-24',
					text: 'What does the speaker recommend?',
					ko: '화자는 무엇을 권하는가?',
					options: [
						'Calling a swimming teacher',
						'Signing up at the pool on Sunday',
						'Registering online early',
						'Arriving before 6 A.M.'
					],
					optionsKo: [
						'수영 강사에게 전화하기',
						'일요일에 수영장에서 신청하기',
						'온라인으로 일찍 등록하기',
						'오전 6시 전에 도착하기'
					],
					answer: 2,
					why: 'we suggest you sign up on our Web site soon이라고 했습니다. sign up이 보기에서 Registering으로, on our Web site가 online으로, soon이 early로 바뀌었습니다.'
				},
				{
					id: 'd33-25',
					text: 'How can the listeners talk to an employee?',
					ko: '청자들은 어떻게 직원과 이야기할 수 있는가?',
					options: [
						'By phoning again when the pool is open',
						'By visiting the Web site',
						'By signing up for a lesson',
						'By calling a staff member on Sunday'
					],
					optionsKo: [
						'수영장이 열려 있을 때 다시 전화해서',
						'웹사이트를 방문해서',
						'강습을 신청해서',
						'일요일에 직원에게 전화해서'
					],
					answer: 0,
					why: 'To speak with a staff member, please call again during business hours라고 했습니다. call again이 보기에서 phoning again으로, during business hours가 when the pool is open으로 바뀌었습니다.'
				}
			],
			vocab: [
				['regular hours', '정규 운영 시간'],
				['water tank', '물탱크'],
				['maintenance', '정비, 유지 보수'],
				['fill up', '(자리가) 차다'],
				['business hours', '영업시간']
			]
		}
	]
} satisfies DayContent;
