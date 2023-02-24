"use client";

import { FC } from "react";
import Image from "next/image";
import useSWR from "swr";
import styled from "styled-components";

import { AdaptGithubData } from "@/types/api/github";

import { constants } from "@/config/constants";

const HeadingStyled = styled.section`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  flex-direction: column;
  margin-bottom: 20px;
  .brand {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.colors.light};
  }
  .social {
    margin-top: 20px;
    display: flex;
    grid-gap: 20px;
    min-width: 200px;
    justify-content: center;
    & a:hover {
      transform: scale(1.075);
    }
  }
`;

const AvatarStyled = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: fill;
  object-position: center;
`;

export const Heading: FC = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<Partial<AdaptGithubData>>("/api/github", fetcher);
  return (
    <HeadingStyled>
      {data?.avatarUrl ? (
        <AvatarStyled
          priority
          src={data.avatarUrl}
          alt="Profile picture"
          height={120}
          width={120}
        />
      ) : null}
      <div className="brand">
        <p className="brand">@erickescribaa</p>

        <Image
          src={constants.images.verified.src}
          alt="verified icon"
          height={16}
          width={16}
        />
      </div>
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
