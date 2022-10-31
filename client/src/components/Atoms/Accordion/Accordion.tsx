import React from 'react';
import {
  Container,
  MainContainer,
  AccordionContainer,
  AccordionItem,
} from './Accordion.styles';
import { Item } from 'data/data';
import useSlide from './animations/useSlide';
import { animated } from 'react-spring';
import useMeasure from 'react-use-measure';

interface Data {
  logo: string;
  text: string;
  items: { [key: string]: Item };
}

interface Props {
  onClick: () => void;
  open: boolean;
  data: Data;
}

function Accordion(props: Props) {
  const { data, onClick, open } = props;
  const [ref, { height }] = useMeasure();
  const accordionAnimation = useSlide(open, height);

  return (
    <Container>
      <MainContainer onClick={onClick}>
        <div>{data.logo}</div>
        <div>{data.text}</div>
        <div>caret</div>
      </MainContainer>
      <animated.div style={accordionAnimation}>
        <AccordionContainer ref={ref}>
          {Object.values(data.items).map((item) => (
            <AccordionItem to="/" key={item.text}>
              {item.text}
            </AccordionItem>
          ))}
        </AccordionContainer>
      </animated.div>
    </Container>
  );
}

export default Accordion;
