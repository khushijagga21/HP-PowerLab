import React from 'react';

export default function Ordering() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products and Services</h1>
        <p className="text-lg text-gray-600">On-demand Fuel Delivery Services and Fuel Storage Solutions.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Petrol Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <img
            src="https://th.bing.com/th/id/OIP.RNlfXkgSijBJx2zufMYULgAAAA?rs=1&pid=ImgDetMain"
            alt="Petrol"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Petrol</h2>
            <p className="text-gray-600 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a
              href="#"
              className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Diesel Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <img
            src="https://thumbs.dreamstime.com/b/historic-green-yellow-fuel-dispenser-diesel-petrol-german-text-blasenfrei-zapfen-engl-refuel-bubbles-historic-133050492.jpg"
            alt="Diesel"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Diesel</h2>
            <p className="text-gray-600 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a
              href="#"
              className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* LPG Card */}
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <img
            src="https://cdn2.adrianflux.co.uk/wp-fluxposure/uploads/2022/08/lpg-car-nozzle.jpeg"
            alt="LPG"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">LPG</h2>
            <p className="text-gray-600 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a
              href="#"
              className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
