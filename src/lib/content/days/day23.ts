import type { DayContent } from '../schema';

export default {
	goals: [
		'모양이나 뜻이 비슷한 단어 쌍을 구분한다',
		'광고·안내문의 흐름을 알고 Part 6 빈칸을 푼다',
		'비슷한 발음 함정을 피해 Part 2 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '헷갈리는 어휘는 이렇게 구분합니다',
			blocks: [
				{
					type: 'p',
					text: '보기에 **모양이나 뜻이 비슷한 두 단어**가 함께 나오는 문제입니다. 뜻을 대충 알면 틀립니다. 두 단어가 **무엇이 다른지**를 알아야 합니다.'
				},
				{
					type: 'box',
					title: '구분하는 기준 세 가지',
					items: [
						'**목적어가 있는가** — rise(오르다)는 목적어가 없고, raise(~을 올리다)는 목적어가 있습니다.',
						'**어떤 품사 자리인가** — advice는 명사, advise는 동사입니다.',
						'**뜻이 문맥과 맞는가** — hard는 "열심히", hardly는 "거의 ~않다"입니다.'
					]
				},
				{
					type: 'table',
					head: ['헷갈리는 쌍', '뜻', '구분법'],
					rows: [
						['rise / raise', '오르다 / ~을 올리다', 'Prices ==rise==. / ==raise== prices'],
						['lend / borrow', '빌려주다 / 빌리다', '==lend== A to B / ==borrow== A from B'],
						[
							'remind / remember',
							'(남에게) 알려 주다 / 기억하다',
							'==remind== + 사람 + to / ==remember== to'
						],
						[
							'advice / advise',
							'조언 (명사) / 조언하다 (동사)',
							'give ==advice== / ==advise== + 사람 + to'
						],
						[
							'affect / effect',
							'영향을 주다 (동사) / 영향 (명사)',
							'==affect== sales / have an ==effect== on sales'
						]
					]
				},
				{
					type: 'tip',
					text: 'lend와 borrow는 물건이 움직이는 **방향**이 반대입니다. 뒤에 to가 있으면 lend, from이 있으면 borrow입니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '철자가 비슷한 형용사와 부사',
			blocks: [
				{
					type: 'p',
					text: '형용사에 -ly를 붙이면 보통 부사가 됩니다. 그런데 아래 단어는 -ly가 붙으면 **뜻이 완전히 달라집니다.**'
				},
				{
					type: 'table',
					head: ['헷갈리는 쌍', '뜻', '예'],
					rows: [
						['late / lately', '늦은, 늦게 / 최근에', 'arrive ==late== / have been busy ==lately=='],
						['hard / hardly', '어려운, 열심히 / 거의 ~않다', 'work ==hard== / can ==hardly== see'],
						['near / nearly', '가까운, 가까이 / 거의', '==near== the station / ==nearly== finished']
					]
				},
				{
					type: 'p',
					text: '철자 한두 글자 차이로 뜻이 달라지는 형용사도 있습니다.'
				},
				{
					type: 'table',
					head: ['헷갈리는 쌍', '뜻', '예'],
					rows: [
						[
							'personal / personnel',
							'개인의 / 인사, 직원',
							'==personal== items / ==personnel== department'
						],
						[
							'economic / economical',
							'경제의 / 절약되는',
							'==economic== growth / an ==economical== car'
						]
					]
				},
				{
					type: 'box',
					title: '자리로 확인하기',
					items: [
						'lately는 주로 **have + 과거분사**와 함께 씁니다.',
						'hardly는 **can / could 뒤, 동사 앞**에 옵니다.',
						'nearly는 숫자나 동사 앞에서 "거의"라는 뜻을 더합니다. — ==nearly== 300 people'
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The city plans to ------- bus fares by ten percent in July.',
			options: ['rise', 'raise', 'rose', 'risen'],
			answer: 1,
			ko: '시는 7월에 버스 요금을 10퍼센트 올릴 계획입니다.',
			steps: [
				'보기에 rise와 raise가 함께 있습니다. 모양이 비슷한 두 단어를 구분하는 문제입니다.',
				'to 뒤는 동사원형 자리입니다. rose와 risen을 지우면 **rise**와 **raise**가 남습니다.',
				'빈칸 뒤에 **bus fares**(버스 요금)라는 목적어가 있습니다. 목적어를 갖는 동사는 raise입니다.',
				'"버스 요금을 올리다"라는 뜻이 됩니다. 정답은 (B) **raise**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Yoon asked her manager for ------- about the job offer.',
			options: ['advise', 'advised', 'advice', 'advises'],
			answer: 2,
			ko: '윤 씨는 일자리 제안에 대해 관리자에게 조언을 구했습니다.',
			steps: [
				'보기에 advice와 advise가 함께 있습니다. 철자 한 글자 차이로 품사가 달라지는 쌍입니다.',
				'빈칸은 전치사 **for** 뒤입니다. 전치사 뒤는 명사 자리입니다.',
				'명사는 -ce로 끝나는 advice이고, advise는 동사입니다. 정답은 (C) **advice**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-01',
			text: 'Hotel prices in the city usually ------- during the summer festival.',
			options: ['raise', 'rise', 'raises', 'rising'],
			answer: 1,
			ko: '그 도시의 호텔 요금은 여름 축제 기간에 대개 오릅니다.',
			why: '빈칸 뒤에 목적어가 없습니다. 목적어 없이 "오르다"라는 뜻으로 쓰는 rise가 정답입니다. raise는 "~을 올리다"로 목적어가 필요합니다.',
			notes: [
				'~을 올리다 — 목적어가 필요함',
				'오르다 (정답)',
				'~을 올리다 — 목적어가 필요하고 복수 주어와 맞지 않음',
				'-ing형 — 동사가 될 수 없음'
			],
			vocab: [
				['rise', '오르다'],
				['raise', '~을 올리다'],
				['festival', '축제']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-02',
			text: 'Ms. Tran asked if she could ------- a projector from the sales team.',
			options: ['lend', 'lent', 'borrow', 'borrowed'],
			answer: 2,
			ko: '쩐 씨는 영업팀에서 프로젝터를 빌릴 수 있는지 물었습니다.',
			why: 'could 뒤는 동사원형 자리입니다. 뒤에 from the sales team(영업팀에서)이 있으므로 "빌리다"라는 뜻의 borrow가 정답입니다.',
			notes: [
				'빌려주다 — from과 맞지 않음',
				'lend의 과거형 — could 뒤는 동사원형',
				'빌리다 (정답)',
				'borrow의 과거형 — could 뒤는 동사원형'
			],
			vocab: [
				['borrow A from B', 'B에게서 A를 빌리다'],
				['lend', '빌려주다'],
				['sales team', '영업팀']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-03',
			text: 'We ------- all visitors to arrive thirty minutes before the tour begins.',
			options: ['advise', 'advice', 'adviser', 'advisable'],
			answer: 0,
			ko: '저희는 모든 방문객께 투어가 시작되기 30분 전에 도착하시라고 권합니다.',
			why: '주어 We와 목적어 all visitors 사이는 동사 자리입니다. 동사는 -se로 끝나는 advise입니다. advice는 명사입니다.',
			notes: ['동사 — 권하다 (정답)', '명사 — 조언', '명사 — 조언자', '형용사 — 바람직한'],
			vocab: [
				['advise A to', 'A에게 ~하라고 권하다'],
				['advice', '조언'],
				['tour', '투어, 견학']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-04',
			text: 'Mr. Jin works in the ------- department and handles all new hires.',
			options: ['personal', 'person', 'personally', 'personnel'],
			answer: 3,
			ko: '진 씨는 인사부에서 일하며 신규 채용을 모두 담당합니다.',
			why: '신규 채용을 담당하는 부서는 인사부입니다. personnel department는 "인사부"입니다. personal은 "개인의"라는 뜻입니다.',
			notes: [
				'개인의 — 부서 이름으로 맞지 않음',
				'명사 — 사람',
				'부사 — 개인적으로',
				'인사, 직원 (정답)'
			],
			vocab: [
				['personnel department', '인사부'],
				['personal', '개인의'],
				['handle', '담당하다'],
				['new hire', '신입 사원']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-05',
			text: 'This small car is very ------- because it uses little fuel.',
			options: ['economy', 'economic', 'economically', 'economical'],
			answer: 3,
			ko: '이 소형차는 연료를 적게 써서 매우 경제적입니다.',
			why: '연료를 적게 쓴다는 것은 "돈이 절약된다"는 뜻입니다. 이 뜻의 형용사는 economical입니다. economic은 "경제의"라는 뜻입니다.',
			notes: [
				'명사 — 경제',
				'경제의 — 뜻이 맞지 않음',
				'부사 — is 뒤에서 주어를 설명할 수 없음',
				'절약되는 (정답)'
			],
			vocab: [
				['economical', '절약되는, 경제적인'],
				['economic', '경제의'],
				['fuel', '연료']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-06',
			text: 'Sales of our winter coats have been slow -------.',
			options: ['late', 'lately', 'later', 'latest'],
			answer: 1,
			ko: '요즘 저희 겨울 코트 판매가 부진합니다.',
			why: 'have been은 과거부터 지금까지 이어지는 일을 말합니다. 이 시제와 함께 "최근에"라는 뜻을 더하는 lately가 정답입니다. late는 "늦게"입니다.',
			notes: [
				'늦게 — 뜻이 맞지 않음',
				'최근에 (정답)',
				'나중에 — have been과 맞지 않음',
				'형용사 — 최신의'
			],
			vocab: [
				['lately', '최근에'],
				['slow', '(판매가) 부진한'],
				['sales', '판매, 매출']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-07',
			text: "The speaker's voice was so quiet that we could ------- hear him.",
			options: ['hardly', 'hard', 'harder', 'hardness'],
			answer: 0,
			ko: '연사의 목소리가 너무 작아서 우리는 그의 말을 거의 듣지 못했습니다.',
			why: '목소리가 작았다고 했으므로 "거의 듣지 못했다"는 뜻이 되어야 합니다. hardly는 "거의 ~않다"라는 뜻으로 could와 동사 사이에 씁니다.',
			notes: [
				'거의 ~않다 (정답)',
				'열심히 — 뜻이 맞지 않고 동사 앞에 오지 않음',
				'비교급',
				'명사 — 단단함'
			],
			vocab: [
				['hardly', '거의 ~않다'],
				['speaker', '연사'],
				['so ~ that', '너무 ~해서 …하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-08',
			text: 'Online orders have ------- doubled since the new Web site opened.',
			options: ['near', 'nearby', 'nearly', 'nearest'],
			answer: 2,
			ko: '새 웹사이트를 연 뒤로 온라인 주문이 거의 두 배가 되었습니다.',
			why: 'have와 doubled 사이에서 동사를 꾸미는 자리입니다. "거의"라는 뜻의 부사 nearly가 정답입니다. near는 거리가 "가까운"이라는 뜻입니다.',
			notes: ['가까운, 가까이 — 거리를 말함', '근처의, 근처에', '거의 (정답)', '가장 가까운'],
			vocab: [
				['nearly', '거의'],
				['double', '두 배가 되다'],
				['since', '~ 이후로']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-09',
			text: 'Please ------- Mr. Okada to bring the samples to the meeting.',
			options: ['remember', 'remembered', 'remind', 'reminder'],
			answer: 2,
			ko: '오카다 씨에게 회의에 견본을 가져오라고 다시 알려 주세요.',
			why: '빈칸 뒤에 사람(Mr. Okada)과 to bring이 이어집니다. remind + 사람 + to는 "~에게 …하라고 알려 주다"입니다. remember는 이렇게 쓰지 않습니다.',
			notes: [
				'기억하다 — 뒤에 사람 + to가 오지 않음',
				'과거형 — Please 뒤는 동사원형',
				'알려 주다 (정답)',
				'명사 — 알림'
			],
			vocab: [
				['remind A to', 'A에게 ~하라고 알려 주다'],
				['remember', '기억하다'],
				['sample', '견본']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-10',
			text: 'The television advertisement had a strong ------- on ticket sales.',
			options: ['effect', 'affect', 'effective', 'effectively'],
			answer: 0,
			ko: '그 텔레비전 광고는 입장권 판매에 큰 영향을 주었습니다.',
			why: '관사 a와 형용사 strong 뒤는 명사 자리입니다. "영향"이라는 명사는 effect이고, have an effect on은 "~에 영향을 주다"입니다.',
			notes: ['명사 — 영향 (정답)', '동사 — 영향을 주다', '형용사 — 효과적인', '부사 — 효과적으로'],
			vocab: [
				['have an effect on', '~에 영향을 주다'],
				['affect', '영향을 주다'],
				['advertisement', '광고']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-11',
			text: 'The city library will ------- laptops to visitors for up to three hours.',
			options: ['borrow', 'borrows', 'lends', 'lend'],
			answer: 3,
			ko: '시립 도서관은 방문객에게 최대 3시간까지 노트북을 빌려줍니다.',
			why: 'will 뒤는 동사원형 자리입니다. 뒤에 to visitors(방문객에게)가 있으므로 "빌려주다"라는 뜻의 lend가 정답입니다.',
			notes: [
				'빌리다 — to visitors와 맞지 않음',
				'-s가 붙은 동사 — will 뒤는 동사원형',
				'-s가 붙은 동사 — will 뒤는 동사원형',
				'빌려주다 (정답)'
			],
			vocab: [
				['lend A to B', 'B에게 A를 빌려주다'],
				['up to', '최대 ~까지'],
				['visitor', '방문객']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd23-12',
			text: 'The 8:15 train arrived twenty minutes ------- this morning.',
			options: ['lately', 'late', 'lateness', 'latest'],
			answer: 1,
			ko: '8시 15분 기차는 오늘 아침에 20분 늦게 도착했습니다.',
			why: 'twenty minutes late는 "20분 늦게"입니다. late는 부사로 쓸 때도 모양이 같습니다. lately는 "최근에"라는 다른 뜻입니다.',
			notes: ['최근에 — 뜻이 맞지 않음', '늦게 (정답)', '명사 — 지각', '형용사 — 최신의'],
			vocab: [
				['arrive late', '늦게 도착하다'],
				['lately', '최근에'],
				['twenty minutes late', '20분 늦게']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '광고와 안내문은 순서가 정해져 있습니다',
			blocks: [
				{
					type: 'p',
					text: '광고와 안내문은 **정해진 순서**로 정보를 줍니다. 순서를 알면 빈칸이 어떤 내용의 자리인지 미리 알 수 있습니다.'
				},
				{
					type: 'table',
					head: ['순서', '내용', '자주 쓰는 표현'],
					rows: [
						[
							'① 무엇을',
							'상품, 서비스, 행사 소개',
							'Are you looking for ~? / We are pleased to announce ~'
						],
						[
							'② 특징·혜택',
							'장점, 할인, 무료 제공',
							'a wide range of ~ / at no extra cost / free of charge'
						],
						[
							'③ 기간·방법',
							'언제까지, 어떻게 신청하는지',
							'until June 30 / for a limited time / To sign up, ~'
						],
						['④ 연락처', '문의할 곳', 'For more details, call ~ / visit our Web site']
					]
				},
				{
					type: 'box',
					title: 'Part 6에서 보는 법',
					items: [
						'**문장 삽입** — 빈칸이 흐름의 어느 단계인지 봅니다. 특징을 말하는 자리에는 특징을 덧붙이는 문장이 옵니다.',
						'**시제** — 행사나 할인의 **날짜**를 기준으로 고릅니다. 앞으로 열리면 will, 이미 일어났으면 과거입니다.',
						'**어휘** — 누가 누구에게 하는 일인지 확인합니다. 가게가 손님에게 알려 주면 ==remind==, 손님이 스스로 기억하면 ==remember==입니다.'
					]
				},
				{
					type: 'tip',
					text: '문장 삽입 보기에 he, they, this 같은 말이 있으면 앞 문장에 가리킬 대상이 있는지 먼저 확인하세요. 없으면 오답입니다.'
				}
			]
		},
		{
			type: 'set',
			part: 6,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Morning Field — Fresh Vegetables at Your Door',
					body: [
						'Do you want fresh vegetables without going to the market? Morning Field can help. We bring a box of vegetables to your door every Friday.',
						'All of our vegetables are {1} on local farms on the morning of delivery. {2}',
						'Order before March 31 and your first box {3} half price. We will also {4} you by text message one day before each delivery.',
						'You can place an order by phone at 555-0142 or on our Web site.'
					],
					ko: [
						'시장에 가지 않고도 신선한 채소를 받고 싶으십니까? 모닝 필드가 도와드립니다. 매주 금요일에 채소 한 상자를 문 앞까지 가져다 드립니다.',
						'저희 채소는 모두 배송 당일 아침에 지역 농장에서 수확합니다. 그래서 일주일 넘게 신선합니다.',
						'3월 31일 전에 주문하시면 첫 상자는 반값입니다. 배송 하루 전에는 문자 메시지로 다시 알려 드립니다.',
						'전화 555-0142나 저희 웹사이트에서 주문하실 수 있습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd23-13',
					options: ['pick', 'picked', 'picking', 'picks'],
					answer: 1,
					why: '채소는 "수확되는" 대상이고 빈칸 뒤에 목적어가 없습니다. are 뒤에서 수동태를 만드는 과거분사 picked가 정답입니다.',
					notes: [
						'동사원형',
						'과거분사 (정답)',
						'-ing형 — 채소가 직접 수확하는 것이 아님',
						'-s가 붙은 동사'
					]
				},
				{
					id: 'd23-14',
					options: [
						'That is why they stay fresh for more than a week.',
						'He has worked on the farm since 2015.',
						'Thank you for returning the box yesterday.',
						'However, the meeting has been canceled.'
					],
					optionsKo: [
						'그래서 일주일 넘게 신선합니다.',
						'그는 2015년부터 그 농장에서 일해 왔습니다.',
						'어제 상자를 돌려주셔서 감사합니다.',
						'그러나 회의는 취소되었습니다.'
					],
					answer: 0,
					why: '앞 문장에서 채소를 배송 당일 아침에 수확한다고 했습니다. 이것을 이유로 삼아 "그래서 오래 신선하다"고 장점을 덧붙이는 (A)가 이어집니다. (B)의 He와 (D)의 the meeting은 앞에 가리키는 말이 없고, (C)는 새 고객을 모으는 광고와 맞지 않습니다.'
				},
				{
					id: 'd23-15',
					options: ['was', 'has been', 'being', 'will be'],
					answer: 3,
					why: '"3월 31일 전에 주문하면"이라는 말 뒤에 앞으로 받을 혜택이 이어집니다. 앞으로의 일이므로 미래 시제 will be가 정답입니다.',
					notes: ['과거', '현재완료', '-ing형 — 동사가 될 수 없음', '미래 (정답)']
				},
				{
					id: 'd23-16',
					options: ['remember', 'raise', 'remind', 'lend'],
					answer: 2,
					why: '빈칸 뒤에 사람(you)이 오고, 배송 전에 문자로 "다시 알려 준다"는 뜻이 되어야 합니다. remind가 정답입니다. remember는 "기억하다"입니다.',
					notes: ['기억하다 — 뜻이 맞지 않음', '~을 올리다', '알려 주다 (정답)', '빌려주다']
				}
			],
			vocab: [
				['local farm', '지역 농장'],
				['delivery', '배송'],
				['half price', '반값'],
				['text message', '문자 메시지'],
				['place an order', '주문하다']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'Seaview Ferry — Information for Passengers',
					body: [
						'The Seaview Ferry runs between Port Hanley and Gull Island four times a day. Passengers {1} arrive after the gate closes cannot board, so please come to the dock twenty minutes before departure.',
						'Tickets must be {2} before boarding, either on our Web site or at the ticket office next to the dock. {3}',
						'In bad weather, the ferry may leave {4} or be canceled. Please check our Web site before you leave home.',
						'For more details, call the ticket office at 555-0177.'
					],
					ko: [
						'시뷰 페리는 핸리 항과 걸 섬 사이를 하루 네 번 운항합니다. 출입구가 닫힌 뒤에 도착한 승객은 탑승할 수 없으니 출발 20분 전까지 부두로 와 주세요.',
						'승선권은 탑승 전에 저희 웹사이트나 부두 옆 매표소에서 구입해야 합니다. 온라인 승선권이 2달러 더 쌉니다.',
						'날씨가 나쁘면 페리가 늦게 출발하거나 운항이 취소될 수 있습니다. 집에서 나서기 전에 저희 웹사이트를 확인해 주세요.',
						'자세한 내용은 매표소 555-0177로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd23-17',
					options: ['who', 'which', 'whose', 'they'],
					answer: 0,
					why: '빈칸 앞의 Passengers는 사람이고, 빈칸 뒤에 동사 arrive가 바로 옵니다. 사람을 받으면서 주어 역할을 하는 who가 정답입니다.',
					notes: [
						'사람을 받고 주어 역할을 함 (정답)',
						'사물을 받음',
						'뒤에 명사가 필요함',
						'대명사 — 앞의 명사를 꾸미는 절을 이끌 수 없음'
					]
				},
				{
					id: 'd23-18',
					options: ['purchase', 'purchasing', 'purchased', 'purchases'],
					answer: 2,
					why: '승선권은 "구입되는" 대상이고 빈칸 뒤에 목적어가 없습니다. must be 뒤에서 수동태를 만드는 과거분사 purchased가 정답입니다.',
					notes: [
						'동사원형',
						'-ing형 — 승선권이 직접 구입하는 것이 아님',
						'과거분사 (정답)',
						'-s가 붙은 동사'
					]
				},
				{
					id: 'd23-19',
					options: [
						'She lost her ticket last week.',
						'As a result, the ticket office is now closed.',
						'Thank you for joining our tour yesterday.',
						'Online tickets are two dollars cheaper.'
					],
					optionsKo: [
						'그녀는 지난주에 승선권을 잃어버렸습니다.',
						'그 결과 매표소는 지금 문을 닫았습니다.',
						'어제 저희 투어에 함께해 주셔서 감사합니다.',
						'온라인 승선권이 2달러 더 쌉니다.'
					],
					answer: 3,
					why: '앞 문장에서 승선권을 사는 곳 두 군데(our Web site, the ticket office)를 알려 주었습니다. 그중 웹사이트에서 살 때의 혜택을 덧붙이는 (D)가 이어집니다. (A)의 She는 가리키는 사람이 없고, (B)는 매표소에서 살 수 있다는 앞 문장과 맞지 않습니다.'
				},
				{
					id: 'd23-20',
					options: ['lately', 'late', 'hardly', 'nearly'],
					answer: 1,
					why: '날씨가 나쁠 때 일어나는 일이므로 "늦게 출발하다"가 되어야 합니다. late가 정답입니다. lately는 "최근에"라는 뜻이라 맞지 않습니다.',
					notes: ['최근에', '늦게 (정답)', '거의 ~않다', '거의']
				}
			],
			vocab: [
				['ferry', '페리, 여객선'],
				['board', '탑승하다'],
				['dock', '부두'],
				['departure', '출발'],
				['purchase', '구입하다'],
				['cancel', '취소하다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: 비슷한 발음 함정',
			blocks: [
				{
					type: 'p',
					text: '오늘은 Day 13에서 배운 비슷한 발음 함정을 복습합니다. 질문 유형은 섞여 나옵니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'질문에서 들린 단어가 보기에서 **다시 들리면 먼저 의심**합니다.',
						'발음이 같거나 비슷한 단어 — write / right, wait / weight, floor / flower',
						'철자가 같고 뜻이 다른 단어 — book(책 / 예약하다), change(바꾸다 / 잔돈), second(두 번째 / 잠깐)',
						'소리가 아니라 **뜻**이 질문과 이어지는 보기를 고릅니다.'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd23-21',
			script: 'Who is going to write the monthly newsletter?',
			options: [
				'Turn right at the corner.',
				'It comes out every month.',
				'Ms. Arai said she would.'
			],
			answer: 2,
			ko: '월간 소식지는 누가 쓸 예정인가요?',
			optionsKo: ['모퉁이에서 오른쪽으로 도세요.', '매달 나와요.', '아라이 씨가 하겠다고 했어요.'],
			why: 'Who로 물었으므로 사람으로 답한 (C)가 정답입니다. she would 뒤에는 write it이 생략되어 있습니다.',
			notes: [
				'write와 발음이 같은 right(오른쪽)',
				'monthly에서 떠오르는 every month — 누가 쓰는지 답하지 않음',
				'사람으로 답함 (정답)'
			],
			vocab: [
				['newsletter', '소식지'],
				['monthly', '매달의'],
				['come out', '(책·잡지가) 나오다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd23-22',
			script: 'How long do we have to wait for a table?',
			options: ['Around half an hour.', 'I gained some weight.', 'By the window, please.'],
			answer: 0,
			ko: '자리가 날 때까지 얼마나 기다려야 하나요?',
			optionsKo: ['30분쯤이요.', '저는 체중이 좀 늘었어요.', '창가로 부탁합니다.'],
			why: 'How long은 걸리는 시간을 묻습니다. "30분쯤"이라고 답한 (A)가 정답입니다.',
			notes: [
				'걸리는 시간 (정답)',
				'wait와 발음이 같은 weight(체중)',
				'자리 위치 — table에서 떠오르는 말'
			],
			vocab: [
				['wait for a table', '(식당에서) 자리를 기다리다'],
				['gain weight', '체중이 늘다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd23-23',
			script: 'Have you booked your flight to Osaka yet?',
			options: [
				'It is a very interesting book.',
				'Yes, I reserved a seat this morning.',
				'The flight was very long.'
			],
			answer: 1,
			ko: '오사카행 항공편은 예약하셨나요?',
			optionsKo: [
				'아주 재미있는 책이에요.',
				'네, 오늘 아침에 좌석을 예약했어요.',
				'비행이 아주 길었어요.'
			],
			why: '예약했는지 묻는 질문에 Yes로 답하고 "오늘 아침에 좌석을 예약했다"고 덧붙인 (B)가 정답입니다. booked를 reserved로 바꿔 말했습니다.',
			notes: [
				'철자가 같고 뜻이 다른 book(책)',
				'Yes + 덧붙임 (정답)',
				'flight 반복 — 예약했는지 답하지 않음'
			],
			vocab: [
				['book', '예약하다; 책'],
				['reserve', '예약하다'],
				['flight', '항공편']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd23-24',
			script: 'Could you change the date of the workshop?',
			options: ['Keep the change.', 'It is a two-day workshop.', 'Sure, which day is better?'],
			answer: 2,
			ko: '워크숍 날짜를 바꿔 주실 수 있나요?',
			optionsKo: ['잔돈은 가지세요.', '이틀짜리 워크숍이에요.', '물론이죠, 어느 날이 더 좋으세요?'],
			why: '날짜를 바꿔 달라는 요청에 Sure로 수락하고 원하는 날을 되물은 (C)가 정답입니다.',
			notes: [
				'철자가 같고 뜻이 다른 change(잔돈)',
				'workshop 반복 — 요청에 답하지 않음',
				'수락 + 되묻기 (정답)'
			],
			vocab: [
				['change', '바꾸다; 잔돈'],
				['date', '날짜'],
				['Keep the change.', '잔돈은 가지세요.']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd23-25',
			script: 'The new printer is on the second floor.',
			options: [
				'Just a second, please.',
				'Oh, I thought it was on the third.',
				'I sent her some flowers.'
			],
			answer: 1,
			ko: '새 프린터는 2층에 있어요.',
			optionsKo: ['잠깐만요.', '아, 저는 3층에 있는 줄 알았어요.', '그녀에게 꽃을 보냈어요.'],
			why: '프린터 위치를 알려 주는 말에 "3층인 줄 알았다"고 반응한 (B)가 정답입니다. the third 뒤에는 floor가 생략되어 있습니다.',
			notes: [
				'철자가 같고 뜻이 다른 second(잠깐)',
				'알게 된 사실에 반응 (정답)',
				'floor와 발음이 비슷한 flower(꽃)'
			],
			vocab: [
				['second floor', '2층'],
				['Just a second.', '잠깐만요.'],
				['flower', '꽃']
			]
		}
	]
} satisfies DayContent;
