import React, { useState } from 'react';
import Button from 'components/Atoms/Button';
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
      <Button text="Add new menu item" onButtonClick={handleClick} />
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
