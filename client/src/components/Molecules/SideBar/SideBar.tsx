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
import { convertToLowerCase } from 'helpers/convertToLowerCase';

interface Props {
  children?: React.ReactNode;
  isSideBarOpen: boolean;
}

interface AccordionStateType {
  [key: string]: boolean;
}

function SideBar(props: Props) {
  const { isSideBarOpen } = props;
  const navigate: NavigateFunction = useNavigate();

  const [accordionOpen, setAccordionOpen] = useState<AccordionStateType>({
    dashboard: true,
  });

  const sideBarAnimation = useSlide(isSideBarOpen);

  const handleAccordionClick = (
    text: string,
    isMain: boolean,
    url?: string
  ) => {
    if (isMain) navigate(`/${url}`);
    else
      setAccordionOpen((prev) => ({
        [convertToLowerCase(text)]: !prev[convertToLowerCase(text)],
      }));
  };

  // const buttonRef = createRef<HTMLButtonElement>();
  let location = useLocation();

  // let match = useMatch('/asd');

  return (
    <Container style={sideBarAnimation} as={animated.div}>
      <Header>
        <HeaderButton
          text="Brand logo"
          onClick={() =>
            navigate(`/dashboard/${data.sideBar.dashboard.items.brand.url}`)
          }
        />
      </Header>
      <SideBarItemContainer>
        {Object.values(data.sideBar).map((item) => (
          <Accordion
            open={accordionOpen[convertToLowerCase(item.text)]}
            onClick={() =>
              handleAccordionClick(
                item.text,
                'main' in item.items,
                'main' in item.items ? item.items.main.url : undefined
              )
            }
            category={convertToLowerCase(item.text)}
            data={item}
            key={item.text}
            isActive={location.pathname.includes(convertToLowerCase(item.text))}
          />
        ))}
      </SideBarItemContainer>
    </Container>
  );
}

export default SideBar;
