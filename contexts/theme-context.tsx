"use client";

import { createContext, useContext, useState } from "react";

type Tchildren = { children: React.ReactNode };
type Ttheme = "light" | "dark";
type Tcontext = {
  theme: Ttheme;
  setTheme: React.Dispatch<React.SetStateAction<Ttheme>>;
};

// create context
const ThemeContext = createContext<Tcontext | null>(null);

// provide context
export const ThemeContextProvider = ({ children }: Tchildren) => {
  const [theme, setTheme] = useState<Ttheme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// consume context
export const useCustomContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
