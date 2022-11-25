import React, { useState, useEffect } from 'react';
import SideBar from 'components/Molecules/SideBar';
import NavBar from 'components/Molecules/NavBar';
import { Container, BodyContainer, Background } from './PageTemplate.styles';
import useSlide from './animations/useSlide';
import { animated } from 'react-spring';
import QuickBar from 'components/Molecules/QuickBar';
import { WindowSize } from 'models/windowSize';
import useWindowSize from 'hooks/useWindowSize';
import { breakPoints } from 'theme/mediaQueries';
import useMediaQuery from 'hooks/useMediaQuery';

interface Props {
  children: React.ReactNode;
}

function PageTemplate(props: Props) {
  const { children } = props;
  const { width, prevWidth }: WindowSize = useWindowSize();
  const matches: boolean = useMediaQuery('(min-width:1024px)');
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(
    matches ? true : false
  );
  const sideBarAnimation = useSlide(isSideBarOpen);

  useEffect(() => {
    if (
      (width >= breakPoints.large && prevWidth < breakPoints.large) ||
      (width < breakPoints.large && prevWidth >= breakPoints.large)
    )
      setIsSideBarOpen((prev) => !prev);
  }, [width]);

  return (
    <Container>
      {isSideBarOpen && !matches && (
        <Background onClick={() => setIsSideBarOpen((prev) => !prev)} />
      )}
      <BodyContainer
        as={matches ? animated.div : undefined}
        style={matches ? sideBarAnimation : undefined}
      >
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
