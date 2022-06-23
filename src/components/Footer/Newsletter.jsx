import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-title'>
      <SubHeading title="Newsletter" />
      <h2 className='headtext__cormorant'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    
    <div className='app__newsletter-form'>
      <form>
        <input type="text" placeholder='Email Address' />
        <button type='button' className='custom__button'>Subscribe</button>
      </form>
    </div>
  </div>
);

export default Newsletter;
