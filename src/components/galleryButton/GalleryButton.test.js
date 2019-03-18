import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import GalleryButton from './GalleryButton';

// 유닛 테스팅이란, 소프트웨어를 기능별로 쪼개고,
// 그리고 그 기능 내부에서 사용되는 함수들도,
// 쪼개고 쪼개서 아주 작은 단위로 테스팅을 하는것을 의미합니다.

// ensure you're resetting modules before each test
// 테스트 전에 실행 되므로 테스트 전에 사전처리를 여기서 진행 한다.
beforeEach(() => {
  // 참고 - https://jestjs.io/docs/en/jest-object#jestresetmodules
  jest.resetModules();
});

// 코드 테스팅 로직을 쪼개고 쪼갤때, 일단 가장 작은 단위는 it
// 그리고 여러개의 it 을 describe 안에 넣을 수 있게 되며,
// describe 안에는 또 여러개의 describe 를 넣을 수 있습니다.

/**
 * @param string 작업의 설명(어떤기능을 확인할것인지)
 * @param func 검사할 내용
 */
describe('GalleryButton', () => {
  let component = GalleryButton;

  /**
   * @param string 작업의 설명(무엇을 검사해야되는지의 내용)
   * @param func 검사할 내용
   */
  it('초기 렌더링이 문제없이 되야함', () => {
    component = shallow(<GalleryButton />);
  });

  it('function click', () => {
    // https://github.com/airbnb/enzyme/issues/814#issuecomment-362319285

    console.log('shallow comp', shallow(<GalleryButton />));
    // console.log('get 0', shallow(<GalleryButton />).get(0));

    // 데코레이팅(리액트에선 HOC) 된 리액트 컴포넌트 의 스테이트 값을 가져오기 위한 작업
    // shallow 함수 설명 https://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html#
    // mount 함수 설명 https://airbnb.io/enzyme/docs/api/ReactWrapper/mount.html
    // shallow or mount 함수는 ReactWrapper 생성한다.
    // 위 두함수의 차이점 https://medium.com/@sangboaklee/react-%ED%85%8C%EC%8A%A4%ED%8C%85-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0-1c3719cee5af
    const wrapper = mount(shallow(<GalleryButton />).get(0));
    wrapper.find('Button').simulate('click');
    console.log('state', wrapper.state());

    // expect 를 통하여 특정 값이 우리가 예상한 값이 나왔는지 확인 할수 있게
    // 이벤트 진행후 결가값이 펄스 인지 체크 - https://jestjs.io/docs/en/expect.html
    expect(wrapper.state().isSelect).toBe(true);
  });

  it('초기 렌더링 스냅샷 일치함', () => {
    // 스냅샷 테스팅은, 컴포넌트를 주어진 설정으로 렌더링하고,
    // 그 결과물을 파일로 저장합니다.
    // 그리고, 다음번에 테스팅을 진행하게 되었을때,
    // 이전의 결과물과 일치하는지 확인합니다.
    expect(component).toMatchSnapshot();
  });
});
