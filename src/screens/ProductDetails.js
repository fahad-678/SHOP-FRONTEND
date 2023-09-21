import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { localContext } from "../context/LocalContext/LocalContext";

const ProductDetails = () => {
    const { dashboardDataDetails, details, error } = useContext(localContext);
    const { prodId } = useParams();
    useEffect(() => {
        dashboardDataDetails(prodId);
    },[prodId]);
    console.log(details);
    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <div className="felx justify-center items-center ">
                <div>
                    <img></img>
                </div>
                <div>
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <i></i>
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    );
};

export default ProductDetails;
