'use client';

import React, { useState } from 'react';

const BrowserApiConditional = () => {
  // While using browser API conditional
  const [windowWidth, setWindowWidth] = useState<number>();

  if (typeof window !== 'undefined') {
    setWindowWidth(window.innerWidth);
  }

  return <div>Browser innerWidth: {windowWidth}</div>;
};

export default BrowserApiConditional;
