import { Outlet } from "react-router-dom";
import AdminSideBar from "../Components/AdminSideBar";

const AdminLayout = () => {
  return (
    <div className="admin-layout flex">
      {/* Sidebar always visible */}
      <AdminSideBar />

      {/* Page content (nested routes) */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;





