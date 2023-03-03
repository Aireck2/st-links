"use client";
import { FC } from "react";

import styled, { useTheme } from "styled-components";

import { useThemeContext } from "@/context/ThemeProvider";
import Sun from "./Sun";
import Moon from "./Moon";

export const ButtonStyled = styled.button`
  all: unset;
  stroke: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  & svg:hover {
    transform: scale(1.075);
  }
`;

export const Switch: FC = () => {
  const ctx = useThemeContext();
  const theme: any = useTheme();

  const icon = ctx?.isDarkTheme ? (
    <Sun color={theme.colors.textColor} width={20} />
  ) : (
    <Moon color={theme.colors.textColor} width={20} />
  );

  return <ButtonStyled onClick={ctx?.toggleTheme}>{icon}</ButtonStyled>;
};
