import React from 'react';
import {
  Container,
  MainContainer,
  AccordionContainer,
  AccordionItem,
  LogoTitleContainer,
} from './Accordion.styles';
import { Item } from 'data/data';
import { useRotateCaret, useSlide } from './animations';
import { animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/Atoms/Icon';

interface Data {
  logo: string;
  text: string;
  items: { [key: string]: Item };
}

interface Props {
  onClick: () => void;
  open: boolean;
  data: Data;
  category: string;
  isActive: boolean;
}

function Accordion(props: Props) {
  const { data, onClick, open, category, isActive } = props;
  const [ref, { height }] = useMeasure();
  const accordionAnimation = useSlide(open, height);
  const caretAnimation = useRotateCaret(open);

  return (
    <Container>
      <MainContainer onClick={onClick} isActive={isActive}>
        <LogoTitleContainer>
          <span>
            <Icon name={data.logo} />
          </span>
          <span>{data.text}</span>
        </LogoTitleContainer>
        {!data.items.main && (
          <animated.div style={caretAnimation}>
            <FontAwesomeIcon icon={faAngleUp} />
          </animated.div>
        )}
      </MainContainer>
      {!data.items.main && (
        <animated.div style={accordionAnimation}>
          <AccordionContainer ref={ref}>
            {Object.values(data.items).map((item) => (
              <AccordionItem
                to={`/${category}/${item.url}`}
                key={item.text}
                ref={ref}
              >
                {item.text}
              </AccordionItem>
            ))}
          </AccordionContainer>
        </animated.div>
      )}
    </Container>
  );
}

export default Accordion;
