import React, { Component } from 'react';
import rafSchedule from 'raf-schd';

import Spinner from '../../components/spinner/Spinner';
import Wrapper from './PhotoListStyle';
import GalleryButton from '../../components/galleryButton/GalleryButton';

class photoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.handleScroll = this.handleScroll.bind(this);

    // Create a new function to schedule updates.
    // 스크롤 이벤트 호출 최적화 를 위해 rafSchedule 사용
    this.scheduleUpdate = rafSchedule(this.scrollScheule);

    this.isLastChunk = false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Photo List did update");
  }

  componentDidMount() {
    const { data } = this.state;
    for (let i = 0; i < 18; i += 1) {
      data.push({
        id: i,
      });
    }

    this.setState({
      data,
    });
  }

  handleScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.nativeEvent.target;

    // When we receive a scroll event, schedule an update.
    // If we receive many updates within a frame, we'll only publish the latest value.
    this.scheduleUpdate({ scrollTop, clientHeight, scrollHeight });
  }

  scrollScheule = (point) => {
    const { scrollTop, clientHeight, scrollHeight } = point;
    if (scrollHeight - scrollTop === clientHeight) {
      // console.log('bottom', this.tempImageData);
      const { data } = this.state;
      const images = [];
      for (let i = 0; i < 18; i += 1) {
        images.push({id: data.length + (i + 1)});
      }
      this.setState({ data: data.concat(images) });
    }
  };

  renderThumbnailList = (data) => {
    return data.map((item, idx) => <GalleryButton key={idx} data={item} />);
  };

  render() {
    const { data } = this.state;

    if (data.length < 1) return <Spinner />;

    console.log(data);
    return (
      <photo-list onScroll={this.handleScroll}>
        <Wrapper>
          <div className="photo_section">{this.renderThumbnailList(data)}</div>
        </Wrapper>
      </photo-list>
    );
  }
}

export default photoList;
