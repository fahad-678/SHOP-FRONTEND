import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center w-screen px-2 ">
            <nav className="flex justify-center items-center w-full bg-[#FBC40E] border rounded-lg shadow-lg ml-3 mt-2 h-20 overflow-hidden">
                <div className="flex w-1/2 justify-start items-center ">
                    <div className="flex items-center justify-center h-18 w-16 p-1 ml-1">
                        <img
                            className="border border-white rounded-[30px]"
                            src={logo}
                            alt=""
                        />
                    </div>
                    <Link className="ml-6 text-lg font-medium hover:scale-105" to="/">
                        DashBoard
                    </Link>
                    <Link className="ml-6 text-lg font-medium hover:scale-105" to="/admin">
                        Admin
                    </Link>
                    <Link className="ml-6 text-lg font-medium hover:scale-105" to="/cart">
                        Cart
                    </Link>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                    <Link className="mr-6 text-lg font-medium hover:scale-105" to="/login">
                        LogIn
                    </Link>
                    <Link className="mr-6 text-lg font-medium hover:scale-105" to="/register">
                        Register
                    </Link>
                    <button className="mr-6 text-lg font-medium hover:scale-105">LogOut</button>
                    <div className="flex justify-center items-center ">
                        <Link className="" to="/profile">
                            <div className="flex items-center justify-center h-18 w-16 p-1 mr-1">
                                <img
                                    className="border border-white rounded-[30px] hover:scale-105"
                                    src={logo}
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
