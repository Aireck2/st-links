"use client";
import { ThemeProvider } from "@/context/ThemeProvider";

import { App } from "@/components/layouts/App";

import { Switch } from "@/components/basics";
import { SpotifyPlayer, Heading } from "@/components/screens";

export default function Home() {
  return (
    <ThemeProvider>
      <App>
        <Switch />
        <Heading />
        <SpotifyPlayer />
      </App>
    </ThemeProvider>
  );
}
