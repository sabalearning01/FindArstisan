// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';

// const steps = [
//   'Personal Information',
//   'Professional Information',
//   'Verification',
//   'Preview and Finish',
// ];

// const validationSchemas = [
//   Yup.object({
//     name: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     phone: Yup.string().required('Required'),
//     gender: Yup.string().required('Required'),
//     dob: Yup.string().required('Required'),
//     address: Yup.string().required('Required'),
//     state: Yup.string().required('Required'),
//     city: Yup.string().required('Required'),
//     lga: Yup.string().required('Required'),
//   }),
//   Yup.object({}),
//   Yup.object({}),
// ];

// const MultiStepRegistration = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       gender: '',
//       dob: '',
//       address: '',
//       state: '',
//       city: '',
//       lga: '',
//     },
//     validationSchema: validationSchemas[currentStep],
//     validateOnChange: false,
//     validateOnBlur: false,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch('https://your-api-endpoint.com/register', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(values),
//         });

//         if (!response.ok) throw new Error('Network response was not ok');
//         alert('Registration successful!');
//       } catch (error) {
//         alert('Submission failed: ' + error.message);
//       }
//     },
//   });

//   const nextStep = async () => {
//     const isValid = await formik.validateForm();
//     if (Object.keys(isValid).length === 0) {
//       setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
//     } else {
//       formik.setTouched(isValid);
//     }
//   };

//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   const renderStep = () => {
//     const { values, handleChange, errors } = formik;
//     switch (currentStep) {
//       case 0:
//         return (
//           <div className="space-y-4">
//             <input name="name" placeholder="Name" value={values.name} onChange={handleChange} className="w-full p-2 border rounded" />
//             {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

//             <input name="email" placeholder="Email" value={values.email} onChange={handleChange} className="w-full p-2 border rounded" />
//             {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

//             <input name="phone" placeholder="Phone Number" value={values.phone} onChange={handleChange} className="w-full p-2 border rounded" />
//             {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}

//             <div className="flex gap-2">
//               <select name="gender" value={values.gender} onChange={handleChange} className="w-1/2 p-2 border rounded">
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//               <input type="date" name="dob" value={values.dob} onChange={handleChange} className="w-1/2 p-2 border rounded" />
//             </div>
//             {(errors.gender || errors.dob) && (
//               <div className="text-red-500 text-sm">{errors.gender || errors.dob}</div>
//             )}

//             <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className="w-full p-2 border rounded" />
//             {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

//             <div className="flex gap-2">
//               <input name="state" placeholder="State" value={values.state} onChange={handleChange} className="w-1/3 p-2 border rounded" />
//               <input name="city" placeholder="City" value={values.city} onChange={handleChange} className="w-1/3 p-2 border rounded" />
//               <input name="lga" placeholder="Local Govt. Area" value={values.lga} onChange={handleChange} className="w-1/3 p-2 border rounded" />
//             </div>
//             {(errors.state || errors.city || errors.lga) && (
//               <div className="text-red-500 text-sm">{errors.state || errors.city || errors.lga}</div>
//             )}
//           </div>
//         );
//       case 1:
//         return <div>Professional Information Form</div>;
//       case 2:
//         return <div>Verification Form</div>;
//       case 3:
//         return <pre>{JSON.stringify(formik.values, null, 2)}</pre>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <form onSubmit={formik.handleSubmit} className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/3 bg-teal-700 text-white p-6">
//         <h2 className="text-lg font-bold mb-4">Complete Registration to Get Verified</h2>
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`p-2 border-l-4 ${
//               currentStep === index ? 'border-white font-semibold' : 'border-transparent text-gray-300'
//             }`}
//           >
//             {step}
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-2/3 p-10 bg-black text-white">
//         <h3 className="text-xl font-semibold mb-6">{steps[currentStep]}</h3>
//         {renderStep()}
//         <div className="mt-6 flex justify-between">
//           {currentStep > 0 && (
//             <button type="button" onClick={prevStep} className="bg-gray-600 px-4 py-2 rounded">Back</button>
//           )}
//           {currentStep < steps.length - 1 ? (
//             <button type="button" onClick={nextStep} className="bg-orange-700 px-4 py-2 rounded">Next: {steps[currentStep + 1]}</button>
//           ) : (
//             <button type="submit" className="bg-green-700 px-4 py-2 rounded">Submit</button>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// };

