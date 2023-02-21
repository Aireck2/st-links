"use client";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import darkTheme from "@/themes/dark";
import lightTheme from "@/themes/light";

import { ThemeProvider as ThemeProviderStyled } from "styled-components";

interface ThemeProviderProps {
  children: JSX.Element;
}

const ThContext = createContext<{
  theme: string;
  setTheme?: Dispatch<SetStateAction<Themes>>;
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
} | null>({ theme: "dark" });

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    if (window !== undefined) {
      const isDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  }, []);
  return (
    <ThContext.Provider value={{ theme, toggleTheme, setTheme, isDarkTheme }}>
      <ThemeProviderStyled theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProviderStyled>
    </ThContext.Provider>
  );
};

type Themes = "light" | "dark";

export const useThemeContext = () => useContext(ThContext);
