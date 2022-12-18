import React from "react";

import img1 from "./../images/img1.png";
import star from "./../images/icons/star.png";
import "./../style/style.css";


let funci = () => {
  let pos = `${Math.random() * (80 - 1) + 1}%`;
  return pos
};


const Part1 = () => {
  return (
    <div className="part1_body">
      <div className="text">
        <span className="bg"></span>
        <span className="mainText">
          <span className="explore">EXPLORE</span> <br /> THE MOST <br />{" "}
          <div className="unique">UNIQUE</div> <br /> STYLES
        </span>
      </div>
      <span className="shopnow">Shop Now</span>
      <img className="images" src={img1} />
      <img className="stars1" src={star} />
      <img className="stars2" src={star} />
      <img className="stars3" src={star} />
      <img className="stars4" src={star} />
      <img className="stars5" src={star} />
      <img className="stars6" src={star} />
      <img className="stars7" src={star} />
      <img className="stars8" src={star} />
    </div>
  );
};

export default Part1;
