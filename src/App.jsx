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

