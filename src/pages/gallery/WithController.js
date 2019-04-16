import React from "react";
import Controller from './Controller';

const withController = data => (WrappedComponent) => {
  console.log('call decorator function', data);
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.controller = new Controller();
    }
    render() {
      return <WrappedComponent {...this.props} controller={this.controller} />;
    }
  };
}

export default withController;
