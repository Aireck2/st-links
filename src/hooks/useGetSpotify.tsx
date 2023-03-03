import useSWR from "swr";

import { AdaptSpotifyData } from "@/types/api/spotify";

export const useGetSpotify = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  return useSWR<AdaptSpotifyData>("/api/spotify", fetcher);
};
