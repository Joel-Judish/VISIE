import React from 'react';
import PickMeals from "../Components_final/finalimages/Mask group1.jpg"
import ChooseMeals from "../Components_final/finalimages/Mask group.jpg"
import DeliveryMeals from "../Components_final/finalimages/Replay.png"


const Work = () => {
  const workInfoData = [
    {
      image:PickMeals,
      title:"Scan & Read Aloud",
      text:"This turns an printed text into spoken words.Just scan it with your camera and listen!"
    },
    {
      image:ChooseMeals,
      title:"Upload & Convert",
      text:"Let's you upload images with text for conversion to speech,making digital content like documents and articles accessible"
    },
    {
      image:DeliveryMeals,
      title:"Repeat Playback",
      text:"Let's you replay the narration for better understanding.Listen as many times as you need!"
    },
  ];
  return (
     <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Work</h1>
        <p className='primary-text'>
        Features
        </p>
    </div>
    <div className='work-section-bottom'>
      {
        workInfoData.map((data) =>(
          <div className='work-section-info'>
               <div className='info-boxes-img-container'>
                 <img src={data.image} alt="" />
               </div>
               <h2>{data.title}</h2>
               <p> {data.text}</p>
          </div>
          
        ) )
      }

    </div>
    </div>
  );
};
export default Work;
