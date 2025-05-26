import React from 'react'
import { useNavigate } from 'react-router-dom'

const Transactions = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/transactions');
  };

  return (
    <div>
      <h1>Transactions</h1>
    </div>
  )
}

export default Transactions
