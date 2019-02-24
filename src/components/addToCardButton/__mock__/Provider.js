// mock up Context Api

import context from '../testHelpers';
export const MyContext = ({
  Consumer(props) {
    return props.children(context)
  }
})
