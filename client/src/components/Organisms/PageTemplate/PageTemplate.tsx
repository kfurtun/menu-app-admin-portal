import React, { useState } from 'react';
import SideBar from 'components/Molecules/SideBar';
import NavBar from 'components/Molecules/NavBar';
import { BodyContainer } from './PageTemplate.styles';
import useSlide from './animations/useSlide';
import { animated } from 'react-spring';

interface Props {
  children: React.ReactNode;
}

function PageTemplate(props: Props) {
  const { children } = props;
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  const sideBarAnimation = useSlide(isSideBarOpen);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <BodyContainer as={animated.div} style={sideBarAnimation}>
        <NavBar
          setIsSideBarOpen={setIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
        />
        {children}
      </BodyContainer>
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
    </div>
  );
}

export default PageTemplate;
