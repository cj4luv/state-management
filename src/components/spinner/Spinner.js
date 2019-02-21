import React, { Component } from 'react';
import Wrapper from './SpinnerStyle';

class Spinner extends Component {
  render() {
    return (
      <Wrapper>
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
      </Wrapper>
    );
  }
}


export default Spinner;
