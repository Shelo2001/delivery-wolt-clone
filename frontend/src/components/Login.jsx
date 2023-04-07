import React, { useState } from "react";
import { useUsers } from "../services/users";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, errorLogin } = useUsers();

    const loginHandler = () => {
        let data = { email, password };
        login(data);
    };

    return (
        <div className="form-control py-4 w-full">
            {errorLogin && (
                <div className="text-white alert alert-error shadow-lg">
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
                        <span>{errorLogin}</span>
                    </div>
                </div>
            )}
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
            <button
                onClick={loginHandler}
                className="mt-5 btn text-xl text-white btn-primary"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
