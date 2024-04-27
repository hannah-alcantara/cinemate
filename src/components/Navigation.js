import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  return (
    // TODO: Fix space-between offset
    <nav className="bg-black p-6">
      <div className="flex justify-between items-center">
        <div>
          <button href="#">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="relative">
            <div className="absolute start-0 flex items-center bg-white py-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-black"
              />
              <input
                type="text"
                placeholder="Search..."
                className="text-sm font-courier text-gray-900 border border-m-gray rounded-lg px-2 py-1"
              />
            </div>
          </div>
        </div>

        <a href="/" className="text-2xl font-bold  pl-3 font-oswald">
          CINEMATE
        </a>
        <div className="flex">
          <div className="pr-3">
            <a href="#">
              <FontAwesomeIcon icon={faCircleUser} />
            </a>
          </div>
          <a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>{" "}
        </div>
      </div>
    </nav>
  );
}
