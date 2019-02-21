import React, { Component } from 'react';

import Nav from '../../containers/galleryNav/GalleryNav';
import List from '../../containers/photoList/PhotoList';
import FooterButton from '../../components/footerButton/FooterButton';

import { Provider as CountProvider } from './Context';

class Gallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Gallery did update");
  }

  render() {
    return (
      <CountProvider>
        <Nav />
        <List />
        <FooterButton />
      </CountProvider>
    );
  }
}

export default Gallery;
