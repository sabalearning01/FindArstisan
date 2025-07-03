// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import { CheckCircle } from 'lucide-react';
// import Modal from '../../Components/Modal';
// import uploadicon from '../../assets/uploadicon.png';
// import uploadcloudline from '../../assets/uploadcloudline.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
//   Yup.object({
//     businessname: Yup.string().required('Business name is required'),
//     artisanType: Yup.string().required('Artisan type is required'),
//     skills: Yup.string().required('Skills are required'),
//     address: Yup.string().required('Address is required'),
//     availability: Yup.string().required('Please select availability'),
//     pricing: Yup.string().required('Please select pricing'),
//   }),
//   Yup.object({
//     passport: Yup.mixed().required('Passport is required'),
//     id: Yup.mixed().required('ID is required'),
//     cert: Yup.mixed().required('Certification is required'),
//     proof: Yup.mixed().required('Proof of address is required'),
//   }),
// ];

// const MultiStepRegistration = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [filePreviews, setFilePreviews] = useState({});

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
//       businessname: '',
//       artisanType: '',
//       skills: '',
//       availability: '',
//       pricing: '',
//       passport: null,
//       id: null,
//       cert: null,
//       proof: null,
//     },
//     validationSchema: validationSchemas[currentStep],
//     validateOnChange: false,
//     validateOnBlur: false,
//     onSubmit: async (values) => {
//       try {
//         const formData = new FormData();
//         for (const key in values) {
//           formData.append(key, values[key]);
//         }

//       const token = localStorage.getItem('token');
//        console.log('Retrieve:', token)

//         const response = await fetch('https://artisan-dic2.onrender.com/artisan/complete-profile', {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         });

//         if (!response.ok) throw new Error('Network response was not ok');

//         toast.success('Profile submitted successfully!');
//         setShowModal(true);
//       } catch (error) {
//         toast.error('Submission failed: ' + error.message);
//       }
//     },
//   });

//   const handleFileChange = (event, name) => {
//     const file = event.currentTarget.files[0];
//     if (file) {
//       formik.setFieldValue(name, file);
//       setFilePreviews((prev) => ({
//         ...prev,
//         [name]: URL.createObjectURL(file),
//       }));
//     }
//   };

//   const nextStep = async () => {
//     const errors = await formik.validateForm();
//     if (Object.keys(errors).length === 0) {
//       setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
//     } else {
//       formik.setErrors(errors);
//     }
//   };

//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   const renderStep = () => {
//     const { values, handleChange, errors } = formik;
//     const inputClass = 'w-full p-2 border rounded bg-[#EBECED]';

//     if (currentStep === 0) {
//       return (
//         <div className="space-y-4">
//           <input name="name" placeholder="Name" value={values.name} onChange={handleChange} className={inputClass} />
//           {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

//           <input name="email" placeholder="Email" value={values.email} onChange={handleChange} className={inputClass} />
//           {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

//           <input name="phone" placeholder="Phone Number" value={values.phone} onChange={handleChange} className={inputClass} />
//           {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}

//           <div className="flex gap-2">
//             <select name="gender" value={values.gender} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]">
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             <input type="date" name="dob" value={values.dob} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]" />
//           </div>
//           {(errors.gender || errors.dob) && (
//             <div className="text-red-500 text-sm">{errors.gender || errors.dob}</div>
//           )}

//           <h4 className="text-lg font-semibold mt-4">Your Residential Information</h4>

//           <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
//           {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

//           <div className="flex gap-2">
//             <input name="state" placeholder="State" value={values.state} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//             <input name="city" placeholder="City" value={values.city} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//             <input name="lga" placeholder="Local Govt. Area" value={values.lga} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//           </div>
//           {(errors.state || errors.city || errors.lga) && (
//             <div className="text-red-500 text-sm">{errors.state || errors.city || errors.lga}</div>
//           )}
//         </div>
//       );
//     }

//     if (currentStep === 1) {
//       return (
//         <div className="space-y-4">
//           <input name="businessname" placeholder="Business Name" value={values.businessname} onChange={handleChange} className={inputClass} />
//           {errors.businessname && <div className="text-red-500 text-sm">{errors.businessname}</div>}

//           <input name="artisanType" placeholder="Artisan Type" value={values.artisanType} onChange={handleChange} className={inputClass} />
//           {errors.artisanType && <div className="text-red-500 text-sm">{errors.artisanType}</div>}

