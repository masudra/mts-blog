import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AddBlog from "../Pages/AddBlog";
import SingleBlog from "../components/SingleBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      }


    ],
  },
]);
