import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";

const MobileMenuItems = () => {
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState(false);

  return (
    //Add functionality, add dropdown component, close onClick
    <nav>
      <button onClick={() => setUser(!user)}>
        <i className='fas fa-circle-user pr-5 relative'></i>
      </button>
      {user && (
        <div className='absolute top-16 right-12 z-10 p-6 h-46 w-52 backdrop-blur-lg bg-black bg-opacity-80 shadow-xl'>
          <ul className='list-none text-left font-courier font-bold'>
            <Link to='/profile'>
              <li className='pb-3 flex flex-col border-b'>
                hannahlcntr
                <Link
                  to='/profile'
                  className='pt-1 text-xs font-source font-thin'
                >
                  View profile
                </Link>
              </li>
            </Link>
            <Link href=''>
              <li className='py-3'>Edit Profile</li>
            </Link>
            <Link href=''>
              <li className='pb-3 border-b'>Settings</li>
            </Link>
            <Link href=''>
              <li className='py-3'>Logout</li>
            </Link>
          </ul>
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
