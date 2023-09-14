import React from 'react'

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-[#c33764] to-[#3945b1] ">
            <div className=" mb-[100px] bg-transparent w-auto h-auto ">
                <form className="flex flex-col">
                <div className="flex justify-center items-center mb-5  bg-gradient-to-r from-[#243b55]  to-[#1a263d] rounded-xl">
                        <i className="fa-regular fa-user text-lg m-2"></i>
                        <input
                            className=" bg-transparent px-3 w-[250px] h-11 rounded-lg "
                            type="text"
                            placeholder="Huzaifa"
                        />
                    </div>
                    <div className="flex justify-center items-center mb-4  bg-gradient-to-r from-[#243b55]  to-[#1a263d] rounded-xl">
                        <i className="fa-regular fa-envelope text-lg m-2"></i>
                        <input
                            className=" bg-transparent px-3 w-[250px] h-11 rounded-lg hover:border-teal-400 "
                            id="email"
                            type="email"
                            placeholder="name@email.com"
                        />
                    </div>
                    <div className="flex justify-center items-center bg-gradient-to-r from-[#243b55]  to-[#1a263d] rounded-xl">
                        <i  className="fa-solid fa-key text-lg m-2" ></i>
                        <input
                            className="h-11 px-3 bg-transparent w-[250px] rounded-lg "
                            type="password"
                            placeholder="*****"
                        />
                    </div>
                    <button className=" bg-[#33547a] w-16 h-8 mt-4 self-end rounded-lg text-lg" type="submit">
                        LogIn
                    </button>
                </form>
            </div>
        </div>
  )
}
