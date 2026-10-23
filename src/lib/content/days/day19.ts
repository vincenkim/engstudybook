import type { DayContent } from '../schema';

export default {
	goals: [
		'자주 나오는 형용사를 짝이 되는 전치사·명사와 함께 익힌다',
		'Part 6 접속부사를 앞뒤 문장의 관계로 고른다',
		'일반 · 부정 · 부가 의문문의 응답을 복습한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '형용사 어휘는 짝을 봅니다',
			blocks: [
				{
					type: 'p',
					text: '보기 네 개가 모두 형용사이고 뜻이 서로 다르면 형용사 어휘 문제입니다. 형용사는 **뒤의 전치사**나 **꾸미는 명사**와 짝을 이룹니다.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'be동사 뒤 빈칸이면 **뒤의 전치사**를 봅니다. — be ==responsible for==, be ==eligible for==, be ==familiar with==',
						'명사 앞 빈칸이면 **그 명사**를 봅니다. — ==additional== information, a ==valid== ticket, ==affordable== prices',
						'짝으로 풀리지 않으면 문장 전체를 해석해 뜻이 맞는 것을 고릅니다.'
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'Ms. Ko is ==responsible for== the monthly budget.',
							ko: '고 씨는 월간 예산을 담당합니다.',
							note: 'be responsible for — ~을 담당하다, ~에 책임이 있다'
						},
						{
							en: 'All members are ==eligible for== free parking.',
							ko: '모든 회원은 무료 주차를 이용할 자격이 있습니다.',
							note: 'be eligible for — ~을 받을 자격이 있다'
						}
					]
				},
				{
					type: 'tip',
					text: '형용사 + 전치사는 한 덩어리로 외우세요. 전치사만 보고도 답을 고를 수 있습니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '자주 나오는 형용사',
			blocks: [
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['available', '이용할 수 있는, 시간이 되는', 'be available for a meeting'],
						['responsible', '책임이 있는, 담당하는', 'be responsible for'],
						['eligible', '자격이 있는', 'be eligible for'],
						['familiar', '잘 아는, 익숙한', 'be familiar with'],
						['necessary', '필요한', 'It is necessary to ~'],
						['convenient', '편리한', 'a convenient location'],
						['successful', '성공적인', 'a successful event']
					]
				},
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['additional', '추가의', 'additional information'],
						['valid', '유효한', 'a valid ticket / valid until May'],
						['limited', '한정된', 'for a limited time'],
						['affordable', '(가격이) 알맞은', 'affordable prices'],
						['reliable', '믿을 만한', 'a reliable service'],
						['recent', '최근의', 'a recent survey'],
						['annual', '해마다 하는, 연례의', 'an annual event']
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Mr. Baek is ------- for training all new sales staff.',
			options: ['familiar', 'responsible', 'convenient', 'valid'],
			answer: 1,
			ko: '백 씨는 신입 영업 직원 전체의 교육을 담당합니다.',
			steps: [
				'보기가 모두 형용사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸은 be동사 is 뒤에 있고, 빈칸 뒤에 전치사 **for**가 있습니다.',
				'be responsible for는 "~을 담당하다"입니다. familiar는 with와 짝입니다. 정답은 (B) **responsible**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The special lunch menu is offered for a ------- time only.',
			options: ['limited', 'familiar', 'reliable', 'responsible'],
			answer: 0,
			ko: '특별 점심 메뉴는 한정된 기간에만 제공됩니다.',
			steps: [
				'보기가 모두 형용사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸은 명사 **time** 앞에 있고, 문장 끝에 only(~만)가 있습니다.',
				'for a limited time은 "한정된 기간 동안"입니다. 정답은 (A) **limited**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-01',
			text: 'Ms. Han is not ------- for a meeting on Friday afternoon.',
			options: ['valid', 'annual', 'available', 'additional'],
			answer: 2,
			ko: '한 씨는 금요일 오후에 회의할 시간이 되지 않습니다.',
			why: '사람이 주어일 때 be available for는 "~할 시간이 되다"입니다. 나머지는 사람을 설명하는 말로 쓰지 않습니다.',
			notes: ['유효한', '해마다 하는', '시간이 되는 (정답)', '추가의'],
			vocab: [
				['available', '시간이 되는, 이용할 수 있는'],
				['be available for', '~할 시간이 되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-02',
			text: 'The new assistant is already ------- with our ordering system.',
			options: ['familiar', 'responsible', 'eligible', 'available'],
			answer: 0,
			ko: '새 보조 직원은 우리 주문 시스템을 벌써 잘 압니다.',
			why: 'be familiar with는 "~을 잘 알다"입니다. 빈칸 뒤의 전치사 with가 단서입니다.',
			notes: [
				'잘 아는 (정답)',
				'책임이 있는 — for와 짝',
				'자격이 있는 — for와 짝',
				'이용할 수 있는'
			],
			vocab: [
				['be familiar with', '~을 잘 알다'],
				['assistant', '보조 직원'],
				['ordering system', '주문 시스템']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-03',
			text: 'The company holds its ------- sports day at Oak Hill Park every May.',
			options: ['eligible', 'available', 'responsible', 'annual'],
			answer: 3,
			ko: '그 회사는 해마다 5월에 오크 힐 공원에서 연례 체육 대회를 엽니다.',
			why: 'every May(해마다 5월에)가 단서입니다. 해마다 여는 행사는 annual(연례의)로 나타냅니다.',
			notes: ['자격이 있는', '이용할 수 있는', '책임이 있는', '해마다 하는 (정답)'],
			vocab: [
				['annual', '해마다 하는, 연례의'],
				['hold', '(행사를) 열다'],
				['sports day', '체육 대회']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-04',
			text: 'This coupon is ------- until the end of December.',
			options: ['familiar', 'valid', 'responsible', 'recent'],
			answer: 1,
			ko: '이 쿠폰은 12월 말까지 유효합니다.',
			why: '쿠폰이나 표가 "~까지 유효하다"는 be valid until로 나타냅니다. until the end of December가 단서입니다.',
			notes: ['잘 아는', '유효한 (정답)', '책임이 있는', '최근의'],
			vocab: [
				['valid', '유효한'],
				['coupon', '쿠폰'],
				['until', '~까지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-05',
			text: 'The store will hire ------- staff for the busy holiday season.',
			options: ['additional', 'annual', 'convenient', 'valid'],
			answer: 0,
			ko: '그 매장은 바쁜 연휴 기간에 대비해 직원을 추가로 채용할 것입니다.',
			why: '바쁜 기간에 대비해 뽑는 것은 "추가 직원"입니다. additional staff가 알맞습니다.',
			notes: ['추가의 (정답)', '해마다 하는', '편리한', '유효한'],
			vocab: [
				['additional', '추가의'],
				['hire', '채용하다'],
				['holiday season', '연휴 기간']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-06',
			text: "Only full-time employees are ------- for the company's health program.",
			options: ['familiar', 'recent', 'eligible', 'annual'],
			answer: 2,
			ko: '정규직 직원만 회사의 건강 프로그램을 이용할 자격이 있습니다.',
			why: 'be eligible for는 "~을 받을 자격이 있다"입니다. Only full-time employees(정규직 직원만)라는 조건과 어울립니다.',
			notes: ['잘 아는 — with와 짝', '최근의', '자격이 있는 (정답)', '해마다 하는'],
			vocab: [
				['be eligible for', '~을 받을 자격이 있다'],
				['full-time employee', '정규직 직원'],
				['health program', '건강 프로그램']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-07',
			text: 'The new shop on Pine Street sells quality furniture at ------- prices.',
			options: ['eligible', 'affordable', 'necessary', 'responsible'],
			answer: 1,
			ko: '파인 가에 새로 생긴 가게는 품질 좋은 가구를 알맞은 가격에 판매합니다.',
			why: 'at affordable prices는 "알맞은 가격에"입니다. 가격(prices)을 꾸미는 말로 알맞은 것은 affordable뿐입니다.',
			notes: ['자격이 있는', '(가격이) 알맞은 (정답)', '필요한', '책임이 있는'],
			vocab: [
				['affordable', '(가격이) 알맞은'],
				['quality', '품질 좋은'],
				['furniture', '가구']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-08',
			text: 'It is ------- to wear a helmet inside the construction area.',
			options: ['familiar', 'eligible', 'recent', 'necessary'],
			answer: 3,
			ko: '공사 구역 안에서는 헬멧을 써야 합니다.',
			why: 'It is necessary to + 동사원형은 "~할 필요가 있다"입니다. 공사 구역에서 헬멧을 쓰는 일에 알맞습니다.',
			notes: ['잘 아는', '자격이 있는', '최근의', '필요한 (정답)'],
			vocab: [
				['necessary', '필요한'],
				['wear a helmet', '헬멧을 쓰다'],
				['construction area', '공사 구역']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-09',
			text: 'According to a ------- survey, most customers prefer to shop online.',
			options: ['recent', 'convenient', 'responsible', 'necessary'],
			answer: 0,
			ko: '최근 설문 조사에 따르면 대부분의 고객은 온라인 쇼핑을 선호합니다.',
			why: 'a recent survey는 "최근 설문 조사"입니다. 조사(survey)를 꾸미는 말로 알맞습니다.',
			notes: ['최근의 (정답)', '편리한', '책임이 있는', '필요한'],
			vocab: [
				['recent', '최근의'],
				['according to', '~에 따르면'],
				['survey', '설문 조사'],
				['prefer to', '~하는 것을 선호하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-10',
			text: 'We chose this delivery company because its service is fast and -------.',
			options: ['eligible', 'reliable', 'annual', 'recent'],
			answer: 1,
			ko: '서비스가 빠르고 믿을 만해서 우리는 이 배송 회사를 선택했습니다.',
			why: '회사를 고른 이유이므로 서비스의 좋은 점이 와야 합니다. fast and reliable은 "빠르고 믿을 만한"입니다.',
			notes: ['자격이 있는', '믿을 만한 (정답)', '해마다 하는', '최근의'],
			vocab: [
				['reliable', '믿을 만한'],
				['delivery company', '배송 회사'],
				['choose', '선택하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-11',
			text: "The hotel's location near the subway station is very ------- for travelers.",
			options: ['eligible', 'recent', 'annual', 'convenient'],
			answer: 3,
			ko: '지하철역 근처에 있는 그 호텔의 위치는 여행객에게 매우 편리합니다.',
			why: '지하철역 근처(near the subway station)라는 위치의 좋은 점을 말하고 있습니다. convenient(편리한)가 알맞습니다.',
			notes: ['자격이 있는', '최근의', '해마다 하는', '편리한 (정답)'],
			vocab: [
				['convenient', '편리한'],
				['location', '위치'],
				['traveler', '여행객']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd19-12',
			text: "Last night's charity concert was very ------- and raised over ten thousand dollars.",
			options: ['eligible', 'annual', 'successful', 'additional'],
			answer: 2,
			ko: '어젯밤 자선 콘서트는 매우 성공적이어서 만 달러 넘게 모금했습니다.',
			why: '만 달러 넘게 모금했다는 결과가 뒤에 나옵니다. 행사가 잘되었다는 뜻의 successful(성공적인)이 알맞습니다.',
			notes: ['자격이 있는', '해마다 하는', '성공적인 (정답)', '추가의'],
			vocab: [
				['successful', '성공적인'],
				['charity concert', '자선 콘서트'],
				['raise', '(돈을) 모으다']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 6 접속부사: 두 문장의 관계를 봅니다',
			blocks: [
				{
					type: 'p',
					text: '접속부사는 **문장 맨 앞**에서 앞 문장과 뒤 문장을 이어 주는 말입니다. 뒤에 쉼표(,)가 옵니다. 보기가 However, Therefore 같은 말이면 접속부사 문제입니다.'
				},
				{
					type: 'table',
					head: ['관계', '접속부사', '뜻'],
					rows: [
						['반대', 'however', '그러나'],
						['결과', 'therefore / as a result', '그러므로 / 그 결과'],
						['추가', 'in addition', '게다가'],
						['예시', 'for example', '예를 들어'],
						['조건', 'otherwise', '그렇지 않으면']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The printer is old. ==However==, it works well.',
							ko: '그 프린터는 오래되었습니다. 그러나 잘 작동합니다.',
							note: '오래됨 ↔ 잘 작동함 → 반대'
						},
						{
							en: 'The printer is broken. ==Therefore==, we ordered a new one.',
							ko: '그 프린터는 고장 났습니다. 그러므로 새것을 주문했습니다.',
							note: '고장 남 → 새것 주문 → 결과'
						},
						{
							en: 'The printer is quiet. ==In addition==, it is easy to use.',
							ko: '그 프린터는 조용합니다. 게다가 쓰기 쉽습니다.',
							note: '좋은 점 + 좋은 점 → 추가'
						}
					]
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'빈칸 **앞 문장**을 읽고 내용을 한마디로 줄입니다.',
						'빈칸 **뒤 문장**도 한마디로 줄입니다.',
						'두 내용이 반대인지, 원인과 결과인지, 비슷한 내용을 더하는지 판단합니다.'
					]
				},
				{
					type: 'tip',
					text: '접속부사 문제는 빈칸이 있는 문장만 읽어서는 풀 수 없습니다. 반드시 앞 문장부터 읽으세요.'
				}
			]
		},
		{
			type: 'set',
			part: 6,
			label: '이메일',
			passages: [
				{
					kind: '이메일',
					head: [
						['To', 'Grace Lim'],
						['From', 'Maple Home Store Customer Service'],
						['Subject', 'Your sofa order']
					],
					body: [
						'Dear Ms. Lim,',
						'Thank you for shopping at Maple Home Store. The blue sofa you ordered is very popular, and it is out of stock at the moment. {1}, we cannot deliver it on May 3 as we promised.',
						'New sofas are {2} to arrive at our warehouse next Monday. We will send yours on the same day.',
						'Please accept our apology for the {3}. To make up for it, we will give you a ten percent discount on your next purchase.',
						'You can reach {4} at 555-0142.',
						'Maple Home Store Customer Service'
					],
					ko: [
						'임 선생님께,',
						'메이플 홈 스토어를 이용해 주셔서 감사합니다. 주문하신 파란색 소파는 인기가 많아 지금은 재고가 없습니다. 그러므로 약속드린 5월 3일에 배송해 드릴 수 없습니다.',
						'새 소파는 다음 주 월요일에 저희 창고에 도착할 예정입니다. 같은 날 고객님의 소파를 보내 드리겠습니다.',
						'지연된 점 사과드립니다. 보상의 뜻으로 다음 구매 때 10퍼센트 할인을 해 드리겠습니다.',
						'555-0142로 저희에게 연락하실 수 있습니다.',
						'메이플 홈 스토어 고객 서비스'
					]
				}
			],
			questions: [
				{
					id: 'd19-13',
					options: ['However', 'Therefore', 'For example', 'Otherwise'],
					answer: 1,
					why: '앞 문장은 소파가 out of stock(재고 없음)이라는 내용이고, 뒤 문장은 약속한 날에 배송할 수 없다는 내용입니다. 앞이 원인, 뒤가 결과이므로 Therefore(그러므로)가 정답입니다.',
					notes: [
						'그러나 — 반대 관계가 아님',
						'그러므로 (정답)',
						'예를 들어 — 예시가 아님',
						'그렇지 않으면 — 조건이 아님'
					]
				},
				{
					id: 'd19-14',
					options: ['expected', 'expecting', 'expect', 'expectation'],
					answer: 0,
					why: 'be expected to + 동사원형은 "~할 예정이다"입니다. 소파는 도착이 "예상되는" 대상이므로 be동사 뒤에 과거분사 expected가 옵니다.',
					notes: [
						'과거분사 (정답)',
						'-ing형 — 소파가 예상하는 것이 아님',
						'동사원형 — be동사 뒤에 올 수 없음',
						'명사'
					]
				},
				{
					id: 'd19-15',
					options: ['visit', 'delay', 'meeting', 'noise'],
					answer: 1,
					why: '앞에서 약속한 5월 3일에 배송하지 못하고 다음 주 월요일에 보낸다고 했습니다. 배송이 늦어진 것에 대한 사과이므로 delay(지연)가 정답입니다.',
					notes: ['방문', '지연 (정답)', '회의', '소음 — 지문에 없는 내용']
				},
				{
					id: 'd19-16',
					options: ['we', 'our', 'ours', 'us'],
					answer: 3,
					why: '동사 reach(연락하다) 뒤의 목적어 자리입니다. 목적격 us가 정답입니다.',
					notes: [
						'주격',
						'소유격 — 뒤에 명사가 필요함',
						'소유대명사 — "우리의 것"',
						'목적격 (정답)'
					]
				}
			],
			vocab: [
				['out of stock', '재고가 없는'],
				['at the moment', '지금'],
				['warehouse', '창고'],
				['be expected to', '~할 예정이다'],
				['apology', '사과'],
				['make up for', '~을 보상하다']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '회람',
			passages: [
				{
					kind: '회람',
					head: [
						['To', 'All employees'],
						['From', 'Building Management Office'],
						['Subject', 'New parking system']
					],
					body: [
						'A new parking system will start in our building on April 1. The gate will open only for cars with a parking sticker.',
						'Stickers are free for all employees. {1}, you must fill out a form on the company Web site by March 25 to get one.',
						'Stickers will be {2} to your desk within three days. Please put yours on the front window of your car.',
						'The garage has only 80 spaces. Because parking space is {3}, we cannot give more than one sticker to {4} employee.'
					],
					ko: [
						'4월 1일부터 우리 건물에서 새 주차 시스템을 시작합니다. 출입구는 주차 스티커가 있는 차에만 열립니다.',
						'스티커는 모든 직원에게 무료입니다. 그러나 스티커를 받으려면 3월 25일까지 회사 웹사이트에서 신청서를 작성해야 합니다.',
						'스티커는 3일 안에 여러분의 자리로 전달됩니다. 스티커를 차 앞 유리에 붙여 주세요.',
						'주차장에는 자리가 80개뿐입니다. 주차 공간이 한정되어 있어서 직원 한 명당 스티커를 한 장만 드릴 수 있습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd19-17',
					options: ['As a result', 'For example', 'However', 'Otherwise'],
					answer: 2,
					why: '앞 문장은 스티커가 free(무료)라는 내용이고, 뒤 문장은 you must fill out a form(신청서를 작성해야 한다)이라는 내용입니다. 무료이지만 해야 할 일이 있다는 반대 흐름이므로 However(그러나)가 정답입니다.',
					notes: [
						'그 결과 — 원인과 결과가 아님',
						'예를 들어 — 예시가 아님',
						'그러나 (정답)',
						'그렇지 않으면 — 뜻이 통하지 않음'
					]
				},
				{
					id: 'd19-18',
					options: ['delivered', 'delivering', 'deliver', 'delivery'],
					answer: 0,
					why: '스티커는 "전달되는" 대상입니다. will be 뒤에서 수동태를 만드는 과거분사 delivered가 정답입니다.',
					notes: [
						'과거분사 (정답)',
						'-ing형 — 스티커가 전달하는 것이 아님',
						'동사원형 — be 뒤에 올 수 없음',
						'명사'
					]
				},
				{
					id: 'd19-19',
					options: ['large', 'convenient', 'familiar', 'limited'],
					answer: 3,
					why: '앞 문장에서 only 80 spaces(자리가 80개뿐)라고 했고, 뒤에서는 스티커를 한 장만 준다고 했습니다. 공간이 부족하다는 뜻의 limited(한정된)가 정답입니다.',
					notes: ['넓은 — 앞 문장과 반대', '편리한', '잘 아는', '한정된 (정답)']
				},
				{
					id: 'd19-20',
					options: ['all', 'many', 'each', 'few'],
					answer: 2,
					why: '빈칸 뒤의 employee가 단수 명사입니다. 단수 명사 앞에 쓰는 each(각각의)가 정답입니다. all, many, few 뒤에는 복수 명사가 옵니다.',
					notes: [
						'모든 — 복수 명사 앞',
						'많은 — 복수 명사 앞',
						'각각의 (정답)',
						'거의 없는 — 복수 명사 앞'
					]
				}
			],
			vocab: [
				['parking sticker', '주차 스티커'],
				['fill out a form', '신청서를 작성하다'],
				['within', '~ 이내에'],
				['garage', '주차장'],
				['space', '공간, 자리']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: 일반 · 부정 · 부가 의문문',
			blocks: [
				{
					type: 'p',
					text: '오늘은 의문사 없이 묻는 질문을 다섯 문제 복습합니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'**일반 의문문**(Did you ~? Is there ~?)은 Yes / No로 답할 수 있습니다. Yes / No 없이 내용만 말한 응답도 정답입니다.',
						"**부정 의문문**(Doesn't ~? Isn't ~?)은 not을 빼고 생각합니다. 사실이 그러면 Yes, 아니면 No입니다.",
						"**부가 의문문**(~, didn't you? / ~, has he?)은 꼬리를 떼고 평서문으로 듣습니다.",
						'Yes / No 뒤의 내용이 질문과 맞는지 끝까지 듣습니다.',
						'질문에 나온 단어나 발음이 비슷한 단어가 다시 들리는 보기는 의심합니다.'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd19-21',
			script: 'Have you seen the new training schedule?',
			options: [
				'My train was ten minutes late.',
				'For three weeks.',
				'Yes, it was posted this morning.'
			],
			answer: 2,
			ko: '새 교육 일정표를 보셨나요?',
			optionsKo: ['제 기차가 10분 늦었어요.', '3주 동안이요.', '네, 오늘 아침에 게시되었어요.'],
			why: '봤는지 물었으므로 Yes로 답하고 일정표가 게시된 때를 덧붙인 (C)가 정답입니다.',
			notes: [
				'training과 발음이 비슷한 train',
				'기간 — How long에 대한 답',
				'Yes + 덧붙이는 말 (정답)'
			],
			vocab: [
				['training schedule', '교육 일정표'],
				['post', '게시하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd19-22',
			script: "Doesn't the pharmacy close at eight?",
			options: ['No, it stays open until ten.', 'It is very close to here.', 'Eight people.'],
			answer: 0,
			ko: '약국은 8시에 닫지 않나요?',
			optionsKo: ['아니요, 10시까지 열어요.', '여기에서 아주 가까워요.', '여덟 명이요.'],
			why: 'not을 빼고 "약국이 8시에 닫나요?"로 생각합니다. 8시가 아니므로 No로 답하고 실제 시간을 말한 (A)가 정답입니다.',
			notes: [
				'No + 실제 시간 (정답)',
				'close(닫다)와 철자가 같은 close(가까운)',
				'eight 반복 — 질문과 무관'
			],
			vocab: [
				['pharmacy', '약국'],
				['stay open', '계속 열려 있다'],
				['close to', '~에 가까운']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd19-23',
			script: "You sent the invoice to the client, didn't you?",
			options: ['She has a lovely voice.', 'Yes, on Monday afternoon.', 'A list of clients.'],
			answer: 1,
			ko: '고객에게 청구서를 보내셨죠, 그렇지 않나요?',
			optionsKo: ['그녀는 목소리가 좋아요.', '네, 월요일 오후에 보냈어요.', '고객 명단이에요.'],
			why: '꼬리를 떼면 "청구서를 보냈나요?"입니다. Yes로 답하고 보낸 때를 덧붙인 (B)가 정답입니다.',
			notes: [
				'invoice와 발음이 비슷한 voice',
				'Yes + 덧붙이는 말 (정답)',
				'client 반복 — 질문과 무관'
			],
			vocab: [
				['invoice', '청구서'],
				['client', '고객']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd19-24',
			script: 'Is there a post office near here?',
			options: [
				'There is one across the street.',
				'I posted it online.',
				'He lives near his office.'
			],
			answer: 0,
			ko: '이 근처에 우체국이 있나요?',
			optionsKo: [
				'길 건너편에 하나 있어요.',
				'제가 온라인에 올렸어요.',
				'그는 사무실 근처에 살아요.'
			],
			why: '우체국이 있는지 물었습니다. Yes 없이 위치를 알려 준 (A)가 정답입니다.',
			notes: [
				'위치 안내 (정답)',
				'post(우편)와 철자가 같은 post(게시하다)',
				'near, office 반복 — 질문과 무관'
			],
			vocab: [
				['post office', '우체국'],
				['near here', '이 근처에'],
				['across the street', '길 건너편에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd19-25',
			script: "Mr. Yang hasn't left for the airport yet, has he?",
			options: ['On the left side.', 'The flight was full.', 'No, he is still in his office.'],
			answer: 2,
			ko: '양 씨는 아직 공항으로 출발하지 않았죠, 그렇죠?',
			optionsKo: ['왼쪽에요.', '비행기가 만석이었어요.', '네, 아직 사무실에 있어요.'],
			why: 'not을 빼고 "공항으로 출발했나요?"로 생각합니다. 출발하지 않았으므로 No로 답하고 아직 사무실에 있다고 말한 (C)가 정답입니다. 우리말로는 "네"가 됩니다.',
			notes: [
				'left(떠났다)와 철자가 같은 left(왼쪽)',
				'airport에서 떠오르는 flight',
				'No + 덧붙이는 말 (정답)'
			],
			vocab: [
				['leave for', '~로 출발하다'],
				['yet', '아직'],
				['still', '아직, 여전히']
			]
		}
	]
} satisfies DayContent;
