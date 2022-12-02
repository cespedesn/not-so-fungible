import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/fa';
import OutlineStar from './OutlineStar';

function StarRating() {
const [currentValue, setCurrentValue] = useState(0)
const [onHover, setOnHover] = useState(null)

    const starColors = {
        yellow: "#FFFF00",
        gray: "#808080"
    }
    const stars = Array(5).fill(0)

    const onClick = value => {
        setCurrentValue(value)
    }

    const onMouseOver = hover => {
        setOnHover(hover)
    };

    const onMouseLeave = () => {
        setOnHover(null)
    }

    const starsToDisplay = stars.map((star) => {
        return (
            <OutlineStar 
                key={index}
                size={24}
                onClick={() => onClick(index + 1)}
                onMouseOver={() => onMouseOver(index + 1)}
                onMouseLeave={onMouseLeave}
            />
        )
    })

  return (
    <div>StarRating</div>
  )
}

export default StarRating