import React from 'react';
import { SubHeading } from '../../components';

import { data, images } from '../../constants';

import './Laurels.css';

const AwardCard = ({award: { title, subtitle, imgUrl }}) => (
  <div className="app__laurels-award-group">
    <div className='app__laurels-award-group-image'>
      <img src={imgUrl} alt="" />
    </div>
    <div className='app__laurels-award-group-content'>
      <h4>{title}</h4>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__laurels section__padding app__bg' id='awards'>
    <img src={images.logo} alt="" className='app__laurels-logo' />
    <div className='app__laurels-inner flex__center'>
      <div className='app__laurels-content'>
        <div className='app__laurels-title'>
          <SubHeading title="Awards & recognition" />
          <h2 className='headtext__cormorant'>Our Laurels</h2>
        </div>
        <div className='app__laurels-awards'>
            {
              data.awards.map((award, index) => (
                <AwardCard award={award} key={award.title} />
              ))
            }
          </div>
      </div>
      <div className='app__laurels-image'>
        <img src={images.laurels} alt="laurels image" />
      </div>
    </div>
  </div>
);

export default Laurels;
