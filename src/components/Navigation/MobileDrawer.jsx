import { menuData } from "../../menuData";
import { Link } from "react-router-dom";

const MobileDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <div className='fixed z-50'>
      {/* blurs backgroud when drawer is open */}
      {isDrawerOpen && (
        <div
          className='fixed inset-0 bg-opacity-30 bg-m-grey'
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Drawer toggle */}
      <div
        className={`fixed w-3/4 bg-black backdrop-blur-lg bg-opacity-80 h-screen top-0 left-0 z-50 -translate-x-full duration-500 ${
          isDrawerOpen ? "translate-x-0" : ""
        }`}
      >
        <div className='text-right p-5'>
          <button onClick={() => setIsDrawerOpen(false)}>
            <i className='fas fa-times'></i>
          </button>
        </div>

        {/* Drawer content */}
        <div>
          <ul>
            {menuData
              .flatMap((item) => item.submenu || [])
              //if item.submenu exist, include in the flattened array : include empty array
              .map((subitem) => (
                //map over new array to get submenu
                <li key={subitem} className=' px-4 py-2'>
                  <Link
                    to={subitem.url}
                    onClick={() => {
                      setIsDrawerOpen && setIsDrawerOpen(false);
                    }}
                  >
                    {subitem.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
