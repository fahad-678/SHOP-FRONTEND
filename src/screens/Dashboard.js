import React from "react";

import image from "../assets/img.png";

const Dashboard = () => {
    let title = "A Car",
        price = 80,
        description =
            "Ullamco sit occaecat in commodo veniam qui nisi ullamco commodo nulla. Amet laborum et tempor consequat occaecat commodo consequat sint cillum quis. Fugiat dolor consectetur dolor nulla sint commodo irure commodo sint. Nulla officia ullamco incididunt est occaecat laboris dolore velit veniam proident. Aliqua tempor aute eiusmod ipsum. Nulla aliquip qui elit exercitation nostrud anim. Non fugiat qui dolor aliquip do esse fugiat.";
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-[#c33764] to-[#3945b1]">
            <div className="h-1/2">
                <div className="flex flex-col items-start justify-center">
                    <h2>{title}</h2>
                    <div className="">
                        <img
                            className="bg-cover h-[150px] w-[250px]"
                            src={image}
                            alt=""
                        ></img>
                    </div>
                    <h4>${price}</h4>
                    <p className="text-white w-5 h-5">{description}</p>
                </div>
            </div>
            <div className="h-1/2">
                <div>
                    <h2>{title}</h2>
                    <div>
                        <img src={image} alt=""></img>
                    </div>
                    <h4>{price}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
