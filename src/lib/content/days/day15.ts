import type { DayContent } from '../schema';

export default {
	goals: [
		'선행사가 사람인지 사물인지 보고 관계대명사를 고른다',
		'빈칸 뒤가 동사인지 명사인지 보고 who / which와 whose를 구분한다',
		'의문사 없는 질문과 평서문의 유형별 응답을 정리한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '관계대명사: 명사를 꾸미는 문장을 이어 준다',
			blocks: [
				{
					type: 'p',
					text: '관계대명사는 **앞의 명사를 꾸미는 문장**을 이어 주는 말입니다. 꾸밈을 받는 앞의 명사를 **선행사**라고 합니다.'
				},
				{
					type: 'examples',
					items: [
						{
							en: 'I met a woman. + She runs a bakery.',
							ko: '나는 한 여자를 만났다. + 그녀는 빵집을 운영한다.',
							note: '두 문장에 같은 사람이 나옴'
						},
						{
							en: 'I met a woman ==who== runs a bakery.',
							ko: '나는 빵집을 운영하는 여자를 만났다.',
							note: 'She 대신 who를 써서 한 문장으로 이음'
						}
					]
				},
				{
					type: 'table',
					head: ['선행사', '관계대명사', '예'],
					rows: [
						['사람', 'who / that', 'the guide ==who== speaks Korean'],
						['사물', 'which / that', 'the train ==which== stops at every station']
					]
				},
				{
					type: 'tip',
					text: 'that은 사람과 사물 뒤에 모두 쓸 수 있습니다. who와 which 대신 쓰는 말로 알아 두세요.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '고르는 순서: 선행사 → 빈칸 뒤',
			blocks: [
				{
					type: 'box',
					title: '고르는 순서',
					items: ['① 선행사가 **사람**인가 **사물**인가', '② 빈칸 뒤가 **동사**인가 **명사**인가']
				},
				{
					type: 'table',
					head: ['선행사', '빈칸 뒤에 동사', '빈칸 뒤에 명사 ("~의")'],
					rows: [
						['사람', 'who / that', 'whose'],
						['사물', 'which / that', 'whose']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'a clerk ==who== works on weekends',
							ko: '주말에 근무하는 점원',
							note: '사람 + 동사 works → who'
						},
						{
							en: 'a store ==which== sells used books',
							ko: '중고 책을 파는 가게',
							note: '사물 + 동사 sells → which'
						},
						{
							en: 'a clerk ==whose== shift ends at six',
							ko: '근무가 6시에 끝나는 점원',
							note: '뒤에 명사 shift, "점원의 근무" → whose'
						}
					]
				},
				{
					type: 'tip',
					text: 'whom은 사람 선행사 뒤에서 **전치사 + whom** 모양으로 나옵니다. — the client ==with whom== we met'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '관계대명사가 답이 아닌 경우',
			blocks: [
				{
					type: 'p',
					text: '보기에 who, which가 있어도 관계대명사가 정답이 아닐 수 있습니다. 빈칸 앞뒤를 끝까지 확인하세요.'
				},
				{
					type: 'box',
					title: '접속사가 있으면 대명사',
					items: [
						'and, but, because 같은 **접속사**가 이미 두 문장을 잇고 있으면 관계대명사를 쓰지 않습니다.',
						'We visited two factories, but ==they== were closed. (which ✕)',
						'The guests left early because ==their== flight was at six. (whose ✕)'
					]
				},
				{
					type: 'box',
					title: '관계대명사 뒤의 동사는 선행사에 맞춘다',
					items: [
						'a worker who ==lives== nearby — 선행사가 단수 → 동사에 -s',
						'workers who ==live== nearby — 선행사가 복수 → 동사원형'
					]
				},
				{
					type: 'tip',
					text: 'what은 앞에 선행사가 없을 때 씁니다. 명사 바로 뒤 빈칸에는 what을 고르지 않습니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The technician ------- repaired the heater will return tomorrow.',
			options: ['who', 'which', 'whose', 'he'],
			answer: 0,
			ko: '난방기를 수리한 기술자가 내일 다시 올 것입니다.',
			steps: [
				'보기에 who, which, whose가 있습니다. 관계대명사를 고르는 문제입니다.',
				'① 빈칸 앞 선행사는 **The technician**(기술자)으로 사람입니다. 사물에 쓰는 which는 지웁니다.',
				'② 빈칸 뒤에 동사 **repaired**가 옵니다. 뒤에 명사가 와야 하는 whose는 지웁니다.',
				'사람 선행사 뒤, 동사 앞이므로 정답은 (A) **who**입니다. he는 두 문장을 이어 주지 못합니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'We invited a writer ------- books are popular in Asia.',
			options: ['who', 'which', 'whose', 'whom'],
			answer: 2,
			ko: '우리는 책이 아시아에서 인기 있는 작가를 초대했습니다.',
			steps: [
				'① 빈칸 앞 선행사는 **a writer**(작가)로 사람입니다.',
				'② 빈칸 뒤에 명사 **books**가 옵니다. "그 작가의 책"이라는 뜻입니다.',
				'빈칸 뒤에 명사가 오고 "~의"라는 뜻이면 whose입니다. 정답은 (C) **whose**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-01',
			text: 'The clerk ------- helped me at the counter was very kind.',
			options: ['which', 'who', 'whose', 'what'],
			answer: 1,
			ko: '창구에서 저를 도와준 직원은 매우 친절했습니다.',
			why: '선행사 The clerk가 사람이고 빈칸 뒤에 동사 helped가 옵니다. 사람 선행사 뒤, 동사 앞이므로 who가 정답입니다.',
			notes: [
				'which — 선행사가 사물일 때 씀',
				'who (정답)',
				'whose — 뒤에 명사가 와야 함',
				'what — 선행사 뒤에 쓰지 않음'
			],
			vocab: [
				['clerk', '직원, 점원'],
				['counter', '창구, 계산대'],
				['kind', '친절한']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-02',
			text: 'The ferry ------- goes to the island leaves twice a day.',
			options: ['which', 'who', 'whose', 'it'],
			answer: 0,
			ko: '섬으로 가는 여객선은 하루에 두 번 출발합니다.',
			why: '선행사 The ferry가 사물이고 빈칸 뒤에 동사 goes가 옵니다. 사물 선행사 뒤, 동사 앞이므로 which가 정답입니다.',
			notes: [
				'which (정답)',
				'who — 선행사가 사람일 때 씀',
				'whose — 뒤에 명사가 와야 함',
				'it — 두 문장을 이어 주지 못함'
			],
			vocab: [
				['ferry', '여객선'],
				['island', '섬'],
				['twice a day', '하루에 두 번']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-03',
			text: 'The manager praised the employee ------- idea saved the company money.',
			options: ['who', 'which', 'whose', 'whom'],
			answer: 2,
			ko: '관리자는 아이디어로 회사 비용을 아껴 준 직원을 칭찬했습니다.',
			why: '빈칸 뒤에 명사 idea가 오고 "그 직원의 아이디어"라는 뜻입니다. 뒤에 명사가 오고 "~의"라는 뜻이면 whose입니다.',
			notes: [
				'who — "~의"라는 뜻이 없음',
				'which — 선행사가 사물일 때 씀',
				'whose (정답)',
				'whom — "~의"라는 뜻이 없음'
			],
			vocab: [
				['praise', '칭찬하다'],
				['save A money', 'A의 돈을 아껴 주다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-04',
			text: 'We are looking for a driver ------- knows the downtown area well.',
			options: ['whose', 'which', 'what', 'who'],
			answer: 3,
			ko: '저희는 시내 지리를 잘 아는 운전기사를 찾고 있습니다.',
			why: '선행사 a driver가 사람이고 빈칸 뒤에 동사 knows가 옵니다. who가 정답입니다.',
			notes: [
				'whose — 뒤에 명사가 와야 함',
				'which — 선행사가 사물일 때 씀',
				'what — 선행사 뒤에 쓰지 않음',
				'who (정답)'
			],
			vocab: [
				['look for', '~을 찾다'],
				['downtown area', '시내 지역'],
				['well', '잘']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-05',
			text: 'Please return the form ------- was mailed to you last week.',
			options: ['which', 'who', 'whose', 'whom'],
			answer: 0,
			ko: '지난주에 우편으로 보내 드린 양식을 돌려보내 주세요.',
			why: '선행사 the form이 사물이고 빈칸 뒤에 동사 was mailed가 옵니다. which가 정답입니다.',
			notes: [
				'which (정답)',
				'who — 선행사가 사람일 때 씀',
				'whose — 뒤에 명사가 와야 함',
				'whom — 선행사가 사람일 때 씀'
			],
			vocab: [
				['return', '돌려보내다'],
				['form', '양식'],
				['mail', '우편으로 보내다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-06',
			text: 'Mr. Novak tested the new scanners, and ------- worked without any problems.',
			options: ['which', 'who', 'they', 'whose'],
			answer: 2,
			ko: '노박 씨는 새 스캐너들을 시험했고, 그것들은 문제없이 작동했습니다.',
			why: '접속사 and가 이미 두 문장을 잇고 있습니다. 빈칸은 동사 worked의 주어 자리이므로 대명사 they가 정답입니다.',
			notes: [
				'which — 접속사 and가 있어 관계대명사를 쓸 수 없음',
				'who — 접속사 and가 있어 관계대명사를 쓸 수 없음',
				'they (정답)',
				'whose — 뒤에 명사가 와야 함'
			],
			vocab: [
				['test', '시험하다'],
				['scanner', '스캐너'],
				['without any problems', '문제없이']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-07',
			text: 'Guests ------- rooms are on the top floor can use the lounge.',
			options: ['who', 'whose', 'which', 'they'],
			answer: 1,
			ko: '방이 맨 위층에 있는 투숙객은 라운지를 이용할 수 있습니다.',
			why: '빈칸 뒤에 명사 rooms가 오고 "그 투숙객들의 방"이라는 뜻입니다. whose가 정답입니다.',
			notes: [
				'who — "~의"라는 뜻이 없음',
				'whose (정답)',
				'which — 선행사가 사물일 때 씀',
				'they — 두 문장을 이어 주지 못함'
			],
			vocab: [
				['guest', '투숙객'],
				['top floor', '맨 위층'],
				['lounge', '라운지, 휴게실']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-08',
			text: 'Ms. Ferrari is the architect ------- designed the city library.',
			options: ['whom', 'who', 'whose', 'which'],
			answer: 1,
			ko: '페라리 씨는 시립 도서관을 설계한 건축가입니다.',
			why: '선행사 the architect가 사람이고 빈칸 뒤에 동사 designed가 옵니다. who가 정답입니다.',
			notes: [
				'whom — 동사 앞 주어 자리에 쓸 수 없음',
				'who (정답)',
				'whose — 뒤에 명사가 와야 함',
				'which — 선행사가 사물일 때 씀'
			],
			vocab: [
				['architect', '건축가'],
				['design', '설계하다'],
				['city library', '시립 도서관']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-09',
			text: 'The company makes software ------- helps small stores track their sales.',
			options: ['who', 'whose', 'what', 'which'],
			answer: 3,
			ko: '그 회사는 작은 가게가 매출을 기록하도록 도와주는 소프트웨어를 만듭니다.',
			why: '선행사 software가 사물이고 빈칸 뒤에 동사 helps가 옵니다. which가 정답입니다.',
			notes: [
				'who — 선행사가 사람일 때 씀',
				'whose — 뒤에 명사가 와야 함',
				'what — 선행사 뒤에 쓰지 않음',
				'which (정답)'
			],
			vocab: [
				['software', '소프트웨어'],
				['track', '기록하다, 추적하다'],
				['sales', '매출']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-10',
			text: 'Mr. Ryu has an assistant who ------- three languages.',
			options: ['speaks', 'speak', 'speaking', 'to speak'],
			answer: 0,
			ko: '류 씨에게는 3개 국어를 하는 비서가 있습니다.',
			why: '보기가 모두 speak의 여러 모양입니다. who 뒤의 동사는 선행사에 맞춥니다. 선행사 an assistant가 단수이므로 speaks가 정답입니다.',
			notes: [
				'-s가 붙은 동사 (정답)',
				'동사원형 — 선행사가 복수일 때 씀',
				'-ing — 혼자서는 동사가 될 수 없음',
				'to부정사 — 동사 자리에 쓸 수 없음'
			],
			vocab: [
				['assistant', '비서, 조수'],
				['language', '언어']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-11',
			text: 'The person to ------- you spoke yesterday is our branch manager.',
			options: ['what', 'which', 'whom', 'whose'],
			answer: 2,
			ko: '어제 당신이 이야기를 나눈 사람은 우리 지점장입니다.',
			why: '빈칸 앞에 전치사 to가 있고 선행사 The person이 사람입니다. 전치사 바로 뒤에는 whom을 씁니다.',
			notes: [
				'what — 앞에 꾸밈을 받는 명사가 있으면 쓰지 않음',
				'which — 선행사가 사물일 때 씀',
				'whom (정답)',
				'whose — 뒤에 명사가 와야 함'
			],
			vocab: [
				['speak to', '~와 이야기하다'],
				['branch manager', '지점장']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-12',
			text: 'Customers ------- bring this coupon will receive a free drink.',
			options: ['which', 'whose', 'they', 'who'],
			answer: 3,
			ko: '이 쿠폰을 가져오는 고객은 무료 음료를 받습니다.',
			why: '선행사 Customers가 사람이고 빈칸 뒤에 동사 bring이 옵니다. who가 정답입니다.',
			notes: [
				'which — 선행사가 사물일 때 씀',
				'whose — 뒤에 명사가 와야 함',
				'they — 두 문장을 이어 주지 못함',
				'who (정답)'
			],
			vocab: [
				['bring', '가져오다'],
				['coupon', '쿠폰'],
				['free drink', '무료 음료']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-13',
			text: 'The engineers finished early because ------- manager helped them.',
			options: ['whose', 'their', 'who', 'which'],
			answer: 1,
			ko: '엔지니어들은 관리자가 도와주어서 일찍 끝냈습니다.',
			why: '접속사 because가 이미 두 문장을 잇고 있습니다. 빈칸은 명사 manager 앞에서 "그들의"라는 뜻을 나타내는 자리이므로 their가 정답입니다.',
			notes: [
				'whose — 접속사 because가 있어 관계대명사를 쓸 수 없음',
				'their (정답)',
				'who — 접속사 because가 있어 관계대명사를 쓸 수 없음',
				'which — 접속사 because가 있어 관계대명사를 쓸 수 없음'
			],
			vocab: [
				['finish early', '일찍 끝내다'],
				['because', '~ 때문에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-14',
			text: 'Ms. Woo works for a company ------- products are sold in forty countries.',
			options: ['whose', 'which', 'who', 'what'],
			answer: 0,
			ko: '우 씨는 제품이 40개국에서 판매되는 회사에서 일합니다.',
			why: '빈칸 뒤에 명사 products가 오고 "그 회사의 제품"이라는 뜻입니다. 선행사가 사물이어도 "~의"라는 뜻이면 whose를 씁니다.',
			notes: [
				'whose (정답)',
				'which — "~의"라는 뜻이 없음',
				'who — 선행사가 사람일 때 씀',
				'what — 선행사 뒤에 쓰지 않음'
			],
			vocab: [
				['work for', '~에서 일하다'],
				['product', '제품'],
				['be sold', '판매되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd15-15',
			text: 'Mr. Okafor bought a printer ------- requires very little ink.',
			options: ['who', 'whose', 'which', 'whom'],
			answer: 2,
			ko: '오카포 씨는 잉크가 아주 적게 드는 프린터를 샀습니다.',
			why: '선행사 a printer가 사물이고 빈칸 뒤에 동사 requires가 옵니다. which가 정답입니다.',
			notes: [
				'who — 선행사가 사람일 때 씀',
				'whose — 뒤에 명사가 와야 함',
				'which (정답)',
				'whom — 선행사가 사람일 때 씀'
			],
			vocab: [
				['require', '필요로 하다'],
				['very little', '아주 적은'],
				['ink', '잉크']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: '의문사 없는 질문과 평서문 정리',
			blocks: [
				{
					type: 'p',
					text: '첫 단어가 의문사가 아니면 **일반 의문문, 부정·부가 의문문, 선택 의문문, 제안·요청, 평서문** 가운데 하나입니다. 유형마다 답하는 법이 다릅니다.'
				},
				{
					type: 'table',
					head: ['유형', '답하는 법', '예'],
					rows: [
						[
							'일반 의문문',
							'Yes / No + 덧붙임, 또는 Yes / No 없이 답함',
							'Is Mr. Cha in a meeting? — Yes, until three. / He just came out.'
						],
						[
							'부정·부가 의문문',
							'not을 빼고 생각함. 맞으면 Yes, 아니면 No',
							"Isn't Mr. Cha in a meeting? — No, he just came out."
						],
						[
							'선택 의문문',
							'하나를 고름 / either / whichever',
							'Should I call or send an e-mail? — Call, please. / Either works for me. / Whichever is easier.'
						],
						[
							'제안·요청',
							'수락 / 거절',
							"Could you check this form? — Sure, let me see. / Sorry, I'm about to leave."
						],
						[
							'평서문',
							'동의 / 해결책 / 되묻기',
							"The printer is out of paper. — I noticed that, too. / I'll get some. / Again?"
						]
					]
				},
				{
					type: 'box',
					title: '유형을 알아보는 신호',
					items: [
						'Do / Is / Have / Will로 시작 → 일반 의문문',
						"Don't / Isn't로 시작하거나 끝에 ~, isn't it?이 붙음 → 부정·부가 의문문",
						'문장 가운데 **or**가 들림 → 선택 의문문',
						"Could you / Would you / Shall we / Why don't we로 시작 → 제안·요청",
						'주어로 시작하고 묻는 말이 없음 → 평서문'
					]
				},
				{
					type: 'tip',
					text: 'Yes / No로 시작해도 뒤의 내용이 질문과 맞아야 정답입니다. 선택 의문문에는 Yes / No로 답하지 않습니다.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'The air conditioner in the lobby is making a strange noise.',
			options: [
				"I'll call the maintenance office.",
				'Turn left at the lobby.',
				'Yes, I made it myself.'
			],
			answer: 0,
			ko: '로비의 에어컨에서 이상한 소리가 나요.',
			optionsKo: [
				'시설 관리실에 전화할게요.',
				'로비에서 왼쪽으로 도세요.',
				'네, 제가 직접 만들었어요.'
			],
			steps: [
				'의문사도 Do / Is도 없이 **The air conditioner**로 시작합니다. 질문이 아니라 문제를 알리는 평서문입니다.',
				'(B)는 lobby가 다시 들리지만 길을 알려 주는 말입니다. 에어컨 이야기가 아니므로 지웁니다.',
				'(C)는 Yes로 시작하고 making과 비슷한 made를 썼지만 내용이 관계없습니다. 지웁니다.',
				'(A)는 문제에 대한 **해결책**을 말했습니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-16',
			script: 'Is the cafeteria open on Saturdays?',
			options: ['A cup of coffee, please.', 'Yes, but only until two.', 'On the ground floor.'],
			answer: 1,
			ko: '구내식당은 토요일에 문을 여나요?',
			optionsKo: ['커피 한 잔 주세요.', '네, 하지만 2시까지만요.', '1층에요.'],
			why: '토요일에 여는지 묻는 일반 의문문입니다. Yes로 답하고 "2시까지만"이라고 덧붙인 (B)가 정답입니다.',
			notes: ['cafeteria에서 떠오르는 주문 표현', 'Yes + 덧붙임 (정답)', '장소 — Where에 대한 답'],
			vocab: [
				['cafeteria', '구내식당'],
				['only until two', '2시까지만'],
				['ground floor', '1층']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-17',
			script: "Hasn't the delivery arrived yet?",
			options: [
				"No, it's been delayed until tomorrow.",
				'To the shipping department.',
				"There's a delivery fee."
			],
			answer: 0,
			ko: '배송이 아직 도착하지 않았나요?',
			optionsKo: ['네, 내일로 미뤄졌어요.', '배송 부서로요.', '배송비가 있어요.'],
			why: 'not을 빼면 "배송이 도착했나요?"입니다. 도착하지 않았으므로 No로 답하고 이유를 덧붙인 (A)가 정답입니다.',
			notes: ['No + 이유 (정답)', '도착지 — Where에 대한 답', 'delivery 반복 — 질문과 무관'],
			vocab: [
				['delivery', '배송(품)'],
				['be delayed', '미뤄지다, 지연되다'],
				['fee', '요금']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-18',
			script: 'Shall we go over the slides one more time?',
			options: [
				'Yes, I went there once.',
				"It's over there.",
				"Sure, let's start from the beginning."
			],
			answer: 2,
			ko: '슬라이드를 한 번 더 검토할까요?',
			optionsKo: ['네, 거기에 한 번 가 봤어요.', '저쪽에 있어요.', '좋아요, 처음부터 시작합시다.'],
			why: 'Shall we ~?는 "~할까요?" 하고 제안하는 말입니다. Sure로 수락한 (C)가 정답입니다.',
			notes: [
				'Yes로 시작했지만 내용이 무관, go의 과거형 went',
				'over 반복 — 질문과 무관',
				'수락 (정답)'
			],
			vocab: [
				['Shall we ~?', '~할까요?'],
				['go over', '검토하다'],
				['from the beginning', '처음부터']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-19',
			script: 'The invoice has the wrong company name on it.',
			options: [
				"I'll print a corrected one right away.",
				"It's a well-known company.",
				'Please write your name here.'
			],
			answer: 0,
			ko: '청구서에 회사 이름이 잘못 적혀 있어요.',
			optionsKo: ['바로 고친 것을 출력할게요.', '잘 알려진 회사예요.', '여기에 이름을 써 주세요.'],
			why: '청구서에 잘못된 점이 있다는 평서문입니다. 고친 것을 출력하겠다고 해결책을 말한 (A)가 정답입니다. 평서문에는 해결책을 말하는 응답이 자주 나옵니다.',
			notes: ['해결책을 말함 (정답)', 'company 반복 — 질문과 무관', 'name 반복 — 질문과 무관'],
			vocab: [
				['invoice', '청구서'],
				['wrong', '잘못된'],
				['corrected', '수정된']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-20',
			script: 'Do you know how to change the toner?',
			options: [
				'I have some change.',
				'Ms. Hwang showed me yesterday.',
				'Ten color copies, please.'
			],
			answer: 1,
			ko: '토너를 교체하는 방법을 아세요?',
			optionsKo: ['잔돈이 좀 있어요.', '황 씨가 어제 알려 줬어요.', '컬러 복사 10부 부탁해요.'],
			why: 'Yes 없이 "황 씨가 어제 알려 줬다"고 답해 방법을 안다는 뜻을 전한 (B)가 정답입니다.',
			notes: [
				'change(교체하다)와 철자가 같은 change(잔돈)',
				'Yes 없이 안다는 뜻을 전함 (정답)',
				'toner에서 떠오르는 복사 이야기'
			],
			vocab: [
				['how to', '~하는 방법'],
				['change', '교체하다'],
				['show', '알려 주다, 보여 주다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-21',
			script: 'Would you like a paper receipt or an e-mail copy?',
			options: [
				"Yes, I'd like that.",
				'Next to the cash register.',
				'Just send it to my e-mail, please.'
			],
			answer: 2,
			ko: '종이 영수증을 드릴까요, 이메일로 보내 드릴까요?',
			optionsKo: ['네, 그렇게 해 주세요.', '계산대 옆에요.', '제 이메일로 보내 주세요.'],
			why: '종이 영수증과 이메일 가운데 이메일을 고른 (C)가 정답입니다. 선택 의문문에는 Yes / No로 답하지 않습니다.',
			notes: [
				'Yes로 시작 — 선택 의문문에 맞지 않음',
				'장소 — Where에 대한 답',
				'둘 중 하나를 고름 (정답)'
			],
			vocab: [
				['receipt', '영수증'],
				['copy', '사본'],
				['cash register', '계산대']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-22',
			script: "You ordered the name tags, didn't you?",
			options: [
				"Yes, they'll be here on Wednesday.",
				'In alphabetical order.',
				'My name is on the list.'
			],
			answer: 0,
			ko: '이름표를 주문하셨죠?',
			optionsKo: ['네, 수요일에 도착할 거예요.', '알파벳 순서로요.', '제 이름이 명단에 있어요.'],
			why: '주문한 것이 맞으므로 Yes로 답하고 도착하는 날을 덧붙인 (A)가 정답입니다.',
			notes: [
				'Yes + 덧붙임 (정답)',
				'order(주문하다)와 철자가 같은 order(순서)',
				'name 반복 — 질문과 무관'
			],
			vocab: [
				['name tag', '이름표'],
				['in alphabetical order', '알파벳 순서로'],
				['list', '명단']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-23',
			script: 'Could you drop off this package at the post office?',
			options: [
				'The office is on the third floor.',
				'I dropped my phone.',
				"Sorry, I'm not going that way today."
			],
			answer: 2,
			ko: '이 소포를 우체국에 맡겨 주실 수 있나요?',
			optionsKo: [
				'사무실은 3층에 있어요.',
				'전화기를 떨어뜨렸어요.',
				'죄송해요, 오늘은 그쪽으로 안 가요.'
			],
			why: 'Could you ~?는 부탁하는 말입니다. Sorry로 거절하고 이유를 말한 (C)가 정답입니다.',
			notes: [
				'office 반복 — 질문과 무관',
				'drop off(맡기다)와 비슷한 drop(떨어뜨리다)',
				'거절 + 이유 (정답)'
			],
			vocab: [
				['drop off', '맡기다, 갖다 놓다'],
				['package', '소포'],
				['post office', '우체국']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-24',
			script: 'Ms. Baek is being transferred to the Jeju office next month.',
			options: [
				'I transferred the money yesterday.',
				'Oh, when is her last day here?',
				'About an hour by plane.'
			],
			answer: 1,
			ko: '백 씨가 다음 달에 제주 사무실로 전근 간대요.',
			optionsKo: [
				'어제 돈을 이체했어요.',
				'아, 여기서 마지막 근무일이 언제예요?',
				'비행기로 한 시간 정도요.'
			],
			why: '백 씨가 전근 간다는 평서문입니다. "마지막 근무일이 언제인가요?" 하고 되물은 (B)가 정답입니다. 평서문에는 되묻는 응답도 정답이 됩니다.',
			notes: [
				'transfer(전근시키다)와 철자가 같은 transfer(이체하다)',
				'되묻기 (정답)',
				'걸리는 시간 — How long에 대한 답'
			],
			vocab: [
				['be transferred to', '~로 전근 가다'],
				['last day', '마지막 근무일'],
				['by plane', '비행기로']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd15-25',
			script: 'Have you tried the new Italian restaurant across the street?',
			options: [
				"Not yet, but I've heard it's good.",
				'Cross at the traffic light.',
				"Yes, I'm trying my best."
			],
			answer: 0,
			ko: '길 건너편에 새로 생긴 이탈리아 식당에 가 보셨어요?',
			optionsKo: [
				'아직요, 하지만 좋다고 들었어요.',
				'신호등에서 건너세요.',
				'네, 최선을 다하고 있어요.'
			],
			why: '가 봤는지 묻는 질문에 Not yet(아직 아니다)으로 답하고 들은 이야기를 덧붙인 (A)가 정답입니다.',
			notes: [
				'Not yet + 덧붙임 (정답)',
				'across와 비슷한 cross',
				'Yes로 시작했지만 내용이 무관, try(노력하다)'
			],
			vocab: [
				['try', '(식당에) 가 보다'],
				['across the street', '길 건너편에'],
				['Not yet', '아직 아니다']
			]
		}
	]
} satisfies DayContent;
