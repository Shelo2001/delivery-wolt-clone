import React, { useEffect } from "react";
import CategoryNav from "../components/CategoryNav";
import { useObject } from "../services/objects";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import Spinner from "../components/Spinner";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AllObjects = () => {
    const { companyObjects, getAllObjects, loading } = useObject();

    useEffect(() => {
        getAllObjects();
    }, []);

    return (
        <div>
            <CategoryNav />
            {loading ? (
                <Spinner />
            ) : (
                <div className="container mx-auto">
                    <h1 className="text-center my-5 text-3xl">All Objects</h1>
                    <div className="flex flex-wrap -mx-4">
                        {companyObjects?.map((companyObject) => (
                            <div
                                key={companyObject.id}
                                className="w-[90%] sm:w-1/2 relative md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8"
                            >
                                <Link to={`/object/${companyObject.id}`}>
                                    <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={`${
                                                import.meta.env
                                                    .VITE_SHOW_IMAGE_PATH
                                            }/upload/${companyObject.image}`}
                                            alt=""
                                            className="h-48 w-full object-cover hover:scale-110 transition-all duration-300"
                                        />
                                        <div className="badge mt-5 mx-2 badge-primary badge-outline">
                                            {companyObject.category}
                                        </div>
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
                                <button className="btn rounded-none rounded-r-sm top-0 text-white right-[15px] btn-primary absolute">
                                    <AiOutlineShoppingCart size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllObjects;
