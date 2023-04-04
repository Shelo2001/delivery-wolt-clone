import React, { useEffect } from "react";
import { useObject } from "../services/objects";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

const CategoryNav = () => {
    const { getCategories, allCategories } = useObject();
    const { pathname } = useLocation();

    useEffect(() => {
        getCategories();
    }, []);

    console.log(pathname.split("/")[1]);

    return (
        <div className="text-center  flex gap-4 justify-center my-10">
            <Link to="/home">
                <button
                    className={`py-2 px-12 ${
                        pathname === "/home"
                            ? "bg-[#3abff8] text-white shadow-md shadow-[#3abff8] hover:scale-110 transition-all duration-300 rounded-full"
                            : "bg-gray-100 shadow-lg hover:scale-110 transition-all duration-300 rounded-full"
                    }`}
                >
                    All
                </button>
            </Link>
            {allCategories.map((category) => (
                <Link to={`/${category.category}`}>
                    <button
                        key={category.id}
                        className={`py-2 px-8 ${
                            pathname.split("/")[1] === category.category
                                ? "bg-[#3abff8] shadow-md shadow-[#3abff8] hover:scale-110 transition-all duration-300 text-white  rounded-full"
                                : "bg-gray-100 shadow-lg hover:scale-110 transition-all duration-300  rounded-full"
                        }`}
                    >
                        {category.category}s
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default CategoryNav;
