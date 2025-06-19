import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';
import TableData from '../../Components/TableData';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/services');
  };

  return (
    <div>
      <AdminSearch/>
      <TableData/>

     
      {/* Add more content or components related to services management */}
    </div>
  )
}

export default Services
