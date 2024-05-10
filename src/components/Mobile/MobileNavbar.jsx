import { menuItemsData } from "../../menuItemsData";
import MobileMenuItems from "../Mobile/MobileMenuItems";

const MobileNavbar = () => {
  return (
    <nav>
      <ul className='flex justify-between flex-wrap list-none font-courier'>
        {menuItemsData.map((menu, index) => {
          return <MobileMenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
