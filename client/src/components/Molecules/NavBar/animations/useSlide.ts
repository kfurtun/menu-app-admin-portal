import { useSpring } from 'react-spring';

function useSlide(open: boolean) {
  return useSpring({
    marginLeft: open ? '255px' : '0px',
  });
}

export default useSlide;
