import { Sora } from "next/font/google";
import { createGlobalStyle } from "styled-components";

import { DarkThemeType } from "./dark";
import { LightThemeType } from "./light";

const sora = Sora({ subsets: ["latin"] });

export const GlobalStyles = createGlobalStyle<{
  theme: DarkThemeType & LightThemeType;
}>`
   body {
     font-family: ${sora.style.fontFamily};
     background: ${({ theme }) => theme.colors.background};
     color: ${({ theme }) => theme.colors.white};
     transition: all 0.50s linear; 
  }
`;
