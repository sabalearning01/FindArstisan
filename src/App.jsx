import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Homepage";
import Carousel  from "./Components/Carousel";
// import Layout from "./layouts/FramerLayout";
// import AlteHome from "./Components/AlteHome";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Homepage/>
      {/* <Carousel/> */}
      {/* <AlteHome/> */}
    </div>
    //  <Layout>
    //       <div className="app-container">
    //       <Routes>
    //         {/* Routes with Header and Footer */}
    //         <Route element={<RootLayout />}>
    //           <Route index element={<Homepage />} />
    //           <Route path="about" element={<About />} />
    //           <Route path="trending" element={<Trending />} />
    //           <Route path="location/:cityName" element={<CityPage />} />
    //         </Route>
    //           <Route path="login" element={<Login />} />
    //                 <Route path="signup" element={<Signup />} />
    //                 {/* <Route path="verify" element={<Verify />} /> */}
    //                 {/* <Route path="verified" element={<Verified />} /> */}
    //                 {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
    //                 {/* <Route path="/reset-success" element={<ResetNotification />} /> */}
    //                 {/* <Route path="/set-password" element={<SetPassword />} /> */}
    //                 {/* <Route path="/agent/:id" element={<AgentDetails />} /> */}
    //               </Routes>
    //               </div>
    //             </Layout>
  );
}

export default App;



// import { Routes, Route } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
// import Login from "./Pages/Auth/Login";
// import ProtectedPage from "./Pages/ProtectedPage";
// import Carousel from "./Components/Carousel";
// // import RootLayout from "./layouts/RootLayout";
// // import ProtectedRoute from "./Components/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       {/* Layout with Header & Footer */}
//       <Route element={<RootLayout />}>
//         <Route index element={<Homepage />} />
//         <Route path="/carousel" element={<Carousel />} />

//         {/* Protected Route inside Layout */}
//         <Route
//           path="/protected"
//           element={
//             <ProtectedRoute>
//               <ProtectedPage />
//             </ProtectedRoute>
//           }
//         />
//       </Route>

//       {/* Auth page without layout */}
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// }

// export default App;
