import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__chef app__bg section__padding flex__center'>
    <div className='app__chef-image'>
      <img src={images.chef} alt="chef image" />
    </div>
    <div className='app__chef-content'>
      <SubHeading title="Chef’s Word" />
      <h2 className='headtext__cormorant'>What we believe in</h2>
      <p className='p__opensans'>
        <img src={images.quote} alt="quote icon" style={{width: "30px", marginRight: "5px"}} />
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      <div className='about-chef'>
        <h3>Kevin Luo</h3>
        <p className='p__opensans'>Chef & Founder</p>
      </div>
      <img src={images.sign} alt="sign image" style={{width: "100px"}} />
    </div>
  </div>
);

export default Chef;
