import type { DayContent } from '../schema';

export default {
	goals: [
		'than, the, as를 보고 비교급·최상급·원급을 고른다',
		'비교급을 강조하는 부사와 불규칙 변화를 익힌다',
		'Part 2의 풀이 순서와 자주 나오는 오답 유형을 정리한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '비교급·최상급·원급: 신호어를 보고 고른다',
			blocks: [
				{
					type: 'p',
					text: '둘을 비교하면 **비교급**, 셋 이상 가운데 으뜸이면 **최상급**, 둘이 같으면 **원급**을 씁니다. 빈칸 주변의 **신호어**만 찾으면 해석 없이 고를 수 있습니다.'
				},
				{
					type: 'table',
					head: ['종류', '모양', '신호어', '예'],
					rows: [
						['비교급', '-er / more ~', 'than', 'This room is ==larger than== that one.'],
						[
							'최상급',
							'the -est / the most ~',
							'the, in / of / ever',
							'It is ==the largest== room ==in== the hotel.'
						],
						['원급', 'as ~ as', 'as … as', 'This room is ==as large as== that one.']
					]
				},
				{
					type: 'box',
					title: '모양 만드는 법',
					items: [
						'짧은 단어는 **-er / -est** — cheap → cheaper → cheapest',
						'긴 단어는 **more / most** — expensive → more expensive → most expensive',
						'-ly로 끝나는 부사도 **more / most** — quickly → more quickly → most quickly'
					]
				},
				{
					type: 'tip',
					text: 'than이 보이면 비교급, the와 in / of / ever가 보이면 최상급, as와 as 사이는 원급입니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '비교급 강조와 불규칙 변화',
			blocks: [
				{
					type: 'box',
					title: '비교급을 강조하는 부사',
					items: [
						'**much / even / far / a lot** + 비교급 — "훨씬 더 ~한"',
						'The new bridge is ==much== wider than the old one.',
						'very는 비교급 앞에 쓰지 않습니다. — very wider (✕)'
					]
				},
				{
					type: 'table',
					head: ['원급', '비교급', '최상급'],
					rows: [
						['good 좋은 / well 잘', 'better', 'best'],
						['bad 나쁜', 'worse', 'worst'],
						['many / much 많은', 'more', 'most'],
						['little 적은', 'less', 'least']
					]
				},
				{
					type: 'box',
					title: '자리도 함께 본다',
					items: [
						'as ~ as 사이: be동사 뒤는 형용사, 일반 동사 뒤는 부사 — is as ==quiet== as / works as ==quietly== as',
						'신호어가 없고 very, so, too 뒤라면 **원급**입니다. — very ==quiet== / so ==quietly=='
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: "This year's budget is ------- than last year's.",
			options: ['large', 'larger', 'largest', 'largely'],
			answer: 1,
			ko: '올해 예산은 작년 예산보다 큽니다.',
			steps: [
				'보기가 large의 원급, 비교급, 최상급, 부사입니다. 빈칸 주변에서 **신호어**를 찾습니다.',
				'빈칸 바로 뒤에 **than**이 있습니다. than은 비교급의 신호어입니다.',
				'정답은 (B) **larger**입니다. larger than은 "~보다 큰"입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Mr. Dubois gave the ------- presentation of all the speakers.',
			options: ['short', 'shorter', 'shortest', 'shortly'],
			answer: 2,
			ko: '뒤부아 씨는 모든 발표자 가운데 가장 짧은 발표를 했습니다.',
			steps: [
				'빈칸 앞에 **the**가 있고 뒤에 **of all the speakers**(모든 발표자 가운데)가 있습니다.',
				'the와 of all은 최상급의 신호어입니다. 여럿 가운데 "가장 ~한" 하나를 말합니다.',
				'정답은 (C) **shortest**입니다. shorter는 than과 함께 둘을 비교할 때 씁니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-01',
			text: 'Taking the subway is ------- than driving during rush hour.',
			options: ['quick', 'quickly', 'quicker', 'quickest'],
			answer: 2,
			ko: '출퇴근 시간에는 지하철을 타는 것이 운전하는 것보다 빠릅니다.',
			why: '빈칸 뒤에 than이 있습니다. than 앞에는 비교급이 오므로 quicker가 정답입니다.',
			notes: [
				'원급 — than과 함께 쓰지 않음',
				'부사 — than과 함께 쓰지 않음',
				'비교급 (정답)',
				'최상급 — the와 함께 씀'
			],
			vocab: [
				['take the subway', '지하철을 타다'],
				['rush hour', '출퇴근 시간'],
				['quick', '빠른']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-02',
			text: 'This model is the ------- of the three laptops.',
			options: ['thinnest', 'thin', 'thinner', 'thinly'],
			answer: 0,
			ko: '이 모델은 세 노트북 가운데 가장 얇습니다.',
			why: '빈칸 앞에 the가 있고 뒤에 of the three(셋 가운데)가 있습니다. 셋 이상 가운데 으뜸을 말하는 최상급 thinnest가 정답입니다.',
			notes: ['최상급 (정답)', '원급', '비교급 — 둘을 비교할 때 씀', '부사'],
			vocab: [
				['model', '모델, 기종'],
				['thin', '얇은'],
				['of the three', '셋 가운데']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-03',
			text: 'Our new branch is as ------- as the main store.',
			options: ['busier', 'busy', 'busiest', 'busily'],
			answer: 1,
			ko: '우리 새 지점은 본점만큼 바쁩니다.',
			why: '빈칸이 as와 as 사이에 있습니다. as ~ as 사이에는 원급이 오고, be동사 is 뒤이므로 형용사 busy가 정답입니다.',
			notes: [
				'비교급 — as ~ as 사이에 쓰지 않음',
				'원급 형용사 (정답)',
				'최상급 — as ~ as 사이에 쓰지 않음',
				'부사 — be동사 뒤에는 형용사를 씀'
			],
			vocab: [
				['branch', '지점'],
				['main store', '본점'],
				['as busy as', '~만큼 바쁜']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-04',
			text: 'The second half of the course was ------- than the first.',
			options: ['difficult', 'difficulty', 'most difficult', 'more difficult'],
			answer: 3,
			ko: '그 강좌의 후반부는 전반부보다 어려웠습니다.',
			why: '빈칸 뒤에 than이 있으므로 비교급이 옵니다. difficult처럼 긴 형용사는 앞에 more를 붙이므로 more difficult가 정답입니다.',
			notes: [
				'원급 — than과 함께 쓰지 않음',
				'명사',
				'최상급 — than과 함께 쓰지 않음',
				'비교급 (정답)'
			],
			vocab: [
				['half', '절반'],
				['course', '강좌'],
				['difficult', '어려운']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-05',
			text: 'Flights in August are ------- more expensive than flights in March.',
			options: ['very', 'much', 'many', 'most'],
			answer: 1,
			ko: '8월 항공편은 3월 항공편보다 훨씬 더 비쌉니다.',
			why: '빈칸 뒤에 비교급 more expensive가 있습니다. 비교급 앞에서 "훨씬"이라는 뜻을 더하는 부사는 much입니다.',
			notes: [
				'very — 비교급 앞에 쓰지 않음',
				'much (정답)',
				'many — 비교급을 강조하지 못함',
				'most — 최상급을 만드는 말'
			],
			vocab: [
				['flight', '항공편'],
				['much more expensive', '훨씬 더 비싼']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-06',
			text: 'Ms. Petrov explained the schedule ------- than the previous guide did.',
			options: ['more clearly', 'clearly', 'clear', 'most clearly'],
			answer: 0,
			ko: '페트로프 씨는 이전 가이드보다 일정을 더 명확하게 설명했습니다.',
			why: '빈칸 뒤에 than이 있으므로 비교급이 필요합니다. 동사 explained를 꾸미는 부사의 비교급 more clearly가 정답입니다.',
			notes: [
				'부사의 비교급 (정답)',
				'부사의 원급 — than과 함께 쓰지 않음',
				'형용사의 원급',
				'부사의 최상급 — than과 함께 쓰지 않음'
			],
			vocab: [
				['explain', '설명하다'],
				['schedule', '일정'],
				['previous', '이전의']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-07',
			text: 'It was the ------- workshop I have ever attended.',
			options: ['useful', 'more useful', 'most useful', 'usefully'],
			answer: 2,
			ko: '그것은 제가 참석해 본 워크숍 중에서 가장 유익했습니다.',
			why: '빈칸 앞에 the가 있고 뒤에 ever가 있습니다. "지금까지 ~한 것 중 가장"이라는 뜻의 최상급 most useful이 정답입니다.',
			notes: [
				'원급 — ever와 함께 "가장"의 뜻을 나타내지 못함',
				'비교급 — than과 함께 씀',
				'최상급 (정답)',
				'부사 — 명사를 꾸밀 수 없음'
			],
			vocab: [
				['useful', '유익한, 유용한'],
				['attend', '참석하다'],
				['ever', '지금까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-08',
			text: 'The new intern works as ------- as the senior employees.',
			options: ['efficient', 'more efficient', 'most efficiently', 'efficiently'],
			answer: 3,
			ko: '새 인턴은 선임 직원들만큼 효율적으로 일합니다.',
			why: '빈칸이 as와 as 사이에 있으므로 원급이 옵니다. 동사 works를 꾸미는 자리이므로 부사 efficiently가 정답입니다.',
			notes: [
				'형용사 — 동사 works를 꾸밀 수 없음',
				'비교급 — as ~ as 사이에 쓰지 않음',
				'최상급 — as ~ as 사이에 쓰지 않음',
				'원급 부사 (정답)'
			],
			vocab: [
				['intern', '인턴'],
				['efficiently', '효율적으로'],
				['senior employee', '선임 직원']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-09',
			text: 'The new payment system is so ------- that anyone can use it.',
			options: ['simple', 'simpler', 'simplest', 'simply'],
			answer: 0,
			ko: '새 결제 시스템은 아주 간단해서 누구나 사용할 수 있습니다.',
			why: '빈칸 주변에 than도 the도 없습니다. so 뒤에는 원급이 오고, be동사 is 뒤이므로 형용사 simple이 정답입니다.',
			notes: [
				'원급 형용사 (정답)',
				'비교급 — so 뒤에 쓰지 않음',
				'최상급 — so 뒤에 쓰지 않음',
				'부사 — be동사 뒤에는 형용사를 씀'
			],
			vocab: [
				['payment system', '결제 시스템'],
				['so ~ that', '아주 ~해서 …하다'],
				['simple', '간단한']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-10',
			text: 'Traffic on the highway was ------- than usual this morning.',
			options: ['bad', 'badly', 'worse', 'worst'],
			answer: 2,
			ko: '오늘 아침 고속도로 교통 상황은 평소보다 나빴습니다.',
			why: '빈칸 뒤에 than이 있으므로 비교급이 옵니다. bad의 비교급은 worse입니다.',
			notes: [
				'원급 — than과 함께 쓰지 않음',
				'부사 — than과 함께 쓰지 않음',
				'비교급 (정답)',
				'최상급 — the와 함께 씀'
			],
			vocab: [
				['traffic', '교통(량)'],
				['highway', '고속도로'],
				['than usual', '평소보다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-11',
			text: 'This plan is the ------- practical of the four options.',
			options: ['more', 'most', 'much', 'many'],
			answer: 1,
			ko: '이 계획은 네 가지 선택지 가운데 가장 실용적입니다.',
			why: '빈칸 앞에 the가 있고 뒤에 of the four options(네 가지 가운데)가 있습니다. practical 앞에서 최상급을 만드는 most가 정답입니다.',
			notes: [
				'more — 비교급을 만드는 말, 둘을 비교할 때 씀',
				'most (정답)',
				'much — 비교급을 강조하는 말',
				'many — 수가 많다는 뜻'
			],
			vocab: [
				['practical', '실용적인'],
				['option', '선택지'],
				['plan', '계획']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-12',
			text: 'The bus ride was not as ------- as I had thought.',
			options: ['long', 'longer', 'longest', 'length'],
			answer: 0,
			ko: '버스를 타고 간 시간은 제가 생각했던 것만큼 길지 않았습니다.',
			why: '빈칸이 as와 as 사이에 있습니다. not as ~ as는 "~만큼 …하지 않은"이라는 뜻이고, 사이에는 원급 long이 옵니다.',
			notes: [
				'원급 (정답)',
				'비교급 — as ~ as 사이에 쓰지 않음',
				'최상급 — as ~ as 사이에 쓰지 않음',
				'명사'
			],
			vocab: [
				['bus ride', '버스 이동'],
				['not as ~ as', '~만큼 …하지 않은']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-13',
			text: "The staff responded very ------- to the customer's complaint.",
			options: ['prompt', 'more promptly', 'most promptly', 'promptly'],
			answer: 3,
			ko: '직원들은 고객의 불만에 매우 신속하게 대응했습니다.',
			why: '빈칸 주변에 than도 the도 없습니다. very 뒤에는 원급이 오고, 동사 responded를 꾸미는 자리이므로 부사 promptly가 정답입니다.',
			notes: [
				'형용사 — 동사를 꾸밀 수 없음',
				'비교급 — very 뒤에 쓰지 않음',
				'최상급 — very 뒤에 쓰지 않음',
				'원급 부사 (정답)'
			],
			vocab: [
				['respond to', '~에 대응하다'],
				['promptly', '신속하게'],
				['complaint', '불만']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-14',
			text: 'This washing machine uses ------- water than older models.',
			options: ['little', 'few', 'less', 'least'],
			answer: 2,
			ko: '이 세탁기는 구형 모델보다 물을 적게 씁니다.',
			why: '빈칸 뒤에 than이 있으므로 비교급이 옵니다. little의 비교급은 less입니다.',
			notes: [
				'원급 — than과 함께 쓰지 않음',
				'few — 셀 수 있는 명사 앞에 쓰는 원급',
				'비교급 (정답)',
				'최상급 — the와 함께 씀'
			],
			vocab: [
				['washing machine', '세탁기'],
				['less', '더 적은'],
				['older model', '구형 모델']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd16-15',
			text: 'Of all the candidates, Mr. Gwak did the ------- on the written test.',
			options: ['good', 'best', 'better', 'well'],
			answer: 1,
			ko: '모든 지원자 가운데 곽 씨가 필기시험을 가장 잘 봤습니다.',
			why: '문장 앞에 Of all the candidates(모든 지원자 가운데)가 있고 빈칸 앞에 the가 있습니다. well의 최상급 best가 정답입니다.',
			notes: ['원급 형용사', '최상급 (정답)', '비교급 — 둘을 비교할 때 씀', '원급 부사'],
			vocab: [
				['candidate', '지원자'],
				['written test', '필기시험'],
				['do the best', '가장 잘하다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 정리: 3단계로 푼다',
			blocks: [
				{
					type: 'p',
					text: 'Part 2는 질문 하나와 응답 세 개를 듣고 알맞은 응답을 고릅니다. 문제지에 아무것도 적혀 있지 않으므로 **풀이 순서**를 정해 두어야 합니다.'
				},
				{
					type: 'box',
					title: '3단계 풀이',
					items: [
						'① **첫 단어 듣기** — 의문사인지, Do / Is인지, 평서문인지 잡습니다.',
						'② **오답 지우기** — 아래 오답 유형에 해당하는 보기를 지웁니다.',
						'③ **남은 것 고르기** — 다 알아듣지 못해도 남은 보기가 정답입니다.'
					]
				},
				{
					type: 'table',
					head: ['자주 나오는 오답', '예 (When does the gym open?)'],
					rows: [
						['다른 의문사에 대한 답', 'On the third floor. (장소로 답함)'],
						['의문사 질문에 Yes / No', 'Yes, I do.'],
						['비슷한 발음·같은 단어', 'An open window. (open 반복)'],
						['연상 어휘', 'I exercise every day. (gym에서 떠오르는 운동)']
					]
				},
				{
					type: 'box',
					title: '어떤 질문에도 정답이 되는 응답',
					items: [
						"모른다 — I'm not sure. / I have no idea.",
						"확인하겠다 — Let me check. / I'll find out.",
						"아직 정해지지 않았다 — It hasn't been decided yet.",
						'다른 사람에게 물어보라 — You should ask the manager.'
					]
				},
				{
					type: 'tip',
					text: '질문의 단어가 그대로 들리는 보기는 오답일 가능성이 높습니다. 정답은 질문의 말을 다른 말로 바꾸는 경우가 많습니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'How much is the monthly parking pass?',
			options: ['In the parking garage.', "I'm not sure. Ask the front desk.", 'Yes, every month.'],
			answer: 1,
			ko: '월 주차권은 얼마인가요?',
			optionsKo: ['주차장에서요.', '잘 모르겠어요. 안내 데스크에 물어보세요.', '네, 매달이요.'],
			steps: [
				'① 첫 단어 **How much**를 잡습니다. 가격을 묻는 질문입니다.',
				'② (A)는 parking이 다시 들리지만 장소로 답했습니다. Where에 대한 답이므로 지웁니다.',
				'② (C)는 Yes로 시작했습니다. 의문사로 시작하는 질문에는 Yes / No로 답하지 않습니다. 지웁니다.',
				'③ 남은 (B)는 가격을 말하지 않고 "모르니 안내 데스크에 물어보라"고 했습니다. 어떤 질문에도 정답이 되는 응답입니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-16',
			script: "Who's handling the catering for the awards dinner?",
			options: [
				'At a nice restaurant.',
				"Yes, I'd love some dessert.",
				'Mr. Delgado in general affairs.'
			],
			answer: 2,
			ko: '시상식 만찬의 음식 준비는 누가 맡고 있나요?',
			optionsKo: ['멋진 식당에서요.', '네, 디저트 좀 먹고 싶어요.', '총무부의 델가도 씨요.'],
			why: 'Who로 물었으므로 사람으로 답한 (C)가 정답입니다.',
			notes: [
				'장소 — Where에 대한 답',
				'Yes로 시작, dinner에서 떠오르는 디저트 이야기',
				'사람 이름 + 부서 (정답)'
			],
			vocab: [
				['handle', '맡다, 처리하다'],
				['catering', '음식 준비, 출장 요리'],
				['general affairs', '총무(부)']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-17',
			script: 'When is the next safety inspection scheduled?',
			options: [
				"They haven't set a date yet.",
				'In the inspection report.',
				'For about three hours.'
			],
			answer: 0,
			ko: '다음 안전 점검은 언제로 예정되어 있나요?',
			optionsKo: ['아직 날짜를 정하지 않았어요.', '점검 보고서에요.', '3시간 정도요.'],
			why: 'When으로 물었지만 날짜 대신 "아직 날짜를 정하지 않았다"고 답한 (A)가 정답입니다. 어떤 질문에도 정답이 될 수 있는 응답입니다.',
			notes: [
				'아직 정해지지 않았다는 응답 (정답)',
				'inspection 반복 — 질문과 무관',
				'기간 — How long에 대한 답'
			],
			vocab: [
				['safety inspection', '안전 점검'],
				['be scheduled', '예정되어 있다'],
				['set a date', '날짜를 정하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-18',
			script: 'Where should we store the winter uniforms?',
			options: [
				"Yes, they're very comfortable.",
				'In the closet next to the staff room.',
				'It was a cold winter.'
			],
			answer: 1,
			ko: '겨울 유니폼을 어디에 보관할까요?',
			optionsKo: ['네, 아주 편안해요.', '직원실 옆 벽장에요.', '추운 겨울이었어요.'],
			why: 'Where로 물었으므로 장소로 답한 (B)가 정답입니다.',
			notes: ['Yes로 시작', '장소 (정답)', 'winter 반복 — 질문과 무관'],
			vocab: [
				['store', '보관하다'],
				['uniform', '유니폼'],
				['closet', '벽장, 수납장']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-19',
			script: 'Is Ms. Ortiz joining us for the client dinner?',
			options: [
				'A table by the window.',
				'She has another meeting at seven.',
				'No, I joined last year.'
			],
			answer: 1,
			ko: '오티즈 씨도 고객과의 저녁 식사에 함께 가나요?',
			optionsKo: [
				'창가 테이블이요.',
				'그녀는 7시에 다른 회의가 있어요.',
				'아니요, 저는 작년에 가입했어요.'
			],
			why: 'Yes / No 없이 "다른 회의가 있다"고 답해 함께 가지 못한다는 뜻을 전한 (B)가 정답입니다.',
			notes: [
				'dinner에서 떠오르는 좌석 이야기',
				'No 없이 못 간다는 뜻을 전함 (정답)',
				'No로 시작했지만 내용이 무관, join(가입하다)'
			],
			vocab: [
				['join', '함께하다, 가입하다'],
				['client dinner', '고객과의 저녁 식사'],
				['another', '또 다른']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-20',
			script: 'How long have you worked in the accounting department?',
			options: ['For almost six years.', "It's a long walk from here.", "Yes, he's an accountant."],
			answer: 0,
			ko: '회계부에서 얼마나 오래 근무하셨어요?',
			optionsKo: ['거의 6년이요.', '여기서 걸어가기에는 멀어요.', '네, 그는 회계사예요.'],
			why: 'How long으로 물었으므로 기간으로 답한 (A)가 정답입니다.',
			notes: [
				'기간 (정답)',
				'long 반복, work와 발음이 비슷한 walk',
				'Yes로 시작, accounting과 비슷한 accountant'
			],
			vocab: [
				['accounting department', '회계부'],
				['almost', '거의'],
				['accountant', '회계사']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-21',
			script: 'Should I book a morning flight or an evening one?',
			options: [
				'Yes, I booked it.',
				'At the check-in counter.',
				'A morning flight would be better.'
			],
			answer: 2,
			ko: '오전 항공편을 예약할까요, 저녁 항공편을 예약할까요?',
			optionsKo: ['네, 제가 예약했어요.', '탑승 수속 창구에서요.', '오전 항공편이 더 좋겠어요.'],
			why: '오전과 저녁 가운데 오전 항공편을 고른 (C)가 정답입니다. 선택 의문문에는 Yes / No로 답하지 않습니다.',
			notes: [
				'Yes로 시작 — 선택 의문문에 맞지 않음',
				'flight에서 떠오르는 공항 이야기',
				'둘 중 하나를 고름 (정답)'
			],
			vocab: [
				['book a flight', '항공편을 예약하다'],
				['check-in counter', '탑승 수속 창구'],
				['would be better', '더 좋겠다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-22',
			script: "This is the latest version of the brochure, isn't it?",
			options: [
				'By Friday at the latest.',
				'Yes, it was updated last week.',
				'I was late this morning.'
			],
			answer: 1,
			ko: '이것이 안내 책자의 최신판이죠?',
			optionsKo: [
				'늦어도 금요일까지요.',
				'네, 지난주에 수정됐어요.',
				'저는 오늘 아침에 지각했어요.'
			],
			why: '최신판이 맞으므로 Yes로 답하고 수정된 때를 덧붙인 (B)가 정답입니다.',
			notes: [
				'latest 반복 — 기한을 말함',
				'Yes + 덧붙임 (정답)',
				'latest와 비슷한 late — 내용이 무관'
			],
			vocab: [
				['latest version', '최신판'],
				['brochure', '안내 책자'],
				['at the latest', '늦어도']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-23',
			script: 'Why are there so many boxes in the hallway?',
			options: [
				'The office manager might know.',
				'Two boxes of paper, please.',
				"Yes, it's a long hallway."
			],
			answer: 0,
			ko: '복도에 상자가 왜 이렇게 많이 있나요?',
			optionsKo: ['사무장님이 아실 거예요.', '종이 두 상자 부탁해요.', '네, 긴 복도예요.'],
			why: 'Why로 물었지만 이유 대신 "사무장이 알 것"이라고 답한 (A)가 정답입니다. 자신은 모르니 다른 사람에게 물어보라는 뜻입니다.',
			notes: [
				'다른 사람에게 물어보라는 응답 (정답)',
				'box 반복 — 질문과 무관',
				'Yes로 시작, hallway 반복'
			],
			vocab: [
				['hallway', '복도'],
				['office manager', '사무장'],
				['might know', '알지도 모른다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-24',
			script: 'Can you give me a hand with these folders?',
			options: [
				'I handed it in already.',
				'In the blue folder.',
				'Of course. Just give me a minute.'
			],
			answer: 2,
			ko: '이 서류철들 좀 도와주실 수 있나요?',
			optionsKo: ['이미 제출했어요.', '파란색 서류철 안에요.', '물론이죠. 잠깐만 기다려 주세요.'],
			why: 'Can you ~?로 도움을 부탁했습니다. Of course로 수락한 (C)가 정답입니다.',
			notes: ['hand와 비슷한 handed — 내용이 무관', 'folder 반복 — 장소를 말함', '수락 (정답)'],
			vocab: [
				['give A a hand', 'A를 도와주다'],
				['folder', '서류철'],
				['hand in', '제출하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd16-25',
			script: "I think we're going to miss the two o'clock train.",
			options: [
				'Yes, I miss her, too.',
				"There's another one in twenty minutes.",
				'At platform six.'
			],
			answer: 1,
			ko: '2시 기차를 놓칠 것 같아요.',
			optionsKo: ['네, 저도 그녀가 그리워요.', '20분 뒤에 한 대 더 있어요.', '6번 승강장에서요.'],
			why: '기차를 놓칠 것 같다는 평서문입니다. "20분 뒤에 또 있다"고 해결책을 알려 준 (B)가 정답입니다.',
			notes: [
				'miss(놓치다)와 철자가 같은 miss(그리워하다)',
				'해결책을 알려 줌 (정답)',
				'장소 — Where에 대한 답'
			],
			vocab: [
				['miss', '놓치다'],
				['another one', '또 다른 것'],
				['platform', '승강장']
			]
		}
	]
} satisfies DayContent;
