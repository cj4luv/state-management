import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import GalleryButton from "./GalleryButton";

// ensure you're resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

const defaultContext = {
  state: {
    count: 0,
    actions: {
      increment: () => {},
      decrement: () => {},
      add: () => {},
      cut: () => {},
    },
  }
};

// Takes the context data we want to test, or uses defaults
const getGalleryButtonWithContext = (context = defaultContext) => {

  console.log('context', context);
  // Will then mock the LocalizeContext module being used in our LanguageSelector component
  jest.doMock('./LocalizeContext', () => {
    return {
      Context: {
        Consumer: props => props.children(context)
      }
    };
  });

  // you need to re-require after calling jest.doMock.
  // return the updated GalleryButton module that now includes the mocked context
  return require("./GalleryButton").default;
};

describe("GalleryButton", () => {
  it("should return default list of count", () => {
    // This will use the default context param since we pass nothing
    const GalleryButton = getGalleryButtonWithContext();
    console.log(GalleryButton);
    const wrapper = mount(<GalleryButton />);
    console.log(wrapper);
    expect(wrapper.find("p").length).toBe(3);
  });
  // let component = null;
  //
  // it("초기 렌더링이 문제없이 되야함", () => {
  //   component = shallow(<GalleryButton />);
  // });
  //
  // it("초기 렌더링 스냅샷 일치함", () => {
  //   expect(component).toMatchSnapshot();
  // });
});
