import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 11;
  overflow-x: hidden;
  background-color: #f0f0f0;
  overflow-y: scroll;
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 60px;

  .photo_section {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    background-color: transparent;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
`;

export default Wrapper;
