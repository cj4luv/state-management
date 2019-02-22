// JSX 문법 사용을 위한 선언
import React from 'react';

/**
 * @see 컨테스트 값과 부모에서 받은 값을 프롭으로 받기 위한 함수 입니다.
 * @param node Consumer context Api의 값을 받아오기 위한 것
 * @param func mapContextToProps 호출된 곳에서 필요한 context 값을 정의 된 값
 * @param node WrappedComponent 호출 한곳에서 랩핑할 컴포넌트
 * @return func Consumer를 최종적으로 리턴
 */
const createConsumer = Consumer => mapContextToProps => WrappedComponent => {
  // mapContextToProps 값이 존재 하지 않을 경우 컨텍스트 값을 전부 전달
  const defaultMapContextToProps = (context) => {
    // defalut
    return { ...context };
  };

  /**
   * @see context Api Consumer에 담길 데이터를 정의
   * @param props 부모에서 받아온 props 값
   */
  function consumer(props) {
    return (
      <Consumer>
        {/* // Render-props 패턴 리드미 참조 */}
        {(context) => {
          // context에서 사용할 값 추출 첫번째 인자 어떤 함수를 실행 할건지 인자를 무엇으로 보낼지
          // mapContextToProps 정의가 되어 있지 않으면 defaultMapContextToProps 이 실행 된다. 왼쪽 부터 검사 진행 (단순 or 연산자다)
          const contextProps = (mapContextToProps || defaultMapContextToProps)(context);
          return <WrappedComponent {...contextProps} {...props} />;
        }}
      </Consumer>
    );
  }

  // displayName 설정(디버깅을 사용하기 위해 추가 아직 사용 안함)
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'component';
  consumer.displayName = `consumer(${displayName})`;

  return consumer;
};

export default createConsumer;
