import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string | JSX.Element;
  className?: string;
  mRef?: React.Ref<HTMLButtonElement>;
  onClick: () => void;
}

function Button(props: Props) {
  const { text, onClick, className, mRef } = props;
  return (
    <StyledButton onClick={onClick} className={className} ref={mRef}>
      {text}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
`;
