import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
    return (
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
    );
};

export default Spinner;
