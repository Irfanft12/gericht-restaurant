import React from 'react';
import { SubHeading, MenuItem } from '../../components';

import { images, data } from "../../constants"

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h2 className='headtext__cormorant'>Today’s Special</h2>
    </div>
    <div className='app__specialMenu-menu-wrapper'>
      <div className='app__specialMenu-menu1'>
        <h3>Wine & Beer</h3>
        <div className='menu-item-wrapper'>
          {
            data.wines.map((wine, index) => (
              <MenuItem key={index}  title={wine.title} price={wine.price} tags={wine.tags} />
            ))
          }
        </div>
      </div>
      <div className='app__specialMenu-image'>
        <img src={images.menu} alt="menu image" />
      </div>
      <div className='app__specialMenu-menu2'>
      <h3>Cocktails</h3>
        <div className='menu-item-wrapper'>
          {
            data.cocktails.map((cocktail, index) => (
              <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))
          }
        </div>
      </div>
    </div>
    <div className='app__specialMenu-button'>
          <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
