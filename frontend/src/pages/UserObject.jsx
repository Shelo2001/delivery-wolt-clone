import React, { useEffect, useState } from "react";
import { useObject } from "../services/objects";
import { Link, useParams } from "react-router-dom";

const UserObject = () => {
    const { companyObject, getObjectsById } = useObject();
    const { id } = useParams();

    useEffect(() => {
        getObjectsById(id);
    }, []);

    return (
        <div>
            <div
                className="h-96 bg-cover bg-center relative"
                style={{
                    backgroundImage: `url('${
                        import.meta.env.VITE_SHOW_IMAGE_PATH
                    }/upload/${companyObject.image}')`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wider text-center">
                        {companyObject.title}
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="mb-4 sm:mb-0">
                        <Link to={`/${companyObject.category}`}>
                            <p className=" badge badge-primary badge-outline p-3 hover:scale-110 transition-all duration-300 font-bold text-lg md:text-xl">
                                {companyObject.category}
                            </p>
                        </Link>
                        <p className="text-3xl md:text-5xl font-bold tracking-wide">
                            {companyObject.title}
                        </p>
                        <p className="text-gray-600 text-base md:text-lg">
                            {companyObject.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserObject;