//           <input name="skills" placeholder="Skills" value={values.skills} onChange={handleChange} className={inputClass} />
//           {errors.skills && <div className="text-red-500 text-sm">{errors.skills}</div>}

//           <h4 className="text-lg font-semibold mt-4">Pricing & Availability</h4>

//           <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
//           {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

//           <select name="availability" value={values.availability} onChange={handleChange} className={inputClass}>
//             <option value="">Availability</option>
//             <option value="weekdays">Weekdays</option>
//             <option value="weekends">Weekends</option>
//             <option value="fulltime">Full-time</option>
//             <option value="parttime">Part-time</option>
//           </select>
//           {errors.availability && <div className="text-red-500 text-sm">{errors.availability}</div>}

//           <select name="pricing" value={values.pricing} onChange={handleChange} className={inputClass}>
//             <option value="">Pricing per hour</option>
//             <option value="₦500/hr">₦500/hr</option>
//             <option value="₦1000/hr">₦1000/hr</option>
//             <option value="₦2000/hr">₦2000/hr</option>
//             <option value="custom">Custom</option>
//           </select>
//           {errors.pricing && <div className="text-red-500 text-sm">{errors.pricing}</div>}
//         </div>
//       );
//     }

//     if (currentStep === 2) {
//       return (
//         <div className="space-y-4">
//           {['passport', 'id', 'cert', 'proof'].map((field) => {
//             const isPassport = field === 'passport';
//             const labelText = {
//               passport: 'Upload Passport Photograph',
//               id: 'Upload Government ID [E.g. NIN, Int. Passport, etc.]',
//               cert: 'Business Certification [E.g CAC docs, etc]',
//               proof: 'Proof of Address (NEPA or Utility Bill)',
//             };

//             const icon = isPassport ? uploadicon : uploadcloudline;
//             const boxClass = isPassport ? 'w-[297px] h-[156px]' : 'w-full h-[200px]';
//             const file = formik.values[field];
//             const fileName = file && file.name ? file.name : null;

//             return (
//               <div
//                 key={field}
//                 className={`bg-[#E6E6E6] rounded-xl flex flex-col items-center justify-center cursor-pointer ${boxClass} relative`}
//               >
//                 <input
//                   type="file"
//                   id={field}
//                   name={field}
//                   accept="image/*,application/pdf"
//                   onChange={(e) => handleFileChange(e, field)}
//                   className="hidden"
//                 />
//                 <label
//                   htmlFor={field}
//                   className="w-full h-full flex flex-col items-center justify-center"
//                 >
//                   <img src={icon} alt="upload icon" className="w-10 h-10" />
//                   <h6 className="text-center text-[#788289] text-sm mt-2 px-2">{labelText[field]}</h6>

//                   {fileName && (
//                     <p className="text-sm text-gray-600 mt-1 text-center px-4 truncate max-w-[90%]">
//                       {fileName}
//                     </p>
//                   )}

//                   {filePreviews[field] && (
//                     <div className="mt-2">
//                       <img
//                         src={filePreviews[field]}
//                         alt={`${field} preview`}
//                         className="h-[100px] object-contain"
//                       />
//                     </div>
//                   )}
//                 </label>
//                 {errors[field] && <div className="text-red-500 text-sm mt-1">{errors[field]}</div>}
//               </div>
//             );
//           })}
//         </div>
//       );
//     }

//     return <pre>{JSON.stringify(formik.values, null, 2)}</pre>;
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
//       <form onSubmit={formik.handleSubmit} className="flex min-h-screen">
//         <div className="w-[585px] bg-teal-700 text-[#36454F] p-6">
//           <h2 className="font-[DM Sans] text-[32px] font-medium mb-4 mt-[50px] text-white ml-[60px] mr-[60px]">
//             Complete Registration to <span className='text-[#EFCAB0]'>Get Verified</span>
//           </h2>
//           {steps.map((step, index) => {
//             const isActive = index === currentStep;
//             const isCompleted = index < currentStep;
//             return (
//               <div key={index} className={`flex items-center gap-2 hover:bg-[#003636] p-2 border-l-4 ml-[60px] mr-[60px] rounded-r-md transition-all duration-300 ${isActive || isCompleted ? 'border-white font-semibold text-white' : 'border-transparent text-[#C1D1D0]'}`}>
//                 {(isActive || isCompleted) && <CheckCircle className="w-5 h-5 text-white" />}
//                 <span>{step}</span>
//               </div>
//             );
//           })}
//         </div>

