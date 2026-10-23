import type { DayContent } from '../schema';

export default {
	goals: [
		'빈칸 뒤 구조를 보고 전치사와 접속사를 구분한다',
		'뜻이 같은 전치사와 접속사의 짝을 익힌다',
		'의문사별로 알맞은 응답 유형을 정리한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '전치사와 접속사: 빈칸 뒤를 본다',
			blocks: [
				{
					type: 'p',
					text: '뜻이 같아도 전치사와 접속사는 **뒤에 오는 말**이 다릅니다. 보기에 둘이 섞여 있으면 빈칸 뒤부터 봅니다.'
				},
				{
					type: 'box',
					title: '구분하는 법',
					items: [
						'빈칸 뒤가 **명사(구)**이면 전치사 — ==during== the meeting',
						'빈칸 뒤가 **주어 + 동사**이면 접속사 — ==while== we were talking',
						'명사가 보여도 그 뒤에 **동사**가 있으면 절입니다. — because ==the train was== late'
					]
				},
				{
					type: 'table',
					head: ['뜻', '전치사 + 명사', '접속사 + 주어 + 동사'],
					rows: [
						['~ 동안', 'during', 'while'],
						['~ 때문에', 'because of, due to', 'because'],
						['~에도 불구하고', 'despite, in spite of', 'although, even though'],
						['~까지', 'by, until', 'by the time, until'],
						['~ 없이 / ~하지 않으면', 'without', 'unless']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: '==Despite== the long wait, the customers were happy.',
							ko: '오래 기다렸는데도 고객들은 만족했습니다.',
							note: 'the long wait는 명사 → 전치사 despite'
						},
						{
							en: '==Although== the wait was long, the customers were happy.',
							ko: '기다리는 시간이 길었지만 고객들은 만족했습니다.',
							note: 'the wait was는 주어 + 동사 → 접속사 although'
						}
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '둘 다로 쓰는 말과 푸는 순서',
			blocks: [
				{
					type: 'p',
					text: 'before, after, since, until은 **전치사와 접속사 둘 다**로 씁니다. 뒤에 명사가 와도, 주어 + 동사가 와도 됩니다.'
				},
				{
					type: 'table',
					head: ['단어', '전치사로 (뒤에 명사)', '접속사로 (뒤에 주어 + 동사)'],
					rows: [
						['before', '==before== lunch', '==before== the store opens'],
						['after', '==after== the meeting', '==after== the guests leave'],
						['since', '==since== last year', '==since== he joined the company'],
						['until', '==until== Friday', '==until== the rain stops']
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'빈칸 뒤가 명사인지, 주어 + 동사인지 확인합니다.',
						'구조가 맞지 않는 보기를 지웁니다. 보통 절반이 지워집니다.',
						'남은 보기 중에서 **뜻**이 맞는 것을 고릅니다.'
					]
				},
				{
					type: 'tip',
					text: 'however(그러나), therefore(그러므로)는 접속사가 아니라 부사입니다. 두 절을 한 문장으로 잇지 못하므로, 절과 절 사이의 빈칸에서는 지웁니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Ban read two reports ------- her flight to Hanoi.',
			options: ['during', 'while', 'despite', 'because'],
			answer: 0,
			ko: '반 씨는 하노이로 가는 비행 중에 보고서 두 개를 읽었습니다.',
			steps: [
				'보기에 전치사(during, despite)와 접속사(while, because)가 섞여 있습니다. 빈칸 뒤부터 봅니다.',
				'빈칸 뒤 **her flight to Hanoi**에는 동사가 없습니다. 명사구이므로 접속사 while과 because를 지웁니다.',
				'남은 전치사는 during(~ 동안)과 despite(~에도 불구하고)입니다. "비행 동안 보고서를 읽었다"가 자연스럽습니다.',
				'정답은 (A) **during**입니다. while은 뜻이 같지만 접속사라서 뒤에 주어 + 동사가 와야 합니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: "------- Mr. Yun left home early, he missed the nine o'clock train.",
			options: ['Despite', 'Because', 'During', 'Although'],
			answer: 3,
			ko: '윤 씨는 집에서 일찍 나왔지만 9시 기차를 놓쳤습니다.',
			steps: [
				'빈칸 뒤를 봅니다. **Mr. Yun left**는 주어 + 동사입니다. 절이 왔으므로 접속사 자리입니다.',
				'전치사 Despite와 During을 지웁니다. 접속사 Because와 Although가 남습니다.',
				'"집에서 일찍 나왔다"와 "기차를 놓쳤다"는 서로 반대되는 내용입니다.',
				'정답은 (D) **Although**입니다. Despite는 뜻이 같지만 전치사라서 뒤에 절이 올 수 없습니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-01',
			text: 'Guests may not take photos ------- the museum tour.',
			options: ['while', 'during', 'although', 'despite'],
			answer: 1,
			ko: '박물관 견학 중에는 사진을 찍을 수 없습니다.',
			why: '빈칸 뒤 the museum tour는 명사입니다. 접속사 while과 although를 지우면 전치사 during과 despite가 남고, "견학 동안"이라는 뜻이 맞는 during이 정답입니다.',
			notes: [
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~ 동안 (정답)',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~에도 불구하고 — 뜻이 통하지 않음'
			],
			vocab: [
				['during', '~ 동안'],
				['take a photo', '사진을 찍다'],
				['museum tour', '박물관 견학']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-02',
			text: 'We changed the meeting room ------- the projector was not working.',
			options: ['because of', 'therefore', 'although', 'because'],
			answer: 3,
			ko: '프로젝터가 작동하지 않아서 저희는 회의실을 바꿨습니다.',
			why: '빈칸 뒤 the projector was not working은 주어 + 동사입니다. 접속사 although와 because 중에서 "작동하지 않았기 때문에"라는 뜻이 맞는 because가 정답입니다.',
			notes: [
				'전치사 — 뒤에 명사가 와야 함',
				'부사 — 두 절을 잇지 못함',
				'접속사, 비록 ~이지만 — 두 내용이 반대가 아님',
				'접속사, ~ 때문에 (정답)'
			],
			vocab: [
				['because', '~ 때문에'],
				['meeting room', '회의실'],
				['projector', '프로젝터']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-03',
			text: 'The ferry did not run yesterday ------- strong winds.',
			options: ['because of', 'because', 'despite', 'although'],
			answer: 0,
			ko: '강풍 때문에 어제 여객선이 운항하지 않았습니다.',
			why: '빈칸 뒤 strong winds는 동사가 없는 명사구입니다. 전치사 because of와 despite 중에서 "강풍 때문에"라는 뜻이 맞는 because of가 정답입니다.',
			notes: [
				'전치사, ~ 때문에 (정답)',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~에도 불구하고 — 강풍은 운항하지 않은 이유임',
				'접속사 — 뒤에 주어 + 동사가 와야 함'
			],
			vocab: [
				['because of', '~ 때문에'],
				['ferry', '여객선'],
				['run', '운항하다'],
				['strong wind', '강풍']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-04',
			text: 'Ms. Lopez walks to work every day ------- she owns a car.',
			options: ['despite', 'however', 'although', 'because'],
			answer: 2,
			ko: '로페즈 씨는 차가 있지만 매일 걸어서 출근합니다.',
			why: '빈칸 뒤 she owns a car는 주어 + 동사입니다. 접속사 although와 because 중에서, "걸어서 출근한다"와 "차가 있다"가 반대되는 내용이므로 although가 정답입니다.',
			notes: [
				'전치사 — 뒤에 명사가 와야 함',
				'부사 — 두 절을 잇지 못함',
				'접속사, 비록 ~이지만 (정답)',
				'접속사, ~ 때문에 — 차가 있는 것은 걸어가는 이유가 아님'
			],
			vocab: [
				['although', '비록 ~이지만'],
				['walk to work', '걸어서 출근하다'],
				['own', '소유하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-05',
			text: 'The old theater is still popular ------- its small seats.',
			options: ['because of', 'during', 'despite', 'without'],
			answer: 2,
			ko: '그 오래된 극장은 좌석이 좁은데도 여전히 인기가 있습니다.',
			why: '보기가 모두 전치사이므로 뜻으로 고릅니다. "좌석이 좁다"와 "여전히 인기가 있다"는 반대되는 내용이므로 "~에도 불구하고"라는 뜻의 despite가 정답입니다.',
			notes: [
				'~ 때문에 — 좁은 좌석은 인기의 이유가 아님',
				'~ 동안 — 뜻이 통하지 않음',
				'~에도 불구하고 (정답)',
				'~ 없이 — 뜻이 통하지 않음'
			],
			vocab: [
				['despite', '~에도 불구하고'],
				['theater', '극장'],
				['popular', '인기 있는'],
				['seat', '좌석']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-06',
			text: 'The fire alarm rang ------- Mr. Seol was giving his presentation.',
			options: ['while', 'during', 'unless', 'despite'],
			answer: 0,
			ko: '설 씨가 발표하고 있는 동안 화재 경보가 울렸습니다.',
			why: '빈칸 뒤 Mr. Seol was giving은 주어 + 동사입니다. 접속사 while과 unless 중에서 "발표하는 동안"이라는 뜻이 맞는 while이 정답입니다.',
			notes: [
				'접속사, ~하는 동안 (정답)',
				'전치사 — 뒤에 명사가 와야 함',
				'접속사, ~하지 않으면 — 뜻이 통하지 않음',
				'전치사 — 뒤에 명사가 와야 함'
			],
			vocab: [
				['while', '~하는 동안'],
				['fire alarm', '화재 경보'],
				['ring', '울리다'],
				['give a presentation', '발표하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-07',
			text: 'You cannot return a product ------- the original receipt.',
			options: ['unless', 'although', 'during', 'without'],
			answer: 3,
			ko: '원본 영수증 없이는 제품을 반품할 수 없습니다.',
			why: '빈칸 뒤 the original receipt는 명사입니다. 전치사 during과 without 중에서 "영수증 없이"라는 뜻이 맞는 without이 정답입니다. unless는 뜻이 비슷하지만 접속사입니다.',
			notes: [
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~ 동안 — 뜻이 통하지 않음',
				'전치사, ~ 없이 (정답)'
			],
			vocab: [
				['without', '~ 없이'],
				['return', '반품하다'],
				['original receipt', '원본 영수증']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-08',
			text: 'The seminar will be canceled ------- at least ten people enroll.',
			options: ['without', 'unless', 'because', 'despite'],
			answer: 1,
			ko: '최소 10명이 등록하지 않으면 세미나는 취소됩니다.',
			why: '빈칸 뒤 at least ten people enroll은 주어 + 동사입니다. 접속사 unless와 because 중에서 "등록하지 않으면"이라는 뜻이 맞는 unless가 정답입니다.',
			notes: [
				'전치사 — 뒤에 명사가 와야 함',
				'접속사, ~하지 않으면 (정답)',
				'접속사, ~ 때문에 — 등록해서 취소된다는 말이 되어 어색함',
				'전치사 — 뒤에 명사가 와야 함'
			],
			vocab: [
				['unless', '~하지 않으면'],
				['at least', '최소한'],
				['enroll', '등록하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-09',
			text: 'Several trains were delayed this morning ------- a signal problem.',
			options: ['due to', 'because', 'while', 'despite'],
			answer: 0,
			ko: '신호 문제로 오늘 아침 열차 여러 대가 지연되었습니다.',
			why: '빈칸 뒤 a signal problem은 명사입니다. 전치사 due to와 despite 중에서 "신호 문제 때문에"라는 뜻이 맞는 due to가 정답입니다.',
			notes: [
				'전치사, ~ 때문에 (정답)',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~에도 불구하고 — 신호 문제는 지연의 이유임'
			],
			vocab: [
				['due to', '~ 때문에'],
				['delay', '지연시키다'],
				['signal', '신호']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-10',
			text: 'You will receive a ten percent discount ------- you order before Friday.',
			options: ['although', 'until', 'if', 'while'],
			answer: 2,
			ko: '금요일 전에 주문하시면 10퍼센트 할인을 받습니다.',
			why: '빈칸 뒤 you order는 주어 + 동사이고 보기가 모두 접속사이므로 뜻으로 고릅니다. "금요일 전에 주문한다"는 할인을 받는 조건이므로 if가 정답입니다.',
			notes: [
				'비록 ~이지만 — 두 내용이 반대가 아님',
				'~할 때까지 — 뜻이 통하지 않음',
				'만약 ~라면 (정답)',
				'~하는 동안 — 뜻이 통하지 않음'
			],
			vocab: [
				['receive a discount', '할인을 받다'],
				['percent', '퍼센트'],
				['order', '주문하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-11',
			text: 'The new restaurant has few customers ------- its good location.',
			options: ['even though', 'because', 'due to', 'in spite of'],
			answer: 3,
			ko: '그 새 식당은 위치가 좋은데도 손님이 거의 없습니다.',
			why: '빈칸 뒤 its good location은 명사입니다. 전치사 due to와 in spite of 중에서, "손님이 거의 없다"와 "좋은 위치"가 반대되는 내용이므로 in spite of가 정답입니다.',
			notes: [
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~ 때문에 — 좋은 위치는 손님이 없는 이유가 아님',
				'전치사, ~에도 불구하고 (정답)'
			],
			vocab: [
				['in spite of', '~에도 불구하고'],
				['few', '거의 없는'],
				['location', '위치']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-12',
			text: 'Ms. Sa has lived in Incheon ------- she got a job at the airport.',
			options: ['during', 'since', 'despite', 'unless'],
			answer: 1,
			ko: '사 씨는 공항에 취직한 이후로 인천에서 살고 있습니다.',
			why: '빈칸 뒤 she got a job은 주어 + 동사입니다. since는 전치사와 접속사 둘 다로 쓰며, has lived와 함께 "~한 이후로"라는 뜻을 나타냅니다.',
			notes: [
				'전치사 — 뒤에 명사가 와야 함',
				'접속사, ~한 이후로 (정답)',
				'전치사 — 뒤에 명사가 와야 함',
				'접속사, ~하지 않으면 — 뜻이 통하지 않음'
			],
			vocab: [
				['since', '~한 이후로'],
				['live in', '~에 살다'],
				['get a job', '취직하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-13',
			text: 'The special exhibition will continue ------- the end of October.',
			options: ['until', 'while', 'because', 'despite'],
			answer: 0,
			ko: '특별 전시회는 10월 말까지 계속됩니다.',
			why: '빈칸 뒤 the end of October는 명사구입니다. 전치사로 쓸 수 있는 until과 despite 중에서, continue와 어울려 "~까지 계속"이라는 뜻이 되는 until이 정답입니다.',
			notes: [
				'전치사, ~까지 (정답)',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'접속사 — 뒤에 주어 + 동사가 와야 함',
				'전치사, ~에도 불구하고 — 뜻이 통하지 않음'
			],
			vocab: [
				['until', '~까지'],
				['exhibition', '전시회'],
				['continue', '계속되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-14',
			text: '------- Ms. Hughes arrived at the station, the train had already left.',
			options: ['By', 'Because', 'By the time', 'During'],
			answer: 2,
			ko: '휴스 씨가 역에 도착했을 때는 기차가 이미 떠난 뒤였습니다.',
			why: '빈칸 뒤 Ms. Hughes arrived는 주어 + 동사입니다. 전치사 By와 During을 지우고, 접속사 중에서 "~할 때쯤에는"이라는 뜻이 맞는 By the time을 고릅니다.',
			notes: [
				'전치사 — 뒤에 명사가 와야 함',
				'접속사, ~ 때문에 — 도착한 것은 기차가 떠난 이유가 아님',
				'접속사, ~할 때쯤에는 (정답)',
				'전치사 — 뒤에 명사가 와야 함'
			],
			vocab: [
				['by the time', '~할 때쯤에는'],
				['arrive at', '~에 도착하다'],
				['already', '이미']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd14-15',
			text: 'Mr. Bong arrived early ------- his flight left an hour late.',
			options: ['despite', 'even though', 'because', 'due to'],
			answer: 1,
			ko: '봉 씨는 비행기가 한 시간 늦게 출발했는데도 일찍 도착했습니다.',
			why: '빈칸 뒤 his flight left는 주어 + 동사입니다. 접속사 even though와 because 중에서, "일찍 도착했다"와 "늦게 출발했다"가 반대되는 내용이므로 even though가 정답입니다.',
			notes: [
				'전치사 — 뒤에 명사가 와야 함',
				'접속사, 비록 ~이지만 (정답)',
				'접속사, ~ 때문에 — 늦게 출발한 것은 일찍 도착한 이유가 아님',
				'전치사 — 뒤에 명사가 와야 함'
			],
			vocab: [
				['even though', '비록 ~이지만'],
				['flight', '항공편'],
				['an hour late', '한 시간 늦게']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '의문사 의문문 종합: 첫 단어가 답을 정한다',
			blocks: [
				{
					type: 'p',
					text: '의문사 의문문은 **첫 단어**만 정확히 들어도 오답 두 개를 지울 수 있습니다. 의문사별로 무엇을 묻고 어떤 응답이 정답인지 정리합니다.'
				},
				{
					type: 'table',
					head: ['의문사', '묻는 것', '정답의 모양'],
					rows: [
						['Who', '사람', '이름·직책·부서 — Mr. Han. / The sales team.'],
						['Where', '장소', '위치·방향 — On the third floor.'],
						['When', '때', '시각·날짜 — At noon. / Next Friday.'],
						['What', '무엇', '뒤의 명사에 맞춰 답함 — What time → At two.'],
						['Which', '여럿 중 하나', '하나를 짚음 — The blue one.'],
						['How', '방법·정도', 'By bus. / About an hour. / Ten dollars.'],
						['Why', '이유', 'Because ~ / To ~ / 이유를 말하는 문장']
					]
				},
				{
					type: 'box',
					title: '꼭 기억할 것',
					items: [
						'의문사 질문에 **Yes / No**로 시작하는 응답은 오답입니다.',
						'**모른다 · 확인하겠다 · 다른 사람에게 물어보라**는 어떤 의문사에도 정답이 됩니다.',
						'I have no idea. / Let me find out. / You should ask Ms. Kim.'
					]
				},
				{
					type: 'tip',
					text: 'How는 뒤에 붙는 말까지 들어야 합니다. How long(기간), How often(횟수), How many(수), How much(가격)에 따라 답이 달라집니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Where will the new employee sit?',
			options: ['She starts next Monday.', 'Yes, she is new.', 'At the desk next to mine.'],
			answer: 2,
			ko: '신입 직원은 어디에 앉게 되나요?',
			optionsKo: [
				'그녀는 다음 주 월요일에 시작해요.',
				'네, 그녀는 새로 왔어요.',
				'제 옆 책상에요.'
			],
			steps: [
				'**Where**로 시작합니다. 신입 직원이 앉을 "장소"를 묻습니다.',
				'(A)는 일을 시작하는 때를 말했습니다. When에 대한 답입니다. 지웁니다.',
				'(B)는 Yes로 시작했습니다. 의문사 질문에는 Yes / No로 답할 수 없습니다. 지웁니다.',
				'(C)는 장소로 답했습니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-16',
			script: 'Who designed the cover of the new catalog?',
			options: ['A designer in the Busan office.', 'About thirty pages.', 'Yes, I covered it.'],
			answer: 0,
			ko: '새 카탈로그의 표지는 누가 디자인했나요?',
			optionsKo: ['부산 사무실의 디자이너요.', '30쪽 정도요.', '네, 제가 덮었어요.'],
			why: 'Who는 사람을 묻습니다. "부산 사무실의 디자이너"라고 사람으로 답한 (A)가 정답입니다.',
			notes: ['사람으로 답함 (정답)', '분량 — How many에 대한 답', 'Yes로 시작, cover 반복'],
			vocab: [
				['design', '디자인하다'],
				['cover', '표지'],
				['catalog', '카탈로그']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-17',
			script: 'When are the new uniforms arriving?',
			options: ['At the staff entrance.', 'Sometime next week.', 'In three colors.'],
			answer: 1,
			ko: '새 유니폼은 언제 도착하나요?',
			optionsKo: ['직원 출입구에서요.', '다음 주 중에요.', '세 가지 색으로요.'],
			why: 'When은 때를 묻습니다. "다음 주 중"이라고 답한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '때로 답함 (정답)', '색상 — 질문과 무관'],
			vocab: [
				['uniform', '유니폼'],
				['arrive', '도착하다'],
				['sometime next week', '다음 주 중에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-18',
			script: 'Where do we keep the extra printer ink?',
			options: ['A color printer.', 'Every Monday morning.', 'On the shelf above the copier.'],
			answer: 2,
			ko: '여분의 프린터 잉크는 어디에 보관하나요?',
			optionsKo: ['컬러 프린터예요.', '매주 월요일 아침에요.', '복사기 위 선반에요.'],
			why: 'Where는 장소를 묻습니다. "복사기 위 선반"이라고 답한 (C)가 정답입니다.',
			notes: ['printer 반복 — 질문과 무관', '때 — When에 대한 답', '장소로 답함 (정답)'],
			vocab: [
				['keep', '보관하다'],
				['extra', '여분의'],
				['shelf', '선반']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-19',
			script: 'What did the customer complain about?',
			options: ['The slow delivery.', 'At the service desk.', 'Yes, I complained about it.'],
			answer: 0,
			ko: '그 고객은 무엇에 대해 불만을 제기했나요?',
			optionsKo: [
				'느린 배송이요.',
				'서비스 창구에서요.',
				'네, 제가 그것에 대해 불만을 제기했어요.'
			],
			why: 'What은 내용을 묻습니다. 불만의 내용인 "느린 배송"으로 답한 (A)가 정답입니다.',
			notes: ['불만의 내용을 말함 (정답)', '장소 — Where에 대한 답', 'Yes로 시작, complain 반복'],
			vocab: [
				['customer', '고객'],
				['complain about', '~에 대해 불만을 제기하다'],
				['delivery', '배송']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-20',
			script: 'How many guests are staying at the hotel tonight?',
			options: ['On the top floor.', 'Until Sunday.', 'About eighty.'],
			answer: 2,
			ko: '오늘 밤 호텔에 손님이 몇 명 묵나요?',
			optionsKo: ['맨 위층에요.', '일요일까지요.', '80명 정도요.'],
			why: 'How many는 수를 묻습니다. "80명 정도"라고 답한 (C)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '기간 — How long에 대한 답', '수로 답함 (정답)'],
			vocab: [
				['How many', '몇 명, 몇 개'],
				['guest', '손님'],
				['stay at', '~에 묵다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-21',
			script: 'Why did Ms. Morgan call the travel agency?',
			options: ['Across from the station.', 'To change her flight.', 'Yes, she called twice.'],
			answer: 1,
			ko: '모건 씨는 왜 여행사에 전화했나요?',
			optionsKo: ['역 맞은편에요.', '항공편을 변경하려고요.', '네, 두 번 전화했어요.'],
			why: 'Why는 이유를 묻습니다. To + 동사로 "항공편을 변경하려고"라는 목적을 말한 (B)가 정답입니다.',
			notes: ['장소 — Where에 대한 답', '목적으로 이유를 말함 (정답)', 'Yes로 시작, call 반복'],
			vocab: [
				['travel agency', '여행사'],
				['change a flight', '항공편을 변경하다'],
				['twice', '두 번']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-22',
			script: 'Which room is the interview in?',
			options: ['At two thirty.', 'The one at the end of the hall.', 'Yes, I had an interview.'],
			answer: 1,
			ko: '면접은 어느 방에서 하나요?',
			optionsKo: ['2시 30분에요.', '복도 끝에 있는 방이요.', '네, 저는 면접을 봤어요.'],
			why: 'Which는 여럿 중 하나를 묻습니다. The one으로 방 하나를 짚어 준 (B)가 정답입니다.',
			notes: [
				'시각 — When에 대한 답',
				'the one으로 하나를 짚음 (정답)',
				'Yes로 시작, interview 반복'
			],
			vocab: [
				['interview', '면접'],
				['the one', '(그) 것'],
				['at the end of the hall', '복도 끝에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-23',
			script: 'Where should I leave these sample boxes?',
			options: [
				'They left an hour ago.',
				'About ten boxes.',
				'You should ask the warehouse manager.'
			],
			answer: 2,
			ko: '이 견본 상자들을 어디에 두어야 하나요?',
			optionsKo: [
				'그들은 한 시간 전에 떠났어요.',
				'상자 10개 정도요.',
				'창고 관리자에게 물어보세요.'
			],
			why: '장소를 직접 말하지 않고 "창고 관리자에게 물어보라"고 답한 (C)가 정답입니다. 다른 사람에게 물어보라는 응답은 어떤 의문사에도 정답이 됩니다.',
			notes: [
				'leave(두다)와 뜻이 다른 leave(떠나다)의 과거형 left',
				'boxes 반복 — 수를 묻지 않았음',
				'다른 사람에게 물어보라는 응답 (정답)'
			],
			vocab: [
				['leave', '두다, 놓다'],
				['sample', '견본'],
				['warehouse manager', '창고 관리자']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-24',
			script: 'How often is the office carpet cleaned?',
			options: ['Once every two months.', 'By a cleaning company.', 'Yes, it is clean.'],
			answer: 0,
			ko: '사무실 카펫은 얼마나 자주 청소하나요?',
			optionsKo: ['두 달에 한 번이요.', '청소 업체가요.', '네, 깨끗해요.'],
			why: 'How often은 횟수를 묻습니다. "두 달에 한 번"이라고 답한 (A)가 정답입니다.',
			notes: ['횟수로 답함 (정답)', '누가 하는지 — 횟수를 묻지 않았음', 'Yes로 시작, clean 반복'],
			vocab: [
				['How often', '얼마나 자주'],
				['carpet', '카펫'],
				['once every two months', '두 달에 한 번']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd14-25',
			script: 'When will the test results be ready?',
			options: ['In the lab.', "I'll find out and let you know.", 'Yes, they are ready.'],
			answer: 1,
			ko: '검사 결과는 언제 나오나요?',
			optionsKo: ['실험실에서요.', '알아보고 알려 드릴게요.', '네, 준비됐어요.'],
			why: '때를 직접 말하지 않고 "알아보고 알려 주겠다"고 답한 (B)가 정답입니다. 확인하겠다는 응답은 어떤 의문사에도 정답이 됩니다.',
			notes: ['장소 — Where에 대한 답', '확인하겠다는 응답 (정답)', 'Yes로 시작, ready 반복'],
			vocab: [
				['test result', '검사 결과'],
				['be ready', '준비되다'],
				['find out', '알아보다'],
				['let ~ know', '~에게 알려 주다']
			]
		}
	]
} satisfies DayContent;
