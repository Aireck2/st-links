export interface SpotifyData {
  timestamp: number;
  progress_ms: number;
  item: Item;
  currently_playing_type: string;
  is_playing: boolean;
}

export interface Item {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
interface ExternalUrls {
  spotify: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface ExternalIDS {
  isrc: string;
}

export type AdaptSpotifyData = {
  isPlaying: boolean;
  title: string;
  artists: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  duration: string;
  progress: string;
};

export type SpotifyResponse = AdaptSpotifyData | { isPlaying: boolean };
