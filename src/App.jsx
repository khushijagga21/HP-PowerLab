import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DriverDelivery from './Page/DriverDeliver';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<Ordering />} />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<Tips />} /> 

        <Route path="/farmerOrder" element={<FarmerOrder />} /> 
        <Route path="/farmerProfile" element={<FarmerProfile/>} /> 
        <Route path="/farmerCommunity" element={<FarmerCommunity />} />   {/* Ye mai bana dunga */}
        
        <Route path="/driverDeliver" element={<DriverDelivery/>} />   
        <Route path="/driverProfile" element={<Tips />} />   
  
        <Route path="/adminDashboard" element={<AdminDashboard />} />   
        <Route path="/adminManagement" element={<AdminMangement />} />   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;