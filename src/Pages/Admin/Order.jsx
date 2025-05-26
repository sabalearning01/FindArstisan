import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/order');
  };

  return (
    <div>
      <h1>Order</h1>
    </div>
  )
}

export default Order
