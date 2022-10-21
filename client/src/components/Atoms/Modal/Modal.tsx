import React from 'react';
import Button from '../Button';
import { Wrapper, Background, Body } from './modal.styles';
import { icons } from 'utilities/icons';

interface Props {
  children?: React.ReactNode;
  open: Boolean;
  setShowModal: (value: (prevState: Boolean) => Boolean) => void;
}

function Modal(props: Props): JSX.Element {
  const { open, children, setShowModal } = props;
  return (
    <>
      {open && (
        <Wrapper>
          <Background />

          <Body>
            <Button
              text={icons.open}
              onButtonClick={() => {
                setShowModal((prev) => !prev);
              }}
            />
            {children}
          </Body>
        </Wrapper>
      )}
    </>
  );
}

export default Modal;
