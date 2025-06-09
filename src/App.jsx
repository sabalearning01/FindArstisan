
import { Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Homepage";
import RootLayout from "./layout/RootLayout";

import AdminLayout from "./layout/AdminLayout";
import Feedback from "./Pages/Admin/Feedback";
import Order from "./Pages/Admin/Order";
import Settings from "./Pages/Admin/Settings";
import Dashboard from "./Pages/Admin/Dashboard";
import Analytics from "./Pages/Admin/Analytics";
import Artisans from "./Pages/Admin/Artisans";
import Services from "./Pages/Admin/Services";
import Customers from "./Pages/Admin/Customers";
import Transactions from "./Pages/Admin/Transactions";
import Logout from "./Pages/Auth/Logout";
import AdminSideBar from "./Components/AdminSideBar";
import ControlPanel from "./Pages/Auth/ControlPanel";

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Public Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="control panel" element={<ControlPanel/>}/>
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="artisans" element={<Artisans />} />
          <Route path="logout" element={<Logout />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="order" element={<Order />} />
          <Route path="services" element={<Services />} />
          <Route path="customers" element={<Customers />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
