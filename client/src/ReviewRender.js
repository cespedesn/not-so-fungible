import React, { useState, useEffect } from 'react'
import ReviewList from './ReviewList'

function ReviewRender() {
const [reviews, setReviews] = useState([])

useEffect(() => {
    fetch('/reviews')
    .then(res => {
        if(res.ok) {
            res.json().then((data) => {
                setReviews(data)
                console.log(data)
            })
        } else {
            res.json().then(data => alert(data.errors))
        }
    })
}, [])


//Delete review
  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
        method: 'DELETE'
    }).then( () => {
        const updatedReviews = reviews.filter(review => review.id !== id)
        setReviews(updatedReviews)
    })
}


//Review map
const reviewsToDisplay = reviews.map((review) => {
    return (
            <ReviewList 
                key={review.id}
                review={review}
                user={review.user.user_name}
                title={review.review_title}
                description={review.review_description}
                rating={review.review_rating}
                id={review.id}
                handleDelete={handleDelete}
                reviews={reviews}
                setReviews={setReviews}
            />
    )
})


  return (
    <div className='reviewlist-div' >
        <div className='reviews-header'><strong>Reviews</strong></div>
            {reviewsToDisplay}
    </div>
  )
}

export default ReviewRender

