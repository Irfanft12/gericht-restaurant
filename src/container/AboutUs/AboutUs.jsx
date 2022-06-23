import React from 'react';

import { images } from "../../constants"

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay'>
      <img src={images.G} alt="letter g" />
    </div>
    <div className="app__aboutus-content">
      <div className='app__aboutus-content-aboutus'>
        <h2 className='headtext__cormorant'>About Us</h2>
        <img src={images.spoon} alt="spoon image" className='spoon__image' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content-knife-image'>
        <img src={images.knife} alt="knife image" />
      </div>
      <div className='app__aboutus-content-history'>
        <h2 className='headtext__cormorant'>Our History</h2>
        <img src={images.spoon} alt="spoon image" className='spoon__image' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
