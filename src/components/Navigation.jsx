import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../components/Logo";

const NavLinks = () => {
  return (
    <>
      <NavLink to='/nowplaying'>Now Playing</NavLink>
      <NavLink to='/comingsoon'>Coming Soon</NavLink>
      <NavLink to='/popular'>Popular</NavLink>
      <NavLink to='/toprated'>Top Rated</NavLink>
      <NavLink to='/watchlist'>Watchlist</NavLink>
    </>
  );
};

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggle = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='bg-black p-6'>
      <div className='flex justify-between items-center'>
        {/* Menu Icon */}
        <div className='w-1/3'>
          <button onClick={handleToggle}>
            <i className={toggleMenu ? "fas fa-times" : "fas fa-bars"} />
          </button>
          {toggleMenu && (
            <div className='absolute top-16 left-0 z-50 p-6 h-2/4 w-10/12 backdrop-blur-lg bg-black bg-opacity-80 shadow-2xl'>
              <ul className='list-none text-left font-courier font-bold flex flex-col'>
                <NavLinks />
              </ul>
            </div>
          )}
        </div>

        <Logo />

        {/* User and Search Icon */}
        <div className='w-1/3 flex justify-end'>
          <button onClick={() => setToggleUser(!toggleUser)}>
            <i className='fa-solid fa-circle-user mr-4' />
          </button>
          {toggleUser && (
            <div className='absolute top-16 right-12 z-10 p-6 h-46 w-52 backdrop-blur-lg bg-black bg-opacity-80 shadow-2xl'>
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

          {/* Mobile Search */}
          <button onClick={() => setToggleSearch(!toggleSearch)}>
            <i className='fas fa-magnifying-glass' />
          </button>
          {toggleSearch && (
            <div className='absolute top-16 left-0 z-10 backdrop-blur-lg bg-black bg-opacity-80 h-18 p-6 w-full drop-shadow-2xl'>
              <input
                type='text'
                placeholder='Search'
                className='h-10 w-full pl-10 text-md font-courier text-gray-900 border border-gray focus:outline-none'
              />
              <span className='absolute left-9 top-8'>
                <i className='fas fa-magnifying-glass text-gray-400 text-sm' />
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
