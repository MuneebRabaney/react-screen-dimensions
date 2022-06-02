import React, { createContext, useContext, useState, useEffect } from 'react';

type Props = {
  children?: React.ReactNode | undefined;
};

interface IViewport {
  width: number;
  height: number;
}

const AppScreenContext = createContext<IViewport>({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const AppScreenProvider: React.FC = ({ children }: Props) => {
  const [width, setScreenWidth] = useState(window.innerWidth);
  const [height, setScreenHeight] = useState(window.innerHeight);

  function handleScreenResize() {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    // run cleanup after window resize
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  return (
    <AppScreenContext.Provider value={{ width, height }}>
      {children}
    </AppScreenContext.Provider>
  );
};

export default function useScreenLogger() {
  return useContext<IViewport>(AppScreenContext);
}
