"use client";

import { FC } from "react";
import styled from "styled-components";

const HeadingStyled = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
  flex-direction: column;
  .brand {
    font-weight: bold;
  }
`;

const AvatarStyled = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 50%;
`;

export const Heading: FC = () => {
  return (
    <HeadingStyled>
      <AvatarStyled />
      <p className="brand">@erickescribaa</p>
      <div className="social"></div>
    </HeadingStyled>
  );
};
