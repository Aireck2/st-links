"use client";
import Image from "next/image";

import { NotPlayingStyled } from "./styled/NotPlaying";

const NotPlaying = () => {
  return (
    <NotPlayingStyled>
      <div className="icon">
        <Image
          src="/icons/spotify.svg"
          alt={"Spotify icon"}
          width={50}
          height={50}
        />
      </div>
      <div className="content">
        <p>Not playing right now...</p>
        <p>I bet I&#39;m studying or sleeping</p>
      </div>
    </NotPlayingStyled>
  );
};
export default NotPlaying;
