import React, { useState } from 'react';
import SideBar from 'components/Molecules/SideBar';
import NavBar from 'components/Molecules/NavBar';
import { Container, BodyContainer } from './PageTemplate.styles';
import useSlide from './animations/useSlide';
import { animated } from 'react-spring';
import QuickBar from 'components/Molecules/QuickBar';

interface Props {
  children: React.ReactNode;
}

function PageTemplate(props: Props) {
  const { children } = props;
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  const sideBarAnimation = useSlide(isSideBarOpen);
  return (
    <Container>
      <BodyContainer as={animated.div} style={sideBarAnimation}>
        <NavBar
          setIsSideBarOpen={setIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
        />
        {children}
      </BodyContainer>
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
      <QuickBar />
    </Container>
  );
}

export default PageTemplate;
