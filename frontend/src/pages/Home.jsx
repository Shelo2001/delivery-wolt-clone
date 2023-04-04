import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
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
