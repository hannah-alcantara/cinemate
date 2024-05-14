import { Link } from "react-router-dom";

const Title = ({ text, to }) => {
  return (
    <div className='max-w-fit'>
      <Link to={to} className='font-oswald font-medium text-2xl uppercase'>
        <h2 className='flex items-center'>
          {text}
          <i className='fas fa-angle-right text-lg ml-2 mt-1 text-gray-200' />
        </h2>
      </Link>
    </div>
  );
};

export default Title;
