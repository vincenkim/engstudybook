import type { DayContent } from '../schema';

export default {
	goals: [
		'to부정사가 오는 자리를 알아본다',
		'to부정사와 짝을 이루는 표현을 익힌다',
		'일반 의문문에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: 'to부정사: to + 동사원형',
			blocks: [
				{
					type: 'p',
					text: 'to부정사는 **to + 동사원형** 모양입니다. 문장에서 동사 역할은 하지 못하고, 명사·형용사·부사처럼 쓰입니다.'
				},
				{
					type: 'table',
					head: ['쓰임', '뜻', '예'],
					rows: [
						['목적', '~하기 위해', 'She called ==to confirm== the order.'],
						['명사 꾸밈', '~할', 'We have a plan ==to expand== the store.'],
						['동사의 목적어', '~하는 것을', 'We decided ==to hire== more staff.']
					]
				},
				{
					type: 'tip',
					text: 'in order to + 동사원형도 "~하기 위해"입니다. to 뒤에는 반드시 **동사원형**이 옵니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: 'to부정사와 짝을 이루는 말',
			blocks: [
				{
					type: 'p',
					text: '아래 표현 뒤가 비어 있으면 to부정사를 고르세요. 통째로 외워 두면 해석 없이 풀립니다.'
				},
				{
					type: 'box',
					title: '동사 + to부정사',
					items: [
						'want / would like to — ~하고 싶다',
						'plan / decide / hope / agree to — ~할 계획이다 / 결정하다 / 바라다 / 동의하다',
						'need / expect to — ~해야 하다 / ~할 것으로 예상하다'
					]
				},
				{
					type: 'box',
					title: '동사 + 사람 + to부정사',
					items: [
						'ask / allow / encourage / require + 사람 + to — The manager asked us ==to arrive== early.'
					]
				},
				{
					type: 'box',
					title: '형용사·명사 + to부정사',
					items: [
						'be able to / be pleased to / be ready to — ~할 수 있다 / ~해서 기쁘다 / ~할 준비가 되다',
						'It is important / necessary / easy to — ~하는 것이 중요하다 / 필요하다 / 쉽다',
						'plan / time / way / chance + to — ~할 계획 / 시간 / 방법 / 기회'
					]
				},
				{
					type: 'tip',
					text: 'will, can, must 같은 조동사 뒤에는 to 없이 동사원형만 옵니다. — must ==wear== (must to wear ✕)'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The company plans ------- a new office in Vietnam.',
			options: ['open', 'opens', 'to open', 'opening'],
			answer: 2,
			ko: '그 회사는 베트남에 새 사무실을 열 계획입니다.',
			steps: [
				'보기가 모두 open의 여러 모양입니다. 빈칸 앞 동사를 봅니다.',
				'빈칸 앞 동사는 **plans**입니다. plan은 뒤에 to부정사가 오는 동사입니다.',
				'**to open**이 정답입니다. plan to는 "~할 계획이다"입니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'In order ------- costs, the company changed suppliers.',
			options: ['reduce', 'reducing', 'reduced', 'to reduce'],
			answer: 3,
			ko: '비용을 줄이기 위해 그 회사는 공급업체를 바꿨습니다.',
			steps: [
				'빈칸 앞에 **In order**가 있습니다.',
				'in order to + 동사원형은 "~하기 위해"라는 표현입니다.',
				'정답은 (D) **to reduce**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-01',
			text: 'We would like ------- you to our grand opening event.',
			options: ['invite', 'to invite', 'inviting', 'invited'],
			answer: 1,
			ko: '저희 개업 행사에 귀하를 초대하고 싶습니다.',
			why: 'would like 뒤에는 to부정사가 옵니다. would like to는 "~하고 싶다"입니다.',
			notes: ['동사원형', 'to부정사 (정답)', '-ing형', '과거형'],
			vocab: [
				['would like to', '~하고 싶다'],
				['invite', '초대하다'],
				['grand opening', '개업']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-02',
			text: 'Ms. Hong decided ------- the job offer.',
			options: ['accept', 'accepts', 'to accept', 'accepting'],
			answer: 2,
			ko: '홍 씨는 그 일자리 제안을 받아들이기로 결정했습니다.',
			why: 'decide 뒤에는 to부정사가 옵니다. decide to는 "~하기로 결정하다"입니다.',
			notes: ['동사원형', '-s가 붙은 동사', 'to부정사 (정답)', '-ing형'],
			vocab: [
				['decide to', '~하기로 결정하다'],
				['accept', '받아들이다'],
				['job offer', '일자리 제안']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-03',
			text: 'The manager asked the staff ------- overtime this week.',
			options: ['to work', 'work', 'working', 'worked'],
			answer: 0,
			ko: '관리자는 직원들에게 이번 주에 초과 근무를 해 달라고 요청했습니다.',
			why: 'ask + 사람 + to부정사는 "~에게 …해 달라고 요청하다"입니다.',
			notes: ['to부정사 (정답)', '동사원형', '-ing형', '과거형'],
			vocab: [
				['ask A to B', 'A에게 B해 달라고 요청하다'],
				['work overtime', '초과 근무를 하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-04',
			text: 'Please call our office ------- an appointment.',
			options: ['make', 'makes', 'made', 'to make'],
			answer: 3,
			ko: '예약을 하시려면 저희 사무실로 전화해 주세요.',
			why: 'Please call our office로 문장이 완성됩니다. 그 뒤에서 "~하기 위해"라는 목적을 나타내는 to부정사 to make가 정답입니다.',
			notes: ['동사원형 — 동사 call이 이미 있음', '-s가 붙은 동사', '과거형', 'to부정사 (정답)'],
			vocab: [
				['make an appointment', '예약하다'],
				['call', '전화하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-05',
			text: 'The team worked late to ------- the deadline.',
			options: ['meet', 'meets', 'met', 'meeting'],
			answer: 0,
			ko: '그 팀은 마감을 맞추기 위해 늦게까지 일했습니다.',
			why: 'to부정사는 to + 동사원형입니다. to 뒤에는 동사원형 meet가 옵니다.',
			notes: ['동사원형 (정답)', '-s가 붙은 동사', '과거형', '-ing형'],
			vocab: [
				['work late', '늦게까지 일하다'],
				['meet the deadline', '마감을 맞추다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-06',
			text: 'Customers are able ------- their bills online.',
			options: ['pay', 'to pay', 'paying', 'paid'],
			answer: 1,
			ko: '고객은 온라인으로 요금을 납부할 수 있습니다.',
			why: 'be able to + 동사원형은 "~할 수 있다"입니다.',
			notes: ['동사원형', 'to부정사 (정답)', '-ing형', '과거형'],
			vocab: [
				['be able to', '~할 수 있다'],
				['pay a bill', '요금을 납부하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-07',
			text: 'We need more time ------- the proposal.',
			options: ['review', 'reviews', 'to review', 'reviewed'],
			answer: 2,
			ko: '저희는 그 제안서를 검토할 시간이 더 필요합니다.',
			why: '명사 time 뒤에서 "~할"이라는 뜻으로 명사를 꾸미는 to부정사 자리입니다. time to review는 "검토할 시간"입니다.',
			notes: ['동사원형 — 동사 need가 이미 있음', '-s가 붙은 동사', 'to부정사 (정답)', '과거형'],
			vocab: [
				['need', '필요하다'],
				['review', '검토하다'],
				['proposal', '제안서']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-08',
			text: 'The new system allows users ------- files more quickly.',
			options: ['share', 'sharing', 'shared', 'to share'],
			answer: 3,
			ko: '새 시스템은 사용자가 파일을 더 빠르게 공유할 수 있게 해 줍니다.',
			why: 'allow + 사람 + to부정사는 "~가 …할 수 있게 하다"입니다.',
			notes: ['동사원형', '-ing형', '과거형', 'to부정사 (정답)'],
			vocab: [
				['allow A to B', 'A가 B할 수 있게 하다'],
				['share', '공유하다'],
				['quickly', '빠르게']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-09',
			text: 'Visitors must ------- a name tag at all times.',
			options: ['to wear', 'wear', 'wearing', 'wore'],
			answer: 1,
			ko: '방문객은 항상 이름표를 착용해야 합니다.',
			why: '조동사 must 뒤에는 to 없이 동사원형이 옵니다. to부정사를 고르지 않도록 주의하세요.',
			notes: ['to부정사 — 조동사 뒤에 올 수 없음', '동사원형 (정답)', '-ing형', '과거형'],
			vocab: [
				['wear', '착용하다'],
				['name tag', '이름표'],
				['at all times', '항상']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-10',
			text: 'It is important ------- safety rules in the factory.',
			options: ['to follow', 'follow', 'follows', 'followed'],
			answer: 0,
			ko: '공장에서는 안전 수칙을 따르는 것이 중요합니다.',
			why: 'It is important to + 동사원형은 "~하는 것이 중요하다"입니다.',
			notes: ['to부정사 (정답)', '동사원형', '-s가 붙은 동사', '과거형'],
			vocab: [
				['important', '중요한'],
				['follow', '따르다'],
				['safety rules', '안전 수칙']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-11',
			text: '------- for the course, visit our Web site.',
			options: ['Register', 'Registers', 'To register', 'Registration'],
			answer: 2,
			ko: '그 강좌에 등록하려면 저희 웹사이트를 방문하세요.',
			why: '쉼표 뒤 visit our Web site가 완성된 문장입니다. 문장 앞에서 "~하려면"이라는 목적을 나타내는 To register가 정답입니다.',
			notes: [
				'동사원형 — 동사 visit와 접속사 없이 이어질 수 없음',
				'-s가 붙은 동사',
				'to부정사 (정답)',
				'명사'
			],
			vocab: [
				['register for', '~에 등록하다'],
				['course', '강좌']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-12',
			text: 'The city has a plan ------- a new bus terminal.',
			options: ['build', 'builds', 'built', 'to build'],
			answer: 3,
			ko: '시는 새 버스 터미널을 지을 계획을 가지고 있습니다.',
			why: '명사 plan 뒤에서 "~할"이라는 뜻으로 명사를 꾸미는 to부정사 자리입니다. a plan to build는 "지을 계획"입니다.',
			notes: ['동사원형 — 동사 has가 이미 있음', '-s가 붙은 동사', '과거형', 'to부정사 (정답)'],
			vocab: [
				['plan', '계획'],
				['bus terminal', '버스 터미널']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-13',
			text: 'The manager ------- to hire two more engineers.',
			options: ['decision', 'deciding', 'decided', 'to decide'],
			answer: 2,
			ko: '관리자는 엔지니어를 두 명 더 채용하기로 결정했습니다.',
			why: '문장에 동사가 없으므로 빈칸은 동사 자리입니다. to부정사는 동사가 될 수 없으므로 과거형 decided가 정답입니다.',
			notes: ['명사', '-ing형 — 동사가 될 수 없음', '동사 (정답)', 'to부정사 — 동사가 될 수 없음'],
			vocab: [
				['hire', '채용하다'],
				['engineer', '엔지니어']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-14',
			text: 'Employees are encouraged ------- public transportation.',
			options: ['use', 'to use', 'using', 'used'],
			answer: 1,
			ko: '직원들은 대중교통을 이용하도록 권장됩니다.',
			why: 'be encouraged to + 동사원형은 "~하도록 권장되다"입니다.',
			notes: ['동사원형', 'to부정사 (정답)', '-ing형', '과거형'],
			vocab: [
				['be encouraged to', '~하도록 권장되다'],
				['public transportation', '대중교통']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd07-15',
			text: 'We are pleased ------- that our new branch is now open.',
			options: ['to announce', 'announce', 'announcing', 'announced'],
			answer: 0,
			ko: '저희 새 지점이 문을 열었음을 알리게 되어 기쁩니다.',
			why: 'be pleased to + 동사원형은 "~하게 되어 기쁘다"입니다.',
			notes: ['to부정사 (정답)', '동사원형', '-ing형', '과거형'],
			vocab: [
				['be pleased to', '~하게 되어 기쁘다'],
				['announce', '알리다'],
				['branch', '지점']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '일반 의문문: Yes / No로 답할 수 있는 질문',
			blocks: [
				{
					type: 'p',
					text: 'Do, Did, Is, Are, Have, Will, Can, Should처럼 **의문사 없이** 시작하는 질문입니다. Yes / No로 답할 수 있지만, Yes / No 없이 답하는 정답도 많습니다.'
				},
				{
					type: 'table',
					head: ['정답 유형', '예 (Did you send the report?)'],
					rows: [
						['Yes + 덧붙임', 'Yes, this morning.'],
						['No + 이유·대안', "No, I'll do it now."],
						['Yes / No 없이 답함', 'I sent it an hour ago.'],
						['아직 아니다', 'Not yet.'],
						['확인하겠다', 'Let me check.']
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'Yes / No **뒤의 내용**이 질문과 맞지 않는 응답 — Yes, at the station.',
						'**주어나 시제**가 맞지 않는 응답 — Did you ~?에 Yes, he will.',
						'질문에 나온 단어를 반복하거나 발음이 비슷한 단어를 쓴 응답'
					]
				},
				{
					type: 'tip',
					text: 'Yes / No만 듣고 고르지 마세요. 뒤의 내용까지 맞아야 정답입니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Have you finished the sales report?',
			options: [
				'The sale ends on Friday.',
				'Yes, I sent it this morning.',
				'No, at the front desk.'
			],
			answer: 1,
			ko: '영업 보고서는 다 끝냈나요?',
			optionsKo: [
				'할인 행사는 금요일에 끝나요.',
				'네, 오늘 아침에 보냈어요.',
				'아니요, 안내 데스크에서요.'
			],
			steps: [
				'의문사 없이 **Have you**로 시작합니다. Yes / No로 답할 수 있는 일반 의문문입니다.',
				'(A)는 sales와 발음이 비슷한 sale을 썼지만 보고서와 관계없는 내용입니다. 지웁니다.',
				'(C)는 No로 시작했지만 뒤의 내용이 장소입니다. 질문과 맞지 않으므로 지웁니다.',
				'(B)는 Yes 뒤에 "오늘 아침에 보냈다"고 덧붙였습니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-16',
			script: 'Did you book the meeting room?',
			options: ['A good book.', "Yes, for two o'clock.", 'On the second floor.'],
			answer: 1,
			ko: '회의실은 예약했나요?',
			optionsKo: ['좋은 책이에요.', '네, 2시로 했어요.', '2층에요.'],
			why: 'Yes 뒤에 예약 시간을 덧붙인 (B)가 정답입니다.',
			notes: [
				'book(예약하다)과 철자가 같은 book(책)',
				'Yes + 덧붙임 (정답)',
				'장소 — Where에 대한 답'
			],
			vocab: [
				['book', '예약하다'],
				['meeting room', '회의실']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-17',
			script: 'Is Mr. Jang in the office today?',
			options: ['It is a large office.', 'Yes, I did.', "No, he's on a business trip."],
			answer: 2,
			ko: '장 씨는 오늘 사무실에 있나요?',
			optionsKo: ['넓은 사무실이에요.', '네, 제가 했어요.', '아니요, 출장 중이에요.'],
			why: 'No 뒤에 이유를 덧붙인 (C)가 정답입니다.',
			notes: ['office 반복 — 질문과 무관', 'Is ~?로 물었는데 did로 답함', 'No + 이유 (정답)'],
			vocab: [['be on a business trip', '출장 중이다']]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-18',
			script: 'Have you met the new accountant?',
			options: [
				'Not yet, but I will this afternoon.',
				'The accounting department.',
				'Yes, it was.'
			],
			answer: 0,
			ko: '새로 온 회계사를 만나 보셨나요?',
			optionsKo: ['아직이요, 오늘 오후에 만날 거예요.', '회계부요.', '네, 그랬어요.'],
			why: 'Not yet(아직 아니다)은 Have you ~? 질문에 자주 나오는 정답입니다.',
			notes: [
				'아직 아니라는 응답 (정답)',
				'accountant와 비슷한 accounting',
				'Have you ~?로 물었는데 it was로 답함'
			],
			vocab: [
				['accountant', '회계사'],
				['not yet', '아직 ~ 아니다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-19',
			script: 'Does this bus go to City Hall?',
			options: [
				'Yes, it is the third stop.',
				'About thirty minutes ago.',
				'I went there yesterday.'
			],
			answer: 0,
			ko: '이 버스는 시청에 가나요?',
			optionsKo: ['네, 세 번째 정류장이에요.', '30분쯤 전에요.', '저는 어제 거기 갔어요.'],
			why: 'Yes 뒤에 정류장 정보를 덧붙인 (A)가 정답입니다.',
			notes: ['Yes + 덧붙임 (정답)', '시간 — When에 대한 답', 'go의 과거형 went — 질문과 무관'],
			vocab: [
				['City Hall', '시청'],
				['stop', '정류장']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-20',
			script: 'Can you help me with this report?',
			options: ['It is a weekly report.', 'Sure, what do you need?', 'Yes, he can.'],
			answer: 1,
			ko: '이 보고서 작성을 도와줄 수 있나요?',
			optionsKo: ['주간 보고서예요.', '물론이죠, 무엇이 필요한가요?', '네, 그는 할 수 있어요.'],
			why: 'Sure(물론이죠)로 요청을 받아들인 (B)가 정답입니다.',
			notes: ['report 반복 — 질문과 무관', '수락 (정답)', 'you에게 물었는데 he로 답함'],
			vocab: [
				['help A with B', 'A가 B하는 것을 돕다'],
				['Sure', '물론이죠']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-21',
			script: 'Are you going to the company dinner tonight?',
			options: [
				'At an Italian restaurant.',
				'Yes, it was delicious.',
				"I'm afraid I have other plans."
			],
			answer: 2,
			ko: '오늘 저녁 회식에 가시나요?',
			optionsKo: ['이탈리아 식당에서요.', '네, 맛있었어요.', '죄송하지만 다른 약속이 있어요.'],
			why: 'Yes / No 없이 "다른 약속이 있다"고 답해 못 간다는 뜻을 전한 (C)가 정답입니다.',
			notes: [
				'장소 — Where에 대한 답',
				'오늘 저녁 일을 물었는데 과거로 답함',
				'No 없이 거절 (정답)'
			],
			vocab: [
				['company dinner', '회식'],
				["I'm afraid", '죄송하지만'],
				['plan', '약속, 계획']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-22',
			script: 'Will the package arrive by Friday?',
			options: ['It should be there on Thursday.', 'A large package.', 'Yes, I packed it.'],
			answer: 0,
			ko: '소포는 금요일까지 도착할까요?',
			optionsKo: ['목요일에 도착할 거예요.', '큰 소포예요.', '네, 제가 포장했어요.'],
			why: 'Yes / No 없이 도착 예정일을 알려 준 (A)가 정답입니다.',
			notes: ['Yes 없이 답함 (정답)', 'package 반복 — 질문과 무관', 'package와 비슷한 packed'],
			vocab: [
				['package', '소포'],
				['arrive', '도착하다'],
				['by Friday', '금요일까지']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-23',
			script: 'Do you have the key to the storage room?',
			options: ['It stores old files.', 'No, it is on the left.', 'Ask the security guard.'],
			answer: 2,
			ko: '창고 열쇠를 가지고 있나요?',
			optionsKo: ['오래된 파일을 보관해요.', '아니요, 왼쪽에 있어요.', '경비원에게 물어보세요.'],
			why: '자신은 없으니 "경비원에게 물어보라"고 답한 (C)가 정답입니다.',
			notes: [
				'storage와 비슷한 store',
				'No 뒤의 내용이 질문과 맞지 않음',
				'물어볼 사람을 알려 줌 (정답)'
			],
			vocab: [
				['storage room', '창고'],
				['security guard', '경비원']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-24',
			script: 'Has the client signed the contract?',
			options: ['Yes, I saw the sign.', 'Let me check with Ms. Bae.', 'A two-year contract.'],
			answer: 1,
			ko: '고객이 계약서에 서명했나요?',
			optionsKo: ['네, 표지판을 봤어요.', '배 씨에게 확인해 볼게요.', '2년 계약이에요.'],
			why: '"확인해 보겠다"는 어떤 질문에도 정답이 될 수 있는 응답입니다.',
			notes: [
				'sign(서명하다)과 철자가 같은 sign(표지판)',
				'확인하겠다는 응답 (정답)',
				'contract 반복 — 질문과 무관'
			],
			vocab: [
				['client', '고객'],
				['sign a contract', '계약서에 서명하다'],
				['check with', '~에게 확인하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd07-25',
			script: 'Should I print the handouts now?',
			options: ['Yes, twenty copies, please.', 'On the printer.', 'No, I did not hand it out.'],
			answer: 0,
			ko: '지금 유인물을 인쇄할까요?',
			optionsKo: ['네, 20부 부탁해요.', '프린터 위에요.', '아니요, 제가 나눠 주지 않았어요.'],
			why: 'Yes 뒤에 필요한 부수를 덧붙인 (A)가 정답입니다.',
			notes: ['Yes + 덧붙임 (정답)', '장소, print와 비슷한 printer', 'handout과 비슷한 hand out'],
			vocab: [
				['print', '인쇄하다'],
				['handout', '유인물'],
				['copy', '부, 사본']
			]
		}
	]
} satisfies DayContent;
