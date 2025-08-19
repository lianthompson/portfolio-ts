import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {

    // Check if window is defined before accessing it
    if (typeof window !== 'undefined') {
      setScreenSize(window.innerWidth);
    }
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;

};

export default useScreenSize;