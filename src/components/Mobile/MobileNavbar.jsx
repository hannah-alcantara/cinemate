import { useState, useEffect, useRef } from "react";
import { menuItemsData } from "../../menuItemsData";
import MobileMenuItems from "./MobileMenuItems";
import MobileDropdown from "./MobileMenuItems";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (showMenu && ref.current && !ref.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <nav>
      <button
        className=''
        type='button'
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"} />
      </button>
      {showMenu && (
        <ul className='flex items-center list-none font-courier' ref={ref}>
          <MobileDropdown />;
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
