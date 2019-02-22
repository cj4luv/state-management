import rafSchedule from 'raf-schd';

// 트래킹 위한 어떤 리액트 컴포넌트에서 호출 되엇는지
// 어떤 컨트롤러를 호출한지
// 어떤 API를 썻는지
// 서버 통신시 url, query, body 무엇을 썻는지
// 위 항목의 트래킹 스위치 함수 별도로 존재해야 한다.

// 이슈 사항
// 컨트롤러의 범위는 어디까지 가야 하는가?
// 컨트롤러의 클래스화가 맞는 방향인가?
// 용도별 컨트롤러의 분류가 맞는가? || 사용되는 페이지 단위의 분류가 맞는가?
// gloval state managemet의 actions은 컨트롤러에 포함 해야 하는가?

// Gallery
class GalleryController {
  constructor() {
    // Create a new function to schedule updates.
    // 스크롤 이벤트 호출 최적화 를 위해 rafSchedule 사용
    this.scheduleUpdate = rafSchedule(this.scrollScheule);

    this.initialize.displayName = 'initialize';
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
