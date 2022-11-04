import React, { useState } from 'react';
import { Container } from './NavBar.styles';
import { animated } from 'react-spring';
import useSlide from './animations/useSlide';
import ToggleButton from './ToggleButton';

interface Props {
  children?: React.ReactNode;
  setIsSideBarOpen: (value: (prevState: boolean) => boolean) => void;
  isSideBarOpen: boolean;
}

function NavBar(props: Props) {
  const { setIsSideBarOpen, isSideBarOpen } = props;
  const [togglerHover, setTogglerHover] = useState<boolean>(false);

  const sideBarAnimation = useSlide(isSideBarOpen);

  const isTogglerHovered = (): void => {
    setTogglerHover((prev) => !prev);
  };

  return (
    <Container as={animated.div} style={sideBarAnimation}>
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
