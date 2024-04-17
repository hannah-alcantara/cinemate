import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  return (
    // TODO: Fix space-between offset
    <header className="p-4">
      <nav>
        <ul className="flex justify-between items-center mx-3">
          <li>
            <a href="#">
              <FontAwesomeIcon className="text-slate-100" icon={faBars} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-xl font-bold text-slate-100 pl-3 font-oswald"
            >
              CINEMATE
            </a>
          </li>
          <div className="flex">
            <li className="pr-3">
              <a href="#">
                <FontAwesomeIcon
                  className="text-slate-100"
                  icon={faCircleUser}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="text-slate-100"
                  icon={faMagnifyingGlass}
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
