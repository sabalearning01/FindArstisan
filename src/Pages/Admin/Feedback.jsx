import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';

const Feedback = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/feedback');
  };

  return (
    <div>
      <AdminSearch/>
    </div>
  )
}

export default Feedback
