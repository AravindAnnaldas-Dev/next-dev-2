'use client';

import React, { useEffect, useState } from 'react';

const BrowserApiUseEffect = () => {
  // While using browser API use useEffect
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    const onWindowHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    onWindowHandler();

    window.addEventListener('resize', onWindowHandler);

    return () => {
      window.removeEventListener('resize', onWindowHandler);
    };
  }, []);

  return <div>Browser innerWidth: {windowWidth}</div>;
};

export default BrowserApiUseEffect;
