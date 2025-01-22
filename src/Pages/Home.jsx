import React from 'react'
import Header from './Header'
import MainPic from "../Images/MainPic.jpeg"
import Footer from './Footer'
import Groundnut from "../Images/GroundNut.jpeg"
import Veges from "../Images/Veges.jpeg"
import GrowingProduct from './GrowingProduct'
import "../CSS/Home.css"
import Testinomial from './Testinomial'
import Front from './Front'
import Aboutus from './Aboutus'
import Four from './Four'
import Collage from './Collage'
import Whatsapp from '../Images/WhatsApp.svg'
import Certification from './Certification'

const Home = () => {
  return (
    <>
      <Header/>
      <Front/>
      <Aboutus/>
      <Four/>
      <Collage/>
      <GrowingProduct/>
      <Testinomial/>
      <Certification/>
      <Footer/>
      <a href="https://wa.me/9825098836" target="_blank" class="whatsapp-icon">
        <img src={Whatsapp} alt="WhatsApp"/>
    </a> 
    </>
  )
}

export default Home
