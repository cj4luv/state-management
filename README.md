## 필수 사전 지식 리스트
1. Render-props pattern - https://reactjs.org/docs/render-props.html
2. HOC(High-Order-Component) - https://reactjs.org/docs/higher-order-components.html#___gatsby
3. Context Api - https://reactjs.org/docs/legacy-context.html#how-to-use-context
4. React-life-cycle - https://reactjs.org/docs/react-component.html
5. javascript 연산자 - https://mygumi.tistory.com/33
6. 프론트앤드 체크리스트 - https://github.com/kesuskim/Front-End-Checklist
7. 리액트 랜더링 퍼포먼스 디버깅 방 - https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab

## atomic design article
https://brunch.co.kr/@ultra0034/63

## 추후 적용사항들
1. react-virtualized - https://github.com/bvaughn/react-virtualized
2. typescript - 자바스크립트는 동적언어 인데 정적으로 사용하기 위함으로
3. tslint
4. react suspense
5. react Fragments
6. 개발 문서 작성 docz => https://www.docz.site
7. UI 개발 및 테스트시 Storybook => https://storybook.js.org
8. hooks
9. Immer - 불변함 유지 (global state 값을 변경 할때 필수)
10. RX js
11. ts-jest
12. Enzyme - https://github.com/airbnb/enzyme (react 컴포넌트 테스트에 사용한다.)
13. date-fns - 모멘트 js 대체용
14. react-portal - modal 만들어보기
15. 코드 스플리팅 - https://reactjs.org/docs/code-splitting.html
16. react lazy
17. componentDidCatch && getDerivedStateFromError - https://reactjs.org/docs/error-boundaries.html


## 추후 조사해야될 사항
1. 브라우저 캐싱 처리 방안
2. 코도바에서 디바이스 로컬 디비 사용방안
3. 클라이언트 사이드에서의 보안
4. 유닛 테스트 - https://velopert.com/3587
5. context vs redux

## 리액트 컴포넌트 테스팅 시나리오
1. 특정 props 에 따라 컴포넌트가 크래쉬 없이 잘 렌더링이 되는지 확인
2. 이전에 렌더링했던 결과와, 지금 렌더링한 결과가 일치하는지 확인
3. 특정 DOM 이벤트를 시뮬레이트 하여, 원하는 변화가 제대로 발생하는지 확인
4. 렌더링된 결과물을 이미지 로 저장을 하여 픽셀을 하나하나 확인해서 모두 일치하는지 확인(스토리북 추천)
