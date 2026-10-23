import type { DayContent } from '../schema';

export default {
	goals: [
		'이유·양보를 나타내는 전치사를 뜻으로 구분한다',
		'according to, instead of, except 등 자주 나오는 전치사를 익힌다',
		'질문이 아닌 평서문에 어울리는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '뜻으로 고르는 전치사',
			blocks: [
				{
					type: 'p',
					text: '시간이나 장소가 아닌 전치사는 **뜻**으로 골라야 합니다. 빈칸 뒤 명사가 문장의 나머지와 어떤 관계인지 봅니다.'
				},
				{
					type: 'table',
					head: ['전치사', '뜻', '예'],
					rows: [
						['because of / due to', '~ 때문에', 'due to bad weather'],
						['despite / in spite of', '~에도 불구하고', 'despite the rain'],
						['instead of', '~ 대신에', 'instead of a meeting'],
						['in addition to', '~에 더하여', 'in addition to the salary'],
						['according to', '~에 따르면', 'according to the report'],
						['regarding / about', '~에 관하여', 'questions regarding the order'],
						['without', '~ 없이', 'without permission'],
						['except', '~을 제외하고', 'every day except Sunday'],
						['including', '~을 포함하여', 'including tax'],
						['as', '~로서 (자격)', 'work as a manager'],
						['by', '~에 의해 (행위자)', 'written by Mr. Kim'],
						['with', '~을 가지고 (수단)', 'pay with a credit card'],
						['through', '~을 통해', 'through the Web site']
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '이유인가, 반대인가',
			blocks: [
				{
					type: 'p',
					text: '가장 자주 나오는 것은 **이유**와 **양보(반대)**의 구분입니다. 빈칸 뒤 명사와 나머지 문장을 우리말로 이어 보세요.'
				},
				{
					type: 'box',
					title: '고르는 법',
					items: [
						'앞뒤가 **원인과 결과**이면 because of / due to — The flight was canceled ==due to== fog.',
						'앞뒤가 **예상과 반대**이면 despite / in spite of — ==Despite== the fog, the flight left on time.'
					]
				},
				{
					type: 'tip',
					text: '문장에 **also**가 있으면 in addition to(더하여), **every / all**이 있으면 except(제외)나 including(포함)이 자주 정답입니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The outdoor concert was canceled ------- heavy rain.',
			options: ['despite', 'instead of', 'due to', 'according to'],
			answer: 2,
			ko: '폭우 때문에 야외 콘서트가 취소되었습니다.',
			steps: [
				'보기가 모두 전치사입니다. 뜻으로 고르는 문제입니다.',
				'빈칸 앞은 "콘서트가 취소되었다", 뒤는 "폭우"입니다. 폭우는 취소의 **원인**입니다.',
				'원인을 나타내는 전치사는 **due to**입니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: '------- the bad weather, the event was a great success.',
			options: ['Because of', 'Despite', 'Without', 'Except'],
			answer: 1,
			ko: '나쁜 날씨에도 불구하고 그 행사는 큰 성공을 거두었습니다.',
			steps: [
				'빈칸 뒤는 "나쁜 날씨", 쉼표 뒤는 "행사가 크게 성공했다"입니다.',
				'날씨가 나쁘면 행사가 잘 안될 것 같은데 성공했습니다. 앞뒤가 **반대**입니다.',
				'예상과 반대일 때는 **Despite**를 씁니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-01',
			text: 'The flight was delayed ------- a mechanical problem.',
			options: ['because of', 'despite', 'instead of', 'except'],
			answer: 0,
			ko: '기계 결함 때문에 항공편이 지연되었습니다.',
			why: '기계 결함은 지연의 원인입니다. 원인을 나타내는 because of가 정답입니다.',
			notes: ['~ 때문에 (정답)', '~에도 불구하고', '~ 대신에', '~을 제외하고'],
			vocab: [
				['delay', '지연시키다'],
				['mechanical problem', '기계 결함']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-02',
			text: '------- the high price, the new phone is selling very well.',
			options: ['Due to', 'Despite', 'According to', 'Regarding'],
			answer: 1,
			ko: '높은 가격에도 불구하고 새 휴대 전화는 매우 잘 팔리고 있습니다.',
			why: '가격이 높으면 안 팔릴 것 같은데 잘 팔립니다. 예상과 반대이므로 Despite가 정답입니다.',
			notes: ['~ 때문에', '~에도 불구하고 (정답)', '~에 따르면', '~에 관하여'],
			vocab: [
				['despite', '~에도 불구하고'],
				['sell well', '잘 팔리다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-03',
			text: '------- the weather forecast, it will rain all weekend.',
			options: ['Instead of', 'Except', 'According to', 'Without'],
			answer: 2,
			ko: '일기 예보에 따르면 주말 내내 비가 올 것입니다.',
			why: '일기 예보는 정보의 출처입니다. 출처를 나타내는 According to가 정답입니다.',
			notes: ['~ 대신에', '~을 제외하고', '~에 따르면 (정답)', '~ 없이'],
			vocab: [
				['according to', '~에 따르면'],
				['weather forecast', '일기 예보']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-04',
			text: 'Please contact Ms. Ra if you have any questions ------- your order.',
			options: ['despite', 'except', 'without', 'regarding'],
			answer: 3,
			ko: '주문에 관해 질문이 있으시면 라 씨에게 연락해 주세요.',
			why: 'questions regarding은 "~에 관한 질문"입니다. 주제를 나타내는 regarding이 정답입니다.',
			notes: ['~에도 불구하고', '~을 제외하고', '~ 없이', '~에 관하여 (정답)'],
			vocab: [
				['contact', '연락하다'],
				['regarding', '~에 관하여'],
				['order', '주문']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-05',
			text: 'Mr. Im took the train ------- driving to work.',
			options: ['due to', 'instead of', 'according to', 'except'],
			answer: 1,
			ko: '임 씨는 차를 몰고 출근하는 대신 기차를 탔습니다.',
			why: '운전하지 않고 기차를 탔으므로 "~ 대신에"라는 뜻의 instead of가 정답입니다.',
			notes: ['~ 때문에', '~ 대신에 (정답)', '~에 따르면', '~을 제외하고'],
			vocab: [
				['instead of', '~ 대신에'],
				['drive to work', '차를 몰고 출근하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-06',
			text: 'Visitors cannot enter the laboratory ------- permission.',
			options: ['without', 'regarding', 'according to', 'except'],
			answer: 0,
			ko: '방문객은 허가 없이 실험실에 들어갈 수 없습니다.',
			why: 'without permission은 "허가 없이"입니다.',
			notes: ['~ 없이 (정답)', '~에 관하여', '~에 따르면', '~을 제외하고'],
			vocab: [
				['enter', '들어가다'],
				['laboratory', '실험실'],
				['permission', '허가']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-07',
			text: 'The store is open every day ------- Sunday.',
			options: ['despite', 'without', 'except', 'due to'],
			answer: 2,
			ko: '그 매장은 일요일을 제외하고 매일 문을 엽니다.',
			why: 'every day except Sunday는 "일요일만 빼고 매일"입니다. 제외를 나타내는 except가 정답입니다.',
			notes: ['~에도 불구하고', '~ 없이', '~을 제외하고 (정답)', '~ 때문에'],
			vocab: [
				['except', '~을 제외하고'],
				['every day', '매일']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-08',
			text: '------- free parking, the hotel also offers free breakfast.',
			options: ['Instead of', 'Despite', 'Due to', 'In addition to'],
			answer: 3,
			ko: '무료 주차 외에 그 호텔은 무료 조식도 제공합니다.',
			why: '뒤에 also(또한)가 있으므로 하나를 더한다는 뜻입니다. In addition to가 정답입니다.',
			notes: ['~ 대신에 — also와 맞지 않음', '~에도 불구하고', '~ 때문에', '~에 더하여 (정답)'],
			vocab: [
				['in addition to', '~에 더하여'],
				['free parking', '무료 주차'],
				['offer', '제공하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-09',
			text: 'Ms. Sung has worked ------- a sales manager for five years.',
			options: ['by', 'at', 'as', 'to'],
			answer: 2,
			ko: '성 씨는 5년 동안 영업 관리자로 일했습니다.',
			why: 'work as + 직책은 "~로 일하다"입니다. 자격을 나타내는 as가 정답입니다.',
			notes: ['~에 의해', '지점 앞', '~로서 (정답)', '~에게, ~로'],
			vocab: [
				['work as', '~로 일하다'],
				['sales manager', '영업 관리자']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-10',
			text: 'The report was prepared ------- the marketing team.',
			options: ['as', 'by', 'on', 'from'],
			answer: 1,
			ko: '그 보고서는 마케팅팀이 작성했습니다.',
			why: '수동태(was prepared) 뒤에서 행위자를 나타낼 때는 by를 씁니다.',
			notes: ['~로서', '~에 의해 (정답)', '표면·요일 앞', '~로부터'],
			vocab: [
				['prepare', '준비하다, 작성하다'],
				['by', '~에 의해']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-11',
			text: 'You can pay ------- a credit card or cash.',
			options: ['with', 'as', 'to', 'from'],
			answer: 0,
			ko: '신용카드나 현금으로 결제할 수 있습니다.',
			why: 'pay with는 "~로 결제하다"입니다. 수단을 나타내는 with가 정답입니다.',
			notes: ['~을 가지고 (정답)', '~로서', '~에게, ~로', '~로부터'],
			vocab: [
				['pay with', '~로 결제하다'],
				['credit card', '신용카드'],
				['cash', '현금']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-12',
			text: 'The road is closed ------- construction work.',
			options: ['despite', 'except', 'regarding', 'due to'],
			answer: 3,
			ko: '공사 때문에 그 도로는 폐쇄되었습니다.',
			why: '공사는 도로가 폐쇄된 원인입니다. 원인을 나타내는 due to가 정답입니다.',
			notes: ['~에도 불구하고', '~을 제외하고', '~에 관하여', '~ 때문에 (정답)'],
			vocab: [
				['road', '도로'],
				['due to', '~ 때문에'],
				['construction work', '공사']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-13',
			text: '------- the delay, the project was completed on time.',
			options: ['Because of', 'In spite of', 'According to', 'In addition to'],
			answer: 1,
			ko: '지연에도 불구하고 프로젝트는 제때 완료되었습니다.',
			why: '지연이 있었는데도 제때 끝났습니다. 예상과 반대이므로 In spite of가 정답입니다.',
			notes: ['~ 때문에', '~에도 불구하고 (정답)', '~에 따르면', '~에 더하여'],
			vocab: [
				['in spite of', '~에도 불구하고'],
				['delay', '지연'],
				['on time', '제때']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-14',
			text: 'All employees, ------- part-time staff, must attend the meeting.',
			options: ['including', 'according to', 'despite', 'between'],
			answer: 0,
			ko: '시간제 직원을 포함한 모든 직원은 회의에 참석해야 합니다.',
			why: 'including은 "~을 포함하여"입니다. 모든 직원 안에 시간제 직원도 들어간다는 뜻입니다.',
			notes: ['~을 포함하여 (정답)', '~에 따르면', '~에도 불구하고', '(둘) 사이에'],
			vocab: [
				['including', '~을 포함하여'],
				['part-time staff', '시간제 직원'],
				['attend', '참석하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd11-15',
			text: 'You can register for the class ------- our Web site.',
			options: ['despite', 'except', 'through', 'among'],
			answer: 2,
			ko: '저희 웹사이트를 통해 그 수업에 등록할 수 있습니다.',
			why: 'through는 "~을 통해"입니다. 등록하는 수단을 나타냅니다.',
			notes: ['~에도 불구하고', '~을 제외하고', '~을 통해 (정답)', '(셋 이상) 사이에'],
			vocab: [
				['register for', '~에 등록하다'],
				['through', '~을 통해']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '평서문: 질문이 아닌 말에 답한다',
			blocks: [
				{
					type: 'p',
					text: 'Part 2에는 질문이 아니라 **사실이나 의견을 말하는 문장**도 나옵니다. 의문사가 없어서 문장 전체의 뜻을 이해해야 합니다.'
				},
				{
					type: 'table',
					head: ['말의 종류', '예', '어울리는 응답'],
					rows: [
						['문제를 알림', 'The printer is out of ink.', "I'll order some more."],
						['의견', 'I think the new design looks great.', 'I agree. / So do I.'],
						['정보 전달', 'The meeting was moved to Friday.', 'Thanks for letting me know.'],
						['계획', "I'm going to the cafeteria.", "I'll join you."],
						['소식', 'We won the contract.', "That's great news."]
					]
				},
				{
					type: 'box',
					title: '정답 유형',
					items: [
						'**동의** — I agree. / So did I. / Me too.',
						"**해결책·대안** — Let me help you. / Then let's take the stairs.",
						'**되묻기** — Really? When? / Did you check your desk?'
					]
				},
				{
					type: 'tip',
					text: '질문이 아닌데 **Yes, I can.**처럼 답하거나, 들린 단어만 반복하는 보기는 대부분 오답입니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'The copy machine is out of paper again.',
			options: ['Twenty copies.', 'A paper cup.', "I'll bring some from the supply room."],
			answer: 2,
			ko: '복사기에 종이가 또 떨어졌어요.',
			optionsKo: ['20부요.', '종이컵이요.', '비품실에서 가져올게요.'],
			steps: [
				'의문사도 없고 질문도 아닙니다. 문제를 알리는 **평서문**입니다.',
				'(A)는 copy와 비슷한 copies를 썼지만 문제 해결과 관계없습니다. 지웁니다.',
				'(B)는 paper를 반복했을 뿐입니다. 지웁니다.',
				'(C)는 종이를 가져오겠다는 **해결책**입니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-16',
			script: 'I think we need more chairs for the seminar.',
			options: ['It was a good seminar.', 'There are some extras in room B.', 'The chairman.'],
			answer: 1,
			ko: '세미나에 의자가 더 필요할 것 같아요.',
			optionsKo: ['좋은 세미나였어요.', 'B 회의실에 여분이 좀 있어요.', '의장이요.'],
			why: '의자가 부족하다는 말에 여분이 있는 곳을 알려 준 (B)가 정답입니다.',
			notes: ['seminar 반복 — 과거 일로 답함', '해결책 (정답)', 'chair와 비슷한 chairman'],
			vocab: [
				['chair', '의자'],
				['extra', '여분']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-17',
			script: 'The elevator is out of order.',
			options: ["Then let's take the stairs.", 'On the tenth floor.', 'I ordered it yesterday.'],
			answer: 0,
			ko: '엘리베이터가 고장 났어요.',
			optionsKo: ['그럼 계단으로 갑시다.', '10층에요.', '어제 주문했어요.'],
			why: '고장 났다는 말에 대안을 제시한 (A)가 정답입니다.',
			notes: [
				'대안 제시 (정답)',
				'장소 — 말한 내용과 무관',
				'out of order(고장 난)와 비슷한 order(주문하다)'
			],
			vocab: [
				['out of order', '고장 난'],
				['take the stairs', '계단으로 가다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-18',
			script: 'I really enjoyed the presentation this morning.',
			options: ['A birthday present.', "At nine o'clock.", 'So did I.'],
			answer: 2,
			ko: '오늘 아침 발표가 정말 좋았어요.',
			optionsKo: ['생일 선물이요.', '9시에요.', '저도 그랬어요.'],
			why: '의견에 동의한 (C)가 정답입니다. So did I는 "저도 그랬어요"입니다.',
			notes: ['presentation과 비슷한 present', '시각 — 말한 내용과 무관', '동의 (정답)'],
			vocab: [
				['enjoy', '즐기다'],
				['So did I', '저도 그랬어요']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-19',
			script: "I'm having trouble logging in to the system.",
			options: ['Did you try resetting your password?', 'A log cabin.', 'Yes, he did.'],
			answer: 0,
			ko: '시스템에 로그인하는 데 문제가 있어요.',
			optionsKo: ['비밀번호를 재설정해 보셨어요?', '통나무집이요.', '네, 그가 했어요.'],
			why: '문제를 듣고 해결 방법을 되물은 (A)가 정답입니다.',
			notes: [
				'해결책을 되물음 (정답)',
				'log in과 비슷한 log',
				'질문이 아닌데 Yes로 답함, 주어도 맞지 않음'
			],
			vocab: [
				['have trouble -ing', '~하는 데 어려움이 있다'],
				['log in', '로그인하다'],
				['reset', '재설정하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-20',
			script: 'The deadline has been moved to next Friday.',
			options: ['A moving company.', 'Thanks for letting me know.', 'On the line.'],
			answer: 1,
			ko: '마감일이 다음 주 금요일로 옮겨졌어요.',
			optionsKo: ['이삿짐 회사요.', '알려 줘서 고마워요.', '전화 중이에요.'],
			why: '정보를 전해 준 데 대해 고맙다고 답한 (B)가 정답입니다.',
			notes: ['move와 비슷한 moving', '감사 (정답)', 'deadline과 비슷한 line'],
			vocab: [
				['deadline', '마감일'],
				['let ~ know', '~에게 알려 주다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-21',
			script: 'Our sales increased by ten percent last quarter.',
			options: ['A quarter past three.', 'For sale.', "That's great news."],
			answer: 2,
			ko: '지난 분기에 매출이 10퍼센트 증가했어요.',
			optionsKo: ['3시 15분이요.', '판매 중이에요.', '정말 좋은 소식이네요.'],
			why: '좋은 소식에 반응한 (C)가 정답입니다.',
			notes: [
				'quarter(분기)와 철자가 같은 quarter(15분)',
				'sales와 비슷한 sale',
				'소식에 대한 반응 (정답)'
			],
			vocab: [
				['increase by', '~만큼 증가하다'],
				['quarter', '분기']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-22',
			script: "I'd like to make a reservation for two.",
			options: ['Certainly, for what time?', 'A reserved seat.', 'Two of them.'],
			answer: 0,
			ko: '두 명 예약하고 싶어요.',
			optionsKo: ['알겠습니다, 몇 시로 하시겠어요?', '예약석이요.', '그중 두 개요.'],
			why: '예약 요청을 받고 필요한 정보를 되물은 (A)가 정답입니다.',
			notes: ['되묻기 (정답)', 'reservation과 비슷한 reserved', 'two 반복 — 말한 내용과 무관'],
			vocab: [
				['make a reservation', '예약하다'],
				['Certainly', '알겠습니다, 물론이죠']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-23',
			script: "It looks like it's going to rain this afternoon.",
			options: ['A long train.', 'In the afternoon.', "I'd better bring an umbrella."],
			answer: 2,
			ko: '오늘 오후에 비가 올 것 같아요.',
			optionsKo: ['긴 기차요.', '오후에요.', '우산을 챙겨야겠네요.'],
			why: '비가 올 것 같다는 말에 어울리는 반응은 (C)입니다.',
			notes: [
				'rain과 발음이 비슷한 train',
				'afternoon 반복 — 말한 내용과 무관',
				'상황에 맞는 반응 (정답)'
			],
			vocab: [
				['It looks like', '~인 것 같다'],
				["I'd better", '~하는 게 좋겠다'],
				['umbrella', '우산']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-24',
			script: "I can't find my ID badge.",
			options: ['A fine day.', 'Did you check your desk drawer?', 'Yes, I can.'],
			answer: 1,
			ko: '제 사원증을 찾을 수가 없어요.',
			optionsKo: ['좋은 날이에요.', '책상 서랍은 확인해 봤어요?', '네, 할 수 있어요.'],
			why: '찾지 못한다는 말에 찾아볼 곳을 알려 준 (B)가 정답입니다.',
			notes: ['find와 발음이 비슷한 fine', '해결책을 되물음 (정답)', '질문이 아닌데 Yes로 답함'],
			vocab: [
				['ID badge', '사원증'],
				['drawer', '서랍']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd11-25',
			script: 'The new intern starts tomorrow.',
			options: ["Oh, I didn't know that.", 'A start button.', 'Internet service.'],
			answer: 0,
			ko: '새 인턴이 내일부터 출근해요.',
			optionsKo: ['아, 몰랐어요.', '시작 버튼이요.', '인터넷 서비스요.'],
			why: '새로운 정보에 반응한 (A)가 정답입니다.',
			notes: [
				'정보에 대한 반응 (정답)',
				'start 반복 — 말한 내용과 무관',
				'intern과 비슷한 Internet'
			],
			vocab: [
				['intern', '인턴'],
				['start', '근무를 시작하다']
			]
		}
	]
} satisfies DayContent;
