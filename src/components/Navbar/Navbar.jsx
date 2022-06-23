import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuList = (
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <div className="app__navbar-desktop-menu">{menuList}</div>
      <div className="app__navbar-login desktop-app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <span></span>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#ffffff"
          fontSize={27}
          onClick={() => {
            setMobileMenu(true);
          }}
        />
        {mobileMenu && (
          <div className="app__navbar-mobile-menu">
            <MdOutlineRestaurantMenu fontSize={27} className="app__navbar-mobile-menu-close" onClick={() => {setMobileMenu(false)}} />
            {menuList}
            <div className="app__navbar-login">
              <a href="#login" className="p__opensans">
                Login / Register
              </a>
              <a href="/" className="p__opensans">
                Book Table
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
