import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <nav className='bg-black p-6'>
      <div className='flex justify-between items-center'>
        {/* Menu Icon */}
        <div className='w-1/3'>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {toggleMenu && (
            <div className='absolute top-16 left-0 z-50 p-6 h-2/4 w-10/12 backdrop-blur-lg bg-black bg-opacity-80 shadow-2xl'>
              <ul className='list-none text-left font-courier font-bold'>
                <Link to='/nowplaying'>
                  <li className='pb-4'>Now Playing</li>
                </Link>
                <Link to='/comingsoon'>
                  <li className='pb-4'>Coming Soon</li>
                </Link>
                <Link to='/popular'>
                  <li className='pb-4'>Popular</li>
                </Link>
                <Link to='/toprated'>
                  <li className='pb-4'>Top Rated</li>
                </Link>
                <Link to='/watchlist'>
                  <li className='pb-4'>Watchlist</li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className='w-1/3 flex justify-center'>
          <a href='/' className='text-2xl font-bold font-oswald '>
            CINEMATE
          </a>
        </div>

        {/* User and Search Icon */}
        <div className='w-1/3 flex justify-end'>
          <button onClick={() => setToggleUser(!toggleUser)}>
            <FontAwesomeIcon icon={faCircleUser} className='mr-4' />
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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          {toggleSearch && (
            <div className='absolute top-16 left-0 z-10 backdrop-blur-lg bg-black bg-opacity-80 h-18 p-6 w-full drop-shadow-2xl'>
              <input
                type='text'
                placeholder='Search'
                className='h-10 w-full pl-10 text-md font-courier text-gray-900 border border-gray focus:outline-none'
              />
              <span className='absolute left-9 top-8'>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className='text-gray-400 text-sm'
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
