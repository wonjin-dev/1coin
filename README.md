# 1COIN (Want COIN)

```
  당신의 인생을 바꿔줄 1COIN
```
## _Tech Stack_

<div>
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652190-f113fe0f-6432-481e-9c9b-b1869ddc67c7.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652259-5c3b7a73-854c-40cc-bedd-f9a36f7ba664.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/159604709-2324406b-7861-48fb-a455-9769ed0b1073.jpeg">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469221-20b4777f-0cef-46ee-95d7-ac0dffa02962.png">
</div>

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
<hr>

<p style="font-size: xx-large"><a href="https://github.com/wonjin-dev/1coin/blob/master/dev-log.md">Dev-Log</a></h1>