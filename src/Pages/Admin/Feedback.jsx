import React from 'react'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/feedback');
  };

  return (
    <div>
      
    </div>
  )
}

export default Feedback
