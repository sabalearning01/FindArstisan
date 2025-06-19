import { Route, Routes } from "react-router-dom"; // ✅ make sure it's from react-router-dom
import "./App.css";
import MultiStepRegistration from "./Pages/Auth/MultiStepRegistration";
import Form from "./Pages/Auth/Form";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Homepage";
import RootLayout from "./layout/RootLayout";
import Modal from "./Components/Modal";

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
import AdminSignUp from "./Pages/Auth/AdminSignUp";
import ControlPanel from "./Pages/Auth/ControlPanel";
import UserProfile from "./Pages/UserProfile";

import ProtectedRoute from "./Components/ProtectedRoute"; // ✅

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Standalone Pages */}
        <Route path="adminsignup" element={<AdminSignUp />} />
        <Route path="modal" element={<Modal />} />

        {/* Public Pages with Layout */}
        <Route element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="control-panel" element={<ControlPanel />} />
          <Route path="form" element={<Form />} />
          <Route path="multistepregistration" element={<MultiStepRegistration />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Route>

        {/* ✅ Protected Admin Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
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

