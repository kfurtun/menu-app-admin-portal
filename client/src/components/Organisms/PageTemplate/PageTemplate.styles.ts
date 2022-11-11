import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';

export const Container = styled.div`
  display: flex;
`;

export const BodyContainer = styled.div`
  //   margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: ${pxToRem(60)};
`;
