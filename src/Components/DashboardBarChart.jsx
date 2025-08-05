import React from 'react';


import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const dashboardData = [
  { name: 'Customers', y2023: 16000, y2024: 12000, y2025: 15000 },
  { name: 'Artisans', y2023: 19000, y2024: 18000, y2025: 10000 },
  { name: 'Active Services', y2023: 13000, y2024: 14005, y2025: 6000 },
  { name: 'Pending Orders', y2023: 20000, y2024: 12005, y2025: 30000 },
  { name: 'Completed Orders', y2023: 18000, y2024: 10020, y2025: 15000 },
  { name: 'Revenue', y2023: 30000, y2024: 40000, y2025: 50000 },
];

const DashboardBarChart = () => (
  <div className="lg:w-[70%] w-[95%] h-[500px] bg-[#E6F2F2] rounded-xl">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        className='text-[16px] lg:text-[20px] '
        data={dashboardData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="y2023" fill="#05614D" name="2023" />
        <Bar dataKey="y2024" fill="#CC8C1E" name="2024" />
        <Bar dataKey="y2025" fill="#CC1A8B" name="2025" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default DashboardBarChart;
