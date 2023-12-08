import React from 'react'
import { PieChart, Pie, Cell, PolarAngleAxis } from 'recharts';

const data = [
  { name: 'Active', value: 8 }, // Example data for active hours
  { name: 'Inactive', value: 16 }, // Example data for inactive hours
];

const COLORS = ['#8884d8', '#e0e0e0']; // Colors for active and inactive hours

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const RADIAN = Math.PI / 180;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ClockComponent = () => {
  return (
    <>
        <div className='w-96 h-96 bg-white rounded-3xl'>
            <div><h1 className='text-center py-3 text-xl font-semibold'>Flow Peaks</h1></div>
            <div>
            <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
            </div>
        </div>
    </>
  )
}

export default ClockComponent