// export default MultiStepRegistration;


// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';

// const steps = [
//   'Personal Information',
//   'Professional Information',
//   'Verification',
//   'Preview and Finish',
// ];

// const validationSchemas = [
//   Yup.object({
//     name: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     phone: Yup.string().required('Required'),
//     gender: Yup.string().required('Required'),
//     dob: Yup.string().required('Required'),
//     address: Yup.string().required('Required'),
//     state: Yup.string().required('Required'),
//     city: Yup.string().required('Required'),
//     lga: Yup.string().required('Required'),
//   }),
//   Yup.object({}),
//   Yup.object({}),
// ];

// const MultiStepRegistration = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       gender: '',
//       dob: '',
//       address: '',
//       state: '',
//       city: '',
//       lga: '',
//     },
//     validationSchema: validationSchemas[currentStep],
//     validateOnChange: false,
//     validateOnBlur: false,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch('https://your-api-endpoint.com/register', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(values),
//         });

//         if (!response.ok) throw new Error('Network response was not ok');
//         alert('Registration successful!');
//       } catch (error) {
//         alert('Submission failed: ' + error.message);
//       }
//     },
//   });

//   const nextStep = async () => {
//     const isValid = await formik.validateForm();
//     if (Object.keys(isValid).length === 0) {
//       setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
//     } else {
//       formik.setTouched(isValid);
//     }
//   };

//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   const renderStep = () => {
//     const { values, handleChange, errors } = formik;
//     const inputClass = "w-full p-2 border rounded bg-[#EBECED]";

//     return currentStep === 0 ? (
//       <div className="space-y-4">
//         <input name="name" placeholder="Name" value={values.name} onChange={handleChange} className={inputClass} />
//         {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

//         <input name="email" placeholder="Email" value={values.email} onChange={handleChange} className={inputClass} />
//         {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

//         <input name="phone" placeholder="Phone Number" value={values.phone} onChange={handleChange} className={inputClass} />
//         {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}

//         <div className="flex gap-2">
//           <select name="gender" value={values.gender} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]">
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <input type="date" name="dob" value={values.dob} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]" />
//         </div>
//         {(errors.gender || errors.dob) && (
//           <div className="text-red-500 text-sm">{errors.gender || errors.dob}</div>
//         )}

//         <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
//         {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

//         <div className="flex gap-2">
//           <input name="state" placeholder="State" value={values.state} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//           <input name="city" placeholder="City" value={values.city} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//           <input name="lga" placeholder="Local Govt. Area" value={values.lga} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//         </div>
//         {(errors.state || errors.city || errors.lga) && (
//           <div className="text-red-500 text-sm">{errors.state || errors.city || errors.lga}</div>
//         )}
//       </div>
//     ) : currentStep === 1 ? (
//       <div>Professional Information Form</div>
//     ) : currentStep === 2 ? (
//       <div>Verification Form</div>
//     ) : (
//       <pre>{JSON.stringify(formik.values, null, 2)}</pre>
//     );
//   };

//   return (
//     <form onSubmit={formik.handleSubmit} className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/3 bg-teal-700 text-[#36454F] p-6">
//         <h2 className="text-lg font-bold mb-4 text-white">Complete Registration to Get Verified</h2>
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`p-2 border-l-4 ${
//               currentStep === index ? 'border-white font-semibold text-white' : 'border-transparent text-[#36454F]'
//             }`}
//           >
//             {step}
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-2/3 p-10 bg-white text-black">
//         <h3 className="text-xl font-semibold mb-6">{steps[currentStep]}</h3>
//         {renderStep()}
//         <div className="mt-6 flex justify-between">
//           {currentStep > 0 && (
//             <button type="button" onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
//           )}
//           {currentStep < steps.length - 1 ? (
//             <button type="button" onClick={nextStep} className="bg-orange-700 text-white px-4 py-2 rounded">
//               Next: {steps[currentStep + 1]}
//             </button>
//           ) : (
//             <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// };

// export default MultiStepRegistration;


import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Modal from '../../Components/Modal';

