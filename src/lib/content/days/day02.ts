import type { DayContent } from '../schema';

export default {
	goals: [
		'형용사 자리와 부사 자리를 구분한다',
		'-ly 꼬리로 부사를 알아본다',
		'Where 질문에 맞는 응답을 고른다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '형용사: 명사를 꾸미거나 설명한다',
			blocks: [
				{
					type: 'p',
					text: '형용사는 **명사 앞**에서 명사를 꾸미거나, **be동사 뒤**에서 주어를 설명합니다.'
				},
				{
					type: 'box',
					title: '형용사 자리 신호',
					items: [
						'**명사 앞** — a ==new== product, our ==helpful== staff',
						'**be동사 뒤** — The product is ==popular==.',
						'**become, remain, seem 뒤**도 be동사 뒤와 같습니다 — The price remains ==stable==.'
					]
				},
				{
					type: 'table',
					head: ['형용사 꼬리', '예'],
					rows: [
						['-able / -ible', 'available, possible'],
						['-ful', 'useful, helpful'],
						['-ive', 'impressive, effective'],
						['-al', 'final, additional'],
						['-ous', 'various, serious'],
						['-ent / -ant', 'different, important']
					]
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '부사: 명사 말고 나머지를 꾸민다',
			blocks: [
				{
					type: 'p',
					text: '부사는 동사, 형용사, 문장 전체를 꾸밉니다. 부사는 **빼도 문장이 완성**됩니다. 빈칸을 가리고 읽어도 문장이 말이 되면 부사 자리입니다.'
				},
				{
					type: 'box',
					title: '부사 자리 신호',
					items: [
						'**동사 앞이나 문장 끝** — ==carefully== read / read the manual ==carefully==',
						'**be동사와 -ed / -ing 사이** — is ==fully== booked',
						'**have와 -ed 사이, 조동사와 동사 사이** — has ==recently== moved, will ==soon== open',
						'**형용사 앞** — ==highly== successful',
						'**문장 맨 앞, 쉼표 앞** — ==Unfortunately==, the store is closed.'
					]
				},
				{
					type: 'p',
					text: '부사는 대부분 **형용사 + -ly** 모양입니다. careful → carefully, final → finally'
				},
				{
					type: 'tip',
					text: 'friendly, costly, timely는 -ly로 끝나지만 **형용사**입니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '형용사와 부사, 이렇게 고릅니다',
			blocks: [
				{
					type: 'table',
					head: ['빈칸 주변', '정답'],
					rows: [
						['관사·소유격 + ------- + 명사', '형용사'],
						['be동사 + ------- (뒤에 아무것도 없음)', '형용사'],
						['be동사 + ------- + -ed / -ing', '부사'],
						['be동사 + ------- + 형용사', '부사'],
						['빈칸을 빼도 문장이 완성됨', '부사']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The manager gave a ==clear== answer.',
							ko: '관리자는 분명한 답을 주었습니다.',
							note: '명사 answer 앞 → 형용사'
						},
						{
							en: 'The manager answered ==clearly==.',
							ko: '관리자는 분명하게 답했습니다.',
							note: '빈칸을 빼도 문장이 완성됨 → 부사'
						}
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The new software is very -------.',
			options: ['use', 'useful', 'usefully', 'usefulness'],
			answer: 1,
			ko: '새 소프트웨어는 매우 유용합니다.',
			steps: [
				'보기가 모두 use-로 시작합니다. 품사 문제입니다.',
				'빈칸 앞은 be동사 **is**와 very이고, 뒤에는 아무것도 없습니다. be동사 뒤에서 주어를 설명하는 **형용사 자리**입니다.',
				'-ful로 끝나는 **useful**이 형용사입니다. 정답은 (B)입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'Sales have increased ------- over the past year.',
			options: ['steady', 'steadiness', 'steadied', 'steadily'],
			answer: 3,
			ko: '지난 1년간 매출이 꾸준히 증가했습니다.',
			steps: [
				'보기가 모두 stead-로 시작합니다. 품사 문제입니다.',
				'빈칸을 가리고 읽어 봅니다. Sales have increased over the past year. 문장이 이미 완성되어 있습니다.',
				'빼도 되는 자리는 **부사 자리**입니다. -ly로 끝나는 **steadily**가 부사입니다. 정답은 (D)입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-01',
			text: 'The company is looking for a ------- location for its new store.',
			options: ['suit', 'suitable', 'suitably', 'suitability'],
			answer: 1,
			ko: '그 회사는 새 매장에 적합한 장소를 찾고 있습니다.',
			why: '관사 a와 명사 location 사이는 형용사 자리입니다. -able로 끝나는 suitable이 형용사입니다.',
			notes: ['동사·명사', '형용사 (정답)', '부사', '명사'],
			vocab: [
				['look for', '~을 찾다'],
				['suitable', '적합한'],
				['location', '장소, 위치']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-02',
			text: 'Please read the instructions ------- before using the machine.',
			options: ['care', 'careful', 'cares', 'carefully'],
			answer: 3,
			ko: '기계를 사용하기 전에 설명서를 주의 깊게 읽어 주세요.',
			why: 'Please read the instructions까지로 문장이 완성됩니다. 빼도 되는 자리이므로 부사 carefully가 정답입니다.',
			notes: ['명사·동사', '형용사', '동사 (3인칭 단수)', '부사 (정답)'],
			vocab: [
				['instructions', '설명서, 지시 사항'],
				['carefully', '주의 깊게']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-03',
			text: "Ms. Wong's presentation was very -------.",
			options: ['impressive', 'impress', 'impression', 'impressively'],
			answer: 0,
			ko: '웡 씨의 발표는 매우 인상적이었습니다.',
			why: 'be동사 was 뒤에서 주어 presentation을 설명하는 형용사 자리입니다. -ive로 끝나는 impressive가 형용사입니다.',
			notes: ['형용사 (정답)', '동사', '명사', '부사'],
			vocab: [
				['presentation', '발표'],
				['impressive', '인상적인']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-04',
			text: 'The shipment will ------- arrive by Thursday.',
			options: ['definite', 'define', 'definitely', 'definition'],
			answer: 2,
			ko: '배송품은 목요일까지 확실히 도착할 것입니다.',
			why: '조동사 will과 동사 arrive 사이는 부사 자리입니다. -ly로 끝나는 definitely가 정답입니다.',
			notes: ['형용사', '동사', '부사 (정답)', '명사'],
			vocab: [
				['shipment', '배송품'],
				['definitely', '확실히'],
				['arrive', '도착하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-05',
			text: 'All of our technicians are ------- trained to repair these machines.',
			options: ['full', 'fully', 'fullness', 'fuller'],
			answer: 1,
			ko: '저희 기술자는 모두 이 기계들을 수리하도록 충분히 교육받았습니다.',
			why: 'be동사 are와 trained 사이는 부사 자리입니다. fully trained는 "충분히 교육받은"이라는 뜻입니다.',
			notes: ['형용사', '부사 (정답)', '명사', '형용사의 비교급'],
			vocab: [
				['technician', '기술자'],
				['train', '교육하다'],
				['repair', '수리하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-06',
			text: 'The restaurant received ------- reviews from local food critics.',
			options: ['favor', 'favorably', 'favors', 'favorable'],
			answer: 3,
			ko: '그 식당은 지역 음식 평론가들에게서 호의적인 평가를 받았습니다.',
			why: '동사 received와 명사 reviews 사이에서 명사를 꾸미는 형용사 자리입니다. -able로 끝나는 favorable이 정답입니다.',
			notes: ['명사·동사', '부사', '명사의 복수형·동사', '형용사 (정답)'],
			vocab: [
				['receive', '받다'],
				['favorable', '호의적인'],
				['review', '평가'],
				['critic', '평론가']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-07',
			text: '-------, the flight arrived on time despite the bad weather.',
			options: ['Fortunately', 'Fortunate', 'Fortune', 'Fortunes'],
			answer: 0,
			ko: '다행히 비행기는 악천후에도 정시에 도착했습니다.',
			why: '쉼표 앞 문장 맨 앞에서 문장 전체를 꾸미는 부사 자리입니다. -ly로 끝나는 Fortunately가 정답입니다.',
			notes: ['부사 (정답)', '형용사', '명사', '명사의 복수형'],
			vocab: [
				['fortunately', '다행히'],
				['on time', '정시에'],
				['despite', '~에도 불구하고']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-08',
			text: "The manager spoke ------- about the team's recent success.",
			options: ['pride', 'proud', 'proudly', 'prided'],
			answer: 2,
			ko: '관리자는 팀의 최근 성공에 대해 자랑스럽게 이야기했습니다.',
			why: '동사 spoke 뒤에서 동사를 꾸미는 부사 자리입니다. 빈칸을 빼도 문장이 완성됩니다.',
			notes: ['명사', '형용사', '부사 (정답)', '동사의 과거형'],
			vocab: [
				['proudly', '자랑스럽게'],
				['recent', '최근의'],
				['success', '성공']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-09',
			text: 'The directions to the hotel were ------- and easy to follow.',
			options: ['clearly', 'clarity', 'clear', 'clears'],
			answer: 2,
			ko: '호텔로 가는 길 안내는 명확하고 따라가기 쉬웠습니다.',
			why: 'be동사 were 뒤 형용사 자리입니다. and 뒤의 easy도 형용사이므로 같은 품사인 clear가 와야 합니다.',
			notes: ['부사', '명사', '형용사 (정답)', '동사 (3인칭 단수)'],
			vocab: [
				['directions', '길 안내'],
				['clear', '명확한'],
				['follow', '따라가다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-10',
			text: 'The price of fuel has risen ------- this year.',
			options: ['significantly', 'significant', 'significance', 'signify'],
			answer: 0,
			ko: '올해 연료 가격이 크게 올랐습니다.',
			why: 'The price of fuel has risen까지로 문장이 완성됩니다. 동사 has risen을 꾸미는 부사 significantly가 정답입니다.',
			notes: ['부사 (정답)', '형용사', '명사', '동사'],
			vocab: [
				['fuel', '연료'],
				['rise', '오르다'],
				['significantly', '크게, 상당히']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-11',
			text: 'Ms. Ito is a ------- member of the research team.',
			options: ['value', 'valuable', 'valuably', 'values'],
			answer: 1,
			ko: '이토 씨는 연구팀의 소중한 구성원입니다.',
			why: '관사 a와 명사 member 사이는 형용사 자리입니다. -able로 끝나는 valuable이 형용사입니다.',
			notes: ['명사·동사', '형용사 (정답)', '부사', '명사의 복수형·동사'],
			vocab: [
				['valuable', '소중한, 가치 있는'],
				['research', '연구']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-12',
			text: 'The two companies have ------- agreed to share the costs.',
			options: ['final', 'finalize', 'finals', 'finally'],
			answer: 3,
			ko: '두 회사는 마침내 비용을 분담하기로 합의했습니다.',
			why: 'have와 agreed 사이는 부사 자리입니다. -ly로 끝나는 finally가 정답입니다.',
			notes: ['형용사', '동사', '명사의 복수형', '부사 (정답)'],
			vocab: [
				['finally', '마침내'],
				['agree to', '~하기로 합의하다'],
				['share the costs', '비용을 분담하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-13',
			text: 'This training program is ------- useful for new employees.',
			options: ['extreme', 'extremes', 'extremely', 'extremity'],
			answer: 2,
			ko: '이 교육 프로그램은 신입 직원에게 매우 유용합니다.',
			why: 'be동사 is와 형용사 useful 사이는 부사 자리입니다. 형용사를 꾸미는 것은 부사입니다.',
			notes: ['형용사', '명사의 복수형', '부사 (정답)', '명사'],
			vocab: [
				['extremely', '매우, 극도로'],
				['useful', '유용한']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-14',
			text: 'The instructor gave a ------- explanation of the new system.',
			options: ['helpful', 'help', 'helpfully', 'helps'],
			answer: 0,
			ko: '강사는 새 시스템에 대해 도움이 되는 설명을 해 주었습니다.',
			why: '관사 a와 명사 explanation 사이는 형용사 자리입니다. -ful로 끝나는 helpful이 형용사입니다.',
			notes: ['형용사 (정답)', '동사·명사', '부사', '동사 (3인칭 단수)'],
			vocab: [
				['instructor', '강사'],
				['explanation', '설명'],
				['helpful', '도움이 되는']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd02-15',
			text: 'The meeting room is not ------- on Friday afternoon.',
			options: ['avail', 'available', 'availability', 'availably'],
			answer: 1,
			ko: '그 회의실은 금요일 오후에는 이용할 수 없습니다.',
			why: 'be동사 is 뒤에서 주어 The meeting room을 설명하는 형용사 자리입니다. -able로 끝나는 available이 정답입니다.',
			notes: ['동사', '형용사 (정답)', '명사', '부사'],
			vocab: [
				['available', '이용할 수 있는'],
				['meeting room', '회의실']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Where 의문문: 장소를 묻는다',
			blocks: [
				{
					type: 'p',
					text: 'Where로 시작하면 **어디**인지 묻는 질문입니다. 응답에 장소가 나오면 정답일 가능성이 높습니다.'
				},
				{
					type: 'table',
					head: ['정답 유형', '예'],
					rows: [
						['전치사 + 장소', 'At the front desk. / On the second floor.'],
						['위치 표현', 'Next to the elevator. / Across from the bank.'],
						['출처·방향', 'From the supplier. / To the Seoul office.'],
						['물어볼 사람', 'Ask the receptionist.'],
						['모른다는 응답', "I'm not sure."]
					]
				},
				{
					type: 'box',
					title: '오답 유형',
					items: [
						'**시간**으로 답하는 응답 — Where와 When은 발음이 비슷해서 자주 함께 나옵니다.',
						'**Yes / No**로 시작하는 응답',
						'질문에 나온 단어와 **발음이 비슷한 단어**가 들어간 응답'
					]
				},
				{
					type: 'tip',
					text: 'Where는 "웨어", When은 "웬"으로 끝납니다. 첫 단어를 듣는 순간 장소인지 시간인지 정해 두세요.'
				}
			]
		},
		{
			type: 'guided',
			part: 2,
			script: 'Where is the staff meeting being held?',
			options: ["At two o'clock.", 'Yes, I met him.', 'In conference room B.'],
			answer: 2,
			ko: '직원 회의는 어디에서 열리나요?',
			optionsKo: ['2시에요.', '네, 그를 만났어요.', 'B 회의실에서요.'],
			steps: [
				'첫 단어가 **Where**입니다. 장소를 묻는 질문입니다.',
				'(A)는 시간으로 답했습니다. When에 대한 답이므로 지웁니다.',
				'(B)는 Yes로 시작했고, meeting과 발음이 비슷한 met을 썼습니다. 지웁니다.',
				'(C)는 "전치사 + 장소"로 답했습니다. 정답은 (C)입니다.'
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-16',
			script: 'Where is the nearest post office?',
			options: ['It closes at six.', 'Across from the bank.', 'By airmail.'],
			answer: 1,
			ko: '가장 가까운 우체국은 어디에 있나요?',
			optionsKo: ['6시에 닫아요.', '은행 맞은편에요.', '항공우편으로요.'],
			why: '위치 표현 across from(~ 맞은편에)으로 답한 (B)가 정답입니다.',
			notes: ['시간 — When에 대한 답', '위치 (정답)', 'post office에서 떠오르는 우편 이야기'],
			vocab: [
				['nearest', '가장 가까운'],
				['across from', '~ 맞은편에'],
				['airmail', '항공우편']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-17',
			script: 'Where should I put these documents?',
			options: ['On my desk, please.', 'Yes, I signed them.', 'Before noon.'],
			answer: 0,
			ko: '이 서류들을 어디에 둘까요?',
			optionsKo: ['제 책상 위에 놓아 주세요.', '네, 제가 서명했어요.', '정오 전에요.'],
			why: '"전치사 + 장소"로 답한 (A)가 정답입니다.',
			notes: ['장소 (정답)', 'Yes로 시작', '시간 — When에 대한 답'],
			vocab: [
				['put', '두다'],
				['document', '서류'],
				['sign', '서명하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-18',
			script: 'Where did you buy your laptop?',
			options: ['About two years ago.', "It's very light.", 'At the electronics store downtown.'],
			answer: 2,
			ko: '노트북을 어디에서 샀나요?',
			optionsKo: ['2년쯤 전에요.', '아주 가벼워요.', '시내에 있는 전자제품 매장에서요.'],
			why: '구매한 장소로 답한 (C)가 정답입니다.',
			notes: ['시간 — When에 대한 답', '노트북의 특징 — 질문과 무관', '장소 (정답)'],
			vocab: [
				['laptop', '노트북'],
				['electronics store', '전자제품 매장'],
				['downtown', '시내에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-19',
			script: 'Where can I find the meeting agenda?',
			options: ['It was emailed this morning.', 'At ten thirty.', "No, I can't attend."],
			answer: 0,
			ko: '회의 안건은 어디에서 볼 수 있나요?',
			optionsKo: [
				'오늘 아침에 이메일로 보냈어요.',
				'10시 30분에요.',
				'아니요, 저는 참석할 수 없어요.'
			],
			why: '장소를 직접 말하지 않았지만 "이메일로 보냈다"는 말로 어디에서 찾을 수 있는지 알려 주었습니다. 이렇게 돌려 말하는 응답도 정답이 됩니다.',
			notes: ['찾을 곳을 알려 줌 (정답)', '시간 — When에 대한 답', 'No로 시작'],
			vocab: [
				['agenda', '안건, 의제'],
				['attend', '참석하다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-20',
			script: 'Where will the company picnic be held?',
			options: ['Next Saturday.', 'Sandwiches and drinks.', 'At Riverside Park.'],
			answer: 2,
			ko: '회사 야유회는 어디에서 열리나요?',
			optionsKo: ['다음 주 토요일에요.', '샌드위치와 음료요.', '리버사이드 공원에서요.'],
			why: '"전치사 + 장소"로 답한 (C)가 정답입니다.',
			notes: ['시간 — When에 대한 답', 'picnic에서 떠오르는 음식', '장소 (정답)'],
			vocab: [
				['company picnic', '회사 야유회'],
				['be held', '열리다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-21',
			script: "Where's the copy machine?",
			options: ['Twenty copies, please.', 'Next to the elevator.', 'Coffee with milk.'],
			answer: 1,
			ko: '복사기는 어디에 있나요?',
			optionsKo: ['20부 부탁합니다.', '엘리베이터 옆에요.', '우유를 넣은 커피요.'],
			why: '위치 표현 next to(~ 옆에)로 답한 (B)가 정답입니다.',
			notes: ['copy 반복', '위치 (정답)', 'copy와 발음이 비슷한 coffee'],
			vocab: [
				['copy machine', '복사기'],
				['next to', '~ 옆에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-22',
			script: 'Where are you going on your business trip?',
			options: ['To the Singapore office.', 'For three days.', 'By train.'],
			answer: 0,
			ko: '출장은 어디로 가시나요?',
			optionsKo: ['싱가포르 지사로요.', '3일 동안이요.', '기차로요.'],
			why: '방향을 나타내는 to + 장소로 답한 (A)가 정답입니다.',
			notes: ['장소 (정답)', '기간 — How long에 대한 답', '교통수단 — How에 대한 답'],
			vocab: [
				['business trip', '출장'],
				['office', '지사, 사무실']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-23',
			script: 'Where do I submit my expense report?',
			options: ['It was quite expensive.', 'Ask someone in accounting.', 'Every month.'],
			answer: 1,
			ko: '경비 보고서는 어디에 제출하나요?',
			optionsKo: ['꽤 비쌌어요.', '회계팀 사람에게 물어보세요.', '매달이요.'],
			why: '장소 대신 "물어볼 사람"을 알려 주는 응답도 Where의 정답입니다.',
			notes: [
				'expense와 발음이 비슷한 expensive',
				'물어볼 사람을 알려 줌 (정답)',
				'빈도 — How often에 대한 답'
			],
			vocab: [
				['submit', '제출하다'],
				['expense report', '경비 보고서'],
				['accounting', '회계팀']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-24',
			script: 'Where did Mr. Chen leave the keys?',
			options: ['He left at five.', 'Yes, he lives nearby.', 'In the top drawer.'],
			answer: 2,
			ko: '첸 씨는 열쇠를 어디에 두었나요?',
			optionsKo: ['그는 5시에 떠났어요.', '네, 그는 근처에 살아요.', '맨 위 서랍에요.'],
			why: '"전치사 + 장소"로 답한 (C)가 정답입니다. leave는 "두다"와 "떠나다" 두 가지 뜻이 있습니다.',
			notes: [
				'시간으로 답함, leave(떠나다)의 과거형 left',
				'Yes로 시작, leave와 발음이 비슷한 live',
				'장소 (정답)'
			],
			vocab: [
				['leave', '두다, 떠나다'],
				['drawer', '서랍'],
				['nearby', '근처에']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd02-25',
			script: 'Where can I park my car?',
			options: [
				"There's a garage behind the building.",
				'The park opens at nine.',
				"No, it's not mine."
			],
			answer: 0,
			ko: '차를 어디에 주차할 수 있나요?',
			optionsKo: [
				'건물 뒤에 주차장이 있어요.',
				'공원은 9시에 열어요.',
				'아니요, 제 것이 아니에요.'
			],
			why: '주차할 수 있는 장소를 알려 준 (A)가 정답입니다.',
			notes: ['장소 (정답)', 'park(주차하다)와 소리가 같은 park(공원)', 'No로 시작'],
			vocab: [
				['park', '주차하다'],
				['garage', '주차장, 차고'],
				['behind', '~ 뒤에']
			]
		}
	]
} satisfies DayContent;
