import React from 'react';
import AboutBackground from "../Components_final/finalimages/about-background-removebg-preview.png"
import AboutBackgroundImage from "../Components_final/finalimages/think_4-removebg-preview.png"
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return( 
  <div className="about-section-container">
    <div className='about-background-image-container'>
           <img src={AboutBackground} alt="" />
    </div>
    <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt="" />    
    </div>
    <div className='about-section-text-container'>
      <p className='primary-subheading'>About</p>
      <h1 className='primary-heading'>
        What is it intended to??
      </h1>
      <p className='primary-text'>

A revolutionary website dedicated ti empowering the blind community by providing innovative tools for accessing digital content effortlessly.
      </p>
      <p className='primary-text'>
      Our mission is to breakdown barriers to information and enhance the independence and inclusion of visually impaired individuals worldwide.

      </p>
      <div className='about-buttons-container'>
        <button className='secondary-button'>Learn More</button>
      

      </div>

    </div>

  </div>
  );
};

export default About;