import type { DayContent } from '../schema';

export default {
	goals: [
		'부사절 접속사를 이유·양보·시간·조건·목적으로 나눠 익힌다',
		'두 절의 관계를 보고 알맞은 접속사를 고른다',
		'질문과 발음이 비슷한 단어가 들리는 오답을 지운다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '부사절 접속사: 접속사 + 주어 + 동사',
			blocks: [
				{
					type: 'p',
					text: '부사절 접속사는 뒤에 **주어 + 동사**를 데리고 와서 다른 문장에 이어 붙이는 말입니다. 문장 가운데에도, 맨 앞에도 올 수 있습니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'We stayed home ==because== it was very cold.',
							ko: '날씨가 매우 추웠기 때문에 우리는 집에 있었습니다.',
							note: '문장 가운데 — because + 주어(it) + 동사(was)'
						},
						{
							en: '==Because== it was very cold, we stayed home.',
							ko: '날씨가 매우 추웠기 때문에 우리는 집에 있었습니다.',
							note: '문장 맨 앞 — 접속사가 이끄는 절 끝에 쉼표'
						}
					]
				},
				{
					type: 'table',
					head: ['뜻', '접속사', '우리말'],
					rows: [
						['이유', 'because, since, as', '~ 때문에'],
						['양보', 'although, though, even though', '비록 ~이지만'],
						['시간', 'when, while, before, after', '~할 때, ~하는 동안, ~하기 전에, ~한 후에'],
						['시간', 'until, as soon as, once', '~할 때까지, ~하자마자, 일단 ~하면'],
						['조건', 'if, unless, as long as', '만약 ~라면, ~하지 않으면, ~하는 한'],
						['목적', 'so that', '~하도록']
					]
				},
				{
					type: 'tip',
					text: '보기가 모두 접속사이면 모양으로는 고를 수 없습니다. 접속사의 **뜻**을 알아야 풉니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '두 절의 관계를 보고 고른다',
			blocks: [
				{
					type: 'p',
					text: '빈칸 앞의 절과 뒤의 절을 따로 해석한 다음, 둘이 어떤 **관계**인지 봅니다.'
				},
				{
					type: 'table',
					head: ['두 절의 관계', '접속사', '예'],
					rows: [
						[
							'원인과 결과',
							'because, since, as',
							'We took the subway ==because== the road was closed.'
						],
						[
							'서로 반대',
							'although, even though',
							'==Although== the road was closed, we arrived early.'
						],
						['조건', 'if, unless', '==If== the road is closed, we will take the subway.'],
						['때', 'when, before, after, until', 'We waited ==until== the road opened again.']
					]
				},
				{
					type: 'box',
					title: '헷갈리기 쉬운 접속사',
					items: [
						'**unless**는 if ~ not과 같습니다. "~하지 않으면"입니다. — ==unless== it rains (비가 오지 않으면)',
						'**until**은 "~할 때까지 계속", **before**는 "~하기 전에"입니다.',
						'**since**는 "~ 때문에"와 "~한 이후로" 두 가지 뜻이 있습니다.',
						'**so that** 뒤에는 can, will이 자주 옵니다. — ==so that== everyone can hear (모두가 들을 수 있도록)',
						'**because** 뒤에는 원인이, **so** 뒤에는 결과가 옵니다. — It rained, ==so== we stayed home.'
					]
				},
				{
					type: 'tip',
					text: '시간·조건의 접속사 뒤에서는 미래의 일도 현재 시제로 씁니다. — when she ==arrives== / if it ==rains=='
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Mr. Chun took a taxi ------- he missed the last bus.',
			options: ['because', 'although', 'unless', 'until'],
			answer: 0,
			ko: '천 씨는 막차를 놓쳤기 때문에 택시를 탔습니다.',
			steps: [
				'보기가 모두 접속사입니다. 뜻으로 골라야 하므로 두 절을 따로 해석합니다.',
				'빈칸 앞은 "천 씨는 택시를 탔다", 뒤는 "막차를 놓쳤다"입니다.',
				'막차를 놓친 것이 택시를 탄 **이유**입니다. 원인과 결과의 관계입니다.',
				'이유를 나타내는 접속사는 **because**입니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: '------- it snowed all morning, the store opened at the usual time.',
			options: ['Because', 'If', 'Although', 'Until'],
			answer: 2,
			ko: '오전 내내 눈이 왔지만 가게는 평소와 같은 시간에 문을 열었습니다.',
			steps: [
				'쉼표 앞은 "오전 내내 눈이 왔다", 뒤는 "가게가 평소 시간에 문을 열었다"입니다.',
				'눈이 많이 오면 늦게 열 것 같은데 평소대로 열었습니다. 두 내용이 **서로 반대**입니다.',
				'Because를 넣으면 "눈이 와서 평소대로 열었다"가 되어 말이 되지 않습니다.',
				'반대되는 내용을 잇는 접속사는 **Although**입니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-01',
			text: 'Ms. Ko could not join the meeting ------- she was on a business trip.',
			options: ['although', 'because', 'unless', 'until'],
			answer: 1,
			ko: '고 씨는 출장 중이었기 때문에 회의에 참석하지 못했습니다.',
			why: '출장 중이었던 것이 회의에 참석하지 못한 이유입니다. 원인과 결과의 관계이므로 because가 정답입니다.',
			notes: [
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~ 때문에 (정답)',
				'~하지 않으면 — 조건이 아님',
				'~할 때까지 — 뜻이 통하지 않음'
			],
			vocab: [
				['because', '~ 때문에'],
				['join', '참석하다'],
				['on a business trip', '출장 중인']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-02',
			text: '------- Mr. Bennett has little experience, he does his job very well.',
			options: ['Although', 'Because', 'If', 'Once'],
			answer: 0,
			ko: '베넷 씨는 경험이 거의 없지만 일을 매우 잘합니다.',
			why: '"경험이 거의 없다"와 "일을 매우 잘한다"는 서로 반대되는 내용입니다. 양보의 접속사 Although가 정답입니다.',
			notes: [
				'비록 ~이지만 (정답)',
				'~ 때문에 — 경험이 없는 것은 일을 잘하는 이유가 아님',
				'만약 ~라면 — 조건이 아님',
				'일단 ~하면 — 뜻이 통하지 않음'
			],
			vocab: [
				['although', '비록 ~이지만'],
				['little', '거의 없는'],
				['experience', '경험']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-03',
			text: 'Please wait in the lobby ------- your name is called.',
			options: ['because', 'since', 'although', 'until'],
			answer: 3,
			ko: '이름이 불릴 때까지 로비에서 기다려 주세요.',
			why: '기다리는 일을 이름이 불리는 때까지 계속하라는 뜻입니다. "~할 때까지"라는 뜻의 until이 정답입니다.',
			notes: [
				'~ 때문에 — 이름이 불리는 것은 기다리는 이유가 아님',
				'~ 때문에, ~한 이후로 — 뜻이 통하지 않음',
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~할 때까지 (정답)'
			],
			vocab: [
				['until', '~할 때까지'],
				['lobby', '로비'],
				['call', '부르다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-04',
			text: 'The picnic will be moved indoors ------- it rains on Saturday.',
			options: ['so that', 'until', 'if', 'although'],
			answer: 2,
			ko: '토요일에 비가 오면 야유회는 실내로 옮겨집니다.',
			why: '"토요일에 비가 온다"는 야유회를 실내로 옮기는 조건입니다. "만약 ~라면"이라는 뜻의 if가 정답입니다.',
			notes: [
				'~하도록 — 목적이 아님',
				'~할 때까지 — 뜻이 통하지 않음',
				'만약 ~라면 (정답)',
				'비록 ~이지만 — 두 내용이 반대가 아님'
			],
			vocab: [
				['if', '만약 ~라면'],
				['picnic', '야유회'],
				['indoors', '실내로']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-05',
			text: 'The first-floor printer was broken, ------- Ms. Pi used the one upstairs.',
			options: ['so', 'because', 'if', 'unless'],
			answer: 0,
			ko: '1층 프린터가 고장 나서 피 씨는 위층에 있는 것을 사용했습니다.',
			why: '쉼표 앞이 원인이고 빈칸 뒤가 결과입니다. 뒤에 결과가 올 때는 so를 씁니다. because는 뒤에 원인이 와야 합니다.',
			notes: [
				'그래서 — 뒤에 결과가 옴 (정답)',
				'~ 때문에 — 뒤에 원인이 와야 함',
				'만약 ~라면 — 조건이 아님',
				'~하지 않으면 — 조건이 아님'
			],
			vocab: [
				['so', '그래서'],
				['broken', '고장 난'],
				['upstairs', '위층에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-06',
			text: 'Please turn off all the lights ------- you leave the office.',
			options: ['although', 'before', 'unless', 'so that'],
			answer: 1,
			ko: '사무실을 나가기 전에 모든 전등을 꺼 주세요.',
			why: '전등을 끄는 일이 먼저이고 사무실을 나가는 일이 나중입니다. "~하기 전에"라는 뜻의 before가 정답입니다.',
			notes: [
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~하기 전에 (정답)',
				'~하지 않으면 — 나가지 않으면 끄라는 말이 되어 어색함',
				'~하도록 — 목적이 아님'
			],
			vocab: [
				['before', '~하기 전에'],
				['turn off', '끄다'],
				['leave', '나가다, 떠나다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-07',
			text: 'You cannot park here ------- you have a parking permit.',
			options: ['because', 'so that', 'if', 'unless'],
			answer: 3,
			ko: '주차 허가증이 없으면 이곳에 주차할 수 없습니다.',
			why: '허가증이 "없으면" 주차할 수 없다는 뜻이 되어야 합니다. "~하지 않으면"이라는 뜻의 unless가 정답입니다.',
			notes: [
				'~ 때문에 — 허가증이 있어서 주차할 수 없다는 말이 되어 어색함',
				'~하도록 — 목적이 아님',
				'만약 ~라면 — 허가증이 있으면 주차할 수 없다는 말이 되어 어색함',
				'~하지 않으면 (정답)'
			],
			vocab: [
				['unless', '~하지 않으면'],
				['park', '주차하다'],
				['parking permit', '주차 허가증']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-08',
			text: 'Ms. Kwak took notes ------- the speaker was explaining the new policy.',
			options: ['unless', 'so that', 'while', 'until'],
			answer: 2,
			ko: '곽 씨는 연사가 새 정책을 설명하는 동안 메모를 했습니다.',
			why: '메모하는 일과 설명하는 일이 같은 시간에 일어났습니다. "~하는 동안"이라는 뜻의 while이 정답입니다. while 뒤에는 was explaining 같은 진행형이 자주 옵니다.',
			notes: [
				'~하지 않으면 — 조건이 아님',
				'~하도록 — 목적이 아님',
				'~하는 동안 (정답)',
				'~할 때까지 — 뜻이 통하지 않음'
			],
			vocab: [
				['while', '~하는 동안'],
				['take notes', '메모하다'],
				['explain', '설명하다'],
				['policy', '정책']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-09',
			text: 'Mr. Costa arrived at the airport on time ------- the traffic was very heavy.',
			options: ['because', 'so that', 'even though', 'as soon as'],
			answer: 2,
			ko: '교통이 매우 혼잡했는데도 코스타 씨는 공항에 제시간에 도착했습니다.',
			why: '"제시간에 도착했다"와 "교통이 매우 혼잡했다"는 서로 반대되는 내용입니다. 양보의 접속사 even though가 정답입니다.',
			notes: [
				'~ 때문에 — 교통 혼잡은 제시간에 도착한 이유가 아님',
				'~하도록 — 목적이 아님',
				'비록 ~이지만 (정답)',
				'~하자마자 — 뜻이 통하지 않음'
			],
			vocab: [
				['even though', '비록 ~이지만'],
				['on time', '제시간에'],
				['heavy traffic', '혼잡한 교통']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-10',
			text: '------- the main entrance is locked, please use the side door.',
			options: ['Since', 'Although', 'Unless', 'So that'],
			answer: 0,
			ko: '정문이 잠겨 있으므로 옆문을 이용해 주세요.',
			why: '정문이 잠긴 것이 옆문을 이용해야 하는 이유입니다. since는 "~ 때문에"라는 뜻으로 because처럼 씁니다.',
			notes: [
				'~ 때문에 (정답)',
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~하지 않으면 — 정문이 열려 있으면 옆문을 쓰라는 말이 되어 어색함',
				'~하도록 — 목적이 아님'
			],
			vocab: [
				['since', '~ 때문에, ~한 이후로'],
				['main entrance', '정문'],
				['locked', '잠긴'],
				['side door', '옆문']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-11',
			text: '------- Mr. Ji or Ms. Fischer will meet the visitors at the station.',
			options: ['Both', 'Either', 'Although', 'If'],
			answer: 1,
			ko: '지 씨나 피셔 씨 중 한 명이 역에서 방문객을 맞이할 것입니다.',
			why: '뒤에 or가 있습니다. or와 짝을 이루는 말은 Either입니다. 동사가 will meet 하나뿐이므로 절 두 개를 잇는 Although나 If는 올 수 없습니다.',
			notes: [
				'and와 짝을 이룸',
				'or와 짝을 이룸 (정답)',
				'비록 ~이지만 — 이어 줄 절이 하나 더 있어야 함',
				'만약 ~라면 — 이어 줄 절이 하나 더 있어야 함'
			],
			vocab: [
				['either A or B', 'A 또는 B'],
				['meet', '맞이하다, 만나다'],
				['visitor', '방문객']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-12',
			text: '------- the meeting ended, everyone went out for lunch together.',
			options: ['Unless', 'Until', 'So that', 'After'],
			answer: 3,
			ko: '회의가 끝난 후 모두 함께 점심을 먹으러 나갔습니다.',
			why: '회의가 끝난 일이 먼저이고 점심을 먹으러 나간 일이 나중입니다. "~한 후에"라는 뜻의 After가 정답입니다.',
			notes: [
				'~하지 않으면 — 조건이 아님',
				'~할 때까지 — 뜻이 통하지 않음',
				'~하도록 — 목적이 아님',
				'~한 후에 (정답)'
			],
			vocab: [
				['after', '~한 후에'],
				['end', '끝나다'],
				['go out for lunch', '점심을 먹으러 나가다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-13',
			text: 'Please arrive ten minutes early ------- we can start the workshop at nine.',
			options: ['so that', 'although', 'unless', 'until'],
			answer: 0,
			ko: '워크숍을 9시에 시작할 수 있도록 10분 일찍 도착해 주세요.',
			why: '일찍 도착해 달라는 목적이 "9시에 시작하는 것"입니다. "~하도록"이라는 뜻의 so that이 정답입니다. so that 뒤에는 can이 자주 옵니다.',
			notes: [
				'~하도록 (정답)',
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~하지 않으면 — 조건이 아님',
				'~할 때까지 — 뜻이 통하지 않음'
			],
			vocab: [
				['so that', '~하도록'],
				['arrive early', '일찍 도착하다'],
				['workshop', '워크숍']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-14',
			text: 'The laptop is quite old, ------- it still works very well.',
			options: ['because', 'so', 'but', 'unless'],
			answer: 2,
			ko: '그 노트북은 꽤 오래됐지만 여전히 매우 잘 작동합니다.',
			why: '"오래됐다"와 "여전히 잘 작동한다"는 서로 반대되는 내용입니다. 쉼표 뒤에서 반대 내용을 잇는 but이 정답입니다.',
			notes: [
				'~ 때문에 — 잘 작동하는 것은 오래된 이유가 아님',
				'그래서 — 원인과 결과가 아님',
				'그러나 (정답)',
				'~하지 않으면 — 조건이 아님'
			],
			vocab: [
				['but', '그러나'],
				['quite', '꽤'],
				['still', '여전히'],
				['work', '작동하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd13-15',
			text: 'The technician will call you ------- the replacement part arrives.',
			options: ['even though', 'as soon as', 'so that', 'because'],
			answer: 1,
			ko: '교체 부품이 도착하자마자 기사가 전화드릴 것입니다.',
			why: '부품이 도착하는 때에 맞춰 바로 전화하겠다는 뜻입니다. "~하자마자"라는 뜻의 as soon as가 정답입니다. 시간 접속사 뒤에서는 미래의 일도 현재 시제 arrives로 씁니다.',
			notes: [
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~하자마자 (정답)',
				'~하도록 — 전화가 부품을 도착하게 하는 것이 아님',
				'~ 때문에 — 원인과 결과가 아님'
			],
			vocab: [
				['as soon as', '~하자마자'],
				['technician', '기사, 기술자'],
				['replacement part', '교체 부품']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '비슷한 발음 함정: 들린 단어가 또 들리면 의심한다',
			blocks: [
				{
					type: 'p',
					text: 'Part 2의 오답에는 질문에 나온 단어와 **발음이 비슷한 단어**나 **철자가 같은 단어**가 자주 나옵니다. 질문을 다 알아듣지 못하고 들린 소리만 따라가면 고르게 되는 함정입니다.'
				},
				{
					type: 'table',
					head: ['단어', '발음이 비슷한 단어'],
					rows: [
						['copy 복사하다', 'coffee 커피'],
						['walk 걷다', 'work 일하다'],
						['train 기차', 'training 교육'],
						['contact 연락하다', 'contract 계약서'],
						['launch 출시하다', 'lunch 점심'],
						['plan 계획', 'plane 비행기'],
						['fair 박람회', 'fare 요금'],
						['read 읽다', 'lead 이끌다'],
						['sale 할인 판매', 'sail 항해하다']
					]
				},
				{
					type: 'box',
					title: '푸는 요령',
					items: [
						'질문에서 들린 단어가 보기에서 **다시 들리면 오히려 의심**합니다.',
						'철자가 같아도 뜻이 다를 수 있습니다. — check(확인하다 / 수표), fair(박람회 / 적당한)',
						'소리가 아니라 **뜻**이 질문과 이어지는지 확인합니다. 정답은 질문의 단어를 다른 말로 바꿔 말하는 경우가 많습니다.'
					]
				},
				{
					type: 'tip',
					text: '단어가 반복됐다고 모두 오답은 아닙니다. 먼저 의심하고, 내용이 질문에 맞는지 끝까지 확인하세요.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'When are you going to launch the new Web site?',
			options: ['I already had lunch.', 'At the end of next month.', 'Yes, it is a new site.'],
			answer: 1,
			ko: '새 웹사이트는 언제 공개할 예정인가요?',
			optionsKo: ['저는 이미 점심을 먹었어요.', '다음 달 말에요.', '네, 새 사이트예요.'],
			steps: [
				'**When**으로 시작합니다. 웹사이트를 "언제" 공개하는지 묻습니다.',
				'(A)의 **lunch**는 질문의 launch와 발음이 비슷합니다. 점심 이야기는 질문과 관계없습니다. 지웁니다.',
				'(C)는 질문의 **new**와 **site**를 그대로 반복했습니다. 의문사 질문에 Yes로 답할 수도 없습니다. 지웁니다.',
				'(B)는 시점으로 답했습니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-16',
			script: 'Which train should I take to the airport?',
			options: ['The express on platform two.', 'The training lasts two days.', 'Yes, I took it.'],
			answer: 0,
			ko: '공항에 가려면 어느 기차를 타야 하나요?',
			optionsKo: ['2번 승강장의 급행이요.', '교육은 이틀 동안 진행돼요.', '네, 제가 탔어요.'],
			why: '어느 기차인지 묻는 질문에 "2번 승강장의 급행"이라고 하나를 짚어 준 (A)가 정답입니다.',
			notes: [
				'어느 기차인지 답함 (정답)',
				'train과 발음이 비슷한 training(교육)',
				'Yes로 시작, take의 과거형 took'
			],
			vocab: [
				['express', '급행'],
				['platform', '승강장'],
				['last', '계속되다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-17',
			script: 'Did you contact the supplier about the late delivery?',
			options: [
				'The contract is on my desk.',
				'Yes, I called them this morning.',
				'They offer free delivery.'
			],
			answer: 1,
			ko: '배송 지연에 대해 공급업체에 연락했나요?',
			optionsKo: [
				'계약서는 제 책상 위에 있어요.',
				'네, 오늘 아침에 전화했어요.',
				'그들은 무료 배송을 해 줘요.'
			],
			why: '연락했는지 묻는 질문에 Yes로 답하고 "오늘 아침에 전화했다"고 덧붙인 (B)가 정답입니다. contact를 called로 바꿔 말했습니다.',
			notes: [
				'contact와 발음이 비슷한 contract(계약서)',
				'Yes + 덧붙임 (정답)',
				'delivery 반복 — 질문과 무관'
			],
			vocab: [
				['contact', '연락하다'],
				['supplier', '공급업체'],
				['contract', '계약서']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-18',
			script: 'How long does it take to walk to the station?',
			options: ['He works until six.', 'By taxi.', 'About fifteen minutes.'],
			answer: 2,
			ko: '역까지 걸어서 얼마나 걸리나요?',
			optionsKo: ['그는 6시까지 일해요.', '택시로요.', '15분 정도요.'],
			why: 'How long은 걸리는 시간을 묻습니다. "15분 정도"라고 답한 (C)가 정답입니다.',
			notes: ['walk와 발음이 비슷한 work', '교통수단 — How(방법)에 대한 답', '걸리는 시간 (정답)'],
			vocab: [
				['How long', '얼마나 오래'],
				['walk', '걷다'],
				['station', '역']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-19',
			script: 'Have you been to the trade fair downtown?',
			options: ['The bus fare went up.', 'No, but I plan to go tomorrow.', 'It is a fair price.'],
			answer: 1,
			ko: '시내에서 열리는 무역 박람회에 가 보셨나요?',
			optionsKo: [
				'버스 요금이 올랐어요.',
				'아니요, 하지만 내일 갈 계획이에요.',
				'적당한 가격이에요.'
			],
			why: '가 봤는지 묻는 질문에 No로 답하고 "내일 갈 계획"이라고 덧붙인 (B)가 정답입니다.',
			notes: [
				'fair(박람회)와 발음이 같은 fare(요금)',
				'No + 덧붙임 (정답)',
				'철자가 같고 뜻이 다른 fair(적당한)'
			],
			vocab: [
				['trade fair', '무역 박람회'],
				['fare', '요금'],
				['fair price', '적당한 가격']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-20',
			script: 'Who can lead the factory tour on Thursday?',
			options: ['Ms. Baek from the main office.', "I'll read it tonight.", 'At half past nine.'],
			answer: 0,
			ko: '목요일 공장 견학은 누가 인솔할 수 있나요?',
			optionsKo: ['본사의 백 씨요.', '오늘 밤에 읽을게요.', '9시 30분에요.'],
			why: 'Who는 사람을 묻습니다. 사람 이름으로 답한 (A)가 정답입니다.',
			notes: ['사람으로 답함 (정답)', 'lead와 발음이 비슷한 read', '시각 — When에 대한 답'],
			vocab: [
				['lead', '인솔하다, 이끌다'],
				['factory tour', '공장 견학'],
				['main office', '본사']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-21',
			script: 'The summer sale starts this weekend.',
			options: [
				'We sailed around the island.',
				'He works in sales.',
				'Great, I need some new shoes.'
			],
			answer: 2,
			ko: '여름 할인 판매가 이번 주말에 시작돼요.',
			optionsKo: [
				'우리는 배를 타고 섬을 돌았어요.',
				'그는 영업 일을 해요.',
				'잘됐네요, 새 신발이 필요하거든요.'
			],
			why: '할인 판매 소식에 "잘됐다, 신발이 필요하다"고 반응한 (C)가 정답입니다.',
			notes: [
				'sale과 발음이 같은 sail(항해하다)',
				'sale과 비슷한 sales(영업) — 누구 이야기인지 알 수 없음',
				'반응 + 덧붙임 (정답)'
			],
			vocab: [
				['sale', '할인 판매'],
				['sail', '항해하다'],
				['work in sales', '영업 일을 하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-22',
			script: 'What are your plans for the holiday?',
			options: ["I'm going to visit my parents.", 'It was a small plane.', 'Yes, I planned it.'],
			answer: 0,
			ko: '휴일에 무슨 계획이 있으세요?',
			optionsKo: ['부모님을 찾아뵐 거예요.', '작은 비행기였어요.', '네, 제가 계획했어요.'],
			why: '휴일 계획을 묻는 질문에 "부모님을 찾아뵐 것"이라고 계획을 말한 (A)가 정답입니다.',
			notes: ['계획을 말함 (정답)', 'plan과 발음이 비슷한 plane(비행기)', 'Yes로 시작, plan 반복'],
			vocab: [
				['plan', '계획'],
				['holiday', '휴일'],
				['plane', '비행기']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-23',
			script: 'Can you make a copy of this receipt?',
			options: [
				"I'd like some coffee, thanks.",
				'I received it yesterday.',
				"Sure, I'll do it right away."
			],
			answer: 2,
			ko: '이 영수증을 복사해 주실 수 있나요?',
			optionsKo: ['커피를 좀 주세요, 고마워요.', '어제 받았어요.', '물론이죠, 바로 할게요.'],
			why: '복사해 달라는 요청에 Sure로 수락한 (C)가 정답입니다.',
			notes: ['copy와 발음이 비슷한 coffee', 'receipt와 발음이 비슷한 received', '수락 (정답)'],
			vocab: [
				['make a copy', '복사하다'],
				['receipt', '영수증'],
				['right away', '바로']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-24',
			script: "You checked the guest list, didn't you?",
			options: ['I paid by check.', 'Yes, forty people are coming.', 'A guest room.'],
			answer: 1,
			ko: '참석자 명단을 확인하셨죠?',
			optionsKo: ['수표로 냈어요.', '네, 40명이 와요.', '객실이요.'],
			why: '확인한 것이 맞으므로 Yes로 답하고 확인한 내용을 덧붙인 (B)가 정답입니다.',
			notes: [
				'철자가 같고 뜻이 다른 check(수표)',
				'Yes + 덧붙임 (정답)',
				'guest 반복 — 질문과 무관'
			],
			vocab: [
				['check', '확인하다; 수표'],
				['guest list', '참석자 명단'],
				['pay by check', '수표로 내다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd13-25',
			script: 'Why did the company hire more drivers?',
			options: [
				'We have more deliveries now.',
				'The rent is getting higher.',
				'Next to the garage.'
			],
			answer: 0,
			ko: '회사는 왜 운전기사를 더 채용했나요?',
			optionsKo: ['요즘 배송이 늘었어요.', '임대료가 오르고 있어요.', '차고 옆에요.'],
			why: 'Why는 이유를 묻습니다. "배송이 늘었다"는 이유를 말한 (A)가 정답입니다. Because 없이 이유만 말해도 됩니다.',
			notes: ['이유를 말함 (정답)', 'hire와 발음이 같은 higher(더 높은)', '장소 — Where에 대한 답'],
			vocab: [
				['hire', '채용하다'],
				['delivery', '배송'],
				['rent', '임대료'],
				['higher', '더 높은']
			]
		}
	]
} satisfies DayContent;
