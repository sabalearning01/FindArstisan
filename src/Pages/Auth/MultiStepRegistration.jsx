import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { CheckCircle } from 'lucide-react';
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
  Yup.object({
    businessname: Yup.string().required('Business name is required'),
    artisanType: Yup.string().required('Artisan type is required'),
    skills: Yup.string().required('Skills are required'),
    address: Yup.string().required('Address is required'),
    availability: Yup.string().required('Please select availability'),
    pricing: Yup.string().required('Please select pricing'),
  }),
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
      businessname: '',
      artisanType: '',
      skills: '',
      availability: '',
      pricing: '',
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
        setShowModal(true);
      } catch (error) {
        alert('Submission failed: ' + error.message);
      }
    },
  });

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
    const inputClass = "w-full p-2 border rounded bg-[#EBECED]";

    if (currentStep === 0) {
      return (
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
         
         <h4 className="text-lg font-semibold mt-4">Your Residential Information</h4>
          

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
      );
    }

    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <input name="businessname" placeholder="Business Name" value={values.businessname} onChange={handleChange} className={inputClass} />
          {errors.businessname && <div className="text-red-500 text-sm">{errors.businessname}</div>}

          <input name="artisanType" placeholder="Artisan Type" value={values.artisanType} onChange={handleChange} className={inputClass} />
          {errors.artisanType && <div className="text-red-500 text-sm">{errors.artisanType}</div>}

          <input name="skills" placeholder="Skills" value={values.skills} onChange={handleChange} className={inputClass} />
          {errors.skills && <div className="text-red-500 text-sm">{errors.skills}</div>}

          {/* New Header */}
          <h4 className="text-lg font-semibold mt-4">Pricing & Availability</h4>

          <input name="address" placeholder="Full Address" value={values.address} onChange={handleChange} className={inputClass} />
          {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

          <select name="availability" value={values.availability} onChange={handleChange} className={inputClass}>
            <option value="">Availability</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
          </select>
          {errors.availability && <div className="text-red-500 text-sm">{errors.availability}</div>}

          <select name="pricing" value={values.pricing} onChange={handleChange} className={inputClass}>
            <option value="">Pricing per hour</option>
            <option value="₦500/hr">₦500/hr</option>
            <option value="₦1000/hr">₦1000/hr</option>
            <option value="₦2000/hr">₦2000/hr</option>
            <option value="custom">Custom</option>
          </select>
          {errors.pricing && <div className="text-red-500 text-sm">{errors.pricing}</div>}
        </div>
      );
    }

    if (currentStep === 2) return 
    <div >
      
    </div>;

    return <pre>{JSON.stringify(formik.values, null, 2)}</pre>;
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex h-screen">
        <div className="w-[585px] bg-teal-700 text-[#36454F] p-6">
          <h2 className="font-[DM Sans] text-[32px] font-medium mb-4 mt-[50px] text-white ml-[60px] mr-[60px]">
            Complete Registration to <span className='text-[#EFCAB0]'>Get Verified</span>
          </h2>
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div key={index}
                className={`flex items-center gap-2 hover:bg-[#003636] p-2 border-l-4 ml-[60px] mr-[60px] rounded-r-md transition-all duration-300 ${
                  isActive || isCompleted
                    ? 'border-white font-semibold text-white'
                    : 'border-transparent text-[#C1D1D0]'
                }`}>
                {(isActive || isCompleted) && <CheckCircle className="w-5 h-5 text-white" />}
                <span>{step}</span>
              </div>
            );
          })}
        </div>

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
