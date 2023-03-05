import { Switch } from "@/components/basics";
import { SpotifyPlayer, Heading } from "@/components/screens";

export const metadata = {
  title: "Erick Escriba | Links",
  description: "Erick Escriba's social media & spotify player status",
  viewport: "width=device-width, initial-scale=1",
  keywords: ["Erick", "Social media", "Links", "linkinbio"],
  authors: [{ name: "Erick Escriba", url: "https://erickescribaa.vercel.app" }],
  openGraph: {
    title: "Erick Escriba",
    description: "Erick Escriba's social media & spotify player status",
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
    </>
  );
}
