import React, { useEffect, useState } from "react";
import NewObject from "../components/NewObject";
import { Link } from "react-router-dom";
import { useObject } from "../services/objects";
import { MdLocationPin } from "react-icons/md";

const CompanyProfile = () => {
    const { getMyObjects, companyObjects } = useObject();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        getMyObjects(user?.id);
    }, []);

    return (
        <div>
            <label
                htmlFor="createNewObject"
                className="btn btn-primary mt-5 ml-5 text-white"
            >
                Create new object
            </label>
            <input
                type="checkbox"
                id="createNewObject"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="createNewObject"
                        className="btn btn-sm btn-circle absolute right-2 text-white top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-2xl font-bold">
                        Create {user?.name}'s new object!
                    </h3>
                    <NewObject />
                </div>
            </div>

            <div className="container mx-auto">
                <h1 className="text-center my-5 text-3xl">
                    <span className="text-primary">{user?.name}</span> Objects
                </h1>
                <div className="flex flex-wrap -mx-4">
                    {companyObjects?.map((companyObject) => (
                        <div
                            key={companyObject.id}
                            className="w-[90%] sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8"
                        >
                            <Link to={`/company/object/${companyObject.id}`}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={`${
                                            import.meta.env.VITE_SHOW_IMAGE_PATH
                                        }/upload/${companyObject.image}`}
                                        alt=""
                                        className="h-48 w-full object-cover hover:scale-110 transition-all duration-300"
                                    />
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                            {companyObject.title}
                                        </h2>
                                        <div className="flex ">
                                            <MdLocationPin size={24} />
                                            <p className="flex text-gray-600">
                                                &nbsp;
                                                {companyObject.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
