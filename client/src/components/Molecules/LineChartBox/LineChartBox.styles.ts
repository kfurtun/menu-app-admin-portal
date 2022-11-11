import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';

interface PercentageInfoProps {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // width: ${pxToRem(260)};
  width: 24%;
  height: ${pxToRem(140)};
  border: solid 1px red;
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
