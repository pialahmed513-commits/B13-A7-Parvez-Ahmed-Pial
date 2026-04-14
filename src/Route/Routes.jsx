
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Timeline from "../Pages/HomePage/TimelinePage/Timeline";
import State from "../Pages/HomePage/StatePage/State";
import Error from "../Pages/HomePage/ErrorPage/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children :[
      {
        index : true,
        element:<HomePage></HomePage>
      },
      {
        path:"/Timeline",
        element:<Timeline></Timeline>
      },
      {
        path: "/Stats",
        element:<State></State>
      }
    ],

    errorElement:<Error></Error>
  },
]);