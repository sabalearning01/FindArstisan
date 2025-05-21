// import { useState } from "react";
// import { Route, Routes } from "react-router";
// import "./App.css";
// import Login from "./Pages/Auth/Login";
// import Homepage from "./Pages/Homepage";
// import Carousel from "./Components/Carousel";
// import RootLayout from "./layout/RootLayout";
// // import Layout from "./layouts/FramerLayout";
// // import AlteHome from "./Components/AlteHome";

// function App() {
//   return (
//     // <div>
//     //   {/* <Login /> */}
//     //   {/* <Homepage/> */}
//     //   {/* <Carousel/> */}
//     //   {/* <AlteHome/> */}
//     // </div>
//     <div className="app-container">
//       <Routes>
//         {/* Routes with Header and Footer */}
//         <Route element={<RootLayout />}>
//           <Route index element={<Homepage />} />
//           <Route path="login" element={<Login />} />
//         </Route>
//         {/* <Route path="verify" element={<Verify />} /> */}
//         {/* <Route path="verified" element={<Verified />} /> */}
//         {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
//         {/* <Route path="/reset-success" element={<ResetNotification />} /> */}
//         {/* <Route path="/set-password" element={<SetPassword />} /> */}
//         {/* <Route path="/agent/:id" element={<AgentDetails />} /> */}
//       </Routes>

//     </div>
//   );
// }

// export default App;


import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Admin/Dashboard";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Dashboard without Header and Footer, with AdminSidebar */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;