import { Toggler, TogglerBar } from './NavBar.styles';
import { animated } from 'react-spring';
import useTogglerBarSlide from './animations/useTogglerBarSlide';

interface Props {
  setIsSideBarOpen: (value: (prevState: boolean) => boolean) => void;
  isTogglerHovered: () => void;
  togglerHover: boolean;
  isSideBarOpen: boolean;
}

function ToggleButton(props: Props): JSX.Element {
  const { setIsSideBarOpen, isTogglerHovered, togglerHover, isSideBarOpen } =
    props;
  return (
    <Toggler
      onClick={() => setIsSideBarOpen((prev) => !prev)}
      onMouseEnter={isTogglerHovered}
      onMouseLeave={isTogglerHovered}
    >
      <TogglerBar />
      <TogglerBar
        as={animated.span}
        style={useTogglerBarSlide(togglerHover, isSideBarOpen, true)}
      />
      <TogglerBar
        as={animated.span}
        style={useTogglerBarSlide(togglerHover, isSideBarOpen)}
      />
    </Toggler>
  );
}

export default ToggleButton;
