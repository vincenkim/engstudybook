import type { DayContent } from '../schema';

export default {
	goals: [
		'보기만 보고 "품사 문제"인지 알아본다',
		'명사가 들어가는 자리 네 곳을 찾는다',
		'Who 질문에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 5는 이런 문제입니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 5는 문장 하나에 빈칸이 하나 있고, 보기 네 개 중 알맞은 것을 고르는 문제입니다. 모두 30문항이 나옵니다.'
				},
				{
					type: 'p',
					text: '보기 네 개가 **같은 뿌리에서 나온 단어**라면 품사 문제입니다. 품사 문제는 문장을 다 해석하지 않아도 빈칸 **앞뒤**만 보면 풀 수 있습니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The ------- of the meeting has changed.',
							ko: '보기: locate / location / located / locally',
							note: '네 보기 모두 locat-로 시작합니다. 품사 문제라는 신호입니다.'
						}
					]
				},
				{
					type: 'table',
					head: ['품사', '하는 일', '예'],
					rows: [
						['명사', '사람·사물·개념의 이름', 'manager, office, decision'],
						['동사', '동작이나 상태', 'decide, open, is'],
						['형용사', '명사를 꾸민다', 'new, important, decisive'],
						['부사', '명사 말고 나머지를 꾸민다', 'quickly, very, decisively']
					]
				},
				{
					type: 'tip',
					text: '2026년 2월 정기시험을 분석한 학원 총평에 따르면 Part 5·6의 46문항 중 15문항이 이런 "자리 보고 푸는" 문제였습니다. 왕초보가 가장 먼저 점수를 올릴 수 있는 유형입니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '명사가 들어가는 자리 네 곳',
			blocks: [
				{
					type: 'p',
					text: '명사 자리는 빈칸 **바로 앞 단어**가 알려 줍니다. 아래 네 가지 신호 뒤가 비어 있으면 명사를 고르세요.'
				},
				{
					type: 'box',
					title: '명사 자리 신호',
					items: [
						'**관사** a / an / the 뒤 — the ==decision==',
						'**소유격** my / our / their 뒤 — our ==decision==',
						'**형용사** 뒤 — an important ==decision==',
						'**전치사** for / of / at / during 뒤 — for your ==cooperation=='
					]
				},
				{
					type: 'p',
					text: '명사는 문장의 **주어**(동사 앞)와 **목적어**(동사 뒤) 자리에도 옵니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: '==Registration== will close on Friday.',
							ko: '등록은 금요일에 마감됩니다.',
							note: '동사 will close 앞, 주어 자리'
						},
						{
							en: 'You must receive ==approval== first.',
							ko: '먼저 승인을 받아야 합니다.',
							note: '동사 receive 뒤, 목적어 자리'
						}
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '명사를 알아보는 꼬리',
			blocks: [
				{
					type: 'p',
					text: '단어 뜻을 몰라도 **꼬리(접미사)**를 보면 명사인지 알 수 있습니다.'
				},
				{
					type: 'table',
					head: ['꼬리', '예'],
					rows: [
						['-tion / -sion', 'information, decision'],
						['-ment', 'payment, agreement'],
						['-ance / -ence', 'performance, difference'],
						['-ity / -ness', 'ability, kindness'],
						['-al', 'approval, proposal, arrival'],
						['-er / -or / -ant (사람)', 'manager, visitor, assistant']
					]
				},
				{
					type: 'p',
					text: 'refund, request, increase처럼 동사와 모양이 같은 명사도 있습니다.'
				},
				{
					type: 'box',
					title: '보기에 명사가 두 개일 때',
					items: [
						'사람 명사와 사물·추상 명사가 함께 나옵니다. 예: assistant(조수) / assistance(도움)',
						'빈칸 앞에 **a / an**이 있으면 셀 수 있는 명사(주로 사람)가 옵니다.',
						'둘 다 될 것 같으면 뜻으로 고릅니다. 누가 하는 일인지, 무엇에 관한 말인지 보세요.'
					]
				},
				{
					type: 'tip',
					text: '-al로 끝나는 단어는 대개 형용사(national, final)지만 approval, proposal, arrival, renewal은 명사입니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Please review the ------- before the meeting.',
			options: ['propose', 'proposal', 'proposed', 'proposing'],
			answer: 1,
			ko: '회의 전에 제안서를 검토해 주세요.',
			steps: [
				'보기를 먼저 봅니다. 네 개 모두 propos-로 시작하므로 **품사 문제**입니다.',
				'빈칸 앞은 관사 **the**, 뒤는 전치사 before입니다. 관사 뒤가 비어 있으니 **명사 자리**입니다.',
				'보기에서 명사 꼬리를 찾습니다. -al로 끝나는 **proposal**(제안서)이 명사입니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Park thanked the staff for their -------.',
			options: ['assist', 'assistant', 'assisted', 'assistance'],
			answer: 3,
			ko: '박 씨는 직원들의 도움에 감사를 표했습니다.',
			steps: [
				'보기가 모두 assist-로 시작합니다. 품사 문제입니다.',
				'빈칸 앞은 소유격 **their**입니다. 소유격 뒤는 **명사 자리**입니다.',
				'명사가 두 개입니다. assistant는 사람(조수), assistance는 도움입니다.',
				'감사하는 이유로는 "도움"이 자연스럽습니다. 정답은 (D) **assistance**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-01',
			text: 'The ------- of the new branch office has been delayed until March.',
			options: ['open', 'opening', 'opened', 'openly'],
			answer: 1,
			ko: '새 지점의 개점이 3월까지 연기되었습니다.',
			why: '관사 The 뒤, 전치사 of 앞은 명사 자리입니다. opening은 "개점, 개업"이라는 뜻의 명사입니다.',
			notes: ['동사·형용사', '명사 (정답)', '동사의 과거형', '부사'],
			vocab: [
				['branch office', '지점'],
				['delay', '연기하다'],
				['until', '~까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-02',
			text: 'Mr. Lee will give a short ------- at the conference tomorrow.',
			options: ['introduce', 'introduced', 'introduction', 'introductory'],
			answer: 2,
			ko: '이 씨는 내일 회의에서 짧은 소개를 할 예정입니다.',
			why: '관사 a와 형용사 short 뒤는 명사 자리입니다. -tion으로 끝나는 introduction이 명사입니다.',
			notes: ['동사', '동사의 과거형', '명사 (정답)', '형용사'],
			vocab: [
				['introduction', '소개'],
				['conference', '회의, 학회']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-03',
			text: 'All employees must receive ------- from their manager before taking leave.',
			options: ['approval', 'approve', 'approved', 'approvingly'],
			answer: 0,
			ko: '모든 직원은 휴가를 가기 전에 관리자의 승인을 받아야 합니다.',
			why: '동사 receive 뒤는 목적어 자리이므로 명사가 필요합니다. approval은 -al로 끝나지만 명사입니다.',
			notes: ['명사 (정답)', '동사', '동사의 과거형', '부사'],
			vocab: [
				['employee', '직원'],
				['approval', '승인'],
				['take leave', '휴가를 가다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-04',
			text: 'We appreciate your ------- during the construction work.',
			options: ['cooperate', 'cooperative', 'cooperatively', 'cooperation'],
			answer: 3,
			ko: '공사 기간 동안 협조해 주셔서 감사합니다.',
			why: '소유격 your 뒤는 명사 자리입니다. -tion으로 끝나는 cooperation이 명사입니다.',
			notes: ['동사', '형용사', '부사', '명사 (정답)'],
			vocab: [
				['appreciate', '감사하다'],
				['cooperation', '협조'],
				['construction', '공사']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-05',
			text: 'The company hired a new ------- to review its financial records.',
			options: ['account', 'accountant', 'accounting', 'accountable'],
			answer: 1,
			ko: '그 회사는 재무 기록을 검토할 새 회계사를 고용했습니다.',
			why: '관사 a와 형용사 new 뒤는 명사 자리입니다. 고용(hired)의 대상은 사람이어야 하므로 사람 명사 accountant(회계사)가 정답입니다.',
			notes: [
				'명사 "계좌" — 고용할 수 없음',
				'사람 명사 (정답)',
				'명사 "회계" — a를 붙이지 않음',
				'형용사'
			],
			vocab: [
				['hire', '고용하다'],
				['review', '검토하다'],
				['financial records', '재무 기록']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-06',
			text: 'Online ------- for the workshop will close on Friday afternoon.',
			options: ['enroll', 'enrolled', 'enrollment', 'enrolls'],
			answer: 2,
			ko: '워크숍 온라인 등록은 금요일 오후에 마감됩니다.',
			why: '동사 will close 앞은 주어 자리입니다. 형용사 Online의 꾸밈을 받는 명사 enrollment가 정답입니다.',
			notes: ['동사', '동사의 과거형', '명사 (정답)', '동사 (3인칭 단수)'],
			vocab: [
				['enrollment', '등록'],
				['close', '마감되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-07',
			text: 'The hotel offers a wide ------- of dining options for its guests.',
			options: ['selection', 'select', 'selective', 'selectively'],
			answer: 0,
			ko: '그 호텔은 투숙객에게 다양한 식사 선택지를 제공합니다.',
			why: '관사 a와 형용사 wide 뒤는 명사 자리입니다. a wide selection of는 "다양한 ~"이라는 뜻으로 자주 나옵니다.',
			notes: ['명사 (정답)', '동사', '형용사', '부사'],
			vocab: [
				['offer', '제공하다'],
				['a wide selection of', '다양한'],
				['dining', '식사']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-08',
			text: 'Customers can request a ------- within 30 days of purchase.',
			options: ['refunded', 'refundable', 'refunding', 'refund'],
			answer: 3,
			ko: '고객은 구매 후 30일 이내에 환불을 요청할 수 있습니다.',
			why: '관사 a 뒤는 명사 자리입니다. refund는 동사(환불하다)와 명사(환불)의 모양이 같습니다.',
			notes: ['동사의 과거형', '형용사', '동사의 -ing형', '명사 (정답)'],
			vocab: [
				['request', '요청하다'],
				['refund', '환불'],
				['purchase', '구매']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-09',
			text: "Ms. Chen made an important ------- about the company's budget.",
			options: ['decide', 'decisive', 'decision', 'decisively'],
			answer: 2,
			ko: '첸 씨는 회사 예산에 관해 중요한 결정을 내렸습니다.',
			why: '관사 an과 형용사 important 뒤는 명사 자리입니다. make a decision은 "결정을 내리다"입니다.',
			notes: ['동사', '형용사', '명사 (정답)', '부사'],
			vocab: [
				['make a decision', '결정을 내리다'],
				['budget', '예산']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-10',
			text: 'Please contact the front desk if you need ------- about local tours.',
			options: ['information', 'inform', 'informed', 'informative'],
			answer: 0,
			ko: '지역 관광에 관한 정보가 필요하면 프런트로 연락해 주세요.',
			why: '동사 need 뒤는 목적어 자리입니다. -tion으로 끝나는 information이 명사입니다.',
			notes: ['명사 (정답)', '동사', '동사의 과거형', '형용사'],
			vocab: [
				['contact', '연락하다'],
				['front desk', '프런트, 안내 데스크'],
				['local', '지역의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-11',
			text: 'The store is closed for ------- until next Monday.',
			options: ['maintain', 'maintenance', 'maintained', 'maintains'],
			answer: 1,
			ko: '그 매장은 다음 주 월요일까지 보수 작업으로 문을 닫습니다.',
			why: '전치사 for 뒤는 명사 자리입니다. -ance로 끝나는 maintenance(유지 보수)가 명사입니다.',
			notes: ['동사', '명사 (정답)', '동사의 과거형', '동사 (3인칭 단수)'],
			vocab: [
				['maintenance', '유지 보수'],
				['be closed for', '~로 문을 닫다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-12',
			text: 'The manager praised the team for its excellent -------.',
			options: ['perform', 'performed', 'performer', 'performance'],
			answer: 3,
			ko: '관리자는 팀의 뛰어난 성과를 칭찬했습니다.',
			why: '소유격 its와 형용사 excellent 뒤는 명사 자리입니다. 칭찬의 이유는 "성과"이므로 performance가 정답입니다.',
			notes: ['동사', '동사의 과거형', '사람 명사 "연주자" — 뜻이 맞지 않음', '명사 (정답)'],
			vocab: [
				['praise', '칭찬하다'],
				['excellent', '뛰어난'],
				['performance', '성과, 실적']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-13',
			text: 'Visitors must show their ------- at the security desk.',
			options: ['identification', 'identify', 'identified', 'identifiable'],
			answer: 0,
			ko: '방문객은 보안 데스크에서 신분증을 보여 주어야 합니다.',
			why: '소유격 their 뒤는 명사 자리입니다. -tion으로 끝나는 identification(신분증)이 명사입니다.',
			notes: ['명사 (정답)', '동사', '동사의 과거형', '형용사'],
			vocab: [
				['visitor', '방문객'],
				['identification', '신분증'],
				['security', '보안']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-14',
			text: 'After a long -------, the committee chose a new supplier.',
			options: ['discuss', 'discussed', 'discussion', 'discussing'],
			answer: 2,
			ko: '긴 논의 끝에 위원회는 새 공급업체를 선정했습니다.',
			why: '관사 a와 형용사 long 뒤는 명사 자리입니다. -sion으로 끝나는 discussion이 명사입니다.',
			notes: ['동사', '동사의 과거형', '명사 (정답)', '동사의 -ing형'],
			vocab: [
				['committee', '위원회'],
				['choose', '선택하다'],
				['supplier', '공급업체']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd01-15',
			text: 'The company is known for the ------- of its delivery service.',
			options: ['reliable', 'reliability', 'reliably', 'rely'],
			answer: 1,
			ko: '그 회사는 배송 서비스의 신뢰성으로 잘 알려져 있습니다.',
			why: '관사 the 뒤, 전치사 of 앞은 명사 자리입니다. -ity로 끝나는 reliability(신뢰성)가 명사입니다.',
			notes: ['형용사', '명사 (정답)', '부사', '동사'],
			vocab: [
				['be known for', '~로 알려져 있다'],
				['reliability', '신뢰성'],
				['delivery', '배송']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2는 이런 문제입니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 2는 질문 하나와 응답 세 개를 듣고 가장 알맞은 응답을 고르는 문제입니다. 모두 25문항이 나옵니다.'
				},
				{
					type: 'p',
					text: '문제지에는 아무것도 적혀 있지 않습니다. 그래서 **질문의 첫 단어**를 놓치지 않는 것이 가장 중요합니다.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'질문의 첫 단어(Who, Where, When …)를 듣고 무엇을 묻는지 정합니다.',
						'응답을 들으면서 맞지 않는 것을 지웁니다.',
						'남은 것을 고릅니다.'
					]
				},
				{
					type: 'tip',
					text: '**듣기** 버튼을 누르면 질문과 응답을 읽어 줍니다. 채점하기 전에는 스크립트가 보이지 않습니다. 음성이 나오지 않으면 **스크립트 보기**를 눌러 읽고 푸세요.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Who 의문문: 사람을 묻는다',
			blocks: [
				{
					type: 'p',
					text: 'Who로 시작하면 **누구**인지 묻는 질문입니다. 응답에 사람이 나오면 정답일 가능성이 높습니다.'
				},
				{
					type: 'table',
					head: ['정답 유형', '예'],
					rows: [
						['사람 이름', 'Ms. Kim is.'],
						['직책', 'The sales manager.'],
						['부서·회사', 'Someone in accounting.'],
						['I / We', "I'll do it."],
						['모른다는 응답', "I'm not sure."]
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'**Yes / No**로 시작하는 응답 — 의문사로 묻는 질문에는 Yes / No로 답할 수 없습니다.',
						'**장소·시간**으로 답하는 응답 — Where, When에 대한 답입니다.',
						'질문에 나온 단어와 **발음이 비슷한 단어**가 들어간 응답'
					]
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Who is going to present at the meeting?',
			options: ['In room 201.', 'Mr. Brown will.', "Yes, it's a nice present."],
			answer: 1,
			ko: '회의에서 누가 발표할 예정인가요?',
			optionsKo: ['201호에서요.', '브라운 씨가 할 거예요.', '네, 멋진 선물이네요.'],
			steps: [
				'첫 단어가 **Who**입니다. 사람을 묻는 질문입니다.',
				'(A)는 장소로 답했습니다. Where에 대한 답이므로 지웁니다.',
				'(C)는 Yes로 시작했고, 질문의 present(발표하다)와 철자가 같은 present(선물)를 썼습니다. 지웁니다.',
				'(B)는 사람 이름으로 답했습니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-16',
			script: 'Who is in charge of the marketing team?',
			options: ['Ms. Kim is.', 'On the third floor.', "Yes, it's free of charge."],
			answer: 0,
			ko: '마케팅팀은 누가 담당하나요?',
			optionsKo: ['김 씨입니다.', '3층에요.', '네, 무료입니다.'],
			why: 'Who로 물었으므로 사람 이름으로 답한 (A)가 정답입니다.',
			notes: ['사람 이름 (정답)', '장소 — Where에 대한 답', 'Yes로 시작, charge 반복'],
			vocab: [
				['in charge of', '~을 담당하는'],
				['free of charge', '무료의']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-17',
			script: 'Who will pick up the client from the airport?',
			options: ["At 3 o'clock.", "I'll do it.", 'A window seat, please.'],
			answer: 1,
			ko: '누가 공항에서 고객을 모셔 올 건가요?',
			optionsKo: ['3시에요.', '제가 할게요.', '창가 좌석으로 주세요.'],
			why: '사람을 묻는 질문에 "제가 하겠다"고 답한 (B)가 정답입니다. I, We도 Who의 정답이 됩니다.',
			notes: ['시간 — When에 대한 답', 'I로 답함 (정답)', 'airport에서 떠오르는 좌석 이야기'],
			vocab: [
				['pick up', '(차로) 데리러 가다'],
				['client', '고객']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-18',
			script: 'Who sent this package?',
			options: ['By express mail.', "No, it wasn't.", 'The supplier in Busan.'],
			answer: 2,
			ko: '이 소포는 누가 보냈나요?',
			optionsKo: ['빠른우편으로요.', '아니요, 그렇지 않았어요.', '부산에 있는 공급업체요.'],
			why: 'Who의 정답은 사람 이름만이 아닙니다. 회사나 부서도 정답이 됩니다.',
			notes: ['방법 — How에 대한 답', 'No로 시작', '회사 (정답)'],
			vocab: [
				['package', '소포'],
				['express mail', '빠른우편'],
				['supplier', '공급업체']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-19',
			script: 'Who should I contact about the schedule change?',
			options: ['Call the front desk.', 'It changed last week.', 'Yes, you should.'],
			answer: 0,
			ko: '일정 변경에 대해 누구에게 연락해야 하나요?',
			optionsKo: ['프런트로 전화하세요.', '지난주에 바뀌었어요.', '네, 그래야 해요.'],
			why: '연락할 곳(프런트)을 알려 준 (A)가 정답입니다.',
			notes: ['연락할 곳을 알려 줌 (정답)', 'change 반복, 시간으로 답함', 'Yes로 시작'],
			vocab: [
				['contact', '연락하다'],
				['schedule change', '일정 변경']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-20',
			script: "Who's going to lead the training session?",
			options: [
				'In the conference room.',
				'The train leaves at nine.',
				'Mr. Davis from headquarters.'
			],
			answer: 2,
			ko: '교육은 누가 진행할 예정인가요?',
			optionsKo: ['회의실에서요.', '기차는 9시에 떠나요.', '본사의 데이비스 씨요.'],
			why: '사람 이름과 소속으로 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', 'training과 발음이 비슷한 train', '사람 이름 (정답)'],
			vocab: [
				['lead', '진행하다, 이끌다'],
				['training session', '교육'],
				['headquarters', '본사']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-21',
			script: 'Who wrote the sales report?',
			options: ["It's on your desk.", 'Someone in the finance team.', 'Next Monday.'],
			answer: 1,
			ko: '영업 보고서는 누가 작성했나요?',
			optionsKo: ['당신 책상 위에 있어요.', '재무팀의 누군가요.', '다음 주 월요일이에요.'],
			why: '정확한 이름 대신 "재무팀의 누군가"라고 답해도 Who의 정답입니다.',
			notes: ['장소 — Where에 대한 답', '부서의 사람 (정답)', '시간 — When에 대한 답'],
			vocab: [
				['sales report', '영업 보고서'],
				['finance', '재무']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-22',
			script: 'Who do I give this form to?',
			options: ['The receptionist.', 'Fill it out in pen.', 'Yes, I gave it.'],
			answer: 0,
			ko: '이 양식은 누구에게 드리면 되나요?',
			optionsKo: ['접수 담당자요.', '펜으로 작성하세요.', '네, 제가 줬어요.'],
			why: '직책(접수 담당자)으로 답한 (A)가 정답입니다.',
			notes: ['직책 (정답)', 'form에서 떠오르는 작성 방법', 'Yes로 시작, give 반복'],
			vocab: [
				['form', '양식'],
				['receptionist', '접수 담당자'],
				['fill out', '작성하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-23',
			script: 'Who ordered the office supplies?',
			options: ['Some paper and pens.', "I'm not sure, let me check.", 'In the supply room.'],
			answer: 1,
			ko: '사무용품은 누가 주문했나요?',
			optionsKo: ['종이와 펜 몇 개요.', '잘 모르겠어요, 확인해 볼게요.', '비품실에요.'],
			why: '"모르겠다, 확인해 보겠다"는 어떤 질문에도 정답이 될 수 있는 응답입니다.',
			notes: ['무엇 — What에 대한 답', '모른다는 응답 (정답)', '장소, supplies와 비슷한 supply'],
			vocab: [
				['order', '주문하다'],
				['office supplies', '사무용품'],
				['supply room', '비품실']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-24',
			script: "Who's the new director of the design department?",
			options: ['She starts in May.', 'Turn left at the corner.', 'Ms. Alvarez, I think.'],
			answer: 2,
			ko: '디자인 부서의 새 부서장은 누구인가요?',
			optionsKo: [
				'그녀는 5월에 시작해요.',
				'모퉁이에서 왼쪽으로 도세요.',
				'알바레즈 씨인 것 같아요.'
			],
			why: '사람 이름으로 답한 (C)가 정답입니다. I think는 "~인 것 같다"는 뜻입니다.',
			notes: ['시간 — When에 대한 답', '길 안내 — 질문과 무관', '사람 이름 (정답)'],
			vocab: [
				['director', '부서장, 이사'],
				['department', '부서']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd01-25',
			script: 'Who can help me move these boxes?',
			options: ['Ask Tom in the mailroom.', 'To the second floor.', "Yes, they're heavy."],
			answer: 0,
			ko: '이 상자들 옮기는 것을 누가 도와줄 수 있나요?',
			optionsKo: ['우편실의 톰에게 물어보세요.', '2층으로요.', '네, 무거워요.'],
			why: '도와줄 사람을 알려 준 (A)가 정답입니다.',
			notes: ['사람을 알려 줌 (정답)', '장소 — Where에 대한 답', 'Yes로 시작'],
			vocab: [
				['move', '옮기다'],
				['mailroom', '우편실']
			]
		}
	]
} satisfies DayContent;
