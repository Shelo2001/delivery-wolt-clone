import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useObject } from "../services/objects";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import Spinner from "../components/Spinner";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Search = () => {
    const { name } = useParams();
    const { searchByQuery, companyObjects, loading } = useObject();

    useEffect(() => {
        searchByQuery(name);
    }, [name]);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <h2 className="text-center my-5 text-3xl">
                        Search results for{" "}
                        <span className="text-primary">{name}</span>
                    </h2>
                    <div className="container mx-auto">
                        {" "}
                        <div className="flex flex-wrap -mx-4">
                            {companyObjects.length > 1 ? (
                                companyObjects?.map((companyObject) => (
                                    <div
                                        key={companyObject.id}
                                        className="w-[90%] sm:w-1/2 relative md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8"
                                    >
                                        <Link
                                            to={`/object/${companyObject.id}`}
                                        >
                                            <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
                                                <img
                                                    src={`${
                                                        import.meta.env
                                                            .VITE_SHOW_IMAGE_PATH
                                                    }/upload/${
                                                        companyObject.image
                                                    }`}
                                                    alt=""
                                                    className="h-48 w-full object-cover hover:scale-110 transition-all duration-300"
                                                />
                                                <Link
                                                    to={`/${companyObject.category}`}
                                                >
                                                    <div className="badge mt-5 mx-2 badge-primary badge-outline hover:scale-110 transition-all duration-300">
                                                        {companyObject.category}
                                                    </div>
                                                </Link>
                                                <div className="p-6">
                                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                                        {companyObject.title}
                                                    </h2>
                                                    <div className="flex ">
                                                        <MdLocationPin
                                                            size={24}
                                                        />
                                                        <p className="flex text-gray-600">
                                                            &nbsp;
                                                            {
                                                                companyObject.location
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <p className="text-center">
                                        No results for search
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Search;
