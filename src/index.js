import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { DetailsPage } from "./pages/DetailsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ListsPage } from "./pages/ListsPage";
import { NowPlayingPage } from "./pages/NowPlayingPage";
import { PopularPage } from "./pages/PopularPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Root } from "./pages/Root";
import { TopRatedPage } from "./pages/TopRatedPage";

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
      {
        path: "/details",
        element: <DetailsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
