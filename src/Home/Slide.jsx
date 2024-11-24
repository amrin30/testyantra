import React from 'react'
import Slider from "react-slick";
import Image11 from '../Image/banner1.png';
import Image12 from '../Image/banner2.png';
import Image13 from '../Image/banner3.png';
import StyleSlide from './Slide.module.css'
const Slide = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
      };
  return (
    <div className={StyleSlide.cont} >
       <Slider {...settings}>
      <div >
        <img src={Image11} alt={Image11}  className={StyleSlide.imge}/>
      </div>
      <div>
      <img src={Image12} alt={Image12} className={StyleSlide.imge}/>

      </div>
      <div>
      <img src={Image13} alt={Image13} className={StyleSlide.imge}/>

      </div>
      
    </Slider>
    </div>
  )
}

export default Slide
