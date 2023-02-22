import querystring from "querystring";
import { NextApiResponse } from "next";

import { SpotifyResponse } from "@/types/api/spotify";

import { adaptSpotifyCurrentSong } from "@/adapters";

import config from "@/config/app";

const { clientId, clientSecret, refreshToken } = config.spotify;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getSpotify = async (_: any, res: NextApiResponse<SpotifyResponse>) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  return res.status(200).json(adaptSpotifyCurrentSong(song));
};

export default getSpotify;
