import type { DayContent } from '../schema';

export default {
	goals: [
		'능동태와 수동태의 모양을 구분한다',
		'빈칸 뒤 목적어를 보고 태를 고른다',
		"Why 질문과 Why don't you 제안을 구분한다"
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '능동태와 수동태',
			blocks: [
				{
					type: 'p',
					text: '주어가 동작을 **하면** 능동태, 동작을 **당하면** 수동태입니다. 수동태는 **be동사 + 과거분사** 모양입니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The manager ==approved== the plan.',
							ko: '관리자가 그 계획을 승인했습니다.',
							note: '능동태 — 주어(관리자)가 승인함'
						},
						{
							en: 'The plan ==was approved== by the manager.',
							ko: '그 계획은 관리자에 의해 승인되었습니다.',
							note: '수동태 — 주어(계획)가 승인됨'
						}
					]
				},
				{
					type: 'table',
					head: ['시제', '수동태 모양', '예'],
					rows: [
						['현재', 'is / are + 과거분사', 'is cleaned'],
						['과거', 'was / were + 과거분사', 'was cleaned'],
						['조동사 뒤', 'will / can / must + be + 과거분사', 'will be cleaned'],
						['현재완료', 'has / have been + 과거분사', 'has been cleaned']
					]
				},
				{
					type: 'p',
					text: '과거분사는 대부분 동사에 -ed를 붙인 모양이고, sent, given, built, made처럼 불규칙한 것도 있습니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '빈칸 뒤를 보면 풀립니다',
			blocks: [
				{
					type: 'box',
					title: '능동태와 수동태 고르는 법',
					items: [
						'빈칸 뒤에 **목적어(명사)**가 있으면 → 능동태 — The company ==hired== three engineers.',
						'빈칸 뒤에 목적어가 없고 **전치사나 부사**가 오면 → 수동태 — Three engineers ==were hired== last month.',
						'**by + 행위자**가 보이면 → 수동태 — The report was written ==by Mr. Kim==.'
					]
				},
				{
					type: 'p',
					text: '주어가 사물이고 뜻이 "~되다"이면 수동태일 가능성이 높습니다.'
				},
				{
					type: 'tip',
					text: 'arrive, rise, happen, take place처럼 목적어가 필요 없는 동사는 수동태로 쓰지 않습니다. — The train ==arrived== late. (was arrived ✕)'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The annual report ------- to all shareholders last week.',
			options: ['sent', 'was sent', 'sending', 'has sent'],
			answer: 1,
			ko: '연례 보고서는 지난주에 모든 주주에게 발송되었습니다.',
			steps: [
				'보기가 모두 send의 여러 모양입니다. 능동태인지 수동태인지 고르는 문제입니다.',
				'빈칸 뒤를 봅니다. to all shareholders는 "전치사 + 명사"이고, 목적어가 없습니다.',
				'보고서는 스스로 보내는 것이 아니라 **보내지는** 것입니다. 수동태 **was sent**가 정답입니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The company ------- a new sales manager yesterday.',
			options: ['appointed', 'was appointed', 'appointing', 'be appointed'],
			answer: 0,
			ko: '그 회사는 어제 새 영업 관리자를 임명했습니다.',
			steps: [
				'보기가 모두 appoint의 여러 모양입니다.',
				'빈칸 뒤에 목적어 **a new sales manager**가 있습니다.',
				'목적어가 있으면 **능동태**입니다. 정답은 (A) **appointed**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-01',
			text: 'The conference room ------- every morning before 8 A.M.',
			options: ['cleans', 'is cleaned', 'cleaning', 'has cleaned'],
			answer: 1,
			ko: '그 회의실은 매일 아침 8시 전에 청소됩니다.',
			why: '빈칸 뒤에 목적어가 없고, 회의실은 "청소되는" 대상입니다. 수동태 is cleaned가 정답입니다.',
			notes: [
				'능동태 — 뒤에 목적어가 필요함',
				'수동태 (정답)',
				'-ing형 — 동사가 될 수 없음',
				'능동태 현재완료'
			],
			vocab: [
				['conference room', '회의실'],
				['clean', '청소하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-02',
			text: 'The new policy will ------- next Monday.',
			options: ['be announced', 'announce', 'announcing', 'announced'],
			answer: 0,
			ko: '새 정책은 다음 주 월요일에 발표될 것입니다.',
			why: '정책은 "발표되는" 대상이고 빈칸 뒤에 목적어가 없습니다. will 뒤 수동태는 be + 과거분사이므로 be announced가 정답입니다.',
			notes: [
				'수동태 (정답)',
				'능동태 — 뒤에 목적어가 필요함',
				'-ing형',
				'과거분사 — will 바로 뒤에 올 수 없음'
			],
			vocab: [
				['policy', '정책'],
				['announce', '발표하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-03',
			text: 'Ms. Kwon ------- the meeting until next Thursday.',
			options: ['was postponed', 'postponing', 'postponed', 'be postponed'],
			answer: 2,
			ko: '권 씨는 회의를 다음 주 목요일로 연기했습니다.',
			why: '빈칸 뒤에 목적어 the meeting이 있습니다. 목적어가 있으면 능동태이므로 postponed가 정답입니다.',
			notes: [
				'수동태 — 뒤에 목적어가 있어서 안 됨',
				'-ing형 — 동사가 될 수 없음',
				'능동태 (정답)',
				'be + 과거분사 — 조동사 뒤에 씀'
			],
			vocab: [
				['postpone', '연기하다'],
				['until', '~까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-04',
			text: 'All orders ------- within two business days.',
			options: ['process', 'processing', 'have processed', 'are processed'],
			answer: 3,
			ko: '모든 주문은 영업일 기준 이틀 안에 처리됩니다.',
			why: '주문은 "처리되는" 대상이고 빈칸 뒤에 목적어가 없습니다. 수동태 are processed가 정답입니다.',
			notes: ['능동태 — 뒤에 목적어가 필요함', '-ing형', '능동태 현재완료', '수동태 (정답)'],
			vocab: [
				['order', '주문'],
				['process', '처리하다'],
				['business day', '영업일']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-05',
			text: 'The building ------- by a famous architect in 1995.',
			options: ['was designed', 'designed', 'has designed', 'designing'],
			answer: 0,
			ko: '그 건물은 1995년에 유명한 건축가가 설계했습니다.',
			why: 'by + 행위자(a famous architect)는 수동태의 신호입니다. 건물은 "설계되는" 대상이므로 was designed가 정답입니다.',
			notes: ['수동태 (정답)', '능동태 — 건물이 설계할 수 없음', '능동태 현재완료', '-ing형'],
			vocab: [
				['design', '설계하다'],
				['famous', '유명한'],
				['architect', '건축가']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-06',
			text: 'The technician ------- the broken copier this morning.',
			options: ['was repaired', 'repaired', 'repairing', 'be repaired'],
			answer: 1,
			ko: '기술자가 오늘 아침에 고장 난 복사기를 수리했습니다.',
			why: '빈칸 뒤에 목적어 the broken copier가 있습니다. 목적어가 있으면 능동태이므로 repaired가 정답입니다.',
			notes: [
				'수동태 — 뒤에 목적어가 있어서 안 됨',
				'능동태 (정답)',
				'-ing형',
				'be + 과거분사 — 조동사 뒤에 씀'
			],
			vocab: [
				['repair', '수리하다'],
				['broken', '고장 난'],
				['copier', '복사기']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-07',
			text: 'Free samples ------- to all visitors at the trade fair.',
			options: ['gave', 'giving', 'were given', 'have given'],
			answer: 2,
			ko: '무역 박람회에서 모든 방문객에게 무료 견본이 제공되었습니다.',
			why: '견본은 "주어지는" 대상이고 빈칸 뒤에 목적어가 없습니다. 수동태 were given이 정답입니다.',
			notes: ['능동태 — 견본이 줄 수 없음', '-ing형', '수동태 (정답)', '능동태 현재완료'],
			vocab: [
				['free sample', '무료 견본'],
				['visitor', '방문객'],
				['trade fair', '무역 박람회']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-08',
			text: 'The contract must ------- by both parties.',
			options: ['sign', 'signing', 'signed', 'be signed'],
			answer: 3,
			ko: '계약서는 양측 모두가 서명해야 합니다.',
			why: 'by both parties가 수동태의 신호입니다. must 뒤 수동태는 be + 과거분사이므로 be signed가 정답입니다.',
			notes: [
				'능동태 — 뒤에 목적어가 필요함',
				'-ing형',
				'과거분사 — must 바로 뒤에 올 수 없음',
				'수동태 (정답)'
			],
			vocab: [
				['contract', '계약서'],
				['both parties', '양측']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-09',
			text: 'The city will ------- a new library near the station.',
			options: ['be built', 'build', 'building', 'built'],
			answer: 1,
			ko: '시는 역 근처에 새 도서관을 지을 예정입니다.',
			why: '빈칸 뒤에 목적어 a new library가 있습니다. 목적어가 있으면 능동태이고, will 뒤에는 동사원형 build가 옵니다.',
			notes: ['수동태 — 뒤에 목적어가 있어서 안 됨', '능동태 (정답)', '-ing형', '과거분사'],
			vocab: [
				['library', '도서관'],
				['near', '~ 근처에'],
				['station', '역']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-10',
			text: 'The results of the survey ------- on the company Web site.',
			options: ['posted', 'posting', 'were posted', 'to post'],
			answer: 2,
			ko: '설문 조사 결과는 회사 웹사이트에 게시되었습니다.',
			why: '결과는 "게시되는" 대상이고 빈칸 뒤에 목적어가 없습니다. 수동태 were posted가 정답입니다.',
			notes: [
				'능동태 — 뒤에 목적어가 필요함',
				'-ing형',
				'수동태 (정답)',
				'to부정사 — 동사가 될 수 없음'
			],
			vocab: [
				['result', '결과'],
				['survey', '설문 조사'],
				['post', '게시하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-11',
			text: 'Our products ------- in more than twenty countries.',
			options: ['are distributed', 'distribute', 'distributing', 'have distributed'],
			answer: 0,
			ko: '저희 제품은 20개국 이상에 유통됩니다.',
			why: '제품은 "유통되는" 대상이고 빈칸 뒤에 목적어가 없습니다. 수동태 are distributed가 정답입니다.',
			notes: ['수동태 (정답)', '능동태 — 뒤에 목적어가 필요함', '-ing형', '능동태 현재완료'],
			vocab: [
				['product', '제품'],
				['distribute', '유통하다'],
				['more than', '~ 이상']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-12',
			text: 'The manager ------- all employees to attend the safety training.',
			options: ['was required', 'requiring', 'be required', 'required'],
			answer: 3,
			ko: '관리자는 모든 직원에게 안전 교육에 참석하라고 요구했습니다.',
			why: '빈칸 뒤에 목적어 all employees가 있습니다. 목적어가 있으면 능동태이므로 required가 정답입니다.',
			notes: [
				'수동태 — 뒤에 목적어가 있어서 안 됨',
				'-ing형',
				'be + 과거분사 — 조동사 뒤에 씀',
				'능동태 (정답)'
			],
			vocab: [
				['require', '요구하다'],
				['attend', '참석하다'],
				['safety training', '안전 교육']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-13',
			text: 'The old machines have ------- with new models.',
			options: ['replace', 'been replaced', 'replaced', 'replacing'],
			answer: 1,
			ko: '낡은 기계들은 새 모델로 교체되었습니다.',
			why: '기계는 "교체되는" 대상이고 빈칸 뒤에 목적어가 없습니다. 현재완료 수동태는 have been + 과거분사이므로 been replaced가 정답입니다.',
			notes: ['동사원형', '수동태 (정답)', '능동태 — 뒤에 목적어가 필요함', '-ing형'],
			vocab: [
				['machine', '기계'],
				['replace A with B', 'A를 B로 교체하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-14',
			text: 'The hotel ------- free breakfast to all guests.',
			options: ['provides', 'is provided', 'providing', 'be provided'],
			answer: 0,
			ko: '그 호텔은 모든 투숙객에게 무료 조식을 제공합니다.',
			why: '빈칸 뒤에 목적어 free breakfast가 있습니다. 목적어가 있으면 능동태이므로 provides가 정답입니다.',
			notes: [
				'능동태 (정답)',
				'수동태 — 뒤에 목적어가 있어서 안 됨',
				'-ing형',
				'be + 과거분사 — 조동사 뒤에 씀'
			],
			vocab: [
				['provide', '제공하다'],
				['free breakfast', '무료 조식'],
				['guest', '투숙객']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd06-15',
			text: 'Applications ------- until the end of this month.',
			options: ['accept', 'accepting', 'will be accepted', 'have accepted'],
			answer: 2,
			ko: '지원서는 이번 달 말까지 접수됩니다.',
			why: '지원서는 "접수되는" 대상이고 빈칸 뒤에 목적어가 없습니다. 수동태 will be accepted가 정답입니다.',
			notes: ['능동태 — 뒤에 목적어가 필요함', '-ing형', '수동태 (정답)', '능동태 현재완료'],
			vocab: [
				['application', '지원서'],
				['accept', '접수하다, 받아들이다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Why 의문문: 이유를 묻는다',
			blocks: [
				{
					type: 'p',
					text: 'Why로 시작하면 **이유**를 묻는 질문입니다. Because로 시작하지 않는 정답이 더 많습니다.'
				},
				{
					type: 'table',
					head: ['정답 유형', '예'],
					rows: [
						['Because + 문장', 'Because the road was closed.'],
						['Because of / Due to + 명사', 'Due to the bad weather.'],
						['To + 동사원형 (목적)', 'To meet a client.'],
						['Because 없이 이유만', 'The printer is out of paper.']
					]
				},
				{
					type: 'box',
					title: "Why don't you / we ~?는 제안입니다",
					items: [
						'Why don\'t we ~?는 "~하는 게 어때요?"라는 **제안**입니다. 이유를 묻는 말이 아닙니다.',
						"정답은 수락이나 거절입니다. — That's a good idea. / Sure. / I'm sorry, I can't.",
						'Because로 시작하는 응답은 오히려 오답입니다.'
					]
				},
				{
					type: 'tip',
					text: "Why 뒤에 don't가 들리면 제안이라는 점을 바로 떠올리세요."
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Why was the flight delayed?',
			options: ['Because of heavy fog.', 'At gate seven.', 'Two hours ago.'],
			answer: 0,
			ko: '비행기는 왜 지연되었나요?',
			optionsKo: ['짙은 안개 때문에요.', '7번 탑승구에서요.', '두 시간 전에요.'],
			steps: [
				'첫 단어가 **Why**입니다. 이유를 묻는 질문입니다.',
				'(B)는 장소로 답했습니다. Where에 대한 답이므로 지웁니다.',
				'(C)는 시간으로 답했습니다. When에 대한 답이므로 지웁니다.',
				'(A)는 Because of + 명사로 이유를 답했습니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-16',
			script: 'Why is the store closed today?',
			options: ["It's a national holiday.", "At nine o'clock.", 'On Park Avenue.'],
			answer: 0,
			ko: '오늘 그 매장은 왜 문을 닫았나요?',
			optionsKo: ['공휴일이라서요.', '9시에요.', '파크 애비뉴에요.'],
			why: 'Because 없이 이유만 말해도 Why의 정답이 됩니다.',
			notes: ['이유 (정답)', '시각 — When에 대한 답', '장소 — Where에 대한 답'],
			vocab: [
				['closed', '문을 닫은'],
				['national holiday', '공휴일']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-17',
			script: 'Why did Mr. Min leave early?',
			options: ['Around three.', "He had a doctor's appointment.", 'Yes, he left.'],
			answer: 1,
			ko: '민 씨는 왜 일찍 퇴근했나요?',
			optionsKo: ['3시쯤이요.', '병원 예약이 있었어요.', '네, 그는 떠났어요.'],
			why: '일찍 떠난 이유를 설명한 (B)가 정답입니다.',
			notes: ['시각 — When에 대한 답', '이유 (정답)', 'Yes로 시작, leave의 과거형 left'],
			vocab: [
				['leave early', '일찍 퇴근하다'],
				["doctor's appointment", '병원 예약']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-18',
			script: 'Why are you going to Busan next week?',
			options: ['By express train.', 'For three nights.', 'To attend a trade fair.'],
			answer: 2,
			ko: '다음 주에 부산에는 왜 가시나요?',
			optionsKo: ['고속 열차로요.', '3박 동안이요.', '무역 박람회에 참석하려고요.'],
			why: 'To + 동사원형은 "~하기 위해"라는 목적을 나타내며 Why의 정답이 됩니다.',
			notes: ['교통수단 — How에 대한 답', '기간 — How long에 대한 답', '목적 (정답)'],
			vocab: [
				['express train', '고속 열차'],
				['attend', '참석하다'],
				['trade fair', '무역 박람회']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-19',
			script: "Why don't we take a short break?",
			options: ["That's a good idea.", 'Because it broke.', 'In the break room.'],
			answer: 0,
			ko: '잠깐 쉬는 게 어때요?',
			optionsKo: ['좋은 생각이에요.', '고장이 났기 때문이에요.', '휴게실에서요.'],
			why: 'Why don\'t we ~?는 이유를 묻는 것이 아니라 "~하는 게 어때요?"라는 제안입니다. 제안을 받아들인 (A)가 정답입니다.',
			notes: ['제안 수락 (정답)', 'Because로 시작하지만 제안에 대한 답이 아님', '장소, break 반복'],
			vocab: [
				["Why don't we ~?", '~하는 게 어때요?'],
				['take a break', '쉬다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-20',
			script: 'Why was the meeting canceled?',
			options: ['In the conference room.', 'Yes, it was.', 'Because the manager is sick.'],
			answer: 2,
			ko: '회의는 왜 취소되었나요?',
			optionsKo: ['회의실에서요.', '네, 그랬어요.', '관리자가 아파서요.'],
			why: 'Because + 문장으로 이유를 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', 'Yes로 시작', '이유 (정답)'],
			vocab: [
				['cancel', '취소하다'],
				['sick', '아픈']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-21',
			script: 'Why is the elevator not working?',
			options: ['On the fifth floor.', "It's being repaired.", 'She works on the second floor.'],
			answer: 1,
			ko: '엘리베이터는 왜 작동하지 않나요?',
			optionsKo: ['5층에요.', '수리 중이에요.', '그녀는 2층에서 일해요.'],
			why: '작동하지 않는 이유를 설명한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '이유 (정답)', 'work(작동하다)와 철자가 같은 work(일하다)'],
			vocab: [
				['work', '작동하다'],
				['be being repaired', '수리되고 있다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-22',
			script: 'Why did you choose this supplier?',
			options: ['Their prices are the lowest.', 'Last month.', 'Yes, I chose it.'],
			answer: 0,
			ko: '왜 이 공급업체를 선택했나요?',
			optionsKo: ['가격이 가장 낮아서요.', '지난달에요.', '네, 제가 골랐어요.'],
			why: '선택한 이유를 설명한 (A)가 정답입니다.',
			notes: ['이유 (정답)', '시간 — When에 대한 답', 'Yes로 시작, choose의 과거형 chose'],
			vocab: [
				['choose', '선택하다'],
				['supplier', '공급업체'],
				['lowest', '가장 낮은']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-23',
			script: "Why don't you ask Ms. Yoo for help?",
			options: ['Because she asked me.', "OK, I'll call her now.", 'At the help desk.'],
			answer: 1,
			ko: '유 씨에게 도움을 청해 보는 게 어때요?',
			optionsKo: [
				'그녀가 저에게 물어봤기 때문이에요.',
				'알겠어요, 지금 전화할게요.',
				'안내 창구에서요.'
			],
			why: 'Why don\'t you ~?는 "~해 보는 게 어때요?"라는 제안입니다. 제안을 받아들인 (B)가 정답입니다.',
			notes: ['Because로 시작하지만 제안에 대한 답이 아님', '제안 수락 (정답)', '장소, help 반복'],
			vocab: [
				["Why don't you ~?", '~해 보는 게 어때요?'],
				['ask ~ for help', '~에게 도움을 청하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-24',
			script: 'Why has the deadline been changed?',
			options: ['By next Friday.', 'Yes, I changed my seat.', 'The client asked for more time.'],
			answer: 2,
			ko: '마감일은 왜 변경되었나요?',
			optionsKo: [
				'다음 주 금요일까지요.',
				'네, 자리를 바꿨어요.',
				'고객이 시간을 더 달라고 했어요.'
			],
			why: '변경된 이유를 설명한 (C)가 정답입니다.',
			notes: ['기한 — When에 대한 답', 'Yes로 시작, change 반복', '이유 (정답)'],
			vocab: [
				['deadline', '마감일'],
				['ask for', '~을 요청하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd06-25',
			script: 'Why is Ms. Tak moving to the Daegu branch?',
			options: ['She was promoted to manager.', 'Next to the bank.', 'By moving truck.'],
			answer: 0,
			ko: '탁 씨는 왜 대구 지점으로 옮기나요?',
			optionsKo: ['관리자로 승진했어요.', '은행 옆에요.', '이삿짐 트럭으로요.'],
			why: '옮기는 이유를 설명한 (A)가 정답입니다.',
			notes: ['이유 (정답)', '장소 — Where에 대한 답', '방법, move 반복'],
			vocab: [
				['branch', '지점'],
				['be promoted to', '~로 승진하다']
			]
		}
	]
} satisfies DayContent;
