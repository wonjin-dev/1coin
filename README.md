# 1COIN (Want COIN)

```
  당신의 인생을 바꿔줄 1COIN
```
## _Tech Stack_

<div>
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652190-f113fe0f-6432-481e-9c9b-b1869ddc67c7.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652259-5c3b7a73-854c-40cc-bedd-f9a36f7ba664.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469158-5150ccf7-c857-4fa6-90ee-4d22fc4ffd6c.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/159604709-2324406b-7861-48fb-a455-9769ed0b1073.jpeg">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469221-20b4777f-0cef-46ee-95d7-ac0dffa02962.png">
</div>

<hr>

## _Dev-Log_

**_`22/04/09`_**
**_1. THEME 모드에 따른 토글 버튼 렌더링 변경_**
> Recoil Atom state 형식 변경

**_2. Stared Coins 페이지 개발_**
> 기존 로직 변경

<br>

**_`22/04/07`_**
**_1. 모든 파일 코드 포매팅_**
> css 스타일링 작성 규칙,<br>\- import 규칙,<br>\- indent 규칙,<br>\- 세미 콜론 규칙

**_2. To Do Lsit 작성_**
> 1. 토글 버튼 스타일링 (다크 모드, 북마크 보기 버튼)
> 2. 다크 모드, 라이트 모드 디자인 색 변경
> 3. 인디케이터 오류 수정 (코인 리스트, 북마크 리스트 페이지)

<br>

**_`22/04/05`_**<br>
**_1. 북마크 기능 오류 수정 -2_**
> 필터 후 다시 코인 리스트 리렌더시에 북마크 유지 안 되는 오류 해결(로직적 문제, isStared라는 프로퍼티를 바라보고 있는게 달라서...)<br>만든 util을 이용해 atom에 star된 코인들을 기억후 일치하는 이름이 있으면 리스트 리렌더시 true를 넘겨주게 작성

**_`22/04/04`_**<br>
**_1. util 함수 재업로드_**

**_2. 북마크 된 코인이 없을 때 예외 처리_**

**_3. 북마크 기능 오류 수정_**
> \- unbookmark 후 rebookmark시 재등록이 아닌 추가 등록 되는 오류 해결<br>
> \- filter시에 star icon이 유지 안 되는 로직 오류 해결
<br>

**_`22/04/03`_**<br>
**_1. 토글 함수 개발_**

**_2. Recoil을 이용한 bookmark 기능 추가_**

<br>

**_`22/04/03`_**<br>
**_1. React-router-dom v5에서 v6으로 업데이트_**

**_2. 로그인 및 회원가입 기능 삭제_**
> 'Landing', 'Register'페이지 삭제, Modals 삭제, 관련 Atoms 및 로직 삭제

**_3. staredCoin Atom 생성_**

<br>

**_`22/03/30`_**<br>
**_1. 커스텀 모달 개발_**
> Confirm Modal, Alert Modal

**_2. local storage util 함수 개발_**
> get & set & remove

<br>

**_`22/03/27`_**<br>
**_1. 유저 사인 기능 개발 -1_**
> \- Recoil을 이용해 백엔드 없이 회원가입 구현<br>\- util함수 생성 (아이디 중복 체크)

<br>

**_`22/03/26`_**<br>
**_1. 미디어 쿼리 작성_**
> 해상도에 따른 암호화폐 리스트 컴포넌트 변화

<br>

**_`22/03/23`_**<br>
**_1. 회원가입 & 로그인 페이지 레이아웃 구현_**
> Input, Button을 Public으로 분리하여 이후 개발에 공통 컴포넌트로 고려하여 개발

**_2. COLORS 상수 제거_**

**_3. 다크모드 & 컨트롤 토글 추가_**

<br>

**_`22/02/27`_**<br>
**_1. 파일 이름 오류 수정_**

**_2. lint 규칙 수정_**

<Br>

**_`22/02/26`_**<br>
**_1. Theme Provider 제거_**

> 사용하지 않는 기능 제거. 색상을 제외한 font나 스타일 포맷이 없기 때문에 constatns에 분리하여 사용

**_2. api schema && component interfaces 하나의 파일에 통합하여 작성_**

**_3. stale time, cache time 설정_**

> 한 시간이 지나기 전에는 fresh 상태로 인식하여 리페치를 진행하지 않게 설정

**_4. 코드 포매팅_**

> 삼항 연산자 코드 포매팅 변경 && Lint 설정

<br>

**_`22/01/27`_**<br>
**_1. 코드 포매팅_**

> css 작성 규칙을 만들면 코드의 가독성이 좋아질것으로 기대된다

