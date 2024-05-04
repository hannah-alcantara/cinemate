import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Title({ text, to }) {
  return (
    <Link
      to={to}
      className='flex items-center font-oswald font-medium text-2xl uppercase'
    >
      <h2>{text}</h2>
      <FontAwesomeIcon
        icon={faAngleRight}
        className='text-lg ml-2 text-gray-200'
      />
    </Link>
  );
}
