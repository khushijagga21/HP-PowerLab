import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient'; // Import the Supabase client
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast
import { Eye, EyeOff } from 'lucide-react'; // Import Lucide icons
import { useNavigate } from 'react-router-dom'; // Import React Router for navigation

const LoginBox = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(`Error: ${error.message}`);
    } else {
      toast.success('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 2000); // Redirect to home page after 2 seconds
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <Toaster /> {/* Add Toaster component */}
      <div className="flex items-center justify-center w-full lg:w-1/2 h-screen p-8 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Delivering <span className="text-yellow-400">Happiness</span>...
          </h1>
          <p className="text-lg font-light max-w-md mx-auto">
            Join us in making every moment special with high-quality energy solutions. Empowering lives, inspiring smiles.
          </p>
          <img
            src="https://sales.hpcl.co.in/bportal/hp_logo.png"
            alt="Hero Logo"
            className="w-[20rem] mx-auto"
          />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg lg:w-1/3 w-11/12 p-6 lg:p-8 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-900">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff className="text-gray-500" /> : <Eye className="text-gray-500" />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
