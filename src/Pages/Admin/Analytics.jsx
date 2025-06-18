import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';

const Analytics = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/analytics');
  };

  return (
    <div>
      <AdminSearch/>
      <h1>Analytics</h1>
    </div>
  )
}

export default Analytics
