"use client";

import { FC } from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";

import { constants } from "@/utils/constants";

const HeadingStyled = styled.section`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
  flex-direction: column;
  .brand {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.light};
  }
  .social {
    display: flex;
    grid-gap: 1rem;
    min-width: 200px;
    justify-content: space-between;
    svg {
      color: white;
    }
  }
`;

const AvatarStyled = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 2rem;
`;

export const Heading: FC = () => {
  const theme = useTheme();
  return (
    <HeadingStyled>
      <AvatarStyled />
      <p className="brand">@erickescribaa</p>
      <div className="social">
        {constants.social.map((sm) => (
          <a href={sm.url} key={sm.name}>
            <Image
              key={sm.name}
              src={sm.src}
              alt={sm.name}
              height={24}
              width={24}
            />
          </a>
        ))}
      </div>
    </HeadingStyled>
  );
};
