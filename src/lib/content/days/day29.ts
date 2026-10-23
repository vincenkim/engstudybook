import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 동의어 문제에서 문맥에 맞는 뜻을 고른다',
		'Part 3 대화에서 제안과 요청을 알아듣는다',
		'Part 4 뉴스와 방송의 흐름을 따라간다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '동의어 문제',
			blocks: [
				{
					type: 'p',
					text: '글 속의 단어 하나를 짚어, 그 자리에서 **뜻이 가장 가까운 단어**를 고르는 문제입니다. 질문 형태는 한 가지뿐입니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'The word "cover" in paragraph 2 is closest in meaning to',
							'둘째 문단의 "cover"와 뜻이 가장 가까운 것은'
						],
						[
							'The word "run" in paragraph 1 is closest in meaning to',
							'첫째 문단의 "run"과 뜻이 가장 가까운 것은'
						]
					]
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'문단 번호를 보고 그 단어가 든 **문장을 통째로** 읽습니다.',
						'단어 자리에 보기를 **하나씩 넣어** 읽습니다.',
						'문장의 뜻이 그대로인 보기가 답입니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The ticket price ==covers== lunch and a boat ride.',
							ko: '입장권 가격에 점심과 배 타기가 포함됩니다.',
							note: 'covers = ==includes==(포함하다). "덮다(hides)"나 "보호하다(protects)"를 넣으면 말이 되지 않습니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '오답 보기는 그 단어의 **다른 뜻**입니다. 아는 뜻이 보여도 바로 고르지 말고 문장에 넣어 확인합니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '뜻이 여러 개인 단어',
			blocks: [
				{
					type: 'p',
					text: '동의어 문제에는 어려운 단어보다 **뜻이 여러 개인 쉬운 단어**가 나옵니다. 같은 단어라도 글에 따라 답이 달라집니다.'
				},
				{
					type: 'table',
					head: ['단어', '뜻 1', '뜻 2'],
					rows: [
						['issue', '문제 (= problem)', '(잡지의) 호 (= edition)'],
						['cover', '다루다 (= discuss)', '포함하다 (= include)'],
						['run', '운영하다 (= manage)', '계속되다 (= last)'],
						['address', '처리하다 (= handle)', '주소 (= location)'],
						['meet', '충족하다 (= satisfy)', '만나다 (= see)'],
						['order', '주문 (= request)', '순서 (= sequence)'],
						['complete', '작성하다, 끝내다 (= fill out, finish)', '완전한 (= whole)'],
						['present', '보여 주다 (= show)', '현재의 (= current)'],
						['book', '예약하다 (= reserve)', '책']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The summer sale ==runs== until July 31.',
							ko: '여름 할인은 7월 31일까지 계속됩니다.',
							note: 'runs = ==lasts==(계속되다)'
						},
						{
							en: 'Ms. Ahn ==runs== a small flower shop.',
							ko: '안 씨는 작은 꽃집을 운영합니다.',
							note: 'runs = ==manages==(운영하다)'
						}
					]
				},
				{
					type: 'tip',
					text: '단어를 외울 때 첫째 뜻만 외우지 말고, 예문과 함께 둘째 뜻까지 봐 둡니다.'
				}
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
						['From', 'Dana Whitfield, Office Manager'],
						['Subject', 'Computer security training'],
						['Date', 'March 4']
					],
					body: [
						'A training session on computer security will be held in Room 2B on Thursday, March 14, from 1 P.M. to 3 P.M. All staff must attend.',
						'The session will be led by Mr. Victor Lund from the head office. He will cover three topics: choosing strong passwords, spotting dangerous e-mails, and keeping customer data safe.',
						'Please bring your company laptop, because we will change some settings together. If you cannot attend, let me know by March 8 so that I can arrange another date for you.'
					],
					ko: [
						'컴퓨터 보안 교육이 3월 14일 목요일 오후 1시부터 3시까지 2B호에서 열립니다. 전 직원이 참석해야 합니다.',
						'교육은 본사의 빅터 룬드 씨가 진행합니다. 룬드 씨는 안전한 비밀번호 고르기, 위험한 이메일 알아보기, 고객 정보 안전하게 지키기의 세 가지 주제를 다룹니다.',
						'함께 설정을 몇 가지 바꿀 것이므로 회사 노트북을 가져오세요. 참석할 수 없으면 다른 날짜를 정해 드릴 수 있도록 3월 8일까지 저에게 알려 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd29-01',
					text: 'What is the purpose of the memo?',
					ko: '회람의 목적은 무엇인가?',
					options: [
						'To welcome a new office manager',
						'To inform staff about a required class',
						'To report a computer problem',
						'To ask staff to change their passwords'
					],
					optionsKo: [
						'새 사무실 관리자를 환영하려고',
						'직원들에게 필수 교육을 알리려고',
						'컴퓨터 문제를 보고하려고',
						'직원들에게 비밀번호를 바꾸라고 요청하려고'
					],
					answer: 1,
					why: '제목이 Computer security training이고, 첫 문단에서 A training session on computer security will be held라고 한 뒤 All staff must attend라고 했습니다. training session이 보기에서 class로, must attend가 required로 바뀌었습니다.'
				},
				{
					id: 'd29-02',
					text: 'The word "cover" in paragraph 2 is closest in meaning to',
					ko: '둘째 문단의 "cover"와 뜻이 가장 가까운 것은?',
					options: ['hide', 'protect', 'travel', 'discuss'],
					optionsKo: ['숨기다', '보호하다', '이동하다', '다루다'],
					answer: 3,
					why: 'He will cover three topics(세 가지 주제를 다룬다)에서 cover는 "다루다"라는 뜻입니다. discuss를 넣어도 뜻이 같습니다. hide(숨기다), protect(보호하다), travel(이동하다)도 cover의 뜻이지만 topics와 어울리지 않습니다.'
				},
				{
					id: 'd29-03',
					text: 'What are staff members asked to bring?',
					ko: '직원들은 무엇을 가져오라고 요청받는가?',
					options: [
						'A work computer',
						'A new password',
						'A list of customers',
						'A printed handout'
					],
					optionsKo: ['업무용 컴퓨터', '새 비밀번호', '고객 명단', '인쇄한 유인물'],
					answer: 0,
					why: 'Please bring your company laptop이라고 했습니다. company laptop이 보기에서 A work computer로 바뀌었습니다.'
				}
			],
			vocab: [
				['training session', '교육'],
				['security', '보안'],
				['lead', '진행하다, 이끌다'],
				['spot', '알아보다, 찾아내다'],
				['settings', '설정'],
				['arrange', '정하다, 마련하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Stonegate Storage — Extra Space When You Need It',
					body: [
						'Is your home or office full of boxes? Stonegate Storage rents clean, dry rooms in four sizes, from small lockers to rooms large enough for furniture.',
						'My family and I run this business ourselves, so there is always a friendly face at the front desk. The building is locked at night, and you can visit your room any day from 6 A.M. to 10 P.M.',
						'Sign a six-month contract this month and pay nothing for the first month. Call 555-0164 or stop by our office on Dock Road for a tour.'
					],
					ko: [
						'집이나 사무실이 상자로 가득한가요? 스톤게이트 스토리지는 작은 사물함부터 가구가 들어가는 넓은 방까지 네 가지 크기의 깨끗하고 건조한 방을 빌려 드립니다.',
						'저희 가족이 이 사업체를 직접 운영하므로 안내 데스크에는 언제나 친절한 얼굴이 있습니다. 건물은 밤에 잠기며, 오전 6시부터 오후 10시까지 어느 요일이든 방을 방문할 수 있습니다.',
						'이번 달에 6개월 계약을 하시면 첫 달 요금을 내지 않습니다. 555-0164로 전화하시거나 독 로드에 있는 저희 사무실에 들러 시설을 둘러보세요.'
					]
				}
			],
			questions: [
				{
					id: 'd29-04',
					text: 'What is indicated about the storage rooms?',
					ko: '보관용 방에 대해 언급된 것은 무엇인가?',
					options: [
						'They are all the same price.',
						'They can be visited only on weekdays.',
						'They come in several sizes.',
						'They include free boxes.'
					],
					optionsKo: [
						'가격이 모두 같다.',
						'평일에만 방문할 수 있다.',
						'크기가 여러 가지이다.',
						'상자가 무료로 포함된다.'
					],
					answer: 2,
					why: 'Stonegate Storage rents clean, dry rooms in four sizes라고 했습니다. in four sizes가 보기에서 in several sizes로 바뀌었습니다. 방은 any day(어느 요일이든) 방문할 수 있습니다.'
				},
				{
					id: 'd29-05',
					text: 'The word "run" in paragraph 2 is closest in meaning to',
					ko: '둘째 문단의 "run"과 뜻이 가장 가까운 것은?',
					options: ['manage', 'race', 'flow', 'hurry'],
					optionsKo: ['운영하다', '경주하다', '흐르다', '서두르다'],
					answer: 0,
					why: 'My family and I run this business ourselves(우리 가족이 이 사업체를 직접 운영한다)에서 run은 "운영하다"라는 뜻입니다. manage를 넣어도 뜻이 같습니다. race(경주하다), flow(흐르다), hurry(서두르다)는 run의 다른 뜻에서 나온 보기이며 this business와 어울리지 않습니다.'
				},
				{
					id: 'd29-06',
					text: 'How can customers get one month for free?',
					ko: '고객은 어떻게 한 달을 무료로 이용할 수 있는가?',
					options: [
						'By paying with a credit card',
						'By agreeing to rent for six months',
						'By visiting before 6 A.M.',
						'By bringing their own boxes'
					],
					optionsKo: [
						'신용 카드로 결제해서',
						'6개월 동안 빌리기로 해서',
						'오전 6시 전에 방문해서',
						'상자를 직접 가져와서'
					],
					answer: 1,
					why: 'Sign a six-month contract this month and pay nothing for the first month라고 했습니다. Sign a six-month contract가 보기에서 agreeing to rent for six months로 바뀌었습니다.'
				}
			],
			vocab: [
				['storage', '보관, 창고'],
				['rent', '빌려주다, 빌리다'],
				['run a business', '사업체를 운영하다'],
				['contract', '계약'],
				['stop by', '들르다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'How to Use Your Bellamy Books Gift Card',
					body: [
						'This card can be used at any of our twelve Bellamy Books stores. To pay, simply present the card to the cashier before your items are scanned.',
						'You can buy books, magazines, and stationery with the card. However, it cannot be used at the café inside our stores.',
						'To check how much money is left on your card, look at the bottom of your receipt. The card has no expiration date, but we cannot replace a lost card. Please keep it in a safe place.'
					],
					ko: [
						'이 카드는 벨러미 북스 열두 개 매장 어디에서나 쓸 수 있습니다. 결제할 때는 물건을 계산하기 전에 계산원에게 카드를 보여 주기만 하면 됩니다.',
						'카드로 책, 잡지, 문구류를 살 수 있습니다. 하지만 매장 안의 카페에서는 쓸 수 없습니다.',
						'카드에 남은 금액을 확인하려면 영수증 맨 아래를 보세요. 카드에는 유효 기간이 없지만, 잃어버린 카드는 다시 발급해 드릴 수 없습니다. 안전한 곳에 보관해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd29-07',
					text: 'The word "present" in paragraph 1 is closest in meaning to',
					ko: '첫째 문단의 "present"와 뜻이 가장 가까운 것은?',
					options: ['show', 'introduce', 'perform', 'donate'],
					optionsKo: ['보여 주다', '소개하다', '공연하다', '기증하다'],
					answer: 0,
					why: 'simply present the card to the cashier(계산원에게 카드를 보여 주기만 하면 된다)에서 present는 "보여 주다, 제시하다"라는 뜻입니다. show를 넣어도 뜻이 같습니다. introduce(소개하다), perform(공연하다), donate(기증하다)는 present의 다른 뜻에서 나온 보기이며 the card와 어울리지 않습니다.'
				},
				{
					id: 'd29-08',
					text: 'What is indicated about the café?',
					ko: '카페에 대해 언급된 것은 무엇인가?',
					options: [
						'It sells magazines and stationery.',
						'It is closed on weekends.',
						'It does not accept the gift card.',
						'It offers a discount to card users.'
					],
					optionsKo: [
						'잡지와 문구류를 판다.',
						'주말에 문을 닫는다.',
						'기프트 카드를 받지 않는다.',
						'카드 사용자에게 할인해 준다.'
					],
					answer: 2,
					why: 'it cannot be used at the café inside our stores라고 했습니다. it은 기프트 카드입니다. cannot be used at the café가 보기에서 does not accept the gift card로 바뀌었습니다.'
				},
				{
					id: 'd29-09',
					text: 'How can customers find out the amount left on a card?',
					ko: '고객은 카드에 남은 금액을 어떻게 알 수 있는가?',
					options: [
						'By visiting a Web site',
						'By calling a store',
						'By scanning the card at the café',
						'By checking a receipt'
					],
					optionsKo: [
						'웹사이트를 방문해서',
						'매장에 전화해서',
						'카페에서 카드를 찍어서',
						'영수증을 확인해서'
					],
					answer: 3,
					why: 'To check how much money is left on your card, look at the bottom of your receipt라고 했습니다. look at이 보기에서 checking으로 바뀌었습니다.'
				}
			],
			vocab: [
				['gift card', '기프트 카드, 상품권'],
				['cashier', '계산원'],
				['scan', '(바코드를) 찍다'],
				['stationery', '문구류'],
				['expiration date', '유효 기간'],
				['replace', '다시 발급하다, 교체하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '웹 페이지',
			passages: [
				{
					kind: '웹 페이지',
					title: 'Printwell Shirts — Custom Orders',
					body: [
						'Printwell prints T-shirts for company events, sports teams, and school clubs. Choose a shirt color, add your logo, and we will do the rest.',
						'We have more than two hundred ready-made designs. If these designs do not meet your needs, you can upload your own picture. Our designers will send you a sample image within two days.',
						'The smallest order is ten shirts. Orders of fifty shirts or more receive a 15 percent discount. Printing takes one week, and delivery takes two or three more days.',
						'Do you have a question? Use the chat window at the bottom of this page from 9 A.M. to 6 P.M. on weekdays.'
					],
					ko: [
						'프린트웰은 회사 행사, 운동 팀, 학교 동아리를 위한 티셔츠를 인쇄합니다. 셔츠 색을 고르고 로고를 넣으시면 나머지는 저희가 합니다.',
						'미리 만들어 놓은 디자인이 200개 넘게 있습니다. 이 디자인들이 필요에 맞지 않으면 직접 그림을 올릴 수 있습니다. 저희 디자이너가 이틀 안에 견본 이미지를 보내 드립니다.',
						'최소 주문 수량은 10장입니다. 50장 이상 주문하면 15퍼센트 할인을 받습니다. 인쇄에는 일주일이 걸리고, 배송에는 2~3일이 더 걸립니다.',
						'질문이 있으신가요? 평일 오전 9시부터 오후 6시까지 이 페이지 아래쪽의 채팅 창을 이용해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd29-10',
					text: 'What kind of business is Printwell?',
					ko: '프린트웰은 어떤 업체인가?',
					options: [
						'A sports club',
						'A clothing printing company',
						'A design school',
						'An event planning company'
					],
					optionsKo: ['스포츠 클럽', '의류 인쇄 업체', '디자인 학교', '행사 기획 업체'],
					answer: 1,
					why: 'Printwell prints T-shirts for company events, sports teams, and school clubs라고 했습니다. T-shirts가 보기에서 clothing으로 바뀌었습니다. sports teams와 company events는 셔츠를 주문하는 고객입니다.'
				},
				{
					id: 'd29-11',
					text: 'The word "meet" in paragraph 2 is closest in meaning to',
					ko: '둘째 문단의 "meet"와 뜻이 가장 가까운 것은?',
					options: ['greet', 'join', 'satisfy', 'gather'],
					optionsKo: ['맞이하다', '합류하다', '충족하다', '모이다'],
					answer: 2,
					why: 'If these designs do not meet your needs(이 디자인들이 필요에 맞지 않으면)에서 meet는 "충족하다"라는 뜻입니다. satisfy를 넣어도 뜻이 같습니다. greet(맞이하다), join(합류하다), gather(모이다)는 "만나다"에서 나온 보기이며 your needs와 어울리지 않습니다.'
				},
				{
					id: 'd29-12',
					text: 'How can customers get a discount?',
					ko: '고객은 어떻게 할인을 받을 수 있는가?',
					options: [
						'By uploading their own picture',
						'By choosing a ready-made design',
						'By ordering before 6 P.M.',
						'By buying fifty or more shirts'
					],
					optionsKo: [
						'직접 그림을 올려서',
						'미리 만들어 놓은 디자인을 골라서',
						'오후 6시 전에 주문해서',
						'셔츠를 50장 이상 사서'
					],
					answer: 3,
					why: 'Orders of fifty shirts or more receive a 15 percent discount라고 했습니다. Orders of fifty shirts or more가 보기에서 buying fifty or more shirts로 바뀌었습니다.'
				},
				{
					id: 'd29-13',
					text: 'How can customers ask a question?',
					ko: '고객은 어떻게 질문할 수 있는가?',
					options: [
						'By calling the office',
						'By sending a letter',
						'By using an online chat',
						'By visiting a store'
					],
					optionsKo: [
						'사무실에 전화해서',
						'편지를 보내서',
						'온라인 채팅을 이용해서',
						'매장을 방문해서'
					],
					answer: 2,
					why: 'Do you have a question? Use the chat window at the bottom of this page라고 했습니다. the chat window가 보기에서 an online chat으로 바뀌었습니다.'
				}
			],
			vocab: [
				['custom', '주문 제작의'],
				['ready-made', '미리 만들어 놓은'],
				["meet one's needs", '필요를 충족하다'],
				['upload', '올리다'],
				['sample', '견본'],
				['discount', '할인']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 제안과 요청 찾기',
			blocks: [
				{
					type: 'p',
					text: '한 사람이 상대에게 **무엇을 하자고 하는지**(제안), **무엇을 해 달라고 하는지**(요청) 묻는 문제입니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						['What does the man suggest?', '남자는 무엇을 제안하는가?'],
						[
							'What does the woman suggest the man do?',
							'여자는 남자에게 무엇을 하라고 제안하는가?'
						],
						[
							'What does the woman ask the man to do?',
							'여자는 남자에게 무엇을 해 달라고 요청하는가?'
						]
					]
				},
				{
					type: 'box',
					title: '신호가 되는 말',
					items: [
						"제안 — **Why don't you ~?** / **How about ~?** / You should ~",
						'요청 — **Could you ~?** / Can you ~? / Please ~',
						'신호 **바로 뒤**에 나오는 동사가 답입니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: "==Why don't you== ask the manager?",
							ko: '관리자에게 물어보는 게 어때요?',
							note: '제안 — 보기에서는 "Talking to a manager"처럼 바뀌어 나옵니다.'
						},
						{
							en: '==Could you== lock the door when you leave?',
							ko: '나갈 때 문을 잠가 주시겠어요?',
							note: '요청 — 보기에서는 "Lock a door"로 나옵니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '질문의 **주어**가 그 말을 하는 사람입니다. What does the man suggest?이면 남자의 대사에서 답을 찾습니다.'
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
					'Carlos, I have to be at the convention center by five. Do you think I should take a taxi?'
				],
				[
					'M',
					"The roads are very busy at this time of day. Why don't you take the subway? It only takes twenty minutes."
				],
				['W', 'That sounds good. But I have two heavy boxes of samples.'],
				['M', 'I can help you carry them to the station across the street.'],
				['W', "Thanks a lot. Could you give this report to Ms. Shin while I'm away?"],
				['M', "Sure. I'll put it on her desk this afternoon."]
			],
			scriptKo: [
				'카를로스, 저는 5시까지 컨벤션 센터에 가야 해요. 택시를 타는 게 좋을까요?',
				'이 시간에는 길이 많이 막혀요. 지하철을 타는 게 어때요? 20분밖에 안 걸려요.',
				'그게 좋겠네요. 그런데 무거운 견본 상자가 두 개 있어요.',
				'길 건너 역까지 나르는 것을 도와 드릴게요.',
				'정말 고마워요. 제가 없는 동안 이 보고서를 신 씨에게 전해 주시겠어요?',
				'물론이죠. 오늘 오후에 신 씨 책상에 올려놓을게요.'
			],
			questions: [
				{
					id: 'd29-14',
					text: 'Where does the woman need to be by five?',
					ko: '여자는 5시까지 어디에 가야 하는가?',
					options: [
						"At a client's office",
						'At a convention center',
						'At a hotel',
						'At a taxi stand'
					],
					optionsKo: ['고객의 사무실에', '컨벤션 센터에', '호텔에', '택시 승차장에'],
					answer: 1,
					why: '여자가 I have to be at the convention center by five라고 했습니다.'
				},
				{
					id: 'd29-15',
					text: 'What does the man suggest?',
					ko: '남자는 무엇을 제안하는가?',
					options: [
						'Leaving earlier',
						'Calling a taxi',
						'Using the subway',
						'Sending the boxes by mail'
					],
					optionsKo: [
						'더 일찍 출발하기',
						'택시 부르기',
						'지하철 이용하기',
						'상자를 우편으로 보내기'
					],
					answer: 2,
					why: "남자가 Why don't you take the subway?라고 제안했습니다. 택시는 여자가 먼저 꺼낸 생각이고, 남자는 길이 막힌다며 지하철을 권했습니다."
				},
				{
					id: 'd29-16',
					text: 'What does the woman ask the man to do?',
					ko: '여자는 남자에게 무엇을 해 달라고 요청하는가?',
					options: [
						'Deliver a document to a coworker',
						'Drive her to the convention center',
						'Buy a subway ticket',
						'Call Ms. Shin'
					],
					optionsKo: [
						'동료에게 문서를 전달한다',
						'컨벤션 센터까지 차로 태워 준다',
						'지하철표를 산다',
						'신 씨에게 전화한다'
					],
					answer: 0,
					why: "여자가 Could you give this report to Ms. Shin while I'm away?라고 요청했습니다. give this report to Ms. Shin이 보기에서 Deliver a document to a coworker로 바뀌었습니다."
				}
			],
			vocab: [
				['convention center', '컨벤션 센터'],
				['busy', '(길이) 붐비는'],
				['heavy', '무거운'],
				['carry', '나르다'],
				['away', '자리에 없는']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					"Ms. Bae, the new intern starts next Monday, but we haven't prepared a desk or a computer for him."
				],
				['W', "You're right. There's an empty desk next to the window. How about using that one?"],
				['M', 'That will work. But we still need a computer.'],
				[
					'W',
					"I'll ask the technical support team for a laptop. Could you write a schedule for his first week?"
				],
				['M', "No problem. I'll finish it by tomorrow morning."]
			],
			scriptKo: [
				'배 선생님, 새 인턴이 다음 주 월요일에 출근하는데, 책상도 컴퓨터도 아직 준비하지 못했어요.',
				'맞아요. 창문 옆에 빈 책상이 있어요. 그걸 쓰는 게 어때요?',
				'그러면 되겠네요. 그런데 컴퓨터가 아직 필요해요.',
				'제가 기술 지원팀에 노트북을 요청할게요. 인턴의 첫 주 일정표를 작성해 주시겠어요?',
				'그럼요. 내일 아침까지 끝낼게요.'
			],
			questions: [
				{
					id: 'd29-17',
					text: 'What are the speakers mainly discussing?',
					ko: '화자들은 주로 무엇에 대해 이야기하는가?',
					options: [
						'Preparing for a new worker',
						'Moving to a new office',
						'Repairing a computer',
						'Planning a business trip'
					],
					optionsKo: ['새 직원 맞을 준비', '새 사무실로 이사', '컴퓨터 수리', '출장 계획'],
					answer: 0,
					why: "남자가 the new intern starts next Monday, but we haven't prepared a desk or a computer for him이라고 했고, 두 사람은 인턴이 쓸 책상과 컴퓨터, 첫 주 일정을 준비하는 이야기를 합니다."
				},
				{
					id: 'd29-18',
					text: 'What does the woman suggest?',
					ko: '여자는 무엇을 제안하는가?',
					options: [
						'Buying a new desk',
						'Using an available desk',
						'Hiring another intern',
						'Opening a window'
					],
					optionsKo: ['새 책상 사기', '비어 있는 책상 쓰기', '인턴을 한 명 더 뽑기', '창문 열기'],
					answer: 1,
					why: "여자가 There's an empty desk next to the window. How about using that one?이라고 제안했습니다. empty가 보기에서 available로 바뀌었습니다."
				},
				{
					id: 'd29-19',
					text: 'What does the woman ask the man to do?',
					ko: '여자는 남자에게 무엇을 해 달라고 요청하는가?',
					options: [
						'Contact the technical support team',
						'Order a laptop',
						'Meet the intern on Monday',
						'Prepare a schedule'
					],
					optionsKo: [
						'기술 지원팀에 연락한다',
						'노트북을 주문한다',
						'월요일에 인턴을 만난다',
						'일정표를 준비한다'
					],
					answer: 3,
					why: '여자가 Could you write a schedule for his first week?라고 요청했습니다. write가 보기에서 Prepare로 바뀌었습니다. 기술 지원팀에 연락하는 것은 여자가 하겠다고 한 일입니다.'
				}
			],
			vocab: [
				['intern', '인턴'],
				['prepare', '준비하다'],
				['empty', '비어 있는'],
				['technical support team', '기술 지원팀'],
				['laptop', '노트북 컴퓨터']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 뉴스와 방송 듣기',
			blocks: [
				{
					type: 'p',
					text: '라디오에서 나오는 **교통 방송, 일기 예보, 지역 뉴스**입니다. 진행자 한 사람이 소식을 전합니다.'
				},
				{
					type: 'box',
					title: '방송의 흐름',
					items: [
						'**무슨 소식인지** — This is your morning traffic report. / Here is the local news.',
						'**세부 내용** — 어디에서, 언제, 왜 일어난 일인지',
						'**권고나 다음 순서** — We recommend ~ / Drivers should ~ / Stay tuned for ~'
					]
				},
				{
					type: 'table',
					head: ['방송', '자주 들리는 말'],
					rows: [
						['교통 방송', 'traffic, highway, lane, delay, take ~ instead'],
						['일기 예보', 'forecast, sunny, rain, temperature, umbrella'],
						['지역 뉴스', 'city, officials, residents, open, new service']
					]
				},
				{
					type: 'table',
					head: ['질문', '답이 나오는 곳'],
					rows: [
						['What is the broadcast mainly about?', '첫 부분'],
						['What does the speaker recommend?', '뒷부분 (We recommend ~)'],
						['What will listeners hear next?', '마지막 문장 (Stay tuned for ~)']
					]
				},
				{
					type: 'tip',
					text: '**Stay tuned for ~**는 "채널을 고정해 주세요, 다음은 ~입니다"라는 뜻입니다. 이 말 뒤에 다음 순서가 나옵니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '교통 방송',
			script: [
				['M', 'This is Owen Hart with your morning traffic report on Radio 99.'],
				[
					'M',
					"Traffic is very slow on Highway 7 right now. A large truck lost its load of boxes near exit 12, and two lanes are closed. Crews expect to clear the road by nine o'clock."
				],
				[
					'M',
					'If you are driving downtown, we recommend taking River Road instead. It will save you about twenty minutes.'
				],
				['M', 'Stay tuned for the weather forecast, coming up next.']
			],
			scriptKo: [
				'라디오 99 아침 교통 방송의 오언 하트입니다.',
				'지금 7번 고속도로는 차가 매우 느리게 움직이고 있습니다. 대형 트럭이 12번 출구 근처에서 싣고 있던 상자들을 떨어뜨려 두 개 차선이 막혀 있습니다. 작업반은 9시까지 도로를 치울 것으로 보고 있습니다.',
				'시내로 가시는 분은 대신 리버 로드를 이용하시기를 권합니다. 20분 정도 아낄 수 있습니다.',
				'채널을 고정해 주세요. 다음은 일기 예보입니다.'
			],
			questions: [
				{
					id: 'd29-20',
					text: 'What is causing the traffic delay?',
					ko: '교통 지연의 원인은 무엇인가?',
					options: ['Road painting', 'Heavy rain', 'Boxes that fell from a truck', 'A city parade'],
					optionsKo: ['도로 도색 작업', '폭우', '트럭에서 떨어진 상자들', '시내 행진'],
					answer: 2,
					why: 'A large truck lost its load of boxes near exit 12, and two lanes are closed라고 했습니다. lost its load of boxes가 보기에서 Boxes that fell from a truck으로 바뀌었습니다.'
				},
				{
					id: 'd29-21',
					text: 'What does the speaker recommend?',
					ko: '화자는 무엇을 권하는가?',
					options: [
						'Using a different road',
						'Leaving home earlier',
						'Taking the subway',
						'Driving slowly near exit 12'
					],
					optionsKo: [
						'다른 길 이용하기',
						'집에서 더 일찍 출발하기',
						'지하철 타기',
						'12번 출구 근처에서 천천히 운전하기'
					],
					answer: 0,
					why: 'we recommend taking River Road instead라고 했습니다. taking River Road instead가 보기에서 Using a different road로 바뀌었습니다.'
				},
				{
					id: 'd29-22',
					text: 'What will listeners hear next?',
					ko: '청자들은 다음에 무엇을 듣게 되는가?',
					options: ['A sports report', 'An interview', 'Some music', 'A weather report'],
					optionsKo: ['스포츠 소식', '인터뷰', '음악', '일기 예보'],
					answer: 3,
					why: 'Stay tuned for the weather forecast, coming up next라고 했습니다. weather forecast가 보기에서 weather report로 바뀌었습니다.'
				}
			],
			vocab: [
				['traffic report', '교통 방송'],
				['load', '짐'],
				['lane', '차선'],
				['clear the road', '도로를 치우다'],
				['instead', '대신'],
				['stay tuned', '채널을 고정하다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '지역 뉴스',
			script: [
				['W', "Good evening. I'm Grace Moon, and this is the Westfield evening news."],
				[
					'W',
					'Starting next Monday, the city will offer a bicycle sharing service. Two hundred bicycles will be available at twenty stations around the downtown area.'
				],
				[
					'W',
					'Riders can borrow a bicycle for one dollar per hour. The first thirty minutes will be free during the opening week.'
				],
				[
					'W',
					'To use the service, you need to sign up on the city Web site. Officials advise residents to do this before Monday, because the first day will be very busy.'
				]
			],
			scriptKo: [
				'안녕하십니까. 웨스트필드 저녁 뉴스의 그레이스 문입니다.',
				'다음 주 월요일부터 시에서 자전거 공유 서비스를 제공합니다. 시내 곳곳의 대여소 20곳에 자전거 200대가 마련됩니다.',
				'이용자는 시간당 1달러에 자전거를 빌릴 수 있습니다. 개시 첫 주에는 처음 30분이 무료입니다.',
				'서비스를 이용하려면 시 웹사이트에서 가입해야 합니다. 첫날은 매우 붐빌 것이므로 시 관계자들은 월요일 전에 가입하시기를 권합니다.'
			],
			questions: [
				{
					id: 'd29-23',
					text: 'What is the news report mainly about?',
					ko: '뉴스 보도는 주로 무엇에 관한 것인가?',
					options: [
						'A new bus route',
						'A bicycle rental service',
						'A bicycle race downtown',
						'A road closure'
					],
					optionsKo: ['새 버스 노선', '자전거 대여 서비스', '시내 자전거 경주', '도로 폐쇄'],
					answer: 1,
					why: 'the city will offer a bicycle sharing service라고 했고, Riders can borrow a bicycle for one dollar per hour라고 했습니다. bicycle sharing service가 보기에서 bicycle rental service로 바뀌었습니다.'
				},
				{
					id: 'd29-24',
					text: 'What will be free during the opening week?',
					ko: '개시 첫 주에는 무엇이 무료인가?',
					options: [
						'The first half hour of use',
						'A bicycle helmet',
						'Parking at the stations',
						'A city map'
					],
					optionsKo: ['처음 30분 이용', '자전거 헬멧', '대여소 주차', '시내 지도'],
					answer: 0,
					why: 'The first thirty minutes will be free during the opening week라고 했습니다. thirty minutes가 보기에서 half hour로 바뀌었습니다.'
				},
				{
					id: 'd29-25',
					text: 'What are residents advised to do before Monday?',
					ko: '주민들은 월요일 전에 무엇을 하라는 권고를 받는가?',
					options: ['Buy a helmet', 'Visit a station', 'Pay one dollar', 'Register online'],
					optionsKo: ['헬멧을 산다', '대여소를 방문한다', '1달러를 낸다', '온라인으로 가입한다'],
					answer: 3,
					why: 'you need to sign up on the city Web site라고 한 뒤 Officials advise residents to do this before Monday라고 했습니다. sign up on the city Web site가 보기에서 Register online으로 바뀌었습니다.'
				}
			],
			vocab: [
				['bicycle sharing service', '자전거 공유 서비스'],
				['available', '이용할 수 있는'],
				['borrow', '빌리다'],
				['sign up', '가입하다, 신청하다'],
				['official', '관계자, 공무원'],
				['resident', '주민']
			]
		}
	]
} satisfies DayContent;
