import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
              <div className='menu-item'>
                <div className='menu-item-title'>
                  <h4>{title}</h4>
                  <span className='line'></span>
                  <span className='price'>{price}</span>
                </div>
                <div className='menu-item-info'>
                  <span>{tags}</span>
                </div>
              </div>
);

export default MenuItem;
