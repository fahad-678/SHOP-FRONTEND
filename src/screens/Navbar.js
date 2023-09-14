import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center w-full bg-gradient-to-b from-[#614385] to-[#516395] ">
            <nav className="flex justify-center items-center w-full">
                <div className="flex w-1/2 justify-start items-center">
                    <div className="flex items-center justify-center h-14 w-14 p-1 ">
                        <img className="border border-white rounded-[30px]" src={logo} alt="" />
                    </div>
                    <Link className="ml-6 text-lg" to="/">
                        DashBoard
                    </Link>
                    <Link className="ml-6 text-lg" to="/admin">
                        Admin
                    </Link>
                    <Link className="ml-6 text-lg" to="/cart">
                        Cart
                    </Link>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                    <Link className="mr-6 text-lg" to="/login">
                        LogIn
                    </Link>
                    <Link className="mr-6 text-lg" to="/register">
                        Register
                    </Link>
                    <button className="mr-6 text-lg">LogOut</button>
                    <div className="flex justify-center items-center ">
                        <Link className="" to="/profile">
                            <div className="flex items-center justify-center h-14 w-14 p-1">
                                <img className="border border-white rounded-[30px]" src={logo} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
