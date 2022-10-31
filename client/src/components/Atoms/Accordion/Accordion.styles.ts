import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MainContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${pxToRem(64)};
  background: var(--primary-background-color);
  border: none;
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
  height: ${pxToRem(64)};
  line-height: ${pxToRem(64)};
  display: block;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: var(--primary-item-color);
  }
`;
