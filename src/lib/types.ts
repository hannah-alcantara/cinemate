export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  video: boolean;
  runtime: number;
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

//use movie type instead?
// export interface MovieDetails {
//   id: number;
//   title: string;
//   overview: string;
//   release_date: string;
//   poster_path: string;
//   backdrop_path: string;
//   vote_average: number;
//   genres: { id: number; name: string }[];

// }

interface Credit {
  id: number;
  name: string;
  job?: string; // optional since the crew may have various roles
  character?: string; // optional for cast members
}

// interface MovieCredits {
//   cast: Credit[];
//   crew: Credit[];
// }

export interface MovieWithCredits extends Movie {
  director: Credit | undefined;
  cast: Credit[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: string;
}
