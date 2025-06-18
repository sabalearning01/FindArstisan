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
      {/* <div className='mt-[20px] flex justify-between items-center'> 
        <select className='font-[Montserrat] font-medium text-[14px] border rounded-lg px-[10px] py-[15px]'>
          <option value="all">Categories</option>
          <option value="active">Active Artisans</option>
          <option value="inactive">Inactive Artisans</option>
        </select>

         <select className='font-[Montserrat] font-medium text-[14px] border rounded-lg px-[10px] py-[15px]'>
          <option value="all">Status</option>
          <option value="active">Active Artisans</option>
          <option value="inactive">Inactive Artisans</option>
        </select>

         <select className='font-[Montserrat] font-medium text-[14px] border rounded-lg px-[10px] py-[15px]' >
          <option value="all">Verification Status</option>
          <option value="active">Active Artisans</option>
          <option value="inactive">Inactive Artisans</option>
        </select>

         <select className=' font-[Montserrat] font-medium text-[14px] border rounded px-[10px] py-[15px]'>
          <option value="all">Newest</option>
          <option value="active">Active Artisans</option>
          <option value="inactive">Inactive Artisans</option>
        </select>

      
      </div> */}
      <AdminSelection/>
        <TableData/>
    </div>
  )
}

export default Artisans
