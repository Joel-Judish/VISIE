import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Components_final/finalimages/Group 4 3.png";
import BannerImage from "../Components_final/finalimages/Group_1.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
     <div className="home-container">
        <Navbar/>
         <div className= "home-banner-container">
           <div className="home-bannerImage-container">
                  <img src={BannerBackground} alt="" /> 
                  </div>
           <div className="home-text-section">
            
            <h1 className="primary-heading">
              Welcome to Visie!!
            </h1>
            <p  className='primary-text'>
              Unlock the digital world with Visie.Scan text,hear information,Explore
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight/>
            </button>
            </div>
            
            <div className="home-image-container">
               <img src={BannerImage} alt="" />
            </div>
         </div>
    </div>
  );
};

export default Home;