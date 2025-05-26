import React from 'react'
import { useNavigate } from 'react-router-dom'

const Analytics = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/analytics');
  };

  return (
    <div>
      <h1>Analytics</h1>
    </div>
  )
}

export default Analytics
