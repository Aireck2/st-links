"use client";

import { FC } from "react";
import Image from "next/image";

import styled from "styled-components";

import { AdaptSpotifyData } from "@/types/api/spotify";

const common = `
  border-radius: 1rem;
`;
const br = "1rem";
const bgBr = "2rem";

const HeadingStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${bgBr};
  margin: auto;
  max-width: 700px;
  box-shadow: 4px 4px 12px #121212, -4px -4px 12px #313131;
  .albumImage {
    ${common};
    @media screen and (min-width: 576px) {
      width: 100%;
      height: 100%;
      max-height: 150px;
      max-width: 150px;
    }
  }
  position: relative;
  .bg-image {
    position: absolute;
    z-index: 10;
    object-fit: cover;
    border-radius: ${bgBr};
  }
  .container {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1rem);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: ${bgBr};
    position: relative;
    z-index: 20;
    object-fit: cover;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    @media screen and (min-width: 480px) {
      flex-direction: row;
    }
    .content {
      min-width: 100%;
      align-self: flex-start;
      @media screen and (min-width: 480px) {
        min-width: 260px;
      }
    }
    .album-title {
      color: #ccc;
      font-size: 16px;
      font-weight: normal;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
    .song-title {
      color: white;
      font-size: clamp(0.9rem, 3.5vw, 1.4rem);
      font-weight: normal;
    }
    .artist-title {
      color: #ccc;
      font-weight: normal;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
  }
`;
const NotPlayingStyled = styled.section`
  display: flex;
  justify-content: center;
  .icon {
    display: grid;
    place-items: center;
    padding: 1rem;
    background-color: #212121;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    @media screen and (min-width: 480px) {
      padding: 2rem;
    }
  }
  .content {
    padding: 1rem;
    background-color: #121212;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    @media screen and (min-width: 480px) {
      padding: 2rem;
    }

    p {
      color: #b3b3b3;
    }
  }
`;

interface SpotifyStatusProps {
  data: AdaptSpotifyData;
}

export const SpotifyStatus: FC<SpotifyStatusProps> = ({ data }) => {
  const caption = "I'm coding & vibing with this song!";

  return data.isPlaying ? (
    <HeadingStyled>
      <Image
        className="bg-image"
        priority
        src={data.albumImageUrl}
        alt={`props.album`}
        fill
      />
      <div className="container">
        <Image
          className="albumImage"
          priority
          src={data.albumImageUrl}
          alt={`props.album`}
          height={100}
          width={100}
        />
        <div className="content">
          <h3 className="album-title">{caption}</h3>
          <h2 className="song-title">{data.title}</h2>
          <h4 className="artist-title">
            {data.artists} — {data.album}
          </h4>
        </div>
      </div>
    </HeadingStyled>
  ) : (
    <NotPlayingStyled>
      <div className="icon">
        <Image
          src="/icons/spotify.svg"
          alt={"Spotify icon"}
          width={50}
          height={50}
        ></Image>
      </div>
      <div className="content">
        <p>Not playing right now...</p>
        <p>I bet I&#39;m studying or sleeping</p>
      </div>
    </NotPlayingStyled>
  );
};
