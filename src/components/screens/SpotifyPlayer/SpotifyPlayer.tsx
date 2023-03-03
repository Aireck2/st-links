"use client";

import { FC } from "react";
import Image from "next/image";

import NotPlaying from "./NotPlaying";
import { useGetSpotify } from "@/hooks/useGetSpotify";

import { PlayerStyled } from "./styled/SpotifyPlayer";

const SpotifyPlayer: FC = () => {
  const { data } = useGetSpotify();

  const caption = "I'm coding & vibing with this song!";

  return data?.isPlaying ? (
    <PlayerStyled>
      <Image
        className="bg-image"
        priority
        src={data.albumImageUrl}
        alt={`background image: ${data.title}, ${data.artists} - ${data.album}`}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className="container">
        <Image
          className="albumImage"
          priority
          src={data.albumImageUrl}
          alt={`Album image: ${data.title}, ${data.artists} - ${data.album}`}
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
    </PlayerStyled>
  ) : (
    <NotPlaying />
  );
};

export default SpotifyPlayer;
