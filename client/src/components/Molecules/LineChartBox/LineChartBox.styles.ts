import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';

interface PercentageInfoProps {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${pxToRem(140)};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 6px 1px rgb(69 65 78 / 10%);
  overflow: hidden;
  ${mediaQueries.small} {
    width: 48%;
  }

  ${mediaQueries.large} {
    width: 24%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: ${pxToRem(16)} ${pxToRem(20)};
`;

export const MoneyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--primary-text-color);
  span {
    &:first-child {
      font-size: ${pxToRem(14)};
    }
    &:nth-child(2) {
      font-size: ${pxToRem(24)};
    }
  }
`;
export const PercentageInfo = styled.span<PercentageInfoProps>`
  background: ${(props) => props.backgroundColor};
  color: var(--primary-background-color);
  width: ${pxToRem(66)};
  height: ${pxToRem(26)};
  padding: ${pxToRem(6)} ${pxToRem(14)};
  text-align: center;
  font-size: ${pxToRem(14)};
  border-radius: ${pxToRem(24)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
