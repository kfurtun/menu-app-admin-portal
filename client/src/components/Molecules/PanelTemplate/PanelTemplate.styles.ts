import Button from 'components/Atoms/Button';
import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  height: ${pxToRem(464)};
  width: 100%;
  background: var(--primary-background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 6px 1px rgb(69 65 78 / 10%);
`;

export const UpperTable = styled.div`
  height: ${pxToRem(94)};
  width: 100%;
  padding: ${pxToRem(24)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: var(--header-font-size);
  width: 100%;
`;

export const StyledButton = styled(Button)`
  background: var(--primary-item-color);
  border-radius: ${pxToRem(4)};
  border: none;
  width: ${pxToRem(140)};
  height: ${pxToRem(44)};
  padding: ${pxToRem(10)} ${pxToRem(16)};
  color: var(--primary-background-color);
  font-size: var(--primary-font-size);

  &:hover {
    background: var(--primary-hover-color);
  }
`;
