import React, { useState, useEffect } from 'react'
import { SliderImages } from './SliderImages';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";



function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderImages.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
   
  return (
    <div className='slider-div'>
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {SliderImages.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="slider-image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default Slider