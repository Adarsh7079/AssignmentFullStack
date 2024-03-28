import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
    FullName: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    SetFormData((e) => {
      return { ...e, [name]: value };
    });
    console.log(formData);
  };
  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/users/new',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          
        }
      );
  
      console.log(response.status);
  
      if (response.status === 401) {
        window.alert('Error occurred');
      } else if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="w-full flex overflow-x-hidden ">
      {/* left */}
      <div className="w-full  bg-opacity-70 ">
        <div
          className=" bg-cover bg-no-repeat w-screen h-screen"
          style={{
            backgroundImage: `url('/bg.png')`,
          }}
        >
          <div className="bg-gray-300 w-screen h-screen bg-opacity-40 relative flex  justify-start">
            <div className="w-full max-w-md mx-10 mt-28">
              <div className="bg-white rounded-md border-2 shadow-2xl">
                <div className="p-10 flex flex-col items-center">
                  <img src="/logo.png" alt="" className="w-48 h-24 mb-4" />
                  <h1 className="text-xl text-gray-500">
                    Welcome to Digitalflake Admin
                  </h1>
                </div>
                <form className="px-10 pb-10" action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6 mt-6">
                    <div>
                      <fieldset className="border border-solid border-gray-300 px-2">
                        <legend className="text-sm font-medium">
                          Full Name
                        </legend>
                        <input
                          className="block w-full outline-none border-none bg-transparent p-2 "
                          type="FullName"
                          id="FullName"
                          name="FullName"
                          value={formData.FullName}
                          onChange={handleInput}
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset className="border border-solid border-gray-300 px-2">
                        <legend className="text-sm font-medium">
                          Email ID
                        </legend>
                        <input
                          className="block w-full outline-none border-none bg-transparent p-2 "
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInput}
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset className="border border-solid border-gray-300 px-2">
                        <legend className="text-sm font-medium">
                          Password
                        </legend>
                        <div className="relative">
                          <input
                            className="block w-full border-none bg-transparent p-2 outline-none"
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInput}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button
                              type="button"
                              onClick={() =>
                                setIsPasswordVisible(!isPasswordVisible)
                              }
                              className="text-gray-400 focus:outline-none focus:text-indigo-500"
                            >
                              {!isPasswordVisible ? (
                                <Icon icon={eyeOff} size={20} />
                              ) : (
                                <Icon icon={eye} size={20} />
                              )}
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className=" flex justify-between">
                      <Link
                        to="/login  "
                        className="text-[#a365d8] text-right block"
                      >
                        Already have an Account?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#693994] text-white font-semibold py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
