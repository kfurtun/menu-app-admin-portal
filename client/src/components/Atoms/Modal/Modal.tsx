import React from 'react';
import Button from 'components/Atoms/Button';
import { Wrapper, Background, Body } from './modal.styles';

interface Props {
  children?: React.ReactNode;
  open: boolean;
  setShowModal: (value: (prevState: boolean) => boolean) => void;
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
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
              text="X"
            />
            {children}
          </Body>
        </Wrapper>
      )}
    </>
  );
}

export default Modal;