//         <div className="w-2/3 p-10 bg-white text-black">
//           <h3 className="text-xl font-semibold mb-6">{steps[currentStep]}</h3>
//           {renderStep()}
//           <div className="mt-6 flex justify-between">
//             {currentStep > 0 && (
//               <button type="button" onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
//             )}
//             {currentStep < steps.length - 1 ? (
//               <button type="button" onClick={nextStep} className="ml-[420px] bg-[#BA4D00] text-white px-4 py-2 rounded">
//                 Next: {steps[currentStep + 1]}
//               </button>
//             ) : (
//               <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
//             )}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default MultiStepRegistration;

// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import { CheckCircle } from 'lucide-react';
// import Modal from '../../Components/Modal';
// import uploadicon from '../../assets/uploadicon.png';
// import uploadcloudline from '../../assets/uploadcloudline.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
//   Yup.object({
//     businessname: Yup.string().required('Business name is required'),
//     artisanType: Yup.string().required('Artisan type is required'),
//     skills: Yup.string().required('Skills are required'),
//     address: Yup.string().required('Address is required'),
//     availability: Yup.string().required('Please select availability'),
//     pricing: Yup.string().required('Please select pricing'),
//   }),
//   Yup.object({
//     passport: Yup.mixed().required('Passport is required'),
//     id: Yup.mixed().required('ID is required'),
//     cert: Yup.mixed().required('Certification is required'),
//     proof: Yup.mixed().required('Proof of address is required'),
//   }),
// ];

// const MultiStepRegistration = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [filePreviews, setFilePreviews] = useState({});

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
//       businessname: '',
//       artisanType: '',
//       skills: '',
//       availability: '',
//       pricing: '',
//       passport: null,
//       id: null,
//       cert: null,
//       proof: null,
//     },
//     validationSchema: validationSchemas[currentStep],
//     validateOnChange: false,
//     validateOnBlur: false,
//     onSubmit: async (values) => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('You are not authenticated. Please log in.');
//         return;
//       }

//       try {
//         const formData = new FormData();
//         for (const key in values) {
//           if (values[key]) {
//             formData.append(key, values[key]);
//           }
//         }

//         const response = await fetch('https://artisan-dic2.onrender.com/artisan/complete-profile', {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         });

//         if (!response.ok) {
//           const errorData = await response.json().catch(() => ({}));
//           throw new Error(errorData.message || 'Profile submission failed');
//         }

//         toast.success('Profile submitted successfully!');
//         setShowModal(true);
//       } catch (error) {
//         toast.error('Submission failed: ' + error.message);
//       }
//     },
//   });

//   const handleFileChange = (event, name) => {
//     const file = event.currentTarget.files[0];
//     if (file) {
//       formik.setFieldValue(name, file);
//       setFilePreviews((prev) => ({
//         ...prev,
//         [name]: URL.createObjectURL(file),
//       }));
//     }
//   };

//   const nextStep = async () => {
//     const errors = await formik.validateForm();
//     if (Object.keys(errors).length === 0) {
//       setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
//     } else {
//       formik.setErrors(errors);
//     }
//   };

//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   const renderStep = () => {
//     const { values, handleChange, errors } = formik;
//     const inputClass = 'w-full p-2 border rounded bg-[#EBECED]';

//     if (currentStep === 0) {
//       return (
//         <div className="space-y-4">
//           <input name="name" placeholder="Name" value={values.name} onChange={handleChange} className={inputClass} />
//           {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

//           <input name="email" placeholder="Email" value={values.email} onChange={handleChange} className={inputClass} />
//           {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

//           <input name="phone" placeholder="Phone Number" value={values.phone} onChange={handleChange} className={inputClass} />
//           {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}

//           <div className="flex gap-2">
//             <select name="gender" value={values.gender} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]">
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             <input type="date" name="dob" value={values.dob} onChange={handleChange} className="w-1/2 p-2 border rounded bg-[#EBECED]" />
//           </div>
//           {(errors.gender || errors.dob) && (
//             <div className="text-red-500 text-sm">{errors.gender || errors.dob}</div>
//           )}

