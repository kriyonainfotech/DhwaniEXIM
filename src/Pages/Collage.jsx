import React from 'react';
import MainPic from "../Images/MainPic.jpeg";
import Veges from "../Images/Veges.jpeg";
import GroundNut from "../Images/GroundNut.jpeg";
import Cereals from "../Images/Cereals.jpg";
import Spic from "../Images/456.png"
const Collage = () => {
  return (
    <>
      <div id='Collage' className="py-10">
        <center><p className="text-gray-500 text-lg">Products</p></center>
        <center><h1 className="text-darkblue text-4xl">WE PROVIDE BEST PRODUCTS</h1></center><br /><br />

        <div className="flex flex-wrap md:flex-nowrap gap-6 mb-12">

          {/* Left Side (Large Image) */}
          <div className="w-full md:w-1/2 px-4">
            <div className="relative text-left">
              <img src={Spic} alt="Main" className="w-full h-96 rounded-xl object-cover"/>
              <div className="absolute bottom-72 left-8 text-white text-lg">DHWANI EXIM</div>
              <div className="absolute bottom-40 left-8 text-4xl text-white font-bold">WE DELIVER <br /> PREMIUM PRODUCTS</div>
              <div className="absolute bottom-24 left-8 text-white text-sm">
                At DHWANI EXIM, We take pride in providing the best agriculture products available in the market
              </div>
              <div className="absolute bottom-6 left-8 bg-whitesmoke px-4 py-2 rounded-full">
                <a href="/product" className="text-darkblue bg-white p-3 rounded-[25px]">View All Products</a>
              </div>
            </div>
          </div>

          {/* Right Side (4 Smaller Images in 2x2 Matrix Format) */}
          <div className="w-full md:w-1/2 px-4 grid grid-cols-2 gap-4">
            {/* First Image */}
            <div className="relative group hover:scale-105 transition-all">
              <img src={GroundNut} alt="Peanuts" className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-[#18243a] text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">Peanuts</div>
            </div>

            {/* Second Image */}
            <div className="relative group hover:scale-105 transition-all">
              <img src={MainPic} alt="Spices" className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">Spices</div>
            </div>

            {/* Third Image */}
            <div className="relative group hover:scale-105 transition-all">
              <img src={Veges} alt="Vegetables" className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-[#18243a] text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">Vegetables</div>
            </div>

            {/* Fourth Image */}
            <div className="relative group hover:scale-105 transition-all">
              <img src={Cereals} alt="Cereals" className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">Cereals</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collage;
