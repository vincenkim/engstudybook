import type { DayContent } from '../schema';

export default {
	goals: [
		'모르는 문제를 붙잡지 않고 25문항을 15분 안에 푼다',
		'Part 3·4는 듣기 전에 문제 세 개를 먼저 읽는다',
		'Part 6·7에서 근거 문장을 찾은 뒤에 답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			tag: '모의고사 안내',
			section: 'RC',
			title: '미니 모의고사 2: 쇼핑과 고객 서비스',
			blocks: [
				{
					type: 'p',
					text: '2회차도 **실제 시험 순서**대로 25문항을 풉니다. 구성은 1회차와 같고, 배경은 쇼핑과 고객 서비스입니다. 매장, 주문, 배송, 할인에 관한 말이 많이 나옵니다.'
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
						'첫 화면의 설정에서 **채점 방식**이 "다 풀고 채점"으로 되어 있는지 확인합니다. "바로 채점"이면 바꾸고 시작합니다.',
						'권장 시간은 **약 15분**입니다. 듣기 11문항에 6분, 읽기 14문항에 9분 정도를 씁니다.',
						'Part 3·4는 음성을 틀기 전에 문제 세 개를 먼저 읽습니다.',
						'Part 5는 한 문제에 20초를 넘기지 않습니다. 아낀 시간은 Part 7에 씁니다.'
					]
				},
				{
					type: 'box',
					title: '끝난 뒤에',
					items: [
						'마지막 화면에서 채점한 뒤 "틀린 문제만 다시 풀기"로 ==틀린 문제만== 한 번 더 풉니다.',
						'파트별 점수를 1회차와 비교해 어느 파트가 약한지 확인합니다.'
					]
				},
				{
					type: 'tip',
					text: '틀린 문제는 이유를 나누어 보세요. **단어를 몰랐는지, 시간이 모자랐는지, 근거 문장을 못 찾았는지**에 따라 복습할 곳이 달라집니다.'
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd38-01',
			script: 'How much is the shipping fee for this order?',
			options: ['By express mail.', 'In about three days.', 'Five dollars for standard delivery.'],
			answer: 2,
			ko: '이 주문의 배송비는 얼마인가요?',
			optionsKo: ['빠른우편으로요.', '사흘쯤 뒤에요.', '일반 배송은 5달러예요.'],
			why: 'How much로 가격을 물었으므로 금액으로 답한 (C)가 정답입니다.',
			notes: ['방법 — How에 대한 답', '기간 — How long에 대한 답', '금액 (정답)'],
			vocab: [
				['shipping fee', '배송비'],
				['express mail', '빠른우편'],
				['standard delivery', '일반 배송']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd38-02',
			script: "Where can I find the men's shoes?",
			options: ['Yes, they fit well.', "Sorry, I don't work here.", 'A pair of sneakers.'],
			answer: 1,
			ko: '남성용 신발은 어디에 있나요?',
			optionsKo: ['네, 잘 맞아요.', '죄송하지만 저는 여기 직원이 아니에요.', '운동화 한 켤레요.'],
			why: '장소를 말하지 않고 "여기서 일하지 않는다", 즉 자신은 모른다고 돌려 말한 (B)가 정답입니다.',
			notes: [
				'Yes로 시작 — 의문사 질문의 답이 될 수 없음',
				'모른다는 뜻의 응답 (정답)',
				'shoes에서 떠오르는 sneakers — 위치를 말하지 않음'
			],
			vocab: [
				['fit', '(크기가) 맞다'],
				['a pair of', '한 켤레의'],
				['sneakers', '운동화']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd38-03',
			script: "This coupon can be used today, can't it?",
			options: [
				'Sorry, it expired yesterday.',
				'Two cups of coffee, please.',
				'I used to live there.'
			],
			answer: 0,
			ko: '이 쿠폰은 오늘 쓸 수 있죠, 그렇지 않나요?',
			optionsKo: [
				'죄송하지만 어제 만료됐어요.',
				'커피 두 잔 주세요.',
				'저는 예전에 거기 살았어요.'
			],
			why: '쿠폰을 쓸 수 있느냐는 확인에 "어제 만료됐다", 즉 쓸 수 없다고 답한 (A)가 정답입니다. 부가 의문문도 보통 의문문과 똑같이 답합니다.',
			notes: [
				'쓸 수 없다는 응답 (정답)',
				'coupon과 발음이 비슷한 cups',
				'used 반복 — used to는 "예전에 ~했다"'
			],
			vocab: [
				['coupon', '쿠폰'],
				['expire', '만료되다'],
				['used to', '예전에 ~했다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd38-04',
			script: 'Should I wrap this as a gift, or do you want a plain bag?',
			options: ['Yes, it was a nice gift.', 'He wrapped it yesterday.', 'A bag is fine, thanks.'],
			answer: 2,
			ko: '선물용으로 포장해 드릴까요, 아니면 일반 봉투에 담아 드릴까요?',
			optionsKo: ['네, 좋은 선물이었어요.', '그가 어제 포장했어요.', '봉투면 돼요, 고마워요.'],
			why: 'or로 둘 중 하나를 고르게 하는 질문입니다. 둘 중 봉투를 고른 (C)가 정답입니다.',
			notes: [
				'Yes로 시작 — 선택 의문문의 답이 될 수 없음',
				'wrap 반복 — 지난 일을 말함',
				'하나를 고름 (정답)'
			],
			vocab: [
				['wrap', '포장하다'],
				['gift', '선물'],
				['plain', '무늬 없는, 평범한']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd38-05',
			script: 'This is the last one we have in stock.',
			options: ['It lasted all weekend.', "Then I'll take it.", 'At the stock market.'],
			answer: 1,
			ko: '이것이 저희 재고로 남은 마지막 하나입니다.',
			optionsKo: ['주말 내내 계속됐어요.', '그럼 그걸로 살게요.', '주식 시장에서요.'],
			why: '마지막 남은 물건이라는 말에 "그럼 사겠다"고 답한 (B)가 정답입니다.',
			notes: [
				'last(마지막)와 철자가 같은 last(계속되다)',
				'사겠다는 응답 (정답)',
				'stock(재고)과 철자가 같은 stock(주식)'
			],
			vocab: [
				['in stock', '재고가 있는'],
				['last', '마지막의, 계속되다'],
				["I'll take it", '그걸로 살게요']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '전화 대화',
			script: [
				[
					'M',
					'Hello. I ordered a gray rug from your Web site last week, but a blue one arrived today.'
				],
				['W', "I'm very sorry about that. Could you tell me your order number?"],
				['M', 'Sure. It is seven, four, two, nine.'],
				[
					'W',
					"Thank you. I'll send the gray rug tomorrow morning. A driver will pick up the blue one on Friday, so you don't need to pay anything."
				],
				['M', "That's good. Should I be at home on Friday?"],
				['W', 'No. Just leave the box outside your front door.']
			],
			scriptKo: [
				'안녕하세요. 지난주에 그쪽 웹사이트에서 회색 러그를 주문했는데 오늘 파란색이 왔어요.',
				'정말 죄송합니다. 주문 번호를 알려 주시겠어요?',
				'네. 7, 4, 2, 9입니다.',
				'감사합니다. 회색 러그는 내일 아침에 보내 드리겠습니다. 파란색은 금요일에 기사가 가지러 가니 비용은 내지 않으셔도 됩니다.',
				'다행이네요. 금요일에 제가 집에 있어야 하나요?',
				'아니요. 상자를 현관문 밖에 두시기만 하면 됩니다.'
			],
			questions: [
				{
					id: 'd38-06',
					text: 'Why is the man calling?',
					ko: '남자는 왜 전화하고 있는가?',
					options: [
						'He received the wrong item.',
						'He wants to cancel an order.',
						'His package arrived late.',
						'He forgot his order number.'
					],
					optionsKo: [
						'잘못된 물건을 받았다.',
						'주문을 취소하고 싶어 한다.',
						'소포가 늦게 도착했다.',
						'주문 번호를 잊어버렸다.'
					],
					answer: 0,
					why: '남자가 I ordered a gray rug from your Web site last week, but a blue one arrived today라고 했습니다. 주문한 것과 다른 색이 왔다는 말이 보기에서 the wrong item으로 바뀌었습니다.'
				},
				{
					id: 'd38-07',
					text: 'What does the woman say she will do tomorrow?',
					ko: '여자는 내일 무엇을 하겠다고 말하는가?',
					options: [
						'Give the man a refund',
						"Visit the man's home",
						'Send the correct item',
						'Call the delivery driver'
					],
					optionsKo: [
						'남자에게 환불해 준다',
						'남자의 집을 방문한다',
						'맞는 물건을 보낸다',
						'배송 기사에게 전화한다'
					],
					answer: 2,
					why: "여자가 I'll send the gray rug tomorrow morning이라고 했습니다. 남자가 원래 주문한 the gray rug가 보기에서 the correct item으로 바뀌었습니다."
				},
				{
					id: 'd38-08',
					text: 'What does the woman tell the man to do on Friday?',
					ko: '여자는 남자에게 금요일에 무엇을 하라고 말하는가?',
					options: [
						'Pay for shipping',
						'Put a box outside his door',
						'Stay at home all day',
						'Take the rug to a store'
					],
					optionsKo: [
						'배송비를 낸다',
						'상자를 문밖에 둔다',
						'하루 종일 집에 있는다',
						'러그를 매장에 가져간다'
					],
					answer: 1,
					why: '여자가 마지막에 Just leave the box outside your front door라고 했습니다. leave가 보기에서 Put으로 바뀌었습니다. 집에 있어야 하느냐는 질문에는 No라고 답했습니다.'
				}
			],
			vocab: [
				['rug', '러그, 깔개'],
				['arrive', '도착하다'],
				['order number', '주문 번호'],
				['pick up', '가지러 가다'],
				['front door', '현관문']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '매장 안내 방송',
			script: [
				['W', 'Good afternoon, Westgate Market shoppers. We have a special event for you today.'],
				[
					'W',
					"At three o'clock, a local chef will show you how to make a quick chicken salad. The event will take place next to the vegetable section."
				],
				[
					'W',
					'It is free, and everyone who watches will receive a coupon for two dollars off any salad dressing.'
				],
				['W', 'Seats are limited, so please come ten minutes early. Thank you.']
			],
			scriptKo: [
				'웨스트게이트 마켓 고객 여러분, 안녕하세요. 오늘 여러분을 위한 특별 행사가 있습니다.',
				'3시에 지역 요리사가 간단한 닭고기 샐러드 만드는 법을 보여 드립니다. 행사는 채소 코너 옆에서 열립니다.',
				'무료이며, 보시는 모든 분께 샐러드드레싱 2달러 할인 쿠폰을 드립니다.',
				'좌석이 한정되어 있으니 10분 일찍 와 주세요. 감사합니다.'
			],
			questions: [
				{
					id: 'd38-09',
					text: 'What event is being announced?',
					ko: '어떤 행사를 안내하고 있는가?',
					options: [
						'A store opening',
						'A cooking demonstration',
						'A book signing',
						'A music performance'
					],
					optionsKo: ['매장 개업', '요리 시연', '책 사인회', '음악 공연'],
					answer: 1,
					why: 'a local chef will show you how to make a quick chicken salad라고 했습니다. 요리사가 만드는 법을 보여 주는 행사가 보기에서 A cooking demonstration으로 바뀌었습니다.'
				},
				{
					id: 'd38-10',
					text: 'What will people who watch the event receive?',
					ko: '행사를 보는 사람들은 무엇을 받는가?',
					options: ['A free chicken salad', 'A recipe book', 'A shopping bag', 'A discount coupon'],
					optionsKo: ['무료 닭고기 샐러드', '요리책', '장바구니', '할인 쿠폰'],
					answer: 3,
					why: 'everyone who watches will receive a coupon for two dollars off any salad dressing이라고 했습니다. a coupon for two dollars off가 보기에서 A discount coupon으로 바뀌었습니다. 무료인 것은 행사 참가입니다.'
				},
				{
					id: 'd38-11',
					text: 'Why are the listeners asked to come early?',
					ko: '청자들은 왜 일찍 오라는 말을 듣는가?',
					options: [
						'There are not many seats.',
						'The store closes at three.',
						'The chef has to leave soon.',
						'The parking lot is small.'
					],
					optionsKo: [
						'좌석이 많지 않다.',
						'매장이 3시에 문을 닫는다.',
						'요리사가 곧 떠나야 한다.',
						'주차장이 작다.'
					],
					answer: 0,
					why: 'Seats are limited, so please come ten minutes early라고 했습니다. limited가 보기에서 not many로 바뀌었습니다.'
				}
			],
			vocab: [
				['special event', '특별 행사'],
				['local', '지역의'],
				['take place', '열리다'],
				['coupon', '쿠폰'],
				['limited', '한정된'],
				['demonstration', '시연']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-12',
			text: 'You will receive a ------- by e-mail after you place your order.',
			options: ['confirm', 'confirmed', 'confirming', 'confirmation'],
			answer: 3,
			ko: '주문하신 뒤에 이메일로 확인서를 받게 됩니다.',
			why: '관사 a 뒤이고 동사 receive의 목적어 자리이므로 명사가 와야 합니다. -tion으로 끝나는 confirmation이 정답입니다.',
			notes: [
				'동사',
				'과거분사 — 뒤에 꾸밀 명사가 없음',
				'-ing형 — 뒤에 꾸밀 명사가 없음',
				'명사 (정답)'
			],
			vocab: [
				['confirmation', '확인서, 확인'],
				['receive', '받다'],
				['place an order', '주문하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-13',
			text: 'The new supermarket has a wide ------- of fresh fruit and vegetables.',
			options: ['selection', 'direction', 'condition', 'position'],
			answer: 0,
			ko: '새 슈퍼마켓에는 신선한 과일과 채소가 다양하게 갖춰져 있습니다.',
			why: '보기가 모두 명사이고 뜻이 다른 어휘 문제입니다. a wide selection of는 "다양하게 갖춰진 ~"이라는 표현으로, 슈퍼마켓의 과일과 채소에 어울립니다.',
			notes: ['선택할 수 있는 종류 (정답)', '방향', '상태', '위치'],
			vocab: [
				['a wide selection of', '다양하게 갖춰진'],
				['fresh', '신선한'],
				['vegetable', '채소']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-14',
			text: 'Ms. Marino ------- two winter coats from our online store last Friday.',
			options: ['orders', 'will order', 'ordered', 'has ordered'],
			answer: 2,
			ko: '마리노 씨는 지난주 금요일에 저희 온라인 매장에서 겨울 코트 두 벌을 주문했습니다.',
			why: '문장 끝의 last Friday(지난주 금요일)는 과거의 한 시점입니다. 과거 시제 ordered가 정답입니다. last가 붙은 표현은 현재완료와 함께 쓰지 않습니다.',
			notes: [
				'현재 — last Friday와 맞지 않음',
				'미래 — last Friday와 맞지 않음',
				'과거 (정답)',
				'현재완료 — last와 함께 쓰지 않음'
			],
			vocab: [
				['order', '주문하다'],
				['winter coat', '겨울 코트'],
				['online store', '온라인 매장']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-15',
			text: 'The customer decided ------- the blue sweater instead of the red one.',
			options: ['buy', 'to buy', 'buying', 'bought'],
			answer: 1,
			ko: '그 고객은 빨간 스웨터 대신 파란 스웨터를 사기로 결정했습니다.',
			why: '빈칸 앞 동사 decided는 뒤에 to부정사를 쓰는 동사입니다. 따라서 to buy가 정답입니다. decide to + 동사원형은 "~하기로 결정하다"입니다.',
			notes: [
				'동사원형 — 동사 decided가 이미 있음',
				'to부정사 (정답)',
				'동명사 — decide 뒤에 쓰지 않음',
				'과거형 — 동사 decided가 이미 있음'
			],
			vocab: [
				['decide to', '~하기로 결정하다'],
				['instead of', '~ 대신에'],
				['sweater', '스웨터']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-16',
			text: 'Our call center ------- more than two hundred phone calls every day.',
			options: ['visits', 'arrives', 'handles', 'spends'],
			answer: 2,
			ko: '저희 콜센터는 매일 200통이 넘는 전화를 처리합니다.',
			why: '보기가 모두 동사이고 뜻이 다른 어휘 문제입니다. 빈칸 뒤 목적어 phone calls(전화)는 콜센터가 "처리하는" 것이므로 handles가 정답입니다.',
			notes: [
				'방문하다 — 전화를 방문할 수는 없음',
				'도착하다 — 목적어를 쓰지 못함',
				'처리하다 (정답)',
				'(돈·시간을) 쓰다'
			],
			vocab: [
				['call center', '콜센터'],
				['handle', '처리하다'],
				['more than', '~보다 많이']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-17',
			text: 'This brand of coffee is ------- than the one on the top shelf.',
			options: ['cheap', 'cheaply', 'cheapest', 'cheaper'],
			answer: 3,
			ko: '이 브랜드의 커피는 맨 위 선반에 있는 것보다 쌉니다.',
			why: '빈칸 뒤에 than이 있습니다. than 앞에는 비교급이 오므로 -er이 붙은 cheaper가 정답입니다.',
			notes: ['원급', '부사', '최상급 — the와 함께 씀', '비교급 (정답)'],
			vocab: [
				['brand', '브랜드, 상표'],
				['cheaper than', '~보다 싼'],
				['top shelf', '맨 위 선반']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd38-18',
			text: 'The clerks at the new shoe store were very ------- and answered all my questions.',
			options: ['helpful', 'expensive', 'empty', 'broken'],
			answer: 0,
			ko: '새 신발 가게의 점원들은 큰 도움이 되었고 제 질문에 모두 답해 주었습니다.',
			why: '보기가 모두 형용사이고 뜻이 다른 어휘 문제입니다. 주어가 The clerks(점원들)이고 뒤에 "질문에 모두 답해 주었다"는 내용이 이어지므로 helpful(도움이 되는)이 정답입니다.',
			notes: [
				'도움이 되는 (정답)',
				'비싼 — 물건에 씀',
				'비어 있는 — 장소나 용기에 씀',
				'고장 난 — 물건에 씀'
			],
			vocab: [
				['clerk', '점원'],
				['helpful', '도움이 되는'],
				['answer a question', '질문에 답하다']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '편지',
			passages: [
				{
					kind: '편지',
					body: [
						'Dear Ms. Albright,',
						'Welcome to the Sunhill Kitchen Members Club. Your new membership card is {1} in this letter.',
						'As a member, you will get five percent off every purchase in our stores. {2}',
						'Please bring your card each time you shop. The cashier cannot give you the discount {3} it.',
						'If you lose your card, please visit any Sunhill Kitchen store. Our staff will be {4} to make a new one for you.',
						'Sincerely,',
						'Nora Kim, Customer Service Manager'
					],
					ko: [
						'올브라이트 선생님께,',
						'선힐 키친 회원 클럽에 오신 것을 환영합니다. 새 회원 카드가 이 편지에 들어 있습니다.',
						'회원이 되셨으므로 저희 매장에서 구매할 때마다 5퍼센트를 할인받으실 수 있습니다. 생일이 있는 달에는 무료 선물도 받으실 것입니다.',
						'쇼핑하실 때마다 카드를 가져와 주세요. 카드가 없으면 계산원이 할인해 드릴 수 없습니다.',
						'카드를 잃어버리시면 선힐 키친 매장 어디든 방문해 주세요. 직원이 기꺼이 새 카드를 만들어 드리겠습니다.',
						'고객 서비스 관리자 노라 김 드림'
					]
				}
			],
			questions: [
				{
					id: 'd38-19',
					options: ['include', 'included', 'including', 'inclusion'],
					answer: 1,
					why: '회원 카드는 편지에 "포함된" 것입니다. is 뒤에서 수동태를 만드는 과거분사 included가 정답입니다.',
					notes: [
						'동사원형 — is 뒤에 올 수 없음',
						'과거분사 (정답)',
						'-ing형 — 카드가 무언가를 포함하는 것이 아님',
						'명사 — 카드가 "포함"이라는 말이 되어 어색함'
					]
				},
				{
					id: 'd38-20',
					options: [
						'The parking lot is behind the building.',
						'We are sorry that your order arrived late.',
						'You will also receive a free gift in the month of your birthday.',
						'Your order was canceled yesterday.'
					],
					optionsKo: [
						'주차장은 건물 뒤에 있습니다.',
						'주문하신 물건이 늦게 도착해 죄송합니다.',
						'생일이 있는 달에는 무료 선물도 받으실 것입니다.',
						'고객님의 주문은 어제 취소되었습니다.'
					],
					answer: 2,
					why: '앞 문장에서 회원이 받는 혜택으로 5퍼센트 할인을 말했습니다. also(또한)를 써서 혜택을 하나 더 알려 주는 (C)가 이어집니다. 나머지는 주차장, 배송, 주문 취소에 관한 말이어서 회원 혜택과 이어지지 않습니다.'
				},
				{
					id: 'd38-21',
					options: ['without', 'unless', 'although', 'because'],
					answer: 0,
					why: '빈칸 뒤에 대명사 it(카드) 하나만 있습니다. 명사나 대명사 앞에는 전치사가 오므로, 보기 중 하나뿐인 전치사 without(~ 없이)이 정답입니다.',
					notes: [
						'전치사, ~ 없이 (정답)',
						'접속사 — 뒤에 주어 + 동사가 와야 함',
						'접속사 — 뒤에 주어 + 동사가 와야 함',
						'접속사 — 뒤에 주어 + 동사가 와야 함'
					]
				},
				{
					id: 'd38-22',
					options: ['happily', 'happiness', 'happen', 'happy'],
					answer: 3,
					why: 'be동사 뒤에서 주어 Our staff의 상태를 설명하는 자리이므로 형용사 happy가 정답입니다. be happy to + 동사원형은 "기꺼이 ~하다"입니다.',
					notes: [
						'부사 — be동사 뒤에서 주어를 설명하지 못함',
						'명사 — 직원이 "행복"이라는 말이 되어 어색함',
						'동사, 일어나다 — 모양만 비슷한 다른 단어',
						'형용사 (정답)'
					]
				}
			],
			vocab: [
				['membership card', '회원 카드'],
				['purchase', '구매'],
				['each time', '~할 때마다'],
				['cashier', '계산원'],
				['discount', '할인'],
				['be happy to', '기꺼이 ~하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'Parkside Mall — Customer Service Desk Is Moving',
					body: [
						'Starting Monday, April 7, the customer service desk will be on the first floor, next to the main entrance. The desk on the third floor will close on Sunday, April 6.',
						'At the new desk, you can return or exchange items, pick up online orders, and buy gift cards. You can also get a free map of the mall there.',
						'The desk will be open from 10 A.M. to 7 P.M. every day. Please ask any mall employee if you cannot find it.'
					],
					ko: [
						'4월 7일 월요일부터 고객 서비스 데스크는 1층 정문 옆에 있습니다. 3층 데스크는 4월 6일 일요일에 문을 닫습니다.',
						'새 데스크에서는 물건을 반품하거나 교환하고, 온라인 주문품을 찾아가고, 상품권을 살 수 있습니다. 쇼핑몰 안내 지도도 무료로 받을 수 있습니다.',
						'데스크는 매일 오전 10시부터 오후 7시까지 엽니다. 찾기 어려우시면 쇼핑몰 직원 누구에게나 물어보세요.'
					]
				}
			],
			questions: [
				{
					id: 'd38-23',
					text: 'What is the purpose of the notice?',
					ko: '안내문의 목적은 무엇인가?',
					options: [
						'To advertise a spring sale',
						'To introduce a new store',
						'To announce the new location of a desk',
						'To explain a change in closing time'
					],
					optionsKo: [
						'봄 할인 행사를 광고하려고',
						'새 매장을 소개하려고',
						'데스크의 새 위치를 알리려고',
						'폐점 시간 변경을 설명하려고'
					],
					answer: 2,
					why: '제목이 Customer Service Desk Is Moving이고, 첫 문장에서 the customer service desk will be on the first floor(고객 서비스 데스크가 1층에 있게 된다)라고 했습니다.'
				},
				{
					id: 'd38-24',
					text: 'Where will the customer service desk be from April 7?',
					ko: '4월 7일부터 고객 서비스 데스크는 어디에 있는가?',
					options: [
						'On the third floor',
						'Near the main entrance',
						'Inside a gift shop',
						'In the parking area'
					],
					optionsKo: ['3층', '정문 근처', '기념품 가게 안', '주차장'],
					answer: 1,
					why: 'the customer service desk will be on the first floor, next to the main entrance라고 했습니다. next to가 보기에서 Near로 바뀌었습니다. 3층은 4월 6일에 문을 닫는 기존 데스크의 위치입니다.'
				},
				{
					id: 'd38-25',
					text: 'What is NOT mentioned as something customers can do at the new desk?',
					ko: '새 데스크에서 고객이 할 수 있는 일로 언급되지 않은 것은 무엇인가?',
					options: [
						'Return an item',
						'Pick up an online order',
						'Buy a gift card',
						'Have a product repaired'
					],
					optionsKo: [
						'물건을 반품한다',
						'온라인 주문품을 찾아간다',
						'상품권을 산다',
						'제품 수리를 맡긴다'
					],
					answer: 3,
					why: 'you can return or exchange items, pick up online orders, and buy gift cards에서 (A), (B), (C)를 확인할 수 있습니다. 제품 수리에 관한 말은 없습니다.'
				}
			],
			vocab: [
				['customer service desk', '고객 서비스 데스크'],
				['main entrance', '정문'],
				['return', '반품하다'],
				['pick up', '찾아가다'],
				['gift card', '상품권']
			]
		}
	]
} satisfies DayContent;
