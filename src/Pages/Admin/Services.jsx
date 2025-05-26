import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/services');
  };

  return (
    <div>
      <AdminSearch/>
      <h1>Services</h1>
      <p>Manage your services here.</p>
      {/* Add more content or components related to services management */}
    </div>
  )
}

export default Services
