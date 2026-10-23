import type { DayContent } from '../schema';

export default {
	goals: [
		'동명사가 오는 자리를 알아본다',
		'동명사와 짝을 이루는 동사·전치사를 익힌다',
		'부정·부가 의문문에 Yes / No를 바르게 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '동명사: 동사 + -ing = "~하는 것"',
			blocks: [
				{
					type: 'p',
					text: '동명사는 동사에 -ing를 붙여 **명사처럼** 쓰는 말입니다. 명사가 오는 자리에 옵니다.'
				},
				{
					type: 'table',
					head: ['자리', '예'],
					rows: [
						['주어', '==Opening== a store costs a lot.'],
						['동사의 목적어', 'We finished ==writing== the report.'],
						['전치사 뒤', 'Thank you for ==visiting== our store.']
					]
				},
				{
					type: 'box',
					title: '동명사와 명사 구분',
					items: [
						'빈칸 뒤에 **목적어(명사)**가 있으면 동명사 — by ==reducing== costs',
						'빈칸 앞에 **관사**가 있거나 뒤에 **of**가 오면 명사 — the ==reduction== of costs'
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '동명사와 짝을 이루는 말',
			blocks: [
				{
					type: 'box',
					title: '동명사를 목적어로 쓰는 동사',
					items: [
						'enjoy / finish / consider / avoid + -ing — 즐기다 / 끝내다 / 고려하다 / 피하다',
						'suggest / recommend / keep + -ing — 제안하다 / 추천하다 / 계속하다'
					]
				},
				{
					type: 'box',
					title: '전치사 to + 동명사',
					items: [
						'look forward to -ing — ~하기를 기대하다',
						'be committed to -ing — ~하는 데 전념하다',
						'이때 to는 전치사입니다. to 뒤에 동사원형을 고르지 않도록 주의하세요.'
					]
				},
				{
					type: 'box',
					title: '자주 나오는 표현',
					items: [
						'be interested in -ing / be responsible for -ing — ~에 관심이 있다 / ~을 책임지다',
						'before / after / by / without -ing — ~하기 전에 / 후에 / ~함으로써 / ~하지 않고',
						'spend 시간 -ing — ~하는 데 시간을 쓰다'
					]
				},
				{
					type: 'tip',
					text: 'want, plan, decide, hope 뒤에는 to부정사, enjoy, finish, consider, avoid 뒤에는 동명사가 옵니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Nam is considering ------- a new assistant.',
			options: ['hire', 'to hire', 'hiring', 'hired'],
			answer: 2,
			ko: '남 씨는 새 비서를 채용하는 것을 고려하고 있습니다.',
			steps: [
				'보기가 모두 hire의 여러 모양입니다. 빈칸 앞 동사를 봅니다.',
				'빈칸 앞 동사는 **considering**입니다. consider는 뒤에 동명사가 오는 동사입니다.',
				'정답은 (C) **hiring**입니다. consider -ing는 "~하는 것을 고려하다"입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'We look forward to ------- from you soon.',
			options: ['hearing', 'hear', 'heard', 'hears'],
			answer: 0,
			ko: '곧 소식을 듣기를 기대합니다.',
			steps: [
				'빈칸 앞에 **look forward to**가 있습니다.',
				'이 to는 to부정사가 아니라 **전치사**입니다. 전치사 뒤에는 동명사가 옵니다.',
				'정답은 (A) **hearing**입니다. hear를 고르지 않도록 주의하세요.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-01',
			text: 'Thank you for ------- our customer survey.',
			options: ['complete', 'completing', 'completed', 'completes'],
			answer: 1,
			ko: '고객 설문 조사를 작성해 주셔서 감사합니다.',
			why: '전치사 for 뒤에는 동명사가 옵니다. 뒤에 목적어 our customer survey가 있으므로 completing이 정답입니다.',
			notes: ['동사원형', '동명사 (정답)', '과거형', '-s가 붙은 동사'],
			vocab: [
				['complete', '작성하다, 완료하다'],
				['customer survey', '고객 설문 조사']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-02',
			text: 'The team finished ------- the new Web site last week.',
			options: ['design', 'to design', 'designing', 'designed'],
			answer: 2,
			ko: '그 팀은 지난주에 새 웹사이트 디자인을 끝냈습니다.',
			why: 'finish 뒤에는 동명사가 옵니다. finish -ing는 "~하는 것을 끝내다"입니다.',
			notes: ['동사원형', 'to부정사 — finish 뒤에 쓰지 않음', '동명사 (정답)', '과거형'],
			vocab: [
				['finish -ing', '~하는 것을 끝내다'],
				['design', '디자인하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-03',
			text: '------- a new language takes a lot of practice.',
			options: ['Learning', 'Learn', 'Learned', 'Learns'],
			answer: 0,
			ko: '새로운 언어를 배우는 데는 많은 연습이 필요합니다.',
			why: '동사 takes 앞은 주어 자리입니다. "~하는 것"이라는 뜻으로 주어가 될 수 있는 동명사 Learning이 정답입니다.',
			notes: ['동명사 (정답)', '동사원형 — 주어가 될 수 없음', '과거형', '-s가 붙은 동사'],
			vocab: [
				['language', '언어'],
				['practice', '연습'],
				['take', '필요로 하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-04',
			text: 'Mr. Yeo is responsible for ------- new employees.',
			options: ['train', 'trained', 'trains', 'training'],
			answer: 3,
			ko: '여 씨는 신입 직원 교육을 담당합니다.',
			why: '전치사 for 뒤에는 동명사가 옵니다. be responsible for -ing는 "~을 책임지다"입니다.',
			notes: ['동사원형', '과거형', '-s가 붙은 동사', '동명사 (정답)'],
			vocab: [
				['be responsible for', '~을 책임지다'],
				['train', '교육하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-05',
			text: 'The company is committed to ------- high-quality service.',
			options: ['providing', 'provide', 'provided', 'provides'],
			answer: 0,
			ko: '그 회사는 고품질 서비스를 제공하는 데 전념하고 있습니다.',
			why: 'be committed to의 to는 전치사입니다. 전치사 뒤에는 동명사 providing이 옵니다.',
			notes: ['동명사 (정답)', '동사원형 — 이 to는 전치사임', '과거형', '-s가 붙은 동사'],
			vocab: [
				['be committed to -ing', '~하는 데 전념하다'],
				['high-quality', '고품질의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-06',
			text: 'Please avoid ------- the elevator during the fire drill.',
			options: ['use', 'using', 'to use', 'used'],
			answer: 1,
			ko: '소방 훈련 중에는 엘리베이터 사용을 피해 주세요.',
			why: 'avoid 뒤에는 동명사가 옵니다. avoid -ing는 "~하는 것을 피하다"입니다.',
			notes: ['동사원형', '동명사 (정답)', 'to부정사 — avoid 뒤에 쓰지 않음', '과거형'],
			vocab: [
				['avoid -ing', '~하는 것을 피하다'],
				['fire drill', '소방 훈련']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-07',
			text: 'Ms. Pyo suggested ------- the meeting to Friday.',
			options: ['move', 'to move', 'moved', 'moving'],
			answer: 3,
			ko: '표 씨는 회의를 금요일로 옮기자고 제안했습니다.',
			why: 'suggest 뒤에는 동명사가 옵니다. suggest -ing는 "~하자고 제안하다"입니다.',
			notes: ['동사원형', 'to부정사 — suggest 뒤에 쓰지 않음', '과거형', '동명사 (정답)'],
			vocab: [
				['suggest -ing', '~하자고 제안하다'],
				['move A to B', 'A를 B로 옮기다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-08',
			text: 'You can save money by ------- your tickets in advance.',
			options: ['book', 'booked', 'booking', 'books'],
			answer: 2,
			ko: '표를 미리 예매하면 돈을 절약할 수 있습니다.',
			why: '전치사 by 뒤에는 동명사가 옵니다. by -ing는 "~함으로써"입니다.',
			notes: ['동사원형', '과거형', '동명사 (정답)', '-s가 붙은 동사'],
			vocab: [
				['save money', '돈을 절약하다'],
				['book', '예매하다'],
				['in advance', '미리']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-09',
			text: 'The manager decided ------- the product launch until next quarter.',
			options: ['postpone', 'to postpone', 'postponing', 'postponed'],
			answer: 1,
			ko: '관리자는 제품 출시를 다음 분기로 연기하기로 결정했습니다.',
			why: 'decide 뒤에는 동명사가 아니라 to부정사가 옵니다. 동사에 따라 뒤에 오는 모양이 다릅니다.',
			notes: ['동사원형', 'to부정사 (정답)', '동명사 — decide 뒤에 쓰지 않음', '과거형'],
			vocab: [
				['decide to', '~하기로 결정하다'],
				['product launch', '제품 출시'],
				['quarter', '분기']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-10',
			text: 'Many employees enjoy ------- from home on Fridays.',
			options: ['working', 'work', 'to work', 'worked'],
			answer: 0,
			ko: '많은 직원이 금요일에 재택근무하는 것을 좋아합니다.',
			why: 'enjoy 뒤에는 동명사가 옵니다. enjoy -ing는 "~하는 것을 즐기다"입니다.',
			notes: ['동명사 (정답)', '동사원형', 'to부정사 — enjoy 뒤에 쓰지 않음', '과거형'],
			vocab: [
				['enjoy -ing', '~하는 것을 즐기다'],
				['work from home', '재택근무하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-11',
			text: 'The manager is interested in ------- the latest sales data.',
			options: ['review', 'reviewed', 'reviewing', 'reviews'],
			answer: 2,
			ko: '관리자는 최신 매출 자료를 검토하는 데 관심이 있습니다.',
			why: '전치사 in 뒤에는 동명사가 옵니다. be interested in -ing는 "~에 관심이 있다"입니다.',
			notes: ['동사원형', '과거형', '동명사 (정답)', '-s가 붙은 동사'],
			vocab: [
				['be interested in', '~에 관심이 있다'],
				['latest', '최신의'],
				['sales data', '매출 자료']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-12',
			text: 'Mr. Um spends two hours a day ------- customer e-mails.',
			options: ['answer', 'to answer', 'answered', 'answering'],
			answer: 3,
			ko: '엄 씨는 고객 이메일에 답하는 데 하루 두 시간을 씁니다.',
			why: 'spend + 시간 + -ing는 "~하는 데 시간을 쓰다"입니다.',
			notes: ['동사원형', 'to부정사', '과거형', '동명사 (정답)'],
			vocab: [
				['spend 시간 -ing', '~하는 데 시간을 쓰다'],
				['answer', '답하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-13',
			text: 'Ms. Go hopes ------- the Tokyo office next year.',
			options: ['visit', 'to visit', 'visiting', 'visited'],
			answer: 1,
			ko: '고 씨는 내년에 도쿄 사무실을 방문하기를 바랍니다.',
			why: 'hope 뒤에는 to부정사가 옵니다. hope to는 "~하기를 바라다"입니다.',
			notes: ['동사원형', 'to부정사 (정답)', '동명사 — hope 뒤에 쓰지 않음', '과거형'],
			vocab: [
				['hope to', '~하기를 바라다'],
				['next year', '내년']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-14',
			text: 'The ------- of the new bridge will take two years.',
			options: ['construction', 'construct', 'constructing', 'constructed'],
			answer: 0,
			ko: '새 다리의 건설에는 2년이 걸릴 것입니다.',
			why: '빈칸 앞에 관사 The가 있고 뒤에 of가 옵니다. 이런 자리에는 동명사가 아니라 명사 construction이 옵니다.',
			notes: ['명사 (정답)', '동사원형', '동명사 — 관사와 of 사이에는 명사를 씀', '과거형'],
			vocab: [
				['construction', '건설'],
				['bridge', '다리'],
				['take', '(시간이) 걸리다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd08-15',
			text: 'The machine can run for ten hours without -------.',
			options: ['stop', 'stopped', 'stopping', 'stops'],
			answer: 2,
			ko: '그 기계는 멈추지 않고 10시간 동안 작동할 수 있습니다.',
			why: '전치사 without 뒤에는 동명사가 옵니다. without -ing는 "~하지 않고"입니다.',
			notes: ['동사원형', '과거형', '동명사 (정답)', '-s가 붙은 동사'],
			vocab: [
				['run', '작동하다'],
				['without -ing', '~하지 않고']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '부정·부가 의문문: not을 빼고 생각한다',
			blocks: [
				{
					type: 'p',
					text: "Don't you ~? / Isn't it ~?처럼 **not으로 시작하는 질문**과, 문장 끝에 **~, isn't it? / ~, right?**을 붙인 질문입니다. 둘 다 \"~이죠?\" 하고 확인하는 말입니다."
				},
				{
					type: 'box',
					title: '답하는 법',
					items: [
						"**not을 빼고** 보통 질문으로 바꿔 생각합니다. — Didn't you send it? → Did you send it?",
						'사실이 **그렇다**면 Yes, **아니다**면 No입니다.',
						'우리말의 "네, 안 보냈어요"와 반대입니다. 안 보냈으면 **No**입니다.'
					]
				},
				{
					type: 'table',
					head: ['질문', '사실', '응답'],
					rows: [
						["Didn't you send the report?", '보냈다', 'Yes, I sent it yesterday.'],
						["Didn't you send the report?", '안 보냈다', "No, I'll send it now."],
						["The meeting is at two, isn't it?", '2시가 맞다', 'Yes, in room B.'],
						["The meeting is at two, isn't it?", '2시가 아니다', 'No, it was moved to three.']
					]
				},
				{
					type: 'tip',
					text: 'Yes / No 뒤의 내용이 Yes / No와 맞는지 꼭 확인하세요.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: "Isn't the printer working?",
			options: ['Yes, I work here.', 'On the second floor.', "No, it's out of ink."],
			answer: 2,
			ko: '프린터가 작동하지 않나요?',
			optionsKo: ['네, 저는 여기서 일해요.', '2층에요.', '네, 잉크가 떨어졌어요.'],
			steps: [
				'**Isn\'t**로 시작하는 부정 의문문입니다. not을 빼고 "프린터가 작동하나요?"로 생각합니다.',
				'(A)는 Yes로 시작했지만 work(일하다)를 써서 프린터와 관계없는 말을 했습니다. 지웁니다.',
				'(B)는 장소로 답했습니다. 지웁니다.',
				'(C)는 No(작동하지 않는다) 뒤에 이유를 덧붙였습니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-16',
			script: "Didn't you receive my e-mail?",
			options: ['At the reception desk.', 'Yes, I got it this morning.', 'A new e-mail address.'],
			answer: 1,
			ko: '제 이메일을 받지 못했나요?',
			optionsKo: ['접수 창구에서요.', '아니요, 오늘 아침에 받았어요.', '새 이메일 주소예요.'],
			why: 'not을 빼면 "이메일을 받았나요?"입니다. 받았으므로 Yes로 답한 (B)가 정답입니다.',
			notes: ['receive와 비슷한 reception', 'Yes + 덧붙임 (정답)', 'e-mail 반복 — 질문과 무관'],
			vocab: [
				['receive', '받다'],
				['reception desk', '접수 창구']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-17',
			script: "The meeting starts at ten, doesn't it?",
			options: ['No, it was moved to eleven.', 'In the main office.', 'Yes, I met him.'],
			answer: 0,
			ko: '회의는 10시에 시작하죠?',
			optionsKo: ['아니요, 11시로 옮겨졌어요.', '본사에서요.', '네, 그를 만났어요.'],
			why: '10시가 아니므로 No로 답하고 바뀐 시간을 알려 준 (A)가 정답입니다.',
			notes: [
				'No + 바뀐 정보 (정답)',
				'장소 — Where에 대한 답',
				'Yes로 시작했지만 내용이 무관, meeting과 비슷한 met'
			],
			vocab: [
				['start', '시작하다'],
				['be moved to', '~로 옮겨지다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-18',
			script: "Aren't you coming to the training session?",
			options: ['The train was late.', 'About two hours.', "Yes, I'll be there soon."],
			answer: 2,
			ko: '교육에 오지 않으시나요?',
			optionsKo: ['기차가 늦었어요.', '2시간 정도요.', '아니요, 곧 갈게요.'],
			why: 'not을 빼면 "교육에 오나요?"입니다. 갈 것이므로 Yes로 답한 (C)가 정답입니다.',
			notes: ['training과 비슷한 train', '기간 — How long에 대한 답', 'Yes + 덧붙임 (정답)'],
			vocab: [
				['training session', '교육'],
				['soon', '곧']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-19',
			script: "You've met Mr. Song before, haven't you?",
			options: ["Yes, at last year's conference.", 'Before lunch.', "It's a long song."],
			answer: 0,
			ko: '송 씨를 전에 만난 적이 있죠?',
			optionsKo: ['네, 작년 학회에서요.', '점심 전에요.', '긴 노래예요.'],
			why: '만난 적이 있으므로 Yes로 답하고 어디서 만났는지 덧붙인 (A)가 정답입니다.',
			notes: [
				'Yes + 덧붙임 (정답)',
				'before 반복 — 질문과 무관',
				'이름 Song과 철자가 같은 song(노래)'
			],
			vocab: [
				['meet', '만나다'],
				['conference', '학회, 회의']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-20',
			script: "Isn't this your umbrella?",
			options: ["It's raining outside.", 'No, mine is black.', 'Under the desk.'],
			answer: 1,
			ko: '이것은 당신 우산이 아닌가요?',
			optionsKo: ['밖에 비가 와요.', '네, 제 것은 검은색이에요.', '책상 아래에요.'],
			why: '자기 우산이 아니므로 No로 답한 (B)가 정답입니다. mine은 "나의 것"입니다.',
			notes: ['umbrella에서 떠오르는 비 이야기', 'No + 덧붙임 (정답)', '장소 — Where에 대한 답'],
			vocab: [
				['umbrella', '우산'],
				['mine', '나의 것']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-21',
			script: 'This restaurant takes credit cards, right?',
			options: ['A table for two.', 'On the right side.', 'I think so, but let me ask.'],
			answer: 2,
			ko: '이 식당은 신용카드를 받죠?',
			optionsKo: ['2인용 테이블이요.', '오른쪽에요.', '그런 것 같은데, 물어볼게요.'],
			why: 'Yes / No 대신 "그런 것 같다, 확인해 보겠다"고 답한 (C)가 정답입니다.',
			notes: [
				'restaurant에서 떠오르는 좌석 이야기',
				'right(맞죠?)와 철자가 같은 right(오른쪽)',
				'확인하겠다는 응답 (정답)'
			],
			vocab: [
				['take credit cards', '신용카드를 받다'],
				['I think so', '그런 것 같다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-22',
			script: "Don't you need a ride to the airport?",
			options: ["Thanks, but I'll take the bus.", 'A window seat.', 'Yes, it arrived on time.'],
			answer: 0,
			ko: '공항까지 태워 드릴까요?',
			optionsKo: ['고맙지만 버스를 탈게요.', '창가 좌석이요.', '네, 정시에 도착했어요.'],
			why: 'Yes / No 없이 "버스를 타겠다"고 답해 필요 없다는 뜻을 전한 (A)가 정답입니다.',
			notes: [
				'No 없이 거절 (정답)',
				'airport에서 떠오르는 좌석 이야기',
				'Yes로 시작했지만 내용이 무관'
			],
			vocab: [
				['need a ride', '태워 줄 사람이 필요하다'],
				['take the bus', '버스를 타다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-23',
			script: "The copier was repaired yesterday, wasn't it?",
			options: ['Ten copies.', 'A pair of shoes.', "Yes, it's working fine now."],
			answer: 2,
			ko: '복사기는 어제 수리됐죠?',
			optionsKo: ['10부요.', '신발 한 켤레요.', '네, 지금은 잘 작동해요.'],
			why: '수리된 것이 맞으므로 Yes로 답한 (C)가 정답입니다.',
			notes: ['copier와 비슷한 copies', 'repaired와 발음이 비슷한 pair', 'Yes + 덧붙임 (정답)'],
			vocab: [
				['copier', '복사기'],
				['repair', '수리하다'],
				['work fine', '잘 작동하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-24',
			script: "Haven't you finished the budget report yet?",
			options: ['It was a tight budget.', 'No, I need one more day.', 'In the top drawer.'],
			answer: 1,
			ko: '예산 보고서를 아직 끝내지 못했나요?',
			optionsKo: ['빠듯한 예산이었어요.', '네, 하루가 더 필요해요.', '맨 위 서랍에요.'],
			why: 'not을 빼면 "보고서를 끝냈나요?"입니다. 끝내지 못했으므로 No로 답한 (B)가 정답입니다.',
			notes: ['budget 반복 — 질문과 무관', 'No + 이유 (정답)', '장소 — Where에 대한 답'],
			vocab: [
				['budget report', '예산 보고서'],
				['yet', '아직'],
				['tight', '빠듯한']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd08-25',
			script: "Ms. Ahn works in the sales department, doesn't she?",
			options: ['No, she moved to marketing.', 'A department store.', 'Yes, I walked here.'],
			answer: 0,
			ko: '안 씨는 영업부에서 일하죠?',
			optionsKo: ['아니요, 마케팅부로 옮겼어요.', '백화점이요.', '네, 저는 여기까지 걸어왔어요.'],
			why: '영업부가 아니므로 No로 답하고 바뀐 부서를 알려 준 (A)가 정답입니다.',
			notes: [
				'No + 바뀐 정보 (정답)',
				'department 반복 — 질문과 무관',
				'work와 발음이 비슷한 walk'
			],
			vocab: [
				['sales department', '영업부'],
				['move to', '~로 옮기다']
			]
		}
	]
} satisfies DayContent;
