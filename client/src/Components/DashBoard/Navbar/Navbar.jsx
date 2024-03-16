import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    const[isOpen ,setopen]=useState(false);
  return (
    <div>
      <div className=" bg-[#662671] h-[70px]">
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-3xl font-bold text-white px-10 flex  py-3">digitalflake</h1>
          </div>
          <div>
            <div>
            <CgProfile className=" w-[40px] h-[40px] text-white mx-10 mt-3 cursor-pointer "
            onClick={()=>setopen(!isOpen)} />
            {
                isOpen &&
                <div className="mt-7">
                    <button className=" border-2 border-red-200 shadow-xl px-10 h-[40px] rounded-md mx-5 text-red-800"
                    onClick={alert("adasd")}>Log out</button>
                </div>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
