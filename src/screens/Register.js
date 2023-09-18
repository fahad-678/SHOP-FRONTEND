import React from "react";

export const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen  px-4 py-2">
            <div className="flex justify-center items-center bg-[#e1e0da] w-full h-full rounded-xl ml-2 shadow-2xl ">
                <div className="flex justify-center items-center mb-[100px] bg-transparent ">
                    <form className="flex flex-col">
                        <div className="flex justify-center items-center mb-5  bg-[#343F71]  rounded-xl">
                            <i className="fa-regular fa-user text-lg m-2"></i>
                            <input
                                className=" bg-transparent px-3 w-[250px] h-11 rounded-lg "
                                type="text"
                                placeholder="Huzaifa"
                            />
                        </div>
                        <div className="flex justify-center items-center mb-4  bg-[#343F71] rounded-xl">
                            <i className="fa-regular fa-envelope text-lg m-2"></i>
                            <input
                                className=" bg-transparent px-3 w-[250px] h-11 rounded-lg "
                                id="email"
                                type="email"
                                placeholder="name@email.com"
                            />
                        </div>
                        <div className="flex justify-center items-center bg-[#343F71] rounded-xl">
                            <i className="fa-solid fa-key text-lg m-2"></i>
                            <input
                                className="h-11 px-3 bg-transparent w-[250px] rounded-lg "
                                type="password"
                                placeholder="*****"
                            />
                        </div>
                        <button
                            className="bg-[#343F71] w-20 h-8 mt-4 self-end rounded-lg text-lg"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
