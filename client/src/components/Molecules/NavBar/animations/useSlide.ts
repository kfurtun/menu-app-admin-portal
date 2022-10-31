import { useSpring } from 'react-spring';

function useSlide(open: boolean) {
  return useSpring({
    marginLeft: open ? '30%' : '0%',
  });
}

export default useSlide;
