import rafSchedule from 'raf-schd';

// Gallery
class GalleryController {
  constructor() {
    // Create a new function to schedule updates.
    // 스크롤 이벤트 호출 최적화 를 위해 rafSchedule 사용
    this.scheduleUpdate = rafSchedule(this.scrollScheule);
  }

  initialize = (data, callback) => {
    const arr = data;

    for (let i = 0; i < 18; i += 1) {
      arr.push({
        id: i,
      });
    }

    return callback(arr);
  }

  handleScroll = (e, data, callback) => {
    const { scrollTop, clientHeight, scrollHeight } = e.nativeEvent.target;

    return this.scheduleUpdate({ scrollTop, clientHeight, scrollHeight }, data, callback);
    // return callback(arr);
  }

  scrollScheule = (point, data, callback) => {
    const { scrollTop, clientHeight, scrollHeight } = point;
    if (scrollHeight - scrollTop === clientHeight) {
      // console.log('bottom', this.tempImageData);
      const images = [];
      for (let i = 0; i < 18; i += 1) {
        images.push({id: data.length + (i + 1)});
      }
      return callback(images);
    }
  };
}


export default GalleryController;
