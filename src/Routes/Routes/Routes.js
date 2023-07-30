import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../Pages/Layout/Main";
import { Donation } from "../../Pages/Donation/Donation";
import { AboutUs } from "../../Pages/AboutUs/AboutUs";
import { Home } from "../../Pages/HomePage/Home/Home/Home";
import { Courses } from "../../Pages/Courses/Courses";
import { Blogs } from "../../Pages/Blogs/Blogs";

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
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);


