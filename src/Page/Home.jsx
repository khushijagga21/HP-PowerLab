import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { ArrowRight, Droplet, Timer, Wallet } from 'lucide-react';
import { Car, Factory, Truck } from 'lucide-react';


const services = [
  {
    icon: Car,
    title: "Personal Vehicles",
    description: "Convenient fuel delivery for your car at home or work"
  },
  {
    icon: Truck,
    title: "Fleet Services",
    description: "Bulk fuel delivery for commercial vehicle fleets"
  },
  {
    icon: Factory,
    title: "Industrial Supply",
    description: "Regular fuel supply for industrial equipment and generators"
  },
  {
    icon: Droplet,
    title: "Emergency Delivery",
    description: "24/7 emergency fuel delivery when you need it most"
  }
];

const steps = [
  {
    title: "Select Your Fuel",
    description: "Choose from our range of high-quality fuels"
  },
  {
    title: "Schedule Delivery",
    description: "Pick a convenient time slot for delivery"
  },
  {
    title: "Track Real-time",
    description: "Monitor your delivery status live"
  },
  {
    title: "Secure Payment",
    description: "Pay securely after successful delivery"
  }
];

const LandingPage = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50" />
        <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Fuel Delivery at Your
                <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text"> Doorstep</span>
              </h1>
              <p className="text-2xl text-gray-600 mb-8">
                Skip the gas station queues. Get fuel delivered to your location, whenever you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  type="submit"
                  class="flex justify-center gap-2 items-center  shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-blue-500 to-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Order Now
                  <svg
                    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>

                <button className="bg-white shadow-xl font-bold px-6 py-3 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full" variant="outline">
                  View Pricing
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Timer, text: "Fast Delivery" },
                  { icon: Wallet, text: "Best Prices" },
                  { icon: Droplet, text: "Premium Quality" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 px-3 py-5 rounded-xl bg-gradient-to-r from-blue-300 to-green-300">
                    <div className="">
                      <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-3xl transform rotate-3" />
              <img
                src="src/assets/truck.jpeg"
                alt="Fuel Delivery"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Choose from our range of fuel delivery services tailored to your needs
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-[3px] rounded-2xl bg-gradient-to-r from-blue-300 to-green-300 hover:shadow-xl transition-shadow"
              >
                <div className="bg-white h-full rounded-2xl p-6">
                  <div className="text-center">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-full p-4 inline-block mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    {/* Description */}
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
              Get your fuel delivered in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6  left-[60%] w-full h-1 bg-gradient-to-r from-blue-300 to-green-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust us for their fuel needs
            </p>
            <div className="flex justify-center">
              <button size="lg" variant="secondary" className="bg-white flex px-3 py-3 rounded-xl text-blue-600 hover:bg-gray-100">
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
