import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  padding: ${pxToRem(30)};
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
