import React from "react";

import img5 from "./../images/img5.png";

import "./../style/style.css";

const Part4 = () => {
  return (
    <div className="part4_body">
      <div className="bg"></div>
      <img className="image" src={img5} />
      <div className="text">
        <div className="heading">
          DON'T MISS OUT <br /> ON EXCITING <br /> OFFERS !!!
        </div>
        <div className="heading2">
          Spend minimum of $100 and get 10% off right away
        </div>
        <div className="heading3">Terms and Conditions Apply</div>
        <div className="btn">Shop Now</div>
      </div>
    </div>
  );
};

export default Part4;
