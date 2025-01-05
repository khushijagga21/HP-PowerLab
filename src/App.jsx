import React, { useState, useEffect } from 'react';
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
import { supabase } from './utils/supabaseClient'; // Import Supabase client

// Fetch the logged-in user's role from Supabase
const fetchUserRole = async () => {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) throw userError;
    if (!user) return null;

    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (error) throw error;

    return data.role;
  } catch (error) {
    console.error('Error fetching user role:', error.message);
    return null;
  }
};

// Protected Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const [role, setRole] = useState(null); // State to store fetched role
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const getRole = async () => {
      const fetchedRole = await fetchUserRole();
      setRole(fetchedRole);
      setLoading(false);
    };
    getRole();
  }, []);

  if (loading) {
    // Show a loading indicator while fetching the role
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!role) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(role)) {
    // Redirect to home if the role is not authorized
    return <Navigate to="/home" />;
  }

  // Render the route if authorized
  return element;
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
              element={<ProtectedRoute element={<FarmerOrder />} allowedRoles={['Farmer']} />}
            />
            <Route
              path="/farmerProfile"
              element={<ProtectedRoute element={<FarmerProfile />} allowedRoles={['Farmer']} />}
            />
            <Route
              path="/farmerCommunity"
              element={<ProtectedRoute element={<FarmerCommunity />} allowedRoles={['Farmer']} />}
            />

            {/* Driver Routes */}
            <Route
              path="/driverDeliver"
              element={<ProtectedRoute element={<DriverDeliver />} allowedRoles={['Driver']} />}
            />

            {/* Admin Routes */}
            <Route
              path="/adminDashboard"
              element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={['Admin']} />}
            />
            <Route
              path="/adminManagement"
              element={<ProtectedRoute element={<AdminMangement />} allowedRoles={['Admin']} />}
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
