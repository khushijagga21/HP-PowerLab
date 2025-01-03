// Import necessary libraries
import React, { useState } from 'react';

const AdminManagement = () => {
  // Dummy data for pending orders
  const [pendingOrders, setPendingOrders] = useState([
    { id: 1, customer: 'Ramesh Singh', fuelType: 'Diesel', location: 'Village A', driver: '' },
    { id: 2, customer: 'Suresh Yadav', fuelType: 'Petrol', location: 'Village B', driver: '' },
    { id: 3, customer: 'Geeta Devi', fuelType: 'Diesel', location: 'Village C', driver: '' },
  ]);

  // Dummy driver list
  const drivers = ['Raj Kumar', 'Amit Sharma', 'Sunil Yadav'];

  const handleAssignDriver = (orderId, driver) => {
    setPendingOrders((orders) =>
      orders.map((order) =>
        order.id === orderId ? { ...order, driver } : order
      )
    );
  };

  const handleApprove = (orderId) => {
    setPendingOrders((orders) => orders.filter((order) => order.id !== orderId));
    alert(`Order ${orderId} approved!`);
  };

  const handleReject = (orderId) => {
    setPendingOrders((orders) => orders.filter((order) => order.id !== orderId));
    alert(`Order ${orderId} rejected.`);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-100 min-h-screen font-sans">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg mb-6 text-center">
        <h1 className="text-5xl font-extrabold mb-3">Admin Management</h1>
        <p className="text-xl">Seamlessly manage and assign orders.</p>
      </div>

      {/* Pending Orders Table */}
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-purple-600 mb-6 border-b-4 border-purple-300 pb-3">Pending Orders</h2>
        <table className="w-full border-collapse text-left text-sm md:text-lg">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <th className="p-5 border">Customer Name</th>
              <th className="p-5 border">Fuel Type</th>
              <th className="p-5 border">Location</th>
              <th className="p-5 border">Driver</th>
              <th className="p-5 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders.map((order) => (
              <tr key={order.id} className="hover:bg-purple-100 transition">
                <td className="p-5 border font-medium text-gray-700">{order.customer}</td>
                <td className="p-5 border text-gray-600">{order.fuelType}</td>
                <td className="p-5 border text-gray-600">{order.location}</td>
                <td className="p-5 border">
                  <select
                    className="w-full px-3 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={order.driver}
                    onChange={(e) => handleAssignDriver(order.id, e.target.value)}
                  >
                    <option value="">Select Driver</option>
                    {drivers.map((driver, index) => (
                      <option key={index} value={driver}>
                        {driver}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-5 border">
                  <div className="flex gap-4 justify-center">
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
                      onClick={() => handleApprove(order.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition transform hover:scale-105"
                      onClick={() => handleReject(order.id)}
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManagement;
