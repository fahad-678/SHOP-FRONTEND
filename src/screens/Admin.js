import React from "react";
import Display from "../components/Display";

import image from "../assets/img.png";

const Admin = () => {
    let title = "A Pic",
        price = 80,
        description =
            "Ullamco sit occaecat in commodo veniam qui nisi ullamco commodo nulla. Amet laborum et tempor consequat occaecat commodo consequat sint cillum quis. Fugiat dolor consectetur dolor nulla sint commodo irure commodo sint. Nulla officia ullamco incididunt est occaecat laboris dolore velit veniam proident. Aliqua tempor aute eiusmod ipsum. Nulla aliquip qui elit exercitation nostrud anim. Non fugiat qui dolor aliquip do esse fugiat.";
    return (
        <div className="flex flex-col justify-center items-center w-screen px-4 py-2 ">
            <div className=" flex flex-col justify-center items-center h-full ml-2 w-full bg-[#F5F5F5] rounded-2xl shadow-xl">
                <div className="flex  justify-evenly items-center flex-wrap p-1  ">
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                    <Display
                        title={title}
                        image={image}
                        price={price}
                        description={description}
                    />
                </div>
            </div>
        </div>
    );
};

export default Admin;
