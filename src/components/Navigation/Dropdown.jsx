import { Link } from "react-router-dom";

const Dropdown = ({ submenu, dropdown }) => {
  return (
    // This hides the dropdown
    <ul
      className={`text-left absolute top-6 left-0 z-50 py-2 min-w-40 bg-m-grey backdrop-blur-lg bg-opacity-80 shadow-xl rounded
        ${dropdown ? "block" : "hidden"}`}
    >
      {submenu.map((item, index) => (
        <li key={index} className='block hover:bg-black px-4 py-2'>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
