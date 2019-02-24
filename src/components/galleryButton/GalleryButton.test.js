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
    component = mount(<GalleryButton />);
    component.find('Button').simulate('click');
  });

  it('초기 렌더링 스냅샷 일치함', () => {
    expect(component).toMatchSnapshot();
  });
});
