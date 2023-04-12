import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyObject from "./pages/CompanyObject";
import AllObjects from "./pages/AllObjects";
import ObjectsByCategory from "./pages/ObjectsByCategory";
import UserObject from "./pages/UserObject";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <AllObjects /> },
            { path: "/profile", element: <Profile /> },
            { path: "/:category", element: <ObjectsByCategory /> },
            { path: "/company/profile", element: <CompanyProfile /> },
            { path: "/search/:name", element: <Search /> },
            { path: "/company/object/:id", element: <CompanyObject /> },
            { path: "/object/:id", element: <UserObject /> },
            { path: "/order/checkout", element: <Checkout /> },
        ],
    },
    { path: "/*", element: <NotFound /> },
]);

export default router;
