"use client";
import { FC } from "react";
import styled from "styled-components";

import { VerticalSocialLinks } from "../SocialLinks";
import Avatar from "../Avatar";

import VerifiedName from "./VerifiedName";

const HeadingStyled = styled.section`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 2rem 1rem 0;
  .subtitle {
    text-align: center;
    color: rgb(156 163 175);
  }
`;

export const Heading: FC = () => {
  return (
    <HeadingStyled>
      <Avatar />
      <VerifiedName />
      <p className="subtitle">
        Web developer who loves learning & building things in the process
      </p>
    </HeadingStyled>
  );
};
