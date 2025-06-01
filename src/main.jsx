import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast"; // ✅ import this

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ added here */}
    </>
  </React.StrictMode>
);
