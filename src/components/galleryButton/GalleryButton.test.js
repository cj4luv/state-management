import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';

// ensure you're resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

const defaultContext = {
  state: { count: 0 },
  selectImageArr: [],
  actions: {
    increment: () => {},
    decrement: () => {},
    add: () => {},
    cut: () => {},
  },
};

// Takes the context data we want to test, or uses defaults
const getGalleryButtonWithContext = (context = defaultContext) => {
  console.log('get context', defaultContext);
  // Will then mock the LocalizeContext module being used in our GalleryButton component
  jest.doMock('./LocalizeContext', () => {
    console.log('do mock');
    return {
      LocalizeContext: {
        Consumer: props => props.children(context),
      }
    };
  });

  // you need to re-require after calling jest.doMock.
  // return the updated GalleryButton module that now includes the mocked context
  return require('./GalleryButton').default;
};

describe('<GalleryButton />', () => {
  const GalleryButton = getGalleryButtonWithContext(defaultContext);
  let component = GalleryButton;

  it('초기 렌더링이 문제없이 되야함', () => {
    console.log('render OK');
    component = shallow(<GalleryButton />);
  });

  it('should return default list of count', () => {
    // This will use the default context param since we pass nothing
    // const GalleryButton = getGalleryButtonWithContext();
    console.log('create GalleryButton');
    const wrapper = mount(<GalleryButton />);
    console.log('did mounted', wrapper);
    expect(wrapper.find('p').length);
    console.log('expert', wrapper.find('p').length);
  });

  it('초기 렌더링 스냅샷 일치함', () => {
    expect(component).toMatchSnapshot();
  });
});
