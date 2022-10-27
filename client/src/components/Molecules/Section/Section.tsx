import React from 'react';
import { showSection } from 'redux/states/sectionState';
import { useAppDispatch } from 'redux/hooks';
import { icons } from 'utilities';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
        <Button onClick={handleClick} variant="light" size="sm">
          {show ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </Button>
      </div>
      {show && children}
    </div>
  );
}

export default Section;
