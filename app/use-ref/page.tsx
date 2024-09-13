"use client";

import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(inputRef);
  }, []);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input
        className="py-1 px-2 border-[1px] border-black bg-sky-100"
        ref={inputRef}
        type="text"
      />
      <button
        className="px-2 py-1 border-[1px] border-black bg-sky-400"
        onClick={handleClick}
      >
        click!
      </button>
    </>
  );
};

export default UseRef;
