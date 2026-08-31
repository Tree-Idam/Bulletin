# 횃불교회 온라인 주보

GitHub Pages에서 바로 사용할 수 있는 정적 웹사이트입니다.

## 구성

- 홈
  - 주보
  - 말씀 다시보기
  - 처음 왔어요
  - 교회 소식
- 모든 메뉴는 별도 화면처럼 전환됩니다.
- 모바일 화면에 우선 최적화되어 있으며 PC에서도 가운데 정렬되어 표시됩니다.

## 가장 자주 수정할 파일

`content.js`

매주 아래 내용만 바꾸면 됩니다.

- `bulletin` : 주보 날짜 / 성경구절 / 설교 제목 / 본문 / 예배 순서
- `sermon` : 말씀 다시보기 요약
- `welcome` : 처음 온 분들을 위한 환영 문구
- `news` : 교회 소식

## GitHub Pages 올리는 방법

1. 이 폴더의 `index.html`, `styles.css`, `content.js`, `app.js`를 저장소 루트에 업로드합니다.
2. GitHub 저장소에서 **Settings → Pages**로 이동합니다.
3. **Build and deployment**에서 `Deploy from a branch`를 선택합니다.
4. Branch를 `main`, 폴더를 `/ (root)`로 설정한 뒤 저장합니다.
5. 잠시 뒤 GitHub Pages 주소가 생성됩니다.

## 저장소

사용 예정 저장소:
`Tree-Idam/Bulletin`

현재 저장소는 비어 있는 상태이므로 이 파일들을 그대로 최초 업로드해도 됩니다.

## 링크 수정

`index.html` 하단 footer의 이메일/Facebook/Instagram/YouTube 링크를 실제 교회 링크로 바꾸세요.

## 참고

별도 서버나 데이터베이스 없이 동작합니다.
따라서 업데이트는 GitHub에서 `content.js`를 수정하는 방식입니다.
