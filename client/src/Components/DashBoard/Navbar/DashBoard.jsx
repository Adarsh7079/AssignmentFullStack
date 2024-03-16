import React from "react";


const Dashboard = () => {

    const data=[
        {
            fullname:"$full_name",
            age:"$age",
            code:"$code",
            disorde:"$disorder"
        },
        {
            fullname:"$full_name",
            age:"$age",
            code:"$code",
            disorde:"$disorder"
        },
        {
            fullname:"$full_name",
            age:"$age",
            code:"$code",
            disorde:"$disorder"
        },
        {
            fullname:"$full_name",
            age:"$age",
            code:"$code",
            disorde:"$disorder"
        },
        {
            fullname:"$full_name",
            age:"$age",
            code:"$code",
            disorde:"$disorder"
        },
        {
            fullname:"$full_name",
            age:"$age",
            code:"$code",
            disorde:"$disorder"
        },
        

    ]
  return (
    <div className="w-full flex flex-col px-10 bg-gray-100 overflow-x-hidden">
      <div className=" flex flex-col  gap-20">
        <div
          className="w-[229px] h-[54px] text-center text-cyan-600 text-4xl 
         font-semibold font-['League Spartan'] leading-[80px]"
        >
          Dashboard
        </div>
       <div>
       <div className="flex gap-5">
          <div
            className="w-[730px] h-[173px] rounded-[25px] shadow flex justify-center items-center"
            style={{
              backgroundImage: `url('/Rectangle.png')`,
            }}
          >
            <p className=" text-white text-[36px] justify-center text-center">
              Welcome back [$FULL_NAME_DOC]
            </p>
          </div>
          <div
            className="w-[730px] h-[173px] rounded-[25px] border-2 border-gray-300 bg-white"
          >
            <div className="flex flex-col  gap-12">
            <div className="w-[263px] h-[31px] text-center text-zinc-400 text-xl
             font-normal font-['Poppins'] leading-[80px]">Total patient count</div>
                <div className=" flex gap-20">
                <div className=" ">
                  <p className="  px-10 text-center text-black text-5xl font-semibold font-['Poppins'] leading-[80px]">12</p>
                  
                </div>
                <div className="w-full ">
                  {/* we will add graph here  */}
                  {/* <Chart className=" w-[400px] h-[200px]"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scond div  */}
        <div className="flex gap-5">
          <div
            className="bg-no-repeat  w-2/4 h-[360px] 
                flex flex-col  mt-5 text-gray-600  border-2 border-gray-300 bg-white rounded-2xl "
          >
            <div className="flex flex-col  gap-12">
                <div className="w-[136px] h-[34px] text-center text-zinc-400 text-xl font-normal font-['Poppins'] leading-[80px]">
                    Patients</div>
                    <div
                        className=" w-full h-[250px] flex flex-col gap-5 overflow-y-scroll scrollbar-hide px-10" >
                        {
                            data.map((item,index)=>
                            
                            <div className="flex h-[50px] p-5 items-center justify-between  border-2
                            border-gray-100 gap rounded-lg">
                                <p className="">{item.fullname}</p>
                                <p className="">{item.age}</p>
                                <p className="">{item.code}</p>
                                <p className="">{item.disorde}</p>
                            </div>
                    
                        )
                      }
                    </div>
                </div>
          </div>
          <div
            className="bg-no-repeat  w-2/4 h-[360px] 
                flex flex-col  mt-5 text-gray-600  border-2 border-gray-300 bg-white rounded-2xl "
          >
            <div className="flex flex-col  gap-12">
                <div className="w-[136px] h-[34px] text-center text-zinc-400 text-xl font-normal font-['Poppins'] leading-[80px]">
                    Device</div>
                    <div
                        className=" w-full h-[250px] flex flex-col gap-5 overflow-y-scroll scrollbar-hide px-10" >
                        {
                            data.map((item,index)=>
                            
                            <div className="flex h-[50px] p-5 items-center justify-between  border-2
                            border-gray-100 gap  rounded-lg">
                                <p className="">{item.fullname}</p>
                                <p className="">{item.age}</p>
                                <p className="">{item.code}</p>
                                <p className="">{item.disorde}</p>
                            </div>
                    
                        )
                      }
                    </div>
                </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
