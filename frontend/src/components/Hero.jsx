import React from "react";
import android from "../assets/android.png";

const Hero = () => {
    return (
        <div className="flex">
            <div className="h-[600px] w-1/2  bg-[#f2f3f5]">
                <h1 className="text-black px-[150px] py-[50px] font-bold text-5xl">
                    Honey, we’re not cooking tonight
                </h1>
                <p className=" px-[150px] py-[50px]  text-xl">
                    Get the Apple-awarded Wolt app and choose from 40,000
                    restaurants and hundreds of stores in 20+ countries.
                    Discover and get what you want – our courier partners bring
                    it to you.
                </p>
                <div className=" px-[150px] flex flex-col ">
                    <button className=" w-[200px] h-20">
                        <img src={android} />
                    </button>
                    <button className=" w-[200px] h-20">
                        <img src="https://joplinapp.org/images/BadgeIOS.png" />
                    </button>
                </div>
            </div>
            <div
                className="h-[500px] left-0 w-1/2 object-cover"
                style={{
                    backgroundImage: `url(https://consumer-static-assets.wolt.com/frontpage-assets/front-cells.png)`,
                }}
            >
                {/* Your content here */}
            </div>
        </div>
    );
};

export default Hero;
