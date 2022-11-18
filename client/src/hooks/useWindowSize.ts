import { useState, useEffect } from 'react';
import { WindowSize } from 'models/windowSize';

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    prevWidth: 0,
    prevHeight: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize((prev) => {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
          prevWidth: prev.width,
          prevHeight: prev.height,
        };
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
