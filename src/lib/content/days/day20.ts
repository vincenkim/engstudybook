import type { DayContent } from '../schema';

export default {
	goals: [
		'자주 나오는 부사를 시제·숫자와 묶어 익힌다',
		'Part 6 문장 삽입 문제를 앞뒤 문장과 단서로 푼다',
		'선택 의문문과 제안·요청문의 응답을 복습한다'
	],
	pages: [
		{
			type: 'lesson',
			section: 'RC',
			title: '부사 어휘는 시제와 뒤에 오는 말을 봅니다',
			blocks: [
				{
					type: 'p',
					text: '보기 네 개가 모두 부사이고 뜻이 서로 다르면 부사 어휘 문제입니다. 부사는 **동사의 시제**나 **바로 뒤에 오는 말**과 짝을 이룹니다.'
				},
				{
					type: 'table',
					head: ['부사', '짝', '예'],
					rows: [
						['currently', '현재·현재진행', 'is ==currently== hiring'],
						['recently', '과거·현재완료', 'has ==recently== moved'],
						['soon', '미래', 'will arrive ==soon=='],
						['already', '현재완료', 'has ==already== left'],
						['approximately', '숫자', '==approximately== 200 people'],
						['highly', '형용사·과거분사', '==highly== recommended']
					]
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'동사의 **시제**를 봅니다. 현재진행이면 currently, 현재완료면 recently나 already, 미래면 soon을 먼저 떠올립니다.',
						'빈칸 **바로 뒤**를 봅니다. 숫자가 있으면 approximately, recommended가 있으면 highly입니다.',
						'짝으로 풀리지 않으면 문장 전체를 해석해 뜻이 맞는 것을 고릅니다.'
					]
				},
				{
					type: 'tip',
					text: 'recently는 이미 일어난 일에 씁니다. 현재진행(is -ing)이나 미래(will)와는 함께 쓰지 않습니다.'
				}
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: '자주 나오는 부사',
			blocks: [
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['recently', '최근에', 'has recently opened'],
						['currently', '현재', 'is currently closed'],
						['soon', '곧', 'will open soon'],
						['already', '이미, 벌써', 'has already sent'],
						['still', '아직도, 여전히', 'is still open'],
						['finally', '마침내', 'finally arrived'],
						['immediately', '즉시', 'reply immediately']
					]
				},
				{
					type: 'table',
					head: ['단어', '뜻', '함께 쓰는 말'],
					rows: [
						['promptly', '지체 없이, 정각에', 'begin promptly at 9 A.M.'],
						['frequently', '자주', 'frequently ask'],
						['regularly', '정기적으로', 'check regularly'],
						['approximately', '약, 대략', 'approximately three weeks'],
						['nearly', '거의', 'nearly finished'],
						['highly', '매우', 'highly recommended'],
						['fully', '완전히, 가득', 'fully booked']
					]
				}
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The marketing department is ------- looking for two part-time assistants.',
			options: ['recently', 'currently', 'highly', 'approximately'],
			answer: 1,
			ko: '마케팅 부서는 현재 시간제 보조 직원 두 명을 찾고 있습니다.',
			steps: [
				'보기가 모두 부사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 앞뒤의 동사는 **is looking**, 현재진행 시제입니다.',
				'현재진행과 짝이 되는 부사는 currently(현재)입니다. recently는 과거·현재완료와 씁니다. 정답은 (B) **currently**입니다.'
			]
		},
		{
			type: 'guided',
			part: 5,
			text: 'The repair work will take ------- three weeks to complete.',
			options: ['immediately', 'recently', 'frequently', 'approximately'],
			answer: 3,
			ko: '수리 작업을 마치는 데 약 3주가 걸릴 것입니다.',
			steps: [
				'보기가 모두 부사이고 뜻이 서로 다릅니다. 어휘 문제입니다.',
				'빈칸 바로 뒤에 **three weeks**라는 숫자 표현이 있습니다.',
				'숫자 앞에서 "약, 대략"을 뜻하는 부사는 approximately입니다. 정답은 (D) **approximately**입니다.'
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-01',
			text: 'Lakeside Bakery has ------- opened a second store near the station.',
			options: ['recently', 'currently', 'soon', 'approximately'],
			answer: 0,
			ko: '레이크사이드 베이커리는 최근에 역 근처에 두 번째 매장을 열었습니다.',
			why: '동사가 has opened, 현재완료입니다. 현재완료와 짝이 되어 "최근에 ~했다"를 나타내는 recently가 정답입니다.',
			notes: ['최근에 (정답)', '현재 — 현재·현재진행과 짝', '곧 — 미래와 짝', '약 — 숫자 앞'],
			vocab: [
				['recently', '최근에'],
				['open a store', '매장을 열다'],
				['near', '~ 근처에']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-02',
			text: 'Your order is being packed now and will be sent -------.',
			options: ['recently', 'already', 'soon', 'nearly'],
			answer: 2,
			ko: '주문하신 물건은 지금 포장 중이며 곧 발송됩니다.',
			why: '동사가 will be sent, 미래입니다. 미래와 짝이 되는 soon(곧)이 정답입니다.',
			notes: [
				'최근에 — 과거·현재완료와 짝',
				'이미 — 미래와 맞지 않음',
				'곧 (정답)',
				'거의 — 문장 끝에 쓰지 않음'
			],
			vocab: [
				['soon', '곧'],
				['pack', '포장하다'],
				['send', '보내다, 발송하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-03',
			text: 'This restaurant is ------- recommended by many business travelers.',
			options: ['nearly', 'highly', 'soon', 'approximately'],
			answer: 1,
			ko: '이 식당은 많은 출장객이 적극 추천하는 곳입니다.',
			why: 'highly recommended는 "적극 추천되는"이라는 짝입니다. 빈칸 뒤의 recommended가 단서입니다.',
			notes: ['거의', '매우 (정답)', '곧 — 미래와 짝', '약 — 숫자 앞'],
			vocab: [
				['highly recommended', '적극 추천되는'],
				['business traveler', '출장객']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-04',
			text: 'Ms. Choi has ------- sent the invitations, so you do not need to do it.',
			options: ['soon', 'currently', 'highly', 'already'],
			answer: 3,
			ko: '최 씨가 이미 초대장을 보냈으니 당신은 보내지 않아도 됩니다.',
			why: '동사가 has sent, 현재완료입니다. 뒤에서 "할 필요가 없다"고 했으므로 일이 벌써 끝났다는 뜻의 already(이미)가 정답입니다.',
			notes: ['곧 — 미래와 짝', '현재 — 현재·현재진행과 짝', '매우', '이미 (정답)'],
			vocab: [
				['already', '이미, 벌써'],
				['invitation', '초대장'],
				['do not need to', '~할 필요가 없다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-05',
			text: 'The budget report is ------- finished, so Ms. Pyo will send it this afternoon.',
			options: ['highly', 'nearly', 'frequently', 'immediately'],
			answer: 1,
			ko: '예산 보고서가 거의 끝나서 표 씨가 오늘 오후에 보낼 것입니다.',
			why: 'nearly finished는 "거의 끝난"입니다. 오늘 오후에 보낸다는 뒤 내용과도 맞습니다.',
			notes: ['매우', '거의 (정답)', '자주', '즉시'],
			vocab: [
				['nearly', '거의'],
				['budget report', '예산 보고서'],
				['finished', '끝난']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-06',
			text: 'Please report any problems with the machine to your supervisor -------.',
			options: ['immediately', 'recently', 'nearly', 'highly'],
			answer: 0,
			ko: '기계에 문제가 있으면 즉시 상사에게 보고하세요.',
			why: '문제가 생겼을 때 보고하는 방법을 말하는 문장입니다. report ~ immediately는 "즉시 보고하다"입니다.',
			notes: ['즉시 (정답)', '최근에 — 과거·현재완료와 짝', '거의', '매우'],
			vocab: [
				['immediately', '즉시'],
				['report', '보고하다'],
				['supervisor', '상사, 관리자']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-07',
			text: 'Although the sale ended yesterday, some stores are ------- offering discounts.',
			options: ['recently', 'nearly', 'highly', 'still'],
			answer: 3,
			ko: '할인 행사는 어제 끝났지만 몇몇 매장은 아직도 할인을 해 주고 있습니다.',
			why: 'Although(~이지만)가 단서입니다. 행사가 끝났는데도 계속하고 있다는 뜻이므로 still(아직도)이 정답입니다.',
			notes: ['최근에 — 과거·현재완료와 짝', '거의', '매우', '아직도 (정답)'],
			vocab: [
				['still', '아직도, 여전히'],
				['although', '~이지만'],
				['offer a discount', '할인을 해 주다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-08',
			text: 'All flights to Jeju are ------- booked this weekend, so Mr. Gil will take the ferry.',
			options: ['recently', 'promptly', 'fully', 'frequently'],
			answer: 2,
			ko: '이번 주말 제주행 항공편이 모두 만석이어서 길 씨는 여객선을 탈 것입니다.',
			why: 'fully booked는 "예약이 꽉 찬"입니다. 그래서 배를 탄다는 뒤 내용과 맞습니다.',
			notes: ['최근에 — 과거·현재완료와 짝', '지체 없이', '완전히 (정답)', '자주'],
			vocab: [
				['fully booked', '예약이 꽉 찬'],
				['flight', '항공편'],
				['ferry', '여객선']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-09',
			text: 'After a three-hour delay, the train to Gwangju ------- left the station at 9 P.M.',
			options: ['currently', 'highly', 'finally', 'fully'],
			answer: 2,
			ko: '세 시간 지연된 끝에 광주행 기차는 오후 9시에 마침내 역을 떠났습니다.',
			why: 'After a three-hour delay(세 시간 지연된 끝에)가 단서입니다. 오래 기다린 뒤에 일어난 일에는 finally(마침내)를 씁니다.',
			notes: ['현재 — 과거 시제와 맞지 않음', '매우', '마침내 (정답)', '완전히'],
			vocab: [
				['finally', '마침내'],
				['delay', '지연'],
				['leave the station', '역을 떠나다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-10',
			text: 'Customers ------- ask about delivery fees, so we added the information to our Web site.',
			options: ['recently', 'frequently', 'approximately', 'highly'],
			answer: 1,
			ko: '고객들이 배송비에 대해 자주 물어서 저희는 그 정보를 웹사이트에 추가했습니다.',
			why: '동사 ask가 현재 시제로 반복되는 일을 나타냅니다. "자주 묻다"가 되는 frequently가 정답입니다.',
			notes: ['최근에 — 과거·현재완료와 짝', '자주 (정답)', '약 — 숫자 앞', '매우'],
			vocab: [
				['frequently', '자주'],
				['delivery fee', '배송비'],
				['add', '추가하다']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-11',
			text: 'The workshop will begin ------- at 10 A.M., so please be on time.',
			options: ['promptly', 'recently', 'highly', 'fully'],
			answer: 0,
			ko: '워크숍은 오전 10시 정각에 시작하니 시간을 지켜 주세요.',
			why: 'begin promptly at + 시각은 "~시 정각에 시작하다"입니다. 시간을 지켜 달라는 뒤 내용과 맞습니다.',
			notes: ['정각에 (정답)', '최근에 — 미래와 맞지 않음', '매우', '완전히'],
			vocab: [
				['promptly', '지체 없이, 정각에'],
				['begin', '시작하다'],
				['on time', '시간에 맞게']
			]
		},
		{
			type: 'question',
			part: 5,
			id: 'd20-12',
			text: 'Please back up your files ------- to avoid losing important data.',
			options: ['approximately', 'highly', 'recently', 'regularly'],
			answer: 3,
			ko: '중요한 데이터를 잃지 않도록 파일을 정기적으로 백업하세요.',
			why: '데이터를 잃지 않으려면 백업을 꾸준히 해야 합니다. "정기적으로"를 뜻하는 regularly가 정답입니다.',
			notes: ['약 — 숫자 앞', '매우', '최근에 — 과거·현재완료와 짝', '정기적으로 (정답)'],
			vocab: [
				['regularly', '정기적으로'],
				['back up', '백업하다'],
				['avoid -ing', '~하는 것을 피하다']
			]
		},
		{
			type: 'lesson',
			section: 'RC',
			title: 'Part 6 문장 삽입: 앞뒤 문장과 이어지는지 봅니다',
			blocks: [
				{
					type: 'p',
					text: 'Part 6에는 보기가 단어가 아니라 **문장 네 개**인 문제가 있습니다. 빈칸에 들어갈 문장을 고르는 문제로, 지문마다 한 문제씩 모두 4문항이 나옵니다.'
				},
				{
					type: 'box',
					title: '풀이 순서',
					items: [
						'빈칸 **앞 문장**과 **뒤 문장**을 읽고 무슨 이야기를 하는 중인지 봅니다.',
						'보기에서 **지시어**(this, these, it, they, there)를 찾습니다. 가리키는 말이 앞 문장에 있어야 합니다.',
						'보기에서 **연결어**(also, however)를 찾습니다. 앞 문장과 관계가 맞아야 합니다.',
						'고른 문장을 넣고 뒤 문장까지 이어서 읽어 봅니다.'
					]
				},
				{
					type: 'table',
					head: ['단서', '확인할 것'],
					rows: [
						['this, these, it, they', '가리키는 말이 바로 앞 문장에 있는가'],
						['also', '앞에서 비슷한 내용을 먼저 말했는가'],
						['however', '앞 문장과 반대되는 내용인가'],
						['there, then', '앞 문장에 장소나 시간이 나왔는가']
					]
				},
				{
					type: 'examples',
					items: [
						{
							en: 'The elevator will be checked on Monday. ==It will not run from 9 A.M. to noon.==',
							ko: '월요일에 엘리베이터를 점검합니다. 오전 9시부터 정오까지는 운행하지 않습니다.',
							note: 'It = the elevator — 가리키는 말이 앞 문장에 있음'
						}
					]
				},
				{
					type: 'tip',
					text: '문장 삽입 문제는 시간이 걸립니다. 같은 지문의 다른 세 문제를 먼저 풀어 내용을 파악한 뒤에 푸세요. 주제는 비슷하지만 앞뒤 문장과 이어지지 않는 보기가 오답입니다.'
				}
			]
		},
		{
			type: 'set',
			part: 6,
			label: '안내문',
			passages: [
				{
					kind: '안내문',
					title: 'Riverside Community Center — Cooking Class for Beginners',
					body: [
						'Riverside Community Center will offer a new cooking class in June. Chef Marco Bianchi will teach students how to make {1} pasta dishes at home.',
						'The class meets every Wednesday from 7 P.M. to 9 P.M. for four weeks. The fee is $80. {2} You only need to bring an apron.',
						'Only twelve seats are {3}, so please sign up early. To {4}, speak to any staff member at the center or call 555-0127.'
					],
					ko: [
						'리버사이드 주민 센터는 6월에 새 요리 강좌를 엽니다. 요리사 마르코 비앙키가 집에서 간단한 파스타 요리를 만드는 법을 가르칩니다.',
						'수업은 4주 동안 매주 수요일 오후 7시부터 9시까지 있습니다. 수강료는 80달러입니다. 여기에는 모든 식재료 비용이 포함됩니다. 앞치마만 가져오면 됩니다.',
						'자리는 열두 개뿐이니 일찍 신청해 주세요. 등록하려면 센터 직원에게 말씀하시거나 555-0127로 전화하세요.'
					]
				}
			],
			questions: [
				{
					id: 'd20-13',
					options: ['simply', 'simple', 'simplify', 'simplicity'],
					answer: 1,
					why: '빈칸은 명사 pasta dishes 앞에서 명사를 꾸미는 자리입니다. 형용사 simple이 정답입니다.',
					notes: ['부사', '형용사 (정답)', '동사', '명사']
				},
				{
					id: 'd20-14',
					options: [
						'He has worked at several hotels in Rome.',
						'These dishes are popular in many countries.',
						'The center is closed on public holidays.',
						'This covers the cost of all the food.'
					],
					optionsKo: [
						'그는 로마의 여러 호텔에서 일했습니다.',
						'이 요리들은 여러 나라에서 인기가 있습니다.',
						'센터는 공휴일에 문을 닫습니다.',
						'여기에는 모든 식재료 비용이 포함됩니다.'
					],
					answer: 3,
					why: '앞 문장 The fee is $80(수강료는 80달러)를 This로 받아 "이 금액에 식재료 비용이 포함된다"고 이어지는 (D)가 정답입니다. 뒤 문장 You only need to bring an apron(앞치마만 가져오면 된다)과도 이어집니다. (A)의 He와 (B)의 These dishes는 바로 앞 문장에 가리키는 말이 없습니다.'
				},
				{
					id: 'd20-15',
					options: ['available', 'responsible', 'familiar', 'annual'],
					answer: 0,
					why: '뒤에서 please sign up early(일찍 신청해 달라)고 했습니다. 자리가 열두 개만 "남아 있다"는 뜻이 되어야 하므로 available(이용할 수 있는)이 정답입니다.',
					notes: ['이용할 수 있는 (정답)', '책임이 있는', '잘 아는', '해마다 하는']
				},
				{
					id: 'd20-16',
					options: ['enrolled', 'enrolling', 'enroll', 'enrollment'],
					answer: 2,
					why: '문장 맨 앞의 To + 동사원형은 "~하려면"이라는 목적을 나타냅니다. 동사원형 enroll이 정답입니다.',
					notes: [
						'과거형·과거분사',
						'-ing형',
						'동사원형 (정답)',
						'명사 — "~하려면"이라는 뜻이 되지 않음'
					]
				}
			],
			vocab: [
				['offer', '제공하다, 열다'],
				['fee', '수강료, 요금'],
				['cover the cost', '비용을 포함하다'],
				['apron', '앞치마'],
				['sign up', '신청하다'],
				['enroll', '등록하다']
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
						['To', 'Jiho Nam'],
						['From', 'Laura Chen, Human Resources'],
						['Subject', 'Your first day']
					],
					body: [
						'Dear Mr. Nam,',
						'We are happy that you are joining Bluepine Design. Your first day will be Monday, September 7. Please come to the front desk on the first floor by 9 A.M. {1}',
						'In the morning, you will have a short orientation with other new employees. After lunch, your team leader, Mr. Ito, will {2} your main duties.',
						'Please bring a photo ID and a small photo of yourself. We will use them {3} your employee card.',
						'We look forward to {4} you on Monday.',
						'Laura Chen'
					],
					ko: [
						'남 선생님께,',
						'블루파인 디자인에 입사하시게 되어 기쁩니다. 첫 출근일은 9월 7일 월요일입니다. 오전 9시까지 1층 안내 데스크로 와 주세요. 제가 거기에서 만나 자리로 안내해 드리겠습니다.',
						'오전에는 다른 신입 직원들과 함께 짧은 오리엔테이션이 있습니다. 점심 식사 후에는 팀장인 이토 씨가 주요 업무를 설명해 드립니다.',
						'사진이 있는 신분증과 작은 증명사진을 가져오세요. 그것으로 사원증을 만들 것입니다.',
						'월요일에 뵙기를 기대합니다.',
						'로라 첸'
					]
				}
			],
			questions: [
				{
					id: 'd20-17',
					options: [
						'Our company has offices in five cities.',
						'I will meet you there and take you to your desk.',
						'However, the office is closed on that day.',
						'These are on sale until Friday.'
					],
					optionsKo: [
						'우리 회사는 다섯 개 도시에 사무실이 있습니다.',
						'제가 거기에서 만나 자리로 안내해 드리겠습니다.',
						'그러나 그날은 사무실이 문을 닫습니다.',
						'이것들은 금요일까지 할인 판매합니다.'
					],
					answer: 1,
					why: '앞 문장에서 Please come to the front desk(안내 데스크로 와 달라)라고 했습니다. 그 장소를 there로 받아 "거기에서 만나겠다"고 이어지는 (B)가 정답입니다. (C)는 출근하라는 앞 내용과 어긋나고, (D)의 These는 가리키는 말이 없습니다.'
				},
				{
					id: 'd20-18',
					options: ['renew', 'deliver', 'explain', 'hire'],
					answer: 2,
					why: '빈칸 뒤의 목적어가 your main duties(주요 업무)입니다. 첫날 팀장이 신입 직원에게 업무를 "설명한다"는 흐름이므로 explain이 정답입니다.',
					notes: ['갱신하다', '배달하다', '설명하다 (정답)', '채용하다']
				},
				{
					id: 'd20-19',
					options: ['to prepare', 'prepared', 'prepares', 'preparation'],
					answer: 0,
					why: '"사원증을 만들기 위해 그것을 쓴다"는 목적을 나타내야 합니다. 목적은 to + 동사원형으로 나타내므로 to prepare가 정답입니다.',
					notes: [
						'to + 동사원형 (정답)',
						'과거형·과거분사',
						'3인칭 단수 현재형 — 한 문장에 동사가 둘이 됨',
						'명사'
					]
				},
				{
					id: 'd20-20',
					options: ['meet', 'met', 'meets', 'meeting'],
					answer: 3,
					why: 'look forward to의 to는 전치사입니다. 전치사 뒤에는 동사의 -ing형이 옵니다. meeting이 정답입니다.',
					notes: [
						'동사원형 — to가 전치사라 올 수 없음',
						'과거형',
						'3인칭 단수 현재형',
						'-ing형 (정답)'
					]
				}
			],
			vocab: [
				['join', '입사하다, 합류하다'],
				['front desk', '안내 데스크'],
				['orientation', '오리엔테이션'],
				['duty', '업무, 직무'],
				['photo ID', '사진이 있는 신분증'],
				['look forward to -ing', '~하기를 기대하다']
			]
		},
		{
			type: 'lesson',
			section: 'LC',
			title: 'Part 2 복습: 선택 의문문 · 제안 · 요청',
			blocks: [
				{
					type: 'p',
					text: '오늘은 A or B로 묻는 선택 의문문과 제안·요청문을 다섯 문제 복습합니다.'
				},
				{
					type: 'box',
					title: '기억할 것',
					items: [
						'**선택 의문문**(A or B?) → 둘 중 하나를 고르거나, 둘 다 좋다(Either is fine), 둘 다 아니다(Neither)가 정답입니다.',
						'선택 의문문에 **Yes / No**로 시작하는 보기는 오답입니다.',
						"**제안**(Why don't we ~? / How about ~?) → 수락(Sure, Good idea)이나 거절(I'm afraid ~)이 정답입니다.",
						'**요청**(Could you ~? / Would you mind ~?) → Sure, Of course, Sorry로 시작하는 응답이 정답입니다. Would you mind ~?에는 Not at all이 수락입니다.',
						"Why don't we ~?는 이유를 묻는 말이 아닙니다. Because로 시작하는 보기는 오답입니다."
					]
				}
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd20-21',
			script: 'Should I call the client now or after lunch?',
			options: ['After lunch would be better.', 'Yes, you should.', 'A lunch box.'],
			answer: 0,
			ko: '고객에게 지금 전화할까요, 점심 식사 후에 할까요?',
			optionsKo: ['점심 식사 후가 좋겠어요.', '네, 그래야 해요.', '도시락이에요.'],
			why: '지금과 점심 후 중 하나를 묻는 선택 의문문입니다. 둘 중 하나를 고른 (A)가 정답입니다.',
			notes: [
				'둘 중 하나를 고름 (정답)',
				'Yes로 시작 — 선택 의문문의 답이 될 수 없음',
				'lunch 반복 — 질문과 무관'
			],
			vocab: [
				['client', '고객'],
				['would be better', '~이 더 좋겠다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd20-22',
			script: 'Is the interview on the second floor or the third?',
			options: ['At two thirty.', 'Yes, it is.', 'Neither. It is on the fifth floor.'],
			answer: 2,
			ko: '면접은 2층에서 하나요, 3층에서 하나요?',
			optionsKo: ['2시 30분에요.', '네, 그래요.', '둘 다 아니에요. 5층에서 해요.'],
			why: '2층과 3층 중 하나를 묻는 선택 의문문입니다. 둘 다 아니라고 하고 실제 층을 말한 (C)가 정답입니다.',
			notes: [
				'시각 — When에 대한 답',
				'Yes로 시작 — 선택 의문문의 답이 될 수 없음',
				'둘 다 아님 + 실제 장소 (정답)'
			],
			vocab: [
				['interview', '면접'],
				['neither', '둘 다 아닌'],
				['floor', '층']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd20-23',
			script: "Why don't we move the meeting to Thursday?",
			options: [
				'Because the room was small.',
				'Sure, Thursday is fine with me.',
				'He moved to Daegu.'
			],
			answer: 1,
			ko: '회의를 목요일로 옮기는 게 어때요?',
			optionsKo: [
				'방이 작았기 때문이에요.',
				'좋아요, 저는 목요일 괜찮아요.',
				'그는 대구로 이사했어요.'
			],
			why: "Why don't we ~?는 '~하는 게 어때요?'라는 제안입니다. 제안을 받아들인 (B)가 정답입니다.",
			notes: [
				'Because로 시작 — 이유를 묻는 질문이 아님',
				'수락 (정답)',
				'move(옮기다)와 철자가 같은 move(이사하다)'
			],
			vocab: [
				["Why don't we ~?", '~하는 게 어때요?'],
				['move A to B', 'A를 B로 옮기다'],
				['fine with me', '나는 괜찮다']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd20-24',
			script: 'Could you check these numbers for me before the meeting?',
			options: ["Sure, I'll look at them right now.", 'A phone number.', 'She wrote me a check.'],
			answer: 0,
			ko: '회의 전에 이 숫자들을 확인해 주시겠어요?',
			optionsKo: [
				'물론이죠, 지금 바로 볼게요.',
				'전화번호예요.',
				'그녀가 저에게 수표를 써 줬어요.'
			],
			why: 'Could you ~?는 부탁입니다. Sure로 부탁을 들어준 (A)가 정답입니다.',
			notes: [
				'수락 (정답)',
				'number 반복 — 질문과 무관',
				'check(확인하다)와 철자가 같은 check(수표)'
			],
			vocab: [
				['check', '확인하다'],
				['look at', '~을 보다'],
				['right now', '지금 바로']
			]
		},
		{
			type: 'question',
			part: 2,
			id: 'd20-25',
			script: 'Would you mind turning down the music?',
			options: [
				'A music festival.',
				'Sorry, I did not know it was loud.',
				'Turn right after the bank.'
			],
			answer: 1,
			ko: '음악 소리를 좀 줄여 주시겠어요?',
			optionsKo: [
				'음악 축제예요.',
				'죄송해요, 시끄러운 줄 몰랐어요.',
				'은행을 지나서 오른쪽으로 도세요.'
			],
			why: '소리를 줄여 달라는 부탁입니다. 사과하며 부탁을 받아들인 (B)가 정답입니다.',
			notes: ['music 반복 — 질문과 무관', '사과하며 받아들임 (정답)', 'turn 반복 — 길 안내'],
			vocab: [
				['Would you mind -ing?', '~해 주시겠어요?'],
				['turn down', '(소리를) 줄이다'],
				['loud', '시끄러운']
			]
		}
	]
} satisfies DayContent;
