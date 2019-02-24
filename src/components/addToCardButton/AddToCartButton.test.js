// AddToCartButton.test.js
import React from 'react';
import { mount } from 'enzyme';

import '../../setupTests';

import AddToCartButton from './AddToCartButton';
import context from './testHelpers';

// jest.mock('./Provider');

describe('CartButton', () => {
  it('function called on click', () => {
    const component = mount(<AddToCartButton />);
    component.find('button').simulate('click');

    expect(context.onAddToCartClick.mock.calls.length);
    console.log(context.onAddToCartClick.mock.calls.length, context.count);
  });
});
