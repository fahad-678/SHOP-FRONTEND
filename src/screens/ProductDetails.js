import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { localContext } from "../context/LocalContext/LocalContext";
import ImageSlider from "../components/ImageSlider";

const ProductDetails = () => {
    const { dashboardDataDetails, details, error } = useContext(localContext);
    const { prodId } = useParams();
    useEffect(() => {
        dashboardDataDetails(prodId);
    }, [prodId]);
    const finalImage = details?.imgPath.concat(details?.previewImage);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="felx justify-evenly items-center bg-amber-900 ">
                <div className="felx m-1 justify-center items-center w-1/2 ">
                    <ImageSlider images={finalImage} details={true} />
                </div>
                <div className="felx felx-col justify-center items-center w-1/2">
                    <div className="felx justify-center items-center">
                        <p>{details?.title}</p>
                    </div>
                    {/* <div className="felx justify-center items-center">
                        <i></i>
                    </div> */}
                    <div className="felx justify-center items-center">
                        <p>{details?.price}</p>
                    </div>
                    {/* <div className="felx justify-center items-center">
                        <button></button>
                    </div> */}
                </div>
            </div>
            <div className="felx justify-center items-center">
                <p>{details?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
