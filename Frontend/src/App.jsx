import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/Adminlogin";
import ClientLogin from "./Pages/Clientlogin";
import Data from "./Pages/Data";
import ClientOrder from "./Pages/clientOrder";
import ClientOrderDetails from "./Pages/clientOrderDetails";
import AdminOrderDetails from "./Pages/adminOrderDetails";
function App() {
  return (
    <div>
      <nav>Logout</nav>
      <Routes>
        <Route path="/client" element={<ClientLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/data" element={<Data />} />
        <Route path="/clientorder/:id" element={<ClientOrder />} />
        <Route path="/clientorder/:id/:id2" element={<ClientOrderDetails/>} />
        <Route path="/admindata" element={< AdminOrderDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
