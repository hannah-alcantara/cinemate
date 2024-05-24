import { menuData } from "../../menuData";
import MenuItems from "./MenuItems";

const Navigation = () => {
  return (
    <nav>
      <ul className='flex relative'>
        {menuData.map(({ title, url, submenu }, index) => {
          return <MenuItems key={index} {...{ title, url, submenu }} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
