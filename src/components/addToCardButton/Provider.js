// default Context
import React from 'react';

export const MyContext = React.createContext({
  onAddToCartClick: () => console.log('add cart'),
  count: 3,
});