//           <h4 className="text-lg font-semibold mt-4">Your Residential Information</h4>

//           <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
//           {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

//           <div className="flex gap-2">
//             <input name="state" placeholder="State" value={values.state} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//             <input name="city" placeholder="City" value={values.city} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//             <input name="lga" placeholder="Local Govt. Area" value={values.lga} onChange={handleChange} className="w-1/3 p-2 border rounded bg-[#EBECED]" />
//           </div>
//           {(errors.state || errors.city || errors.lga) && (
//             <div className="text-red-500 text-sm">{errors.state || errors.city || errors.lga}</div>
//           )}
//         </div>
//       );
//     }

//     if (currentStep === 1) {
//       return (
//         <div className="space-y-4">
//           <input name="businessname" placeholder="Business Name" value={values.businessname} onChange={handleChange} className={inputClass} />
//           {errors.businessname && <div className="text-red-500 text-sm">{errors.businessname}</div>}

//           <input name="artisanType" placeholder="Artisan Type" value={values.artisanType} onChange={handleChange} className={inputClass} />
//           {errors.artisanType && <div className="text-red-500 text-sm">{errors.artisanType}</div>}

//           <input name="skills" placeholder="Skills" value={values.skills} onChange={handleChange} className={inputClass} />
//           {errors.skills && <div className="text-red-500 text-sm">{errors.skills}</div>}

//           <h4 className="text-lg font-semibold mt-4">Pricing & Availability</h4>

//           <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
//           {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

//           <select name="availability" value={values.availability} onChange={handleChange} className={inputClass}>
//             <option value="">Availability</option>
//             <option value="weekdays">Weekdays</option>
//             <option value="weekends">Weekends</option>
//             <option value="fulltime">Full-time</option>
//             <option value="parttime">Part-time</option>
//           </select>
//           {errors.availability && <div className="text-red-500 text-sm">{errors.availability}</div>}

//           <select name="pricing" value={values.pricing} onChange={handleChange} className={inputClass}>
//             <option value="">Pricing per hour</option>
//             <option value="₦500/hr">₦500/hr</option>
//             <option value="₦1000/hr">₦1000/hr</option>
//             <option value="₦2000/hr">₦2000/hr</option>
//             <option value="custom">Custom</option>
//           </select>
//           {errors.pricing && <div className="text-red-500 text-sm">{errors.pricing}</div>}
//         </div>
//       );
//     }

//     if (currentStep === 2) {
//       return (
//         <div className="space-y-4">
//           {['passport', 'id', 'cert', 'proof'].map((field) => {
//             const isPassport = field === 'passport';
//             const labelText = {
//               passport: 'Upload Passport Photograph',
//               id: 'Upload Government ID [E.g. NIN, Int. Passport, etc.]',
//               cert: 'Business Certification [E.g CAC docs, etc]',
//               proof: 'Proof of Address (NEPA or Utility Bill)',
//             };
//             const icon = isPassport ? uploadicon : uploadcloudline;
//             const boxClass = isPassport ? 'w-[297px] h-[156px]' : 'w-full h-[200px]';
//             const file = formik.values[field];
//             const fileName = file && file.name ? file.name : null;

//             return (
//               <div key={field} className={`bg-[#E6E6E6] rounded-xl flex flex-col items-center justify-center cursor-pointer ${boxClass} relative`}>
//                 <input type="file" id={field} name={field} accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, field)} className="hidden" />
//                 <label htmlFor={field} className="w-full h-full flex flex-col items-center justify-center">
//                   <img src={icon} alt="upload icon" className="w-10 h-10" />
//                   <h6 className="text-center text-[#788289] text-sm mt-2 px-2">{labelText[field]}</h6>
//                   {fileName && (
//                     <p className="text-sm text-gray-600 mt-1 text-center px-4 truncate max-w-[90%]">
//                       {fileName}
//                     </p>
//                   )}
//                   {filePreviews[field] && (
//                     file?.type === 'application/pdf' ? (
//                       <p className="text-sm text-gray-500 mt-2">PDF uploaded</p>
//                     ) : (
//                       <img src={filePreviews[field]} alt={`${field} preview`} className="h-[100px] object-contain" />
//                     )
//                   )}
//                 </label>
//                 {errors[field] && <div className="text-red-500 text-sm mt-1">{errors[field]}</div>}
//               </div>
//             );
//           })}
//         </div>
//       );
//     }

