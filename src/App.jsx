import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginBox from './Page/Login';
import Signup from './Page/SignUp';
import Home from './Page/Home';
import Ordering from './Page/Order';
import About from './Page/About';
import Tips from './Page/Tips';
import FarmerOrder from './Page/FarmerOrder';
import FarmerProfile from './Page/FarmerProfile';
import DriverDeliver from './Page/DriverDeliver';
import AdminDashboard from './Page/AdminDashboard';
import AdminMangement from './Page/AdminMangement';
import FarmerCommunity from './Page/FarmerCommunity';

// Simulated Authentication Function
const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return !!user;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginBox />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/tips" element={<Tips />} />

            {/* Farmer Routes */}
            <Route
              path="/farmerOrder"
              element={<ProtectedRoute element={<FarmerOrder />} />}
            />
            <Route
              path="/farmerProfile"
              element={<ProtectedRoute element={<FarmerProfile />} />}
            />
            <Route
              path="/farmerCommunity"
              element={<ProtectedRoute element={<FarmerCommunity />} />}
            />

            {/* Driver Routes */}
            <Route
              path="/driverDeliver"
              element={<ProtectedRoute element={<DriverDeliver />} />}
            />

            {/* Admin Routes */}
            <Route
              path="/adminDashboard"
              element={<ProtectedRoute element={<AdminDashboard />} />}
            />
            <Route
              path="/adminManagement"
              element={<ProtectedRoute element={<AdminMangement />} />}
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
