import { useSpring } from 'react-spring';

function useSlide(open: boolean) {
  return useSpring({
    translateX: open ? '0%' : '-100%',
  });
}

export default useSlide;
