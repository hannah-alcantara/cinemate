import { Link } from "react-router-dom";

export default function Movie({ movie, config }) {
  return (
    <li className='list-none'>
      <Link to={`/movie/${movie.id}`}>
        {config.images?.base_url && (
          <img
            className='shadow-lg max-w-40 mb-6'
            src={config.images.base_url + "original" + movie.poster_path}
            alt={movie.title + " Poster"}
          />
        )}
        <h2 className='inline-block text-white'>{movie.title}</h2>
      </Link>
    </li>
  );
}
