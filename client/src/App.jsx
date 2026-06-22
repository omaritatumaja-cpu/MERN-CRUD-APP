import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import CreateUser from './Create';
import User from './User';
import UpdateUser from './Update';

function App() {
 
  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<User />} />
         <Route path="/create" element={<CreateUser />} />
         <Route path="/update/:id" element={<UpdateUser />} />
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
