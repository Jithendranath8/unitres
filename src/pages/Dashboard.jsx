import React from 'react';
import ProductTable from '../components/ProductTable';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Product Management</h2>
      <ProductTable />
    </div>
  );
};

export default Dashboard;