import React, { useState, useEffect } from 'react'
import ReviewList from './ReviewList'

function ReviewRender() {
const [reviewList, setReviewList] = useState([])
const [errors, setErrors] = useState(false)

useEffect(() => {
    fetch('/reviews')
    .then(res => {
        if(res.ok) {
            res.json().then((data) => {
                setReviewList(data)
            })
        } else {
            res.json().then(data => setErrors(data.errors))
        }
    })
}, [])

  //Delete review
  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
        method: 'DELETE'
    })
    console.log(id)
}

//Review map
const reviewsToDisplay = reviewList.map((review) => {
    return (
            <ReviewList 
                key={review.id}
                user={review.user.user_name}
                title={review.review_title}
                description={review.review_description}
                rating={review.review_rating}
                handleDelete={handleDelete}
            />
    )
})


  return (
    <div className='reviewlist-div' >
        {reviewsToDisplay}
    </div>
  )
}

export default ReviewRender

// function editReview(e) {
//     e.preventDefault()
//     fetch(`/reviews/${id}`, {
//         method: 'PATCH',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newReview)
//     })
//     navigate('/collectiontable')
// }