import React, { Component } from "react";
import PropTypes from "prop-types";

import Nav from "../navigation/Navigation";
import Button from "../../elements/button/Button";

import Wrapper from "./GalleryNavStyles";
import { Consumer } from "../../pages/gallery/Context";

const close = "./svg/ic-ab-close.svg";

class GalleryNav extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Navigation did update");
  }

  render() {
    const { count } = this.props;
    return (
      <Wrapper role="banner">
        <div className="innerContainer" role="banner" data-app>
          <Nav
            isShadow={false}
            leftElement={
              <Button
                onClick={() => {
                  console.log("back");
                }}
                className="nav-left-btn"
              >
                <img src={close} alt="" />
              </Button>
            }
            centerElement={<p className="nav-title">갤러리</p>}
            rightElemnet={
              <p className="nav-right-btn">
                {count}
                /10 선택됨
              </p>
            }
          />
        </div>
      </Wrapper>
    );
  }
}

GalleryNav.propTypes = {
  history: PropTypes.object,
  count: PropTypes.number
};

GalleryNav.defaultProps = {
  history: null,
  count: 0
};

export default Consumer(value => {
  // console.log('useCount', value);
  return {
    count: value.count
  };
})(GalleryNav);
