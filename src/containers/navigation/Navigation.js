import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './NavigationStyles';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.leftArea = null;
    this.rightArea = null;
  }

  componentDidMount() {
    this.shareEquallySize();
  }

  componentWillReceiveProps(nextProps) {
  }

  shareEquallySize() {
    const leftWidth = this.leftArea.getBoundingClientRect().width;
    const leftHeight = this.leftArea.getBoundingClientRect().height;

    const rightWidth = this.rightArea.getBoundingClientRect().width;
    const rightHeight = this.rightArea.getBoundingClientRect().height;

    if (leftWidth > rightWidth) {
      this.rightArea.style.width = `${leftWidth}px`;
      this.rightArea.style.height = `${leftHeight}px`;
    }

    if (leftWidth < rightWidth) {
      this.leftArea.style.width = `${rightWidth}px`;
      this.leftArea.style.height = `${rightHeight}px`;
    }
  }

  render() {
    const {
      isShadow,
      leftElement,
      centerElement,
      rightElemnet,
      isFixed,
    } = this.props;

    return (
      <Wrapper isShadow={isShadow} isFixed={isFixed}>
        <div ref={comp => (this.leftArea = comp)}>{leftElement}</div>
        <div>{centerElement}</div>
        <div ref={comp => (this.rightArea = comp)}>{rightElemnet}</div>
      </Wrapper>
    );
  }
}

Navigation.propTypes = {
  isShadow: PropTypes.bool,
  leftElement: PropTypes.node,
  centerElement: PropTypes.node,
  rightElemnet: PropTypes.node,
  isFixed: PropTypes.bool,
};

Navigation.defaultProps = {
  isShadow: false,
  leftElement: null,
  centerElement: null,
  rightElemnet: null,
  isFixed: true,
};

export default Navigation;
