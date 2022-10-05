import React from 'react';

interface InputBoxProps {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox(props: InputBoxProps): JSX.Element {
  const { placeholder, handleChange } = props;
  return (
    <input type="text" placeholder={placeholder} onChange={handleChange} />
  );
}

export default InputBox;
