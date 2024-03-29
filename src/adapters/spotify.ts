import { AdaptSpotifyData, SpotifyData } from "@/types/api/spotify";
import { toMinSec } from "@/utils/functions";

export const adaptSpotifyCurrentSong = (
  song: SpotifyData
): AdaptSpotifyData => {
  return {
    playingType: song.currently_playing_type,
    isPlaying: song.is_playing,
    title: song.item?.name,
    artists: song.item?.artists?.map((artist: any) => artist.name).join(", "),
    album: song?.item?.album.name,
    albumImageUrl: song.item?.album.images[0].url,
    songUrl: song.item?.external_urls.spotify,
    duration: {
      raw: song.item?.duration_ms,
      format: toMinSec(song.item?.duration_ms ?? 0),
    },
    progress: {
      raw: song.progress_ms,
      format: toMinSec(song.progress_ms ?? 0),
    },
  };
};
