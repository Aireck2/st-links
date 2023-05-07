"use client";
import { FC } from "react";
import styled from "styled-components";

import Avatar from "../Avatar";

import VerifiedName from "./VerifiedName";
import { constants } from "@/config/constants";

const HeadingStyled = styled.section`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 2rem 1rem 0;
  user-select: none;
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
      <p className="subtitle">{constants.caption}</p>
    </HeadingStyled>
  );
};
