"use client";
import { Children, FC } from "react";
import styled from "styled-components";

import { GlobalStyles } from "@/themes/GlobalStyles";

interface AppProps {
  children: JSX.Element | JSX.Element[];
}

const AppStyled = styled.main`
  height: 100vh;
  height: 100%;
  width: 100vw;
  max-width: 680px;
  margin: auto;
  padding: 2rem;
`;

export const App: FC<AppProps> = ({ children }) => {
  const childrenLength = Children.toArray(children).length;

  return (
    <AppStyled>
      <GlobalStyles />
      {childrenLength > 1 ? <>{children}</> : children}
    </AppStyled>
  );
};
