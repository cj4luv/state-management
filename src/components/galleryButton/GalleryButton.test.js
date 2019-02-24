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

  it('초기 렌더링 스냅샷 일치함', () => {
    expect(component).toMatchSnapshot();
  });

  it('function called on click', () => {
    const component = mount(<GalleryButton />);
    console.log(component);
    // component.find('button').simulate('click');
  });
});
