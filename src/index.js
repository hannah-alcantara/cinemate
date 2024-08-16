import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import DetailsPage from "./pages/details/DetailsPage";
import { ErrorPage } from "./pages/ErrorPage";
import HomePage from "./pages/home/HomePage";
import { ListsPage } from "./pages/ListsPage";
import LoginPage from "./pages/LoginPage";
import { NowPlayingPage } from "./pages/NowPlayingPage";
import { PopularPage } from "./pages/PopularPage";
import { ProfilePage } from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { Root } from "./pages/Root";
import SignupPage from "./pages/SignupPage";
import { TopRatedPage } from "./pages/TopRatedPage";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/resetpassword",
        element: <ResetPasswordPage />,
      },
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
        path: "/movie/:id",
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
