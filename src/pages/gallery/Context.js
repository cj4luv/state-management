import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import createConsumer from '../../common/createConsumer';

const Context = createContext();

const { Provider: BaseProvider, Consumer: BaseConsumer, } = Context;

class Provider extends Component {
  state = {
    count: 0,
  };

  selectImageArr = [];

  actions = {
    increment: () => {
      this.setState(({ count }) => ({
        count: count + 1,
      }));
    },
    decrement: () => {
      this.setState(({ count }) => ({
        count: count - 1,
      }));
    },
    add: (item) => {
      this.selectImageArr.push(item);
    },
    cut: (item) => {
      const idx = this.selectImageArr.findIndex(x => x.id === item.id);

      if (idx === -1) {
        return alert('사진 인덱스 찾지 못했습니다.');
      }

      return this.selectImageArr.splice(idx, 1);
    },
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Context did update");
  }

  render() {
    const { children } = this.props;
    const { count } = this.state;
    const { selectImageArr, actions } = this;

    const defaultValue = {
      count,
      actions,
      selectImageArr,
    };

    return <BaseProvider value={defaultValue}>{children}</BaseProvider>;
  }
}

const Consumer = createConsumer(BaseConsumer);

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export { Provider, Consumer };
