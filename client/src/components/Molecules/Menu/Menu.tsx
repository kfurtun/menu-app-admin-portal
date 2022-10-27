import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'components/Atoms/Modal';
import MenuBody from './MenuBody';
import SampleMenuItem from './SampleMenuItem';

function Menu(): JSX.Element {
  const [showModal, setShowModal] = useState<Boolean>(false);

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Button onClick={handleClick}>Add new menu item</Button>
      {showModal && (
        <Modal open={showModal} setShowModal={setShowModal}>
          <MenuBody />
          <SampleMenuItem />
        </Modal>
      )}
    </div>
  );
}

export default Menu;
