import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';
import { mediaQueries } from 'theme/mediaQueries';
import { isAbsolute } from 'path';

export const Container = styled.div`
  display: flex;
`;

export const BodyContainer = styled.div`
  //   margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 0;

  ${mediaQueries.large} {
    margin-right: ${pxToRem(60)};
  }
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;
