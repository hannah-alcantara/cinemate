import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";

const MenuItems = ({ title, url, submenu }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  //This handler closes the dropdown when users click outside of it
  // check if a dropdown is open and then check if the DOM node that
  // is being clicked is outside of the dropdown. Then, we close the dropdown.
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  //this function toggles the dropdown on mouse hover
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className='mx-3'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Dropdown */}
      {submenu ? (
        <>
          <button
            type='button'
            aria-label='Toggle dropdown'
            aria-haspopup='menu'
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {title}
          </button>
          <Dropdown submenu={submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink to={url}>{title}</NavLink>
      )}
    </li>
  );
};

export default MenuItems;
