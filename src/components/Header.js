import React from 'react'
import logo from "./../images/icons/logo.png"

import './../style/style.css'

const Header = () => {
  return (
    <div className='header_main'>
      <div className='header_head'>
        <div></div>
        <div className="logo">
          <img src={logo} />
          <span>Fashion</span>
        </div>
        <div></div>
        <div className="click">Catalogue</div>
        <div className="click">Fashion</div>
        <div className="click">Favourite</div>
        <div className='click'>Lifestyle</div>
        <div className="signup click">Sign Up</div>
        <div></div>
      </div>
    </div>
  );
}

export default Header