"use client";
import { FC } from "react";
import styled from "styled-components";

interface AppProps {
  children: JSX.Element;
}

const AppStyled = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #666;
  padding: 4rem;
`;

export const App: FC<AppProps> = ({ children }) => {
  return <AppStyled>{children}</AppStyled>;
};
