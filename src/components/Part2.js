import React from "react";
import cartier from "./../images/logos/cartier.png";
import chanel from "./../images/logos/chanel.png";
import gucci from "./../images/logos/gucci.png";
import hermes from "./../images/logos/hermes.png";
import hm from "./../images/logos/hm.png";
import lulu from "./../images/logos/lulu.png";
import lv from "./../images/logos/lv.png";
import moncler from "./../images/logos/moncler.png";
import nike from "./../images/logos/nike.png";
import zalando from "./../images/logos/zalando.png";
import zara from "./../images/logos/zara.png";

import './../style/style.css'

const Part2 = () => {
  return (
    <div className="part2_body">
      <div className="bahdy1">
        <img src={cartier} />
        <img style={{ height: "2rem" }} src={hermes} />
        <img src={hm} />
        <img style={{ height: "2rem" }} src={zalando} />
        <img src={nike} />
      </div>
      <div className="bahdy2">
        <img style={{ height: "2rem" }} src={gucci} />
        <img src={moncler} />
        <img src={lulu} />
        <img src={chanel} />
        <img src={lv} />
        <img style={{ height: "2rem" }} src={zara} />
      </div>
    </div>
  );
};

export default Part2;
