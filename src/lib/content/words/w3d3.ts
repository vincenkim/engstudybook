import type { WordDay } from '../word-schema';

export default [
	{
		id: 'w3d3-01',
		no: 1,
		word: 'abstract',
		ipa: '[æbstrǽkt]',
		groups: [{ pos: '명', senses: [{ text: '개요' }, { text: '발췌' }, { text: '요약(문)' }] }],
		initial: 'new'
	},
	{
		id: 'w3d3-02',
		no: 2,
		word: 'access',
		ipa: '[ǽkses]',
		groups: [
			{ pos: '명', senses: [{ text: '접근(권한)' }, { text: '출입 (to)' }] },
			{ pos: '타', senses: [{ text: '접근하다' }] }
		],
		initial: 'known'
	},
	{
		id: 'w3d3-03',
		no: 3,
		word: 'account',
		ipa: '[əkáunt]',
		groups: [
			{
				pos: '명',
				senses: [{ text: '계좌' }, { text: '계정' }, { text: '거래처' }, { text: '회계' }]
			},
			{ pos: '자', senses: [{ text: '(비율을) 차지하다' }, { text: '해명하다 (for)' }] }
		],
		initial: 'known'
	},
	{
		id: 'w3d3-04',
		no: 4,
		word: 'amount',
		ipa: '[əmáunt]',
		groups: [{ pos: '명', senses: [{ text: '(총)금액' }, { text: '양 (the amount of)' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-05',
		no: 5,
		word: 'balance',
		ipa: '[bǽləns]',
		groups: [
			{
				pos: '명',
				senses: [{ text: '균형' }, { text: '조화' }, { text: '잔고' }, { text: '잔액' }]
			}
		],
		initial: 'unseen'
	},
	{
		id: 'w3d3-06',
		no: 6,
		word: 'besides',
		ipa: '[bisáidz]',
		groups: [
			{ pos: '전', senses: [{ text: '~이외에도' }] },
			{ pos: '부', senses: [{ text: '게다가' }, { text: '그 밖에 더' }] }
		],
		initial: 'unseen'
	},
	{
		id: 'w3d3-07',
		no: 7,
		word: 'bill',
		ipa: '[bil]',
		groups: [{ pos: '명', senses: [{ text: '계산서' }, { text: '청구서' }, { text: '지폐' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-08',
		no: 8,
		word: 'brochure',
		ipa: '[brouʃúər]',
		groups: [{ pos: '명', senses: [{ text: '안내서' }, { text: '소책자' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-09',
		no: 9,
		word: 'caution',
		ipa: '[kɔ́ːʃən]',
		groups: [
			{
				pos: '명',
				senses: [{ text: '주의' }, { text: '조심' }, { text: '경고 (use/ exercise caution)' }]
			}
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-10',
		no: 10,
		word: 'choice',
		ipa: '[ʧɔis]',
		groups: [
			{
				pos: '명',
				senses: [{ text: '선택(권)' }, { text: '결정' }, { text: '선택의 범위' }, { text: '종류' }]
			}
		],
		initial: 'known'
	},
	{
		id: 'w3d3-11',
		no: 11,
		word: 'comment',
		ipa: '[kάment]',
		groups: [
			{
				pos: '명',
				senses: [{ text: '주석' }, { text: '논평' }, { text: '비평' }, { text: '의견' }]
			},
			{ pos: '자', senses: [{ text: '주석을 달다' }, { text: '해설하다(on, about)' }] },
			{ pos: '타', senses: [{ text: '논평하다' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-12',
		no: 12,
		word: 'confidential',
		ipa: '[kὰnfədénʃəl]',
		groups: [{ pos: '형', senses: [{ text: '비밀의' }, { text: '기밀의' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-13',
		no: 13,
		word: 'cooperative',
		ipa: '[kouάpərətiv, kouάpə',
		groups: [
			{ pos: '형', senses: [{ text: '협력적인' }, { text: '협조적인' }, { text: '협동의' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-14',
		no: 14,
		word: 'courier',
		ipa: '[kə́ːriər]',
		groups: [{ pos: '명', senses: [{ text: '택배업자' }, { text: '배달원' }] }],
		initial: 'new'
	},
	{
		id: 'w3d3-15',
		no: 15,
		word: 'deposit',
		ipa: '[dipάzit]',
		groups: [
			{ pos: '명', senses: [{ text: '보증금' }, { text: '예금' }] },
			{ pos: '타', senses: [{ text: '맡기다' }, { text: '보증금으로 치르다' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-16',
		no: 16,
		word: 'differ',
		ipa: '[dífər]',
		groups: [{ pos: '자', senses: [{ text: '다르다 (from)' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-17',
		no: 17,
		word: 'divide',
		ipa: '[diváid]',
		groups: [
			{ pos: '타', senses: [{ text: '나누다' }, { text: '분리하다' }] },
			{ pos: '자', senses: [{ text: '나누어지다' }, { text: '갈라지다' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-18',
		no: 18,
		word: 'document',
		ipa: '[dάkjumənt｜dɔ́k-]',
		groups: [
			{ pos: '타', senses: [{ text: '문서화하다' }] },
			{ pos: '명', senses: [{ text: '문서' }, { text: '서류' }, { text: '기록' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-19',
		no: 19,
		word: 'duplicate',
		ipa: '[djúːplikət｜djúː-]',
		groups: [
			{ pos: '명', senses: [{ text: '사본' }, { text: '복사' }, { text: '복제' }] },
			{ pos: '형', senses: [{ text: '중복된' }, { text: '복제한' }] },
			{ pos: '타', senses: [{ text: '복사하다' }] }
		],
		initial: 'new'
	},
	{
		id: 'w3d3-20',
		no: 20,
		word: 'elaborate',
		ipa: '[ilǽbərət]',
		groups: [{ pos: '형', senses: [{ text: '공들인' }, { text: '정교한' }, { text: '정성들인' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-21',
		no: 21,
		word: 'exactly',
		ipa: '[igzǽktli]',
		groups: [{ pos: '부', senses: [{ text: '정확하게' }, { text: '엄밀히' }, { text: '딱' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-22',
		no: 22,
		word: 'existing',
		ipa: '[igzístiŋ]',
		groups: [{ pos: '형', senses: [{ text: '현존하는' }, { text: '현재의' }, { text: '기존의' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-23',
		no: 23,
		word: 'flexible',
		ipa: '[fléksəbl]',
		groups: [
			{ pos: '형', senses: [{ text: '유연한' }, { text: '융통성 있는' }, { text: '신축성 있는' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-24',
		no: 24,
		word: 'flyer',
		ipa: '[fláiər]',
		groups: [{ pos: '명', senses: [{ text: '전단지' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-25',
		no: 25,
		word: 'fragile',
		ipa: '[frǽdʒəl]',
		groups: [{ pos: '형', senses: [{ text: '취약한' }, { text: '깨지기 쉬운' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-26',
		no: 26,
		word: 'incentive',
		ipa: '[inséntiv]',
		groups: [{ pos: '명', senses: [{ text: '장려금' }, { text: '보상' }, { text: '혜택' }] }],
		initial: 'known'
	},
	{
		id: 'w3d3-27',
		no: 27,
		word: 'incur',
		ipa: '[inkə́ːr]',
		groups: [{ pos: '타', senses: [{ text: '초래하다' }, { text: '발생하다' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-28',
		no: 28,
		word: 'invoice',
		ipa: '[ínvɔis]',
		groups: [{ pos: '명', senses: [{ text: '(운)송장' }, { text: '청구서' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-29',
		no: 29,
		word: 'less',
		ipa: '[les]',
		groups: [
			{ pos: '형', senses: [{ text: '소량인' }, { text: '보다 적은' }] },
			{ pos: '부', senses: [{ text: '더 적게' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-30',
		no: 30,
		word: 'limit',
		ipa: '[límit]',
		groups: [{ pos: '타', senses: [{ text: '을 제한하다 (be limited to)' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-31',
		no: 31,
		word: 'nomination',
		ipa: '[nὰmənéiʃən]',
		groups: [{ pos: '명', senses: [{ text: '지명' }, { text: '추천' }, { text: '임명' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-32',
		no: 32,
		word: 'order',
		ipa: '[ɔ́ːrdər]',
		groups: [
			{ pos: '타', senses: [{ text: '주문하다' }] },
			{
				pos: '명',
				senses: [
					{ text: '주문(서)' },
					{ text: '순서' },
					{ text: '정돈' },
					{ text: '질서 (in an orderly fashion)' }
				]
			}
		],
		initial: 'known'
	},
	{
		id: 'w3d3-33',
		no: 33,
		word: 'parcel',
		ipa: '[pάːrsəl]',
		groups: [{ pos: '명', senses: [{ text: '소포' }, { text: '꾸러미' }, { text: '한 구획' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-34',
		no: 34,
		word: 'poll',
		ipa: '[poul]',
		groups: [{ pos: '명', senses: [{ text: '투표' }, { text: '여론조사' }, { text: '선거' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-35',
		no: 35,
		word: 'postage',
		ipa: '[póustidʒ]',
		groups: [{ pos: '명', senses: [{ text: '우편요금' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-36',
		no: 36,
		word: 'praise',
		ipa: '[preiz]',
		groups: [
			{ pos: '타', senses: [{ text: '칭찬하다' }, { text: '높이 평가하다' }] },
			{ pos: '명', senses: [{ text: '칭찬' }, { text: '찬사' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-37',
		no: 37,
		word: 'premium',
		ipa: '[príːmiəm]',
		groups: [
			{ pos: '형', senses: [{ text: '우수한' }, { text: '고급의' }] },
			{ pos: '명', senses: [{ text: '수수료' }, { text: '보험료' }, { text: '상금' }] }
		],
		initial: 'known'
	},
	{
		id: 'w3d3-38',
		no: 38,
		word: 'recognize',
		ipa: '[rékəgnàiz]',
		groups: [
			{ pos: '타', senses: [{ text: '인정하다' }, { text: '승인하다' }, { text: '표창하다' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-39',
		no: 39,
		word: 'reject',
		ipa: '[ridʒékt]',
		groups: [{ pos: '타', senses: [{ text: '거절하다' }, { text: '거부하다' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-40',
		no: 40,
		word: 'reliable',
		ipa: '[riláiəbl]',
		groups: [
			{
				pos: '형',
				senses: [{ text: '신뢰할 만한' }, { text: '믿을 수 었는' }, { text: '의지가 되는' }]
			}
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-41',
		no: 41,
		word: 'remind',
		ipa: '[rimáind]',
		groups: [
			{
				pos: '타',
				senses: [{ text: '생각나게 하다' }, { text: '일깨우다' }, { text: '상기시키다' }]
			}
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-42',
		no: 42,
		word: 'renew',
		ipa: '[rinjúː]',
		groups: [
			{ pos: '타', senses: [{ text: '다시 시작하다' }, { text: '갱신하다' }, { text: '연장하다' }] }
		],
		initial: 'known'
	},
	{
		id: 'w3d3-43',
		no: 43,
		word: 'result',
		ipa: '[rizΛlt]',
		groups: [
			{ pos: '명', senses: [{ text: '결과' }, { text: '성과' }] },
			{ pos: '자', senses: [{ text: '초래하다( in)' }, { text: '~의 원인이 되다(from)' }] }
		],
		initial: 'known'
	},
	{
		id: 'w3d3-44',
		no: 44,
		word: 'reward',
		ipa: '[riwɔ́ːrd]',
		groups: [
			{ pos: '타', senses: [{ text: '~에게 보상(보답)하다' }] },
			{
				pos: '명',
				senses: [{ text: '보상' }, { text: '대가' }, { text: '이익' }, { text: '상금' }]
			}
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-45',
		no: 45,
		word: 'search',
		ipa: '[səːrʧ]',
		groups: [
			{ pos: '명', senses: [{ text: '조사' }, { text: '검색' }] },
			{ pos: '자', senses: [{ text: '조사하다' }] },
			{ pos: '타', senses: [{ text: '찾다' }, { text: '조사하다' }] }
		],
		initial: 'known'
	},
	{
		id: 'w3d3-46',
		no: 46,
		word: 'step',
		ipa: '[step]',
		groups: [{ pos: '명', senses: [{ text: '단계' }, { text: '조치' }, { text: '계단' }] }],
		initial: 'known'
	},
	{
		id: 'w3d3-47',
		no: 47,
		word: 'transport',
		ipa: '[trænspɔ́ːrt]',
		groups: [
			{ pos: '명', senses: [{ text: '수송' }, { text: '운송(수단)' }] },
			{ pos: '타', senses: [{ text: '운송하다' }, { text: '나르다' }] }
		],
		initial: 'unsure'
	},
	{
		id: 'w3d3-48',
		no: 48,
		word: 'vulnerable',
		ipa: '[vΛlnərəbl]',
		groups: [{ pos: '형', senses: [{ text: '취약한' }, { text: '영향받기 쉬운 (to)' }] }],
		initial: 'unsure'
	},
	{
		id: 'w3d3-50',
		no: 50,
		word: 'take off',
		ipa: '[téikɔ̀(ː)f]',
		groups: [{ pos: '명', senses: [{ text: '이륙' }, { text: '출발' }, { text: '도약' }] }],
		initial: 'known',
		same: 'w3d2-50'
	},
	{
		id: 'w3d3-51',
		no: 51,
		word: 'temporary',
		ipa: '[témpərèri]',
		groups: [{ pos: '부', senses: [{ text: '일시적인' }, { text: '임시로' }] }],
		initial: 'known',
		same: 'w3d2-51'
	}
] satisfies WordDay;
