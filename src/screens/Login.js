import React from "react";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-white max-w-lg" >
            <div className="bg-slate-200 w-700px h-150px ">
                <form >
                    <div className="h-1/2 flex justify-between items-center">
                        <label>Email</label>
                        <input className="" id="email" type="email" placeholder="name@email.com"/>
                    </div>
                    <div className="h-1/2 flex justify-center items-center">
                        <label>Password</label>
                        <input className="w-200px" type="password" placeholder="*****"/>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
