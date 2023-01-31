import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const  Authorize =  React.lazy(()=>import('./pages/Authorize'));
const Home = React.lazy(()=>import('./pages/Home'));
const  AdminAuth = React.lazy(()=>import('./pages/AdminAuth'));
const SignUp = React.lazy(()=>import('./pages/SignUp'))
function App() {

  return (
    <div className="">
     
    <BrowserRouter>
      <Routes>

        <Route path ="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home />} />
        <Route  path="/oauth/authorize" element={<Authorize/>} />
        <Route  path="/admin/authorize" element={<AdminAuth/>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>

  
</div>
  )
}

export default App
