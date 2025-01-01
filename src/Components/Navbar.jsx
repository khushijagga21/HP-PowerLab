import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation


const Navbar = () => {
    const location = useLocation(); // Get the current location

    return (
        <nav className="bg-blue-900 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/path/to/logo.png" // Replace with the actual logo path
                            alt="HP Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-xl font-bold">HP</span>
                    </div>
                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#business"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Business Opportunities
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/tips"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Tips
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#lpg"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                LPG
                            </a>
                        </li>
                        <li>
                            <a
                                href="#lubes"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Lubes
                            </a>
                        </li>
                        <li>
                            <a
                                href="#direct"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Direct
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/order"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Place Order
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#gst"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                GST Helpdesk
                            </a>
                        </li>
                        <li>
                            <a
                                href="#privacy"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                    {/* Conditional Buttons */}
                    {location.pathname === '/order' && (
                        <div className="hidden md:flex space-x-4">
                            <button className="bg-blue-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                                Cart
                            </button>
                            <button className="bg-blue-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                                Wishlist
                            </button>
                        </div>
                    )}
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-yellow-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
