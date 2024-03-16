import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import {
  Login,
  Signup,
  DashBoardPage,
  Home,
  Category,
  Product,
  Addnew,
  NewCat

} from "./Components/index"
import ForgetPassword from './Components/UserAuth/ForgetPassword';

function App() {
 

  return (
    <div className=''>
     <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/fpassword" element={<ForgetPassword/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboardpage" element={<DashBoardPage/>}>
             <Route path="/dashboardpage/home" element={<Home/>}/>
             <Route path="/dashboardpage/" element={<Home/>}/>
             <Route path="/dashboardpage/category" element={<Category/>}/>
             <Route path="/dashboardpage/addcategory" element={<NewCat/>}/>
             <Route path="/dashboardpage/product" element={<Product/>}/>
             <Route path="/dashboardpage/addnew" element={<Addnew/>}/>
          </Route>
       
      </Routes>
    </div>
  )
}

export default App
