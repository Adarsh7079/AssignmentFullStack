import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GoAlertFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setopen] = useState(false);
  const [model,setModel]=useState(false);
  const handlemodel = (e) => {

    setModel(0);
   
  };
  

  return (
    <div className=" w-screen  relative">
     <div>
     <div className=" bg-[#662671] h-[70px]">
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-3xl font-bold text-white px-10 flex  py-3">
              digitalflake
            </h1>
          </div>
          <div>
            <div>
              <CgProfile
                className=" w-[40px] h-[40px] text-white mx-10 mt-3 cursor-pointer "
                onClick={(e) => setopen(!isOpen)}
              />
              {isOpen && (
                <div className=" absolute  -mx-20 flex backdrop-blur-md">
                  <button
                  onClick={()=>navigate("/")}
                    className=" border-2 border-red-200 shadow-xl px-10 h-[40px] rounded-md mx-5 text-red-800"
                    
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
     </div>

      <div>
        {
          model &&
          <div className=" absolute w-full h-full top-0  right-0 flex backdrop-blur-lg">
          <div className=" w-full flex justify-end mx-[200px] ">
            <div className=" flex flex-col   border-2 border-gray-100 rounded-md w-[400px] h-[200px] bg-white">
              <div className=" flex flex-col  fap-2 mx-auto py-2">
                <div className=" flex  mx-auto gap-2">
                  <GoAlertFill className=" text-red-600 w-[30px] h-[30px]" />
                  <h1 className=" text-2xl flex ">Delete</h1>
                </div>
                <h1 className=" text-gray-500">
                  Are you sure you want to delete ?
                </h1>
              </div>
              <div className="flex mx-auto gap-10">
                <button
                  onClick={(e) => setModel(false)}
                  className=" border-2 rounded-full px-10 h-[35px] text-gray-500"
                >
                  cancel
                </button>
                <button
                  onClick={(e) =>handlemodel()}
                  className=" bg-[#9214b2]  border-2 rounded-full px-10 h-[35px] text-white"
                >
                  confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
