import { Switch } from "@/components/basics";
import {
  SpotifyPlayer,
  Heading,
  VerticalSocialLinks,
} from "@/components/screens";

export const metadata = {
  title: "Erick Escriba | Links",
  description:
    "Web developer who loves learning & building things in the process",
  viewport: "width=device-width, initial-scale=1",
  keywords: ["Erick", "Escriba", "Social media", "Links", "linkinbio"],
  authors: [{ name: "Erick Escriba", url: "https://erickescribaa.vercel.app" }],
  openGraph: {
    title: "Erick Escriba",
    description:
      "Web developer who loves learning & building things in the process",
    url: "https://aireck-linkinbio.vercel.app",
    siteName: "Erick Escriba | Links",
    images: [
      {
        url: "https://aireck-linkinbio.vercel.app/favicon.ico",
        width: 256,
        height: 256,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Switch />
      <Heading />
      <SpotifyPlayer />
      <VerticalSocialLinks />
    </>
  );
}
