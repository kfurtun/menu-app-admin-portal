import { useSpring } from 'react-spring';

function useRotateCaret(open: boolean) {
  return useSpring({
    rotate: open ? '0' : '-180deg',
  });
}

export default useRotateCaret;
