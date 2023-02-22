import { NextApiResponse } from "next";

import { AdaptGithubData } from "@/types/api/github";
import { adaptGithubProfile } from "@/adapters";

import config from "@/config/app";

const GET_PROFILE_ENDPOINT = `${config.github.api}/users/${config.github.user}`;

export const getGithubProfile = async () => {
  return fetch(GET_PROFILE_ENDPOINT);
};

const getSpotify = async (
  _: any,
  res: NextApiResponse<Partial<AdaptGithubData> | { found: boolean }>
) => {
  const response = await getGithubProfile();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ found: false });
  }

  const profile = await response.json();

  return res.status(200).json(adaptGithubProfile(profile));
};

export default getSpotify;
