const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      // correct way of toggle?
      className={` ${
        dropdown ? "block" : "hidden"
      }  bg-m-grey text-white text-right font-courier absolute top-14 right-48 z-50 py-2 min-w-40 backdrop-blur-lg bg-opacity-80 shadow-xl rounded`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className='block hover:bg-black px-4 py-2'>
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

//