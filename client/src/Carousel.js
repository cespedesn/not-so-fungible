import React from 'react'
import bb15 from './Carousel/bb15.png'
import dbb12 from './Carousel/dbb12.png'
import nn7 from './Carousel/nn7.png'
import ss14 from './Carousel/ss14.png'
import yc11 from './Carousel/yc11.png'


function Carousel() {
  return (
    <div className='carousel-parent'>
        <div className='carousel'>
            <img className= "card-far-left" src={bb15.png} alt="bb15.png" />
            <img className= "card-left" src={dbb12.png} alt="dbb12.png" />
            <img className= "card-highlight" src={yc11.png} alt="yc11.png" />
            <img className= "card-right" src={nn7.png} alt="nn7.png" />
            <img className= "card-far-right" src={ss14.png} alt="ss14.png" />
        </div>
    </div>
  )
}

export default Carousel