import React, { useEffect, useState } from "react";
import { useObject } from "../services/objects";
import { useParams } from "react-router";
import ObjectHeader from "../components/ObjectHeader";

const CompanyObject = () => {
    const {
        companyObject,
        getObjectsById,
        errorObject,
        createObjectData,
        objectDistinctCategories,
    } = useObject();
    const { id } = useParams();

    console.log(objectDistinctCategories);

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        getObjectsById(id);
    }, []);

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setImage(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            image: preview,
            title,
            category,
            price,
            description,
            company_object_id: id,
        };

        createObjectData(data);
    };

    return (
        <>
            <ObjectHeader
                objectDistinctCategories={objectDistinctCategories}
                companyObject={companyObject}
            />

            <form
                className=" my-10 border-2 rounded-xl shadow-md  p-10 w-[30%] mx-auto"
                onSubmit={handleSubmit}
            >
                <h1 className="text-center my-5 font-bold text-3xl">
                    Add <span className="text-primary">new item</span>
                </h1>
                {errorObject && (
                    <div className="alert text-white alert-error shadow-lg">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{errorObject}</span>
                        </div>
                    </div>
                )}
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
                        onChange={(e) => setTitle(e.target.value)}
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
                        onChange={(e) => setCategory(e.target.value)}
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
                        type="text"
                        placeholder="Enter price"
                        onChange={(e) => setPrice(e.target.value)}
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
                        id="description"
                        type="number"
                        placeholder="Enter description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary text-white w-full my-10">
                    Add
                </button>
            </form>
        </>
    );
};

export default CompanyObject;
