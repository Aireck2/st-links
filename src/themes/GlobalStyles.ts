import { createGlobalStyle } from "styled-components";

import { DarkThemeType } from "./dark";
import { LightThemeType } from "./light";

export const GlobalStyles = createGlobalStyle<{
  theme: DarkThemeType & LightThemeType;
}>`
   body {
     font-family: sans-serif;
     background: ${({ theme }) => theme.colors.background};
     color: ${({ theme }) => theme.colors.white};
     transition: all 0.50s linear; 
  }
`;
