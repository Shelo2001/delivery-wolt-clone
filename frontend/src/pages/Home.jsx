import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url("https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/5_Friday.jpg")`,
                }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">
                            WOLT.
                        </h1>
                        <p className="mb-5 text-white">
                            Wolt makes it incredibly easy for you to discover
                            and get what you want. Delivered to you – quickly,
                            reliably and affordably.
                        </p>
                        <Link to="/home">
                            <button className="btn btn-primary text-white">
                                Order Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Carousel />
            <div className="my-[100px]">
                <h1 className=" font-bold text-5xl text-center">
                    Did you know?
                </h1>
                <p className="text-center mt-[50px] mx-auto w-[500px]">
                    Getting home-delivered sushi is more than your life made
                    easy. When you order with Wolt, you help thousands of
                    hard-working restaurant and store owners and couriers make a
                    living.
                </p>
            </div>
            <Hero />
        </div>
    );
};

export default Home;
