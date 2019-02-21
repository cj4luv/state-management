import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 101;

  .innerContainer: {
    position: absolute;
    width: 100%;
    z-index: 101;
  }

  .nav-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: #484848;
  }

  .nav-right-btn {
    font-size: 14px;
    line-height: 1.71;
    color: #01bafa;
  }
`;

export default Wrapper;
