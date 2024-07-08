import React from 'react';
//import './aboutstyle.js'; // Assuming your CSS is applicable globally or import specific CSS for this component

const About = () => {
  return (
    <div>
      <div className="heading">
        <header>
          <h5>About BrailGo</h5>
          <p>Enabling Accessibility for the Blind Community</p>
        </header>
      </div>
      <div className="container">
        <div className="box3">
          <h3>Welcome to BrailGo</h3>
          <p>A revolutionary website dedicated to empowering the blind community by providing innovative tools for accessing digital content effortlessly. Our mission is to break down barriers to information and enhance the independence and inclusion of visually impaired individuals worldwide</p>
        </div>
      </div>
      <div className="heading">
        <h1>Features</h1>
      </div>
      <div className="container">
        {/* Repeat for each feature */}
        <div className="box">
          <h2>01</h2>
          <h3>Scan and Read Aloud</h3>
          <p>With BrailGo, users can easily scan printed text using their device's camera. Our advanced OCR (Optical Character Recognition) technology quickly converts the text into digital format, enabling users to listen to the content being read aloud in real-time</p>
        </div>
        {/* Add other features here */}
      </div>
      <div className="heading">
        <h4>How It Works</h4>
      </div>
      <div className="container">
        {/* Repeat for each step */}
        <div className="box">
          <h2>01</h2>
          <h3>Simply navigate to the BrailGo website on your device.</h3>
          <p>Choose between the "Scan" option to use your device's camera or the "Upload" option to select an image file from your device.</p>
        </div>
        {/* Add other steps here */}
      </div>
    </div>
  );
};

export default About;