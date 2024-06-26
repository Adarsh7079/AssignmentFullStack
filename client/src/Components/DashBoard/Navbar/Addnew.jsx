import React, { useState ,useEffect} from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Addnew = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [formData, SetFormData] = useState({
    category: "",
    name: "",
    packsize: "",
    mrp: "",
    ProductImage: "",
    status: "",
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
        "http://localhost:8000/api/v1/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(formData);

      if (response.status === 401) {
        window.alert("Error occurred");
      } else if (response.status === 201) {
        navigate("/dashboardpage/product");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleImage = (e) =>{
    const file = e.target.files[0];
    console.log("file : ",file)
    SetFormData((prevData) => ({
      ...prevData,
      ProductImage: file,
    }));

}
  const [catData, setCatData] = useState([]);

  const getalldata = () => {
    axios
      .get(`http://localhost:8000/api/v1/category/all`, {
        withCredentials: true,
      })
      .then((res) => {
        setCatData(res.data.data);
        //data(setData
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getalldata();
  }, []);

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
                  name="category"
                  value={formData.category}
                  onChange={handleInput}
                  className="relative bg-white focus-visible:no-underline text-[#141212] text-[20px] w-full px-2 rounded-lg border-none"
                >
                  {
                    catData.map((val,index)=>
                
                    {
                      return  <option
                      type="text"
                       id="category"
                       name="category"
                       value={val.CategoryName}
                       onChange={handleInput}>{ val.CategoryName}</option>
                    }
                    )
                 
                  }
                </select>
              </fieldset>
            </div>
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Product Name</legend>
                <input
                  className="border-none w-full"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
                  id="packsize"
                  name="packsize"
                  value={formData.packsize}
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
                  id="mrp"
                  name="mrp"
                  value={formData.mrp}
                  onChange={handleInput}
                />
              </fieldset>
            </div>

            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">Product Image</legend>
                <input
                  type="file"
                  multiple={false}
                  className="border-none w-full"
                  id="ProductImage"
                  name="ProductImage"
                  onChange={handleImage}  // No value attribute here
                />

                </fieldset>
            </div>
            <div className="w-full md:w-[30%]">
              <fieldset className="border border-solid border-gray-300 px-2">
                <legend className="text-sm font-medium">status</legend>
                <select
                  name="status"
                  value={formData.status}
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
            <button
              onClick={handleSubmit}
              className="bg-[#762a95] rounded-full w-[150px] flex items-center justify-center text-white  h-[35px]"
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addnew;
