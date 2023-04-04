import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyObject from "./pages/CompanyObject";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/search/:name", element: <Search /> },
            { path: "/profile", element: <Profile /> },
            { path: "/company/profile", element: <CompanyProfile /> },
            { path: "/object/:id", element: <CompanyObject /> },
        ],
    },
    { path: "/*", element: <NotFound /> },
]);

export default router;
