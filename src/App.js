import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/index.jsx"
import RegisterPage from "./pages/RegisterPage/index.jsx"
import Curriculum from "./pages/Curriculum/index.jsx"
import Dashboard from "./pages/Dashboard/index.jsx"


import "../src/components/Style/General.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path= "/dashboard/curriculum/1" element={<Curriculum/>}/>
    </Routes>
  )
}

export default App;
