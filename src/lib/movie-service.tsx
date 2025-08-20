import type { Playlist, MovieWithCredits } from "@/lib/types";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) throw new Error("Missing API key");

// for movies by category
export async function getMovieCategory(category: string) {
  let endpoint = "";

  switch (category) {
    case "now_playing":
      endpoint = `${API_URL}/movie/now_playing`;
      break;
    case "popular":
      endpoint = `${API_URL}/movie/popular`;
      break;
    case "top_rated":
      endpoint = `${API_URL}/movie/top_rated`;
      break;
    case "upcoming":
      endpoint = `${API_URL}/movie/upcoming`;
      break;
    case "trending":
      endpoint = `${API_URL}/trending/movie/day`;
      break;
    default:
      throw new Error("Invalid movie type");
  }

  const response = await fetch(`${endpoint}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return await response.json();
}

// for movie details
export const getMovieDetails = async (
  id: string
): Promise<MovieWithCredits> => {
  const movieDetailsUrl = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
  const movieCreditsUrl = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  try {
    const [movieDetailsRes, movieCreditsRes] = await Promise.all([
      fetch(movieDetailsUrl),
      fetch(movieCreditsUrl),
    ]);

    if (!movieDetailsRes.ok || !movieCreditsRes.ok) {
      throw new Error("Failed to fetch movie details or credits");
    }

    const movieDetails = await movieDetailsRes.json();
    const movieCredits = await movieCreditsRes.json();

    // Extract director and cast from movieCredits response
    const director = movieCredits.crew.find(
      (member: any) => member.job === "Director"
    );
    const cast = movieCredits.cast.slice(0, 5); // Limit to the first 5 cast members

    // Return movie details + credits (director and cast)
    return {
      ...movieDetails,
      director,
      cast,
    };
  } catch (error) {
    console.error("Error fetching movie details or credits:", error);
    throw error; // Rethrow error for handling elsewhere
  }
};

//FIX: needs user viewing history data from database
// export async function getRecommendedMovies(movieId: number) {
//   try {
//     const response = await fetch(
//       `${API_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
//     );
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching recommendations:", error);
//     return [];
//   }
// }

// for movie search
export async function searchMovies(query: string) {
  if (!query.trim()) return { results: [] };
  
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  return await response.json();
}

export async function getUserPlaylists(): Promise<Playlist[]> {
  try {
    const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      getMovieCategory("popular"),
      getMovieCategory("top_rated"),
      getMovieCategory("upcoming")
    ]);

    const playlists: Playlist[] = [
      {
        id: "1",
        name: "Popular Now",
        description: "Currently trending movies that everyone's talking about",
        coverUrl: popularMovies.results[0]?.backdrop_path 
          ? `https://image.tmdb.org/t/p/w500${popularMovies.results[0].backdrop_path}`
          : "/placeholder.svg",
        movieCount: popularMovies.results.length,
        lastUpdated: "Today",
        movies: popularMovies.results.slice(0, 20)
      },
      {
        id: "2", 
        name: "Top Rated Classics",
        description: "Highest rated films of all time by critics and audiences",
        coverUrl: topRatedMovies.results[0]?.backdrop_path
          ? `https://image.tmdb.org/t/p/w500${topRatedMovies.results[0].backdrop_path}`
          : "/placeholder.svg",
        movieCount: topRatedMovies.results.length,
        lastUpdated: "Yesterday",
        movies: topRatedMovies.results.slice(0, 20)
      },
      {
        id: "3",
        name: "Coming Soon",
        description: "Upcoming releases to look forward to",
        coverUrl: upcomingMovies.results[0]?.backdrop_path
          ? `https://image.tmdb.org/t/p/w500${upcomingMovies.results[0].backdrop_path}`
          : "/placeholder.svg", 
        movieCount: upcomingMovies.results.length,
        lastUpdated: "2 hours ago",
        movies: upcomingMovies.results.slice(0, 20)
      }
    ];

    return playlists;
  } catch (error) {
    console.error("Failed to fetch movie playlists:", error);
    return [];
  }
}
