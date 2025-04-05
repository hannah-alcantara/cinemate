import type { Movie, Playlist } from "@/lib/types";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) throw new Error("Missing API key");

export async function getMovies(category: string) {
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
    // case "trending":
    //   endpoint = `${API_URL}/trending/movie/day`;
    //   break;
    default:
      throw new Error("Invalid movie type");
  }

  const response = await fetch(`${endpoint}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
}

export async function getMovieDetails(id: string) {
  const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return response.json();
}

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
