import { Sora } from "next/font/google";
import { createGlobalStyle } from "styled-components";

import { DarkThemeType } from "./dark";
import { LightThemeType } from "./light";

const sora = Sora({ subsets: ["latin"] });

export const GlobalStyles = createGlobalStyle<{
  theme: DarkThemeType & LightThemeType;
  isDark?: boolean;
}>`
   body {
     font-family: ${sora.style.fontFamily};
     background: ${({ isDark }) =>
       `url(${isDark ? "/dark-bg.svg" : "/light-bg.svg"})`};
     color: ${({ theme }) => theme.colors.white};
     transition: all 0.3s ease-in-out;
  }

  @media (orientation: landscape){
   ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
      background-color: hsl(210deg, 14%, 66%);
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: hsl(210deg, 14%, 66%);
      border: 2px solid hsl(210deg, 15%, 20%);
   }

   ::-webkit-scrollbar-track {
      background-color: hsl(210deg, 15%, 20%);
    }
  }
`;