//     return <pre>{JSON.stringify(formik.values, null, 2)}</pre>;
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
//       <form onSubmit={formik.handleSubmit} className="flex min-h-screen">
//         <div className="w-[585px] bg-teal-700 text-[#36454F] p-6">
//           <h2 className="font-[DM Sans] text-[32px] font-medium mb-4 mt-[50px] text-white ml-[60px] mr-[60px]">
//             Complete Registration to <span className='text-[#EFCAB0]'>Get Verified</span>
//           </h2>
//           {steps.map((step, index) => {
//             const isActive = index === currentStep;
//             const isCompleted = index < currentStep;
//             return (
//               <div key={index} className={`flex items-center gap-2 hover:bg-[#003636] p-2 border-l-4 ml-[60px] mr-[60px] rounded-r-md transition-all duration-300 ${isActive || isCompleted ? 'border-white font-semibold text-white' : 'border-transparent text-[#C1D1D0]'}`}>
//                 {(isActive || isCompleted) && <CheckCircle className="w-5 h-5 text-white" />}
//                 <span>{step}</span>
//               </div>
//             );
//           })}
//         </div>

//         <div className="w-2/3 p-10 bg-white text-black">
//           <h3 className="text-xl font-semibold mb-6">{steps[currentStep]}</h3>
//           {renderStep()}
//           <div className="mt-6 flex justify-between">
//             {currentStep > 0 && (
//               <button type="button" onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
//             )}
//             {currentStep < steps.length - 1 ? (
//               <button type="button" onClick={nextStep} className="ml-[420px] bg-[#BA4D00] text-white px-4 py-2 rounded">
//                 Next: {steps[currentStep + 1]}
//               </button>
//             ) : (
//               <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
//             )}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default MultiStepRegistration;

import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CheckCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadicon from "../../assets/uploadicon.png";
import uploadcloudline from "../../assets/uploadcloudline.png";

const steps = [
  "Personal Information",
  "Professional Information",
  "Verification",
  "Preview and Finish",
];

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    lga: Yup.string().required("Required"),
  }),
  Yup.object({
    businessname: Yup.string().required("Business name is required"),
    artisanType: Yup.string().required("Artisan type is required"),
    skills: Yup.string().required("Skills are required"),
    availability: Yup.string().required("Please select availability"),
    pricing: Yup.string().required("Please select pricing"),
  }),
  Yup.object({
    passport: Yup.mixed().required("Passport is required"),
    id: Yup.mixed().required("ID is required"),
    cert: Yup.mixed().required("Certification is required"),
    proof: Yup.mixed().required("Proof of address is required"),
  }),
];

const MultiStepRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [filePreviews, setFilePreviews] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      address: "",
      state: "",
      city: "",
      lga: "",
      businessname: "",
      artisanType: "",
      skills: "",
      availability: "",
      pricing: "",
      passport: null,
      id: null,
      cert: null,
      proof: null,
    },
    validationSchema: validationSchemas[currentStep],
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        for (const key in values) {
          formData.append(key, values[key]);
        }
        const token = localStorage.getItem("token");

        const response = await fetch(
          "https://artisan-dic2.onrender.com/artisan/complete-profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!response.ok) throw new Error("Submission failed");
        toast.success("Profile submitted successfully!");
      } catch (error) {
        toast.error("Error: " + error.message);
      }
    },
  });

  const handleFileChange = (event, name) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue(name, file);
      setFilePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
  };

  const nextStep = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      formik.setErrors(errors);
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    const { values, handleChange, errors } = formik;
    const inputClass = "w-[90%] p-2 border rounded bg-[#EBECED]";

    if (currentStep === 0) {
      return (
        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={values.phone}
            onChange={handleChange}
            className={inputClass}
          />
          <div className="flex gap-2">
            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded bg-[#EBECED]"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              name="dob"
              value={values.dob}
              onChange={handleChange}
              className="w-[39%] p-2 border rounded bg-[#EBECED]"
            />
          </div>
          <input
            name="address"
            placeholder="Full Address"
            value={values.address}
            onChange={handleChange}
            className={inputClass}
          />
          <div className="flex gap-2">
            <input
              name="state"
              placeholder="State"
              value={values.state}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded bg-[#EBECED]"
            />
            <input
              name="city"
              placeholder="City"
              value={values.city}
              onChange={handleChange}
              className="w-2/8 p-2 border rounded bg-[#EBECED]"
            />
            <input
              name="lga"
              placeholder="Local Govt. Area"
              value={values.lga}
              onChange={handleChange}
              className="w-[30%] p-2 border rounded bg-[#EBECED]"
            />
          </div>
        </div>
      );
    }

    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <input
            name="businessname"
            placeholder="Business Name"
            value={values.businessname}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="artisanType"
            placeholder="Artisan Type"
            value={values.artisanType}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="skills"
            placeholder="Skills"
            value={values.skills}
            onChange={handleChange}
            className={inputClass}
          />
          <select
            name="availability"
            value={values.availability}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>

          </select>
          <select
            name="pricing"
            value={values.pricing}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Pricing</option>
            <option value="₦500/hr">₦500/hr</option>
            <option value="₦1000/hr">₦1000/hr</option>
            <option value="₦2000/hr">₦2000/hr</option>
            <option value="₦5000/day">₦5000/day</option>
            <option value="₦1000/week">₦10000/week</option>
            <option value="₦20000/hr">₦20000/part-time</option>
            <option value="negotiable">Negotiable</option>
          </select>
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          {["passport", "id", "cert", "proof"].map((field) => (
            <div key={field} className="bg-[#E6E6E6] p-4 rounded">
              <label className="block mb-2 capitalize">{field}</label>
              <input type="file" onChange={(e) => handleFileChange(e, field)} />
              {filePreviews[field] && (
                <img
                  src={filePreviews[field]}
                  alt={field}
                  className="mt-2 h-20 object-cover"
                />
              )}
              {errors[field] && (
                <div className="text-red-500">{errors[field]}</div>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="bg-white p-6 rounded shadow space-y-6">
          <h4 className="text-xl font-bold">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <strong>Name:</strong> {values.name}
            </p>
            <p>
              <strong>Email:</strong> {values.email}
            </p>
            <p>
              <strong>Phone:</strong> {values.phone}
            </p>
            <p>
              <strong>Gender:</strong> {values.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {values.dob}
            </p>
          </div>

          <h4 className="text-xl font-bold">Residential Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <strong>Address:</strong> {values.address}
            </p>
            <p>
              <strong>State:</strong> {values.state}
            </p>
            <p>
              <strong>City:</strong> {values.city}
            </p>
            <p>
              <strong>LGA:</strong> {values.lga}
            </p>
          </div>

          <h4 className="text-xl font-bold">Professional Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <strong>Business Name:</strong> {values.businessname}
            </p>
            <p>
              <strong>Artisan Type:</strong> {values.artisanType}
            </p>
            <p>
              <strong>Skills:</strong> {values.skills}
            </p>
            <p>
              <strong>Availability:</strong> {values.availability}
            </p>
            <p>
              <strong>Pricing:</strong> {values.pricing}
            </p>
          </div>

          <h4 className="text-xl font-bold">Verification Files</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <strong>Passport:</strong>{" "}
              {values.passport?.name || "Not uploaded"}
            </p>
            <p>
              <strong>ID:</strong> {values.id?.name || "Not uploaded"}
            </p>
            <p>
              <strong>Certification:</strong>{" "}
              {values.cert?.name || "Not uploaded"}
            </p>
            <p>
              <strong>Proof of Address:</strong>{" "}
              {values.proof?.name || "Not uploaded"}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
      <form onSubmit={formik.handleSubmit} className="flex min-h-screen">
        {/* Sidebar Steps */}
        <div className="w-[300px] bg-teal-700 text-white p-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 mb-4 ${
                currentStep === index ? "font-bold" : ""
              }`}
            >
              {index <= currentStep && (
                <CheckCircle className="w-5 h-5 text-white" />
              )}
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="w-full p-8">
          <h2 className="text-2xl font-semibold mb-6">{steps[currentStep]}</h2>
          {renderStep()}
          <div className="mt-6 flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-white border border-[teal] text-black px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#BA4D00] mr-[93px] text-white border border-[#008080] px-4 py-2 rounded"
              >
                Next: {steps[currentStep + 1]}
              </button>
            ) : (
              <button
                type="submit"
                className="bg-[#BA4D00] text-white px-4 py-2 rounded"
              >
                Finish Registration
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default MultiStepRegistration;
