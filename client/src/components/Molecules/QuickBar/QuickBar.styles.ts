import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';
import { mediaQueries } from 'theme/mediaQueries';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: ${pxToRem(60)};
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: none;
  ${mediaQueries.medium} {
    display: block;
  }
`;
