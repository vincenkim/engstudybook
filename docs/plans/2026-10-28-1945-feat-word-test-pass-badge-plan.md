---
title: 토익 학습앱 단어시험 합격 표시 - Plan
type: feat
date: 2026-10-28
artifact_contract: ce-unified-plan/v1
product_contract_source: user-session
execution: code
---

# 토익 학습앱 단어시험 합격 표시 - Plan

## Goal Capsule

- **Objective:** 단어시험에서 맞힌 단어와 틀린 단어를 단어장 목록에서 알아볼 수 있다.
- **Means:** 단어 기록 항목에 마지막 시험 결과(`tested`)를 더하고 (KTD1), 채점과 '맞은 걸로'에서 저장하고 (KTD3, KTD4), 단어 줄에 배지로 보인다 (KTD5).
- **Authority:** 단어시험 계획(`2026-10-26-1854-feat-word-test-plan.md`) R18과 영어 → 뜻 계획(`2026-10-26-2038-feat-word-test-meaning-plan.md`) R10의 '저장하지 않는다'를 이 계획이 바꾼다. 두 계획의 나머지 결정은 그대로다.
- **Execution profile:** git 저장소다. 기능 브랜치 `feat/word-test-pass-badge`에서 작업한다. 파일을 고치기 전에 목록을 보여 주고 승인을 받는다. 모든 실행은 로컬에서 한다.
- **Finish:** 구현과 로컬 검증까지가 이 계획이다. 커밋, `main` 병합, 배포는 사용자 확인 뒤에 한다.

---

## Product Contract

### Problem Frame

단어시험은 아무것도 저장하지 않아서(R18) 시험에서 맞힌 단어가 단어장에 보이지 않았다. 학습자는 이를 결함으로 보았다 (2026-10-28). 학습 상태는 카드에서 스스로 매기는 값이라, 시험 결과는 따로 보여야 한다.

### Requirements

- R1. 채점하면 시험에 나온 단어마다 합격(맞힘) 또는 불합격(틀림)을 저장한다. 뜻 → 영어와 영어 → 뜻 모두 같은 기록에 마지막 결과 하나만 둔다.
- R2. 결과 화면에서 '맞은 걸로'를 켜면 그 단어는 합격, 끄면 불합격으로 다시 저장한다.
- R3. 시험 결과는 학습 상태(안 봄·처음·애매·완벽), 복습 일정, 완벽 연속 횟수를 바꾸지 않는다. 상태는 지금처럼 카드 평가와 상태 칩으로만 바뀐다.
- R4. 단어 목록(Day 목록, 담은 단어 목록)의 줄마다 상태 칩 아래에 '합격' 또는 '불합격'을 아이콘과 글자로 보인다. 스크린리더는 '단어시험 합격'으로 읽는다. 시험을 본 적 없는 단어에는 없다.
- R5. 이전 버전은 시험 결과를 저장하지 않았으므로 옮길 결과가 없다. 업데이트 뒤 모든 단어가 배지 없이 시작하고, 시험을 보면 생긴다.
- R6. 이전 버전의 단어 기록과 백업 파일은 그대로 읽힌다.

### Key Decisions

- **상태와 따로 표시한다.** (session-settled: user-directed — chosen over 맞힌 단어를 '완벽'으로, 맞힘 '완벽'·틀림 '처음'으로: 시험이 복습 일정을 바꾸지 않게 한다) Governs R3, R4.
- **두 방향을 합쳐 마지막 결과만 둔다.** (session-settled: user-approved — chosen over 방향별로 따로) Governs R1.
- **'맞은 걸로'로 고친 답도 합격이다.** (session-settled: user-directed) Governs R2.
- **단어 줄 배지만 둔다.** (session-settled: user-approved — chosen over 배지와 함께 거르기 칩) Governs R4.
- **이전 버전 사용자는 배지 없이 시작한다.** (session-settled: user-approved — chosen over '완벽'을 합격으로 추정하기: 시험 결과가 아니다) Governs R5.

---

## Key Technical Decisions

