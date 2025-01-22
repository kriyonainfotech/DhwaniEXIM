import React from 'react';
import MainPic from "../Images/MainPic.jpeg";
import { FaGreaterThan } from "react-icons/fa";

const Front = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[500px] p-6 md:p-0">
        
        {/* Hero Text */}
        <div className="text-center md:text-left md:ml-10">
          <p className="text-4xl md:text-6xl text-gray-700 font-bold mt-4">
            Best Provider <br /> of Quality Foods
          </p>

          <p className="text-lg md:text-xl text-gray-700 mt-3">
            DHWANI EXIM PVT LTD
          </p>

          <p className="text-base md:text-lg text-gray-700 mt-3 leading-6">
            Your Source For Diverse <br /> High-Quality Indian Agriculture Products
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center mt-5 space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="flex items-center text-gray-700 hover:text-green-600 transition">
              Connect Us <FaGreaterThan className="ml-2 text-sm" />
            </a>

            <a href="#learnmore" className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
          <img
            src={MainPic}
            alt="Spices Image"
            className="w-60 h-60 md:w-[500px] md:h-[500px] object-cover rounded-full shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Front;
