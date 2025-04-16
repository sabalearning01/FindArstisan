// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import Login from "./Pages/Auth/Login";
// import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";

// function App() {
//   const [user, setUser] = useState([]);
//   const [profile, setProfile] = useState(null);

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => alert('Login Failed:', error)
//  });

//   useEffect(() => {
//     if (user) {
//       axios
//         .get(
//           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//               Accept: "application/json",
//             },
//           }
//         )
//         .then((res) => {
//           setProfile(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user]);

//   // log out function to log the user out of google and set the profile array to null
//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
// };

//   return (
//     <div>
//       <Login />
//       {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
//       <div>
//       {profile ? (
//                 <div>
//                     <img src={profile.picture} alt="user image" />
//                     <h3>User Logged in</h3>
//                     <p>Name: {profile.name}</p>
//                     <p>Email Address: {profile.email}</p>
//                     <br />
//                     <br />
//                     <button onClick={logOut}>Log out</button>
//                 </div>
//             ) : (
//                 <button onClick={login}>Sign in with Google 🚀 </button>
//             )}
//         </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthInput from "../src/Components/AuthInput"
// // import Signup from "./pages/Signup";
// // import ForgotPassword from "./pages/ForgotPassword";
// import Login from "./Pages/Auth/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<AuthInput />} /> */}
//         {/* <Route path="/signup" element={<Signup />} /> */}
//         {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
