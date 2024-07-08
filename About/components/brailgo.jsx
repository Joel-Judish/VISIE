import React from 'react';
//import './style.css'; // Import CSS file
import './BrailGoStyles';


function BrailGo() {
  return (
    <div>
      <header>
      
      <h5>About Visie</h5>
        <p>Enabling Accessibility for the Blind Community</p>
      </header>
      <div className="container" id="mainabout">
        <div className="box3">
          
          <h3>Welcome to Visie</h3>
          <p>A revolutionary website dedicated to empowering the blind community by providing innovative tools for accessing digital content effortlessly. Our mission is to break down barriers to information and enhance the independence and inclusion of visually impaired individuals worldwide</p>
        </div>
      </div>
      <h1 className='feature-title'>Features</h1>
      <div className="container">
        <FeatureBox number="01" title="Scan and Read Aloud" description="With BrailGo, users can easily scan printed text using their device's camera. Our advanced OCR (Optical Character Recognition) technology quickly converts the text into digital format, enabling users to listen to the content being read aloud in real-time" />
        <FeatureBox number="02" title="Upload and Convert" description="In addition to scanning, users can upload image files containing text directly to the website. BrailGo promptly processes the images, extracting the text for seamless conversion into audio format. This feature allows users to access a wide range of digital content, including documents, articles, and more" />
        <FeatureBox number="03" title="Repeat Playback" description="We understand the importance of comprehending content thoroughly. That's why BrailGo offers the option to replay the read-aloud feature as many times as needed. Users can listen to the content repeatedly, ensuring complete understanding and retention" />
        <FeatureBox1 number="04" title="Customization" description="BrailGo prioritizes user comfort and convenience. Our website allows users to customize the reading experience according to their preferences. Adjust the playback speed, choose from different voice options, and control other settings to tailor the experience to individual needs" />
        <FeatureBox2 number="05" title="Accessibility" description="Accessibility is at the core of BrailGo's design. Our website is designed with accessibility features in mind, ensuring compatibility with screen readers and other assistive technologies. We are committed to providing an inclusive platform that caters to the diverse needs of our users" />
      </div>
      <h2 className='feature-title'>How It Works</h2>
      <div className="container">
        <HowItWorksBox number="01" title="Simply navigate to the BrailGo website on your device." description="Choose between the &quot;Scan&quot; option to use your device's camera or the &quot;Upload&quot; option to select an image file from your device." />
        <HowItWorksBox number="02" title="Wait for the text to be processed and converted into audio format." description="Enjoy listening to the content being read aloud, with the option to replay as needed." />
        <HowItWorksBox number="03" title="Customize the reading experience according to your preferences." description="Explore and access a wide range of digital content effortlessly." />
      </div>
    </div>
  );
}

function FeatureBox({ number, title, description }) {
  return (
    <div className="box">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeatureBox1({ number, title, description }) {
  return (
    <div className="box1">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeatureBox2({ number, title, description }) {
  return (
    <div className="box2">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HowItWorksBox({ number, title, description }) {
  return (
    <div className="box">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BrailGo;
