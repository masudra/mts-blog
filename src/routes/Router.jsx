import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import SingleBlog from "../components/SingleBlog";
import AdminLayout from "../components/AdminDashbord/AdminLayout";
import AllBlogs from "../components/AdminDashbord/AllBlogs";
import AddBlog from "../components/AdminDashbord/AddBlog";

// Admin Layout & Pages


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
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, 
    children: [

      {
        path: "/admin/blogs",
        element: <AllBlogs />,
      },
      {
        path: "/admin/add-blog",
        element: <AddBlog/>,
      },
    ],
  },
]);
