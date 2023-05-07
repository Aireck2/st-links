import { Children, FC, ReactNode } from "react";
import styled from "styled-components";

import { GlobalStyles } from "@/themes/GlobalStyles";
import { Footer } from "./Footer";
import { useThemeContext } from "@/context/ThemeProvider";

interface AppProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const AppStyled = styled.main`
  height: 100vh;
  height: 100%;
  width: 100vw;
  max-width: 480px;
  margin: auto;
`;

export const App: FC<AppProps> = ({ children }) => {
  const childrenLength = Children.toArray(children).length;
  const ctx = useThemeContext();

  return (
    <>
      <AppStyled>
        <GlobalStyles isDark={ctx?.isDarkTheme} />
        {childrenLength > 1 ? <>{children}</> : children}
        <Footer />
      </AppStyled>
    </>
  );
};
