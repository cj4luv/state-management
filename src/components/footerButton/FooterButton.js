import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './FooterButtonStyels';

import { Consumer } from '../../pages/gallery/Context';

class FooterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      text: '사진 선택',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { count } = nextProps;
    return this.setState({ disabled: count === 0 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { disabled } = this.state;

    return disabled !== nextState.disabled;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('footer Button did update');
  }

  handleClick = (disabled) => {
    const { count, selectImageArr } = this.props;
    if (count > 0) {
      console.log('footer seleecte data', selectImageArr);
      return console.log(selectImageArr);
    }
    console.log('footer unknown data', selectImageArr);
    return alert('최소 한장의 사진을 선택해주세요');
  };

  render() {
    const { disabled, text } = this.state;

    return (
      <Wrapper
        style={buttonDynamicStyles(disabled)}
        disabled={disabled}
        type="button"
        onClick={e => this.handleClick(disabled)}
      >
        {text}
      </Wrapper>
    );
  }
}

const buttonDynamicStyles = disabled => ({
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: disabled ? '#c4c4c4' : '#01bafa',
});

const defaultMapContextToProps = (value) => {
  return {
    count: value.count,
    selectImageArr: value.selectImageArr,
  };
};

FooterButton.propTypes = {
  count: PropTypes.number,
  selectImageArr: PropTypes.array,
};

FooterButton.defaultProps = {
  count: 0,
  selectImageArr: [],
};

export default Consumer(defaultMapContextToProps)(FooterButton);
