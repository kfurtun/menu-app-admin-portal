import React from 'react';

interface InputBoxProps {
  placeholder: string;
  value?: string | number;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox(props: InputBoxProps): JSX.Element {
  const { placeholder, handleChange, value } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}

export default InputBox;
