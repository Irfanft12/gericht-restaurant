import React from 'react'

import { SubHeading } from "../../components/"
import { images } from '../../constants';

import './Header.css'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__header-info-wrapper'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to Fine dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
      <a href="#!" className='custom__button'>Explore Menu</a>
    </div>
    <div className='app__header-img-wrapper'>
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header
