const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
  API_SPOTIFY: apiSpotify,
  API_GITHUB: apiGithub,
  USER_GITHUB: userGithub,
} = process.env;

const config = {
  spotify: { clientId, clientSecret, refreshToken, api: apiSpotify },
  github: { api: apiGithub, user: userGithub },
};

export default config;