```
/** css formatting **/

display
justify-content
align-items
size styles (width, height . . .)
space styles (margin, padding . . .)
background styles
border stlyes
font styles
color styles
animations
```

<br>

**_`22/01/26`_**<br>
**_1. Landing 페이지 모바일 해상도 조정 및 여러 디바이스를 위한 css 변경_**

**_2. Coins 페이지 모바일 해상도 조정 및 여러 디바이스를 위한 css 변경_**

**_3. CoinCard 컴포넌트 디자인 변경_**

**_4. Coin 페이지 Header 추가_**
<br><br>

**_`22/01/25`_**<br>
**_1. Chart 컴포넌트 툴팁 값 소수점 둘째자리로 고정_**

**_2. Coin 컴포넌트 코인의 설명이 길면 자르는 로직 추가_**
<br><br>

**_`22/01/24`_**<br>
**_1. Landing 페이지 개발 -2_**

> 어떤 배경 이미지든 채도 및 명도를 낮추어 보여주는 스타일을 생성

<br>

**_`22/01/23`_**<br>
**_1. Landing 페이지 개발 -1_**

> \- 라우터 변경<br> - Title animation 개발

<br>

**_`22/01/22`_**<br>
**_1. Loader 컴포넌트 개발_**

> 모듈을 사용하여 inidicator를 Loader 컴포넌트로 사용하려다가,<br>animation을 이용하여 직접 구현.<br>page || spin 타입을 선택하여 사용할 수 있게 만듬

<br>

**_`22/01/21`_**<br>
**_1. 무한 스크롤 구현_**

> API에서 지정된 개수만큼 가져와서 첫 렌더링 이후로는 Observer를 이용하여 무한 스크롤을 구현<br>timer를 통해 Throttling을 설정하여, Observer의 민감도에 관계 없이 요청 속도를 조절

<br>

**_`22/01/20`_**<br>
**_1. Coin 페이지 구현_**

> Coins에서 넘겨받은 state로 필요한 데이터를 API로 받아온 후,<br>API로 통해 클릭된 코인의 상세 데이터를 가져와서 구현(Coin 컴포넌트 구현에 필요한)

**_2. Chart 컴포넌트 개발_**

> API를 통해 필요한 데이터를 받아온 후, <br>react-ApexChart를 이용하여 차트 구현

**_3. Gh-pages를 이용하여 배포_**
<br><br>

**_`22/01/19`_**<br>
**_1. 개발 환경 설정_**

> \- TypeScript<br>- Styled-Components<br>- React-Query

**_2. Coins 페이지 구현_**

> API로부터 코인 리스트에 필요한 데이터를 받아온 후,<br>CoinCard 컴포넌트를 만들어 UI를 구현

**_3. `Link to State`를 통해 Coin 컴포넌트에 필요한 데이터 매핑_**

<hr>

## _Trouble shooting_

**_1. 빌드 오류_**

> https://github.com/facebook/create-react-app/issues/11930

```
TypeError: MiniCssExtractPlugin is not a constructor
```

> `CAUSE`: react 내부에서 `mini-css-extract-plugin`의 버전 업에 따른 충돌로 빌드 오류가 발생했다<br>
> `SOLUTION`: `yarn add mini-css-extract-plugin@2.4.5`

**_2. Gh-pages를 이용한 배포 실패_**

> `CAUSE`: `react-router-dom`에서 `BrowserRouter`는 Gh-pages로 배포시에 /{repository}가 기본 url이기 때문에 라우트가 일치하지 않아서 빌드에 오류가 발생했다<br>
> `SOLUTION`: 라우터 설정에서 `basename={process.env.PUBLIC_URL}`를 작성해준다

**_3. 무한 스크롤 반복 배열 오류_**

> `CAUSE`: Observer를 통한 무한 스크롤 구현에서, Observer의 민감도 때문에 데이터 페칭이 끝나기 전에 API를 재호출 하여, 순서에 맞지 않는 반복된 데이터를 가져오는 오류가 발생했다<br>
> `SOLUTION`: timer를 이용해 Throttling을 설정하여 해결

**_4. Recoil로 패치한 상태에 따른 전역 스타일링 오류_**

```
Invalid hook call. Hooks can only be called inside of the body of a function component
```

> `CAUSE`: `useRecoilValue`라는 hook을 통해 상태를 가져오기 때문에 기존 상수로 디자인을 지정해주던 방식으로는 컴포넌트가 아니기 때문에 훅스를 사용할 수 없었다(hook은 컴포넌트 최상위에서 불려야하기 때문)<br>
> `SOLUTION`: Stlyed-components에서 제공하는 ThemeProvider를 이용해 Theme을 사전에 정의하고 컴포넌트에서 스타일링을 입히게 로직을 변경하였다