import React, { useState } from 'react';
import {
  Container,
  Header,
  HeaderButton,
  SideBarItemContainer,
} from './SideBar.styles';
import {
  NavigateFunction,
  useNavigate,
  useLocation,
  useMatch,
} from 'react-router-dom';
import Accordion from 'components/Atoms/Accordion';
import { data } from 'data/data';
import useSlide from './animations/useSlide';
import { animated } from 'react-spring';

interface Props {
  children?: React.ReactNode;
  isSideBarOpen: boolean;
}

function SideBar(props: Props) {
  const { isSideBarOpen } = props;
  const navigate: NavigateFunction = useNavigate();

  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  const sideBarAnimation = useSlide(isSideBarOpen);

  // const buttonRef = createRef<HTMLButtonElement>();
  // let location = useLocation();
  // let match = useMatch('/asd');

  return (
    <Container style={sideBarAnimation} as={animated.div}>
      <Header>
        <HeaderButton text="Brand logo" onClick={() => navigate('/')} />
      </Header>
      <SideBarItemContainer>
        <Accordion
          open={isAccordionOpen}
          onClick={() => setIsAccordionOpen((prev) => !prev)}
          data={data.sideBar.menus}
        />
      </SideBarItemContainer>
    </Container>
  );
}

export default SideBar;