const steps = [
  'Personal Information',
  'Professional Information',
  'Verification',
  'Preview and Finish',
];

const validationSchemas = [
  Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    dob: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    lga: Yup.string().required('Required'),
  }),
  Yup.object({}),
  Yup.object({}),
];

const MultiStepRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
      address: '',
      state: '',
      city: '',
      lga: '',
    },
    validationSchema: validationSchemas[currentStep],
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://your-api-endpoint.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error('Network response was not ok');

        setShowModal(true); // Show success modal
      } catch (error) {
        alert('Submission failed: ' + error.message);
      }
    },
  });

  const nextStep = async () => {
    const isValid = await formik.validateForm();
    if (Object.keys(isValid).length === 0) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      formik.setTouched(isValid);
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    const { values, handleChange, errors } = formik;
    const inputClass = "w-full p-2 border rounded bg-[#EBECED]";

    return currentStep === 0 ? (
      <div className="space-y-4">
        <input name="name" placeholder="Name" value={values.name} onChange={handleChange} className={inputClass} />
        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

        <input name="email" placeholder="Email" value={values.email} onChange={handleChange} className={inputClass} />
        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

        <input name="phone" placeholder="Phone Number" value={values.phone} onChange={handleChange} className={inputClass} />
        {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}

        <div className="flex gap-2">
          <select name="gender" value={values.gender} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="date" name="dob" value={values.dob} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]" />
        </div>
        {(errors.gender || errors.dob) && (
          <div className="text-red-500 text-sm">{errors.gender || errors.dob}</div>
        )}

        <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
        {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

        <div className="flex gap-2">
          <input name="state" placeholder="State" value={values.state} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
          <input name="city" placeholder="City" value={values.city} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
          <input name="lga" placeholder="Local Govt. Area" value={values.lga} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
        </div>
        {(errors.state || errors.city || errors.lga) && (
          <div className="text-red-500 text-sm">{errors.state || errors.city || errors.lga}</div>
        )}
      </div>
    ) : currentStep === 1 ? (
      <div>Professional Information Form</div>
    ) : currentStep === 2 ? (
      <div>Verification Form</div>
    ) : (
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
    );
  };

  return (
    <>
      {/* <Modal open={showModal} onClose={() => setShowModal(false)} /> */}
      <form onSubmit={formik.handleSubmit} className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/3 bg-teal-700 text-[#36454F] p-6">
          <h2 className="text-lg font-bold mb-4 text-white">Complete Registration to Get Verified</h2>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-2 border-l-4 ${
                currentStep === index ? 'border-white font-semibold text-white' : 'border-transparent text-[#36454F]'
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-2/3 p-10 bg-white text-black">
          <h3 className="text-xl font-semibold mb-6">{steps[currentStep]}</h3>
          {renderStep()}
          <div className="mt-6 flex justify-between">
            {currentStep > 0 && (
              <button type="button" onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
            )}
            {currentStep < steps.length - 1 ? (
              <button type="button" onClick={nextStep} className="bg-orange-700 text-white px-4 py-2 rounded">
                Next: {steps[currentStep + 1]}
              </button>
            ) : (
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default MultiStepRegistration;


// pages/Auth/SignUp.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import Modal from "../../Components/Modal";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://artisan-dic2.onrender.com/artisan/register-artisan", formData);
      
//       if (res.status === 201 || res.data.success) {
//         setShowModal(true); // Show success modal
//       }
//     } catch (err) {
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div className="p-6">
//       <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
//         <input
//           name="firstname"
//           placeholder="First Name"
//           value={formData.firstname}
//           onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
//           className="border p-2 rounded w-full"
//         />
//         <input
//           name="lastname"
//           placeholder="Last Name"
//           value={formData.lastname}
//           onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
//           className="border p-2 rounded w-full"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="border p-2 rounded w-full"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           className="border p-2 rounded w-full"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Sign Up
//         </button>
//       </form>

//       {/* Modal on success */}
//       <Modal
//         open={showModal}
//         onClose={() => setShowModal(false)}
//         message="Signup successful!"
//         redirectText="Complete Your Profile"
//         redirectTo="/multi-step-registration"
//       />
//     </div>
//   );
// };

// export default SignUp;
