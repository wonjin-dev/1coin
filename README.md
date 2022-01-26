# 1COIN

## _Get Started_

***on Github***
> 우측에 있는 `github-pages`를 클릭한 후,<br>`View deployment`를 클릭하여 프로젝트를 실행하실 수 있습니다

***local***
1. 터미널에 명령어 `npm i || yarn` 입력하여 프로젝트를 설치합니다<br>
2. 설치 후에 명령어 `npm start || yarn start` 를 터미널에 입력하여 프로젝트를 실행하실 수 있습니다<br>

## _Tech Stack_

<div>
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652190-f113fe0f-6432-481e-9c9b-b1869ddc67c7.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652259-5c3b7a73-854c-40cc-bedd-f9a36f7ba664.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469158-5150ccf7-c857-4fa6-90ee-4d22fc4ffd6c.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469221-20b4777f-0cef-46ee-95d7-ac0dffa02962.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/149559684-58c1a848-c0e2-401e-acf7-ae3b419769ff.png">
</div>

<hr>

## _Schedule_

***`22/01/27`***<br>
***1. 코드 포매팅***
> lint를 사용하지 않은 프로젝트이기도 하고, css 작성의 경우 규칙을 만들면 코드의 가독성이 좋아질것으로 기대된다

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

***`22/01/26`***<br>
***1. Landing 페이지 모바일 해상도 조정 및 여러 디바이스를 위한 css 변경***

***2. Coins 페이지 모바일 해상도 조정 및 여러 디바이스를 위한 css 변경***

***3. CoinCard 컴포넌트 디자인 변경***

***4. Coin 페이지 Header 추가***
<br>

***`22/01/25`***<br>
***1. Chart 컴포넌트 툴팁 값 소수점 둘째자리로 고정***

***2. Coin 컴포넌트 코인의 설명이 길면 자르는 로직 추가***
<br>

***`22/01/24`***<br>
***1. Landing 페이지 개발***
> 어떤 배경 이미지든 채도 및 명도를 낮추어 보여주는 스타일을 생성
<br>

***`22/01/23`***<br>
***1. Landing 페이지 개발 #1***
> \- 라우터 변경<br> - Title animation 개발
<br>

***`22/01/22`***<br>
***1. Loader 컴포넌트 개발***
> 모듈을 사용하여 inidicator를 Loader 컴포넌트로 사용하려다가,<br>animation을 이용하여 직접 구현.<br>page || spin 타입을 선택하여 사용할 수 있게 만듬
<br>

***`22/01/21`***<br>
***1. 무한 스크롤 구현***
> API에서 지정된 개수만큼 가져와서 첫 렌더링 이후로는 Observer를 이용하여 무한 스크롤을 구현<br>Throttling을 설정하여 Observer의 민감도에 관계 없이 요청 속도를 조절
<br>

***`22/01/20`***<br>
***1. Coin 페이지 구현***
> Coins에서 넘겨받은 state로 필요한 데이터를 API로 받아온 후,<br>API로 통해 클릭된 코인의 상세 데이터를 가져와서 구현(Coin 컴포넌트 구현에 필요한)
***2. Chart 컴포넌트 개발***
> API를 통해 필요한 데이터를 받아온 후, <br>react-ApexChart를 이용하여 차트 구현
***3. Gh-pages를 이용하여 배포***
<br>

***`22/01/19`***<br>
***1. 개발 환경 설정***
>\- TypeScript<br>- Styled-Components<br>- React-Query

***2. Coins 페이지 구현***
> API로부터 코인 리스트에 필요한 데이터를 받아온 후,<br>CoinCard 컴포넌트를 만들어 UI를 구현

***3. `Link to State`를 통해 Coin 컴포넌트에 필요한 데이터 매핑***

<hr>

## _Errors_

***1. 빌드 오류***
> https://github.com/facebook/create-react-app/issues/11930

```
TypeError: MiniCssExtractPlugin is not a constructor
```
> CAUSE: react 내부에서 `mini-css-extract-plugin`의 버전 업에 따른 충돌로 빌드 오류가 발생했다<br>
> SOLUTION: `yarn add mini-css-extract-plugin@2.4.5`

***2. Gh-pages를 이용한 배포 실패***
> CAUSE: `react-router-dom`에서 `BrowserRouter`는 Gh-pages로 배포시에 /{repository}가 기본 url이기 때문에 라우트가 일치하지 않아서 빌드에 오류가 발생했다<br>
> SOLUTION: 라우터 설정에서 `basename={process.env.PUBLIC_URL}`를 작성해준다

***3. 무한 스크롤 반복 배열 오류***
> CAUSE: Observer를 통한 무한 스크롤 구현에서, Observer의 민감도 때문에 데이터 페칭이 끝나기 전에 API를 재호출 하여, 순서에 맞지 않는 반복된 데이터를 가져오는 오류가 발생했다<br>
> SOLUTION: timer를 설정하여 Throttling을 설정하여 해결했다

<hr>

## _이 후 프로젝트에서는 . . ._

- Next.js를 이용해 SSR도 추가하여 개발해보자
- Skeleton UI를 이용해 Loader 컴포넌트를 만들어 보자
- 미디어 쿼리를 이용해 디바이스 해상도에 맞는 반응형 웹으로 디자인 해보자