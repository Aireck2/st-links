"use client";
import { FC } from "react";
import Image from "next/image";

import styled from "styled-components";

import { useThemeContext } from "@/context/ThemeProvider";

export const ButtonStyled = styled.button`
  all: unset;
  /* color: ${({ theme }) => theme.colors.textColor}; */
  stroke: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;

export const Switch: FC = () => {
  const ctx = useThemeContext();
  const src = ctx?.isDarkTheme ? "/icons/sun.svg" : "/icons/moon.svg";
  const alt = ctx?.isDarkTheme ? "sun icon" : "moon icon";

  return (
    <ButtonStyled onClick={ctx?.toggleTheme}>
      <Image src={src} alt={alt} height={24} width={24} />
    </ButtonStyled>
  );
};
