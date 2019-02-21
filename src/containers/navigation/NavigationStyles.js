import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 56px;
  width: 100%;
  position: ${props => props.isFixed ? 'fixed' : 'relative'};
  left: 0;
  top: 0;
  z-index: 10;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: ${props => props.isShadow ? '0 2px 4px 0 rgba(0, 0, 0, 0.12)' : 'none'};
`;

export const tem = null;
