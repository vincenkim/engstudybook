import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 문장 삽입 문제에서 지시어와 연결어로 자리를 찾는다',
		'Part 3 화자의 의도 문제를 바로 앞 대사를 근거로 푼다',
		'Part 4 인물 소개의 흐름을 따라간다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '문장 삽입 문제',
			blocks: [
				{
					type: 'p',
					text: '지문 곳곳에 **[1], [2], [3], [4]**가 표시되어 있고, 주어진 문장 하나가 그중 **어디에 들어가야 하는지** 고르는 문제입니다. Part 7에 두 문제 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?',
							'[1], [2], [3], [4]로 표시된 자리 중 다음 문장이 들어가기에 가장 알맞은 곳은 어디인가?'
						]
					]
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'**주어진 문장을 먼저** 읽습니다. this, it, he 같은 지시어와 also, however 같은 연결어에 표시합니다.',
						'지문을 읽으면서 그 단서가 **가리키는 말**이 나오는 곳을 찾습니다.',
						'그 자리에 문장을 넣고 **앞 문장, 뒤 문장**과 차례로 이어 읽어 봅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'We opened a new office in Busan. ==It== has twenty employees.',
							ko: '우리는 부산에 새 사무실을 열었습니다. 그곳에는 직원이 20명 있습니다.',
							note: 'It은 앞 문장의 a new office를 가리킵니다. 이 문장은 a new office가 나온 문장 바로 뒤에 들어갑니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '네 자리에 모두 넣어 볼 필요는 없습니다. 단서가 가리키는 말이 앞에 없는 자리는 바로 지웁니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '단서가 되는 말: 지시어와 연결어',
			blocks: [
				{
					type: 'p',
					text: '주어진 문장 안의 작은 단어가 자리를 알려 줍니다. 지시어는 **앞 문장에 가리킬 대상**이 있어야 하고, 연결어는 **앞 문장과의 관계**가 맞아야 합니다.'
				},
				{
					type: 'table',
					head: ['단서', '뜻', '앞 문장에 있어야 하는 것'],
					rows: [
						['this, these, that, it, them', '이, 이것들, 그, 그것, 그것들', '가리키는 물건이나 일'],
						['he, she, they', '그, 그녀, 그들', '사람 이름'],
						['also', '또한', '같은 종류의 내용 하나'],
						['however', '그러나', '반대되는 내용'],
						['for example', '예를 들어', '예를 들 수 있는 넓은 말'],
						['then, after that', '그다음에', '먼저 일어난 일']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Parking is free for guests. ==However==, the lot is small.',
							ko: '손님은 주차가 무료입니다. 그러나 주차장이 작습니다.',
							note: 'However 앞에는 좋은 내용, 뒤에는 그와 반대되는 내용이 옵니다.'
						},
						{
							en: 'The hotel has a gym. It ==also== has a pool.',
							ko: '호텔에는 체육관이 있습니다. 수영장도 있습니다.',
							note: 'also가 있으면 앞 문장에 같은 종류의 내용(시설 하나)이 먼저 나와야 합니다.'
						}
					]
				},
				{
					type: 'box',
					title: '넣은 뒤 확인할 것',
					items: [
						'**앞 문장**과 이어 읽었을 때 지시어가 가리키는 말이 분명한가.',
						'**뒤 문장**과도 이어지는가. 뒤 문장의 there, that, they가 가리킬 말이 생기는지 봅니다.'
					]
				},
				{
					type: 'tip',
					text: '문장 삽입 문제는 지문의 흐름을 알아야 풀립니다. 같은 지문의 다른 문제를 먼저 풀고 마지막에 풉니다.'
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
					title: 'Share Your Ideas and Win',
					body: [
						'The management team wants to hear your ideas for saving energy in our offices. [1]',
						'Write your idea on a card and put it in the green box next to the staff lounge. [2] Blank cards are on the table beside the box. [3] You may hand in as many ideas as you like until June 27.',
						'The three best ideas will be chosen in July. [4] Each winner will receive a $100 gift card, and the ideas will be put into use in August.',
						'General Affairs Team'
					],
					ko: [
						'경영진이 사무실에서 에너지를 아끼는 방법에 대한 여러분의 아이디어를 듣고 싶어 합니다. 종이를 덜 쓰는 방법도 알고 싶어 합니다.',
						'아이디어를 카드에 적어 직원 휴게실 옆 초록색 상자에 넣어 주세요. 빈 카드는 상자 옆 탁자에 있습니다. 6월 27일까지 아이디어를 몇 개든 내실 수 있습니다.',
						'7월에 가장 좋은 아이디어 세 개를 뽑습니다. 뽑힌 사람은 각각 100달러 상품권을 받고, 아이디어는 8월부터 실제로 쓰입니다.',
						'총무팀'
					]
				}
			],
			questions: [
				{
					id: 'd30-01',
					text: 'What is the notice mainly about?',
					ko: '공지는 주로 무엇에 관한 것인가?',
					options: [
						'A sale on office supplies',
						'New rules for the staff lounge',
						'A change in working hours',
						'A contest for employee ideas'
					],
					optionsKo: [
						'사무용품 할인',
						'직원 휴게실의 새 규칙',
						'근무 시간 변경',
						'직원 아이디어 공모'
					],
					answer: 3,
					why: '첫 문장에서 The management team wants to hear your ideas라고 했고, 끝에서 Each winner will receive a $100 gift card라고 했습니다. 직원의 아이디어를 모아 상을 주는 행사입니다.'
				},
				{
					id: 'd30-02',
					text: 'What will happen in August?',
					ko: '8월에 무슨 일이 있는가?',
					options: [
						'The contest will begin.',
						'The winners will be chosen.',
						'The winning ideas will be used.',
						'The staff lounge will reopen.'
					],
					optionsKo: [
						'공모가 시작된다.',
						'수상자를 뽑는다.',
						'뽑힌 아이디어가 쓰인다.',
						'직원 휴게실이 다시 문을 연다.'
					],
					answer: 2,
					why: 'the ideas will be put into use in August라고 했습니다. put into use가 보기에서 used로 바뀌었습니다. 수상자를 뽑는 것은 7월입니다.'
				},
				{
					id: 'd30-03',
					text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "It also wants to know how we can use less paper."',
					ko: '[1], [2], [3], [4]로 표시된 자리 중 다음 문장이 들어가기에 가장 알맞은 곳은 어디인가? "종이를 덜 쓰는 방법도 알고 싶어 합니다."',
					options: ['[1]', '[2]', '[3]', '[4]'],
					optionsKo: ['[1]', '[2]', '[3]', '[4]'],
					answer: 0,
					why: '주어진 문장의 It과 also가 단서입니다. "알고 싶어 한다"의 주어가 될 수 있는 것은 [1] 앞 문장의 The management team뿐이고, also는 에너지에 이어 종이에 대한 아이디어도 원한다는 뜻입니다. 다른 자리 바로 앞에 나오는 상자, 카드, 아이디어는 무언가를 알고 싶어 할 수 없습니다.'
				}
			],
			vocab: [
				['management team', '경영진'],
				['save energy', '에너지를 아끼다'],
				['hand in', '제출하다'],
				['gift card', '상품권'],
				['put into use', '실제로 쓰다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '기사',
			passages: [
				{
					kind: '기사',
					title: 'Software Company Gives Laptops to Schools',
					body: [
						'PENWICK — Norvale Systems, a software company in Penwick, gave 120 laptop computers to three public schools on Monday. [1] It is the largest gift the schools have ever received. [2]',
						'The company\'s president, Ms. Carla Mendes, visited Penwick Middle School to deliver the first forty computers. [3] "I grew up in this town, so I am happy to help its students," she said.',
						'The schools will use the laptops in science and math classes. [4] Teachers will also get two days of free training from Norvale employees.',
						'Norvale Systems plans to make the same donation every year.'
					],
					ko: [
						'펜윅 — 펜윅의 소프트웨어 회사인 노베일 시스템스가 월요일에 공립 학교 세 곳에 노트북 컴퓨터 120대를 기증했습니다. 이 학교들이 지금까지 받은 가장 큰 기증입니다.',
						'회사 대표인 칼라 멘데스 씨는 펜윅 중학교를 방문해 첫 40대를 전달했습니다. 그녀는 30년 전에 그 학교에 다녔습니다. 멘데스 씨는 "저는 이 도시에서 자랐기 때문에 이곳 학생들을 돕게 되어 기쁩니다"라고 말했습니다.',
						'학교들은 과학과 수학 수업에 노트북을 쓸 예정입니다. 교사들도 노베일 직원들에게서 이틀간 무료 교육을 받습니다.',
						'노베일 시스템스는 매년 같은 기증을 할 계획입니다.'
					]
				}
			],
			questions: [
				{
					id: 'd30-04',
					text: 'What is the article mainly about?',
					ko: '기사는 주로 무엇에 관한 것인가?',
					options: [
						'A new school in Penwick',
						'A sale on laptop computers',
						'A job opening at a software company',
						"A company's gift to schools"
					],
					optionsKo: [
						'펜윅의 새 학교',
						'노트북 컴퓨터 할인 판매',
						'소프트웨어 회사의 채용 공고',
						'한 회사가 학교에 한 기증'
					],
					answer: 3,
					why: '제목이 Software Company Gives Laptops to Schools이고, 첫 문장에서 gave 120 laptop computers to three public schools라고 했습니다.'
				},
				{
					id: 'd30-05',
					text: 'What is indicated about Ms. Mendes?',
					ko: '멘데스 씨에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'She teaches science at a middle school.',
						'She is from Penwick.',
						'She will train the teachers herself.',
						'She started the company thirty years ago.'
					],
					optionsKo: [
						'중학교에서 과학을 가르친다.',
						'펜윅 출신이다.',
						'교사들을 직접 교육할 것이다.',
						'30년 전에 회사를 세웠다.'
					],
					answer: 1,
					why: '멘데스 씨가 I grew up in this town(이 도시에서 자랐다)이라고 말했습니다. this town은 기사의 배경인 Penwick입니다. 교사 교육은 Norvale employees가 맡습니다.'
				},
				{
					id: 'd30-06',
					text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "She attended the school thirty years ago."',
					ko: '[1], [2], [3], [4]로 표시된 자리 중 다음 문장이 들어가기에 가장 알맞은 곳은 어디인가? "그녀는 30년 전에 그 학교에 다녔습니다."',
					options: ['[1]', '[2]', '[3]', '[4]'],
					optionsKo: ['[1]', '[2]', '[3]', '[4]'],
					answer: 2,
					why: '주어진 문장의 She와 the school이 단서입니다. 바로 앞 문장에 여자 한 명과 학교 하나가 있어야 합니다. [3] 앞 문장에 Ms. Carla Mendes와 Penwick Middle School이 나옵니다. [1]과 [2] 앞에는 아직 사람이 나오지 않았고, [4] 앞 문장은 학교들이 노트북을 쓰는 방법에 관한 말입니다.'
				}
			],
			vocab: [
				['public school', '공립 학교'],
				['president', '대표, 사장'],
				['deliver', '전달하다'],
				['grow up', '자라다'],
				['donation', '기증, 기부'],
				['attend', '(학교에) 다니다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '광고',
			passages: [
				{
					kind: '광고',
					title: 'Handy Rent — Tools for a Day',
					body: [
						'Do you need a ladder or a drill for just one day? [1] At Handy Rent, you can choose from more than 300 tools.',
						'Renting is simple. [2] Show a photo ID, pay for the first day, and take the tool home. [3]',
						'Small tools cost $5 a day. Large machines have their own prices. [4] If you return a tool late, you must pay for one more day.',
						'We are open from 8 A.M. to 6 P.M., Monday through Saturday, at 40 Alder Road.'
					],
					ko: [
						'사다리나 드릴이 딱 하루만 필요하신가요? 핸디 렌트에서는 300가지가 넘는 도구 중에서 고르실 수 있습니다.',
						'빌리는 방법은 간단합니다. 사진이 있는 신분증을 보여 주고 첫날 요금을 낸 뒤 도구를 집으로 가져가시면 됩니다.',
						'작은 도구는 하루에 5달러입니다. 큰 기계는 가격이 따로 있습니다. 예를 들어 카펫 청소 기계는 하루에 25달러입니다. 도구를 늦게 반납하면 하루치 요금을 더 내셔야 합니다.',
						'영업시간은 월요일부터 토요일까지 오전 8시부터 오후 6시까지이며, 올더로 40번지에 있습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd30-07',
					text: 'What type of business is Handy Rent?',
					ko: '핸디 렌트는 어떤 업체인가?',
					options: [
						'A shop that lends tools',
						'A cleaning company',
						'A tool factory',
						'A moving service'
					],
					optionsKo: ['도구를 빌려주는 가게', '청소 업체', '도구 공장', '이사 서비스'],
					answer: 0,
					why: 'you can choose from more than 300 tools라고 했고, Renting is simple(빌리는 방법은 간단하다)이라며 빌리는 절차를 설명합니다. 도구를 빌려주는 가게입니다.'
				},
				{
					id: 'd30-08',
					text: 'What is NOT mentioned in the advertisement?',
					ko: '광고에 언급되지 않은 것은 무엇인가?',
					options: [
						'The number of tools',
						'A delivery service',
						'The price of small tools',
						'The opening hours'
					],
					optionsKo: ['도구의 수', '배달 서비스', '작은 도구의 가격', '영업시간'],
					answer: 1,
					why: 'more than 300 tools(도구 수), Small tools cost $5 a day(작은 도구 가격), open from 8 A.M. to 6 P.M.(영업시간)은 모두 나옵니다. 배달에 관한 말은 없고, 손님이 직접 take the tool home(도구를 집에 가져간다)이라고 했습니다.'
				},
				{
					id: 'd30-09',
					text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "For example, a carpet-cleaning machine is $25 a day."',
					ko: '[1], [2], [3], [4]로 표시된 자리 중 다음 문장이 들어가기에 가장 알맞은 곳은 어디인가? "예를 들어 카펫 청소 기계는 하루에 25달러입니다."',
					options: ['[1]', '[2]', '[3]', '[4]'],
					optionsKo: ['[1]', '[2]', '[3]', '[4]'],
					answer: 3,
					why: '주어진 문장의 For example(예를 들어)이 단서입니다. 앞에는 기계의 가격에 관한 넓은 말이 있어야 합니다. [4] 앞의 Large machines have their own prices(큰 기계는 가격이 따로 있다) 뒤에 넣으면 그 예로 이어집니다.'
				}
			],
			vocab: [
				['ladder', '사다리'],
				['rent', '빌리다, 대여하다'],
				['photo ID', '사진이 있는 신분증'],
				['machine', '기계'],
				['return', '반납하다']
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
						['To', 'Minseo Gu'],
						['From', 'Paula Voss'],
						['Subject', 'Your photos of Jeju Island'],
						['Date', 'January 14']
					],
					body: [
						'Dear Mr. Gu,',
						'My name is Paula Voss, and I am the editor of Blue Compass Magazine. [1] Thank you for sending us your photos of Jeju Island. [2] That issue will be about travel in Asia, and your pictures are perfect for it.',
						'We pay $80 for each photo that we print. To receive the payment, please fill out the attached form with your bank information and send it back by January 24. [3]',
						'Also, could you write one or two sentences about each picture? Our readers like to know where and when a photo was taken. [4]',
						'I look forward to hearing from you.',
						'Paula Voss'
					],
					ko: [
						'구 선생님께,',
						'저는 블루 컴퍼스 매거진의 편집자 폴라 보스입니다. 제주도 사진을 보내 주셔서 감사합니다. 그중 세 장을 저희 3월 호에 싣고 싶습니다. 3월 호는 아시아 여행을 다루는데, 보내 주신 사진이 거기에 딱 맞습니다.',
						'저희는 잡지에 싣는 사진 한 장당 80달러를 드립니다. 대금을 받으시려면 첨부한 양식에 은행 정보를 적어 1월 24일까지 보내 주세요.',
						'그리고 사진마다 한두 문장씩 설명을 써 주시겠어요? 독자들은 사진을 언제 어디에서 찍었는지 알고 싶어 합니다.',
						'답장을 기다리겠습니다.',
						'폴라 보스 드림'
					]
				}
			],
			questions: [
				{
					id: 'd30-10',
					text: 'What is the purpose of the e-mail?',
					ko: '이메일의 목적은 무엇인가?',
					options: [
						'To accept some photos for a magazine',
						'To order a travel magazine',
						'To ask for a refund',
						'To invite Mr. Gu on a trip'
					],
					optionsKo: [
						'사진 몇 장을 잡지에 싣겠다고 알리려고',
						'여행 잡지를 주문하려고',
						'환불을 요청하려고',
						'구 씨를 여행에 초대하려고'
					],
					answer: 0,
					why: 'your pictures are perfect for it(사진이 그 호에 딱 맞다)이라고 했고, We pay $80 for each photo that we print라며 사진값을 받는 방법을 안내합니다. 보낸 사진을 잡지에 싣겠다고 알리는 글입니다.'
				},
				{
					id: 'd30-11',
					text: 'What should Mr. Gu do by January 24?',
					ko: '구 씨는 1월 24일까지 무엇을 해야 하는가?',
					options: [
						'Visit the magazine office',
						'Send more photos',
						'Return a form',
						'Open a bank account'
					],
					optionsKo: [
						'잡지사 사무실을 방문한다',
						'사진을 더 보낸다',
						'양식을 돌려보낸다',
						'은행 계좌를 만든다'
					],
					answer: 2,
					why: 'please fill out the attached form with your bank information and send it back by January 24라고 했습니다. send it back이 보기에서 Return a form으로 바뀌었습니다.'
				},
				{
					id: 'd30-12',
					text: 'What does Ms. Voss ask Mr. Gu to write?',
					ko: '보스 씨는 구 씨에게 무엇을 써 달라고 요청하는가?',
					options: [
						'A story about his trip',
						'A letter to readers',
						'His home address',
						'A short description of each photo'
					],
					optionsKo: ['여행 이야기', '독자에게 보내는 편지', '집 주소', '사진마다 짧은 설명'],
					answer: 3,
					why: 'could you write one or two sentences about each picture?라고 했습니다. one or two sentences about each picture가 보기에서 A short description of each photo로 바뀌었습니다.'
				},
				{
					id: 'd30-13',
					text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "We would like to use three of them in our March issue."',
					ko: '[1], [2], [3], [4]로 표시된 자리 중 다음 문장이 들어가기에 가장 알맞은 곳은 어디인가? "그중 세 장을 저희 3월 호에 싣고 싶습니다."',
					options: ['[1]', '[2]', '[3]', '[4]'],
					optionsKo: ['[1]', '[2]', '[3]', '[4]'],
					answer: 1,
					why: '주어진 문장의 them은 [2] 앞 문장의 your photos를 가리킵니다. 또 [2] 뒤 문장의 That issue(그 호)가 가리킬 말은 주어진 문장의 our March issue뿐입니다. [2]에 넣어야 앞뒤가 모두 이어집니다. [1] 앞에는 them이 가리킬 말이 아직 없습니다.'
				}
			],
			vocab: [
				['issue', '(잡지의) 호'],
				['print', '싣다, 인쇄하다'],
				['payment', '대금, 지급'],
				['attached', '첨부된'],
				['look forward to', '~을 기대하다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 화자의 의도 문제',
			blocks: [
				{
					type: 'p',
					text: '대화에 나온 **짧은 말 한마디**를 따옴표 안에 보여 주고, 그 말을 한 뜻을 묻는 문제입니다. Part 3에 두 문제쯤 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'What does the woman mean when she says, "I just got here"?',
							'여자가 "방금 왔어요"라고 말한 뜻은 무엇인가?'
						],
						['Why does the man say, "That\'s a lot"?', '남자는 왜 "많네요"라고 말하는가?'],
						[
							'What does the man imply when he says, "It\'s almost noon"?',
							'남자가 "거의 정오예요"라고 말할 때 암시하는 것은 무엇인가?'
						]
					]
				},
				{
					type: 'p',
					text: '같은 말도 **바로 앞 대사**에 따라 뜻이 달라집니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Do you know where the copy room is? — ==I just got here.==',
							ko: '복사실이 어디인지 아세요? — 방금 왔어요.',
							note: '뜻: 저도 이곳을 잘 모릅니다.'
						},
						{
							en: 'Sorry, have you been waiting long? — ==I just got here.==',
							ko: '죄송해요, 오래 기다리셨어요? — 방금 왔어요.',
							note: '뜻: 오래 기다리지 않았으니 괜찮습니다.'
						}
					]
				},
				{
					type: 'box',
					title: '푸는 법',
					items: [
						'듣기 전에 문제의 **따옴표 안 문장**을 읽어 둡니다.',
						'그 말이 들리기 **바로 앞 대사**가 근거입니다. 상대가 무엇을 묻거나 부탁했는지 듣습니다.',
						'그 말 **뒤의 반응**도 확인합니다. 상대의 대답이 뜻을 한 번 더 알려 줍니다.'
					]
				},
				{
					type: 'tip',
					text: '인용 문장의 단어를 그대로 풀이한 보기는 오답인 경우가 많습니다. 말의 겉뜻이 아니라 **그 말을 한 이유**를 고릅니다.'
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
					"Hi, Minjae. Are you coming to the team dinner on Friday? I'm booking a table at the Italian place."
				],
				['M', "I'd love to, but I have to finish the budget report by Monday."],
				['W', "It's only Wednesday."],
				['M', "You're right. I guess I have enough time. Put my name on the list."],
				[
					'W',
					"Great. I'll reserve a table for eight, then. Could you tell Mr. Ortiz about it? He's not answering his phone."
				],
				['M', "Sure. I'm going to see him at the two o'clock meeting."]
			],
			scriptKo: [
				'안녕하세요, 민재 씨. 금요일 팀 회식에 오시나요? 이탈리아 식당에 자리를 예약하려고 해요.',
				'가고 싶은데, 월요일까지 예산 보고서를 끝내야 해요.',
				'아직 수요일이잖아요.',
				'맞네요. 시간은 충분하겠어요. 명단에 제 이름을 넣어 주세요.',
				'좋아요. 그러면 8명으로 예약할게요. 오르티스 씨에게 이 얘기를 전해 주시겠어요? 전화를 안 받으시네요.',
				'그럴게요. 2시 회의에서 만날 거예요.'
			],
			questions: [
				{
					id: 'd30-14',
					text: 'What is the woman planning?',
					ko: '여자는 무엇을 계획하고 있는가?',
					options: [
						'A business trip',
						'A budget meeting',
						'A dinner with coworkers',
						'A cooking class'
					],
					optionsKo: ['출장', '예산 회의', '동료들과의 저녁 식사', '요리 수업'],
					answer: 2,
					why: "여자가 Are you coming to the team dinner on Friday?라고 묻고 I'm booking a table이라고 했습니다. the team dinner가 보기에서 A dinner with coworkers로 바뀌었습니다."
				},
				{
					id: 'd30-15',
					text: 'What does the woman mean when she says, "It\'s only Wednesday"?',
					ko: '여자가 "아직 수요일이잖아요"라고 말한 뜻은 무엇인가?',
					options: [
						'The restaurant is not open yet.',
						'The man has enough time to finish his work.',
						'The dinner should be moved to another day.',
						'She has not started the report.'
					],
					optionsKo: [
						'식당이 아직 문을 열지 않았다.',
						'남자가 일을 끝낼 시간이 충분하다.',
						'회식을 다른 날로 옮겨야 한다.',
						'여자는 보고서를 시작하지 않았다.'
					],
					answer: 1,
					why: '바로 앞에서 남자가 I have to finish the budget report by Monday(월요일까지 보고서를 끝내야 한다)라며 망설였습니다. "아직 수요일"이라는 말은 마감까지 시간이 남았다는 뜻입니다. 남자도 I guess I have enough time이라고 답했습니다.'
				},
				{
					id: 'd30-16',
					text: 'What does the woman ask the man to do?',
					ko: '여자는 남자에게 무엇을 해 달라고 요청하는가?',
					options: [
						'Reserve a table',
						'Answer the phone',
						'Finish a report early',
						'Give a message to a coworker'
					],
					optionsKo: [
						'자리를 예약한다',
						'전화를 받는다',
						'보고서를 일찍 끝낸다',
						'동료에게 말을 전한다'
					],
					answer: 3,
					why: '여자가 Could you tell Mr. Ortiz about it?이라고 했습니다. tell Mr. Ortiz가 보기에서 Give a message to a coworker로 바뀌었습니다. 자리를 예약하는 사람은 여자입니다.'
				}
			],
			vocab: [
				['team dinner', '팀 회식'],
				['budget report', '예산 보고서'],
				['by Monday', '월요일까지'],
				['reserve', '예약하다'],
				['answer the phone', '전화를 받다']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				[
					'W',
					'Mr. Bauer, our client from Kestrel Trading lands at four today. Could you pick her up at the airport?'
				],
				['M', 'Today? My car is at the repair shop.'],
				['W', "Oh, I see. Then I'll book a taxi for her instead."],
				['M', 'Good idea. Is she coming straight to the office?'],
				['W', "No, she'll check in at her hotel first. We're having dinner with her at seven."],
				['M', "All right. I'll print the contract before dinner so we can show it to her."]
			],
			scriptKo: [
				'바우어 씨, 케스트럴 무역의 고객이 오늘 4시에 도착해요. 공항으로 마중 나가 주실 수 있나요?',
				'오늘이요? 제 차가 정비소에 있어요.',
				'아, 그렇군요. 그러면 대신 택시를 예약해 드릴게요.',
				'좋은 생각이에요. 고객이 사무실로 바로 오시나요?',
				'아니요, 먼저 호텔에 체크인하실 거예요. 7시에 함께 저녁을 먹기로 했어요.',
				'알겠어요. 고객에게 보여 드릴 수 있게 저녁 식사 전에 계약서를 인쇄해 둘게요.'
			],
			questions: [
				{
					id: 'd30-17',
					text: "What will happen at four o'clock today?",
					ko: '오늘 4시에 무슨 일이 있는가?',
					options: [
						'A meeting will begin.',
						'A client will arrive.',
						'A repair shop will close.',
						'A dinner will be served.'
					],
					optionsKo: [
						'회의가 시작된다.',
						'고객이 도착한다.',
						'정비소가 문을 닫는다.',
						'저녁 식사가 나온다.'
					],
					answer: 1,
					why: 'our client from Kestrel Trading lands at four today라고 했습니다. lands(착륙하다)가 보기에서 arrive로 바뀌었습니다. 저녁 식사는 7시입니다.'
				},
				{
					id: 'd30-18',
					text: 'What does the man mean when he says, "My car is at the repair shop"?',
					ko: '남자가 "제 차가 정비소에 있어요"라고 말한 뜻은 무엇인가?',
					options: [
						'He cannot drive to the airport.',
						'He needs money for repairs.',
						'He will be late for dinner.',
						"He wants to borrow the woman's car."
					],
					optionsKo: [
						'공항까지 운전해 갈 수 없다.',
						'수리비가 필요하다.',
						'저녁 식사에 늦을 것이다.',
						'여자의 차를 빌리고 싶어 한다.'
					],
					answer: 0,
					why: "바로 앞에서 여자가 Could you pick her up at the airport?(공항으로 마중 나가 줄 수 있나요?)라고 부탁했습니다. 차가 없다는 말은 그 부탁을 들어줄 수 없다는 뜻입니다. 여자도 Then I'll book a taxi라며 다른 방법을 찾았습니다."
				},
				{
					id: 'd30-19',
					text: 'What will the man do before dinner?',
					ko: '남자는 저녁 식사 전에 무엇을 할 것인가?',
					options: [
						'Check in at a hotel',
						'Book a taxi',
						'Print a document',
						'Visit a repair shop'
					],
					optionsKo: [
						'호텔에 체크인한다',
						'택시를 예약한다',
						'문서를 인쇄한다',
						'정비소를 방문한다'
					],
					answer: 2,
					why: "남자가 마지막에 I'll print the contract before dinner라고 했습니다. the contract가 보기에서 a document로 바뀌었습니다. 택시를 예약하는 사람은 여자입니다."
				}
			],
			vocab: [
				['client', '고객'],
				['pick up', '마중 나가다, 태우러 가다'],
				['repair shop', '정비소'],
				['check in', '체크인하다'],
				['contract', '계약서']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 인물 소개 듣기',
			blocks: [
				{
					type: 'p',
					text: '행사에서 **연사, 수상자, 신입 직원**을 청중에게 소개하는 말입니다. 소개하는 순서가 거의 같아서 흐름을 알면 답이 나올 곳을 미리 알 수 있습니다.'
				},
				{
					type: 'box',
					title: '인물 소개의 흐름',
					items: [
						"**누구인지** — I'm happy to introduce ~ / Please welcome ~ / Our guest today is ~",
						'**경력·업적** — She has worked as ~ for ten years. / He wrote ~ / He won ~',
						'**이제 무엇을 할지** — She will talk about ~ / He will show us ~ / Please come up to the stage.'
					]
				},
				{
					type: 'table',
					head: ['질문', '답이 나오는 곳'],
					rows: [
						['Who is Mr. Diaz?', '이름 바로 뒤 (직업·직함)'],
						['What did Ms. Yang do last year?', '가운데 (경력·업적)'],
						['What will the speaker talk about?', '끝부분 (will talk about ~)'],
						['What will happen next?', '마지막 문장']
					]
				},
				{
					type: 'tip',
					text: '이름은 낯설어도 괜찮습니다. 이름 **뒤에 오는 직업**과 **숫자**(몇 년, 몇 명)를 듣습니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '인물 소개',
			script: [
				[
					'W',
					"Welcome to the Local Shop Owners Seminar, everyone. I'm happy to introduce today's speaker, Ms. Gina Rossi."
				],
				[
					'W',
					'Ms. Rossi is a marketing consultant. For fifteen years, she has helped more than one hundred small stores find new customers. She also wrote the book Selling on a Small Budget.'
				],
				[
					'W',
					'Today, she will talk about how to advertise your shop online without spending much money. After the talk, she will answer your questions for twenty minutes.'
				],
				['W', 'Now, please give a warm welcome to Ms. Rossi.']
			],
			scriptKo: [
				'지역 상점주 세미나에 오신 여러분을 환영합니다. 오늘의 연사 지나 로시 씨를 소개하게 되어 기쁩니다.',
				'로시 씨는 마케팅 컨설턴트입니다. 15년 동안 100곳이 넘는 작은 가게가 새 고객을 찾도록 도왔습니다. 「적은 예산으로 판매하기」라는 책도 썼습니다.',
				'오늘은 돈을 많이 들이지 않고 온라인에서 가게를 광고하는 방법에 대해 이야기할 것입니다. 강연이 끝나면 20분 동안 여러분의 질문에 답할 것입니다.',
				'이제 로시 씨를 따뜻하게 맞아 주세요.'
			],
			questions: [
				{
					id: 'd30-20',
					text: 'Who is Ms. Rossi?',
					ko: '로시 씨는 누구인가?',
					options: ['A store owner', 'A marketing expert', 'A Web designer', 'A book editor'],
					optionsKo: ['가게 주인', '마케팅 전문가', '웹 디자이너', '책 편집자'],
					answer: 1,
					why: '이름을 소개한 바로 뒤에 Ms. Rossi is a marketing consultant라고 했습니다. consultant가 보기에서 expert로 바뀌었습니다.'
				},
				{
					id: 'd30-21',
					text: 'What does the speaker say about Ms. Rossi?',
					ko: '화자는 로시 씨에 대해 무엇이라고 말하는가?',
					options: [
						'She owns one hundred stores.',
						'She started her career last year.',
						'She teaches at a university.',
						'She has written a book.'
					],
					optionsKo: [
						'가게 100곳을 소유하고 있다.',
						'작년에 일을 시작했다.',
						'대학에서 가르친다.',
						'책을 쓴 적이 있다.'
					],
					answer: 3,
					why: 'She also wrote the book Selling on a Small Budget이라고 했습니다. one hundred는 로시 씨가 도운 가게의 수입니다.'
				},
				{
					id: 'd30-22',
					text: 'What will Ms. Rossi talk about?',
					ko: '로시 씨는 무엇에 대해 이야기할 것인가?',
					options: [
						'Advertising online at a low cost',
						'Opening a second store',
						'Hiring new employees',
						'Writing a business book'
					],
					optionsKo: [
						'적은 비용으로 온라인 광고하기',
						'두 번째 매장 열기',
						'새 직원 채용하기',
						'경영서 쓰기'
					],
					answer: 0,
					why: 'she will talk about how to advertise your shop online without spending much money라고 했습니다. without spending much money가 보기에서 at a low cost로 바뀌었습니다.'
				}
			],
			vocab: [
				['introduce', '소개하다'],
				['consultant', '컨설턴트, 상담가'],
				['advertise', '광고하다'],
				['budget', '예산'],
				['give a warm welcome', '따뜻하게 맞이하다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '인물 소개',
			script: [
				[
					'M',
					"Good evening, and thank you for coming to our year-end dinner. It's time to announce the Employee of the Year."
				],
				[
					'M',
					"This year's winner is Mr. Jin-su Bae from the delivery team. Mr. Bae joined us six years ago as a driver. Last spring, he designed a new route plan that cut our delivery time by twenty percent."
				],
				[
					'M',
					'Customer complaints also went down. Mr. Bae will receive five hundred dollars and three extra vacation days.'
				],
				['M', 'Mr. Bae, please come up to the stage and say a few words.']
			],
			scriptKo: [
				'안녕하세요, 송년 만찬에 와 주셔서 감사합니다. 올해의 직원을 발표할 시간입니다.',
				'올해의 수상자는 배송팀의 배진수 씨입니다. 배 씨는 6년 전에 운전기사로 입사했습니다. 지난봄에는 배송 시간을 20퍼센트 줄인 새 경로 계획을 만들었습니다.',
				'고객 불만도 줄었습니다. 배 씨는 500달러와 추가 휴가 3일을 받게 됩니다.',
				'배 씨, 무대로 올라와 한 말씀 해 주세요.'
			],
			questions: [
				{
					id: 'd30-23',
					text: 'What is the purpose of the talk?',
					ko: '담화의 목적은 무엇인가?',
					options: [
						'To welcome a new employee',
						'To explain a vacation policy',
						'To present an award',
						'To introduce a delivery service'
					],
					optionsKo: [
						'신입 직원을 환영하려고',
						'휴가 규정을 설명하려고',
						'상을 수여하려고',
						'배송 서비스를 소개하려고'
					],
					answer: 2,
					why: "It's time to announce the Employee of the Year(올해의 직원을 발표할 시간)라고 했고, 이어서 수상자와 상품을 말했습니다."
				},
				{
					id: 'd30-24',
					text: 'What did Mr. Bae do last spring?',
					ko: '배 씨는 지난봄에 무엇을 했는가?',
					options: [
						'He made a plan for faster deliveries.',
						'He joined the company.',
						'He trained new drivers.',
						'He moved to a new team.'
					],
					optionsKo: [
						'배송을 더 빠르게 하는 계획을 만들었다.',
						'회사에 입사했다.',
						'새 운전기사들을 교육했다.',
						'새 팀으로 옮겼다.'
					],
					answer: 0,
					why: 'Last spring, he designed a new route plan that cut our delivery time by twenty percent라고 했습니다. cut our delivery time이 보기에서 faster deliveries로 바뀌었습니다. 입사한 것은 6년 전입니다.'
				},
				{
					id: 'd30-25',
					text: 'What will Mr. Bae most likely do next?',
					ko: '배 씨는 다음에 무엇을 할 것 같은가?',
					options: ['Take a vacation', 'Hand out prizes', 'Serve dinner', 'Give a short speech'],
					optionsKo: ['휴가를 간다', '상품을 나눠 준다', '저녁 식사를 내온다', '짧게 연설한다'],
					answer: 3,
					why: '마지막에 please come up to the stage and say a few words라고 했습니다. say a few words가 보기에서 Give a short speech로 바뀌었습니다.'
				}
			],
			vocab: [
				['year-end', '연말의'],
				['announce', '발표하다'],
				['winner', '수상자'],
				['route', '경로'],
				['complaint', '불만'],
				['say a few words', '한마디 하다']
			]
		}
	]
} satisfies DayContent;
