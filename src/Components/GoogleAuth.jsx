import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => alert("Login Failed: " + error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <div>
        {profile ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          // <button
          //   className="flex justify-center items-center gap-[10px]"
          //   onClick={login}
          // >
          //   {" "}
          //   <FcGoogle /> Google{" "}
          // </button>

          <button
      type="button"
      onClick={login}
      className="flex justify-center items-center gap-3 h-[56px] w-full border border-[#5E6A72] bg-white px-4 py-2 rounded-lg text-[18px] text-[#36454F]"
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>
        )}
      </div>
    </div>
  );
};

export default GoogleAuth;
