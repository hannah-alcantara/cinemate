import { useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import Navigation from "./Navigation";
import MobileDrawer from "./MobileDrawer";
import MobileMenuItems from "./MobileMenuItems";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className='shadow-lg font-medium bg-black text-white'>
      <div className='flex items-center justify-between max-w-full md:mx-auto p-5'>
        {/* Hamburger Menu */}
        <div className='md:hidden w-1/3'>
          <div className='block'>
            <button onClick={() => setIsDrawerOpen(true)}>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div className='absolute'>
            <MobileDrawer {...{ isDrawerOpen, setIsDrawerOpen }} />
          </div>
        </div>

        {/* Logo */}
        <div className='text-2xl font-bold font-oswald w-1/3 md:w-0 text-center'>
          <Link to='/'>CINEMATE</Link>
        </div>

        {/* Mobile Menu Items */}
        <div className='md:hidden w-1/3 text-end'>
          <MobileMenuItems />
        </div>

        <div className='hidden md:flex items-center'>
          <Navigation />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
