import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import fetchMovies from "../components/Services/fetchMovies";
import Movies from "../movies.json";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=c7f15f2d472ec4d04c9a74c40c3d2678";

const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const res = await fetch(BASE_URL + id + API_KEY);
    const movieDetail = await res.json();
    console.log("movie detail", movieDetail);
    setMovie(movieDetail);
  };

  const getCredits = async () => {
    const res = await fetch(BASE_URL + id + "/credits" + API_KEY);
    const credits = await res.json();
    console.log("movie credit", credits);
    setCredit(credits);
  };

  //runs when the id changes
  useEffect(() => {
    getMovie();
    getCredits();
  }, [id]);

  if (!movie.title) return null;

  return (
    //correct height?
    <section className='bg-indigo-900 h-[34rem]'>
      {/* FIX: how to grab dominant color for each backdrop? */}
      <div className='absolute w-full h-64 bg-gradient-to-t from-indigo-900'></div>
      <img
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + " Backdrop"}
      />
      <div className='absolute top-60 p-5'>
        {/* FIX: Image size set on img src and class */}
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
          <div className='text-white'>
            {/* FIX: Render credits data: director, writer ,cast */}
            <table className='table-auto w-64'>
              <tr className='text-xs'>
                <td>Directed by:</td>
                <td className='font-courier'></td>
              </tr>

              <tr className='text-xs'>
                <td>Written by:</td>
                <td className='font-courier'></td>
              </tr>

              <tr className='text-xs'>
                <td>Cast:</td>
                <td className='font-courier '></td>
              </tr>
            </table>
          </div>
          <hr className='my-5' />
        </div>
      </div>
    </section>
    // <section className='bg-indigo-900 h-[34rem]'>
    //   <div>
    //     <div className='absolute w-full h-96 bg-gradient-to-t from-indigo-900'></div>
    //     <img
    //       src='https://image.tmdb.org/t/p/original/nxsqOOMFfz7mWW8JLmpcLjNz7E2.jpg'
    //       alt='Backdrop'
    //     />
    //     <div className='absolute top-60 p-8 h-64'>
    //       <div className='flex items-center'>
    //         <img
    //           className='rounded shadow-lg w-28'
    //           src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg'
    //           alt='Poster'
    //         />
    //         <div className='pl-4'>
    //           <h1 className='text-2xl font-bold font-oswald uppercase text-white'>
    //             La La Land
    //             <span className='text-xs font-courier text-gray-200'>
    //               &nbsp;2016
    //             </span>
    //           </h1>
    //           <div className='grid grid-flow-col gap-2 my-3 text-white'>
    //             <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
    //               Music
    //             </button>
    //             <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
    //               Drama
    //             </button>
    //             <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
    //               Romance
    //             </button>
    //             <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
    //               Comedy
    //             </button>
    //           </div>
    //           <p className='text-xs text-gray-300 my-4 line-clamp-3'>
    //             Mia, an aspiring actress, serves lattes to movie stars in
    //             between auditions and Sebastian, a jazz musician, scrapes by
    //             playing cocktail party gigs in dingy bars, but as success mounts
    //             they are faced with decisions that begin to fray the fragile
    //             fabric of their love affair, and the dreams they worked so hard
    //             to maintain in each other threaten to rip them apart.
    //           </p>
    //           <div>
    //             <div className='flex text-white'>
    //               <i className='fas fa-eye text-[10px] bg-black p-2 rounded-2xl' />
    //               <i className='fas fa-heart mx-2 text-[10px] bg-black p-2 rounded-2xl' />
    //               <i className='fas fa-bookmark text-[10px] bg-black p-2 rounded-2xl' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <hr className='my-5' />
    //       <div className='text-white'>
    //         <table className='table-auto w-64'>
    //           <tr className='text-xs'>
    //             <td>Directed by:</td>
    //             <td className='font-courier'>Damien Chazelle</td>
    //           </tr>
    //           <tr className='text-xs'>
    //             <td>Written by:</td>
    //             <td className='font-courier '>Damien Chazelle</td>
    //           </tr>
    //           <tr className='text-xs'>
    //             <td>Cast:</td>
    //             <td className='font-courier '>Ryan Gosling, Emma Stone</td>
    //           </tr>
    //         </table>
    //       </div>
    //       <hr className='my-5' />
    //     </div>
    //   </div>
    // </section>
  );
};

export default MovieDetail;
