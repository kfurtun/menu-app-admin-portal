import { useSpring } from 'react-spring';

function useSlide(open: boolean, height: number) {
  return useSpring({
    maxHeight: open ? height : 0,
    width: '100%',
    overflow: 'hidden',
  });
}

export default useSlide;
