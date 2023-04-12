import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Register from "./Register";
import Login from "./Login";
import { useUsers } from "../services/users";
import { useCart } from "../services/cart";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const navigateHandler = (e) => {
        if (query != "") {
            if (e.keyCode == 13) {
                navigate(`/search/${query}`);
            }
        } else {
            navigate("/");
        }
    };

    const { logout } = useUsers();

    const logoutHandler = () => {
        logout();
    };

    const { items } = useCart();
    const prices = items.map((item) => item.quantity * item.price);

    const total = prices.reduce((acc, cur) => acc + cur, 0);

    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to="/">
                    <div className="btn text-white btn-ghost no-animation normal-case text-xl">
                        Wolt
                    </div>
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder="Search by company or location"
                        onKeyDown={navigateHandler}
                        className="input w-64 input-bordered"
                    />
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <AiOutlineShoppingCart size={20} />
                            <span className="badge badge-sm indicator-item">
                                {items.length}
                            </span>
                        </div>
                    </label>
                    <div
                        tabIndex={0}
                        className="mt-3 card card-compact dropdown-content  w-[260px] bg-base-100 shadow"
                    >
                        <div className="card-body">
                            <span className="font-bold text-lg">
                                {items.length} Items
                            </span>
                            <span className="text-info flex">
                                Subtotal: ₾ {total}
                            </span>
                            <div className="card-actions">
                                <Link className="w-full" to="/order/checkout">
                                    <button className="btn btn-primary text-white btn-block">
                                        View cart
                                    </button>
                                </Link>
                            </div>
                            <div className=" mt-3">
                                <p className="my-2 text-center">
                                    {total === 0 ? (
                                        <></>
                                    ) : total < 15 ? (
                                        "Reach min 15 gel to not pay extra for delivery"
                                    ) : (
                                        "🎉 Hooray! you're not paying extra for delivery"
                                    )}
                                </p>
                                {total === 0 ? (
                                    <></>
                                ) : total < 15 ? (
                                    <progress
                                        className="progress progress-error w-56"
                                        value={total}
                                        max="15"
                                    ></progress>
                                ) : (
                                    <progress
                                        className="progress progress-success w-56"
                                        value={total}
                                        max="15"
                                    ></progress>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {user?.name ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        className="mask mask-circle"
                                        src={avatar}
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li className="p-2 border-1 border-bottom">
                                    {user.name}
                                </li>
                                {user.is_company ? (
                                    <li>
                                        <Link to="/company/profile">
                                            Company Profile
                                        </Link>
                                    </li>
                                ) : (
                                    <></>
                                )}
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li onClick={logoutHandler}>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <label
                            htmlFor="login"
                            className="btn btn-ghost text-white "
                        >
                            Login
                        </label>
                        <input
                            type="checkbox"
                            id="login"
                            className="modal-toggle"
                        />
                        <div className="modal">
                            <div className="modal-box relative">
                                <>
                                    <label
                                        htmlFor="login"
                                        className="btn btn-sm btn-circle absolute text-white right-2 top-2"
                                    >
                                        ✕
                                    </label>
                                    <h3 className="text-2xl font-bold">
                                        Login in your account
                                    </h3>
                                    <Login />
                                </>
                            </div>
                        </div>

                        <label
                            htmlFor="signup"
                            className="btn btn-ghost text-white  "
                        >
                            Sign up
                        </label>
                        <input
                            type="checkbox"
                            id="signup"
                            className="modal-toggle"
                        />
                        <div className="modal">
                            <div className="modal-box relative">
                                <>
                                    <label
                                        htmlFor="signup"
                                        className="btn btn-sm btn-circle absolute text-white right-2 top-2"
                                    >
                                        ✕
                                    </label>
                                    <h3 className="text-2xl font-bold">
                                        Create your account
                                    </h3>

                                    <Register />
                                </>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
