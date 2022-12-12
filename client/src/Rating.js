import React from 'react'
import { FaStar } from 'react-icons/fa'


function Rating({rating}) {
    //Reverse engineered my star logic in CollectionReview
    //Since I am just looking for value, I did not need anything other than the map,
    //rating state, and the star.
    
  return (
    <div>
        {[...Array(rating)].map((i) => {
                    return(
                        <label>
                            <FaStar 
                                className='star'
                                size={20}
                                color= "#ffc107"
                            />
                        </label>
                    ) 
        })}
    </div>
  )
}

export default Rating