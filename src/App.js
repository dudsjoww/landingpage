import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx"
import Dashboard from "./pages/Dashboard.jsx"


import "../src/components/Style/General.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App;
