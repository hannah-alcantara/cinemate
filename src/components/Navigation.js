import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  return (
    // TODO: Fix space-between offset
    <header className="p-6 pb-0 bg-black">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
          <li>
            <a href="/" className="text-xl font-bold  pl-3 font-oswald">
              CINEMATE
            </a>
          </li>
          <div className="flex">
            <li className="pr-3">
              <a href="#">
                <FontAwesomeIcon icon={faCircleUser} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
