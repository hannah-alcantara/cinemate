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

const mockPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Weekend Favorites",
    description: "My go-to movies for a relaxing weekend",
    coverUrl: "/placeholder.svg?height=300&width=500",
    movieCount: 5,
    lastUpdated: "2 days ago",
  },
  {
    id: "2",
    name: "Sci-Fi Marathon",
    description: "Best science fiction films of all time",
    coverUrl: "/placeholder.svg?height=300&width=500",
    movieCount: 8,
    lastUpdated: "1 week ago",
  },
  {
    id: "3",
    name: "Award Winners",
    description: "Oscar and Golden Globe winning films",
    coverUrl: "/placeholder.svg?height=300&width=500",
    movieCount: 12,
    lastUpdated: "3 days ago",
  },
];

export async function getUserPlaylists(): Promise<Playlist[]> {
  return mockPlaylists;
}
