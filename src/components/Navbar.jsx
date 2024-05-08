import { menuItemsData } from "../menuItemsData";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <ul className='flex items-center flex-wrap list-none font-courier'>
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
