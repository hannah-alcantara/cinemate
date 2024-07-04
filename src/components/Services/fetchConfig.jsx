const BASE_URL = "https://api.themoviedb.org/3/configuration?api_key=";

const fetchConfig = async () => {
  try {
    const response = await fetch(BASE_URL + process.env.REACT_APP_MOVIE_API);
    const config = await response.json();
    return config;
  } catch (error) {
    console.error(error);
  }
};

export default fetchConfig;
