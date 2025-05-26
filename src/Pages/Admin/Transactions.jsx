import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';

const Transactions = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/transactions');
  };

  return (
    <div>
      <AdminSearch/>
      <h1>Transactions</h1>
    </div>
  )
}

export default Transactions
