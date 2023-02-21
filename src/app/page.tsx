"use client";
import useSWR from "swr";

import { App } from "@/components/layouts/App";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Switch } from "@/components/basics";
import { SpotifyStatus, Heading } from "@/components/screens";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <ThemeProvider>
      <App>
        <Heading />
        <Switch />
        {!data ? <></> : <SpotifyStatus data={data} />}
      </App>
    </ThemeProvider>
  );
}
