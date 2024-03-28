import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoAlertFill } from "react-icons/go";

const data = [
  // {
  //   id: `123`,
  //   name: `Amul`,
  //   packsize: `500ml`,
  //   category: `Milk`,
  //   mrp: `25`,
  //   img: `asasd`,
  //   status: `active`,
  // },
  // {
  //   id: `123`,
  //   name: `Amul`,
  //   packsize: `500ml`,
  //   category: `Milk`,
  //   mrp: `25`,
  //   img: `asasd`,
  //   status: `active`,
  // },
  // {
  //   id: `123`,
  //   name: `Amul`,
  //   packsize: `500ml`,
  //   category: `Milk`,
  //   mrp: `25`,
  //   img: `asasd`,
  //   status: `inactive`,
  // },
  // {
  //   id: `123`,
  //   name: `Amul`,
  //   packsize: `500ml`,
  //   category: `Milk`,
  //   mrp: `25`,
  //   img: `asasd`,
  //   status: `active`,
  // },
];

const Product = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState(false);
  const [isdelete, setDelete] = useState(1);
  const [userData, setData] = useState([]);
  const getalldata = () => {
    axios
      .get(`http://localhost:8000/api/v1/product/all`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.data);
        //data(setData)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getalldata();
  }, []);

  //delete the user
  const deleteUser = async (id) => {
    // console.log("id i got", id);
    if (isdelete == 1) {
      const response = await fetch(
        `http://localhost:8000/api/v1/product/delete/${id}`,
        {
          method: "DELETE",
        }
      );
    }

    if (response.ok) {
      getalldata();
    }
  };

  //handle delete
  const handleDelete = (id) => {
    setModel(1);
    deleteUser(id);

    //  deleteUser(id)
  };
  const handlemodel = (e) => {
    setDelete(1);
    setModel(0);
    getalldata();
  };
  
  return (
    <div className="w-screen relative">
      <div>
        <div className=" flex  justify-between p-5">
          <div className=" flex gap-5">
            <img src="/product.png" alt="" className=" w-7 h-7" />
            <h1 className=" font-semibold">Product</h1>
          </div>
          <div className=" h-[30px] flex ">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full  ps-10 text-sm text-gray-900 border  rounded-lg bg-gray-50
                dark:bg-gray-700 dark:border-gray-600
                   outline-none"
                  required
                />
              </div>
            </form>
          </div>
          <div>
            <button
              onClick={() => navigate("/dashboardpage/addnew")}
              className=" bg-[#b737ea] px-5 h-[30px] rounded-md text-white"
            >
              Add New
            </button>
          </div>
        </div>
        <div className=" ">
          <div className="relative  overflow-x-hidden ">
            <table className=" w-full bg-[#ebe492] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className=" text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className=" py-3 px-5">
                    <div className="flex items-center">
                      ID
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>

                  <th scope="col" className=" py-3">
                    <div className="flex items-center">
                      Name
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className=" py-3">
                    <div className="flex items-center">
                      Pack Size
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className=" py-3">
                    <div className="flex items-center">
                      Category
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className=" py-3">
                    <div className="flex items-center">
                      MRP
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className=" py-3">
                    <div className="flex items-center">
                      Image
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className=" py-3">
                    <div className="flex items-center">
                      Status
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className=" w-full px-3 ">
                {userData.map((item, id) => (
                  <tr className="bg-gray-100  dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="  px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <td className=" py-4 ">{item.name}</td>
                    <td className=" py-4">{item.packsize}</td>
                    <td className=" py-4">{item.category}</td>
                    <td className=" py-4">Rs.{item.mrp}</td>
                    <td className=" py-4">
                      <div>
                        <img src={item.ProductImage} alt=""  className=" w-[30px] h-[30px] rounded-full  "/>
                      </div>
                    </td>
                    <td className=" py-4">
                      {item.status === "active" ? (
                        <span className=" text-green-400">{item.status}</span>
                      ) : (
                        <span className=" text-red-500">{item.status}</span>
                      )}
                    </td>

                    <td className=" py-4">
                      <div className=" flex gap-2">
                        <FaRegEdit className=" w-7 h-5" />
                        {item.status == "active" ? (
                          <MdDelete
                            onClick={() => handleDelete(item._id)}
                            className=" w-7 h-5 text-red-400"
                          />
                        ) : (
                          <MdDelete className=" w-7 h-5 text-gray-200 cursor-not-allowed" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        {model && (
          <div className=" absolute w-full h-full top-0 flex backdrop-blur-lg">
            <div className=" h-full w-full items-center justify-center ">
              <div className=" flex flex-col mx-auto mt-10 border-2 border-gray-100 rounded-md w-[400px] h-[200px] bg-white">
                <div className=" flex flex-col  fap-2 mx-auto py-10">
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
                    onClick={(e) => setModel(0)}
                    className=" border-2 rounded-full px-10 h-[35px] text-gray-500"
                  >
                    cancel
                  </button>
                  <button
                    onClick={(e) => handlemodel(1)}
                    className=" bg-[#9214b2]  border-2 rounded-full px-10 h-[35px] text-white"
                  >
                    confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
