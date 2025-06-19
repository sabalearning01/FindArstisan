// // src/Components/ProtectedRoute.js
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token"); // Example: token saved on login

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;



// src/Components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if user is authenticated

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
