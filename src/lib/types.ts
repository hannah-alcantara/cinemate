export interface Movie {
  id: number;
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

  // Computed/Optional properties for easier use
  posterUrl?: string;
  backdropUrl?: string;
  year?: string;
  rating?: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  movieCount: number;
  lastUpdated: string;
  movies?: Movie[];
}
