import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';

export const Tr = styled.tr`
  text-align: left;
  border-bottom: 1px solid #dee2e6;
  line-height: ${pxToRem(24)};
`;

export const Td = styled.td`
  padding: ${pxToRem(12)};

  ${mediaQueries.xLarge} {
    &:first-of-type {
      width: 50%;
    }

    &:nth-of-type(2) {
      width: 22%;
    }

    &:nth-of-type(3) {
      width: 28%;
    }
  }
`;
