# Study P.A - 스터디 발표

<img src="https://i.imgur.com/ASUWKjO.png" width="100%" alt="metaImg"/>

<br>

```What It is?``` : 스터디를 진행하는 개발자들 위한 발표 도우미 !

<br>


## 최종 구현 화면

- vercel - [https://cottoncandy-study.netlify.app](https://cottoncandy-study.netlify.app)


### 닉네임(로그인) 설정

<img src="public/cover_login.PNG" width="50%" height="400px" alt="coverImg"/>


### 홈(로비)

<img src="public/cover_home.PNG" width="50%" height="400px" alt="coverImg"/>


### 방 생성 및 방 참여

<img src="public/cover_joinRoom.PNG" width="550px" height="350px" alt="coverImg"/>


## 룰렛 / 제비 (추첨)

<p align="left">
<img src="public/cover_roulette.PNG" width="43%" height="350px" alt="coverImg"/>
<img src="public/cover_jevi.PNG" width="43%" height="350px" alt="coverImg"/>
</p>

<br>

## 토이 프로젝트 진행 목적

- `React` `Typescript` 컴포넌트 모듈화
- `async`, `await`로 비동기 프로그래밍 코드 작성
- `Emotion` 사용으로 재사용 컴포넌트 구성
- `Fetch`로 상태 관리 및 API 통신
- `vite create` 및 `netlify` 배포
- `LocalStorage`로 닉네임(로그인) 기능 구현
- `Socket-Io`로 실시간 통신 구현

<br>

## 구현 요구 사항 목록

- [✅] 컴포넌트 모듈화
- [✅] 닉네임(로그인) 기능 구현 (로그인, 로그아웃, 회원가입)
- [✅] 라우터로 메뉴 카테고리 구현 (홈, 비즈니스, 엔터테인먼트 등)
- [✅] 심플하고 가독성이 높은 UI
- [✅] 모바일, 타블렛, 피씨 버전을 고려한 반응형 웹 사이트
- [✅] CSS 라이브러리 없이 SASS로 UI 구현

<br>

## 사용한 프레임워크 및 라이브러리 설명

- React: 컴포넌트 기반의 화면구성, Virtual DOM으로 인한 속도 향상, SPA(싱글 페이지 애플리케이션)
- TypeScript: 초기 데이터와 컴포넌트 사이에 전달되는 데이터의 컴파일 오류를 방지하기 위해 사용
- React-Query: 데이터 패칭시 로딩, 에러 state 관리를 쉽게 하기 위해 사용
- SASS/SCSS: 변수로 css 유지보수가 용이하기 위해 사용
- Vite: build 속도를 빠르게 하기 위해 사용
- Firebase: 사용자 데이터 저장 및 로그인 기능 구현을 위해 사용

## 실행 방법

```
yarn install
yarn dev
```