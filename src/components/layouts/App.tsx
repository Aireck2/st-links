import { Children, FC, ReactNode } from "react";
import styled from "styled-components";

import { GlobalStyles } from "@/themes/GlobalStyles";

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

  return (
    <AppStyled>
      <GlobalStyles />
      {childrenLength > 1 ? <>{children}</> : children}
    </AppStyled>
  );
};
