import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSearch from '../../Components/AdminSearch';
import TableData from '../../Components/TableData';
import AdminSelection from '../../Components/AdminSelection';

const Artisans = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/dashboard/artisans');
  };
  return (
    <div>
      <div className='flex justify-between items-center'>
       <AdminSearch/>
      <button className='font-[Montserrat] bg-[#CC5600] text-white text-[18px] rounded-2xl cursor-pointer px-[10px] py-[15px]'> Add New Artisan </button>
      </div>
    
      <AdminSelection/>
        <TableData/>
    </div>
  )
}

export default Artisans
