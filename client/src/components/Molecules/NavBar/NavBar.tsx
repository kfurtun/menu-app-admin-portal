import React, { useState } from 'react';
import { Container } from './NavBar.styles';
import ToggleButton from './ToggleButton';

interface Props {
  children?: React.ReactNode;
  setIsSideBarOpen: (value: (prevState: boolean) => boolean) => void;
  isSideBarOpen: boolean;
}

function NavBar(props: Props) {
  const { setIsSideBarOpen, isSideBarOpen } = props;
  const [togglerHover, setTogglerHover] = useState<boolean>(false);

  const isTogglerHovered = (): void => {
    setTogglerHover((prev) => !prev);
  };

  return (
    <Container>
      <ToggleButton
        setIsSideBarOpen={setIsSideBarOpen}
        isTogglerHovered={isTogglerHovered}
        togglerHover={togglerHover}
        isSideBarOpen={isSideBarOpen}
      />
    </Container>
  );
}

export default NavBar;
