import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { DetailsPage } from "./pages/DetailsPage";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { NowPlayingPage } from "./pages/NowPlayingPage";
import { PopularPage } from "./pages/PopularPage";
import { ProfilePage } from "./pages/ProfilePage";
import { TopRatedPage } from "./pages/TopRatedPage";
import { ListsPage } from "./pages/ListsPage";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
        path: "/lists",
        element: <ListsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   errorElement: <NotFoundPage />,
  // },
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
  // {
  //   path: "/movie/:movieId",
  //   element: <DetailsPage />,
  // },

  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
