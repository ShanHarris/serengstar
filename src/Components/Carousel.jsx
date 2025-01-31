import React, { useState } from "react";
import './Carousel.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Carousel = ({ carouselData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="arrow left" onClick={goToPreviousSlide}>
        <ArrowBackIcon />
      </div>
      <div className="content">
        <img src={carouselData[activeIndex].src} alt={carouselData[activeIndex].alt} />
        <div className="caption">
          <h2>{carouselData[activeIndex].title}</h2>
          <span>{carouselData[activeIndex].description}</span>
        </div>
      </div>
      <div className="arrow right" onClick={goToNextSlide}>
      <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default Carousel;