import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import MainPic from "../Images/MainPic.jpeg";
import Veges from "../Images/Veges.jpeg";
import GroundNut from "../Images/GroundNut.jpeg";
import Cereals from "../Images/Cereals.jpg";
import Testinomial from "./Testinomial";
import GrowingProduct from "./GrowingProduct";
import Whatsapp from "../Images/WhatsApp.svg"
import Aboutus from './Aboutus'
const App = () => {
  return (
    <>
      <Header />

      {/* Product 1 */}
      <div className="flex flex-col md:flex-row z-0 items-center justify-between px-5 py-10 max-w-7xl mx-auto">
        <div className="image-container w-full md:w-1/2">
          <img src={MainPic} alt="Description of the image" className="w-full h-auto rounded-lg" />
        </div>

        <div className="description w-full md:w-1/2 pr-5 mt-5 ml-5 md:mt-0">
          <p className="text-justify text-gray-800 leading-7">
          <b>1. Spices</b><br /><p className="text-['20px']">Spices are nature's vibrant gift, adding not just flavor but also a dash of culture and history to our meals. From the warmth of cinnamon to the heat of chili, they transform simple dishes into culinary masterpieces. Rooted in ancient trade, spices have journeyed across the world, carrying with them stories of exploration and innovation. Whether grounding the soul of a curry or enhancing a delicate dessert, spices are the silent heroes of every kitchen, preserving the essence of tradition while inspiring new flavors.
          </p></p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 py-10 max-w-7xl mx-auto">
        <div className="image-container w-full md:w-1/2">
          <img src={Veges} alt="Description of the image" className="w-full h-auto rounded-lg" />
        </div>

        <div className="description w-full md:w-1/2 pr-5 ml-5 mt-5 md:mt-0">
          <p className="text-justify text-gray-800 leading-7">
            <b>2. Vegetables</b><br />Indian fresh vegetables are a vibrant and essential part of the country's diverse cuisine, offering a spectrum of flavors, colors, and textures. From the earthy sweetness of pumpkin to the crisp bite of bitter gourd, each vegetable tells a unique story of the region it comes from. In Indian kitchens, these vegetables are not just ingredients, but symbols of tradition, health, and seasonal harmony. Whether they are sautéed, spiced, or blended into a curry, Indian vegetables bring a freshness and authenticity that is hard to replicate, adding both nourishment and depth to every meal.
          </p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 py-10 max-w-7xl mx-auto">
        <div className="image-container w-full md:w-1/2">
          <img src={GroundNut} alt="Description of the image" className="w-full h-auto rounded-lg" />
        </div>

        <div className="description w-full md:w-1/2 pr-5 ml-5 mt-5 md:mt-0">
          <p className="text-justify text-gray-800 leading-7">
          <b>3. Peanuts</b><br />Indian fresh peanuts are a crunchy delight, rich in flavor and packed with nutrition. Harvested mainly during the winter season, these peanuts are enjoyed raw, boiled, or roasted, offering a natural, earthy taste. They are a staple snack across India, often seasoned with spices or mixed into traditional dishes for added texture. Fresh peanuts are also a key ingredient in chutneys, curries, and sweets, reflecting their versatility in Indian cuisine. Beyond their taste, they are a powerhouse of protein and healthy fats, making them both delicious and nourishing.
          </p>
        </div>
      </div>

      {/* Product 4 */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 py-10 max-w-7xl mx-auto">
        <div className="image-container w-full md:w-1/2">
          <img src={Cereals} alt="Description of the image" className="w-full h-auto rounded-lg" />
        </div>

        <div className="description w-full md:w-1/2 ml-5 pr-5 mt-5 md:mt-0">
          <p className="text-justify text-gray-800 leading-7">
          <b>4. Cereals</b><br />Indian fresh cereals are the backbone of the country’s diverse culinary heritage, offering rich nutrition and sustaining millions. Staples like rice, wheat, millet (jowar, bajra, ragi), and barley are harvested fresh from fertile fields, reflecting India’s agricultural abundance. These cereals are transformed into soft rotis, fluffy idlis, fragrant biryanis, and wholesome porridges, catering to every region's unique taste. Packed with fiber, vitamins, and energy, fresh cereals not only nourish the body but also uphold centuries-old farming traditions and cultural practices across India.
          </p>
        </div>
      </div>
      <a href="https://wa.me/7069904307" target="_blank" class="whatsapp-icon">
        <img src={Whatsapp} alt="WhatsApp"/>
    </a> 
    
      <GrowingProduct />
      <Aboutus/>  
      <Testinomial />
      <Footer />
    </>
  );
};

export default App;
