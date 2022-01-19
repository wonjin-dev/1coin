# 1COIN

## _Tech Stack_

<div>
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652190-f113fe0f-6432-481e-9c9b-b1869ddc67c7.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652259-5c3b7a73-854c-40cc-bedd-f9a36f7ba664.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469158-5150ccf7-c857-4fa6-90ee-4d22fc4ffd6c.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469221-20b4777f-0cef-46ee-95d7-ac0dffa02962.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/149559684-58c1a848-c0e2-401e-acf7-ae3b419769ff.png">
</div>

<br><hr>

## _Schedule_

***`01/20`***
1. Coin 페이지 구현
> Coins에서 넘겨받은 state로 필요한 데이터를 API로 받아온 후,<br>API로 통해 클릭된 코인의 상세 데이터를 가져와서 구현(Coin 컴포넌트 구현에 필요한)
2. Chart 컴포넌트 개발
> API를 통해 필요한 데이터를 받아온 후, <br>react-ApexChart를 이용하여 차트 구현
3. Gh-pages를 이용하여 배포
<br>

***`01/19`***
1. 개발 환경 설정
>\- TypeScript<br>- Styled-Components<br>- React-Query
2. Coins 페이지 구현
> API로부터 코인 리스트에 필요한 데이터를 받아온 후,<br>CoinCard 컴포넌트를 만들어 UI를 구현
3. `Link to State`를 통해 Coin 컴포넌트에 필요한 데이터 매핑

<br><hr>

## _ERRORS_

1. 빌드 오류
> https://github.com/facebook/create-react-app/issues/11930

<code>
TypeError: MiniCssExtractPlugin is not a constructor
</code>

> CAUSE: react 내부에서 `mini-css-extract-plugin`의 버전 업에 따른 충돌로 빌드 오류가 발생하였다<br>
> SOLUTION: `yarn add mini-css-extract-plugin@2.4.5`

2. Gh-pages를 이용한 배포 실패
> CAUSE: `react-router-dom`에서 `BrowserRouter`는 Gh-pages로 배포시에 /{repository}가 기본 url이기 때문에 라우트가 일치하지 않아서 발생한 오류이다<br>
> SOLUTION: 라우터 설정에서 `basename={process.env.PUBLIC_URL}`를 작성해준다
