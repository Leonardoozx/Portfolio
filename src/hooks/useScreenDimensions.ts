import { useState, useEffect } from 'react';

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
