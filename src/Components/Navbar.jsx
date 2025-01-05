import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient'; // Import Supabase client
import { Fuel, Menu } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fetch role from Supabase
    useEffect(() => {
        const fetchRole = async () => {
            try {
                const {
                    data: { user },
                    error: userError,
                } = await supabase.auth.getUser();

                if (userError) throw userError;

                if (!user) {
                    setRole(null);
                    return;
                }

                const { data, error } = await supabase
                    .from('users')
                    .select('role')
                    .eq('id', user.id)
                    .single();

                if (error) throw error;

                setRole(data.role);
            } catch (err) {
                console.error('Error fetching role:', err.message);
                setRole(null);
            }
        };

        fetchRole();
    }, []);

    // Logout Handler
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout Error:', error.message);
        } else {
            setRole(null);
            navigate('/login');
        }
    };

    // Links based on roles
    const links = {
        Farmer: [
            { to: '/farmerProfile', label: 'Farmer Profile' },
            { to: '/farmerOrder', label: 'Place Order' },
            { to: '/farmerCommunity', label: 'Community' },
            { to: '/tips', label: 'Tips' },
        ],
        Driver: [
            { to: '/driverDeliver', label: 'Delivery' },
            { to: '/tips', label: 'Tips' },
        ],
        Admin: [
            { to: '/adminDashboard', label: 'Dashboard' },
            { to: '/adminManagement', label: 'Management' },
        ],
        Guest: [
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
        ],
    };

    const currentLinks = role ? links[role] : links['Guest'];

    return (
        <nav className="bg-gradient-to-br from-blue-50 to-green-50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/small.png" // Replace with the actual logo path
                            alt="HP Logo"
                            className="h-12 w-12 rounded-full object-contain"
                        />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        {currentLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="hover:text-blue-600 text-gray-700 transition duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex space-x-3">
                        {role ? (
                            <button
                                onClick={handleLogout}
                                className="border border-gray-300 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition duration-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="border border-gray-300 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition duration-300"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-blue-600 transition duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="space-y-4 mt-4">
                            {currentLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className="block text-gray-800 hover:bg-blue-100 px-4 py-2 rounded transition duration-300"
                                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            {role && (
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left text-gray-800 hover:bg-red-100 px-4 py-2 rounded transition duration-300"
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
