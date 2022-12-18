import React from 'react'

import "./../style/style.css";


import instagram from './../images/icons/instagram.png'
import facebook from './../images/icons/facebook.png'
import twitter from './../images/icons/twitter.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className="fashion">Fashion</div>
        <div className='tagline'>Complete your style here</div>
        <div>
          <img src={facebook}/>
          <img src={instagram}/>
          <img src={twitter}/>
        </div>
      </div>
      <div>
        <div className="title">Company</div>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
          <li>Support</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <div className="title">Quick Link</div>
        <ul>
          <li>Share Location</li>
          <li>Orders Tracking</li>
          <li>Size Guide</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <div className="title">Legal</div>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer