import Movies from "../movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faHeart,
  faEye,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { PopularMoviesList } from "./PopularMoviesList";
import { Footer } from "./Footer";

export function MovieDetail() {
  return (
    <section className="bg-indigo-900 h-screen">
      <div>
        <div className="absolute w-full h-96 bg-gradient-to-t from-indigo-900"></div>
        <img
          src="https://image.tmdb.org/t/p/original/nxsqOOMFfz7mWW8JLmpcLjNz7E2.jpg"
          alt="Backdrop"
        />
        {/* fix positioning */}
        <div className="absolute top-60 p-8 h-64">
          {/* -top-20 */}
          <div className="flex items-center">
            <img
              className="rounded shadow-lg w-28"
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
              <p className="text-xs text-gray-300 my-4 line-clamp-3">
                Mia, an aspiring actress, serves lattes to movie stars in
                between auditions and Sebastian, a jazz musician, scrapes by
                playing cocktail party gigs in dingy bars, but as success mounts
                they are faced with decisions that begin to fray the fragile
                fabric of their love affair, and the dreams they worked so hard
                to maintain in each other threaten to rip them apart.
              </p>
              <div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-[10px] bg-black p-2 rounded-2xl"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="mx-2 text-[10px] bg-black p-2 rounded-2xl"
                  />
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-[10px] bg-black p-2 rounded-2xl"
                  />
                </div>
              </div>
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
        {/* fix positioning */}
        <div className="bg-black relative top-60">
          {/* Change to cast? recommendations */}
          <PopularMoviesList />
          <Footer />
        </div>
      </div>
    </section>
  );
}
