import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import GalleryButton from './GalleryButton';

// ensure you're resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

describe('GalleryButton', () => {
  let component = GalleryButton;

  it('초기 렌더링이 문제없이 되야함', () => {
    component = shallow(<GalleryButton />);
  });

  it('function called on click', () => {
    // https://github.com/airbnb/enzyme/issues/814#issuecomment-362319285
    const wrapper = mount(shallow(<GalleryButton />).get(0));
    component = mount(<GalleryButton />);
    component.find('Button').simulate('click');
    console.log(wrapper.state());

    // 이벤트 진행후 결가값이 펄스 인지 체크
    expect(wrapper.state().isSelect).toBe(false);
  });

  it('초기 렌더링 스냅샷 일치함', () => {
    expect(component).toMatchSnapshot();
  });
});
