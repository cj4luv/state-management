import React from 'react';

// 컨테스트 값과 부모에서 받은 값을 프롭으로 받기 위해 Consumer
const createConsumer = Consumer => mapContextToProps => (WrappedComponent) => {
  // mapContextToProps 가 없으면 그냥 context 를 그대로 props 에 전달
  const defaultMapContextToProps = (context) => {
    return { ...context };
  };

  function consumer(props) {
    return (
      <Consumer>
        {(context) => {
          // console.log(context);
          // context에서 사용할 값 추출 첫번째 인자 어떤 함수를 실행 할건지 인자를 무엇으로 보낼지
          const contextProps = (mapContextToProps || defaultMapContextToProps)(context);
          // console.log(mapContextToProps);
          // console.log('contextProps', mapContextToProps({ test: 1 }));

          return <WrappedComponent {...contextProps} {...props} />;
        }}
      </Consumer>
    );
  }
  // displayName 설정
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'component';
  consumer.displayName = `consumer(${displayName})`;

  return consumer;
};

export default createConsumer;
