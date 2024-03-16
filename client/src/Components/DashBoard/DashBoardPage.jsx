import React from 'react';
import NavigationBar from './Navbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const DashBoardPage = () => {
  return (
    <div>
       <Navbar/>
      <div className='flex  '>
     
        {/* Navigation Bar  */}
        
        <NavigationBar/>
        <Outlet/>
    </div>

    </div>
  )
}

export default DashBoardPage