import React from "react";
import { API_URL } from "../utils/urlUtil";
import { useNavigate } from "react-router-dom";

const Display = ({ _id, title, price, description, imgPath }) => {
    const navigate = useNavigate()
    return (
        <>
            {/* {!imgPath ? (
                "loading"
            ) : ( */}
            <div className="flex flex-col items-start justify-center w-fit m-2 bg-white px-3 border rounded-md shadow-md transition-all ease-in duration-100 hover:scale-105 " onClick={()=>navigate(`/product/${_id}`)}>
                <h2 className="my-1 text-2xl font-semibold">{title}</h2>
                <div className="mb-1 ">
                    <img
                        className="bg-cover h-[250px] w-[300px] border rounded-md "
                        src={API_URL + "/" + imgPath}
                        alt=""
                    ></img>
                </div>
                <h4 className="mb-1 text-xl font-medium">$ {price}</h4>
                <p className="text-black text-md ">
                    {description.substr(0, 30)}
                </p>
            </div>
            {/* )} */}
        </>
    );
};

export default Display;
