import type { DayContent } from '../schema';

export default {
	goals: [
		'-ing 분사와 -ed 분사의 뜻 차이를 안다',
		'꾸밈을 받는 명사를 보고 분사를 고른다',
		'A or B로 묻는 질문에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '분사: 형용사처럼 쓰는 -ing와 -ed',
			blocks: [
				{
					type: 'p',
					text: '분사는 동사를 **형용사처럼** 바꾼 말입니다. 명사를 앞이나 뒤에서 꾸밉니다.'
				},
				{
					type: 'table',
					head: ['모양', '뜻', '예'],
					rows: [
						['현재분사 -ing', '~하는 (명사가 직접 함)', 'a ==growing== company (성장하는 회사)'],
						['과거분사 -ed', '~된 (명사가 당함)', 'a ==damaged== box (손상된 상자)']
					]
				},
				{
					type: 'box',
					title: '고르는 법',
					items: [
						'꾸밈을 받는 명사가 그 동작을 **직접 하면** -ing — 회사가 성장한다 → growing',
						'명사가 그 동작을 **당하면** -ed — 상자가 손상된다 → damaged'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'employees ==working== in the factory',
							ko: '공장에서 일하는 직원들',
							note: '명사 뒤에서 꾸밈 — 직원이 일함 → -ing'
						},
						{
							en: 'the documents ==attached== to this e-mail',
							ko: '이 이메일에 첨부된 서류',
							note: '명사 뒤에서 꾸밈 — 서류가 첨부됨 → -ed'
						}
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '감정 분사와 자주 나오는 표현',
			blocks: [
				{
					type: 'box',
					title: '감정을 나타내는 분사',
					items: [
						'감정을 **느끼는 사람**이면 -ed — I am ==interested== in the job.',
						'감정을 **일으키는 사물**이면 -ing — The job is ==interesting==.'
					]
				},
				{
					type: 'table',
					head: ['-ed (사람이 느낌)', '-ing (사물이 일으킴)'],
					rows: [
						['interested 관심 있는', 'interesting 흥미로운'],
						['satisfied 만족한', 'satisfying 만족스러운'],
						['disappointed 실망한', 'disappointing 실망스러운'],
						['surprised 놀란', 'surprising 놀라운']
					]
				},
				{
					type: 'box',
					title: '통째로 외우는 표현',
					items: [
						'attached file / enclosed document — 첨부된 파일 / 동봉된 서류',
						'limited time / detailed information — 한정된 시간 / 상세한 정보',
						'experienced staff / qualified applicants — 경험 많은 직원 / 자격을 갖춘 지원자',
						'rising prices / remaining tickets / existing customers — 오르는 가격 / 남은 표 / 기존 고객'
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Please review the ------- document before the meeting.',
			options: ['attach', 'attaching', 'attached', 'attaches'],
			answer: 2,
			ko: '회의 전에 첨부된 서류를 검토해 주세요.',
			steps: [
				'빈칸은 관사 the와 명사 document 사이입니다. 명사를 꾸미는 **형용사 자리**이므로 분사가 들어갑니다.',
				'서류와 attach(첨부하다)의 관계를 봅니다. 서류는 스스로 첨부하는 것이 아니라 **첨부되는** 것입니다.',
				'당하는 뜻이므로 -ed입니다. 정답은 (C) **attached**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The man ------- next to Ms. Choi is the new director.',
			options: ['standing', 'stand', 'stood', 'stands'],
			answer: 0,
			ko: '최 씨 옆에 서 있는 남자가 새 이사입니다.',
			steps: [
				'문장의 동사는 뒤에 있는 **is**입니다. 동사가 이미 있으므로 빈칸에는 동사가 올 수 없습니다.',
				'빈칸은 명사 The man을 뒤에서 꾸미는 분사 자리입니다.',
				'남자가 직접 **서 있는** 것이므로 -ing입니다. 정답은 (A) **standing**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-01',
			text: 'The ------- price of oil is a concern for many businesses.',
			options: ['rise', 'rising', 'risen', 'rises'],
			answer: 1,
			ko: '오르는 유가는 많은 기업의 걱정거리입니다.',
			why: '관사 The와 명사 price 사이에서 명사를 꾸미는 분사 자리입니다. 가격이 직접 오르는 것이므로 -ing인 rising이 정답입니다.',
			notes: [
				'동사원형·명사',
				'현재분사 (정답)',
				'과거분사 — 가격이 오름을 당하는 것이 아님',
				'-s가 붙은 동사'
			],
			vocab: [
				['rising price', '오르는 가격'],
				['oil', '석유'],
				['concern', '걱정거리']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-02',
			text: 'Please find the ------- invoice for your recent order.',
			options: ['enclosed', 'enclose', 'enclosing', 'encloses'],
			answer: 0,
			ko: '최근 주문에 대해 동봉된 청구서를 확인해 주세요.',
			why: '청구서는 "동봉되는" 것이므로 과거분사 enclosed가 정답입니다. the enclosed invoice는 통째로 자주 나오는 표현입니다.',
			notes: [
				'과거분사 (정답)',
				'동사원형',
				'현재분사 — 청구서가 직접 동봉하는 것이 아님',
				'-s가 붙은 동사'
			],
			vocab: [
				['enclosed', '동봉된'],
				['invoice', '청구서'],
				['recent', '최근의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-03',
			text: 'We received a ------- package from the supplier.',
			options: ['damage', 'damaging', 'damaged', 'damages'],
			answer: 2,
			ko: '저희는 공급업체로부터 손상된 소포를 받았습니다.',
			why: '소포는 "손상된" 것이므로 과거분사 damaged가 정답입니다.',
			notes: [
				'동사원형·명사',
				'현재분사 — 소포가 무언가를 손상시키는 것이 아님',
				'과거분사 (정답)',
				'-s가 붙은 동사'
			],
			vocab: [
				['damaged', '손상된'],
				['package', '소포'],
				['supplier', '공급업체']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-04',
			text: 'The seminar was very ------- for new managers.',
			options: ['interest', 'interested', 'interests', 'interesting'],
			answer: 3,
			ko: '그 세미나는 신임 관리자들에게 매우 흥미로웠습니다.',
			why: '주어 The seminar는 감정을 느끼는 사람이 아니라 흥미를 일으키는 사물입니다. -ing인 interesting이 정답입니다.',
			notes: ['명사·동사', '-ed — 감정을 느끼는 사람에게 씀', '-s가 붙은 동사', '-ing (정답)'],
			vocab: [
				['seminar', '세미나'],
				['interesting', '흥미로운']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-05',
			text: 'Customers were ------- with the fast delivery.',
			options: ['satisfy', 'satisfied', 'satisfying', 'satisfies'],
			answer: 1,
			ko: '고객들은 빠른 배송에 만족했습니다.',
			why: '주어 Customers는 만족을 느끼는 사람입니다. -ed인 satisfied가 정답입니다. be satisfied with는 "~에 만족하다"입니다.',
			notes: ['동사원형', '-ed (정답)', '-ing — 감정을 일으키는 사물에 씀', '-s가 붙은 동사'],
			vocab: [
				['be satisfied with', '~에 만족하다'],
				['delivery', '배송']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-06',
			text: 'The company is looking for ------- engineers.',
			options: ['experienced', 'experience', 'experiencing', 'experiences'],
			answer: 0,
			ko: '그 회사는 경험 많은 엔지니어를 찾고 있습니다.',
			why: '명사 engineers를 꾸미는 자리입니다. experienced는 "경험 많은"이라는 뜻으로 사람 명사 앞에 자주 나옵니다.',
			notes: ['과거분사 (정답)', '명사·동사', '현재분사', '-s가 붙은 동사'],
			vocab: [
				['look for', '~을 찾다'],
				['experienced', '경험 많은']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-07',
			text: 'Employees ------- in the main building should use the east entrance.',
			options: ['work', 'worked', 'working', 'works'],
			answer: 2,
			ko: '본관에서 근무하는 직원은 동쪽 출입구를 이용해야 합니다.',
			why: '문장의 동사는 should use입니다. 빈칸은 명사 Employees를 뒤에서 꾸미는 분사 자리이고, 직원이 직접 일하는 것이므로 working이 정답입니다.',
			notes: ['동사 — 동사 should use가 이미 있음', '과거형', '현재분사 (정답)', '-s가 붙은 동사'],
			vocab: [
				['main building', '본관'],
				['entrance', '출입구']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-08',
			text: 'The report ------- by Mr. Lim contains several errors.',
			options: ['write', 'writing', 'wrote', 'written'],
			answer: 3,
			ko: '임 씨가 작성한 보고서에는 오류가 몇 개 있습니다.',
			why: '문장의 동사는 contains입니다. 빈칸은 명사 The report를 뒤에서 꾸미는 분사 자리이고, by가 있으므로 "작성된"이라는 뜻의 과거분사 written이 정답입니다.',
			notes: [
				'동사원형',
				'현재분사 — 보고서가 직접 쓰는 것이 아님',
				'과거형 — 동사 contains가 이미 있음',
				'과거분사 (정답)'
			],
			vocab: [
				['contain', '포함하다'],
				['several', '몇몇의'],
				['error', '오류']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-09',
			text: 'All ------- tickets will be sold at the door.',
			options: ['remaining', 'remain', 'remained', 'remains'],
			answer: 0,
			ko: '남은 표는 모두 현장에서 판매됩니다.',
			why: '명사 tickets를 꾸미는 자리입니다. remaining은 "남아 있는"이라는 뜻으로 항상 -ing 모양으로 씁니다.',
			notes: ['현재분사 (정답)', '동사원형', '과거형', '-s가 붙은 동사'],
			vocab: [
				['remaining', '남아 있는'],
				['at the door', '현장에서, 입구에서']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-10',
			text: 'The results of the test were -------.',
			options: ['disappoint', 'disappointing', 'disappointed', 'disappoints'],
			answer: 1,
			ko: '그 시험 결과는 실망스러웠습니다.',
			why: '주어 The results는 감정을 느끼는 사람이 아니라 실망을 일으키는 사물입니다. -ing인 disappointing이 정답입니다.',
			notes: ['동사원형', '-ing (정답)', '-ed — 감정을 느끼는 사람에게 씀', '-s가 붙은 동사'],
			vocab: [
				['result', '결과'],
				['disappointing', '실망스러운']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-11',
			text: 'The products ------- on our Web site are available in stores.',
			options: ['list', 'listing', 'listed', 'lists'],
			answer: 2,
			ko: '저희 웹사이트에 나와 있는 제품은 매장에서 구입할 수 있습니다.',
			why: '문장의 동사는 are입니다. 빈칸은 명사 The products를 뒤에서 꾸미는 분사 자리이고, 제품은 "목록에 올려진" 것이므로 과거분사 listed가 정답입니다.',
			notes: [
				'동사 — 동사 are가 이미 있음',
				'현재분사 — 제품이 직접 올리는 것이 아님',
				'과거분사 (정답)',
				'-s가 붙은 동사'
			],
			vocab: [
				['list', '목록에 올리다'],
				['available', '구입할 수 있는']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-12',
			text: 'This offer is available for a ------- time only.',
			options: ['limit', 'limiting', 'limits', 'limited'],
			answer: 3,
			ko: '이 할인은 한정된 기간에만 이용할 수 있습니다.',
			why: '명사 time을 꾸미는 자리입니다. for a limited time은 "한정된 기간 동안"이라는 뜻으로 통째로 자주 나옵니다.',
			notes: ['동사원형·명사', '현재분사', '-s가 붙은 동사', '과거분사 (정답)'],
			vocab: [
				['offer', '할인, 제안'],
				['for a limited time', '한정된 기간 동안']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-13',
			text: 'Anyone ------- to join the workshop should sign up by Friday.',
			options: ['wish', 'wishing', 'wished', 'wishes'],
			answer: 1,
			ko: '워크숍에 참여하고 싶은 사람은 금요일까지 신청해야 합니다.',
			why: '문장의 동사는 should sign up입니다. 빈칸은 Anyone을 뒤에서 꾸미는 분사 자리이고, 사람이 직접 바라는 것이므로 wishing이 정답입니다.',
			notes: [
				'동사 — 동사 should sign up이 이미 있음',
				'현재분사 (정답)',
				'과거형',
				'-s가 붙은 동사'
			],
			vocab: [
				['wish to', '~하고 싶어 하다'],
				['sign up', '신청하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-14',
			text: 'Mr. Jo was ------- to hear about his promotion.',
			options: ['surprised', 'surprise', 'surprising', 'surprises'],
			answer: 0,
			ko: '조 씨는 자신의 승진 소식을 듣고 놀랐습니다.',
			why: '주어 Mr. Jo는 놀라움을 느끼는 사람입니다. -ed인 surprised가 정답입니다.',
			notes: ['-ed (정답)', '동사원형·명사', '-ing — 감정을 일으키는 사물에 씀', '-s가 붙은 동사'],
			vocab: [
				['be surprised to', '~해서 놀라다'],
				['promotion', '승진']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd09-15',
			text: 'We offer ------- information about each product.',
			options: ['detail', 'detailing', 'detailed', 'details'],
			answer: 2,
			ko: '저희는 각 제품에 대한 상세한 정보를 제공합니다.',
			why: '명사 information을 꾸미는 자리입니다. detailed information은 "상세한 정보"라는 뜻으로 통째로 자주 나옵니다.',
			notes: ['명사·동사', '현재분사', '과거분사 (정답)', '명사의 복수형'],
			vocab: [
				['offer', '제공하다'],
				['detailed', '상세한']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '선택 의문문: A or B?',
			blocks: [
				{
					type: 'p',
					text: '**or**로 둘 중 하나를 고르게 하는 질문입니다. Yes / No로는 답할 수 없습니다.'
				},
				{
					type: 'table',
					head: ['정답 유형', '예 (Would you like coffee or tea?)'],
					rows: [
						['둘 중 하나를 고름', 'Coffee, please.'],
						['둘 다 좋다', 'Either is fine.'],
						['둘 다 아니다', "Neither, thanks. I'd prefer water."],
						['상대에게 맡김', 'Whichever you prefer.'],
						['다른 말로 바꿔 답함', 'Something hot would be nice.']
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'**Yes / No**로 시작하는 응답',
						'질문에 나온 단어를 반복하지만 내용이 관계없는 응답'
					]
				},
				{
					type: 'tip',
					text: 'either, neither, whichever가 들리면 선택 의문문의 정답일 가능성이 높습니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Should we meet on Monday or Tuesday?',
			options: ['Tuesday works better for me.', 'Yes, we should.', 'In the meeting room.'],
			answer: 0,
			ko: '월요일에 만날까요, 화요일에 만날까요?',
			optionsKo: ['저는 화요일이 더 좋아요.', '네, 그래야 해요.', '회의실에서요.'],
			steps: [
				'**Monday or Tuesday**가 들립니다. 둘 중 하나를 고르는 선택 의문문입니다.',
				'(B)는 Yes로 시작했습니다. 선택 의문문에는 Yes / No로 답할 수 없습니다. 지웁니다.',
				'(C)는 장소로 답했습니다. 지웁니다.',
				'(A)는 둘 중 화요일을 골랐습니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-16',
			script: 'Would you like to sit inside or outside?',
			options: ['Outside, please.', 'Yes, I would.', 'A table for four.'],
			answer: 0,
			ko: '안에 앉으시겠어요, 밖에 앉으시겠어요?',
			optionsKo: ['밖으로 부탁합니다.', '네, 그러고 싶어요.', '4인용 테이블이요.'],
			why: '둘 중 하나를 고른 (A)가 정답입니다.',
			notes: ['하나를 고름 (정답)', 'Yes로 시작', '인원 — 질문과 무관'],
			vocab: [
				['inside', '안에'],
				['outside', '밖에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-17',
			script: 'Should I send the contract by e-mail or by fax?',
			options: ['Yes, please send it.', 'Two pages.', 'E-mail is fine.'],
			answer: 2,
			ko: '계약서를 이메일로 보낼까요, 팩스로 보낼까요?',
			optionsKo: ['네, 보내 주세요.', '2쪽이요.', '이메일이 좋아요.'],
			why: '둘 중 이메일을 고른 (C)가 정답입니다.',
			notes: ['Yes로 시작', '분량 — 질문과 무관', '하나를 고름 (정답)'],
			vocab: [
				['contract', '계약서'],
				['by fax', '팩스로']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-18',
			script: 'Is the workshop in the morning or the afternoon?',
			options: ['In room 204.', 'It starts at 2 P.M.', 'Yes, it is.'],
			answer: 1,
			ko: '워크숍은 오전인가요, 오후인가요?',
			optionsKo: ['204호에서요.', '오후 2시에 시작해요.', '네, 그래요.'],
			why: '"오후"라고 직접 말하지 않고 시작 시각으로 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '시각으로 바꿔 답함 (정답)', 'Yes로 시작'],
			vocab: [
				['workshop', '워크숍'],
				['start', '시작하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-19',
			script: 'Do you want the large size or the medium?',
			options: ['Either one is fine.', 'A size chart.', 'Yes, I want it.'],
			answer: 0,
			ko: '큰 사이즈를 원하세요, 중간 사이즈를 원하세요?',
			optionsKo: ['어느 것이든 괜찮아요.', '사이즈 표요.', '네, 원해요.'],
			why: 'Either one is fine은 "둘 중 어느 것이든 좋다"는 뜻으로 선택 의문문의 정답이 됩니다.',
			notes: ['둘 다 좋다는 응답 (정답)', 'size 반복 — 질문과 무관', 'Yes로 시작'],
			vocab: [
				['large', '큰'],
				['medium', '중간의'],
				['either', '둘 중 어느 것이든']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-20',
			script: 'Are you paying by cash or by credit card?',
			options: ['Fifty dollars.', "I'll use my card.", 'No, thank you.'],
			answer: 1,
			ko: '현금으로 계산하시겠어요, 신용카드로 계산하시겠어요?',
			optionsKo: ['50달러요.', '카드로 할게요.', '아니요, 괜찮아요.'],
			why: '둘 중 카드를 고른 (B)가 정답입니다.',
			notes: ['금액 — How much에 대한 답', '하나를 고름 (정답)', 'No로 시작'],
			vocab: [
				['pay by cash', '현금으로 계산하다'],
				['credit card', '신용카드']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-21',
			script: 'Will Mr. Bang or Ms. Chae lead the project?',
			options: ["It's a big project.", 'Yes, he will.', "It hasn't been decided."],
			answer: 2,
			ko: '프로젝트는 방 씨가 이끄나요, 채 씨가 이끄나요?',
			optionsKo: ['큰 프로젝트예요.', '네, 그가 할 거예요.', '아직 정해지지 않았어요.'],
			why: '둘 중 누구인지 "아직 정해지지 않았다"고 답한 (C)가 정답입니다.',
			notes: ['project 반복 — 질문과 무관', 'Yes로 시작', '미정이라는 응답 (정답)'],
			vocab: [
				['lead', '이끌다'],
				['decide', '정하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-22',
			script: 'Would you rather take the bus or a taxi?',
			options: ["Let's take a taxi.", 'The bus stop.', 'About twenty minutes.'],
			answer: 0,
			ko: '버스를 탈까요, 택시를 탈까요?',
			optionsKo: ['택시를 탑시다.', '버스 정류장이요.', '20분 정도요.'],
			why: '둘 중 택시를 고른 (A)가 정답입니다.',
			notes: ['하나를 고름 (정답)', 'bus 반복 — 질문과 무관', '시간 — How long에 대한 답'],
			vocab: [
				['would rather', '~하는 편이 낫다'],
				['bus stop', '버스 정류장']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-23',
			script: 'Should we order pizza or sandwiches for the meeting?',
			options: ['At noon.', 'Whichever you prefer.', 'Yes, it was delicious.'],
			answer: 1,
			ko: '회의 때 피자를 주문할까요, 샌드위치를 주문할까요?',
			optionsKo: ['정오에요.', '좋으신 쪽으로 하세요.', '네, 맛있었어요.'],
			why: 'Whichever you prefer는 "어느 쪽이든 당신이 좋은 것으로"라는 뜻으로, 선택을 상대에게 맡기는 정답입니다.',
			notes: ['시간 — When에 대한 답', '상대에게 맡김 (정답)', 'Yes로 시작'],
			vocab: [
				['order', '주문하다'],
				['whichever', '어느 쪽이든'],
				['prefer', '더 좋아하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-24',
			script: 'Do you prefer working alone or in a team?',
			options: ['The team won.', 'Yes, I do.', 'I like working with others.'],
			answer: 2,
			ko: '혼자 일하는 것이 좋으세요, 팀으로 일하는 것이 좋으세요?',
			optionsKo: ['그 팀이 이겼어요.', '네, 그래요.', '다른 사람들과 함께 일하는 게 좋아요.'],
			why: 'in a team을 with others로 바꿔 말한 (C)가 정답입니다. 정답은 질문의 말을 다른 말로 바꾸는 경우가 많습니다.',
			notes: ['team 반복 — 질문과 무관', 'Yes로 시작', '다른 말로 바꿔 고름 (정답)'],
			vocab: [
				['alone', '혼자'],
				['in a team', '팀으로'],
				['with others', '다른 사람들과 함께']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd09-25',
			script: 'Is this seat taken, or can I sit here?',
			options: ["Go ahead, it's free.", 'A window seat.', 'Yes, I took it yesterday.'],
			answer: 0,
			ko: '이 자리에 누가 있나요, 아니면 앉아도 되나요?',
			optionsKo: ['앉으세요, 빈자리예요.', '창가 좌석이요.', '네, 어제 가져갔어요.'],
			why: '앉아도 된다고 답한 (A)가 정답입니다. Go ahead는 "그렇게 하세요"입니다.',
			notes: [
				'앉아도 된다는 응답 (정답)',
				'seat 반복 — 질문과 무관',
				'Yes로 시작, take의 과거형 took'
			],
			vocab: [
				['taken', '(자리가) 차 있는'],
				['Go ahead', '그렇게 하세요'],
				['free', '비어 있는']
			]
		}
	]
} satisfies DayContent;
