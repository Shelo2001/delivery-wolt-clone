import React, { useEffect, useState } from "react";
import { useObject } from "../services/objects";
import { useParams } from "react-router";

const CompanyObject = () => {
    const { companyObject, getObjectsById } = useObject();
    const { id } = useParams();

    useEffect(() => {
        getObjectsById(id);
    }, []);

    return (
        <form
            className=" my-10 border-2 rounded-xl shadow-md  p-10 w-[30%] mx-auto"
            onSubmit={handleSubmit}
        >
            {image && (
                <img
                    className="mt-2 w-full h-48 rounded-xl my-5 p-5 border-2 bg-slate-900 mx-auto"
                    src={URL.createObjectURL(image)}
                    alt="Image preview"
                />
            )}
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="image"
                >
                    Image
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="file"
                    onChange={handleImageChange}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="category"
                >
                    Category
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={handleCategoryChange}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="price"
                >
                    Price
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="description"
                >
                    Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                    placeholder="Enter price"
                    onChange={handleDescriptionChange}
                />
            </div>
            <button className="btn btn-primary text-white w-full my-10">
                Add
            </button>
        </form>
    );
};

export default CompanyObject;
