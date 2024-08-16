const BASE_URL = "https://api.themoviedb.org/3/movie/";

const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${process.env.REACT_APP_MOVIE_API}`
    );
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovies;
