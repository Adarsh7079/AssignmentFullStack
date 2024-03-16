import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Addnew = () => {
  const [formData, SetFormData] = useState({
    CategoryName: "",
    ProductName: "",
    PackSize: "",
    MRP: "",
    ProductImage: "",
    Status: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    SetFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(formData);
  };

  return (
    <div className="w-screen overflow-hidden">
      <div>
        <Link
          to="/dashboardpage/product"
          className="w-full flex items-center gap-5 p-5"
        >
          <IoArrowBack className="text-gray-400" />
          <Link className="font-semibold">Add Product</Link>
        </Link>
      </div>
      <div>
        <form action="" className="px-10 flex flex-col gap-10">
          <div className="flex flex-wrap gap-10 justify-between">
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Category</legend>
                <select
                  name="CategoryName"
                  value={formData.CategoryName}
                  onChange={handleInput}
                  className="relative bg-white focus-visible:no-underline text-[#141212] text-[20px] w-full px-2 rounded-lg border-none"
                >
                  <option value=" "></option>
                  <option value="Milk">Milk </option>
                  <option value="Fruit">Fruit</option>
                </select>
              </fieldset>
            </div>
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Product Name</legend>
                <input
                  className="border-none w-full"
                  type="text"
                  id="ProductName"
                  name="ProductName"
                  value={formData.ProductName}
                  onChange={handleInput}
                />
              </fieldset>
            </div>
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Pack Size</legend>
                <input
                  className="border-none w-full"
                  type="text"
                  id="PackSize"
                  name="PackSize"
                  value={formData.PackSize}
                  onChange={handleInput}
                />
              </fieldset>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between">
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">MRP</legend>
                <input
                  className="border-none w-full"
                  type="text"
                  id="MRP"
                  name="MRP"
                  value={formData.MRP}
                  onChange={handleInput}
                />
              </fieldset>
            </div>

            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Product Image</legend>
                <input
                  type="file"
                  className="border-none w-full"
                  id="ProductImage"
                  name="ProductImage"
                  value={formData.ProductImage}
                  onChange={handleInput}
                />
              </fieldset>
            </div>
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Status</legend>
                <select
                  name="Status"
                  value={formData.Status}
                  onChange={handleInput}
                  className="relative bg-white focus-visible:no-underline text-[#141212] text-[20px] w-full px-2 rounded-lg border-none"
                >
                  <option value=" "></option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className="absolute flex gap-2 justify-end bottom-10 right-10">
            <button className="border-2 rounded-full flex items-center justify-center w-[150px] h-[35px]">
              cancel
            </button>
            <button className="bg-[#762a95] rounded-full w-[150px] flex items-center justify-center text-white  h-[35px]">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addnew;
