// Import necessary libraries
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalDeliveries: 1200,
    pendingOrders: 45,
    co2Saved: 3500, // in kg
  });

  const participationData = {
    labels: ['Village A', 'Village B', 'Village C', 'Village D'],
    datasets: [
      {
        label: 'Participation',
        data: [25, 30, 20, 25],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722'],
      },
    ],
  };

  const biofuelProductionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Biofuel Production (in tons)',
        data: [10, 15, 20, 25, 30, 35],
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 min-h-screen font-sans">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-500 via-teal-600 to-green-600 text-white p-8 rounded-lg shadow-lg mb-6 text-center">
        <h1 className="text-5xl font-extrabold mb-3">Admin Dashboard</h1>
        <p className="text-xl">Track and manage cooperative performance and environmental impact.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600">Total Deliveries</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">{stats.totalDeliveries}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600">Pending Orders</h3>
          <p className="text-4xl font-bold text-red-600 mt-2">{stats.pendingOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600">CO2 Saved</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">{stats.co2Saved} kg</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Cooperative Participation</h3>
          <Pie data={participationData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Biofuel Production</h3>
          <Line data={biofuelProductionData} />
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-teal-600 mb-4">Environmental Impact</h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-sm font-medium text-green-600">CO2 Saved</span>
            <span className="text-sm font-medium text-green-600">{stats.co2Saved} kg</span>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div
              style={{ width: `${(stats.co2Saved / 5000) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
          <span className="text-sm text-gray-600">Goal: 5000 kg</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
