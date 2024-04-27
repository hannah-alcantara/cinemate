import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  return (
    // TODO: Fix space-between offset
    <header className="p-6 bg-black">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
          <li>
            <a href="/" className="text-2xl font-bold  pl-3 font-oswald">
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
      <section className="bg-indigo-900 h-screen">
        <div>
          <div className="absolute w-full h-64 bg-gradient-to-t from-indigo-900"></div>
          <img
            src="https://image.tmdb.org/t/p/original/nxsqOOMFfz7mWW8JLmpcLjNz7E2.jpg"
            alt="Backdrop"
          />
        </div>
        <div className="absolute top-1/4 p-8">
          <div className="flex items-center">
            <img
              className="rounded shadow-lg w-24"
              src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
              alt="Poster"
            />
            <div className="pl-4">
              <h1 className="text-2xl font-bold font-oswald uppercase">
                La La Land
                <span className="text-xs font-courier text-gray-200">
                  &nbsp;2016
                </span>
              </h1>
              <div className="grid grid-flow-col gap-2 my-3">
                <button className="font-courier uppercase text-[10px] bg-black p-1 rounded">
                  Music
                </button>
                <button className="font-courier uppercase text-[10px] bg-black p-1 rounded">
                  Drama
                </button>
                <button className="font-courier uppercase text-[10px] bg-black p-1 rounded">
                  Romance
                </button>
                <button className="font-courier uppercase text-[10px] bg-black p-1 rounded">
                  Comedy
                </button>
              </div>
              <p className="text-xs text-gray-300 my-3 line-clamp-3">
                Mia, an aspiring actress, serves lattes to movie stars in
                between auditions and Sebastian, a jazz musician, scrapes by
                playing cocktail party gigs in dingy bars, but as success mounts
                they are faced with decisions that begin to fray the fragile
                fabric of their love affair, and the dreams they worked so hard
                to maintain in each other threaten to rip them apart.
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <div className="px-2">
            <ul>
              <li className="my-2">
                <h2 className="text-xs">
                  Director by:{" "}
                  <span className="font-courier uppercase">
                    Damien Chazelle
                  </span>
                </h2>
              </li>
              <li className="my-2">
                <h2 className="text-xs">
                  Written by:{" "}
                  <span className="font-courier uppercase">
                    Damien Chazelle
                  </span>
                </h2>
              </li>
            </ul>
          </div>
          <hr className="my-5" />
        </div>
      </section>
    </header>
  );
}
