import React from "react";
import img6 from "./../images/img6.jpg";
import img7 from "./../images/img7.jpg";
import arrowRight from "./../images/icons/arrow-right.png";

import './../style/style.css'

const Part5 = () => {
  return (
    <div className="part5_body">
      <div className="part5_body2">
        <div className="heading">
          <span className="head">Your Favorites</span>
          <span className="magic">magic</span>
        </div>

        <div className="part1">
          <img src={img6} />
          <br />
          <span className="title">Get All The Basics Under $40</span>
          <br />
          <span className="explore">Explore Now</span>
          <img className="arrow" src={arrowRight} />
        </div>
        <div className="part2">
          <img src={img7} />
          <br />
          <span className="title">Trending On Instagram</span>
          <br />
          <span className="explore">Explore Now</span>
          <img className="arrow" src={arrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Part5;
