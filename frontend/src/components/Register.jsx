import React, { useEffect, useState } from "react";
import { useUsers } from "../services/users";

const Register = () => {
    const [isUser, setisUser] = useState(false);
    const [isCompany, setisCompany] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register, errorRegister } = useUsers();

    const handleSetUser = () => {
        if (isCompany === true) {
            setisCompany(false);
            setisUser(true);
        } else {
            setisUser(true);
        }
    };
    const handleSetCompany = () => {
        if (isUser === true) {
            setisUser(false);
            setisCompany(true);
        } else {
            setisCompany(true);
        }
    };

    const handleRegister = () => {
        let data = {
            name,
            email,
            password,
            is_user: isUser,
            is_company: isCompany,
        };
        register(data);
    };

    return (
        <div className="form-control py-4 w-full">
            {errorRegister && (
                <div className="alert alert-error shadow-lg">
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
                        <span>{errorRegister}</span>
                    </div>
                </div>
            )}

            <label className="label mt-4">
                <span className="label-text">Name</span>
            </label>
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered input-primary w-full"
            />

            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered input-primary w-full"
            />

            <label className="label mt-4">
                <span className="label-text">Password</span>
            </label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-primary w-full"
            />

            <label className="label mt-4">
                <span className="label-text">Confirm password</span>
            </label>
            <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered input-primary w-full"
            />
            <label className="label mt-4">
                <span className="label-text">Choose one of them below</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
                <div
                    className={`bg-white shadow-md rounded-md border-2 p-4  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer ${
                        isUser ? "border-primary" : "border-gray-300"
                    }`}
                    onClick={handleSetUser}
                >
                    <div className="ml-2">
                        <h2 className="text-lg font-medium text-gray-800">
                            User
                        </h2>
                        <p className="text-gray-500 mt-1">I want to order</p>
                    </div>
                </div>

                <div
                    className={`bg-white shadow-md rounded-md  border-2 p-4  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer ${
                        isCompany ? "border-primary" : "border-gray-300"
                    }`}
                    onClick={handleSetCompany}
                >
                    <div className="ml-2">
                        <h2 className="text-lg font-medium text-gray-800">
                            Company
                        </h2>
                        <p className="text-gray-500 mt-1">I'm a Company</p>
                    </div>
                </div>
            </div>

            {isUser ? (
                <button
                    onClick={handleRegister}
                    className="mt-5 btn text-xl text-white btn-primary"
                >
                    Create user account
                </button>
            ) : isCompany ? (
                <button
                    onClick={handleRegister}
                    className="mt-5 btn text-xl text-white btn-primary"
                >
                    Create company account
                </button>
            ) : (
                <button
                    disabled
                    className="mt-5 btn disabled text-xl text-white btn-primary"
                >
                    Create
                </button>
            )}
        </div>
    );
};

export default Register;
