import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import pxToRem from 'theme/pxToRem';

interface MainContainerProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MainContainer = styled.button<MainContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${pxToRem(52)};
  background: var(--primary-background-color);
  border: none;
  font-size: var(--primary-font-size);
  padding: ${pxToRem(16)} ${pxToRem(24)};
  &:hover {
    color: var(--primary-item-color);
  }
  color: ${(props) => props.isActive && 'var(--primary-item-color)'};
`;

export const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--active-button-background-color);
`;

export const AccordionItem = styled(NavLink)`
  width: 100%;
  height: ${pxToRem(52)};
  line-height: ${pxToRem(52)};
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: var(--primary-font-size);
  &:hover {
    color: var(--primary-item-color);
  }
`;
