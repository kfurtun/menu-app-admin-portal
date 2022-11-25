import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  font-size: var(--primary-font-size);
`;

export const Tr = styled.tr`
  text-align: left;
  border-bottom: 1px solid #dee2e6;
  line-height: ${pxToRem(24)};
`;

export const Th = styled.th`
  padding: ${pxToRem(12)};
`;
