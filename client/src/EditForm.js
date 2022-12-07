import React, { useState, useEffect } from 'react'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function EditForm({currentUser, review, setShowEdit, reviews, setReviews}) {
    const navigate = useNavigate()
    //for useEffect
    const [collections, setCollections] = useState([])
    const [rating, setRating] = useState(false)
    const [hover, setHover] = useState(false)
    //since review was passed as a prop just plug in the keys 
    const [newReview, setNewReview] = useState({
        review_title: review.review_title,
        review_description: review.review_description,
        rating: review.review_rating,
        collection_id: review.collection_id,
        user_id: currentUser.id,
        id: review.id
    })



//UseEffect for getting collection from options
useEffect(() => {
    fetch('/collections')
    .then(res => {
        if(res.ok) {
            res.json().then(setCollections)
        }
    })
}, [])
    
//Handle Change on character inputs
const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value})
}
//Drop down for collection options
const handleDropDown = (e) => {
    console.log(e.target.value)
    setNewReview({...newReview, collection_id: e.target.value})
}

// Update review
function editReview(e) {
    e.preventDefault()
    //need id from newReview
    fetch(`/reviews/${newReview.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newReview)
    }).then(res => res.json())
    .then(data => {
        const updatedReview = reviews.map((review) => {
            return (
                // when data response matches review id, replace with data (which is updated review)
                data.id === review.id ? data : review
            )
        })
        setReviews(updatedReview)
        setShowEdit(showEdit => !showEdit)
    })
    navigate('/collectiontable')
}

    
  return (
    <div>
        <Form 
        className='review-form'
        onSubmit={editReview}>
            <FormGroup>
                <Label 
                className="review-label"
                for="review_title">
                Review Title
                </Label>
                <Input
                onChange={handleChange}
                value={newReview.review_title}
                id="review_title"
                name="review_title"
                //removed placeholders since override was an issue
                // placeholder="Review Title.."
                type="title"
                />
                <Label 
                className="review-label"
                for="review_collection">
                Select Collection
                </Label>
                <Input
                onChange={handleDropDown}
                id="review_collection"
                multiple
                name="review_collection"
                type="select"
                >
                    {collections.map(collection => {
                        return (
                            <option 
                            value={collection.id}>
                                {collection.collection_name}
                                {collection.collection_image}
                            </option>
                        )
                    })}
                </Input>
                
            </FormGroup>
            <FormGroup>
                <Label 
                className="review-label"
                for="review_description">
                Review
                </Label>
                <Input
                onChange={handleChange}
                value={newReview.review_description}
                id="review_description"
                name="review_description"
                //removed placeholders since override was an issue
                // placeholder="Let the community know what you think!.."
                type="textarea"
                />
            </FormGroup>
            <FormGroup>
            {<div>
                {[...Array(5)].map((star, i) => {
                    const rateValue = i + 1;
                    return(
                        <label>
                            <input 
                            type="radio" 
                            id="review_rating"
                            name="review_rating"
                            value={rateValue}
                            onChange={handleChange}
                            onClick={() => setRating(rateValue)}
                            />
                            <FaStar 
                                className='star'
                                onMouseEnter={() => setHover(rateValue)}
                                onMouseLeave={() => setHover(false)}
                                size={20}
                                color={rateValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            />
                            
                        </label>
                    )
                    
                })}
            </div>}
            </FormGroup>
            <Button>
                Resubmit Review
            </Button>
        </Form>
    </div>
  )
}

export default EditForm