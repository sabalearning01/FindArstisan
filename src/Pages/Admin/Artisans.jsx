import React from 'react'
import { useNavigate } from 'react-router-dom'

const Artisans = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/dashboard/artisans');
  };
  return (
    <div>
       <h1>Artisans</h1>
    </div>
  )
}

export default Artisans
