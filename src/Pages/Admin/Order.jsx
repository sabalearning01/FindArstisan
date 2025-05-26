import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';

const Order = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/order');
  };

  return (
    <div>
      <AdminSearch/>
      <h1>Order</h1>
    </div>
  )
}

export default Order
