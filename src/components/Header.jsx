import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='shadow-lg'>
      <div className='flex items-center justify-between max-w-full mx-auto my-0 px-5 py-2.5'>
        <Link to='/' className='text-2xl font-bold font-oswald'>
          CINEMATE
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
