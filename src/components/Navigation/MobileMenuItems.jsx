import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";

const MobileMenuItems = () => {
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    //Add functionality, add dropdown component, close onClick
    <nav>
      <button onClick={() => setUser(!user)}>
        <i className='fas fa-circle-user pr-5 relative'></i>
      </button>
      {user && (
        <div className='absolute top-16 right-12 z-10 p-6 h-46 w-52 backdrop-blur-lg bg-black bg-opacity-80 shadow-xl'>
          <li className='flex flex-col items-start'>
            <ul className='mb-2'>
              <Link
                onClick={() => {
                  setIsDropdownOpen && setIsDropdownOpen(false);
                }}
                to='login'
              >
                Login
              </Link>
            </ul>
            <ul>
              <Link to='signup'>Sign Up</Link>
            </ul>
          </li>
        </div>
      )}

      <button onClick={() => setSearch(!search)}>
        <i className='fas fa-magnifying-glass'></i>
      </button>
      {search && <Search />}
    </nav>
  );
};

export default MobileMenuItems;
