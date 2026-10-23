import type { DayContent } from '../schema';

export default {
	goals: [
		'Part 7 이메일·편지를 정해진 순서로 읽고 문제를 푼다',
		'Part 3 시각 자료 문제에서 대화와 표를 함께 본다',
		'Part 4 시각 자료 문제에서 보기와 연결되는 열을 미리 본다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '이메일·편지 읽는 순서',
			blocks: [
				{
					type: 'p',
					text: '이메일과 편지는 Part 7에 가장 자주 나오는 글입니다. 형식이 정해져 있어서 **읽는 순서**를 알면 답을 빨리 찾습니다.'
				},
				{
					type: 'box',
					title: '읽는 순서',
					items: [
						'**머리말** — To(받는 사람), From(보내는 사람), Subject(제목), Date(날짜). 누가 누구에게 무슨 일로 쓰는지 먼저 봅니다.',
						'**첫 문단** — 글을 쓴 목적이 나옵니다.',
						'**가운데 문단** — 날짜, 금액, 조건 같은 세부 정보가 나옵니다.',
						'**마지막 문단** — 요청과 다음에 할 일이 나옵니다.'
					]
				},
				{
					type: 'table',
					head: ['위치', '자주 쓰는 표현', '뜻'],
					rows: [
						['첫 문단', 'I am writing to ask about ~', '~에 대해 문의하려고 씁니다'],
						[
							'첫 문단',
							'Thank you for ~ / I am sorry for ~',
							'~에 감사합니다 / ~에 대해 죄송합니다'
						],
						['가운데 문단', 'I have attached ~ / the enclosed ~', '~을 첨부했습니다 / 동봉한 ~'],
						['마지막 문단', 'Please let us know by ~', '~까지 알려 주세요'],
						['마지막 문단', 'I look forward to ~', '~을 기대합니다']
					]
				},
				{
					type: 'tip',
					text: '편지에는 Subject 줄이 없습니다. 대신 맨 아래 **보내는 사람의 직함과 회사 이름**을 먼저 보면 어떤 관계의 편지인지 알 수 있습니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '이메일·편지에 자주 나오는 문제',
			blocks: [
				{
					type: 'p',
					text: '이메일·편지 문제는 **근거가 나오는 자리**가 거의 정해져 있습니다. 질문을 보고 글의 어느 부분을 읽을지 먼저 정합니다.'
				},
				{
					type: 'table',
					head: ['질문', '근거가 있는 곳'],
					rows: [
						['What is the purpose of the e-mail?', '제목(Subject)과 첫 문단'],
						['Who most likely is Mr. Lee?', '머리말, 서명 아래의 직함, 글에 나온 업무'],
						['What is sent with the e-mail?', 'attached(첨부한), enclosed(동봉한) 뒤'],
						['What is Mr. Lee asked to do?', '마지막 문단의 Please ~'],
						['What is NOT mentioned in the letter?', '보기 네 개를 글과 하나씩 대조']
					]
				},
				{
					type: 'box',
					title: '자주 빠지는 함정',
					items: [
						'글에 **날짜가 여러 개** 나옵니다. 보낸 날짜, 행사 날짜, 답장 기한을 구분합니다.',
						'문제에 나온 이름이 **To(받는 사람)인지 From(보내는 사람)인지** 먼저 확인합니다. 바꿔 읽으면 틀립니다.',
						'글 안의 I, we는 보내는 사람이고 you는 받는 사람입니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: '==I have attached== the price list.',
							ko: '가격표를 첨부했습니다.',
							note: '문제는 What is sent with the e-mail?로 묻고, 정답은 A list of prices처럼 바뀌어 나옵니다.'
						}
					]
				},
				{
					type: 'tip',
					text: '답장 이메일은 제목이 Re:로 시작합니다. 받는 사람이 먼저 보낸 글의 내용이 첫 문단에 요약되어 있습니다.'
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
						['To', 'Bayline Coach Service'],
						['From', 'Naomi Kwon'],
						['Subject', 'Bus rental in October'],
						['Date', 'September 2']
					],
					body: [
						'Dear Bayline Coach Service,',
						'I work for Elmtree Software, and I am writing to ask about renting a bus with a driver. We are planning a one-day company trip to Sokcho for about 40 employees on Friday, October 17.',
						'Could you tell me the price for that day? We would like to leave our office at 7 A.M. and return by 8 P.M. In addition, I would like to know if the bus has space for large bags.',
						'We need to decide by next Friday, so please reply this week. If you need more details, you can call me at 555-0172.',
						'Thank you,',
						'Naomi Kwon',
						'Elmtree Software'
					],
					ko: [
						'베이라인 코치 서비스 담당자님께,',
						'저는 엘름트리 소프트웨어에서 일하고 있으며, 기사가 딸린 버스를 빌리는 것에 대해 문의하려고 메일을 씁니다. 10월 17일 금요일에 직원 약 40명이 속초로 당일 회사 여행을 갈 계획입니다.',
						'그날의 가격을 알려 주시겠어요? 오전 7시에 사무실에서 출발해 오후 8시까지 돌아오고 싶습니다. 그리고 버스에 큰 가방을 실을 공간이 있는지도 알고 싶습니다.',
						'다음 주 금요일까지 결정해야 하니 이번 주 안에 답장해 주세요. 더 자세한 내용이 필요하시면 555-0172로 전화해 주세요.',
						'감사합니다.',
						'나오미 권, 엘름트리 소프트웨어'
					]
				}
			],
			questions: [
				{
					id: 'd31-01',
					text: 'Why did Ms. Kwon write the e-mail?',
					ko: '권 씨는 왜 이메일을 썼는가?',
					options: [
						'To cancel a reservation',
						'To apply for a job as a driver',
						'To ask about renting a vehicle',
						'To invite employees on a trip'
					],
					optionsKo: [
						'예약을 취소하려고',
						'운전기사 일자리에 지원하려고',
						'차량 대여에 대해 문의하려고',
						'직원들을 여행에 초대하려고'
					],
					answer: 2,
					why: '제목이 Bus rental in October이고, 첫 문단에서 I am writing to ask about renting a bus with a driver라고 했습니다. a bus가 보기에서 a vehicle로 바뀌었습니다.'
				},
				{
					id: 'd31-02',
					text: 'What information does Ms. Kwon NOT give about the trip?',
					ko: '권 씨가 여행에 대해 알려 주지 않은 정보는 무엇인가?',
					options: [
						'The date',
						'The name of a hotel',
						'The number of people',
						'The departure time'
					],
					optionsKo: ['날짜', '호텔 이름', '인원수', '출발 시간'],
					answer: 1,
					why: '날짜는 Friday, October 17, 인원수는 about 40 employees, 출발 시간은 leave our office at 7 A.M.으로 나와 있습니다. 당일 여행이라 호텔에 관한 말은 없습니다.'
				},
				{
					id: 'd31-03',
					text: 'What does Ms. Kwon want to know about the bus?',
					ko: '권 씨는 버스에 대해 무엇을 알고 싶어 하는가?',
					options: [
						'Whether it has Internet service',
						'How old it is',
						'How many seats it has',
						'Whether it can carry big bags'
					],
					optionsKo: [
						'인터넷을 쓸 수 있는지',
						'얼마나 오래되었는지',
						'좌석이 몇 개인지',
						'큰 가방을 실을 수 있는지'
					],
					answer: 3,
					why: 'I would like to know if the bus has space for large bags라고 했습니다. has space for large bags가 보기에서 can carry big bags로 바뀌었습니다.'
				}
			],
			vocab: [
				['rent', '빌리다'],
				['company trip', '회사 여행'],
				['in addition', '그리고, 게다가'],
				['space', '공간'],
				['detail', '자세한 내용']
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
						['To', 'Victor Delgado'],
						['From', 'Jiwon Shim'],
						['Subject', 'Re: Charged twice in March'],
						['Date', 'March 11']
					],
					body: [
						'Dear Mr. Delgado,',
						'Thank you for your e-mail of March 10. I checked your account, and you are right. We charged your monthly fee of $45 twice this month. I am very sorry for this mistake.',
						'The extra $45 will be returned to your credit card within five business days. You do not need to do anything.',
						'To apologize, I have attached a coupon for two free yoga classes. You can use it at any time before the end of June.',
						'If the money does not appear by March 18, please call me at 555-0164.',
						'Sincerely,',
						'Jiwon Shim',
						'Member Services, Corefit Gym'
					],
					ko: [
						'델가도 님께,',
						'3월 10일에 보내 주신 이메일 감사합니다. 계정을 확인해 보니 말씀하신 대로입니다. 이번 달에 월 회비 45달러가 두 번 청구되었습니다. 이 실수에 대해 진심으로 사과드립니다.',
						'더 청구된 45달러는 영업일 기준 5일 안에 신용카드로 환불됩니다. 따로 하실 일은 없습니다.',
						'사과의 뜻으로 요가 수업 2회 무료 쿠폰을 첨부했습니다. 6월 말 전까지 언제든 쓰실 수 있습니다.',
						'3월 18일까지 돈이 들어오지 않으면 555-0164로 저에게 전화해 주세요.',
						'심지원 드림',
						'코어핏 체육관 회원 서비스'
					]
				}
			],
			questions: [
				{
					id: 'd31-04',
					text: 'What problem did Mr. Delgado report?',
					ko: '델가도 씨는 어떤 문제를 알렸는가?',
					options: [
						'A class was canceled.',
						'He paid the same fee two times.',
						'His coupon did not work.',
						'His credit card was lost.'
					],
					optionsKo: [
						'수업이 취소되었다.',
						'같은 요금을 두 번 냈다.',
						'쿠폰을 쓸 수 없었다.',
						'신용카드를 잃어버렸다.'
					],
					answer: 1,
					why: '제목이 Re: Charged twice in March이고, 첫 문단에서 you are right. We charged your monthly fee of $45 twice this month라고 했습니다. 회비를 두 번 청구했다는 말이 보기에서 He paid the same fee two times로 바뀌었습니다.'
				},
				{
					id: 'd31-05',
					text: 'Who most likely is Mr. Delgado?',
					ko: '델가도 씨는 누구일 것 같은가?',
					options: ['A yoga teacher', 'A bank clerk', 'A gym member', 'A delivery driver'],
					optionsKo: ['요가 강사', '은행 직원', '체육관 회원', '배송 기사'],
					answer: 2,
					why: '보내는 사람의 소속이 Member Services, Corefit Gym이고, 델가도 씨에게 your monthly fee(월 회비)를 청구했다고 했습니다. 델가도 씨는 매달 회비를 내는 체육관 회원입니다.'
				},
				{
					id: 'd31-06',
					text: 'What did Ms. Shim send with the e-mail?',
					ko: '심 씨는 이메일과 함께 무엇을 보냈는가?',
					options: ['A receipt', 'A class schedule', 'A membership card', 'A coupon'],
					optionsKo: ['영수증', '수업 시간표', '회원 카드', '쿠폰'],
					answer: 3,
					why: 'I have attached a coupon for two free yoga classes라고 했습니다. attached(첨부했다)는 이메일과 함께 보냈다는 뜻입니다.'
				}
			],
			vocab: [
				['account', '계정'],
				['monthly fee', '월 회비'],
				['business day', '영업일'],
				['attach', '첨부하다'],
				['apologize', '사과하다']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '편지',
			passages: [
				{
					kind: '편지',
					head: [['Date', 'April 3']],
					body: [
						'Dear Ms. Ahn,',
						'Thank you for applying for the editor position at Brightwell Publishing. We would like to confirm your interview on Wednesday, April 16, at 10:30 A.M.',
						'The interview will take place at our main office at 25 Harbor Road. Please come to the reception desk on the fourth floor and ask for me. The interview will last about one hour and will include a short writing test.',
						'Please bring a photo ID and two samples of your writing. If you cannot come at this time, call my office at 555-0137 by April 9.',
						'Sincerely,',
						'Robert Finch',
						'Human Resources Manager, Brightwell Publishing'
					],
					ko: [
						'안 선생님께,',
						'브라이트웰 출판사의 편집자 자리에 지원해 주셔서 감사합니다. 4월 16일 수요일 오전 10시 30분에 있을 면접을 확인해 드리고자 합니다.',
						'면접은 하버로 25번지에 있는 본사에서 진행됩니다. 4층 안내 데스크로 오셔서 저를 찾아 주세요. 면접은 약 한 시간 동안 진행되며 짧은 작문 시험이 포함됩니다.',
						'사진이 있는 신분증과 직접 쓴 글 두 편을 가져와 주세요. 이 시간에 오실 수 없으면 4월 9일까지 제 사무실 555-0137로 전화해 주세요.',
						'로버트 핀치 드림',
						'브라이트웰 출판사 인사부장'
					]
				}
			],
			questions: [
				{
					id: 'd31-07',
					text: 'Why was the letter written?',
					ko: '편지는 왜 쓰였는가?',
					options: [
						'To confirm an interview time',
						'To offer Ms. Ahn a job',
						'To ask for a book review',
						'To announce an office move'
					],
					optionsKo: [
						'면접 시간을 확인하려고',
						'안 씨에게 일자리를 제안하려고',
						'서평을 요청하려고',
						'사무실 이전을 알리려고'
					],
					answer: 0,
					why: '첫 문단에서 We would like to confirm your interview on Wednesday, April 16, at 10:30 A.M.이라고 했습니다. 아직 면접 전이므로 일자리를 제안하는 글이 아닙니다.'
				},
				{
					id: 'd31-08',
					text: 'What will Ms. Ahn do during the interview?',
					ko: '안 씨는 면접 중에 무엇을 할 것인가?',
					options: [
						'Give a presentation',
						'Tour the office',
						'Take a writing test',
						'Meet the company president'
					],
					optionsKo: ['발표를 한다', '사무실을 둘러본다', '작문 시험을 본다', '회사 사장을 만난다'],
					answer: 2,
					why: '면접에 대해 will include a short writing test(짧은 작문 시험이 포함된다)라고 했습니다.'
				},
				{
					id: 'd31-09',
					text: 'What is NOT mentioned in the letter?',
					ko: '편지에 언급되지 않은 것은 무엇인가?',
					options: [
						'Where the interview will be held',
						'How long the interview will take',
						'What Ms. Ahn should bring',
						'How many people applied for the job'
					],
					optionsKo: [
						'면접이 열리는 곳',
						'면접에 걸리는 시간',
						'안 씨가 가져와야 하는 것',
						'그 자리에 지원한 사람 수'
					],
					answer: 3,
					why: '장소는 at our main office at 25 Harbor Road, 걸리는 시간은 about one hour, 가져올 것은 a photo ID and two samples of your writing으로 나와 있습니다. 지원자 수는 나오지 않습니다.'
				}
			],
			vocab: [
				['apply for', '~에 지원하다'],
				['position', '일자리, 직책'],
				['confirm', '확인하다'],
				['reception desk', '안내 데스크'],
				['last', '계속되다'],
				['sample', '견본, 예시']
			]
		},
		{
			type: 'set',
			part: 7,
			label: '편지',
			passages: [
				{
					kind: '편지',
					head: [['Date', 'November 4']],
					body: [
						'Dear Mr. Evans,',
						'On behalf of Maple Valley Library, I would like to thank you for your help this year. You read stories to children every Saturday morning, and the program became our most popular event.',
						'To show our thanks, we are inviting all volunteers to a lunch on Friday, December 5, at noon. It will be held in the community room on the second floor of the library. You are welcome to bring a friend or a family member.',
						'Please let us know by November 21 if you can attend. You can call 555-0119 or fill out the enclosed card and return it to the front desk.',
						'Warm regards,',
						'Helen Song',
						'Director, Maple Valley Library'
					],
					ko: [
						'에번스 님께,',
						'메이플 밸리 도서관을 대표해 올 한 해 도와주신 것에 감사드립니다. 매주 토요일 아침 아이들에게 이야기를 읽어 주셨고, 그 프로그램은 저희 도서관에서 가장 인기 있는 행사가 되었습니다.',
						'감사의 뜻으로 12월 5일 금요일 정오에 모든 자원봉사자를 점심 식사에 초대합니다. 식사는 도서관 2층 커뮤니티실에서 열립니다. 친구나 가족 한 분과 함께 오셔도 됩니다.',
						'참석하실 수 있는지 11월 21일까지 알려 주세요. 555-0119로 전화하시거나, 동봉한 카드를 작성해 안내 데스크에 내 주시면 됩니다.',
						'헬렌 송 드림',
						'메이플 밸리 도서관 관장'
					]
				}
			],
			questions: [
				{
					id: 'd31-10',
					text: 'What is one purpose of the letter?',
					ko: '편지의 목적 중 하나는 무엇인가?',
					options: [
						'To ask Mr. Evans to become a volunteer',
						'To invite Mr. Evans to an event',
						'To announce new library hours',
						'To request a book donation'
					],
					optionsKo: [
						'에번스 씨에게 자원봉사자가 되어 달라고 요청하려고',
						'에번스 씨를 행사에 초대하려고',
						'도서관의 새 운영 시간을 알리려고',
						'도서 기증을 요청하려고'
					],
					answer: 1,
					why: '첫 문단에서 감사 인사를 한 뒤, 둘째 문단에서 we are inviting all volunteers to a lunch(모든 자원봉사자를 점심에 초대한다)라고 했습니다. a lunch가 보기에서 an event로 바뀌었습니다.'
				},
				{
					id: 'd31-11',
					text: 'What is suggested about Mr. Evans?',
					ko: '에번스 씨에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'He did volunteer work on weekends.',
						'He is the director of the library.',
						'He works at a bookstore.',
						'He will retire in December.'
					],
					optionsKo: [
						'주말에 자원봉사를 했다.',
						'도서관 관장이다.',
						'서점에서 일한다.',
						'12월에 은퇴한다.'
					],
					answer: 0,
					why: 'You read stories to children every Saturday morning이라고 했고, 초대 대상은 all volunteers(모든 자원봉사자)입니다. 에번스 씨는 토요일마다 도서관에서 자원봉사를 한 사람입니다. 관장은 편지를 쓴 송 씨입니다.'
				},
				{
					id: 'd31-12',
					text: 'What is indicated about the lunch?',
					ko: '점심 식사에 대해 알 수 있는 것은 무엇인가?',
					options: [
						'It will be held at a restaurant.',
						'It is on a Saturday.',
						'Mr. Evans can bring another person.',
						'It costs five dollars per person.'
					],
					optionsKo: [
						'식당에서 열린다.',
						'토요일에 있다.',
						'에번스 씨는 다른 사람을 데려올 수 있다.',
						'한 사람당 5달러가 든다.'
					],
					answer: 2,
					why: 'You are welcome to bring a friend or a family member(친구나 가족을 데려와도 된다)라고 했습니다. a friend or a family member가 보기에서 another person으로 바뀌었습니다. 장소는 도서관의 the community room이고, 요일은 Friday입니다. 비용에 관한 말은 없습니다.'
				},
				{
					id: 'd31-13',
					text: 'How can Mr. Evans reply to the invitation?',
					ko: '에번스 씨는 초대에 어떻게 답할 수 있는가?',
					options: [
						'By handing in a card',
						'By sending an e-mail',
						"By visiting the director's office",
						'By signing up online'
					],
					optionsKo: [
						'카드를 제출해서',
						'이메일을 보내서',
						'관장실을 방문해서',
						'온라인으로 신청해서'
					],
					answer: 0,
					why: 'You can call 555-0119 or fill out the enclosed card and return it to the front desk라고 했습니다. 전화하거나 카드를 내는 두 가지 방법이 있고, return it이 보기에서 handing in a card로 바뀌었습니다.'
				}
			],
			vocab: [
				['on behalf of', '~을 대표하여'],
				['volunteer', '자원봉사자'],
				['invite', '초대하다'],
				['be welcome to', '~해도 좋다'],
				['enclosed', '동봉한'],
				['attend', '참석하다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 3: 시각 자료 문제',
			blocks: [
				{
					type: 'p',
					text: '문제지에 **표, 가격표, 층별 안내** 같은 시각 자료가 인쇄되어 있고, 대화와 함께 봐야 풀리는 문제입니다. 질문이 **Look at the graphic.**으로 시작합니다. Part 3에 세 문제쯤 나옵니다.'
				},
				{
					type: 'table',
					head: ['질문', '뜻'],
					rows: [
						[
							'Look at the graphic. Which train will the speakers take?',
							'시각 자료를 보시오. 화자들은 어느 열차를 탈 것인가?'
						],
						[
							'Look at the graphic. How much will the woman pay?',
							'시각 자료를 보시오. 여자는 얼마를 낼 것인가?'
						],
						[
							'Look at the graphic. Which room will the man reserve?',
							'시각 자료를 보시오. 남자는 어느 방을 예약할 것인가?'
						]
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'대화를 듣기 **전에** 표를 먼저 봅니다. 제목과 각 칸에 무엇이 있는지 확인합니다.',
						'대화에서 **표에 있는 말**(회사 이름, 크기, 시간)이 들리면 표에서 그 줄을 찾습니다.',
						'같은 줄의 **옆 칸**에 있는 정보가 답입니다.'
					]
				},
				{
					type: 'p',
					text: '아래 표를 보면서 "We need seats for twenty people."을 들었다면, 표에서 20을 찾아 같은 줄의 **Room B**를 고릅니다.'
				},
				{
					type: 'table',
					head: ['Room', 'Seats'],
					rows: [
						['Room A', '10'],
						['Room B', '20'],
						['Room C', '40']
					]
				},
				{
					type: 'tip',
					text: '답은 대화에서 직접 말해 주지 않습니다. 보기에 있는 말은 대화에 나오지 않고, 표의 **다른 칸**에 있는 말이 들립니다.'
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
					"Good morning. I'm here for a ten o'clock meeting, but I've never been to this building before."
				],
				['M', 'Welcome. Which company are you visiting?'],
				['W', "Skyline Travel. I'm meeting Mr. Jeon about a group tour for my company."],
				[
					'M',
					"I see. Please write your name here, and I'll give you a visitor's pass. The elevators are on your left."
				],
				['W', 'Thank you. Oh, I parked in the garage downstairs. Do I have to pay?'],
				['M', 'No, parking is free for visitors. Just show your pass when you leave.']
			],
			scriptKo: [
				'안녕하세요. 10시 회의 때문에 왔는데, 이 건물에는 처음 와 봐요.',
				'어서 오세요. 어느 회사를 방문하시나요?',
				'스카이라인 여행사요. 회사 단체 여행 건으로 전 선생님을 만나기로 했어요.',
				'알겠습니다. 여기에 성함을 적어 주시면 방문증을 드리겠습니다. 엘리베이터는 왼쪽에 있습니다.',
				'감사합니다. 아, 아래층 주차장에 차를 세웠는데요. 요금을 내야 하나요?',
				'아니요, 방문객은 주차가 무료입니다. 나가실 때 방문증만 보여 주세요.'
			],
			graphic: {
				title: 'Building Directory',
				head: ['Floor', 'Company'],
				rows: [
					['2nd', 'Hanson Law Office'],
					['3rd', 'Bright Eye Clinic'],
					['4th', 'Skyline Travel'],
					['5th', 'Summit Accounting']
				]
			},
			questions: [
				{
					id: 'd31-14',
					text: 'What does the woman say about the building?',
					ko: '여자는 건물에 대해 무엇이라고 말하는가?',
					options: [
						'It is her first visit.',
						'It is hard to find.',
						'It has a new elevator.',
						'It is closed in the morning.'
					],
					optionsKo: [
						'처음 방문했다.',
						'찾기 어렵다.',
						'새 엘리베이터가 있다.',
						'오전에는 문을 닫는다.'
					],
					answer: 0,
					why: "여자가 I've never been to this building before(이 건물에 와 본 적이 없다)라고 했습니다. 보기에서 It is her first visit으로 바뀌었습니다."
				},
				{
					id: 'd31-15',
					text: 'Look at the graphic. Which floor will the woman go to?',
					ko: '시각 자료를 보시오. 여자는 몇 층으로 갈 것인가?',
					options: ['The second floor', 'The third floor', 'The fourth floor', 'The fifth floor'],
					optionsKo: ['2층', '3층', '4층', '5층'],
					answer: 2,
					why: '남자가 어느 회사를 방문하는지 묻자 여자가 Skyline Travel이라고 답했습니다. 표에서 Skyline Travel은 4th(4층)에 있습니다. 대화에서는 층을 말하지 않았습니다.'
				},
				{
					id: 'd31-16',
					text: 'What should the woman do when she leaves?',
					ko: '여자는 나갈 때 무엇을 해야 하는가?',
					options: ['Pay a parking fee', 'Return a key', 'Sign her name again', 'Show her pass'],
					optionsKo: [
						'주차 요금을 낸다',
						'열쇠를 반납한다',
						'이름을 다시 적는다',
						'방문증을 보여 준다'
					],
					answer: 3,
					why: '남자가 마지막에 Just show your pass when you leave라고 했습니다. 주차는 방문객에게 무료입니다.'
				}
			],
			vocab: [
				['directory', '층별 안내'],
				["visitor's pass", '방문증'],
				['group tour', '단체 여행'],
				['garage', '주차장'],
				['downstairs', '아래층에']
			]
		},
		{
			type: 'set',
			part: 3,
			label: '대화',
			script: [
				['M', "Ms. Yoo, do you have a minute? I need a favor for Thursday's new staff training."],
				['W', "Sure, Mr. Grant. What's the matter?"],
				[
					'M',
					"I'm supposed to teach all four sessions, but I have a doctor's appointment in the afternoon. Could you teach the one o'clock session for me?"
				],
				['W', "No problem. I'm free then. Are the materials ready?"],
				[
					'M',
					"Yes. I'll e-mail the slides to you today. I should be back by two fifteen for the last session."
				],
				['W', "Okay. I'll look at them tonight."]
			],
			scriptKo: [
				'유 선생님, 잠깐 시간 있으세요? 목요일 신입 직원 교육 때문에 부탁드릴 일이 있어요.',
				'네, 그랜트 씨. 무슨 일이세요?',
				'제가 네 시간을 모두 가르치기로 되어 있는데, 오후에 병원 예약이 있어요. 1시 수업을 대신 맡아 주실 수 있나요?',
				'그럼요. 그때는 시간이 돼요. 자료는 준비되어 있나요?',
				'네. 오늘 슬라이드를 이메일로 보내 드릴게요. 저는 마지막 수업에 맞춰 2시 15분까지 돌아올 거예요.',
				'알겠어요. 오늘 밤에 살펴볼게요.'
			],
			graphic: {
				title: 'New Staff Training — Thursday',
				head: ['Time', 'Topic'],
				rows: [
					['9:00 A.M.', 'Company Rules'],
					['10:30 A.M.', 'Safety'],
					['1:00 P.M.', 'Cash Register'],
					['2:30 P.M.', 'Customer Service']
				]
			},
			questions: [
				{
					id: 'd31-17',
					text: 'What will take place on Thursday?',
					ko: '목요일에 무슨 일이 있는가?',
					options: [
						'A job interview',
						'Training for new employees',
						'A sales meeting',
						'A store opening'
					],
					optionsKo: ['채용 면접', '신입 직원 교육', '영업 회의', '매장 개업'],
					answer: 1,
					why: "남자가 첫 대사에서 Thursday's new staff training이라고 했습니다. new staff가 보기에서 new employees로 바뀌었습니다."
				},
				{
					id: 'd31-18',
					text: 'Look at the graphic. Which topic will the woman teach?',
					ko: '시각 자료를 보시오. 여자는 어느 주제를 가르칠 것인가?',
					options: ['Company Rules', 'Safety', 'Cash Register', 'Customer Service'],
					optionsKo: ['회사 규정', '안전', '계산대 사용법', '고객 서비스'],
					answer: 2,
					why: "남자가 Could you teach the one o'clock session for me?라고 부탁했고 여자가 No problem이라고 답했습니다. 표에서 1:00 P.M.의 주제는 Cash Register입니다. 마지막 수업인 Customer Service는 남자가 돌아와서 맡습니다."
				},
				{
					id: 'd31-19',
					text: 'What will the man send to the woman today?',
					ko: '남자는 오늘 여자에게 무엇을 보낼 것인가?',
					options: ['Some slides', 'A training schedule', 'A list of new staff', 'A medical form'],
					optionsKo: ['슬라이드', '교육 일정표', '신입 직원 명단', '진료 서류'],
					answer: 0,
					why: "남자가 I'll e-mail the slides to you today라고 했습니다."
				}
			],
			vocab: [
				['favor', '부탁'],
				['be supposed to', '~하기로 되어 있다'],
				['session', '(수업) 시간'],
				['materials', '자료'],
				['slide', '슬라이드']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 4: 담화의 시각 자료 문제',
			blocks: [
				{
					type: 'p',
					text: 'Part 4에도 시각 자료 문제가 두 문제쯤 나옵니다. 푸는 방식은 Part 3와 같습니다. 다만 말하는 사람이 한 명이라 단서가 **한 번만** 나오므로, 표를 미리 봐 두는 것이 더 중요합니다.'
				},
				{
					type: 'box',
					title: '보기와 연결되는 열을 미리 봅니다',
					items: [
						'표의 열이 두 개면 **한 열은 보기**에 있고, **다른 열은 담화**에서 들립니다.',
						'보기가 시간이면 담화에서는 시간을 말하지 않고, 그 옆 칸의 수업 이름이나 활동을 말합니다.',
						'듣기 전에 **보기에 없는 열**을 읽어 두고, 그 말이 들리면 같은 줄의 보기를 고릅니다.'
					]
				},
				{
					type: 'table',
					head: ['보기에 나오는 열', '담화에서 들리는 열', '들리는 말의 예'],
					rows: [
						['시간', '수업·활동 이름', 'The dance class is canceled.'],
						['요일', '날씨', 'It will snow that day.'],
						['가격', '상품 이름·크기', 'We recommend the family ticket.']
					]
				},
				{
					type: 'tip',
					text: '담화에서 표의 항목이 **두 개 이상** 들릴 수 있습니다. 문제가 묻는 것(취소된 것, 옮긴 날 등)이 어느 쪽인지 문제를 먼저 읽고 정해 둡니다.'
				}
			]
		},
		{
			type: 'set',
			part: 4,
			label: '안내 방송',
			script: [
				[
					'W',
					"Good afternoon, book fair visitors. This is an announcement from the Dalewood Book Fair office. We have two changes to today's author talks."
				],
				[
					'W',
					"Unfortunately, Ms. Linda Carter's flight was delayed, so her talk is canceled. We are very sorry about this."
				],
				[
					'W',
					"Also, Mr. Sung-min Ko's talk will be held in Hall B instead of Hall A because so many people signed up."
				],
				['W', 'After each talk, the speaker will sign books near the main entrance. Thank you.']
			],
			scriptKo: [
				'도서전을 찾아 주신 여러분, 안녕하세요. 데일우드 도서전 사무국에서 알려 드립니다. 오늘 작가 강연에 변경 사항이 두 가지 있습니다.',
				'죄송하게도 린다 카터 씨의 비행기가 지연되어 강연이 취소되었습니다. 대단히 죄송합니다.',
				'또한 고성민 씨의 강연은 신청자가 아주 많아서 A홀이 아니라 B홀에서 열립니다.',
				'강연이 끝날 때마다 연사가 정문 근처에서 책에 사인을 해 드립니다. 감사합니다.'
			],
			graphic: {
				title: "Today's Author Talks",
				head: ['Time', 'Speaker'],
				rows: [
					['10:00 A.M.', 'Anna Petrova'],
					['11:30 A.M.', 'Sung-min Ko'],
					['2:00 P.M.', 'Linda Carter'],
					['3:30 P.M.', 'James Obi']
				]
			},
			questions: [
				{
					id: 'd31-20',
					text: 'What is the announcement mainly about?',
					ko: '안내 방송은 주로 무엇에 관한 것인가?',
					options: [
						'A new bookstore',
						'Changes to some talks',
						'A late book delivery',
						'Ticket prices'
					],
					optionsKo: ['새 서점', '일부 강연의 변경 사항', '늦어진 도서 배송', '입장권 가격'],
					answer: 1,
					why: "첫 부분에서 We have two changes to today's author talks라고 했고, 이어서 취소된 강연과 장소가 바뀐 강연을 알렸습니다."
				},
				{
					id: 'd31-21',
					text: 'Look at the graphic. What time was the canceled talk scheduled to begin?',
					ko: '시각 자료를 보시오. 취소된 강연은 몇 시에 시작할 예정이었는가?',
					options: ['10:00 A.M.', '11:30 A.M.', '2:00 P.M.', '3:30 P.M.'],
					optionsKo: ['오전 10시', '오전 11시 30분', '오후 2시', '오후 3시 30분'],
					answer: 2,
					why: "Ms. Linda Carter's flight was delayed, so her talk is canceled라고 했습니다. 표에서 Linda Carter의 강연은 2:00 P.M.입니다. 고성민 씨의 강연(11:30 A.M.)은 취소된 것이 아니라 장소만 바뀌었습니다."
				},
				{
					id: 'd31-22',
					text: "Why was Mr. Ko's talk moved to a different hall?",
					ko: '고 씨의 강연은 왜 다른 홀로 옮겨졌는가?',
					options: [
						'Many people registered for it.',
						'Hall A is being repaired.',
						'His flight was delayed.',
						'He asked for a later time.'
					],
					optionsKo: [
						'많은 사람이 신청했다.',
						'A홀을 수리하고 있다.',
						'그의 비행기가 지연되었다.',
						'그가 더 늦은 시간을 요청했다.'
					],
					answer: 0,
					why: 'in Hall B instead of Hall A because so many people signed up이라고 했습니다. signed up이 보기에서 registered로 바뀌었습니다. 비행기가 지연된 사람은 카터 씨입니다.'
				}
			],
			vocab: [
				['announcement', '안내 방송'],
				['author', '작가'],
				['be delayed', '지연되다'],
				['instead of', '~ 대신에'],
				['sign up', '신청하다']
			]
		},
		{
			type: 'set',
			part: 4,
			label: '회의 발언',
			script: [
				[
					'M',
					"Good morning, team. Before we start, I need to tell you about a change to this week's plan."
				],
				[
					'M',
					"We were going to paint the outside walls of the Dawson Building on Wednesday. But please look at the weather forecast. It will rain that day, so we'll do the outside work on the first sunny day after that."
				],
				[
					'M',
					"On Wednesday, we'll paint the meeting rooms inside instead. The building manager already agreed to this change."
				],
				['M', 'Please check the paint in the truck and tell me if we need more.']
			],
			scriptKo: [
				'안녕하세요, 여러분. 시작하기 전에 이번 주 계획이 바뀐 것을 알려 드리겠습니다.',
				'수요일에 도슨 빌딩의 외벽을 칠할 예정이었습니다. 그런데 일기 예보를 봐 주세요. 그날 비가 오기 때문에 외부 작업은 그 뒤 처음으로 맑은 날에 하겠습니다.',
				'수요일에는 대신 건물 안의 회의실을 칠하겠습니다. 건물 관리인도 이 변경에 이미 동의했습니다.',
				'트럭에 있는 페인트를 확인하고 더 필요한지 알려 주세요.'
			],
			graphic: {
				title: 'Weather Forecast',
				head: ['Day', 'Weather'],
				rows: [
					['Tuesday', 'Sunny'],
					['Wednesday', 'Rainy'],
					['Thursday', 'Cloudy'],
					['Friday', 'Sunny']
				]
			},
			questions: [
				{
					id: 'd31-23',
					text: 'Who most likely are the listeners?',
					ko: '청자들은 누구일 것 같은가?',
					options: ['Painters', 'Weather reporters', 'Building managers', 'Truck drivers'],
					optionsKo: ['페인트공', '기상 캐스터', '건물 관리인', '트럭 기사'],
					answer: 0,
					why: '화자가 청자들을 team이라고 부르며 paint the outside walls(외벽을 칠하다), paint the meeting rooms(회의실을 칠하다)라고 작업을 설명합니다. 청자들은 페인트칠을 하는 작업자들입니다.'
				},
				{
					id: 'd31-24',
					text: 'Look at the graphic. When will the outside work be done?',
					ko: '시각 자료를 보시오. 외부 작업은 언제 할 것인가?',
					options: ['On Tuesday', 'On Wednesday', 'On Thursday', 'On Friday'],
					optionsKo: ['화요일', '수요일', '목요일', '금요일'],
					answer: 3,
					why: "원래 수요일이었지만 It will rain that day, so we'll do the outside work on the first sunny day after that이라고 했습니다. 표에서 수요일 뒤에 처음 나오는 Sunny는 Friday입니다. 목요일은 Cloudy이고, 화요일은 수요일보다 앞입니다."
				},
				{
					id: 'd31-25',
					text: 'What does the speaker ask the listeners to do?',
					ko: '화자는 청자들에게 무엇을 하라고 요청하는가?',
					options: [
						'Call the building manager',
						'Check some supplies',
						'Move a truck',
						'Clean the meeting rooms'
					],
					optionsKo: [
						'건물 관리인에게 전화한다',
						'물품을 확인한다',
						'트럭을 옮긴다',
						'회의실을 청소한다'
					],
					answer: 1,
					why: 'Please check the paint in the truck이라고 했습니다. the paint가 보기에서 some supplies로 바뀌었습니다.'
				}
			],
			vocab: [
				['weather forecast', '일기 예보'],
				['outside wall', '외벽'],
				['instead', '대신'],
				['agree to', '~에 동의하다'],
				['supplies', '물품']
			]
		}
	]
} satisfies DayContent;
