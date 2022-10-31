import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  background: grey;
  position: fixed;
  top: 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled(Button)`
  width: 100%;
  height: 100%;
  border: none;
  background: var(--active-button-background-color);
`;

export const SideBarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  elign-items: center;
  width: 100%;
`;

export const SideBarItem = styled(Button)`
  width: 100%;
  height: ${pxToRem(64)};
  background: var(--primary-background-color);
  border: none;
  color: red;
  &:hover {
    background: var(--active-button-background-color);
  }
`;
