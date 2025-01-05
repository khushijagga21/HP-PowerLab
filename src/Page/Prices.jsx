import React from "react";

const fuelData = {
  date: "2025-01-05",
  location: "Mumbai, India",
  fuel_prices: [
    { type: "Petrol", price_per_liter: 102.5, currency: "INR" },
    { type: "Diesel", price_per_liter: 89.7, currency: "INR" },
    { type: "CNG", price_per_kg: 75.8, currency: "INR" },
    { type: "LPG", price_per_kg: 67.3, currency: "INR" },
  ],
};

const FuelPrices = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 px-32 mx-auto py-10 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Fuel Prices
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <div className="mb-4">
          <p className="text-gray-600 mb-2 text-lg">
            <strong className="font-medium">Location:</strong> {fuelData.location}
          </p>
          <p className="text-gray-600 text-lg">
            <strong className="font-medium">Date:</strong> {fuelData.date}
          </p>
        </div>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-left text-lg">
                Fuel Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-lg">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {fuelData.fuel_prices.map((fuel, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-lg">
                  {fuel.type}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-lg">
                  {fuel.currency}{" "}
                  {fuel.price_per_liter || fuel.price_per_kg} per{" "}
                  {fuel.price_per_liter ? "liter" : "kg"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FuelPrices;
