import React, { useEffect, useState } from "react";
import { useObject } from "../services/objects";
import { useParams } from "react-router-dom";
import ObjectHeader from "../components/ObjectHeader";

const UserObject = () => {
    const { companyObject, getObjectsById, objectDistinctCategories } =
        useObject();
    const { id } = useParams();

    useEffect(() => {
        getObjectsById(id);
    }, []);

    return (
        <div>
            <ObjectHeader
                companyObject={companyObject}
                objectDistinctCategories={objectDistinctCategories}
            />
        </div>
    );
};

export default UserObject;
