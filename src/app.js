import React from "react";
import ReactDom from "react-dom/client";
import Home from "./Pages/Home/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Profile from "./Pages/Profile/Profile";
import Notifications from "./Pages/Notifications/Notifications";
import Dashboard from "./Pages/Dashboard/Dashboard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Notifications",
    element: <Notifications />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
