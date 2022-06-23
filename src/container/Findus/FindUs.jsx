import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__findUs app__wrapper app__bg section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h2 className='headtext__cormorant' style={{marginBottom: "3rem"}}>Find Us</h2>
      <p className='p__opensans' style={{marginBottom: "1rem"}}>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <div className='app__findUs-timing' style={{marginBottom: "3rem"}}>
        <p className='p__cormorant' style={{color: "#DCCA87",marginBottom: "1rem"}}>Opening Hours</p>
        <p className='p__opensans' style={{marginBottom: ".5rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button">Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find us image" />
    </div>
  </div>
);

export default FindUs;
