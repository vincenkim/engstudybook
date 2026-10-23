import type { DayContent } from '../schema';

export default {
	goals: [
		'공지·회람을 제목 → 바뀌는 내용 → 시기 → 할 일 순서로 읽는다',
		'Part 3 3인 대화에서 누가 한 말인지 구분한다',
		'Part 4 화자의 의도 문제를 앞뒤 말로 푼다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '공지·회람을 읽는 순서',
			blocks: [
				{
					type: 'p',
					text: '**공지**(notice)는 건물 이용자나 고객처럼 여러 사람에게 알리는 글이고, **회람**(memo)은 회사 안에서 직원들에게 돌리는 글입니다. 둘 다 **무엇이 바뀌는지**와 **읽는 사람이 무엇을 해야 하는지**를 알립니다.'
				},
				{
					type: 'box',
					title: '읽는 순서',
					items: [
						'**제목** — 공지는 맨 위 제목, 회람은 Subject 줄을 봅니다. 글의 주제가 여기에 있습니다.',
						'**무엇이 바뀌는지** — 첫 문단에 나옵니다. 닫는 곳, 새 규정, 열리는 행사 등입니다.',
						'**언제부터** — 날짜와 시간을 찾습니다. 시작일, 끝나는 날, 신청 기한을 구분합니다.',
						'**읽는 사람이 해야 할 일** — 글의 뒷부분에 Please, must와 함께 나옵니다.'
					]
				},
				{
					type: 'table',
					head: ['표현', '알려 주는 것'],
					rows: [
						['will be closed / will not be available', '무엇이 바뀌는지'],
						['starting June 1 / from next month', '언제부터'],
						['by Friday / within three days', '기한'],
						['Please ~ / You must ~ / You will be asked to ~', '해야 할 일']
					]
				},
				{
					type: 'tip',
					text: '회람은 **To**(받는 사람)와 **From**(보내는 사람) 줄도 봅니다. 누가 누구에게 쓴 글인지 알면 추론 문제가 쉬워집니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '공지·회람에 자주 나오는 문제',
			blocks: [
				{
					type: 'p',
					text: '문제는 글을 읽는 순서와 같은 순서로 나옵니다. 주제를 먼저 묻고, 날짜나 장소 같은 세부 내용을 묻고, 끝에서 해야 할 일을 묻습니다.'
				},
				{
					type: 'table',
					head: ['질문', '답이 있는 곳'],
					rows: [
						['What is the notice mainly about?', '제목과 첫 문장'],
						['When will the work begin?', '날짜·시간이 있는 문장'],
						['What are employees asked to do?', 'Please, must가 있는 문장'],
						['What is NOT mentioned in the memo?', '보기 4개를 글과 하나씩 대조'],
						['What is suggested about ~?', '글에 쓰인 사실에서 한 걸음 더 나아간 내용']
					]
				},
				{
					type: 'box',
					title: '자주 빠지는 함정',
					items: [
						'날짜가 여러 개 나옵니다. **작업 기간**, **신청 기한**, **행사 날짜**를 서로 바꿔 놓은 보기가 오답으로 나옵니다.',
						'NOT 문제는 글에 **있는** 보기 세 개를 지워서 풉니다. 남는 하나가 정답입니다.',
						'추론 문제의 정답은 글에 그대로 쓰여 있지 않습니다. 그래도 근거 문장은 반드시 글 안에 있습니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Doors open at 9 A.M. Speakers may enter ==from 8 A.M.==',
							ko: '입장은 오전 9시부터입니다. 발표자는 오전 8시부터 들어올 수 있습니다.',
							note: '추론 — 발표자는 다른 사람들보다 먼저 들어갈 수 있습니다.'
						}
					]
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
					title: 'North Parking Lot Closed for Repaving',
					body: [
						'The north parking lot at Granville Business Center will be closed from Monday, March 9, to Friday, March 13. Workers will lay a new surface and repaint the parking lines.',
						'During this week, please park in the south lot on Oak Avenue. A free shuttle van will run between the south lot and the main entrance every ten minutes from 7 A.M. to 7 P.M.',
						'The bicycle racks beside the north lot will stay open. If you have a monthly parking pass, you do not need to pay extra to use the south lot.',
						'Granville Building Management'
					],
					ko: [
						'그랜빌 비즈니스 센터의 북쪽 주차장은 3월 9일 월요일부터 3월 13일 금요일까지 폐쇄됩니다. 작업자들이 바닥을 새로 깔고 주차선을 다시 칠할 예정입니다.',
						'이 주에는 오크가에 있는 남쪽 주차장에 주차해 주세요. 오전 7시부터 오후 7시까지 무료 셔틀 승합차가 남쪽 주차장과 정문 사이를 10분마다 운행합니다.',
						'북쪽 주차장 옆 자전거 거치대는 계속 이용할 수 있습니다. 월 주차권이 있으면 남쪽 주차장을 이용할 때 추가 요금을 내지 않아도 됩니다.',
						'그랜빌 건물 관리팀'
					]
				}
			],
			questions: [
				{
					id: 'd32-01',
					text: 'What is the notice mainly about?',
					ko: '공지는 주로 무엇에 관한 것인가?',
					options: [
						'A new shuttle bus route',
						'The temporary closing of a parking area',
						'An increase in parking fees',
						'The opening of a business center'
					],
					optionsKo: [
						'새 셔틀버스 노선',
						'주차 구역의 임시 폐쇄',
						'주차 요금 인상',
						'비즈니스 센터 개장'
					],
					answer: 1,
					why: '제목이 North Parking Lot Closed for Repaving이고, 첫 문장에서 will be closed from Monday, March 9, to Friday, March 13라고 했습니다. 닷새 동안만 닫으므로 temporary closing(임시 폐쇄)입니다.'
				},
				{
					id: 'd32-02',
					text: 'What are drivers asked to do during the work?',
					ko: '운전자들은 작업 기간에 무엇을 하라고 요청받는가?',
					options: [
						'Use a different parking lot',
						'Buy a new parking pass',
						'Leave their cars at home',
						'Pay the shuttle driver'
					],
					optionsKo: [
						'다른 주차장을 이용한다',
						'새 주차권을 산다',
						'차를 집에 두고 온다',
						'셔틀 기사에게 요금을 낸다'
					],
					answer: 0,
					why: 'please park in the south lot on Oak Avenue라고 했습니다. 북쪽 대신 남쪽 주차장에 세우라는 말이 보기에서 Use a different parking lot으로 바뀌었습니다.'
				},
				{
					id: 'd32-03',
					text: 'What is indicated about people who have a monthly parking pass?',
					ko: '월 주차권이 있는 사람들에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'They must renew the pass by March 13.',
						'They can keep parking in the north lot.',
						'They will get some money back.',
						'They can use the south lot at no additional cost.'
					],
					optionsKo: [
						'3월 13일까지 주차권을 갱신해야 한다.',
						'북쪽 주차장에 계속 주차할 수 있다.',
						'돈을 일부 돌려받는다.',
						'추가 비용 없이 남쪽 주차장을 이용할 수 있다.'
					],
					answer: 3,
					why: 'If you have a monthly parking pass, you do not need to pay extra to use the south lot이라고 했습니다. do not need to pay extra가 보기에서 at no additional cost로 바뀌었습니다.'
				}
			],
			vocab: [
				['parking lot', '주차장'],
				['repave', '(바닥을) 다시 포장하다'],
				['shuttle van', '셔틀 승합차'],
				['main entrance', '정문'],
				['monthly parking pass', '월 주차권'],
				['pay extra', '추가 요금을 내다']
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
						['To', 'All sales staff'],
						['From', 'Hannah Seo, Accounting'],
						['Subject', 'New rule for travel expenses'],
						['Date', 'September 18']
					],
					body: [
						'Starting October 1, the way we handle travel expenses will change. Until now, you gave paper receipts to the accounting team. From next month, you must take a photo of each receipt and upload it to the online expense system.',
						'Expense reports must be submitted within seven days after you return from a trip. If your report is late, you will not get your money back until the following month.',
						'A thirty-minute training session will be held in Room 2B on September 25 at 4 P.M. If you cannot come, a video guide will be posted on the company Web site.'
					],
					ko: [
						'10월 1일부터 출장 경비 처리 방법이 바뀝니다. 지금까지는 종이 영수증을 회계팀에 제출했습니다. 다음 달부터는 영수증마다 사진을 찍어 온라인 경비 시스템에 올려야 합니다.',
						'경비 보고서는 출장에서 돌아온 뒤 7일 안에 제출해야 합니다. 보고서가 늦으면 다음 달이 되어야 돈을 돌려받습니다.',
						'9월 25일 오후 4시에 2B 회의실에서 30분짜리 교육이 열립니다. 올 수 없는 분을 위해 회사 웹사이트에 안내 영상을 올리겠습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd32-04',
					text: 'What is the purpose of the memo?',
					ko: '회람의 목적은 무엇인가?',
					options: [
						'To explain a new way of reporting expenses',
						'To announce a sales trip in October',
						'To introduce a new member of the accounting team',
						'To ask staff to spend less on travel'
					],
					optionsKo: [
						'경비를 보고하는 새 방법을 설명하려고',
						'10월 영업 출장을 알리려고',
						'회계팀의 새 팀원을 소개하려고',
						'직원들에게 출장비를 줄여 달라고 요청하려고'
					],
					answer: 0,
					why: '제목이 New rule for travel expenses이고, 첫 문장에서 the way we handle travel expenses will change라고 했습니다. 이어서 영수증을 사진으로 찍어 올리는 새 방법을 설명합니다.'
				},
				{
					id: 'd32-05',
					text: 'What will happen if a report is submitted late?',
					ko: '보고서를 늦게 제출하면 어떻게 되는가?',
					options: [
						'The trip will not be approved.',
						'The receipts must be sent again.',
						'Payment will be delayed.',
						'The employee must attend a training session.'
					],
					optionsKo: [
						'출장이 승인되지 않는다.',
						'영수증을 다시 보내야 한다.',
						'지급이 늦어진다.',
						'그 직원은 교육에 참석해야 한다.'
					],
					answer: 2,
					why: 'If your report is late, you will not get your money back until the following month라고 했습니다. 다음 달이 되어야 돈을 받는다는 말이 보기에서 Payment will be delayed로 바뀌었습니다.'
				},
				{
					id: 'd32-06',
					text: 'What can employees do if they miss the training session?',
					ko: '직원들은 교육에 참석하지 못하면 무엇을 할 수 있는가?',
					options: [
						'Visit the accounting team',
						'Watch a video online',
						'Join another session on October 1',
						'Ask for a paper guide'
					],
					optionsKo: [
						'회계팀을 방문한다',
						'온라인으로 영상을 본다',
						'10월 1일에 다른 교육에 참석한다',
						'종이 안내서를 요청한다'
					],
					answer: 1,
					why: 'If you cannot come, a video guide will be posted on the company Web site라고 했습니다. on the company Web site가 보기에서 online으로 바뀌었습니다.'
				}
			],
			vocab: [
				['travel expenses', '출장 경비'],
				['receipt', '영수증'],
				['upload', '올리다'],
				['submit', '제출하다'],
				['within seven days', '7일 안에'],
				['training session', '교육']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '공지',
			passages: [
				{
					kind: '공지',
					title: 'Fernhill Community Center — Spring Flea Market',
					body: [
						'Our yearly flea market will be held on Saturday, April 18, from 10 A.M. to 4 P.M. in the main hall. Everyone is welcome, and there is no entrance fee.',
						'Residents who want to sell items can rent a table for five dollars. Tables are limited to forty, so please sign up at the front desk by April 10. Sellers may start setting up at 8:30 A.M. on the day of the event.',
						"Food and drinks will be sold by the Fernhill Cooking Club. All the money from table rentals will be used to buy new books for the children's reading room."
					],
					ko: [
						'연례 벼룩시장이 4월 18일 토요일 오전 10시부터 오후 4시까지 대강당에서 열립니다. 누구나 올 수 있으며 입장료는 없습니다.',
						'물건을 팔고 싶은 주민은 5달러에 테이블을 빌릴 수 있습니다. 테이블은 40개로 한정되어 있으니 4월 10일까지 안내 데스크에서 신청해 주세요. 판매자는 행사 당일 오전 8시 30분부터 준비를 시작할 수 있습니다.',
						'음식과 음료는 펀힐 요리 동호회가 판매합니다. 테이블 대여로 모은 돈은 모두 어린이 열람실에 새 책을 사는 데 씁니다.'
					]
				}
			],
			questions: [
				{
					id: 'd32-07',
					text: 'What should residents do if they want to sell items?',
					ko: '주민들은 물건을 팔고 싶으면 무엇을 해야 하는가?',
					options: [
						'Call the cooking club',
						'Bring their own table',
						'Register at the front desk',
						'Pay an entrance fee'
					],
					optionsKo: [
						'요리 동호회에 전화한다',
						'자기 테이블을 가져온다',
						'안내 데스크에서 등록한다',
						'입장료를 낸다'
					],
					answer: 2,
					why: 'Residents who want to sell items can rent a table이라고 한 뒤 please sign up at the front desk by April 10이라고 했습니다. sign up이 보기에서 Register로 바뀌었습니다.'
				},
				{
					id: 'd32-08',
					text: 'What is NOT mentioned about the flea market?',
					ko: '벼룩시장에 대해 언급되지 않은 것은 무엇인가?',
					options: [
						'Where it will be held',
						'How much a table costs',
						'How many tables there are',
						'Where visitors can park'
					],
					optionsKo: [
						'열리는 장소',
						'테이블 하나의 값',
						'테이블의 수',
						'방문객이 주차할 수 있는 곳'
					],
					answer: 3,
					why: '장소는 in the main hall, 테이블 값은 for five dollars, 테이블 수는 limited to forty로 나와 있습니다. 주차에 관한 말은 없습니다.'
				},
				{
					id: 'd32-09',
					text: 'What is suggested about sellers?',
					ko: '판매자들에 대해 암시된 것은 무엇인가?',
					options: [
						'They can enter the hall before the market opens.',
						'They must bring forty items.',
						'They will get their five dollars back.',
						'They have to cook food for visitors.'
					],
					optionsKo: [
						'시장이 열리기 전에 강당에 들어갈 수 있다.',
						'물건 40개를 가져와야 한다.',
						'5달러를 돌려받는다.',
						'방문객을 위해 음식을 만들어야 한다.'
					],
					answer: 0,
					why: '시장은 from 10 A.M.에 열리는데 Sellers may start setting up at 8:30 A.M.이라고 했습니다. 판매자는 시장이 열리기 전에 들어가 준비할 수 있습니다.'
				}
			],
			vocab: [
				['flea market', '벼룩시장'],
				['entrance fee', '입장료'],
				['resident', '주민'],
				['rent', '빌리다'],
				['be limited to', '~로 한정되다'],
				['set up', '준비하다, 설치하다']
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
						['From', 'Victor Lang, IT Support'],
						['Subject', 'E-mail system upgrade this weekend'],
						['Date', 'November 5']
					],
					body: [
						'The company e-mail system will be upgraded this weekend. The work will begin at 10 P.M. on Friday, November 6, and finish by 6 A.M. on Monday, November 9. During this time, you will not be able to send or receive e-mail.',
						'Before you leave on Friday, please save any files you need to your computer. If you expect urgent messages from clients, give them your mobile phone number in advance.',
						'After the upgrade, your mailbox will hold twice as many messages as before. You will be asked to choose a new password when you first log in on Monday.',
						'For help, call IT Support at extension 410.'
					],
					ko: [
						'이번 주말에 회사 이메일 시스템을 업그레이드합니다. 작업은 11월 6일 금요일 오후 10시에 시작해 11월 9일 월요일 오전 6시까지 끝납니다. 이 시간 동안에는 이메일을 보내거나 받을 수 없습니다.',
						'금요일에 퇴근하기 전에 필요한 파일을 컴퓨터에 저장해 주세요. 고객에게서 급한 연락이 올 예정이라면 미리 휴대 전화 번호를 알려 주세요.',
						'업그레이드 후에는 메일함에 전보다 두 배 많은 메일을 보관할 수 있습니다. 월요일에 처음 로그인할 때 새 비밀번호를 정하라는 안내가 나옵니다.',
						'도움이 필요하면 내선 410번 IT 지원팀으로 전화해 주세요.'
					]
				}
			],
			questions: [
				{
					id: 'd32-10',
					text: 'Why was the memo written?',
					ko: '회람은 왜 쓰였는가?',
					options: [
						"To report a problem with a client's e-mail",
						'To ask staff to work on the weekend',
						'To inform staff about planned system work',
						'To announce a new mobile phone plan'
					],
					optionsKo: [
						'고객의 이메일 문제를 보고하려고',
						'직원들에게 주말 근무를 요청하려고',
						'예정된 시스템 작업을 직원들에게 알리려고',
						'새 휴대 전화 요금제를 알리려고'
					],
					answer: 2,
					why: '제목이 E-mail system upgrade this weekend이고, 첫 문장에서 The company e-mail system will be upgraded this weekend라고 했습니다. 예정된 시스템 작업을 알리는 글입니다.'
				},
				{
					id: 'd32-11',
					text: 'What are employees asked to do before leaving on Friday?',
					ko: '직원들은 금요일에 퇴근하기 전에 무엇을 하라고 요청받는가?',
					options: [
						'Change their passwords',
						'Store necessary files on their computers',
						'Turn off their mobile phones',
						'Delete old messages'
					],
					optionsKo: [
						'비밀번호를 바꾼다',
						'필요한 파일을 컴퓨터에 보관한다',
						'휴대 전화를 끈다',
						'오래된 메일을 지운다'
					],
					answer: 1,
					why: 'Before you leave on Friday, please save any files you need to your computer라고 했습니다. save가 보기에서 Store로, files you need가 necessary files로 바뀌었습니다. 비밀번호는 월요일에 정합니다.'
				},
				{
					id: 'd32-12',
					text: 'What is NOT mentioned in the memo?',
					ko: '회람에 언급되지 않은 것은 무엇인가?',
					options: [
						'When the work will end',
						'Who to contact for help',
						'What employees cannot do during the work',
						'How much the upgrade will cost'
					],
					optionsKo: [
						'작업이 끝나는 때',
						'도움이 필요할 때 연락할 곳',
						'작업 중에 직원들이 할 수 없는 일',
						'업그레이드에 드는 비용'
					],
					answer: 3,
					why: '끝나는 때는 finish by 6 A.M. on Monday, 연락할 곳은 call IT Support at extension 410, 할 수 없는 일은 you will not be able to send or receive e-mail로 나와 있습니다. 비용에 관한 말은 없습니다.'
				},
				{
					id: 'd32-13',
					text: 'What will employees probably do on Monday morning?',
					ko: '직원들은 월요일 아침에 무엇을 할 것 같은가?',
					options: [
						'Create a new password',
						'Call their clients',
						'Go to a workshop',
						'Receive a new computer'
					],
					optionsKo: [
						'새 비밀번호를 만든다',
						'고객에게 전화한다',
						'워크숍에 간다',
						'새 컴퓨터를 받는다'
					],
					answer: 0,
					why: 'You will be asked to choose a new password when you first log in on Monday라고 했습니다. 월요일 아침에 출근해 처음 로그인하면서 새 비밀번호를 만들게 됩니다.'
				}
			],
			vocab: [
				['upgrade', '업그레이드하다, 개선하다'],
				['send or receive', '보내거나 받다'],
				['urgent', '급한'],
				['in advance', '미리'],
				['twice as many', '두 배 많은'],
				['extension', '내선 번호']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 세 사람이 말하는 대화',
			blocks: [
				{
					type: 'p',
					text: 'Part 3 대화 13개 가운데 두세 개는 **세 사람**이 말합니다. 남자 둘과 여자 하나, 또는 여자 둘과 남자 하나입니다. 문제 수와 푸는 순서는 두 사람 대화와 같습니다.'
				},
				{
					type: 'box',
					title: '3인 대화라는 신호',
					items: [
						'문제에 **the men**, **the women**처럼 복수가 나옵니다.',
						'문제에 **사람 이름**이 나옵니다. 같은 성별이 둘이라 the man만으로는 누구인지 가릴 수 없기 때문입니다.',
						'대화 전에 "conversation **with three speakers**"라는 안내가 들립니다.'
					]
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'What do the men say about the schedule?',
							'남자들은 일정에 대해 무엇이라고 말하는가?'
						],
						[
							'What does the woman ask the men to do?',
							'여자는 남자들에게 무엇을 하라고 요청하는가?'
						],
						['What does Ms. Hall offer to do?', '홀 씨는 무엇을 해 주겠다고 하는가?']
					]
				},
				{
					type: 'box',
					title: '누가 누구인지 파악하는 법',
					items: [
						'**이름을 부르는 말**을 듣습니다. "Tony, did you send it?" 다음에 대답하는 사람이 Tony입니다.',
						'**소개하는 말**을 듣습니다. "This is Emma." 다음에 인사하는 사람이 Emma입니다.',
						'같은 성별인 두 사람은 **한 일과 할 일**이 다릅니다. 이름 옆에 누가 무엇을 하는지 짧게 적어 둡니다.'
					]
				},
				{
					type: 'tip',
					text: '듣기 전에 문제에서 이름을 먼저 찾습니다. 이름이 있으면 그 이름이 불리는 순간을 기다립니다.'
				}
			]
		},
		{
			type: 'set',
			part: 3,
			label: '3인 대화',
			script: [
				['W', "Dennis, the movers are coming at nine tomorrow. Is your team's packing finished?"],
				['M1', 'Almost. We have packed the files, but we ran out of boxes this morning.'],
				['W', 'Omar, are there any boxes left on your side?'],
				['M2', "Yes, about ten. I'll carry them over to Dennis's desk in a few minutes."],
				['W', 'Thanks, Omar. And please remember to put your name on every box, both of you.'],
				['M1', "Will do. I'll finish the rest before I leave tonight."]
			],
			scriptKo: [
				'데니스 씨, 이삿짐 직원들이 내일 9시에 와요. 그쪽 팀은 짐을 다 쌌나요?',
				'거의요. 서류는 다 쌌는데 오늘 아침에 상자가 떨어졌어요.',
				'오마르 씨, 그쪽에 남는 상자가 있나요?',
				'네, 열 개쯤 있어요. 몇 분 뒤에 데니스 씨 자리로 가져다줄게요.',
				'고마워요, 오마르 씨. 그리고 두 분 모두 상자마다 이름을 꼭 적어 주세요.',
				'그럴게요. 나머지는 오늘 퇴근하기 전에 끝낼게요.'
			],
			questions: [
				{
					id: 'd32-14',
					text: 'What are the speakers preparing for?',
					ko: '화자들은 무엇을 준비하고 있는가?',
					options: ['A business trip', 'A client visit', 'An office move', 'A product delivery'],
					optionsKo: ['출장', '고객 방문', '사무실 이사', '제품 배송'],
					answer: 2,
					why: "여자가 the movers are coming at nine tomorrow라고 한 뒤 Is your team's packing finished?라고 물었습니다. 이삿짐 직원이 오고 짐을 싸고 있으므로 사무실 이사를 준비하는 중입니다."
				},
				{
					id: 'd32-15',
					text: 'What does Omar say he will do?',
					ko: '오마르는 무엇을 하겠다고 말하는가?',
					options: [
						'Take some boxes to a coworker',
						'Call the moving company',
						'Finish packing tonight',
						'Order more files'
					],
					optionsKo: [
						'동료에게 상자를 가져다준다',
						'이삿짐 업체에 전화한다',
						'오늘 밤에 짐 싸기를 끝낸다',
						'서류철을 더 주문한다'
					],
					answer: 0,
					why: "여자가 Omar, are there any boxes left on your side?라고 부르자 대답한 남자가 Omar입니다. 그는 I'll carry them over to Dennis's desk in a few minutes라고 했습니다. 오늘 퇴근 전에 나머지를 끝내겠다고 한 사람은 Dennis입니다."
				},
				{
					id: 'd32-16',
					text: 'What does the woman remind the men to do?',
					ko: '여자는 남자들에게 무엇을 잊지 말라고 하는가?',
					options: [
						'Arrive at nine tomorrow',
						'Clean their desks',
						'Help the movers',
						'Label their boxes'
					],
					optionsKo: [
						'내일 9시에 도착한다',
						'책상을 치운다',
						'이삿짐 직원들을 돕는다',
						'상자에 이름을 표시한다'
					],
					answer: 3,
					why: '여자가 두 남자에게 please remember to put your name on every box, both of you라고 했습니다. put your name on every box가 보기에서 Label their boxes로 바뀌었습니다. 9시는 이삿짐 직원들이 오는 시간입니다.'
				}
			],
			vocab: [
				['mover', '이삿짐 직원'],
				['pack', '(짐을) 싸다'],
				['run out of', '~이 떨어지다'],
				['carry', '나르다, 옮기다'],
				['label', '이름을 표시하다, 라벨을 붙이다']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '3인 대화',
			script: [
				[
					'W1',
					'Good morning, Marcus. Welcome to Pine Street Books. This is Mina, and she will train you this week.'
				],
				['W2', 'Nice to meet you, Marcus. Have you worked in a bookstore before?'],
				['M', 'No, but I worked at a clothing shop, so I can use a cash register.'],
				['W2', "That helps. This morning, I'll show you how to put new books on the shelves."],
				[
					'W1',
					'And Marcus, please stop by my office before you go home. I need you to sign some forms.'
				],
				['M', 'Sure. What time do you leave, Ms. Grant?'],
				['W1', "I'm here until six."]
			],
			scriptKo: [
				'안녕하세요, 마커스 씨. 파인 스트리트 서점에 온 것을 환영합니다. 이쪽은 미나 씨이고, 이번 주에 마커스 씨를 교육할 거예요.',
				'만나서 반가워요, 마커스 씨. 전에 서점에서 일해 본 적이 있나요?',
				'아니요, 하지만 옷 가게에서 일해서 계산대는 다룰 수 있습니다.',
				'도움이 되겠네요. 오늘 오전에는 새 책을 책장에 꽂는 방법을 알려 줄게요.',
				'그리고 마커스 씨, 퇴근하기 전에 제 사무실에 들러 주세요. 서류 몇 장에 서명해야 해요.',
				'알겠습니다. 그랜트 씨는 몇 시에 퇴근하세요?',
				'저는 6시까지 있어요.'
			],
			questions: [
				{
					id: 'd32-17',
					text: 'What are the women doing?',
					ko: '여자들은 무엇을 하고 있는가?',
					options: [
						'Interviewing a job applicant',
						'Welcoming a new coworker',
						'Helping a customer find a book',
						'Shopping for clothes'
					],
					optionsKo: [
						'입사 지원자를 면접하고 있다',
						'새 동료를 맞이하고 있다',
						'고객이 책을 찾는 것을 돕고 있다',
						'옷을 사고 있다'
					],
					answer: 1,
					why: '한 여자가 Welcome to Pine Street Books라고 맞이하고, 다른 여자를 she will train you this week라고 소개했습니다. 이미 채용되어 교육을 받을 사람이므로 면접이 아니라 새 동료를 맞이하는 상황입니다.'
				},
				{
					id: 'd32-18',
					text: 'What will Mina do this morning?',
					ko: '미나는 오늘 오전에 무엇을 할 것인가?',
					options: [
						'Teach the man how to arrange books',
						'Sign some forms',
						'Work at the cash register',
						'Leave the store at six'
					],
					optionsKo: [
						'남자에게 책을 정리하는 방법을 가르친다',
						'서류에 서명한다',
						'계산대에서 일한다',
						'6시에 매장을 나선다'
					],
					answer: 0,
					why: "This is Mina라는 소개 바로 뒤에 인사한 여자가 Mina입니다. Mina가 This morning, I'll show you how to put new books on the shelves라고 했습니다. 서류와 6시는 다른 여자인 Ms. Grant가 한 말입니다."
				},
				{
					id: 'd32-19',
					text: 'What does Ms. Grant ask the man to do?',
					ko: '그랜트 씨는 남자에게 무엇을 하라고 요청하는가?',
					options: [
						'Stay until six',
						'Bring a form from home',
						'Visit her office later',
						'Train another employee'
					],
					optionsKo: [
						'6시까지 남는다',
						'집에서 서류를 가져온다',
						'나중에 자기 사무실에 온다',
						'다른 직원을 교육한다'
					],
					answer: 2,
					why: '남자가 Ms. Grant라고 부른 여자가 please stop by my office before you go home이라고 했습니다. stop by가 보기에서 Visit으로, before you go home이 later로 바뀌었습니다.'
				}
			],
			vocab: [
				['train', '교육하다'],
				['cash register', '계산대'],
				['shelf', '책장, 선반'],
				['stop by', '~에 들르다'],
				['sign a form', '서류에 서명하다'],
				['coworker', '동료']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 화자의 의도 문제',
			blocks: [
				{
					type: 'p',
					text: '담화에 나온 **한 문장을 따옴표로** 보여 주고, 화자가 그 말을 왜 했는지 묻는 문제입니다. Part 4에 세 문제쯤 나옵니다. 인용 문장은 문제지에 적혀 있습니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'What does the speaker mean when he says, "~"?',
							'화자가 "~"라고 말할 때 무슨 뜻인가?'
						],
						[
							'What does the speaker imply when she says, "~"?',
							'화자가 "~"라고 말할 때 무엇을 암시하는가?'
						],
						['Why does the speaker say, "~"?', '화자는 왜 "~"라고 말하는가?']
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'듣기 전에 **인용 문장을 읽어** 둡니다.',
						'그 문장이 들리면 **바로 앞 말**을 떠올립니다. 화자가 무슨 이야기를 하던 중이었는지가 뜻을 정합니다.',
						'**바로 뒤 말**로 확인합니다. 뒤에 So나 That is why가 나오면 그 말이 결론입니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Please do not come too early. ==We open at nine.==',
							ko: '너무 일찍 오지 마세요. 저희는 9시에 엽니다.',
							note: '뜻 — 9시 전에는 들어올 수 없습니다.'
						},
						{
							en: 'You do not have to wait until the afternoon. ==We open at nine.==',
							ko: '오후까지 기다리실 필요 없습니다. 저희는 9시에 엽니다.',
							note: '뜻 — 아침에 와도 됩니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '인용 문장의 낱말 뜻을 그대로 옮긴 보기는 대개 오답입니다. 같은 문장도 앞뒤 말에 따라 뜻이 달라집니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발언',
			script: [
				[
					'M',
					'Good morning, everyone. Before we open the store, I have some news about the summer sale.'
				],
				[
					'M',
					'Last year, we started the sale on a Monday, and very few customers came. So this year, the sale will begin on Saturday, July 11.'
				],
				[
					'M',
					'I expect a big crowd. We only have four cashiers. That is why I am asking two people from the stockroom to help at the registers that day.'
				],
				['M', 'If you can do it, please write your name on the list by the door. Thank you.']
			],
			scriptKo: [
				'안녕하세요, 여러분. 매장을 열기 전에 여름 할인 행사에 관해 알려 드릴 것이 있습니다.',
				'작년에는 월요일에 행사를 시작했는데 손님이 거의 오지 않았습니다. 그래서 올해는 7월 11일 토요일에 행사를 시작합니다.',
				'손님이 많이 몰릴 것으로 예상합니다. 계산원은 네 명뿐입니다. 그래서 그날 창고 담당 두 분에게 계산대 일을 도와 달라고 부탁드립니다.',
				'도와줄 수 있는 분은 문 옆 명단에 이름을 적어 주세요. 감사합니다.'
			],
			questions: [
				{
					id: 'd32-20',
					text: 'What is the speaker mainly talking about?',
					ko: '화자는 주로 무엇에 관해 이야기하고 있는가?',
					options: [
						'A plan for an upcoming sale',
						'A new store location',
						'A change in opening hours',
						'A problem with a cash register'
					],
					optionsKo: ['다가오는 할인 행사 계획', '새 매장 위치', '영업시간 변경', '계산대의 문제'],
					answer: 0,
					why: '첫 부분에서 I have some news about the summer sale이라고 한 뒤, 올해 행사를 언제 시작하고 어떻게 준비할지 말합니다.'
				},
				{
					id: 'd32-21',
					text: 'What does the speaker imply when he says, "We only have four cashiers"?',
					ko: '화자가 "계산원은 네 명뿐입니다"라고 말할 때 무엇을 암시하는가?',
					options: [
						'The store hired too many people.',
						'The cashiers worked well last year.',
						'Some cashiers will be on vacation.',
						'More workers will be needed at the registers.'
					],
					optionsKo: [
						'매장이 사람을 너무 많이 뽑았다.',
						'계산원들이 작년에 일을 잘했다.',
						'계산원 몇 명이 휴가를 간다.',
						'계산대에 일할 사람이 더 필요하다.'
					],
					answer: 3,
					why: '바로 앞에서 I expect a big crowd(손님이 많이 몰릴 것이다)라고 했고, 바로 뒤에서 That is why I am asking two people from the stockroom to help at the registers라고 했습니다. 네 명으로는 부족하다는 뜻입니다.'
				},
				{
					id: 'd32-22',
					text: 'What are the listeners asked to do if they can help?',
					ko: '청자들은 도울 수 있으면 무엇을 하라고 요청받는가?',
					options: [
						'Come to work on Monday',
						'Sign up on a list',
						'Count the items in the stockroom',
						'Open the store early'
					],
					optionsKo: [
						'월요일에 출근한다',
						'명단에 이름을 올린다',
						'창고의 물건을 센다',
						'매장을 일찍 연다'
					],
					answer: 1,
					why: 'If you can do it, please write your name on the list by the door라고 했습니다. write your name on the list가 보기에서 Sign up on a list로 바뀌었습니다.'
				}
			],
			vocab: [
				['summer sale', '여름 할인 행사'],
				['crowd', '많은 사람들, 인파'],
				['cashier', '계산원'],
				['stockroom', '창고'],
				['upcoming', '다가오는']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '전화 메시지',
			script: [
				[
					'W',
					"Hi, Paul. It's Sandra from the marketing team. I'm calling about the brochure for the trade show."
				],
				[
					'W',
					'I looked at the design you sent me yesterday. The photos are great, but the company address on the back page is our old one.'
				],
				[
					'W',
					'Printing starts tomorrow morning. So could you correct the address and send the file to me again this afternoon?'
				],
				['W', "I'll be at my desk until five. Thanks, Paul."]
			],
			scriptKo: [
				'안녕하세요, 폴 씨. 마케팅팀의 샌드라입니다. 무역 박람회용 안내 책자 때문에 전화드립니다.',
				'어제 보내 주신 디자인을 봤습니다. 사진은 아주 좋은데, 뒷면에 있는 회사 주소가 예전 주소입니다.',
				'인쇄는 내일 아침에 시작합니다. 그러니 주소를 고쳐서 오늘 오후에 파일을 다시 보내 주시겠어요?',
				'저는 5시까지 자리에 있습니다. 고마워요, 폴 씨.'
			],
			questions: [
				{
					id: 'd32-23',
					text: 'What is the speaker calling about?',
					ko: '화자는 무엇에 관해 전화하고 있는가?',
					options: [
						'A trade show schedule',
						'A move to a new office',
						'A brochure design',
						'A photo contest'
					],
					optionsKo: ['무역 박람회 일정', '새 사무실로의 이전', '안내 책자 디자인', '사진 공모전'],
					answer: 2,
					why: "I'm calling about the brochure for the trade show라고 한 뒤 I looked at the design you sent me yesterday라고 했습니다. 안내 책자의 디자인에 관한 전화입니다."
				},
				{
					id: 'd32-24',
					text: 'What problem does the speaker mention?',
					ko: '화자는 어떤 문제를 언급하는가?',
					options: [
						'Some information is out of date.',
						'Some photos are too small.',
						'A file was not sent.',
						'A page is missing.'
					],
					optionsKo: [
						'일부 정보가 예전 것이다.',
						'사진 몇 장이 너무 작다.',
						'파일이 오지 않았다.',
						'한 쪽이 빠졌다.'
					],
					answer: 0,
					why: 'the company address on the back page is our old one이라고 했습니다. 예전 주소가 실렸다는 말이 보기에서 Some information is out of date로 바뀌었습니다.'
				},
				{
					id: 'd32-25',
					text: 'What does the speaker mean when she says, "Printing starts tomorrow morning"?',
					ko: '화자가 "인쇄는 내일 아침에 시작합니다"라고 말할 때 무슨 뜻인가?',
					options: [
						'The printing company has changed.',
						'She will be busy tomorrow.',
						'The brochure is already finished.',
						'A correction must be made quickly.'
					],
					optionsKo: [
						'인쇄 업체가 바뀌었다.',
						'그녀는 내일 바쁠 것이다.',
						'안내 책자가 이미 완성되었다.',
						'수정을 빨리 해야 한다.'
					],
					answer: 3,
					why: '바로 앞에서 주소가 예전 것이라고 했고, 바로 뒤에서 So could you correct the address and send the file to me again this afternoon?이라고 했습니다. 내일 아침에 인쇄하니 오늘 안에 고쳐야 한다는 뜻입니다.'
				}
			],
			vocab: [
				['brochure', '안내 책자'],
				['trade show', '무역 박람회'],
				['back page', '뒷면'],
				['correct', '고치다'],
				['out of date', '예전 것인, 오래된']
			]
		}
	]
} satisfies DayContent;
