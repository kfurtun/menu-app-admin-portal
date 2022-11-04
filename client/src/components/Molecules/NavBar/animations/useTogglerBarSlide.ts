import { useSpring } from 'react-spring';

function useTogglerBarSlide(
  togglerHover: boolean,
  isSideBarOpen: boolean,
  isSecond?: boolean
) {
  return useSpring({
    maxWidth:
      togglerHover || !isSideBarOpen ? '100%' : isSecond ? '70%' : '60%',
  });
}

export default useTogglerBarSlide;
