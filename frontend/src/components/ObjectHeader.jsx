import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../services/cart";

const ObjectHeader = ({ companyObject, objectDistinctCategories }) => {
    const categoryValues = Object.values(objectDistinctCategories);

    const mappedValues = categoryValues.map((category) => {
        return category;
    });

    const [category, setCategory] = useState("");
    const [objectData, setObjectData] = useState([]);

    useEffect(() => {
        if (companyObject) {
            setObjectData(companyObject?.object_data);
        }
    }, [companyObject]);

    const categoryFilter = (category) => {
        setCategory(category);
        const filteredData = companyObject.object_data.filter(
            (obj) => obj.category === category
        );
        setObjectData(filteredData);
    };
    const { addToCart, items } = useCart();

    const addToCartHandler = (item) => {
        addToCart(item);
    };

    console.log(items);

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

            <div className="flex mx-auto gap-[100px] w-5/6">
                <div className="w-[20%]">
                    {mappedValues.map((c) => (
                        <div
                            key={c}
                            className={
                                category === c
                                    ? `bg-blue-100 flex items-center gap-[15px] text-primary cursor-pointer font-bold p-2 m-1 rounded-2xl`
                                    : "hover:bg-gray-200 flex items-center gap-[15px] cursor-pointer rounded-2xl m-1 p-2"
                            }
                            onClick={() => categoryFilter(c)}
                        >
                            <img
                                className="w-[50px] rounded-lg h-[50px]"
                                src={`${
                                    import.meta.env.VITE_SHOW_IMAGE_PATH
                                }/upload/${companyObject?.image}`}
                            />{" "}
                            {c}
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap w-[80%]">
                    {objectData?.map((data) => (
                        <div
                            key={data.id}
                            className="w-[100%] sm:w-1/2 relative md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={`${
                                        import.meta.env.VITE_SHOW_IMAGE_PATH
                                    }/upload/${data.image}`}
                                    alt=""
                                    className="h-48 w-full object-cover hover:scale-110 transition-all duration-300"
                                />
                                <div className="badge mt-5 mx-2 badge-primary badge-outline ">
                                    {data.category}
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                        {data.title}
                                    </h2>
                                    <div className="flex ">
                                        <p className="flex text-gray-600">
                                            {data.description}
                                        </p>
                                    </div>
                                    <div className="flex mt-3 font-bold ">
                                        <p className="flex text-gray-600">
                                            GEL &nbsp;
                                            {Number(data.price)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => addToCartHandler(data)}
                                className="btn-primary rounded-tr-[10px] rounded-bl-[30px] text-white p-5 absolute top-0 right-[15px]"
                            >
                                <AiOutlinePlus size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ObjectHeader;
