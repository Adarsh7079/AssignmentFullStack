import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="w-full h-screen flex overflow-x-hidden ">
      {/* left */}
      <div className="w-full  bg-opacity-70 ">
        <div
          className=" bg-cover bg-no-repeat w-screen h-screen"
          style={{
            backgroundImage: `url('/bg.png')`,
          }}
        >
          <div className="bg-gray-300 w-screen h-screen bg-opacity-40 relative flex items-center   justify-center">
            <div className="  w-[700px] rounded-md  bg-white">
              <div className=" flex flex-col items-center py-10 leading-[25px]">
                <h1 className=" text-[#5f2f7b] text-xl">Did you forget your password?</h1>
                <h1>
                  Enter your email address and we'll send you a link to restore
                  password
                </h1>{" "}
              </div>
              <div className=" px-28 flex flex-col gap-10">
                <div className=" flex flex-col text-gray-500 ">
                    <label htmlFor="">Email Address</label>
                    <input type="text" 
                    className="border-[1px] h-[50px] outline-none rounded-md px-3"/>
                </div>
                <div>
                    <button
                    className="w-full h-[50px] bg-[#693994] text-white font-semibold py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  
                    >Request reset link</button>
                </div>
                <div className=" flex mx-auto mb-5">
                    <Link className=" underline text-gray-500">Back to login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
