import React from 'react';
import { FaShieldAlt, FaMedal, FaGlobe, FaBuilding } from 'react-icons/fa';

const Four = () => {
  return (
    <div
      className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-around items-center flex-wrap py-10"
      id="learnmore"
    >
      {/* Trusted Card */}
      <div className="h-48 w-48 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform">
        <FaShieldAlt className="text-blue-800 text-6xl hover:text-blue-900 transition-colors" />
        <p className="text-xl font-semibold">Trusted</p>
        <p className="text-sm text-gray-500 text-center">Guardian Of Nature</p>
      </div>

      {/* Quality Card */}
      <div className="h-48 w-48 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform">
        <FaMedal className="text-blue-800 text-6xl hover:text-blue-900 transition-colors" />
        <p className="text-xl font-semibold">Quality</p>
        <p className="text-sm text-gray-500 text-center">Excellence, Our Standard</p>
      </div>

      {/* Growing Global Card */}
      <div className="h-48 w-48 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform">
        <FaGlobe className="text-blue-800 text-6xl hover:text-blue-900 transition-colors" />
        <p className="text-xl font-semibold">Growing Global</p>
        <p className="text-sm text-gray-500 text-center">Fixed Expert Ready</p>
      </div>

      {/* Established Card */}
      <div className="h-48 w-48 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform">
        <FaBuilding className="text-blue-800 text-6xl hover:text-blue-900 transition-colors" />
        <p className="text-xl font-semibold">Established</p>
        <p className="text-sm text-gray-500 text-center">Field Expert Ready</p>
      </div>
    </div>
  );
};

export default Four;
