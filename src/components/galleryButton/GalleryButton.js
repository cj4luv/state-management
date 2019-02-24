import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../../elements/button/Button";
import styles from "./GalleryButtonStyles";

import { Consumer } from "../../pages/gallery/Context";

class GalleryButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelect: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Image Button did update");
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isSelect } = this.state;

    if (nextState.isSelect !== isSelect) {
      return true;
    }

    const { selectImageArr } = this.props;

    const idx = selectImageArr.findIndex(x => x.id === nextProps.data.id);

    // 선택 된 이미지 부분의 넘버링 재설정을 위한 조건
    if (idx > -1 && isSelect) return true;

    return false;
  }

  handleClick = (e, data) => {
    console.log('click', data);
    this.setState(prevState => {
      const { isSelect } = prevState;
      const { actions, count } = this.props;
      if (count > 9 && !isSelect) {
        alert("사진은 최대 10개 선택 가능합니다.");
        return null;
      }

      if (!isSelect && count < 11) {
        actions.increment();
        actions.add(data);
        return {
          isSelect: true
        };
      }

      actions.decrement(data);
      actions.cut(data);
      return {
        isSelect: false
      };
    });
  };

  render() {
    const { data, selectImageArr } = this.props;
    const { isSelect } = this.state;
    const idx = selectImageArr.findIndex(x => x.id === data.id);

    return (
      <Button
        style={styles.container}
        onClick={e => this.handleClick(e, data)}
      >
        <p style={{ position: 'absolute' }}>{Number(data.id) + 1}</p>
        {isSelect ? (
          <div style={styles.dimmer}>
            <div style={styles.circleActive}>{idx + 1}</div>
          </div>
        ) : (
          <div style={styles.circle} />
        )}
        <img src={data.thumbnailURL} style={styles.image} alt="" />
      </Button>
    );
  }
}

const defaultMapContextToProps = value => {
  return {
    actions: value.actions,
    count: value.count,
    selectImageArr: value.selectImageArr,
  };
};

GalleryButton.propTypes = {
  data: PropTypes.object,
  actions: PropTypes.object,
  count: PropTypes.number,
  selectImageArr: PropTypes.array
};

GalleryButton.defaultProps = {
  data: {
    id: 0,
  },
  actions: null,
  count: 0,
  selectImageArr: []
};

export default Consumer(defaultMapContextToProps)(GalleryButton);
