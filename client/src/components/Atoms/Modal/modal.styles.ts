import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background: lightgray;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.2;
`;

export const Body = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  position: relative;
`;
