import Movies from "../movies.json";
import { Link } from "react-router-dom";

export function MovieGrid() {
  return (
    <div className='my-8'>
      <ul className='grid grid-rows-3 grid-flow-col gap-4'>
        {Movies.map((movie) => (
          <li>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.poster_path}
                alt='Poster'
                className='shadow-xl border border-gray-300 rounded-sm'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