- KTD1. **`wordEntrySchema`에 `tested: 'pass' | 'fail'`을 선택 필드로 더하고 `.catch(undefined)`를 붙인다.** `validEntries`는 형식에 맞지 않는 항목을 통째로 버린다. catch가 없으면 잘못된 `tested` 하나(손으로 고친 백업 등)로 그 단어의 상태·별표·연속 횟수까지 사라진다. 날짜는 쓸 곳이 없어 저장하지 않는다.
- KTD2. **기록 버전(`version: 1`)은 올리지 않는다.** 올리면 예전 코드가 기록 전체를 읽지 못해 빈 기록으로 시작하고, 다음 저장에서 단어 기록을 모두 덮어쓴다. 선택 필드라 기존 기록과 백업은 변환 없이 읽힌다.
- KTD3. **저장은 `recordTestResults([{ key, passed }])` 하나로 한다** (`words-store.svelte.ts`). 기록 키로 받아 `progress`가 화면 모듈(`CardWord`)을 모르게 한다. `toggleStar`처럼 항목을 펼쳐 필드 하나만 바꾸므로 상태와 일정이 그대로다. 카드 평가(`rated`)와 상태 칩(`withStatus`)도 항목을 펼치므로 `tested`를 지우지 않는다.
- KTD4. **페이지(`/words/test`)가 저장한다.** 채점할 때 문항 전부의 결과를, '맞은 걸로'를 누를 때 그 단어의 결과를 저장한다. 같은 기록 키가 한 시험에 두 번 나오면 하나라도 틀리면 불합격이다.
- KTD5. **배지는 `WordRow.svelte` 오른쪽 열의 상태 칩 아래에 둔다.** 오른쪽 열 너비(별표·발음 버튼 88px)를 넘지 않아 휴대폰에서 뜻 칸이 좁아지지 않는다. 배지가 있는 줄은 조금 높아진다. `BadgeCheck`/`BadgeX`와 `text-ok`/`text-bad`를 쓴다 (상태 '완벽'의 `CircleCheck`와 겹치지 않게).

### 예전 버전과 함께 쓸 때

- **예전 버전 탭:** Zod `z.object`는 모르는 필드를 지운다 (설계 문서 §4.1). 예전 코드 탭이 저장하면 `tested`만 사라지고 상태는 남는다. 새 버전은 서비스 워커가 대기시키고 '새로고침'으로 모든 탭을 함께 다시 열어, 버전이 섞이는 것은 서비스 워커를 거치지 않은 탭(강력 새로고침 등)뿐이다. 막지 않는다.
- **백업:** 예전 백업을 가져오면 배지 없이 읽힌다. 새 백업을 예전 버전에서 가져오면 합격 표시만 사라진다.

---

## 결과

- **구현:** `feat/word-test-pass-badge` 브랜치에 커밋하고 `main`에 병합해 배포했다 (2026-10-28, 사용자 요청).
  - `src/lib/progress/words.ts`: `tested` 필드 (KTD1)
  - `src/lib/progress/words-store.svelte.ts`: `recordTestResults` (KTD3)
  - `src/routes/words/test/+page.svelte`: 채점과 '맞은 걸로'에서 저장 (KTD4)
  - `src/lib/components/words/WordRow.svelte`: 배지 (KTD5)
- **테스트:**
  - `words-store.test.ts`: `tested` 없는 기존 기록 읽기, 잘못된 `tested`만 버리고 상태·별표 유지, 결과가 상태·일정과 따로 남음, 백업 왕복에 `tested` 유지, 예전 백업 복원.
  - `word-test-result.e2e.ts`: 채점 뒤 상태 없이 결과만 남고 담은 단어 목록에 배지가 보임. '저장하지 않음'(R18)을 검사하던 줄을 지웠다.
  - `word-test-meaning.e2e.ts`: '맞은 걸로'를 켜고 끌 때 합격/불합격이 바뀜. '저장하지 않음'(R10)을 검사하던 줄을 바꿨다.
  - `word-list.e2e.ts`: 합격·불합격 배지와 상태 칩이 따로 보이고, 시험을 안 본 줄에는 배지가 없음.
- **검증:** `npx vitest run` 621개 통과, `npm run check` 오류 0, `npm run lint` 통과, `npx playwright test` 370개 통과 · 8개 건너뜀 (휴대폰·아이패드·PC). 휴대폰 라이트·PC 다크 화면에서 배지 배치를 눈으로 확인했다.
- **업그레이드 확인 (일회성, 저장소 밖 스크립트):** `main` 빌드와 이 브랜치 빌드를 같은 주소에 번갈아 띄우고 한 브라우저로 11단계를 확인했다 (서비스 워커는 막음).
  - 예전 빌드에서 상태·별표·담은 단어를 만들고 시험을 보면 아무것도 저장되지 않는다.
  - 새 빌드는 그 기록과 문제집 기록을 그대로 읽고 배지가 없다. 시험을 보면 배지가 생기고, 이미 '애매'였던 단어도 상태가 그대로다.
  - 예전 백업은 배지 없이, 새 백업은 배지와 함께 복원된다.
  - 예전 빌드로 돌아가면 상태와 별표는 그대로 읽히고, 다음 저장에서 `tested`만 사라진다 (알려진 위험). 새 백업도 예전 빌드에서 가져와진다.
- **계획과 달라진 것:** 결과를 넣는 순수 함수를 따로 두지 않고 저장소 함수 안에 썼다 (`toggleStar`와 같은 방식). 그래서 `words.test.ts`는 고치지 않았다. 승인을 받아 `e2e/word-test-meaning.e2e.ts`와 설계 문서 §6.6·§6.7도 고치고 §6.8을 더했다.
- **남은 위험:** 예전 버전 탭이 결과를 지울 수 있다 (위). 실제 기기에서 배지 크기와 색을 확인하지 않았다.
