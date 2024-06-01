const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";

const MovieService = async () => {
  try {
    const response = await fetch(BASE_URL + process.env.REACT_APP_MOVIE_API);
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error(error);
  }
};

export default MovieService;
