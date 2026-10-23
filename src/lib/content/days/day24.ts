import type { DayContent } from '../schema';

export default {
	goals: [
		'보기 모양을 보고 문법 문제와 어휘 문제를 가려낸다',
		'Part 6의 빈칸 네 종류를 구분해 푼다',
		'Part 2의 모든 질문 유형에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '보기를 보면 문제 유형이 보입니다',
			blocks: [
				{
					type: 'p',
					text: '문장을 읽기 전에 **보기 네 개의 모양**부터 봅니다. 모양에 따라 문제 유형이 정해지고, 유형에 따라 봐야 할 곳이 정해집니다.'
				},
				{
					type: 'table',
					head: ['보기 모양', '문제 유형', '봐야 할 곳'],
					rows: [
						[
							'같은 뿌리의 다른 형태 — decide / decision / decisive / decisively',
							'품사',
							'빈칸 **앞뒤 한두 단어**'
						],
						[
							'같은 동사의 다른 모양 — sends / sent / is sent / sending',
							'수·시제·태',
							'**주어**, **시간 표현**, **목적어가 있는지**'
						],
						[
							'전치사와 접속사 — during / while / despite / although',
							'전치사·접속사',
							'빈칸 **뒤의 구조**(명사인지, 주어 + 동사인지)와 뜻'
						],
						[
							'뜻이 다른 같은 품사 — refund / receipt / deadline / policy',
							'어휘',
							'빈칸 **앞뒤의 짝**과 문장 전체의 뜻'
						]
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'① 보기를 보고 유형을 정합니다.',
						'② 그 유형에서 봐야 할 곳만 봅니다.',
						'③ 문법 문제는 문장을 다 해석하지 않아도 풀립니다. 어휘 문제만 문장의 뜻을 확인합니다.'
					]
				},
				{
					type: 'tip',
					text: '대명사(he / his / him / himself)와 관계대명사(who / which / whose)도 보기 모양으로 바로 알 수 있습니다. 대명사는 빈칸의 자리를, 관계대명사는 빈칸 앞의 명사를 봅니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '문법 주제별 한 줄 정리',
			blocks: [
				{
					type: 'p',
					text: '1단계에서 배운 문법을 한 줄씩 정리했습니다. 문제를 풀다가 막히면 이 표로 돌아오세요.'
				},
				{
					type: 'table',
					head: ['주제', '한 줄 정리'],
					rows: [
						['품사', '관사·형용사 뒤는 **명사**, 명사 앞은 **형용사**, 완성된 문장에는 **부사**'],
						['대명사', '명사 앞은 소유격, 동사·전치사 뒤는 목적격'],
						['수 일치', '꾸미는 말을 빼고 진짜 주어를 봄. 단수 주어면 동사에 -s'],
						['시제', 'last ~ / ago는 과거, next ~는 미래, since ~는 현재완료'],
						['능동·수동', '뒤에 목적어가 있으면 능동, 없으면 수동(be + 과거분사)'],
						[
							'to부정사·동명사',
							'plan / agree 뒤는 to, enjoy / consider 뒤는 -ing, 전치사 뒤는 -ing'
						],
						['분사', '명사가 직접 하면 -ing, 당하면 -ed'],
						['전치사·접속사', '명사 앞은 전치사, 주어 + 동사 앞은 접속사'],
						['관계대명사', '사람 뒤는 who, 사물 뒤는 which, 뒤에 명사가 오면 whose'],
						['비교급', 'than 앞은 비교급, the ~ of / in은 최상급']
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The new assistant answers every customer call -------.',
			options: ['polite', 'politely', 'politeness', 'politest'],
			answer: 1,
			ko: '새 비서는 모든 고객 전화를 공손하게 받습니다.',
			steps: [
				'보기가 polite에서 나온 **같은 뿌리의 다른 형태**입니다. 품사 문제입니다.',
				'품사 문제는 빈칸 앞뒤만 봅니다. 빈칸 앞에 주어(The new assistant), 동사(answers), 목적어(every customer call)가 모두 있습니다.',
				'문장이 이미 완성되었습니다. 완성된 문장에 덧붙는 말은 **부사**입니다.',
				'부사는 -ly가 붙은 politely입니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Ms. Kang will ------- the conference in Singapore next month.',
			options: ['attend', 'participate', 'arrive', 'go'],
			answer: 0,
			ko: '강 씨는 다음 달 싱가포르에서 열리는 회의에 참석할 것입니다.',
			steps: [
				'보기가 모두 동사원형이고 **뜻이 서로 다릅니다.** 어휘 문제입니다.',
				'어휘 문제는 빈칸 앞뒤의 짝을 봅니다. 빈칸 뒤에 전치사 없이 바로 **the conference**가 옵니다.',
				'participate in, arrive at, go to는 전치사가 있어야 뒤에 명사가 옵니다.',
				'전치사 없이 바로 목적어를 갖는 동사는 attend(참석하다)입니다. 정답은 (A)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-01',
			text: 'The design team came up with a very ------- idea for the new package.',
			options: ['create', 'creation', 'creative', 'creatively'],
			answer: 2,
			ko: '디자인팀은 새 포장에 대해 매우 창의적인 아이디어를 생각해 냈습니다.',
			why: '보기가 같은 뿌리의 다른 형태이므로 품사 문제입니다. 부사 very와 명사 idea 사이는 명사를 꾸미는 형용사 자리이므로 creative가 정답입니다.',
			notes: ['동사', '명사', '형용사 (정답)', '부사'],
			vocab: [
				['creative', '창의적인'],
				['come up with', '~을 생각해 내다'],
				['package', '포장']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-02',
			text: 'The ------- for the marketing position will be interviewed next week.',
			options: ['candidates', 'customers', 'passengers', 'tenants'],
			answer: 0,
			ko: '마케팅 직책의 지원자들은 다음 주에 면접을 봅니다.',
			why: '보기가 모두 명사이고 뜻이 다르므로 어휘 문제입니다. 직책(position)에 지원해 면접을 보는 사람은 candidates(지원자)입니다.',
			notes: ['지원자 (정답)', '고객', '승객', '세입자'],
			vocab: [
				['candidate', '지원자, 후보자'],
				['position', '직책'],
				['interview', '면접을 보다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-03',
			text: 'The boxes in the storage room ------- old sales records.',
			options: ['contains', 'contain', 'containing', 'is contained'],
			answer: 1,
			ko: '창고에 있는 상자들에는 오래된 판매 기록이 들어 있습니다.',
			why: '보기가 같은 동사의 다른 모양이므로 주어를 봅니다. 주어는 빈칸 바로 앞의 room이 아니라 복수인 The boxes입니다. -s가 없는 contain이 정답입니다.',
			notes: [
				'-s가 붙은 동사 — 단수 주어에 씀',
				'복수 주어에 맞는 동사 (정답)',
				'-ing형 — 동사가 될 수 없음',
				'수동태 — 단수형이고 뒤에 목적어가 있음'
			],
			vocab: [
				['contain', '~이 들어 있다'],
				['storage room', '창고'],
				['record', '기록']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-04',
			text: 'Mr. Seong ------- the Daejeon branch since it opened in 2021.',
			options: ['manages', 'will manage', 'managing', 'has managed'],
			answer: 3,
			ko: '성 씨는 대전 지점이 2021년에 문을 연 뒤로 계속 그곳을 관리해 왔습니다.',
			why: '보기가 같은 동사의 다른 모양이고 시간 표현 since(~ 이후로)가 있습니다. 과거부터 지금까지 이어지는 일이므로 현재완료 has managed가 정답입니다.',
			notes: ['현재', '미래', '-ing형 — 동사가 될 수 없음', '현재완료 (정답)'],
			vocab: [
				['manage', '관리하다'],
				['branch', '지점'],
				['since', '~ 이후로']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-05',
			text: 'Ms. Hoffman will ------- the new interns to the rest of the team on Monday.',
			options: ['increase', 'introduce', 'include', 'install'],
			answer: 1,
			ko: '호프먼 씨는 월요일에 새 인턴들을 나머지 팀원들에게 소개할 것입니다.',
			why: '보기가 모두 동사이고 뜻이 다르므로 어휘 문제입니다. introduce A to B는 "A를 B에게 소개하다"입니다. 새 인턴과 팀원이라는 말과 뜻이 맞습니다.',
			notes: ['늘리다', '소개하다 (정답)', '포함하다', '설치하다'],
			vocab: [
				['introduce A to B', 'A를 B에게 소개하다'],
				['intern', '인턴'],
				['the rest of', '~의 나머지']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-06',
			text: 'The instructions were so ------- that nobody could put the shelf together.',
			options: ['confusing', 'simple', 'helpful', 'clear'],
			answer: 0,
			ko: '설명서가 너무 헷갈려서 아무도 선반을 조립하지 못했습니다.',
			why: '보기가 모두 형용사이고 뜻이 다르므로 어휘 문제입니다. 아무도 조립하지 못한 이유가 되어야 하므로 confusing(헷갈리는)이 정답입니다.',
			notes: [
				'헷갈리는 (정답)',
				'간단한 — 결과와 반대',
				'도움이 되는 — 결과와 반대',
				'분명한 — 결과와 반대'
			],
			vocab: [
				['instructions', '설명서'],
				['confusing', '헷갈리는'],
				['put together', '조립하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-07',
			text: "Two hundred guests ------- to the company's anniversary dinner last night.",
			options: ['invited', 'inviting', 'have invited', 'were invited'],
			answer: 3,
			ko: '어젯밤 회사 창립 기념 만찬에 손님 200명이 초대되었습니다.',
			why: '보기가 같은 동사의 다른 모양입니다. 빈칸 뒤에 목적어가 없고, 손님은 초대를 "받는" 쪽이므로 수동태 were invited가 정답입니다.',
			notes: [
				'능동 과거 — 뒤에 목적어가 필요함',
				'-ing형 — 동사가 될 수 없음',
				'능동 현재완료 — 뒤에 목적어가 필요함',
				'수동태 (정답)'
			],
			vocab: [
				['invite', '초대하다'],
				['anniversary', '기념일'],
				['guest', '손님']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-08',
			text: 'The concert sold out ------- after tickets went on sale.',
			options: ['carefully', 'politely', 'immediately', 'equally'],
			answer: 2,
			ko: '그 콘서트는 입장권 판매가 시작된 직후에 매진되었습니다.',
			why: '보기가 모두 부사이고 뜻이 다르므로 어휘 문제입니다. immediately after는 "~한 직후에"라는 짝입니다.',
			notes: ['주의 깊게', '공손하게', '즉시 (정답)', '똑같이'],
			vocab: [
				['sell out', '매진되다'],
				['immediately after', '~한 직후에'],
				['go on sale', '판매가 시작되다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-09',
			text: 'Ms. Lindgren asked for an ------- of the deadline because the data arrived late.',
			options: ['extension', 'expression', 'exhibition', 'expense'],
			answer: 0,
			ko: '린드그렌 씨는 자료가 늦게 도착해서 마감 연장을 요청했습니다.',
			why: '보기가 모두 명사이고 뜻이 다르므로 어휘 문제입니다. 자료가 늦게 와서 요청한 것은 마감 "연장"입니다. an extension of the deadline은 "마감 연장"입니다.',
			notes: ['연장 (정답)', '표현', '전시회', '비용'],
			vocab: [
				['extension', '연장'],
				['ask for', '~을 요청하다'],
				['deadline', '마감'],
				['data', '자료']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-10',
			text: '------- the two-hour delay, all passengers received a meal coupon.',
			options: ['Because', 'Because of', 'Although', 'While'],
			answer: 1,
			ko: '두 시간 지연 때문에 모든 승객이 식사 쿠폰을 받았습니다.',
			why: '보기가 전치사와 접속사이므로 빈칸 뒤의 구조를 봅니다. 뒤에 주어 + 동사 없이 명사(the two-hour delay)만 있으므로 전치사 Because of가 정답입니다.',
			notes: [
				'접속사 — 뒤에 주어 + 동사가 필요함',
				'전치사 (정답)',
				'접속사 — 뒤에 주어 + 동사가 필요함',
				'접속사 — 뒤에 주어 + 동사가 필요함'
			],
			vocab: [
				['because of', '~ 때문에'],
				['delay', '지연'],
				['passenger', '승객'],
				['meal coupon', '식사 쿠폰']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-11',
			text: 'The supplier agreed ------- the missing parts by Wednesday.',
			options: ['deliver', 'delivering', 'delivered', 'to deliver'],
			answer: 3,
			ko: '공급업체는 빠진 부품을 수요일까지 배송하기로 동의했습니다.',
			why: '보기가 같은 동사의 다른 모양이고 빈칸 앞에 동사 agreed가 있습니다. agree는 뒤에 to부정사가 오는 동사이므로 to deliver가 정답입니다.',
			notes: [
				'동사원형 — 동사 agreed가 이미 있음',
				'-ing형 — agree 뒤에 오지 않음',
				'과거형 — 동사 agreed가 이미 있음',
				'to부정사 (정답)'
			],
			vocab: [
				['agree to', '~하기로 동의하다'],
				['supplier', '공급업체'],
				['missing', '빠진, 없어진'],
				['part', '부품']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd24-12',
			text: 'Ms. Castillo will ------- the company at the trade show in Berlin.',
			options: ['respond', 'remain', 'represent', 'result'],
			answer: 2,
			ko: '카스티요 씨는 베를린 무역 박람회에서 회사를 대표할 것입니다.',
			why: '보기가 모두 동사이고 뜻이 다르므로 어휘 문제입니다. 박람회에서 회사를 "대표하다"라는 뜻의 represent가 정답입니다. 나머지는 the company를 목적어로 가질 수 없습니다.',
			notes: [
				'응답하다 — respond to로 씀',
				'남아 있다',
				'대표하다 (정답)',
				'결과가 되다 — result in으로 씀'
			],
			vocab: [
				['represent', '대표하다'],
				['trade show', '무역 박람회']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 6 정리: 빈칸은 네 종류입니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 6의 빈칸은 네 종류입니다. 종류에 따라 **어디까지 읽어야 하는지**가 다릅니다.'
				},
				{
					type: 'table',
					head: ['빈칸 종류', '보기 모양', '봐야 할 곳'],
					rows: [
						['문법', '같은 단어의 다른 형태', '빈칸 앞뒤. 시제와 대명사는 **앞 문장**까지'],
						['어휘', '뜻이 다른 같은 품사', '빈칸 앞뒤의 짝과 **글 전체의 주제**'],
						[
							'접속부사',
							'However / Therefore / In addition',
							'**앞 문장과 뒤 문장의 관계** (반대, 결과, 추가)'
						],
						['문장 삽입', '완전한 문장 네 개', '**빈칸 바로 앞뒤 문장**. 대명사와 연결어가 단서']
					]
				},
				{
					type: 'box',
					title: '푸는 순서',
					items: [
						'지문 종류와 제목을 먼저 봅니다. 이메일은 보내는 사람과 받는 사람, 기사는 제목이 주제를 알려 줍니다.',
						'처음부터 읽으면서 빈칸이 나올 때마다 풉니다. 빈칸이 있는 문장만 골라 읽지 않습니다.',
						'문장 삽입은 보기의 **they, each, this, however** 같은 말이 앞 문장과 이어지는지 확인합니다.'
					]
				},
				{
					type: 'tip',
					text: '문장 삽입이 막히면 표시만 해 두고 다음 빈칸으로 넘어가세요. 지문을 끝까지 읽고 나면 풀리는 경우가 많습니다.'
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
						['To', 'Carla Mendes'],
						['From', 'Taeho Min, Moonbridge Theater'],
						['Subject', 'Your lost bag']
					],
					body: [
						'Dear Ms. Mendes,',
						'Thank you for contacting Moonbridge Theater about the bag you lost on Saturday. I am happy to tell you that one of our cleaners found {1} under a seat in row F.',
						'The bag is now at our front office. {2}, we can keep lost items for only two weeks. Please come to the office before June 20.',
						'The office is open from 10 A.M. to 6 P.M. every day. {3} We will need to see it before we {4} the bag to you.',
						'Taeho Min'
					],
					ko: [
						'멘데스 씨께,',
						'토요일에 잃어버리신 가방에 대해 문브리지 극장으로 연락해 주셔서 감사합니다. 저희 청소 직원 한 명이 F열 좌석 밑에서 가방을 찾았다는 기쁜 소식을 전해 드립니다.',
						'가방은 지금 저희 사무실에 있습니다. 그러나 분실물은 2주 동안만 보관할 수 있습니다. 6월 20일 전에 사무실로 와 주세요.',
						'사무실은 매일 오전 10시부터 오후 6시까지 엽니다. 사진이 있는 신분증을 잊지 마세요. 가방을 돌려 드리기 전에 신분증을 확인해야 합니다.',
						'민태호'
					]
				}
			],
			questions: [
				{
					id: 'd24-13',
					options: ['its', 'it', 'them', 'they'],
					answer: 1,
					why: '동사 found 뒤의 목적어 자리입니다. 앞 문장의 the bag(가방 하나)을 받으므로 단수 목적격 it이 정답입니다.',
					notes: [
						'소유격 — 뒤에 명사가 필요함',
						'단수 목적격 (정답)',
						'복수 목적격 — 가방은 하나임',
						'주격 — 목적어 자리에 올 수 없음'
					]
				},
				{
					id: 'd24-14',
					options: ['Therefore', 'For example', 'However', 'Similarly'],
					answer: 2,
					why: '앞 문장은 가방을 보관하고 있다는 좋은 소식이고, 뒤 문장은 2주 동안만 보관할 수 있다는 주의 사항입니다. 흐름이 바뀌므로 However(그러나)가 정답입니다.',
					notes: ['따라서 — 결과를 이끎', '예를 들어', '그러나 (정답)', '마찬가지로']
				},
				{
					id: 'd24-15',
					options: [
						'Please do not forget your photo ID.',
						'The show will begin at 7 P.M. tonight.',
						'Your new tickets were mailed last Friday.',
						'Our staff members wear blue uniforms.'
					],
					optionsKo: [
						'사진이 있는 신분증을 잊지 마세요.',
						'공연은 오늘 저녁 7시에 시작합니다.',
						'새 입장권은 지난 금요일에 우편으로 보냈습니다.',
						'저희 직원들은 파란색 유니폼을 입습니다.'
					],
					answer: 0,
					why: '빈칸 뒤 문장의 it이 가리키는 말이 빈칸에 있어야 합니다. 가방을 돌려주기 전에 "확인해야 하는 것"은 신분증이므로 (A)가 이어집니다. 나머지는 잃어버린 가방을 찾아가는 방법과 관계가 없습니다.'
				},
				{
					id: 'd24-16',
					options: ['repair', 'remove', 'receive', 'return'],
					answer: 3,
					why: '잃어버린 가방을 주인에게 "돌려주는" 상황입니다. return A to B는 "A를 B에게 돌려주다"입니다.',
					notes: ['수리하다', '치우다', '받다 — 방향이 반대', '돌려주다 (정답)']
				}
			],
			vocab: [
				['contact', '연락하다'],
				['lost item', '분실물'],
				['front office', '사무실'],
				['photo ID', '사진이 있는 신분증'],
				['return A to B', 'A를 B에게 돌려주다']
			]
		},
		{
			type: 'set',
			part: 6,
			label: '기사',
			passages: [
				{
					kind: '기사',
					title: 'Narae Foods to Open Factory in Ashford',
					body: [
						'Narae Foods, a maker of frozen meals, will open a factory in Ashford next spring. Meals {1} at the factory will be sold in stores across the country.',
						'The company already has two factories in the north, but the Ashford factory will be much {2} than either of them. It will need about 200 workers.',
						'Narae Foods will start hiring in January. {3}',
						'"This is great news for our town," said Mayor Helen Park. "Many young people here are looking for {4}."'
					],
					ko: [
						'냉동식품 제조업체인 나래 푸드가 내년 봄 애시퍼드에 공장을 엽니다. 이 공장에서 만든 식품은 전국의 매장에서 판매됩니다.',
						'이 회사는 이미 북부에 공장 두 곳이 있지만, 애시퍼드 공장은 두 곳보다 훨씬 클 것입니다. 약 200명의 직원이 필요합니다.',
						'나래 푸드는 1월에 채용을 시작합니다. 회사 웹사이트에서 지원할 수 있습니다.',
						'헬렌 박 시장은 "우리 시에 아주 좋은 소식입니다. 이곳의 많은 젊은이가 일자리를 찾고 있습니다."라고 말했습니다.'
					]
				}
			],
			questions: [
				{
					id: 'd24-17',
					options: ['make', 'made', 'makes', 'making'],
					answer: 1,
					why: '이 문장의 동사는 뒤에 있는 will be sold입니다. 빈칸은 명사 Meals를 뒤에서 꾸미는 분사 자리이고, 식품은 "만들어지는" 것이므로 과거분사 made가 정답입니다.',
					notes: [
						'동사 — 동사 will be sold가 이미 있음',
						'과거분사 (정답)',
						'-s가 붙은 동사',
						'현재분사 — 식품이 직접 만드는 것이 아님'
					]
				},
				{
					id: 'd24-18',
					options: ['larger', 'large', 'largest', 'largely'],
					answer: 0,
					why: '빈칸 뒤에 than이 있으므로 비교급 자리입니다. 앞의 much는 비교급을 강조하는 말입니다. larger가 정답입니다.',
					notes: ['비교급 (정답)', '원급', '최상급', '부사 — 주로']
				},
				{
					id: 'd24-19',
					options: [
						'The store will close early that day.',
						'She has run the factory for ten years.',
						'Thank you for visiting our factory.',
						'People can apply on the company Web site.'
					],
					optionsKo: [
						'그 매장은 그날 일찍 문을 닫습니다.',
						'그녀는 10년 동안 그 공장을 운영해 왔습니다.',
						'저희 공장을 방문해 주셔서 감사합니다.',
						'회사 웹사이트에서 지원할 수 있습니다.'
					],
					answer: 3,
					why: '앞 문장에서 1월에 채용을 시작한다(start hiring)고 했습니다. 지원 방법을 알려 주는 (D)가 이어집니다. (A)의 that day와 (B)의 She는 앞에 가리키는 말이 없고, (C)는 기사에 맞지 않는 인사말입니다.'
				},
				{
					id: 'd24-20',
					options: ['seats', 'tickets', 'jobs', 'directions'],
					answer: 2,
					why: '공장이 직원 200명을 뽑는다는 소식이 왜 좋은 소식인지 말하는 문장입니다. 젊은이들이 찾는 것은 일자리이므로 jobs가 정답입니다.',
					notes: ['좌석', '입장권', '일자리 (정답)', '길 안내']
				}
			],
			vocab: [
				['frozen meal', '냉동식품'],
				['factory', '공장'],
				['across the country', '전국에'],
				['hire', '채용하다'],
				['apply', '지원하다'],
				['look for', '~을 찾다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 종합: 유형별 정리',
			blocks: [
				{
					type: 'p',
					text: '2단계의 마지막 Part 2 복습입니다. 모든 유형을 섞어서 풉니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'**의문사 의문문** — 첫 단어를 듣고, Yes / No로 시작하는 보기를 지웁니다.',
						'**일반·부정 의문문** — Yes / No 뒤의 내용이 질문과 맞는지 봅니다. 부정 의문문은 not을 빼고 생각합니다.',
						'**제안·요청** — 수락(Sure.)이나 거절(Sorry, ~)이 정답입니다.',
						'**평서문** — 동의, 해결책, 되묻기가 정답입니다.',
						'**돌려 말하는 응답** — 답을 직접 말하지 않고 "모른다", "확인해 보겠다", "어디에 나와 있다"고 해도 정답입니다.'
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd24-21',
			script: 'Which bus goes to the science museum?',
			options: ['Every ten minutes.', 'The number twelve.', 'Yes, I went yesterday.'],
			answer: 1,
			ko: '과학 박물관에 가는 버스는 어느 것인가요?',
			optionsKo: ['10분마다요.', '12번이요.', '네, 어제 갔어요.'],
			why: 'Which bus로 물었으므로 버스 하나를 짚어 준 (B)가 정답입니다.',
			notes: [
				'빈도 — How often에 대한 답',
				'어느 버스인지 답함 (정답)',
				'Yes로 시작, go의 과거형 went'
			],
			vocab: [
				['science museum', '과학 박물관'],
				['every ten minutes', '10분마다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd24-22',
			script: 'What time does the awards ceremony start?',
			options: [
				"It's printed on the invitation.",
				'In the hotel ballroom.',
				'Yes, she won first prize.'
			],
			answer: 0,
			ko: '시상식은 몇 시에 시작하나요?',
			optionsKo: ['초대장에 적혀 있어요.', '호텔 연회장에서요.', '네, 그녀가 1등 상을 받았어요.'],
			why: '시각을 직접 말하지 않고 "초대장에 적혀 있다"고 확인할 곳을 알려 준 (A)가 정답입니다. 돌려 말하는 응답입니다.',
			notes: [
				'확인할 곳을 알려 줌 (정답)',
				'장소 — Where에 대한 답',
				'Yes로 시작, awards에서 떠오르는 prize'
			],
			vocab: [
				['awards ceremony', '시상식'],
				['invitation', '초대장'],
				['win first prize', '1등 상을 받다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd24-23',
			script: "Don't we need to order more paper cups?",
			options: ['A cup of tea, please.', 'I ordered the fish.', 'Yes, we only have a few left.'],
			answer: 2,
			ko: '종이컵을 더 주문해야 하지 않나요?',
			optionsKo: ['차 한 잔 주세요.', '저는 생선을 주문했어요.', '네, 몇 개밖에 안 남았어요.'],
			why: '부정 의문문은 not을 빼고 생각합니다. 주문해야 하는 것이 맞으므로 Yes로 답하고 이유를 덧붙인 (C)가 정답입니다.',
			notes: ['cup 반복 — 질문과 무관', 'order 반복 — 식당에서 주문한 이야기', 'Yes + 이유 (정답)'],
			vocab: [
				['order', '주문하다'],
				['paper cup', '종이컵'],
				['have a few left', '몇 개 남아 있다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd24-24',
			script: 'Could you show me how to use the new scanner?',
			options: [
				'Sure, it only takes a minute.',
				'The show starts at eight.',
				'Twenty pages per minute.'
			],
			answer: 0,
			ko: '새 스캐너 사용법을 알려 주시겠어요?',
			optionsKo: ['물론이죠, 금방 돼요.', '공연은 8시에 시작해요.', '1분에 20쪽이요.'],
			why: '알려 달라는 요청에 Sure로 수락한 (A)가 정답입니다.',
			notes: [
				'수락 (정답)',
				'철자가 같고 뜻이 다른 show(공연)',
				'scanner에서 떠오르는 속도 — 요청에 답하지 않음'
			],
			vocab: [
				['show A how to', 'A에게 ~하는 법을 알려 주다'],
				['scanner', '스캐너'],
				['take a minute', '잠깐 걸리다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd24-25',
			script: 'I left my laptop charger at home this morning.',
			options: ['There are two seats left.', 'You can borrow mine.', 'About an hour ago.'],
			answer: 1,
			ko: '오늘 아침에 노트북 충전기를 집에 두고 왔어요.',
			optionsKo: ['자리가 두 개 남았어요.', '제 것을 빌려 쓰세요.', '한 시간쯤 전에요.'],
			why: '충전기를 두고 왔다는 말에 "내 것을 빌려 쓰라"고 해결책을 말한 (B)가 정답입니다.',
			notes: ['철자가 같고 뜻이 다른 left(남은)', '해결책 (정답)', '시간 — When에 대한 답'],
			vocab: [
				['leave A at home', 'A를 집에 두고 오다'],
				['charger', '충전기'],
				['borrow', '빌리다']
			]
		}
	]
} satisfies DayContent;
