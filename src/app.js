import React from "react";
import ReactDom from "react-dom/client";
import Home from "./Pages/Home/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Profile from "./Pages/Profile/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
    <RouterProvider router={appRouter} />
);
