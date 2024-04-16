# 리액트

## 리액트 메모

`npm start`: 로컬 환경에서 실행. 빠르게 개발하고 반응을 즉각적으로 확인할 수 있음

`npx create-ract-app .` : 현재 경로에 리액트 샘플 프로젝트 생성

`npm run build`: npm 모듈 실행

`npx serve -s build` build 디렉터리를 배포

`key..`: html을 render하는 반복문 안에서 고유한 key란 이름의 prop을 주면 된다 (리액트가 자동으로 생성하면서 추적을 해야 한다, 성능을 높이고 정확한 동작에 필요)

`prop`: html을 render할때, 부모 html 조각에서 자식 html 조각에게 넘기는 속성 값들

`훅`: 리액트에서 제공하는 빌트인 함수. ex) useState

`setXXX` 실행시, 해당 훅을 포함한 컴포넌트가 다시 렌더링된다

`setState`를 할 때, 원시 타입과 달리 Reference타입은 주소에 해당하는 객체 자체를 바꿔줘야 한다. (깊은 복사).
Java로 생각해보면 동등성이 아닌 동일성 비교를 기준으로 상태 변경 여부를 확인하는 것으로 보인다.

`state`는 read-only이다. setState를 통해 state를 변경해야 한다

`onChange`: html과 다르게 상태가 변경될 때마다 다시 렌더링한다

## 리액트 오답 노트

### npx 명령어 실행시 오류
`npx create-react-app . `를 실행해서 npm 관련 오류가 날 경우, %AppData%에 npm 디렉터리를 만들어서 해결

# 타입스크립트

## 타입스크립트 메모

- `tsc {파일명}.ts`: 특정 ts 파일 실행 (윈도에서는 오류 발생)
  - 이 명령어로 대체 `tsc -p {파일명}.ts`:
- `node {파일명}.js`: 특정 js파일 실행