import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-900 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="text-xl font-bold">HP</div>
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                About Us
                            </a>
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
                            <a
                                href="#retail"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Retail
                            </a>
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
                            <a
                                href="#aviation"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Aviation
                            </a>
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
