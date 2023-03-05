"use client";
import { FC } from "react";
import styled from "styled-components";

import VerifiedName from "./VerifiedName";
import SocialLinks from "../SocialLinks";
import Avatar from "../Avatar";

const HeadingStyled = styled.section`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Heading: FC = () => {
  return (
    <HeadingStyled>
      <Avatar />
      <VerifiedName />
      <SocialLinks />
    </HeadingStyled>
  );
};
