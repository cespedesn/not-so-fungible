import React, { useState, useEffect } from 'react'
import { SliderImages } from './SliderImages';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function PSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderImages.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
      
    }
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
      
    }
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime)
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, [])
  
    useEffect(() => {
      if (autoScroll) {
        auto()
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide])
  return (
    <div className='p-slider-div'>
         <AiOutlineArrowLeft className="p-arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="p-arrow next" onClick={nextSlide} />
        {SliderImages.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "p-slide current" : "p-slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="p-slide" className="p-slider-image" />
                <div className="p-content">
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

export default PSlider