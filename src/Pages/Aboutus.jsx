import React from 'react';
import MainPic from "../Images/MainPic.jpeg";
import { FaGreaterThan } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
      {/* Title */}
      <center>
        <p className="text-3xl md:text-4xl font-orbitron text-blue-900 underline decoration-2 mb-8 font-['Orbitron']" id='about'>
          About Us
        </p>
      </center>

      {/* About Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:h-[500px] px-4 md:px-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={MainPic}
            alt="About Dhwani EXIM"
            className="h-[300px] md:h-[500px] w-full object-cover rounded-2xl p-4"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:h-[500px] flex flex-col justify-center px-4">
          <p className="text-3xl md:text-5xl font-bold mb-4">Welcome to Dhwani EXIM</p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          "At DHWANI EXIM PVT LTD, we take pride in being a leading Indian exporter, offering a diverse and premium range of products to meet your specific requirements. Our product selection includes top-quality peanuts, meticulously crafted dehydrated garlic and onion, farm-fresh vegetables and fruits, and a wide array of robust spices and cereals."          </p>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Keep Support the Dhawani EXIM......
          </p>

          {/* Button */}
          <a href='/product' className="flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-full text-sm md:text-base hover:bg-green-700 transition">
            Learn More
            <FaGreaterThan className="ml-2 text-xs opacity-80" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
