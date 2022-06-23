import React from 'react';

import { FooterOverlay, Newsletter, } from '../../components';

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <footer className='app__footer app__bg'>
    {/* <FooterOverlay /> */}
    <Newsletter />
    <div className='footer-links'>
      <div className='footer-links-contact'>
        <h4 className='p__cormorant'>Contact Us</h4>
        <p className='p__opensans' style={{marginBottom: ".5rem"}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='footer-links-logo'>
        <img src={images.gericht} alt="logo" />
        <p className='p__opensans'>
          "The best way to find yourself is to lose yourself in the service of others.”
        </p>
        <img src={images.spoon} alt="spoon image" />
        <div className='social-icon'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='footer-links-work'>
        <h4 className='p__cormorant'>Working Hours</h4>
        <p className='p__opensans' style={{marginBottom: ".5rem"}}>
          Monday-Friday: <br />
          08:00 am -12:00 am
        </p>
        <p className='p__opensans' style={{marginBottom: ".5rem"}}>
          Saturday-Sunday: <br />
          07:00am -11:00 pm
        </p>
      </div>
    </div>
    <div className='p__opensans copyright'>
      2021 Gerícht. All Rights reserved.
    </div>
  </footer>
);

export default Footer;
