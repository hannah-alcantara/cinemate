import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";
import { DetailsPage } from "./pages/DetailsPage";
import { PopularPage } from "./pages/PopularPage";
import { NowPlayingPage } from "./pages/NowPlayingPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { TopRatedPage } from "./pages/TopRatedPage";
import { WatchlistPage } from "./pages/WatchlistPage";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/movie/:movieId",
    element: <DetailsPage />,
  },
  // Dropdown Links
  {
    path: "/nowplaying",
    element: <NowPlayingPage />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoonPage />,
  },
  {
    path: "/popular",
    element: <PopularPage />,
  },
  {
    path: "/toprated",
    element: <TopRatedPage />,
  },
  {
    path: "/watchlist",
    element: <WatchlistPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
