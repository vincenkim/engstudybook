import type { Curriculum } from './schema';

export const curriculum = [
	{
		phase: '1단계 · 문법 기초',
		mix: '하루 Part 5 15문항 + Part 2 10문항',
		parts: {
			'2': 10,
			'5': 15
		},
		days: [
			{
				day: 1,
				topics: ['명사 자리', 'Who 의문문']
			},
			{
				day: 2,
				topics: ['형용사·부사 자리', 'Where 의문문']
			},
			{
				day: 3,
				topics: ['대명사', 'When 의문문']
			},
			{
				day: 4,
				topics: ['동사 자리와 수 일치', 'What·Which 의문문']
			},
			{
				day: 5,
				topics: ['시제', 'How 의문문']
			},
			{
				day: 6,
				topics: ['능동태와 수동태', 'Why 의문문']
			},
			{
				day: 7,
				topics: ['to부정사', '일반 의문문']
			},
			{
				day: 8,
				topics: ['동명사', '부정·부가 의문문']
			},
			{
				day: 9,
				topics: ['분사', '선택 의문문']
			},
			{
				day: 10,
				topics: ['전치사 1 (시간·장소)', '제안·요청문']
			},
			{
				day: 11,
				topics: ['전치사 2 (이유·양보)', '평서문']
			},
			{
				day: 12,
				topics: ['접속사 1 (등위·상관)', '돌려 말하는 응답']
			},
			{
				day: 13,
				topics: ['접속사 2 (부사절)', '비슷한 발음 함정']
			},
			{
				day: 14,
				topics: ['전치사와 접속사 구분', '의문사 의문문 종합']
			},
			{
				day: 15,
				topics: ['관계대명사', '일반 의문문·평서문 종합']
			},
			{
				day: 16,
				topics: ['비교급·최상급', 'Part 2 종합']
			}
		]
	},
	{
		phase: '2단계 · 어휘와 문맥',
		mix: '하루 Part 5 12문항 + Part 6 8문항 + Part 2 5문항',
		parts: {
			'2': 5,
			'5': 12,
			'6': 8
		},
		days: [
			{
				day: 17,
				topics: ['명사 어휘', 'Part 6 문법 빈칸']
			},
			{
				day: 18,
				topics: ['동사 어휘', 'Part 6 어휘 빈칸']
			},
			{
				day: 19,
				topics: ['형용사 어휘', 'Part 6 접속부사']
			},
			{
				day: 20,
				topics: ['부사 어휘', 'Part 6 문장 삽입']
			},
			{
				day: 21,
				topics: ['짝꿍 표현 1 (동사 + 명사)', 'Part 6 이메일·편지']
			},
			{
				day: 22,
				topics: ['짝꿍 표현 2 (전치사 짝)', 'Part 6 공지·회람']
			},
			{
				day: 23,
				topics: ['헷갈리는 어휘', 'Part 6 광고·안내']
			},
			{
				day: 24,
				topics: ['문법·어휘 종합', 'Part 6 종합']
			}
		]
	},
	{
		phase: '3단계 · 독해와 대화',
		mix: '하루 Part 7 13문항 + Part 3 6문항 + Part 4 6문항',
		parts: {
			'3': 6,
			'4': 6,
			'7': 13
		},
		days: [
			{
				day: 25,
				topics: ['주제·목적 찾기', '대화 장소·직업', '전화 메시지']
			},
			{
				day: 26,
				topics: ['세부 정보 찾기', '대화 주제', '안내 방송']
			},
			{
				day: 27,
				topics: ['NOT·사실 확인', '세부 사항', '광고']
			},
			{
				day: 28,
				topics: ['추론', '다음에 할 일', '회의 발췌']
			},
			{
				day: 29,
				topics: ['동의어', '제안·요청', '뉴스·방송']
			},
			{
				day: 30,
				topics: ['문장 삽입', '화자의 의도', '인물 소개']
			},
			{
				day: 31,
				topics: ['이메일·편지', '시각 자료 (대화)', '시각 자료 (담화)']
			},
			{
				day: 32,
				topics: ['공지·회람', '3인 대화', '화자의 의도']
			},
			{
				day: 33,
				topics: ['광고·안내문', '바꿔 말하기 (대화)', '바꿔 말하기 (담화)']
			},
			{
				day: 34,
				topics: ['문자·채팅', 'Part 3 종합 1', 'Part 4 종합 1']
			},
			{
				day: 35,
				topics: ['기사·양식', 'Part 3 종합 2', 'Part 4 종합 2']
			},
			{
				day: 36,
				topics: ['이중 지문 입문', 'Part 3 종합 3', 'Part 4 종합 3']
			}
		]
	},
	{
		phase: '4단계 · 미니 모의고사',
		mix: '하루 전 파트 혼합 25문항',
		parts: {
			'2': 5,
			'3': 3,
			'4': 3,
			'5': 7,
			'6': 4,
			'7': 3
		},
		days: [
			{
				day: 37,
				topics: ['미니 모의고사 1']
			},
			{
				day: 38,
				topics: ['미니 모의고사 2']
			},
			{
				day: 39,
				topics: ['미니 모의고사 3']
			},
			{
				day: 40,
				topics: ['미니 모의고사 4']
			}
		]
	}
] satisfies Curriculum;
