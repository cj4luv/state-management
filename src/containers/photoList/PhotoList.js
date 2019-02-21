import React, { Component } from "react";

import Spinner from "../../components/spinner/Spinner";
import Wrapper from "./PhotoListStyle";
import GalleryButton from "../../components/galleryButton/GalleryButton";

class photoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.controller = props.controller;
    this.isLastChunk = false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Photo List did update");
  }

  componentDidMount() {
    this.controller.initialize(this.state.data, data =>
      this.setState({ data })
    );
  }

  handleScroll = (point, data) => {
    this.controller.handleScroll(
      point,
      data,
      images => this.setState(prevState => ({
        data: prevState.data.concat(images),
      })),
    );
  };

  renderThumbnailList = data => {
    return data.map((item, idx) => <GalleryButton key={idx} data={item} />);
  };

  render() {
    const { data } = this.state;

    if (data.length < 1) return <Spinner />;
    return (
      <photo-list onScroll={point => this.handleScroll(point, data)}>
        <Wrapper>
          <div className="photo_section">{this.renderThumbnailList(data)}</div>
        </Wrapper>
      </photo-list>
    );
  }
}

export default photoList;
