import React from 'react';
import { showSection } from 'redux/states/sectionState';
import { useAppDispatch } from 'redux/hooks';
import { icons } from 'utilities';

interface Props {
  show: Boolean;
  title: string;
  type: string;
  children?: React.ReactNode;
}

function Section(props: Props): JSX.Element {
  const { show, title, type, children } = props;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showSection({ type }));
  };

  return (
    <div>
      <div>
        <span>{title}</span>
        <button onClick={handleClick}>{show ? icons.open : icons.close}</button>
      </div>
      {show && children}
    </div>
  );
}

export default Section;
