import type {
  MovieWithCredits,
  FavoriteMovie,
  Movie,
} from "@/lib/types";
import { createClient } from "@/utils/supabase/client";

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
      (member: { job: string }) => member.job === "Director"
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

// Favorites functionality
export async function getFavoriteMovies(): Promise<FavoriteMovie[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("favorite_movies")
    .select("*")
    .eq("user_id", user.id)
    .order("added_at", { ascending: false });

  if (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }

  return data || [];
}

export async function addToFavorites(movie: Movie): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { error } = await supabase.from("favorite_movies").insert({
    user_id: user.id,
    movie_id: movie.id,
    movie_title: movie.title,
    movie_poster_path: movie.poster_path,
    movie_release_date: movie.release_date,
    movie_vote_average: movie.vote_average,
    added_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Error adding to favorites:", error);
    return false;
  }

  return true;
}

export async function removeFromFavorites(movieId: string): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { error } = await supabase
    .from("favorite_movies")
    .delete()
    .eq("user_id", user.id)
    .eq("movie_id", movieId);

  if (error) {
    console.error("Error removing from favorites:", error);
    return false;
  }

  return true;
}

export async function isMovieFavorite(movieId: string): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { data, error } = await supabase
    .from("favorite_movies")
    .select("id")
    .eq("user_id", user.id)
    .eq("movie_id", movieId)
    .single();

  if (error) {
    return false;
  }

  return !!data;
}

// Search functionality
export async function searchMovies(query: string, page: number = 1) {
  if (!query.trim()) {
    return { results: [], total_results: 0, total_pages: 0 };
  }

  const endpoint = `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to search movies");
    }

    return await response.json();
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
}
