import React from "react";

const Display = ({ title, image, price, description }) => {
    return (
        <div className="flex flex-col items-start justify-center w-fit m-4 bg-white px-3 border rounded-md shadow-md transition-all ease-in duration-100 hover:scale-105">
            <h2 className="my-1 text-2xl font-semibold">{title}</h2>
            <div className="mb-1 ">
                <img
                    className="bg-cover h-[250px] w-[300px] border rounded-md "
                    src={image}
                    alt=""
                ></img>
            </div>
            <h4 className="mb-1 text-xl font-medium">$ {price}</h4>
            <p className="text-black text-md ">{description.substr(0, 30)}</p>
        </div>
    );
};

export default Display;
