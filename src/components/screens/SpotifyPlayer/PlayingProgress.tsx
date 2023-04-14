import { FC } from "react";

import { SpotifyProgress } from "@/types/api/spotify";

import { PlayingProgressStyled } from "./styled/PlayingProgress";

interface PlayingProgressProps {
  duration: SpotifyProgress;
  progress: SpotifyProgress;
}

const PlayingProgress: FC<PlayingProgressProps> = ({ duration, progress }) => {
  return (
    <PlayingProgressStyled>
      <span>{progress.format}</span>
      <progress id="file" max={duration.raw} value={progress.raw}></progress>
      <span>{duration.format}</span>
    </PlayingProgressStyled>
  );
};

export default PlayingProgress;
