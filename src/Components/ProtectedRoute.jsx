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
  // Get authentication token from localStorage
  const token = localStorage.getItem("token");
  
  // If no token exists, redirect to login immediately
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the protected content
  return children;
};

export default ProtectedRoute;
