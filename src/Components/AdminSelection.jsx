import React from 'react'

const AdminSelection = () => {
  return (
    <div>
              <div className='mt-[20px] flex justify-between items-center'> 
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

      
      </div>
      
    </div>
  )
}

export default AdminSelection
