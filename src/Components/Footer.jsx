import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base leading-relaxed">
          "To be a World Class Energy Company known for caring and delighting the customers with high-quality products and innovative services across domestic and international markets with aggressive growth and delivering superior financial performance..."
        </p>
        <div className="mt-4">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} World Class Energy Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
