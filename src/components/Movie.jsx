import { Link } from "react-router-dom";

export default function Movie({ movie, config }) {
  return (
    <li>
      <Link to='/details'>
        {config.images?.base_url && (
          <img
            className='shadow-lg'
            src={config.images.base_url + "w342" + movie.poster_path}
            alt={movie.title + " Poster"}
          />
        )}
        <h2 className='inline-block pt-2'>{movie.title}</h2>
      </Link>
    </li>
  );
}
