import React, { Component } from 'react';

import { MyContext } from './Provider';
import createConsumer from '../../common/createConsumer';

class AddToCartButton extends Component {
  render() {
    const { onAddToCartClick } = this.props;
    return <button onClick={onAddToCartClick}>Add to Cart</button>;
  }
}

const defalutValue = (value) => {
  // console.log('defalutValue', value.count);
  return {
    onAddToCartClick: value.onAddToCartClick,
    count: value.count,
  };
};

const Consumer = createConsumer(MyContext.Consumer)(defalutValue)(AddToCartButton);

export default Consumer;
