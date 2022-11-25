import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  padding: ${pxToRem(30)};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(30)};
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  row-gap: ${pxToRem(30)};
`;

export const OrdersAndRevenueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${pxToRem(30)};

  ${mediaQueries.xLarge} {
    flex-direction: row;
  }
`;
