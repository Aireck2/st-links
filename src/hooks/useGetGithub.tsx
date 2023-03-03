import useSWR from "swr";

import { AdaptGithubData } from "@/types/api/github";

export const useGetGithub = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  return useSWR<Partial<AdaptGithubData>>("/api/github", fetcher);
};
