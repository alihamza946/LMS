import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Books */}
        <StatCard title="Total Books" value="120" color="blue" />
        {/* Total Users */}
        <StatCard title="Total Users" value="50" color="green" />
        {/* Total Authors */}
        <StatCard title="Total Authors" value="20" color="red" />
        {/* Total Downloads */}
        <StatCard title="Total Downloads" value="350" color="purple" />
      </div>
    </div>
  );
};

// Reusable Stats Component
const StatCard = ({ title, value, color }) => (
  <div className={`bg-white shadow-md p-6 rounded-lg text-center border-t-4 border-${color}-500`}>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className={`text-3xl mt-2 text-${color}-600`}>{value}</p>
  </div>
);

export default AdminDashboard;
