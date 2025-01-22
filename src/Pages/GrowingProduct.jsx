import React from "react";
import MainPic from "../Images/MainPic.jpeg"
const GrowingProducts = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src={MainPic}
            alt="Spices and Ingredients"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-green-600 text-sm font-semibold uppercase">
            Fresh Products
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Growing Products
          </h2>
          <p className="text-gray-600 mt-4">
            "At DHWANI EXIM PVT LTD, we take pride in being a leading Indian
            exporter, offering a diverse and premium range of products to meet
            your specific requirements. Our product selection includes
            top-quality peanuts, meticulously crafted dehydrated garlic and
            onion, farm-fresh vegetables and fruits, and a wide array of robust
            spices and cereals."
          </p>
          <p className="text-gray-500 italic mt-4">
            This revised statement provides a more polished and descriptive
            overview of your company's offerings, emphasizing the quality and
            variety of products you provide.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-green-600 text-3xl"><i class="fa-solid fa-leaf" style={{color: '#2ec52b'}}></i></div>
              <p className="text-gray-800 font-bold text-lg mt-2">40+</p>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-green-600 text-3xl"><i class="fa-solid fa-users" style={{color: '#2ec52b'}}></i></div>
              <p className="text-gray-800 font-bold text-lg mt-2">1,000+</p>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-green-600 text-3xl"><i class="fa-solid fa-globe" style={{color: '#2ec52b'}}></i></div>
              <p className="text-gray-800 font-bold text-lg mt-2">15+</p>
              <p className="text-gray-500 text-sm">Countries Served</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-green-600 text-3xl"><i class="fa-solid fa-house"  style={{color: '#2ec52b'}}></i></div>
              <p className="text-gray-800 font-bold text-lg mt-2">100+</p>
              <p className="text-gray-500 text-sm">Consignments Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingProducts;