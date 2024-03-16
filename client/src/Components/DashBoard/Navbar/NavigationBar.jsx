import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoMdPlay } from "react-icons/io";
const NavigationBar = () => {
  const navigate = useNavigate();
  const navLinks = [
    {
      name: "Home",
      icon: `/Home.png`,
      link: `/dashboardpage/home`,
    },
    {
      name: "Category",
      icon: `/cat.png`,
      link: `/dashboardpage/category`,
    },
    {
      name: "Products",
      icon: `/product.png`,
      link: `/dashboardpage/product`,
    },
  ];

  return (
    <div className="relative w-[317px] h-screen bg-gradient-to-l flex flex-col gap-20 bg-[#edeeeb]">

      <div className="  flex flex-col space-y-8  px-2">
        {navLinks.map((item, index) => (
          <div
            onClick={() => navigate(`${item.link}`)}
            className=" w-full  rounded-xl mt-10"
            key={index}
          >
            <div
              className="flex w-[306px] px-10 text-xl  h-[50px] hover:bg-[#e6e989] 
                     transition duration-700 ease-in-out bg-opacity-50 rounded-[14px]  items-center gap-8"
            >
              <img src={item.icon} className="w-[25px] h-[25px]" />
              <span className>{item.name}</span>
              <div className=" w-full flex justify-end hover:text-gray-800">
                {" "}
                <IoMdPlay className=" w-5 h-5 " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
