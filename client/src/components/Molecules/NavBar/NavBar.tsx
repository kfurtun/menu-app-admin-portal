import React from 'react';
import { Container } from './NavBar.styles';
import { animated } from 'react-spring';
import useSlide from './animations/useSlide';

interface Props {
  children?: React.ReactNode;
  setIsSideBarOpen: (value: (prevState: boolean) => boolean) => void;
  isSideBarOpen: boolean;
}

function NavBar(props: Props) {
  const { setIsSideBarOpen, isSideBarOpen } = props;
  const sideBarAnimation = useSlide(isSideBarOpen);
  return (
    <Container as={animated.div} style={sideBarAnimation}>
      <button onClick={() => setIsSideBarOpen((prev) => !prev)}>Zaa</button>
    </Container>
  );
}

export default NavBar;
