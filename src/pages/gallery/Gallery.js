import React, { Component } from 'react';

import Nav from '../../containers/galleryNav/GalleryNav';
import List from '../../containers/photoList/PhotoList';
import FooterButton from '../../components/footerButton/FooterButton';

import { Provider as CountProvider } from './Context';
import Controller from './Controller';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(context);
    this.controller = new Controller();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Gallery did update");
  }

  render() {
    return (
      <CountProvider>
        <Nav />
        <List controller={this.controller} />
        <FooterButton />
      </CountProvider>
    );
  }
}

export default Gallery;
