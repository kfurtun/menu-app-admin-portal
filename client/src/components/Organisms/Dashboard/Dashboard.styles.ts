import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  padding: ${pxToRem(30)};
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // //height: 500px;
  // height: 100%;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 30px;
`;
