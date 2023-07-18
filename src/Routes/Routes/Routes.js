import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../Pages/Layout/Main";
import { Donation } from "../../Pages/Donation/Donation";
import { AboutUs } from "../../Pages/AboutUs/AboutUs";
import { Home } from "../../Pages/HomePage/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/",
        element: <Donation></Donation>,
      },
    ],
  },
]);


