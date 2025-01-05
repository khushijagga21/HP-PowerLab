import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { toast, Toaster } from 'react-hot-toast';
import {  ArrowRight } from 'lucide-react';

const FarmerOrder = () => {

  const fuelOptions = [
    { value: 'Petrol', price: 80 },  // Example price for Petrol
    { value: 'Diesel', price: 75 },  // Example price for Diesel
    { value: 'CNG', price: 55 },     // Example price for CNG
    { value: 'LPG', price: 50 },     // Example price for LPG
  ];
  const [formData, setFormData] = useState({
    name: '',
    fuelType: 'Petrol',
    quantity: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the logged-in user's name
    const fetchUserName = async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;

        const { data, error } = await supabase
          .from('users')
          .select('name')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        setFormData((prev) => ({ ...prev, name: data.name }));
      } catch (err) {
        console.error('Error fetching user name:', err.message);
        setMessage('Failed to fetch user name. Please refresh the page and try again.');
      }
    };

    fetchUserName();
  }, []);

  const detectCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setFormData((prev) => ({
          ...prev,
          address: `Lat: ${lat}, Lng: ${lng}`,
        }));
      },
      () => {
        alert('Unable to retrieve your location.');
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('fuel_order').insert({
        farmer_name: formData.name,
        fuel_type: formData.fuelType,
        quantity: parseFloat(formData.quantity),
        address: formData.address,
        status: 'Pending',
        created_at: new Date(),
      });

      if (error) throw error;

      toast.success('Order placed successfully!'); // Success toast
      setFormData({ name: formData.name, fuelType: 'Petrol', quantity: '', address: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to place the order. Please try again.'); // Error toast
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">Place Your Fuel Order</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6 border border-gray-200 space-y-6">
        <Toaster />
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fuelType" className="block text-gray-700 font-medium mb-2">
            Fuel Type
          </label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {fuelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value} - ₹{option.price} per liter
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
            Quantity (in liters/kg)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            step="0.1"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter quantity"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Delivery Address
          </label>
          <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 mb-2">
            <button
              type="button"
              onClick={detectCurrentLocation}
              className="w-full lg:w-1/3 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Use Current Location
            </button>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full lg:w-2/3 p-3 border border-gray-300 rounded-lg mt-2 lg:mt-0"
              placeholder="Enter your delivery address"
            />
          </div>
        </div>

        {/* <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 text-white font-medium rounded-lg transition duration-200 ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button> */}

        <button
          class="bg-gray-100 border text-center w-full rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="submit"
          disabled={loading}
        >
          <div
            class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[99%] z-10 duration-500"
          >
            <ArrowRight/>
          </div>
          <p class="translate-x-2">{loading ? 'Placing Order...' : 'Place Order'}</p>
        </button>
        
      </form>
    </div>
  );
};

export default FarmerOrder;
