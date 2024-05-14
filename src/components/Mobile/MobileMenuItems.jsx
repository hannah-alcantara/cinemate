// import { useState, useEffect, useRef } from "react";
// import MobileDropdown from "./MobileDropdown";
// import { Link } from "react-router-dom";

// const MobileMenuItems = ({ items, showMenu, setShowMenu }) => {
//   const [dropdown, setDropdown] = useState(false);

//   const closeDropdown = () => {
//     dropdown && setDropdown(false);
//     showMenu && setShowMenu(false);
//   };

//   return (
//     <li className='text-right' onClick={closeDropdown}>
//       {items.url && items.submenu ? (
//         <>
//           <button
//             type='button'
//             aria-haspopup='menu'
//             aria-expanded={dropdown ? "true" : "false"}
//           >
//             <Link to={items.url} onClick={closeDropdown}></Link>
//           </button>
//         </>
//       ) : (
//         <Link to={items.url}>{items.title}</Link>
//       )}
//     </li>
//   );
// };

// export default MobileMenuItems;
