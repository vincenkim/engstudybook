import type { DayContent } from '../schema';

export default {
	goals: [
		'and, but, or, so의 뜻을 구분한다',
		'both ~ and, either ~ or처럼 짝으로 다니는 접속사를 익힌다',
		'돌려 말하는 응답을 정답으로 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '등위접속사: and, but, or, so',
			blocks: [
				{
					type: 'p',
					text: '접속사는 단어와 단어, 문장과 문장을 이어 줍니다. 앞뒤 내용의 관계를 보고 고릅니다.'
				},
				{
					type: 'table',
					head: ['접속사', '뜻', '예'],
					rows: [
						['and', '그리고 (더함)', 'fast ==and== reliable'],
						['but / yet', '그러나 (반대)', 'small ==but== comfortable'],
						['or', '또는 (선택)', 'by e-mail ==or== by phone'],
						['so', '그래서 (결과)', 'It was late, ==so== we left.']
					]
				},
				{
					type: 'box',
					title: 'and, but, or 앞뒤는 같은 모양',
					items: [
						'앞이 부사이면 뒤도 부사 — quickly and ==accurately==',
						'앞이 -ing이면 뒤도 -ing — planning and ==organizing==',
						'접속사가 아니라 and 뒤 단어의 모양을 묻는 문제도 나옵니다.'
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '상관접속사: 짝으로 다니는 접속사',
			blocks: [
				{
					type: 'p',
					text: '아래 접속사는 항상 **짝**으로 다닙니다. 한쪽이 보이면 나머지 한쪽이 정답입니다.'
				},
				{
					type: 'table',
					head: ['짝', '뜻', '예'],
					rows: [
						['both A and B', 'A와 B 둘 다', '==both== e-mail ==and== phone'],
						['either A or B', 'A 또는 B', '==either== Monday ==or== Tuesday'],
						['neither A nor B', 'A도 B도 아닌', '==neither== cheap ==nor== fast'],
						['not only A but (also) B', 'A뿐만 아니라 B도', '==not only== fast ==but also== cheap'],
						['A as well as B', 'B뿐만 아니라 A도', 'quality ==as well as== price']
					]
				},
				{
					type: 'tip',
					text: '문장에서 both, either, neither, not only를 찾으면 해석하지 않아도 풀립니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The new software is both fast ------- easy to use.',
			options: ['or', 'but', 'and', 'nor'],
			answer: 2,
			ko: '새 소프트웨어는 빠르고 사용하기도 쉽습니다.',
			steps: [
				'보기가 모두 접속사입니다. 문장에서 짝이 되는 말을 찾습니다.',
				'빈칸 앞에 **both**가 있습니다.',
				'both의 짝은 **and**입니다. both A and B는 "A와 B 둘 다"입니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Please call either Mr. Hwang ------- Ms. Joo for more information.',
			options: ['and', 'or', 'nor', 'but'],
			answer: 1,
			ko: '자세한 정보는 황 씨나 주 씨에게 전화해 주세요.',
			steps: [
				'빈칸 앞에 **either**가 있습니다.',
				'either의 짝은 **or**입니다. either A or B는 "A 또는 B"입니다.',
				'정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-01',
			text: 'The hotel is close to both the airport ------- the convention center.',
			options: ['and', 'or', 'but', 'nor'],
			answer: 0,
			ko: '그 호텔은 공항과 컨벤션 센터 둘 다에서 가깝습니다.',
			why: 'both가 보이면 짝인 and를 찾습니다. both A and B는 "A와 B 둘 다"입니다.',
			notes: ['both의 짝 (정답)', 'either의 짝', 'not only의 짝', 'neither의 짝'],
			vocab: [
				['be close to', '~에서 가깝다'],
				['both A and B', 'A와 B 둘 다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-02',
			text: 'Please contact us by phone ------- by e-mail.',
			options: ['so', 'or', 'nor', 'yet'],
			answer: 1,
			ko: '전화나 이메일로 저희에게 연락해 주세요.',
			why: '두 가지 연락 방법 중 하나를 고르라는 뜻이므로 or(또는)가 정답입니다.',
			notes: ['그래서', '또는 (정답)', 'neither와 함께 씀', '그러나'],
			vocab: [
				['contact', '연락하다'],
				['by phone', '전화로']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-03',
			text: 'Neither the manager ------- the assistant was in the office.',
			options: ['or', 'and', 'nor', 'but'],
			answer: 2,
			ko: '관리자도 비서도 사무실에 없었습니다.',
			why: 'Neither가 보이면 짝인 nor를 찾습니다. neither A nor B는 "A도 B도 아닌"입니다.',
			notes: ['either의 짝', 'both의 짝', 'neither의 짝 (정답)', 'not only의 짝'],
			vocab: [
				['neither A nor B', 'A도 B도 아닌'],
				['assistant', '비서']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-04',
			text: 'The product is not only affordable ------- also durable.',
			options: ['and', 'or', 'so', 'but'],
			answer: 3,
			ko: '그 제품은 가격이 알맞을 뿐만 아니라 튼튼하기도 합니다.',
			why: 'not only가 보이면 짝인 but (also)를 찾습니다. not only A but also B는 "A뿐만 아니라 B도"입니다.',
			notes: ['both의 짝', 'either의 짝', '그래서', 'not only의 짝 (정답)'],
			vocab: [
				['not only A but also B', 'A뿐만 아니라 B도'],
				['affordable', '가격이 알맞은'],
				['durable', '튼튼한']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-05',
			text: 'The restaurant was crowded, ------- we decided to eat somewhere else.',
			options: ['or', 'so', 'nor', 'yet'],
			answer: 1,
			ko: '그 식당은 붐벼서 저희는 다른 곳에서 먹기로 했습니다.',
			why: '붐볐다는 것이 원인이고 다른 곳으로 간 것이 결과입니다. 결과를 이끄는 so(그래서)가 정답입니다.',
			notes: ['또는', '그래서 (정답)', 'neither와 함께 씀', '그러나'],
			vocab: [
				['crowded', '붐비는'],
				['decide to', '~하기로 하다'],
				['somewhere else', '다른 곳']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-06',
			text: 'Ms. Wang speaks English fluently, ------- she cannot read it very well.',
			options: ['but', 'so', 'or', 'nor'],
			answer: 0,
			ko: '왕 씨는 영어를 유창하게 말하지만 읽는 것은 잘하지 못합니다.',
			why: '말은 잘하는데 읽기는 못한다는 반대 내용을 잇습니다. but(그러나)이 정답입니다.',
			notes: ['그러나 (정답)', '그래서', '또는', 'neither와 함께 씀'],
			vocab: [
				['fluently', '유창하게'],
				['very well', '아주 잘']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-07',
			text: 'You can ------- pick up your order at the store or have it delivered.',
			options: ['both', 'neither', 'either', 'not only'],
			answer: 2,
			ko: '주문품을 매장에서 찾아가거나 배송받을 수 있습니다.',
			why: '뒤에 or가 있습니다. or의 짝은 either입니다. either A or B는 "A 또는 B"입니다.',
			notes: ['and와 짝', 'nor와 짝', 'or와 짝 (정답)', 'but also와 짝'],
			vocab: [
				['either A or B', 'A 또는 B'],
				['pick up', '찾아가다'],
				['have ~ delivered', '~을 배송받다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-08',
			text: '------- the director and the vice president attended the ceremony.',
			options: ['Either', 'Neither', 'Not only', 'Both'],
			answer: 3,
			ko: '이사와 부사장 둘 다 그 행사에 참석했습니다.',
			why: '뒤에 and가 있습니다. and의 짝은 Both입니다.',
			notes: ['or와 짝', 'nor와 짝', 'but also와 짝', 'and와 짝 (정답)'],
			vocab: [
				['director', '이사'],
				['vice president', '부사장'],
				['ceremony', '행사, 식']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-09',
			text: 'The new copier is ------- faster nor quieter than the old one.',
			options: ['both', 'neither', 'either', 'only'],
			answer: 1,
			ko: '새 복사기는 예전 것보다 빠르지도 조용하지도 않습니다.',
			why: '뒤에 nor가 있습니다. nor의 짝은 neither입니다.',
			notes: ['and와 짝', 'nor와 짝 (정답)', 'or와 짝', '짝이 되는 접속사가 아님'],
			vocab: [
				['copier', '복사기'],
				['faster', '더 빠른'],
				['quieter', '더 조용한']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-10',
			text: 'Employees should work quickly and -------.',
			options: ['accurately', 'accurate', 'accuracy', 'more accurate'],
			answer: 0,
			ko: '직원들은 빠르고 정확하게 일해야 합니다.',
			why: 'and 앞뒤에는 같은 품사가 옵니다. 앞의 quickly가 부사이므로 뒤에도 부사 accurately가 와야 합니다.',
			notes: ['부사 (정답)', '형용사', '명사', '형용사의 비교급'],
			vocab: [
				['quickly', '빠르게'],
				['accurately', '정확하게']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-11',
			text: 'The job involves answering phones and ------- appointments.',
			options: ['schedule', 'scheduled', 'to schedule', 'scheduling'],
			answer: 3,
			ko: '그 업무에는 전화를 받고 예약 일정을 잡는 일이 포함됩니다.',
			why: 'and 앞뒤에는 같은 모양이 옵니다. 앞의 answering이 -ing 모양이므로 뒤에도 scheduling이 와야 합니다.',
			notes: ['동사원형', '과거형', 'to부정사', '-ing형 (정답)'],
			vocab: [
				['involve', '포함하다'],
				['schedule an appointment', '예약 일정을 잡다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-12',
			text: 'The seminar was informative ------- a little too long.',
			options: ['so', 'or', 'but', 'nor'],
			answer: 2,
			ko: '그 세미나는 유익했지만 조금 길었습니다.',
			why: '유익했다(좋은 점)와 너무 길었다(아쉬운 점)는 반대 내용입니다. but이 정답입니다.',
			notes: ['그래서', '또는', '그러나 (정답)', 'neither와 함께 씀'],
			vocab: [
				['informative', '유익한'],
				['a little', '조금']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-13',
			text: 'The price includes breakfast ------- well as dinner.',
			options: ['so', 'as', 'such', 'too'],
			answer: 1,
			ko: '그 가격에는 저녁 식사뿐만 아니라 아침 식사도 포함됩니다.',
			why: 'A as well as B는 "B뿐만 아니라 A도"라는 표현입니다.',
			notes: ['그래서', 'as well as (정답)', '그러한', '또한'],
			vocab: [
				['include', '포함하다'],
				['A as well as B', 'B뿐만 아니라 A도']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-14',
			text: 'Please read ------- sign the attached form.',
			options: ['and', 'but', 'so', 'nor'],
			answer: 0,
			ko: '첨부된 양식을 읽고 서명해 주세요.',
			why: '읽는 것과 서명하는 것, 두 가지 동작을 차례로 잇습니다. and(그리고)가 정답입니다.',
			notes: ['그리고 (정답)', '그러나', '그래서', 'neither와 함께 씀'],
			vocab: [
				['sign', '서명하다'],
				['attached form', '첨부된 양식']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd12-15',
			text: 'The company not ------- reduced costs but also increased sales.',
			options: ['both', 'either', 'only', 'neither'],
			answer: 2,
			ko: '그 회사는 비용을 줄였을 뿐만 아니라 매출도 늘렸습니다.',
			why: '뒤에 but also가 있습니다. but also의 짝은 not only입니다.',
			notes: ['and와 짝', 'or와 짝', 'not only ~ but also (정답)', 'nor와 짝'],
			vocab: [
				['reduce costs', '비용을 줄이다'],
				['increase sales', '매출을 늘리다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '돌려 말하는 응답',
			blocks: [
				{
					type: 'p',
					text: 'Part 2에는 질문에 바로 답하지 않고 **돌려 말하는 응답**이 정답인 문제가 있습니다. 의문사에 맞는 답만 찾으면 틀리기 쉽습니다.'
				},
				{
					type: 'table',
					head: ['유형', '질문', '돌려 말한 정답'],
					rows: [
						['모른다', 'When does the store open?', "I'm not sure."],
						['확인하겠다', 'Has the shipment arrived?', 'Let me check.'],
						['다른 사람에게 넘김', 'Where is the file?', 'Ms. Lee might know.'],
						['아직 정해지지 않았다', 'Who will lead the team?', "It hasn't been decided yet."],
						['조건에 달려 있다', 'How long will it take?', 'It depends on the traffic.'],
						['상황 설명', 'Are you coming to the dinner?', 'I have to finish this report.']
					]
				},
				{
					type: 'tip',
					text: '세 보기 중 두 개가 확실한 오답이면, 남은 돌려 말하는 응답이 정답입니다. **오답을 먼저 지우세요.**'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Who is going to replace Mr. Seok?',
			options: ["It hasn't been decided yet.", 'A new place.', 'Yes, he is.'],
			answer: 0,
			ko: '석 씨의 후임은 누가 되나요?',
			optionsKo: ['아직 정해지지 않았어요.', '새로운 장소예요.', '네, 그래요.'],
			steps: [
				'첫 단어가 **Who**입니다. 사람을 묻는 질문입니다. 그런데 보기에 사람 이름이 없습니다.',
				'(B)는 replace와 발음이 비슷한 place를 썼습니다. 지웁니다.',
				'(C)는 Yes로 시작했습니다. 의문사로 묻는 질문에는 Yes / No로 답할 수 없습니다. 지웁니다.',
				'남은 (A)는 "아직 정해지지 않았다"고 돌려 말한 응답입니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-16',
			script: 'What time does the last bus leave?',
			options: ["I'm not sure, check the timetable.", 'At the bus stop.', 'It lasted two hours.'],
			answer: 0,
			ko: '막차는 몇 시에 출발하나요?',
			optionsKo: [
				'잘 모르겠어요, 시간표를 확인해 보세요.',
				'버스 정류장에서요.',
				'2시간 동안 계속됐어요.'
			],
			why: '시각을 말하는 대신 "모르니 시간표를 보라"고 돌려 말한 (A)가 정답입니다.',
			notes: [
				'모른다는 응답 (정답)',
				'장소 — Where에 대한 답',
				'last(마지막)와 철자가 같은 last(계속되다)'
			],
			vocab: [
				['last bus', '막차'],
				['timetable', '시간표']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-17',
			script: 'Did Ms. Kil approve the budget?',
			options: ['A low budget.', 'Yes, I did.', "She's still reviewing it."],
			answer: 2,
			ko: '길 씨가 예산을 승인했나요?',
			optionsKo: ['적은 예산이에요.', '네, 제가 했어요.', '아직 검토하고 있어요.'],
			why: 'Yes / No 대신 "아직 검토 중"이라고 답해 아직 승인하지 않았다는 뜻을 전한 (C)가 정답입니다.',
			notes: ['budget 반복 — 질문과 무관', 'Ms. Kil에 대해 물었는데 I로 답함', '상황 설명 (정답)'],
			vocab: [
				['approve', '승인하다'],
				['budget', '예산'],
				['review', '검토하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-18',
			script: 'Where should we hold the year-end party?',
			options: ['Hold the door, please.', "Why don't we ask the team?", 'In December.'],
			answer: 1,
			ko: '송년회는 어디에서 열까요?',
			optionsKo: ['문 좀 잡아 주세요.', '팀원들에게 물어보는 게 어때요?', '12월에요.'],
			why: '장소를 말하는 대신 "팀원들에게 물어보자"고 돌려 말한 (B)가 정답입니다.',
			notes: [
				'hold(열다)와 철자가 같은 hold(잡다)',
				'다른 사람에게 물어보자는 응답 (정답)',
				'시간 — When에 대한 답'
			],
			vocab: [
				['hold a party', '파티를 열다'],
				['year-end party', '송년회']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-19',
			script: 'How many copies of the brochure do we need?',
			options: ['That depends on how many guests come.', 'A coffee machine.', 'By tomorrow.'],
			answer: 0,
			ko: '안내 책자는 몇 부가 필요한가요?',
			optionsKo: ['손님이 몇 명 오는지에 달려 있어요.', '커피 기계요.', '내일까지요.'],
			why: '숫자를 말하는 대신 "손님 수에 달려 있다"고 돌려 말한 (A)가 정답입니다.',
			notes: [
				'조건에 달려 있다는 응답 (정답)',
				'copies와 발음이 비슷한 coffee',
				'기한 — When에 대한 답'
			],
			vocab: [
				['brochure', '안내 책자'],
				['depend on', '~에 달려 있다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-20',
			script: 'Are you going to apply for the manager position?',
			options: ['An application form.', "I haven't decided yet.", "He's the manager."],
			answer: 1,
			ko: '관리자 자리에 지원할 건가요?',
			optionsKo: ['지원서요.', '아직 결정하지 못했어요.', '그가 관리자예요.'],
			why: 'Yes / No 대신 "아직 결정하지 못했다"고 답한 (B)가 정답입니다.',
			notes: ['apply와 비슷한 application', '미정이라는 응답 (정답)', 'manager 반복 — 질문과 무관'],
			vocab: [
				['apply for', '~에 지원하다'],
				['position', '자리, 직책']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-21',
			script: 'Who will give the opening speech?',
			options: ['A speech contest.', 'At the opening.', 'Mr. Dan would know.'],
			answer: 2,
			ko: '개회사는 누가 하나요?',
			optionsKo: ['말하기 대회요.', '개막식에서요.', '단 씨가 알 거예요.'],
			why: '누구인지 말하는 대신 "단 씨가 알 것"이라고 다른 사람에게 넘긴 (C)가 정답입니다.',
			notes: [
				'speech 반복 — 질문과 무관',
				'opening 반복 — 장소로 답함',
				'다른 사람이 안다는 응답 (정답)'
			],
			vocab: [
				['give a speech', '연설하다'],
				['opening speech', '개회사']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-22',
			script: 'When will the new software be installed?',
			options: ['The IT team sent an e-mail about it.', 'A soft pillow.', 'In the hall.'],
			answer: 0,
			ko: '새 소프트웨어는 언제 설치되나요?',
			optionsKo: ['IT팀이 그것에 관해 이메일을 보냈어요.', '부드러운 베개요.', '복도에요.'],
			why: '날짜를 말하는 대신 "IT팀 이메일에 나와 있다"고 알려 준 (A)가 정답입니다.',
			notes: [
				'정보가 있는 곳을 알려 줌 (정답)',
				'software와 비슷한 soft',
				'install과 발음이 비슷한 in the hall'
			],
			vocab: [
				['install', '설치하다'],
				['send an e-mail', '이메일을 보내다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-23',
			script: 'Can I borrow your stapler?',
			options: ['A paper clip.', 'Mine is broken, actually.', 'Yes, I borrowed it.'],
			answer: 1,
			ko: '스테이플러 좀 빌릴 수 있을까요?',
			optionsKo: ['종이 클립이요.', '사실 제 것은 고장 났어요.', '네, 제가 빌렸어요.'],
			why: 'No 대신 "내 것은 고장 났다"고 답해 빌려줄 수 없다는 뜻을 전한 (B)가 정답입니다.',
			notes: [
				'stapler에서 떠오르는 사무용품',
				'상황 설명으로 거절 (정답)',
				'borrow 반복 — 빌리는 사람이 바뀜'
			],
			vocab: [
				['borrow', '빌리다'],
				['stapler', '스테이플러'],
				['actually', '사실은']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-24',
			script: 'Is the conference room available at three?',
			options: [
				'A conference call.',
				'Three chairs.',
				"You'll have to check with the receptionist."
			],
			answer: 2,
			ko: '3시에 회의실을 쓸 수 있나요?',
			optionsKo: ['전화 회의요.', '의자 세 개요.', '접수 담당자에게 확인해 보셔야 해요.'],
			why: 'Yes / No 대신 "접수 담당자에게 확인하라"고 답한 (C)가 정답입니다.',
			notes: [
				'conference 반복 — 질문과 무관',
				'three 반복 — 질문과 무관',
				'다른 사람에게 확인하라는 응답 (정답)'
			],
			vocab: [
				['available', '이용할 수 있는'],
				['check with', '~에게 확인하다'],
				['receptionist', '접수 담당자']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd12-25',
			script: 'Why is the parking lot closed?',
			options: ['I was wondering the same thing.', 'In the park.', 'Close the door, please.'],
			answer: 0,
			ko: '주차장은 왜 닫혀 있나요?',
			optionsKo: ['저도 그게 궁금했어요.', '공원에서요.', '문을 닫아 주세요.'],
			why: '이유를 모른다는 뜻으로 "나도 궁금했다"고 답한 (A)가 정답입니다.',
			notes: ['모른다는 응답 (정답)', 'parking과 비슷한 park', 'closed와 비슷한 close'],
			vocab: [
				['parking lot', '주차장'],
				['wonder', '궁금해하다']
			]
		}
	]
} satisfies DayContent;
