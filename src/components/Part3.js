import React from 'react'

import img2 from './../images/img2.jpg'
import img3 from './../images/img3.jpg'
import img4 from './../images/img4.jpg'
import arrowRight from './../images/icons/arrow-right.png'


import "./../style/style.css";


const Part3 = () => {
  return (
    <>
      <div className='part3_body'>
        <div className="heading">
          <span className="head">NEW ARRIVALS</span>
          <span className="magic">magic</span>
        </div>
        <div className="part1">
          <img src={img2} />
          <div className="title">Tees and Tops</div>
          <div className="explore">
            Explore Now
            <img src={arrowRight} />
          </div>
        </div>
        <div className="part2">
          <img src={img3} />
          <div className="title">Jackets and Blazers</div>
          <div className="explore">
            Explore Now
            <img src={arrowRight} />
          </div>
        </div>
        <div className="part3">
          <img src={img4} />
          <div className="title">Shoes</div>
          <div className="explore">
            Explore Now
            <img src={arrowRight} />
          </div>
        </div>
      </div>
    </>
  );}

export default Part3