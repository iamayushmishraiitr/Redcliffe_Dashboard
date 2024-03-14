import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/Adminlogin";
import ClientLogin from "./Pages/Clientlogin";
import Data from "./Pages/Data";
import ReagentDetails from "./Pages/ReagentDetails";
import ClientOrder from "./Pages/clientOrder";
function App() {
  return (
    <div>
      <nav>Logout</nav>
      <Routes>
        <Route path="/" element={<Data/>} />
        <Route path="/client" element={<ClientLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/data" element={<Data />} />
        <Route path="/data/:id" element={<ReagentDetails/>} />
        <Route path="/clientorder/:id" element={<ClientOrder />} />
      </Routes>
    </div>
  );
}

export default App;
