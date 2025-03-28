const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) throw new Error("Missing API key");

export async function fetchMovies(type: string) {
  let endpoint = "";

  switch (type) {
    case "trending":
      endpoint = `${API_URL}/trending/movie/day`;
      break;
    case "now_playing":
      endpoint = `${API_URL}/movie/now_playing`;
      break;
    case "popular":
      endpoint = `${API_URL}/movie/popular`;
      break;
    default:
      throw new Error("Invalid movie type");
  }

  const response = await fetch(`${endpoint}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
}
