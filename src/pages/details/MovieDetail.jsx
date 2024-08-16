import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// FIX
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=c7f15f2d472ec4d04c9a74c40c3d2678";

const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [director, setDirector] = useState([]);
  const [writer, setWriter] = useState([]);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const res = await fetch(BASE_URL + id + API_KEY);
    const movieDetail = await res.json();
    setMovie(movieDetail);
    // console.log("movie detail", movieDetail);
  };

  const getCredits = async () => {
    const res = await fetch(BASE_URL + id + "/credits" + API_KEY);
    const credits = await res.json();

    const directors = credits.crew.filter(
      (member) => member.job === "Director"
    );
    setDirector(directors[0]);

    const writers = credits.crew.filter(
      (member) => member.job === "Screenplay"
    );
    setWriter(writers[0]);

    setCast(credits.cast);
    console.log("cast", credits);
  };
  //runs when the id changes
  useEffect(() => {
    getMovie();
    getCredits();
  }, [id]);

  if (!movie.title) return null;

  return (
    //correct height?
    <section className='bg-indigo-900 h-[42rem]'>
      {/* FIX: how to grab dominant color for each backdrop? */}
      <div className='absolute w-full h-64 bg-gradient-to-t from-indigo-900'></div>
      <img
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + " Backdrop"}
      />
      <div className='absolute top-60 p-5'>
        <div className='flex items-center justify-center'>
          <img
            className='rounded shadow-lg h-44'
            src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
            alt={movie.title + " Poster"}
          />
          <div className='px-5'>
            <h1 className='text-2xl font-bold font-oswald uppercase text-white'>
              {movie.title}
              <span className='text-xs font-courier text-gray-200 ml-2'>
                {movie.release_date ? movie.release_date.split("-")[0] : ""}
              </span>
            </h1>
            <ul className='grid auto-cols-min grid-flow-col gap-2 my-3 text-white'>
              {/* Turn to buttons? limit genre to show 4*/}
              {movie.genres.slice(0, 4).map((genre) => (
                <li
                  key={genre.id}
                  className='font-courier uppercase text-[10px] bg-black p-1 rounded'
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            {/* ADD:Read more button */}
            <p className='text-xs text-gray-300 line-clamp-3'>
              {movie.overview}
            </p>
            <div className='flex text-white my-3'>
              <button>
                <i className='fas fa-eye text-[10px] bg-black p-2 rounded-2xl' />
              </button>
              <i className='fas fa-heart mx-2 text-[10px] bg-black p-2 rounded-2xl' />
              <i className='fas fa-bookmark text-[10px] bg-black p-2 rounded-2xl' />
            </div>
          </div>
        </div>
        <div>
          <hr className='my-5' />
          {/* FIX */}
          {/* <div className='grid grid-cols-2 gap-2'>
            <div className='shadow-md  bg-black text-white h-auto max-w-full rounded-lg p-3'>
              <h3 className='font-bold font-oswald'>{director.name}</h3>
              <p className='mt-1 font-courier text-xs text-gray-300'>
                Director&nbsp;
              </p>
            </div>
            <div className='shadow-md bg-black text-white h-auto max-w-full rounded-lg p-3'>
              <h3 className='font-bold font-oswald'>{writer.name}</h3>
              <p className='mt-1 font-courier text-xs text-gray-300'>
                Writer&nbsp;
              </p>
            </div>
          </div> */}
          <div className='mt-4 shadow-md bg-black text-white h-auto max-w-full rounded-lg p-3'>
            <ul className=''>
              {cast.slice(0, 9).map((actor, index, array) => (
                <li className='inline font-oswald' key={actor.id}>
                  {actor.name}
                  {index !== array.length - 1 ? ", " : ""}
                  {/* Fix: Comma at the end of list */}
                </li>
              ))}
            </ul>
            <p className='mt-1 font-courier text-xs text-gray-300'>
              Cast&nbsp;
            </p>
          </div>
          <hr className='my-5' />
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
