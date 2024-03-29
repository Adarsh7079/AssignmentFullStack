import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';

const Newcat = () => {
  
  const navigate=useNavigate();
  const [formData, SetFormData] = useState({
    CategoryName: "",
    Description: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/category/new',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response.status);
  
      if (response.status === 401) {
        window.alert('Error occurred');
      } else if (response.status === 201) {
        navigate('/dashboardpage/category');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="w-screen overflow-hidden">
      <div>
        <Link
          to="/dashboardpage/category"
          className="w-full flex items-center gap-5 p-5"
        >
          <IoArrowBack className="text-gray-400" />
          <Link className="font-semibold">Add Category</Link>
        </Link>
      </div>
      <div>
        <form 
        onSubmit={handleSubmit}
        className="px-10 flex flex-col gap-10">
          <div className="flex flex-wrap gap-10 justify-between">
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Category Name</legend>
                <input
                  type="text"
                  id="CategoryName"
                  name="CategoryName"
                  value={formData.CategoryName}
                  onChange={handleInput}
                  className="border-none w-full"
                />
              </fieldset>
            </div>
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Description</legend>
                <input
                  type="text"
                  id="Description"
                  name="Description"
                  value={formData.Description}
                  onChange={handleInput}
                  className="border-none w-full"
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
            <button className="border-2 rounded-full flex items-center justify-center w-[150px]  h-[35px]">
              cancel
            </button>
            <button className="bg-[#762a95] rounded-full flex items-center justify-center text-white w-[150px] h-[35px]">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newcat;
