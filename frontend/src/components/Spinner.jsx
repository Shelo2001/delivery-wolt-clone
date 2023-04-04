import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div class="flex items-center justify-center h-5/6">
            <Oval
                height={80}
                width={80}
                color="#3abff8"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#3abff8"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};

export default Spinner;
