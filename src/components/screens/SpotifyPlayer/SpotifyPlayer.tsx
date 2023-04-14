import { FC } from "react";
import Image from "next/image";

import { useGetSpotify } from "@/hooks/useGetSpotify";
import NotPlaying from "./NotPlaying";

import { PlayerStyled } from "./styled/SpotifyPlayer";
import PlayingProgress from "./PlayingProgress";

const SpotifyPlayer: FC = () => {
  const { data } = useGetSpotify();

  const caption = "I'm coding & vibing with this song!";

  const handleMouseLeave = (e: any) =>
    e.currentTarget.classList.add("mouseleave");

  const handleMouseEnter = (e: any) => {
    const target = e.currentTarget;
    const exist = target.className.split(" ").includes("mouseleave");
    if (exist) target.classList.remove("mouseleave");
  };

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
          <h2
            className="song-title"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {data.title}
          </h2>
          <h4
            className="artist-title"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {data.artists} — {data.album}
          </h4>
          <PlayingProgress duration={data.duration} progress={data.progress} />
        </div>
      </div>
    </PlayerStyled>
  ) : (
    <NotPlaying />
  );
};

export default SpotifyPlayer;
