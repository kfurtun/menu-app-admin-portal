import React from 'react';

interface InputBoxProps {
  placeholder: string;
  value?: string | number;
  type?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox(props: InputBoxProps): JSX.Element {
  const { placeholder, handleChange, value, type } = props;
  return (
    <input
      type={type ? type : 'text'}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}

export default InputBox;
