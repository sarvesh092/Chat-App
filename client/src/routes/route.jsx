import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Authentication/Login.jsx";
import Signup from "../pages/Authentication/Signup.jsx";
import { Suspense } from "react";


  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);

const Route = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Route;
