import React from 'react'
import AdminSearch from '../../Components/AdminSearch'
import AdminSelection from '../../Components/AdminSelection'
import TableData from '../../Components/TableData';
import CustomerTableData from '../../Components/CustomerTableData';

const Customers = () => {
  return (
    <div>
      <AdminSearch/>
      <AdminSelection/>
      {/* <TableData/> */}
      <CustomerTableData/>
      

    </div>
  )
}

export default Customers
