# 토익 문제집

하루 25문항, 40일 과정의 토익 기초 문제집입니다. 원본 단일 HTML(`../토익문제집.html`)을 SvelteKit으로 옮긴 정적 웹 앱이며, 폰에 설치(PWA)해서 오프라인으로도 쓸 수 있습니다.

## 명령

```sh
npm install
npm run dev          # 개발 서버
npm run build        # 정적 빌드 → build/
npm run preview      # 빌드 결과 미리 보기 (빌드할 때마다 다시 실행)
npm run check        # 타입 검사
npm run lint         # Prettier + ESLint
npm run test:unit    # 단위 테스트 (콘텐츠 검사 포함)
npm run test:e2e     # Playwright 화면 테스트 (빌드 후 실행)
```

## 배포

`build/` 폴더를 정적 호스팅(GitHub Pages, Cloudflare Pages, Netlify 등)에 올립니다. 하위 경로에서 서비스하면 빌드할 때 경로를 지정합니다.

```sh
BASE_PATH=/저장소이름 npm run build
```

## 구조

| 경로                  | 내용                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/lib/content/`    | 커리큘럼, Day별 데이터(`days/dayNN.ts`), 단어장 데이터(`words/w1d1.ts` … `w4d5.ts`), Zod 스키마                                                                                      |
| `src/lib/progress/`   | 학습 기록 저장(v2), 원본 기록(v1) 변환, 채점 규칙, 단어 기록(`toeicBasic.words`)과 간격 반복 규칙                                                                                    |
| `src/lib/speech/`     | 영어 음성 선택과 재생 (Web Speech API)                                                                                                                                               |
| `src/lib/components/` | 화면 컴포넌트 (`shell/`: 주 메뉴, `home/`: 오늘, `workbook/`: 문제집 목록, `study/`: Day 화면, `words/`: 단어장·카드, `review/`: 복습, `settings/`: 설정 시트, `ui/`: shadcn-svelte) |
| `src/lib/keyboard.ts` | 키 입력을 학습 동작으로 바꾸는 규칙                                                                                                                                                  |
| `src/routes/`         | 화면 주소 (아래 표), `+layout.svelte`: 주 메뉴와 내용 영역을 두는 앱 셸                                                                                                              |
| `src/service-worker/` | 오프라인 캐시                                                                                                                                                                        |
| `e2e/`                | Playwright 테스트 (휴대폰 390×844, 아이패드 1180×820, PC 1440×900에서 각각 실행)                                                                                                     |

## 주소

| 주소           | 화면                                |
| -------------- | ----------------------------------- |
| `/`            | 오늘                                |
| `/days`        | 문제집 (Day 목록)                   |
| `/day/[day]`   | Day 학습 (`/day/1` 등)              |
| `/words`       | 단어장 (Week · Day 목록)            |
| `/words/[day]` | 단어 목록과 카드 (`/words/w1d1` 등) |
| `/words/saved` | 해설에서 담은 단어                  |
| `/review`      | 복습 (틀린 문제, 복습할 단어)       |

모든 화면은 앱 셸 안에 열립니다. 주 메뉴(오늘 · 문제집 · 단어장 · 복습)는 폭 768px 미만에서 아래 탭, 768–1279px에서 왼쪽 레일, 1280px 이상에서 사이드바로 보이며, 휴대폰에서 Day를 풀거나 단어 목록·카드를 보는 동안에는 숨깁니다. 화면은 창 대신 셸의 내용 영역에서 스크롤되고, 주소가 바뀌면 맨 위로 돌아갑니다. 카드는 목록 주소 위에 얕은 라우팅으로 열려 뒤로 가기가 카드를 닫습니다.

## 단어장 데이터

`src/lib/content/words/wXdY.ts`는 PDF 단어장(`2026 단어장 2.pdf`)의 텍스트 층에서 한 번 추출한 데이터입니다. 단어 ID(`w1d1-05` 형식)는 단어 기록의 키이므로 바꾸지 않습니다. 뜻을 고칠 때는 이 파일을 직접 고치고, `npm run test:unit`이 Day별 줄 수, 고유 단어 1,000개, ID 순서, 별표·핵심 뜻 수를 검사합니다. 단어 기록은 `toeicBasic.words` 키에 따로 저장되고, 기록 내보내기 파일의 `words` 묶음으로 함께 나갑니다.

## 콘텐츠 수정

`src/lib/content/days/dayNN.ts`를 고칩니다. 문장 안 표기:

- `**굵게**`, `==형광펜==`
- `-------` (5개 이상): Part 5 빈칸
- `{1}`, `{2}` …: Part 6 지문의 빈칸 번호

`npm run test:unit`이 스키마, Day별 문항 수(25)와 파트 구성, 문항 ID 순서, Part 6 빈칸 번호를 검사합니다. 문항 ID(`d01-01` 형식)는 학습 기록의 키이므로 바꾸지 않습니다.

## 원본 기록 옮기기

원본 HTML의 **기록 내보내기**로 받은 파일을 이 앱의 **기록 가져오기**로 열면 새 형식으로 바뀌어 들어옵니다.
