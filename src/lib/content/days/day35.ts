import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 기사와 양식에서 필요한 정보를 찾아 읽는다',
		'Part 3에서 자주 틀리는 이유를 알고 시각 자료 문제를 푼다',
		'Part 4에서 자주 틀리는 이유를 알고 화자의 의도 문제를 푼다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '기사 읽는 법',
			blocks: [
				{
					type: 'p',
					text: '기사(article)는 문장이 길고 낯선 이름이 많아 어렵게 느껴집니다. 하지만 쓰는 순서가 정해져 있어서 어디를 읽을지만 알면 됩니다.'
				},
				{
					type: 'box',
					title: '기사의 순서',
					items: [
						'**제목과 첫 문단** — 누가, 무엇을, 언제, 어디서. 주제 문제의 답이 여기 있습니다.',
						'**가운데 문단** — 자세한 내용과 숫자. 세부 정보 문제의 답이 여기 있습니다.',
						'**인용문** — 인물이 한 말은 따옴표(" ") 안에 나오고, 뒤에 said + 이름이 붙습니다.',
						'**마지막 문단** — 앞으로의 계획, 신청·문의 방법.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: '"We plan to hire fifty people," said ==Lena Tran, the store manager==.',
							ko: '"50명을 채용할 계획입니다."라고 매장 관리자 레나 트랜이 말했습니다.',
							note: '이름 뒤 쉼표 다음에 그 사람의 **직책**이 나옵니다. Who is Ms. Tran? 문제의 답입니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '첫 문단 맨 앞의 HARTWELL (May 2) 같은 표시는 기사를 쓴 도시와 날짜입니다. 대문자로 시작하는 낯선 단어는 이름이라고 생각하고 넘어갑니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '양식 읽는 법',
			blocks: [
				{
					type: 'p',
					text: '영수증, 주문서, 일정표, 청구서 같은 양식은 문장이 거의 없습니다. 처음부터 다 읽지 말고 **문제가 묻는 칸**을 찾아 읽습니다.'
				},
				{
					type: 'table',
					head: ['항목', '뜻'],
					rows: [
						['Item / Description', '품목 / 내용'],
						['Quantity', '수량'],
						['Unit price', '단가 (한 개의 값)'],
						['Subtotal', '소계 (배송비·세금을 더하기 전)'],
						['Total / Amount due', '합계 / 내야 할 금액'],
						['Due date', '납부 기한'],
						['Time / Place', '시간 / 장소 (일정표)']
					]
				},
				{
					type: 'box',
					title: '양식 문제 푸는 법',
					items: [
						'표의 **맨 윗줄**을 먼저 읽고 각 칸이 무엇인지 확인합니다.',
						'문제의 핵심 단어(품목, 날짜, 이름)를 표에서 찾아 **같은 줄**의 다른 칸을 읽습니다.',
						'**표 아래의 안내 문장**을 꼭 읽습니다. 할인, 배송, 마감 날짜가 여기 나옵니다.',
						'계산 문제는 대부분 **수량 × 단가**이거나 두 숫자의 차이입니다.'
					]
				},
				{
					type: 'tip',
					text: '단가(Unit price)와 합계(Total)를 바꿔 놓은 보기가 자주 나옵니다. 문제가 한 개의 값을 묻는지 전부의 값을 묻는지 확인합니다.'
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
					title: 'Hartwell Design Company to Try Four-Day Workweek',
					body: [
						'HARTWELL (May 2) — Paper Kite Design, a company in Hartwell, will start a four-day workweek in June. Its 45 employees will work from Monday to Thursday and have Fridays off.',
						'The employees will work nine hours a day instead of eight, and their pay will stay the same. The company will try the plan for six months.',
						'"Our workers are tired, and tired people make mistakes," said Nadia Ruiz, the president of Paper Kite Design. "We think a longer weekend will help them do better work."',
						'In December, the company will ask its employees and customers for their opinions. Then it will decide whether to continue.'
					],
					ko: [
						'하트웰 (5월 2일) — 하트웰의 회사 페이퍼 카이트 디자인이 6월부터 주 4일 근무를 시작합니다. 직원 45명은 월요일부터 목요일까지 일하고 금요일에 쉽니다.',
						'직원들은 하루에 8시간 대신 9시간을 일하고, 급여는 그대로입니다. 회사는 이 계획을 6개월 동안 시험해 봅니다.',
						'"직원들이 지쳐 있고, 지친 사람은 실수를 합니다."라고 페이퍼 카이트 디자인의 나디아 루이스 사장이 말했습니다. "주말이 길어지면 일을 더 잘할 수 있을 것이라고 생각합니다."',
						'12월에 회사는 직원과 고객의 의견을 묻습니다. 그런 다음 계속할지 결정합니다.'
					]
				}
			],
			questions: [
				{
					id: 'd35-01',
					text: 'What does the article mainly discuss?',
					ko: '기사는 주로 무엇을 다루는가?',
					options: [
						'A design contest in Hartwell',
						'A company that is closing',
						'A new work schedule at a company',
						'A national holiday in June'
					],
					optionsKo: [
						'하트웰의 디자인 대회',
						'문을 닫는 회사',
						'한 회사의 새 근무 일정',
						'6월의 국경일'
					],
					answer: 2,
					why: '제목이 Hartwell Design Company to Try Four-Day Workweek이고, 첫 문장에서 will start a four-day workweek in June이라고 했습니다. four-day workweek(주 4일 근무)가 보기에서 A new work schedule로 바뀌었습니다.'
				},
				{
					id: 'd35-02',
					text: 'What does the article say about the employees?',
					ko: '기사는 직원들에 대해 무엇이라고 말하는가?',
					options: [
						'Their pay will not change.',
						'They will work eight hours a day.',
						'They will have Mondays off.',
						'They will move to a new office.'
					],
					optionsKo: [
						'급여가 바뀌지 않는다.',
						'하루에 8시간 일한다.',
						'월요일에 쉰다.',
						'새 사무실로 옮긴다.'
					],
					answer: 0,
					why: 'their pay will stay the same(급여는 그대로이다)이라고 했습니다. stay the same이 보기에서 not change로 바뀌었습니다. 하루 근무는 9시간(nine hours)이고, 쉬는 날은 금요일(Fridays off)입니다.'
				},
				{
					id: 'd35-03',
					text: 'Who is Ms. Ruiz?',
					ko: '루이스 씨는 누구인가?',
					options: [
						'A customer of the company',
						'A newspaper reporter',
						'A city official',
						'The head of a company'
					],
					optionsKo: ['회사의 고객', '신문 기자', '시 공무원', '회사의 대표'],
					answer: 3,
					why: '인용문 뒤에 said Nadia Ruiz, the president of Paper Kite Design이라고 했습니다. president(사장)가 보기에서 head of a company로 바뀌었습니다.'
				}
			],
			vocab: [
				['workweek', '한 주의 근무일'],
				['have ~ off', '~에 쉬다'],
				['instead of', '~ 대신에'],
				['pay', '급여'],
				['opinion', '의견']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '주문서',
			passages: [
				{
					kind: '주문서',
					title: 'Morrow Paint and Tools — Order Confirmation',
					head: [
						['Customer', 'Ms. Yuri Shin'],
						['Order date', 'September 9']
					],
					body: [
						'Thank you for shopping at Morrow Paint and Tools. Your order is listed below.',
						{
							table: {
								head: ['Item', 'Quantity', 'Unit price', 'Total'],
								rows: [
									['White wall paint (can)', '4', '$20', '$80'],
									['Paint roller', '3', '$10', '$30'],
									['Ladder', '1', '$80', '$80'],
									['Subtotal', '', '', '$190'],
									['Delivery', '', '', '$10'],
									['Amount due', '', '', '$200']
								]
							}
						},
						'Delivery is free when the subtotal is $250 or more. Your order will arrive on September 12. To change your order, please call us at 555-0164 by 5 P.M. on September 10.'
					],
					ko: [
						'모로 페인트 앤드 툴스에서 구매해 주셔서 감사합니다. 주문 내용은 아래와 같습니다.',
						'흰색 벽 페인트(통) 4개, 단가 20달러, 합계 80달러 / 페인트 롤러 3개, 단가 10달러, 합계 30달러 / 사다리 1개, 단가 80달러, 합계 80달러',
						'소계 190달러, 배송비 10달러, 내야 할 금액 200달러',
						'소계가 250달러 이상이면 배송이 무료입니다. 주문하신 물건은 9월 12일에 도착합니다. 주문을 변경하시려면 9월 10일 오후 5시까지 555-0164로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd35-04',
					text: 'How much does one paint roller cost?',
					ko: '페인트 롤러 한 개의 값은 얼마인가?',
					options: ['$10', '$20', '$30', '$80'],
					optionsKo: ['10달러', '20달러', '30달러', '80달러'],
					answer: 0,
					why: '표의 Paint roller 줄에서 Unit price(단가) 칸을 봅니다. $10입니다. $30는 세 개를 산 합계(Total)입니다.'
				},
				{
					id: 'd35-05',
					text: 'How much more would Ms. Shin need to spend to get free delivery?',
					ko: '신 씨는 얼마를 더 써야 무료 배송을 받을 수 있는가?',
					options: ['$10', '$50', '$60', '$250'],
					optionsKo: ['10달러', '50달러', '60달러', '250달러'],
					answer: 2,
					why: '표 아래에 Delivery is free when the subtotal is $250 or more라고 했습니다. Subtotal이 $190이므로 250 − 190 = 60달러가 더 필요합니다. $50는 배송비를 더한 $200로 계산한 값입니다.'
				},
				{
					id: 'd35-06',
					text: 'What is the last day Ms. Shin can change her order?',
					ko: '신 씨가 주문을 변경할 수 있는 마지막 날은 언제인가?',
					options: ['September 9', 'September 10', 'September 11', 'September 12'],
					optionsKo: ['9월 9일', '9월 10일', '9월 11일', '9월 12일'],
					answer: 1,
					why: 'To change your order, please call us at 555-0164 by 5 P.M. on September 10이라고 했습니다. September 9는 주문한 날, September 12는 물건이 도착하는 날입니다.'
				}
			],
			vocab: [
				['quantity', '수량'],
				['unit price', '단가'],
				['subtotal', '소계'],
				['amount due', '내야 할 금액'],
				['ladder', '사다리']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '기사',
			passages: [
				{
					kind: '기사',
					title: 'Local Toy Maker Wins Golden Block Award',
					body: [
						'SEOUL (October 8) — Tiny Oak Toys, a small company in Seoul, won the Golden Block Award this week. The award is given every year to the best new toy in the country.',
						'The winning product is a wooden train set called Forest Line. Its pieces are made from recycled wood, and children can put them together without any tools.',
						'"We tested the toy with more than 200 families," said Mark Olsen, the head designer at Tiny Oak Toys. "Their ideas made it much better."',
						'Tiny Oak Toys started with three workers in 2015 and now has forty. The company will begin selling Forest Line in Japan next spring.'
					],
					ko: [
						'서울 (10월 8일) — 서울의 작은 회사 타이니 오크 토이즈가 이번 주에 골든 블록상을 받았습니다. 이 상은 해마다 국내 최고의 새 장난감에 주어집니다.',
						'상을 받은 제품은 포레스트 라인이라는 나무 기차 세트입니다. 조각은 재활용 목재로 만들었고, 아이들이 도구 없이 조립할 수 있습니다.',
						'"200곳이 넘는 가정과 함께 장난감을 시험해 보았습니다."라고 타이니 오크 토이즈의 수석 디자이너 마크 올슨이 말했습니다. "그분들의 의견 덕분에 훨씬 좋아졌습니다."',
						'타이니 오크 토이즈는 2015년에 직원 세 명으로 시작했고 지금은 마흔 명이 일합니다. 회사는 내년 봄에 일본에서 포레스트 라인을 판매하기 시작합니다.'
					]
				}
			],
			questions: [
				{
					id: 'd35-07',
					text: 'What is the main topic of the article?',
					ko: '기사의 주제는 무엇인가?',
					options: [
						'A toy store that will close',
						'A new train line in Seoul',
						'A design school for children',
						'A company that received a prize'
					],
					optionsKo: [
						'문을 닫는 장난감 가게',
						'서울의 새 기차 노선',
						'어린이를 위한 디자인 학교',
						'상을 받은 회사'
					],
					answer: 3,
					why: '제목이 Local Toy Maker Wins Golden Block Award이고, 첫 문장에서 won the Golden Block Award라고 했습니다. won the Golden Block Award가 보기에서 received a prize로 바뀌었습니다.'
				},
				{
					id: 'd35-08',
					text: 'What is indicated about Forest Line?',
					ko: '포레스트 라인에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It is made of plastic.',
						'It uses recycled materials.',
						'It needs tools to put together.',
						'It is sold only in Japan.'
					],
					optionsKo: [
						'플라스틱으로 만들었다.',
						'재활용 재료를 쓴다.',
						'조립하려면 도구가 필요하다.',
						'일본에서만 판매된다.'
					],
					answer: 1,
					why: 'Its pieces are made from recycled wood(조각을 재활용 목재로 만들었다)라고 했습니다. recycled wood가 보기에서 recycled materials로 바뀌었습니다. 조립은 도구 없이(without any tools) 할 수 있습니다.'
				},
				{
					id: 'd35-09',
					text: 'What does Tiny Oak Toys plan to do next spring?',
					ko: '타이니 오크 토이즈는 내년 봄에 무엇을 할 계획인가?',
					options: [
						'Sell a product in another country',
						'Hire forty new workers',
						'Open a store in Seoul',
						'Test a toy with families'
					],
					optionsKo: [
						'다른 나라에서 제품을 판매한다',
						'직원 마흔 명을 새로 뽑는다',
						'서울에 매장을 연다',
						'가정과 함께 장난감을 시험한다'
					],
					answer: 0,
					why: '마지막 문장에서 The company will begin selling Forest Line in Japan next spring이라고 했습니다. in Japan이 보기에서 in another country로 바뀌었습니다. forty는 지금의 직원 수입니다.'
				}
			],
			vocab: [
				['win an award', '상을 받다'],
				['wooden', '나무로 만든'],
				['recycled', '재활용한'],
				['put together', '조립하다'],
				['head designer', '수석 디자이너']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '일정표',
			passages: [
				{
					kind: '일정표',
					title: 'Visit Schedule — Mr. Kenji Mori (Thursday, June 12)',
					body: [
						'Mr. Kenji Mori from our Osaka office will visit the Busan factory next Thursday. Staff members on the list should check their times below.',
						{
							table: {
								head: ['Time', 'Activity', 'Place', 'Led by'],
								rows: [
									['9:30–10:00 A.M.', 'Welcome', 'Lobby', 'Ms. Bora Cha'],
									['10:00–11:30 A.M.', 'Factory tour', 'Building 2', 'Mr. Paul Becker'],
									['11:30 A.M.–12:30 P.M.', 'Product presentation', 'Room 301', 'Ms. Bora Cha'],
									['12:30–2:00 P.M.', 'Lunch', 'Garden Restaurant', '—'],
									['2:00–3:30 P.M.', 'Sales meeting', 'Room 301', 'Mr. Jiho Yoo']
								]
							}
						},
						'Safety shoes and helmets are required for the factory tour. Mr. Becker will hand them out at the entrance to Building 2. After the sales meeting, a taxi will take Mr. Mori to the airport at 4:00 P.M.'
					],
					ko: [
						'오사카 사무소의 모리 겐지 씨가 다음 주 목요일에 부산 공장을 방문합니다. 명단에 있는 직원은 아래에서 자기 시간을 확인해 주세요.',
						'오전 9시 30분~10시 환영 인사, 로비, 차보라 씨 / 오전 10시~11시 30분 공장 견학, 2동, 폴 베커 씨 / 오전 11시 30분~오후 12시 30분 제품 발표, 301호, 차보라 씨 / 오후 12시 30분~2시 점심, 가든 레스토랑 / 오후 2시~3시 30분 영업 회의, 301호, 유지호 씨',
						'공장 견학에는 안전화와 안전모가 필요합니다. 베커 씨가 2동 입구에서 나누어 줍니다. 영업 회의가 끝난 뒤 오후 4시에 택시가 모리 씨를 공항으로 모셔다드립니다.'
					]
				}
			],
			questions: [
				{
					id: 'd35-10',
					text: 'What is indicated about Ms. Cha?',
					ko: '차 씨에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'She will give a tour of the factory.',
						'She will travel to the airport.',
						'She works at Garden Restaurant.',
						'She will lead two of the activities.'
					],
					optionsKo: [
						'공장 견학을 안내한다.',
						'공항으로 이동한다.',
						'가든 레스토랑에서 일한다.',
						'활동 두 가지를 진행한다.'
					],
					answer: 3,
					why: '표의 Led by(진행자) 칸에 Ms. Bora Cha가 두 번 나옵니다. Welcome과 Product presentation입니다. Factory tour는 베커 씨가 맡습니다.'
				},
				{
					id: 'd35-11',
					text: 'How long will the factory tour last?',
					ko: '공장 견학은 얼마 동안 진행되는가?',
					options: ['30 minutes', 'One hour', '90 minutes', 'Two hours'],
					optionsKo: ['30분', '1시간', '90분', '2시간'],
					answer: 2,
					why: '표에서 Factory tour의 Time 칸은 10:00–11:30 A.M.입니다. 10시부터 11시 30분까지이므로 90분입니다.'
				},
				{
					id: 'd35-12',
					text: 'What will Mr. Becker hand out?',
					ko: '베커 씨는 무엇을 나누어 주는가?',
					options: ['Lunch tickets', 'Safety equipment', 'Product samples', 'Visitor name tags'],
					optionsKo: ['점심 식권', '안전 장비', '제품 견본', '방문자 이름표'],
					answer: 1,
					why: 'Safety shoes and helmets are required for the factory tour. Mr. Becker will hand them out이라고 했습니다. Safety shoes and helmets가 보기에서 Safety equipment로 바뀌었습니다.'
				},
				{
					id: 'd35-13',
					text: 'What will happen at 4:00 P.M.?',
					ko: '오후 4시에 무슨 일이 있는가?',
					options: [
						'The sales meeting will end.',
						'A presentation will begin.',
						'Mr. Mori will leave for the airport.',
						'Mr. Mori will arrive at the factory.'
					],
					optionsKo: [
						'영업 회의가 끝난다.',
						'발표가 시작된다.',
						'모리 씨가 공항으로 떠난다.',
						'모리 씨가 공장에 도착한다.'
					],
					answer: 2,
					why: 'a taxi will take Mr. Mori to the airport at 4:00 P.M.이라고 했습니다. Sales meeting은 표에서 3시 30분에 끝납니다.'
				}
			],
			vocab: [
				['factory tour', '공장 견학'],
				['presentation', '발표'],
				['be required', '꼭 필요하다'],
				['hand out', '나누어 주다'],
				['entrance', '입구']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 자주 틀리는 이유와 대처법',
			blocks: [
				{
					type: 'p',
					text: 'Part 3에서 틀리는 이유는 대부분 아래 세 가지입니다. 이유를 알면 고칠 수 있습니다.'
				},
				{
					type: 'box',
					title: '틀리는 이유 → 대처법',
					items: [
						'**들린 단어가 있는 보기를 고른다** → 정답은 대개 다른 말로 바꾼 보기입니다. 단어가 아니라 뜻을 맞춥니다.',
						'**남자의 말과 여자의 말을 섞는다** → 문제의 man / woman에 표시하고 그 사람의 말에서 답을 찾습니다.',
						'**놓친 문제를 계속 생각한다** → 답을 못 들었으면 하나를 고르고 바로 다음 문제를 봅니다.'
					]
				},
				{
					type: 'tip',
					text: '시각 자료 문제(Look at the graphic.)는 대화를 듣기 전에 표를 먼저 봅니다. 정답이 되는 항목의 이름은 대화에서 말해 주지 않습니다. 대화에 나오는 것은 **표의 다른 칸**(가격, 시간, 개수)입니다.'
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
					"Hello. I'd like to order a cake. We're having a welcome party for our new interns this Friday."
				],
				['W', 'How nice. Here are our cake sizes. How many people will be at the party?'],
				['M', 'About twenty. Most of the sales team is coming.'],
				['W', 'Then this one is the right size. A bigger cake would be too much.'],
				['M', 'Great. Can I pick it up on Friday morning?'],
				['W', 'Sure. We open at eight, and you can pay when you come.']
			],
			scriptKo: [
				'안녕하세요. 케이크를 주문하고 싶습니다. 이번 주 금요일에 새 인턴들을 위한 환영회를 하거든요.',
				'좋으시겠어요. 여기 케이크 크기입니다. 환영회에 몇 분이 오시나요?',
				'스무 명쯤이요. 영업팀 대부분이 옵니다.',
				'그러면 이것이 알맞은 크기입니다. 더 큰 케이크는 너무 많을 거예요.',
				'좋습니다. 금요일 아침에 찾으러 와도 되나요?',
				'물론입니다. 8시에 문을 열고, 오실 때 계산하시면 됩니다.'
			],
			graphic: {
				title: 'Cake Sizes',
				head: ['Size', 'Serves', 'Price'],
				rows: [
					['Small', '6 people', '$20'],
					['Medium', '12 people', '$32'],
					['Large', '20 people', '$45'],
					['Extra large', '30 people', '$60']
				]
			},
			questions: [
				{
					id: 'd35-14',
					text: 'Why is the man ordering a cake?',
					ko: '남자는 왜 케이크를 주문하는가?',
					options: [
						'To celebrate a birthday',
						'To thank a customer',
						'To open a new store',
						'To welcome new staff members'
					],
					optionsKo: [
						'생일을 축하하려고',
						'고객에게 감사하려고',
						'새 매장을 열려고',
						'새 직원들을 환영하려고'
					],
					answer: 3,
					why: "남자가 첫 말에서 We're having a welcome party for our new interns this Friday라고 했습니다. new interns가 보기에서 new staff members로 바뀌었습니다."
				},
				{
					id: 'd35-15',
					text: 'Look at the graphic. Which cake size will the man most likely order?',
					ko: '시각 자료를 보시오. 남자는 어떤 크기의 케이크를 주문할 것 같은가?',
					options: ['Small', 'Medium', 'Large', 'Extra large'],
					optionsKo: ['소', '중', '대', '특대'],
					answer: 2,
					why: '여자가 How many people will be at the party?라고 묻자 남자가 About twenty라고 했습니다. 표의 Serves(먹을 수 있는 인원) 칸에서 20 people은 Large입니다. 여자가 A bigger cake would be too much이라고 했으므로 Extra large는 아닙니다.'
				},
				{
					id: 'd35-16',
					text: 'What does the woman say about the payment?',
					ko: '여자는 결제에 대해 무엇이라고 말하는가?',
					options: [
						'It can be made at pickup.',
						'It must be made today.',
						'It was already made online.',
						'It will be sent to the sales team.'
					],
					optionsKo: [
						'찾으러 올 때 내면 된다.',
						'오늘 내야 한다.',
						'이미 온라인으로 냈다.',
						'영업팀으로 청구된다.'
					],
					answer: 0,
					why: '여자가 마지막에 you can pay when you come이라고 했습니다. 금요일 아침에 케이크를 찾으러 올 때 내면 된다는 뜻이고, 보기에서 at pickup으로 바뀌었습니다.'
				}
			],
			vocab: [
				['order', '주문하다'],
				['welcome party', '환영회'],
				['intern', '인턴'],
				['the right size', '알맞은 크기'],
				['pick up', '찾아가다']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'M',
					'Good afternoon. I need to send this package to Singapore. How soon can it get there?'
				],
				[
					'W',
					'Regular mail takes about ten days. Express mail takes three days, but it costs twenty dollars more.'
				],
				['M', "Ten days is too long. It's a birthday gift, and the birthday is next Friday."],
				['W', 'Then I recommend express mail. What is inside the package?'],
				['M', 'Just two books and a scarf.'],
				['W', 'All right. Please write the items and their prices on this form.']
			],
			scriptKo: [
				'안녕하세요. 이 소포를 싱가포르로 보내야 하는데요. 얼마나 빨리 도착할 수 있나요?',
				'일반 우편은 열흘쯤 걸립니다. 빠른우편은 사흘이 걸리지만 20달러가 더 듭니다.',
				'열흘은 너무 길어요. 생일 선물인데 생일이 다음 주 금요일이거든요.',
				'그러면 빠른우편을 추천합니다. 소포 안에 무엇이 들어 있나요?',
				'책 두 권과 스카프 하나뿐이에요.',
				'알겠습니다. 이 양식에 물품과 가격을 적어 주세요.'
			],
			questions: [
				{
					id: 'd35-17',
					text: 'Who most likely is the woman?',
					ko: '여자는 누구일 것 같은가?',
					options: [
						'A bookstore owner',
						'A post office clerk',
						'A travel agent',
						'A gift shop worker'
					],
					optionsKo: ['서점 주인', '우체국 직원', '여행사 직원', '선물 가게 직원'],
					answer: 1,
					why: '남자가 send this package(이 소포를 보내다)라고 하자 여자가 Regular mail과 Express mail의 기간과 요금을 설명합니다. 우편물을 접수하는 우체국 직원입니다.'
				},
				{
					id: 'd35-18',
					text: 'What does the woman recommend?',
					ko: '여자는 무엇을 추천하는가?',
					options: [
						'Using a faster service',
						'Sending the gift next Friday',
						'Buying a smaller box',
						'Paying by credit card'
					],
					optionsKo: [
						'더 빠른 서비스를 이용하는 것',
						'다음 주 금요일에 선물을 보내는 것',
						'더 작은 상자를 사는 것',
						'신용 카드로 결제하는 것'
					],
					answer: 0,
					why: '여자가 Then I recommend express mail이라고 했습니다. Express mail은 사흘(three days)이 걸려 열흘 걸리는 Regular mail보다 빠릅니다. 보기에서 a faster service로 바뀌었습니다.'
				},
				{
					id: 'd35-19',
					text: 'What does the woman ask the man to do?',
					ko: '여자는 남자에게 무엇을 하라고 요청하는가?',
					options: [
						'Open the package',
						'Show a receipt',
						'Come back in three days',
						'List the items on a form'
					],
					optionsKo: [
						'소포를 연다',
						'영수증을 보여 준다',
						'사흘 뒤에 다시 온다',
						'양식에 물품을 적는다'
					],
					answer: 3,
					why: '여자가 마지막에 Please write the items and their prices on this form이라고 했습니다. write the items가 보기에서 List the items로 바뀌었습니다.'
				}
			],
			vocab: [
				['package', '소포'],
				['regular mail', '일반 우편'],
				['express mail', '빠른우편'],
				['recommend', '추천하다'],
				['item', '물품']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 자주 틀리는 이유와 대처법',
			blocks: [
				{
					type: 'p',
					text: 'Part 4는 한 사람이 길게 말하기 때문에 한 번 놓치면 따라가기 어렵습니다. 자주 틀리는 이유 세 가지와 대처법입니다.'
				},
				{
					type: 'box',
					title: '틀리는 이유 → 대처법',
					items: [
						'**첫 문장을 놓친다** → 화자, 청자, 장소는 첫 두 문장에 나옵니다. 담화가 시작되기 전에 문제를 미리 읽어 둡니다.',
						'**숫자가 여러 개 나와 헷갈린다** → 문제가 무엇의 숫자를 묻는지(시간, 가격, 날짜) 먼저 확인하고 그 숫자만 기다립니다.',
						'**마지막 문장을 흘려듣는다** → 요청과 다음에 할 일은 끝에 나옵니다. Please ~, I will ~ 을 끝까지 듣습니다.'
					]
				},
				{
					type: 'tip',
					text: '화자의 의도 문제는 인용된 말의 **바로 앞 문장**이 근거입니다. 화자가 그 말을 하기 전에 무슨 이야기를 하고 있었는지 봅니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발췌',
			script: [
				['W', 'Thanks for staying, everyone. I have one more thing to share.'],
				[
					'W',
					'Starting Monday, there will be new recycling bins on every floor. Blue bins are for paper, and green bins are for bottles and cans. Last month, our building paid a fine because the trash was mixed.'
				],
				[
					'W',
					'I know everyone is busy. Checking the color takes two seconds. So please use the right bin.'
				],
				[
					'W',
					'Also, the small bins under your desks will be taken away this Friday. Please empty them before you go home that day.'
				]
			],
			scriptKo: [
				'남아 주셔서 감사합니다, 여러분. 한 가지 더 알려 드릴 것이 있습니다.',
				'월요일부터 모든 층에 새 재활용 수거함이 놓입니다. 파란 통은 종이, 초록 통은 병과 캔을 넣는 곳입니다. 지난달에 쓰레기가 섞여 있어서 우리 건물이 벌금을 냈습니다.',
				'모두 바쁘다는 것을 압니다. 색깔을 확인하는 데는 2초면 됩니다. 그러니 알맞은 통을 이용해 주세요.',
				'또한 책상 밑에 있는 작은 쓰레기통은 이번 주 금요일에 치웁니다. 그날 퇴근하기 전에 비워 주세요.'
			],
			questions: [
				{
					id: 'd35-20',
					text: 'What is the speaker mainly talking about?',
					ko: '화자는 주로 무엇에 관해 말하고 있는가?',
					options: [
						'A cleaning schedule',
						'A new way to sort waste',
						'A building repair',
						'A change in office hours'
					],
					optionsKo: ['청소 일정', '쓰레기를 분류하는 새 방법', '건물 수리', '근무 시간 변경'],
					answer: 1,
					why: 'there will be new recycling bins on every floor라고 한 뒤 색깔별로 무엇을 넣는지 설명합니다. 쓰레기를 나누어 버리는 새 방법에 관한 이야기입니다.'
				},
				{
					id: 'd35-21',
					text: 'What does the speaker mean when she says, "Checking the color takes two seconds"?',
					ko: '화자가 "Checking the color takes two seconds"라고 말한 것은 무슨 뜻인가?',
					options: [
						'The meeting will finish soon.',
						'The bins are close to the desks.',
						'The fine was paid quickly.',
						'The new rule is easy to follow.'
					],
					optionsKo: [
						'회의가 곧 끝난다.',
						'수거함이 책상에서 가깝다.',
						'벌금을 빨리 냈다.',
						'새 규칙은 지키기 쉽다.'
					],
					answer: 3,
					why: '바로 앞에서 I know everyone is busy(모두 바쁜 것을 안다)라고 했습니다. 색깔을 확인하는 데 2초면 되니 바빠도 쉽게 지킬 수 있다는 뜻입니다.'
				},
				{
					id: 'd35-22',
					text: 'What are the listeners asked to do on Friday?',
					ko: '청자들은 금요일에 무엇을 하라고 요청받는가?',
					options: [
						'Empty their own trash bins',
						'Pay a small fine',
						'Bring bottles from home',
						'Move to another floor'
					],
					optionsKo: [
						'자기 쓰레기통을 비운다',
						'적은 벌금을 낸다',
						'집에서 병을 가져온다',
						'다른 층으로 옮긴다'
					],
					answer: 0,
					why: 'the small bins under your desks will be taken away this Friday라고 한 뒤 Please empty them before you go home that day라고 했습니다. 책상 밑의 작은 쓰레기통을 금요일 퇴근 전에 비워야 합니다.'
				}
			],
			vocab: [
				['recycling bin', '재활용 수거함'],
				['fine', '벌금'],
				['mixed', '섞인'],
				['take away', '치우다'],
				['empty', '비우다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '일기 예보',
			script: [
				['M', 'Good morning. This is Ryan Park with the Lake City weather report.'],
				[
					'M',
					"It is sunny and warm right now, but that will change this afternoon. Heavy rain will start at about three o'clock and continue until midnight. If you are going out today, take an umbrella with you."
				],
				['M', 'Tomorrow will be dry but much colder, with strong winds in the morning.'],
				['M', 'Stay tuned for the sports news after a short commercial break.']
			],
			scriptKo: [
				'안녕하세요. 레이크 시티 일기 예보의 라이언 박입니다.',
				'지금은 맑고 따뜻하지만 오늘 오후에는 달라집니다. 3시쯤 많은 비가 내리기 시작해 자정까지 이어집니다. 오늘 외출하신다면 우산을 챙기세요.',
				'내일은 비가 오지 않지만 훨씬 춥고, 아침에 바람이 강하게 붑니다.',
				'잠시 광고를 들으신 뒤 스포츠 뉴스가 이어지니 채널을 고정해 주세요.'
			],
			questions: [
				{
					id: 'd35-23',
					text: 'What will the weather be like this afternoon?',
					ko: '오늘 오후 날씨는 어떠한가?',
					options: ['Sunny', 'Windy', 'Rainy', 'Snowy'],
					optionsKo: ['맑다', '바람이 분다', '비가 온다', '눈이 온다'],
					answer: 2,
					why: "that will change this afternoon이라고 한 뒤 Heavy rain will start at about three o'clock이라고 했습니다. 맑은 것은 지금(right now)이고, 바람이 강한 것은 내일 아침입니다."
				},
				{
					id: 'd35-24',
					text: 'What does the speaker suggest listeners do?',
					ko: '화자는 청자들에게 무엇을 하라고 권하는가?',
					options: ['Carry an umbrella', 'Stay at home', 'Wear a warm coat', 'Leave work early'],
					optionsKo: [
						'우산을 가지고 다닌다',
						'집에 머문다',
						'따뜻한 외투를 입는다',
						'일찍 퇴근한다'
					],
					answer: 0,
					why: 'If you are going out today, take an umbrella with you라고 했습니다. take가 보기에서 Carry로 바뀌었습니다.'
				},
				{
					id: 'd35-25',
					text: 'What will listeners most likely hear next?',
					ko: '청자들은 다음에 무엇을 들을 것 같은가?',
					options: ['Sports news', 'A traffic report', 'A music program', 'Some advertisements'],
					optionsKo: ['스포츠 뉴스', '교통 정보', '음악 프로그램', '광고'],
					answer: 3,
					why: 'Stay tuned for the sports news after a short commercial break라고 했습니다. 스포츠 뉴스는 광고(commercial break)가 끝난 뒤에 나오므로, 바로 다음에 듣는 것은 광고입니다.'
				}
			],
			vocab: [
				['weather report', '일기 예보'],
				['heavy rain', '많은 비, 폭우'],
				['continue', '계속되다'],
				['stay tuned', '채널을 고정하다'],
				['commercial break', '광고 시간']
			]
		}
	]
} satisfies DayContent;
