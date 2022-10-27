import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { Wrapper, Background, Body } from './modal.styles';

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
            <CloseButton
              onClick={() => {
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
