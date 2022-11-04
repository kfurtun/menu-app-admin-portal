import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(76)};
  background: var(--primary-background-color);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 ${pxToRem(30)};
`;

export const Toggler = styled.button`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border: none;
  background: var(--primary-background-color);
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(4)};
`;

export const TogglerBar = styled.span`
  height: ${pxToRem(2)};
  width: 100%;
  background: #007bff;
  display: flex;
  align-self: flex-start;
`;
