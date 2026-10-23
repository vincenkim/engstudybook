import type { DayContent } from '../schema';

export default {
	goals: [
		'대명사의 다섯 가지 모양을 구분한다',
		'빈칸 뒤를 보고 주격·소유격·목적격을 고른다',
		'When 질문에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '대명사는 자리에 따라 모양이 바뀝니다',
			blocks: [
				{
					type: 'p',
					text: '대명사는 앞에 나온 명사를 대신하는 말입니다. 같은 사람을 가리켜도 **문장에서 놓인 자리**에 따라 모양이 달라집니다.'
				},
				{
					type: 'table',
					head: [
						'주격 (~은/는)',
						'소유격 (~의)',
						'목적격 (~을/를)',
						'소유대명사 (~의 것)',
						'재귀대명사 (~ 자신)'
					],
					rows: [
						['I', 'my', 'me', 'mine', 'myself'],
						['you', 'your', 'you', 'yours', 'yourself'],
						['he', 'his', 'him', 'his', 'himself'],
						['she', 'her', 'her', 'hers', 'herself'],
						['it', 'its', 'it', '—', 'itself'],
						['we', 'our', 'us', 'ours', 'ourselves'],
						['they', 'their', 'them', 'theirs', 'themselves']
					]
				},
				{
					type: 'tip',
					text: '보기가 he / his / him / himself처럼 한 사람의 여러 모양이면 대명사 문제입니다. 해석하지 말고 빈칸 **앞뒤**를 보세요.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '빈칸 뒤를 보고 고릅니다',
			blocks: [
				{
					type: 'box',
					title: '대명사 자리 신호',
					items: [
						'빈칸 뒤에 **동사** → 주격 — ==They== will arrive soon.',
						'빈칸 뒤에 **명사** → 소유격 — Please bring ==your== ID card.',
						'**동사나 전치사 뒤**이고 뒤에 명사가 없음 → 목적격 — Please contact ==us==. / with ==them==',
						'뒤에 명사 없이 **"~의 것"** → 소유대명사 — This seat is ==mine==.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Mr. Kim left ==his== bag in the taxi.',
							ko: '김 씨는 택시에 자기 가방을 두고 내렸습니다.',
							note: '빈칸 뒤에 명사 bag → 소유격'
						},
						{
							en: 'The manager wants to meet ==him== today.',
							ko: '관리자는 오늘 그를 만나고 싶어 합니다.',
							note: '동사 meet 뒤, 뒤에 명사 없음 → 목적격'
						}
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '재귀대명사 -self',
			blocks: [
				{
					type: 'p',
					text: '-self / -selves로 끝나는 재귀대명사는 "자기 자신"이라는 뜻입니다. 쓰이는 경우는 세 가지입니다.'
				},
				{
					type: 'box',
					title: '재귀대명사를 쓰는 경우',
					items: [
						'주어와 목적어가 **같은 사람**일 때 — Please help ==yourself==.',
						'"직접, 스스로"라고 **강조**할 때 — Ms. Lee wrote the report ==herself==. (빼도 문장이 완성됨)',
						'**by + 재귀대명사** = 혼자서 — He finished the work by ==himself==.'
					]
				},
				{
					type: 'tip',
					text: '"혼자서"는 by himself 또는 on **his** own입니다. own 앞에는 소유격이 옵니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Garcia asked ------- assistant to book the flight.',
			options: ['she', 'her', 'hers', 'herself'],
			answer: 1,
			ko: '가르시아 씨는 비서에게 항공편을 예약해 달라고 했습니다.',
			steps: [
				'보기가 모두 she의 여러 모양입니다. 대명사 문제입니다.',
				'빈칸 뒤를 봅니다. 명사 **assistant**가 있습니다.',
				'명사 앞에는 소유격이 옵니다. 정답은 (B) **her**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Mr. Cho completed the entire project by -------.',
			options: ['he', 'his', 'him', 'himself'],
			answer: 3,
			ko: '조 씨는 프로젝트 전체를 혼자서 완료했습니다.',
			steps: [
				'보기가 모두 he의 여러 모양입니다. 대명사 문제입니다.',
				'빈칸 앞에 **by**가 있고, 문장의 주어는 Mr. Cho입니다.',
				'by + 재귀대명사는 "혼자서"라는 표현입니다. 정답은 (D) **himself**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-01',
			text: 'Please submit ------- application by the end of the month.',
			options: ['you', 'your', 'yours', 'yourself'],
			answer: 1,
			ko: '이번 달 말까지 지원서를 제출해 주세요.',
			why: '빈칸 뒤에 명사 application이 있습니다. 명사 앞에는 소유격 your가 옵니다.',
			notes: ['주격·목적격', '소유격 (정답)', '소유대명사', '재귀대명사'],
			vocab: [
				['submit', '제출하다'],
				['application', '지원서'],
				['by the end of', '~ 말까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-02',
			text: 'Mr. Kang said that ------- would attend the seminar next week.',
			options: ['he', 'his', 'him', 'himself'],
			answer: 0,
			ko: '강 씨는 다음 주 세미나에 참석하겠다고 말했습니다.',
			why: '빈칸 뒤에 동사 would attend가 있습니다. 동사 앞 주어 자리에는 주격 he가 옵니다.',
			notes: ['주격 (정답)', '소유격', '목적격', '재귀대명사'],
			vocab: [
				['attend', '참석하다'],
				['seminar', '세미나']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-03',
			text: 'The director asked the staff to send ------- the sales figures by noon.',
			options: ['he', 'his', 'him', 'himself'],
			answer: 2,
			ko: '이사는 직원들에게 정오까지 매출 수치를 자신에게 보내 달라고 요청했습니다.',
			why: '동사 send 뒤에서 "~에게"에 해당하는 목적어 자리입니다. 목적격 him이 정답입니다.',
			notes: [
				'주격',
				'소유격 — 뒤에 the가 있어 올 수 없음',
				'목적격 (정답)',
				'재귀대명사 — 보내는 사람이 the staff라서 맞지 않음'
			],
			vocab: [
				['director', '이사, 부서장'],
				['sales figures', '매출 수치'],
				['by noon', '정오까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-04',
			text: 'Employees should keep ------- desks clean at all times.',
			options: ['they', 'their', 'them', 'themselves'],
			answer: 1,
			ko: '직원들은 항상 자기 책상을 깨끗하게 유지해야 합니다.',
			why: '빈칸 뒤에 명사 desks가 있습니다. 명사 앞에는 소유격 their가 옵니다.',
			notes: ['주격', '소유격 (정답)', '목적격', '재귀대명사'],
			vocab: [
				['employee', '직원'],
				['keep ~ clean', '~을 깨끗하게 유지하다'],
				['at all times', '항상']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-05',
			text: 'Ms. Jung prepared all of the presentation slides -------.',
			options: ['she', 'her', 'hers', 'herself'],
			answer: 3,
			ko: '정 씨는 발표 슬라이드를 모두 직접 준비했습니다.',
			why: '빈칸 앞까지로 문장이 완성됩니다. 완성된 문장 끝에서 "직접, 스스로"라는 뜻으로 주어를 강조하는 재귀대명사 herself가 정답입니다.',
			notes: ['주격', '소유격·목적격', '소유대명사', '재귀대명사 (정답)'],
			vocab: [
				['prepare', '준비하다'],
				['presentation', '발표'],
				['slide', '슬라이드']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-06',
			text: 'If you have any questions, please contact ------- at the number below.',
			options: ['we', 'our', 'us', 'ourselves'],
			answer: 2,
			ko: '질문이 있으시면 아래 번호로 저희에게 연락해 주세요.',
			why: '동사 contact 뒤 목적어 자리입니다. 목적격 us가 정답입니다.',
			notes: ['주격', '소유격', '목적격 (정답)', '재귀대명사'],
			vocab: [
				['contact', '연락하다'],
				['below', '아래의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-07',
			text: 'The new printer is faster than the old one, but ------- is more expensive.',
			options: ['it', 'its', 'itself', 'them'],
			answer: 0,
			ko: '새 프린터는 예전 것보다 빠르지만 더 비쌉니다.',
			why: '빈칸 뒤에 동사 is가 있습니다. 동사 앞 주어 자리에는 주격 it이 옵니다.',
			notes: ['주격 (정답)', '소유격', '재귀대명사', '목적격'],
			vocab: [
				['faster', '더 빠른'],
				['expensive', '비싼']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-08',
			text: 'Your umbrella is by the door, and ------- is in the car.',
			options: ['I', 'my', 'me', 'mine'],
			answer: 3,
			ko: '당신 우산은 문 옆에 있고, 제 것은 차 안에 있습니다.',
			why: '빈칸 뒤에 명사 없이 동사 is가 바로 옵니다. "나의 것(my umbrella)"이라는 뜻의 소유대명사 mine이 정답입니다.',
			notes: [
				'주격 — I 뒤에는 is가 올 수 없음',
				'소유격 — 뒤에 명사가 필요함',
				'목적격',
				'소유대명사 (정답)'
			],
			vocab: [
				['umbrella', '우산'],
				['by the door', '문 옆에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-09',
			text: 'Please help ------- to the refreshments in the lobby.',
			options: ['you', 'your', 'yours', 'yourself'],
			answer: 3,
			ko: '로비에 있는 다과를 마음껏 드세요.',
			why: 'help yourself to는 "~을 마음껏 드세요"라는 표현입니다. 명령문의 주어 you와 목적어가 같은 사람이므로 재귀대명사를 씁니다.',
			notes: ['주격·목적격', '소유격', '소유대명사', '재귀대명사 (정답)'],
			vocab: [
				['help yourself to', '~을 마음껏 먹다'],
				['refreshments', '다과']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-10',
			text: 'Ms. Lim started the business on ------- own five years ago.',
			options: ['she', 'her', 'hers', 'herself'],
			answer: 1,
			ko: '임 씨는 5년 전에 혼자 힘으로 사업을 시작했습니다.',
			why: 'on one\'s own은 "혼자 힘으로"라는 표현입니다. own 앞에는 소유격 her가 옵니다.',
			notes: ['주격', '소유격 (정답)', '소유대명사', '재귀대명사 — by herself로 써야 함'],
			vocab: [
				["on one's own", '혼자 힘으로'],
				['business', '사업']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-11',
			text: '------- are planning to open a second store in Daejeon.',
			options: ['We', 'Our', 'Us', 'Ourselves'],
			answer: 0,
			ko: '저희는 대전에 2호점을 열 계획입니다.',
			why: '빈칸 뒤에 동사 are planning이 있습니다. 동사 앞 주어 자리에는 주격 We가 옵니다.',
			notes: ['주격 (정답)', '소유격', '목적격', '재귀대명사'],
			vocab: [
				['plan to', '~할 계획이다'],
				['second store', '2호점']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-12',
			text: 'The clients were pleased with the service ------- received.',
			options: ['they', 'their', 'them', 'themselves'],
			answer: 0,
			ko: '고객들은 자신들이 받은 서비스에 만족했습니다.',
			why: '빈칸 뒤에 동사 received가 있습니다. 동사 앞 주어 자리이므로 주격 they가 정답입니다. the service they received는 "그들이 받은 서비스"입니다.',
			notes: ['주격 (정답)', '소유격 — 뒤에 명사가 필요함', '목적격', '재귀대명사'],
			vocab: [
				['client', '고객'],
				['be pleased with', '~에 만족하다'],
				['receive', '받다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-13',
			text: 'Mr. Baek and ------- colleagues will visit the factory on Tuesday.',
			options: ['he', 'his', 'him', 'himself'],
			answer: 1,
			ko: '백 씨와 그의 동료들은 화요일에 공장을 방문할 예정입니다.',
			why: '빈칸 뒤에 명사 colleagues가 있습니다. 명사 앞에는 소유격 his가 옵니다.',
			notes: ['주격', '소유격 (정답)', '목적격', '재귀대명사'],
			vocab: [
				['colleague', '동료'],
				['factory', '공장']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-14',
			text: 'The interns finished the task by ------- without any help.',
			options: ['they', 'their', 'them', 'themselves'],
			answer: 3,
			ko: '인턴들은 아무 도움 없이 혼자서 그 업무를 끝냈습니다.',
			why: 'by oneself는 "혼자서"라는 표현입니다. by 뒤에 재귀대명사 themselves가 옵니다.',
			notes: ['주격', '소유격', '목적격', '재귀대명사 (정답)'],
			vocab: [
				['intern', '인턴'],
				['task', '업무'],
				['by oneself', '혼자서']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd03-15',
			text: 'Thank you for inviting ------- to the opening ceremony.',
			options: ['I', 'my', 'me', 'mine'],
			answer: 2,
			ko: '개업식에 저를 초대해 주셔서 감사합니다.',
			why: 'inviting 뒤 목적어 자리입니다. "나를"에 해당하는 목적격 me가 정답입니다.',
			notes: ['주격', '소유격', '목적격 (정답)', '소유대명사'],
			vocab: [
				['invite', '초대하다'],
				['opening ceremony', '개업식, 개막식']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'When 의문문: 시간을 묻는다',
			blocks: [
				{
					type: 'p',
					text: 'When으로 시작하면 **언제**인지 묻는 질문입니다. 응답에 시간 표현이 나오면 정답일 가능성이 높습니다.'
				},
				{
					type: 'table',
					head: ['정답 유형', '예'],
					rows: [
						['시각·요일·날짜', "At three o'clock. / On Friday."],
						['~ 후에 (in + 시간)', 'In about an hour.'],
						['~ 전에 / 후에 / 까지', 'After lunch. / By the end of the week.'],
						['과거 시점', 'Yesterday. / Two days ago.'],
						['아직 모른다', "It hasn't been decided yet."]
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'**장소**로 답하는 응답 — Where에 대한 답입니다.',
						'**기간**으로 답하는 응답 (For three days.) — How long에 대한 답입니다.',
						'**Yes / No**로 시작하는 응답'
					]
				},
				{
					type: 'tip',
					text: 'When did ~?는 과거, When will ~?은 미래를 묻습니다. 응답의 시점이 질문과 맞는지 확인하세요.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'When does the pharmacy open?',
			options: ['At nine in the morning.', 'On Main Street.', 'Yes, it is open.'],
			answer: 0,
			ko: '약국은 언제 문을 여나요?',
			optionsKo: ['아침 9시에요.', '메인 스트리트에요.', '네, 열려 있어요.'],
			steps: [
				'첫 단어가 **When**입니다. 시간을 묻는 질문입니다.',
				'(B)는 장소로 답했습니다. Where에 대한 답이므로 지웁니다.',
				'(C)는 Yes로 시작했습니다. 의문사로 묻는 질문에는 Yes / No로 답할 수 없습니다. 지웁니다.',
				'(A)는 시각으로 답했습니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-16',
			script: 'When is the deadline for the budget report?',
			options: ['This Friday.', 'In the finance office.', 'About ten pages.'],
			answer: 0,
			ko: '예산 보고서 마감은 언제인가요?',
			optionsKo: ['이번 주 금요일이에요.', '재무 사무실에요.', '10쪽 정도요.'],
			why: 'When으로 물었으므로 시점으로 답한 (A)가 정답입니다.',
			notes: ['시점 (정답)', '장소 — Where에 대한 답', '분량 — How long에 대한 답'],
			vocab: [
				['deadline', '마감'],
				['budget report', '예산 보고서']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-17',
			script: 'When did the shipment arrive?',
			options: ['By truck.', 'Yesterday afternoon.', 'At the loading dock.'],
			answer: 1,
			ko: '배송품은 언제 도착했나요?',
			optionsKo: ['트럭으로요.', '어제 오후에요.', '하역장에요.'],
			why: 'When did로 과거의 일을 물었으므로 과거 시점으로 답한 (B)가 정답입니다.',
			notes: ['방법 — How에 대한 답', '과거 시점 (정답)', '장소 — Where에 대한 답'],
			vocab: [
				['shipment', '배송품'],
				['arrive', '도착하다'],
				['loading dock', '하역장']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-18',
			script: 'When will the new manager start?',
			options: ['She used to work in sales.', 'Yes, she will.', 'At the beginning of next month.'],
			answer: 2,
			ko: '새 관리자는 언제 일을 시작하나요?',
			optionsKo: ['그녀는 예전에 영업부에서 일했어요.', '네, 그럴 거예요.', '다음 달 초에요.'],
			why: '미래 시점으로 답한 (C)가 정답입니다.',
			notes: ['경력 이야기 — 질문과 무관', 'Yes로 시작', '미래 시점 (정답)'],
			vocab: [
				['at the beginning of', '~ 초에'],
				['used to', '예전에 ~했다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-19',
			script: 'When can I pick up my order?',
			options: [
				'It will be ready in an hour.',
				'At the customer service desk.',
				'Two boxes of paper.'
			],
			answer: 0,
			ko: '주문한 물건은 언제 찾아갈 수 있나요?',
			optionsKo: ['한 시간 후에 준비될 거예요.', '고객 서비스 창구에서요.', '종이 두 상자요.'],
			why: 'in an hour(한 시간 후에)로 시점을 알려 준 (A)가 정답입니다. in + 시간은 "~ 후에"입니다.',
			notes: ['시점 (정답)', '장소 — Where에 대한 답', '주문 내용 — What에 대한 답'],
			vocab: [
				['pick up', '찾아가다'],
				['order', '주문품'],
				['in an hour', '한 시간 후에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-20',
			script: 'When does the next train to Daegu leave?',
			options: ['From platform three.', 'It was a long trip.', 'Let me check the schedule.'],
			answer: 2,
			ko: '대구행 다음 기차는 언제 출발하나요?',
			optionsKo: ['3번 승강장에서요.', '긴 여행이었어요.', '시간표를 확인해 볼게요.'],
			why: '시점을 바로 말하지 않고 "확인해 보겠다"고 답한 (C)가 정답입니다. 어떤 질문에도 정답이 될 수 있는 응답입니다.',
			notes: [
				'장소 — Where에 대한 답',
				'train에서 떠오르는 여행 이야기',
				'확인하겠다는 응답 (정답)'
			],
			vocab: [
				['leave', '출발하다'],
				['platform', '승강장'],
				['schedule', '시간표']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-21',
			script: 'When are we meeting with the clients?',
			options: ['In the main conference room.', 'Right after lunch.', 'Five people.'],
			answer: 1,
			ko: '고객들과는 언제 만나나요?',
			optionsKo: ['대회의실에서요.', '점심 직후에요.', '다섯 명이요.'],
			why: 'after lunch(점심 후에)로 시점을 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '시점 (정답)', '인원 — How many에 대한 답'],
			vocab: [
				['meet with', '~와 만나다'],
				['right after', '~ 직후에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-22',
			script: 'When did you send the invoice?',
			options: ['By e-mail.', "No, I didn't.", 'Last Tuesday.'],
			answer: 2,
			ko: '청구서는 언제 보냈나요?',
			optionsKo: ['이메일로요.', '아니요, 안 보냈어요.', '지난주 화요일에요.'],
			why: '과거 시점으로 답한 (C)가 정답입니다.',
			notes: ['방법 — How에 대한 답', 'No로 시작', '과거 시점 (정답)'],
			vocab: [
				['invoice', '청구서'],
				['send', '보내다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-23',
			script: 'When will the repairs be finished?',
			options: ['Not until next week.', 'The elevator is broken.', 'For three days.'],
			answer: 0,
			ko: '수리는 언제 끝나나요?',
			optionsKo: ['다음 주나 되어야 해요.', '엘리베이터가 고장 났어요.', '3일 동안이요.'],
			why: 'Not until next week는 "다음 주가 되어야 끝난다"는 뜻으로, 시점을 알려 주는 응답입니다.',
			notes: ['시점 (정답)', 'repairs에서 떠오르는 고장 이야기', '기간 — How long에 대한 답'],
			vocab: [
				['repair', '수리'],
				['not until', '~가 되어서야'],
				['broken', '고장 난']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-24',
			script: 'When should I submit the application form?',
			options: [
				'To the personnel office.',
				'By the end of the week.',
				'Yes, you can apply online.'
			],
			answer: 1,
			ko: '지원서는 언제 제출해야 하나요?',
			optionsKo: ['인사과에요.', '이번 주 말까지요.', '네, 온라인으로 지원할 수 있어요.'],
			why: 'by + 시점(~까지)으로 기한을 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '기한 (정답)', 'Yes로 시작, application과 비슷한 apply'],
			vocab: [
				['submit', '제출하다'],
				['application form', '지원서'],
				['personnel office', '인사과']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd03-25',
			script: "When's the company anniversary party?",
			options: ["It hasn't been decided yet.", 'At the Grand Hotel.', 'About fifty guests.'],
			answer: 0,
			ko: '회사 창립 기념 파티는 언제인가요?',
			optionsKo: ['아직 정해지지 않았어요.', '그랜드 호텔에서요.', '손님 50명 정도요.'],
			why: '"아직 정해지지 않았다"도 When 질문의 정답이 됩니다.',
			notes: ['미정이라는 응답 (정답)', '장소 — Where에 대한 답', '인원 — How many에 대한 답'],
			vocab: [
				['anniversary', '기념일'],
				['decide', '정하다'],
				['guest', '손님']
			]
		}
	]
} satisfies DayContent;
