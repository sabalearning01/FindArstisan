// import React,{useState} from "react";

// import Success from "../assets/success.png";
// import { useNavigate } from "react-router-dom";

// const Modal = ({ onClose, message, redirectText, redirectTo }) => {
//   const navigate = useNavigate();



//   const handleRedirect = () => {
//     onClose(); // optionally close the modal
//     navigate(redirectTo);
//   };

//   return (
//     <div className="m-auto mt-[80px] w-[90%] h-[200px] lg:w-[780px] lg:h-[400px] bg-white shadow-lg rounded-lg p-6">
//       <img src={Success} alt="Success" className="lg:mt-[100px]  mx-auto mb-4" />
//       <h3 className="text-center lg:text-[28px] text-[24px] font-[DM Sans] text-[#007474] font-bold">
//         Congratulations!{" "}
//       </h3>
//       <p className="text-center text-[10px] lg:text-[18px] font-[DM Sans] text-[#36454F] mt-4">
//         You have successfully Signed up.
//         Click <span className="text-[#CC5500] font-bold"><a href="/MultiStepRegistration"> Here</a></span> to complete
//         your registration.
//       </p>
//     </div>
//   );
// };

// export default Modal;

// Modal.js
// import React from "react";
// import Success from "../assets/success.png";

// const Modal = ({ open, onClose }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="w-[90%] lg:w-[780px] bg-white shadow-lg rounded-lg p-6 text-center">
//         <img src={Success} alt="Success" className="lg:mt-[20px] mx-auto mb-4" />
//         <h3 className="text-[24px] lg:text-[28px] font-bold text-[#007474]">
//           Congratulations!
//         </h3>
//         <p className="text-[10px] lg:text-[18px] text-[#36454F] mt-4">
//           You have successfully signed up.
//           Click <span className="text-[#CC5500] font-bold"><a href="/MultiStepRegistration">here</a></span> to complete your registration.
//         </p>
//         <button
//           onClick={onClose}
//           className="mt-6 px-4 py-2 bg-teal-600 text-white rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;



// src/Components/Modal.js




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Success from "../assets/success.png"; // Make sure the path is correct

// const Modal = ({ onClose, message, redirectText, redirectTo }) => {
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     onClose(); // Optionally close the modal before redirect
//     navigate(MultiStepRegistration);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black">
//       <div className="m-auto w-[90%] h-auto lg:w-[780px] bg-white shadow-lg rounded-lg p-6 text-center z-500">
//         <img
//           src={Success}
//           alt="Success"
//           className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4"
//         />
//         <h3 className="text-[24px] lg:text-[28px] font-bold text-[#007474] mb-2">
//           Congratulations!
//         </h3>
//         <p className="text-[12px] lg:text-[18px] text-[#36454F] mb-6">
//           {/* {message || ( */}
//             <>
//               You have successfully signed up. Click{" "}
//               <span
//                 className="text-[#CC5500] font-bold cursor-pointer underline"
//                 onClick={handleRedirect}
//               >
//                 here
//               </span>{" "}
//               to complete your registration.
//             </>
//           {/* )} */}
//         </p>

//         <button
//           onClick={handleRedirect}
//           className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//         >
//           {redirectText || "Continue"}
//         </button>

//         <div>
//           <button
//             onClick={onClose}
//             className="mt-4 text-sm text-gray-600 hover:underline"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from "react";
import { useNavigate } from "react-router-dom";
import Success from "../assets/success.png"; // Ensure this path is correct

const Modal = ({ onClose, message, redirectText, redirectTo }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose(); // Close the modal first
    navigate(redirectTo); // Use the passed route
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="m-auto w-[90%] h-auto lg:w-[780px] bg-white shadow-lg rounded-lg p-6 text-center">
        <img
          src={Success}
          alt="Success"
          className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4"
        />
        <h3 className="text-[24px] lg:text-[28px] font-bold text-[#007474] mb-2">
          Congratulations!
        </h3>
        <p className="text-[12px] lg:text-[18px] text-[#36454F] mb-6">
          {message || (
            <>
              You have successfully signed up. Click{" "}
              <span
                className="text-[#CC5500] font-bold cursor-pointer underline"
                onClick={handleRedirect}
              >
                here
              </span>{" "}
              to complete your registration.
            </>
          )}
        </p>

        <button
          onClick={handleRedirect}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {redirectText || "Continue"}
        </button>

        <div>
          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-600 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
