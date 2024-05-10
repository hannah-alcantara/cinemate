import { useState, useEffect, useRef } from "react";
import MobileDropdown from "./MobileDropdown";
import { Link } from "react-router-dom";

const MobileMenuItems = ({ items}) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);


  return (

    //fix:hide menus that do not have icon
    <li
      className='flex justify-between items-center px-6'
      ref={ref}
    >
      {items.submenu ? (
        <>
          <button
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
          <i className={items.icon}></i>
          </button>
          <MobileDropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={items.url}>
          <i className={items.icon}></i>
        </Link>
      )}
    </li>
  );
};

export default MobileMenuItems;
