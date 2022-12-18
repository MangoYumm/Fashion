import React from "react";
import Part1 from "./../components/Part1.js"
import Part2 from "./../components/Part2.js"
import Part3 from "./../components/Part3.js"
import Part4 from "./../components/Part4.js"
import Part5 from "./../components/Part5.js"
import Part6 from "./../components/Part6.js"

import "./../style/style.css";


const Body = () => {
  return (
    <div className="body_main">
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Part6/>
    </div>
  );
};

export default Body;
