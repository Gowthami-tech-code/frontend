import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import React from "react";
import Slick from "react-slick";

const Slider = Slick.default || Slick;

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400,
    
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        <div className="slide-card">
          <img src="/image1.jpeg" alt="Slide 1" />
        </div>

        <div className="slide-card">
          <img src="/image2.jpeg" alt="Slide 2" />
        </div>

        <div className="slide-card">
          <img src="/image3.jpeg" alt="Slide 3" />
        </div>

      </Slider>
    </div>
  );
}

export default Carousel;
