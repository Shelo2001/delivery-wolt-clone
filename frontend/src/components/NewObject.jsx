import React, { useState } from "react";
import { useObject } from "../services/objects";

const NewObject = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");

    const handleImageChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (file) => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const { createObject, errorObject } = useObject();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            title: `${user.name}` + " " + title,
            description,
            category,
            image,
            location,
            company_id: user?.id,
        };
        createObject(data);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white">
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
            <div className="mb-6">
                <label
                    htmlFor="title"
                    className="text-gray-800 font-medium mb-2"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full input-primary"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="description"
                    className="text-gray-800 font-medium mb-2"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea textarea-primary textarea-bordered w-full"
                ></textarea>
            </div>

            <div className="mb-6">
                <label
                    htmlFor="image"
                    className="text-gray-800 font-medium mb-2"
                >
                    Image
                </label>

                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    className="file-input text-white input-bordered w-full input-primary"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="location"
                    className="text-gray-800 font-medium mb-2"
                >
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                    className="input input-bordered w-full input-primary"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="category"
                    className="text-gray-800 font-medium mb-2"
                >
                    Category
                </label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    className="input input-bordered w-full input-primary"
                />
            </div>
            <button
                type="submit"
                className="mt-5 btn text-xl w-full text-white btn-primary"
            >
                Create new object
            </button>
        </form>
    );
};

export default NewObject;
