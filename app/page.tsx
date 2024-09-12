"use client";

import { useCustomContext } from "@/contexts/theme-context";
import React from "react";

const Home = () => {
  const { theme, setTheme } = useCustomContext()!;

  return (
    <>
      <h1>{theme}</h1>
      <button
        className="border-[1px] border-black py-2 px-4 rounded-lg overflow-hidden"
        onClick={() => setTheme("dark")}
      >
        click to change theme
      </button>
    </>
  );
};

export default Home;
