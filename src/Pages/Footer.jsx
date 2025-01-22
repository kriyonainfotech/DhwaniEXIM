import React from 'react';
import Logo from "../Images/Logo.png";
import Fssai from "../Images/fssai.png"
const Footer = () => {
  return (
    <>
      <footer className="bg-[#333] text-white py-5 px-5 flex flex-col md:flex-row" id='contact'>

      

        {/* Footer Column 1 */}
        <div className="footer-column p-4 mb-4 md:mb-0 md:w-1/4">
        
          <img src={Logo} alt="Logo" className="footer-img w-[100px] h-auto mb-2" />
          <p className="footer-text text-sm leading-6">
            DHAWANI EXIM PVT LTD, As an Indian exporter, We Offer a diverse range of high-quality products to meet your needs.
          </p>
          <div className="iconsocial mt-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-[#6cbf77]"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#" className="text-white hover:text-[#6cbf77]"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#" className="text-white hover:text-[#6cbf77]"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#" className="text-white hover:text-[#6cbf77]"><i className="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Column 2 */}
        <div className="footer-column p-4 mb-4 md:mb-0 md:w-1/4">
          <h3 className="text-lg mb-2">Main Pages</h3>
          <ul>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Home</a></li>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">About</a></li>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Products</a></li>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Contact Us</a></li>
          </ul>
        </div>

        {/* Footer Column 3 */}
        <div className="footer-column p-4 mb-4 md:mb-0 md:w-1/4">
          <h3 className="text-lg mb-2">Our Products</h3>
          <ul>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Peanuts</a></li>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Spices</a></li>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Cereals</a></li>
            <li><a href="#" className="text-white text-base hover:text-[#6cbf77]">Vegetables</a></li>
          </ul>
        </div>

        {/* Footer Column 4 */}
        <div className="footer-column p-4 mb-4 md:mb-0 md:w-1/4">
          <h3 className="text-lg mb-2">Contact Us</h3>
          <ul>
            <li className="text-white text-base">Location : ABC Complex Kapodara Surat</li>
            <li className="text-white text-base">Email: example@example.com</li>
            <li className="text-white text-base">Phone: 7069904307</li>
          </ul>
        </div>
      </footer>

      <div className="frights bg-[#333] text-[#7B8490] text-base text-center py-2">
        © 202 Dhawani Exim Pvt Ltd. All Right Reserved.
      </div>
    </>
  );
}

export default Footer;
