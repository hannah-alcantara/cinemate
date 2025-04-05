export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
}

// export interface Config {
//   air_time: number;
//   cast: string;
//   created_by: string;
//   crew: string;
//   genres: string;
// }

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  movieCount: number;
  lastUpdated: string;
  movies?: Movie[];
}
