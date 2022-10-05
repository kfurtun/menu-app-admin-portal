import React from 'react';

interface ButtonProps {
  text: string;
  onButtonClick: () => void;
}

function Button(props: ButtonProps): JSX.Element {
  const { text, onButtonClick } = props;
  return <button onClick={onButtonClick}>{text}</button>;
}

export default Button;
