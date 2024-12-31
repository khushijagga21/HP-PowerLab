import React from 'react';

const LoginBox = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
            {/* Hero Section */}
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
                        className="w-[35rem]  mx-auto "
                    />
                </div>
            </div>
            {/* Login Box */}
            <div className="bg-white shadow-md rounded-lg lg:w-1/3 w-11/12 p-6 lg:p-8 mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center text-blue-900">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="customer-id" className="block text-sm font-medium text-gray-700">
                            Customer ID
                        </label>
                        <input
                            type="text"
                            id="customer-id"
                            placeholder="Enter customer ID"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        />
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
