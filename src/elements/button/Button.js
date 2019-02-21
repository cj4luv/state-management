import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './ButtonStyles';

class Button extends Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper {...this.props} role="button" tabIndex="-1">
        {children}
      </Wrapper>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
