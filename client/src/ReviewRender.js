import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReviewList from './ReviewList'

function ReviewRender() {
const navigate = useNavigate()
const [reviewList, setReviewList] = useState([])
const [userEdit, setUserEdit] = useState([])
const [errors, setErrors] = useState(false)
// const [newReview, setNewReview] = useState({
//     review_title: "",
//     review_description: "",
//     rating: "",
//     collection_id: "",
//     user_id: currentUser.id
// })

useEffect(() => {
    fetch('/reviews')
    .then(res => {
        if(res.ok) {
            res.json().then((data) => {
                setReviewList(data)
                console.log(data)
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
    }).then( () => {
        const updatedReviews = reviewList.filter(review => review.id !== id)
        setReviewList(updatedReviews)
    })
}


//Update review
// function editReview(e) {
//     e.preventDefault()
//     fetch(`/reviews/${id}`, {
//         method: 'PATCH',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newReview)
//     }).then(() => {
//         const reviewEdit = userEdit.map((edit) => {
//             return (
//                 setUserEdit(reviewEdit)
//             )
//         })
//     })
//     navigate('/collectiontable')
// }


//Review map
const reviewsToDisplay = reviewList.map((review) => {
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
                // editReview={editReview}
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

