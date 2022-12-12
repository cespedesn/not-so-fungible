import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { FaStar } from 'react-icons/fa'




function CollectionReview({currentUser}) {
const navigate = useNavigate()
const [rating, setRating] = useState(false)
const [hover, setHover] = useState(false)
const [reviews, setReviews] = useState([])
const [collections, setCollections] = useState([])
const [newReview, setNewReview] = useState({
    review_title: "",
    review_description: "",
    rating: "",
    collection_id: "",
    user_id: currentUser.id
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


//Spread existing reviews and add new ones to the list 
function addReview(newReviewObj){
    setReviews( previousReviews => [newReviewObj, ...previousReviews ])
  }


//Post Review
function handleReview(e) {
    e.preventDefault()
    fetch(`/reviews`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newReview)
    })
    .then(res => {
        if(res.ok) {
            res.json().then((review) => {
                addReview(review)
                navigate("/collectiontable")
            })
        } else {
            res.json().then(data => alert(data.errors))
        }
    })
    
}


//Handle Change on character inputs
const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value})
}
//Drop down for collection options
const handleDropDown = (e) => {
    console.log(e.target.value)
    setNewReview({...newReview, collection_id: e.target.value})
}



  return (
    <div className='review-form-div'>
        <Form 
        className='review-form'
        onSubmit={handleReview}>
            <FormGroup>
                <Label 
                className="review-label"
                for="review_title">
                Review Title
                </Label>
                <Input
                onChange={handleChange}
                id="review_title"
                name="review_title"
                placeholder="Review Title.."
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
                                {/* {collection.collection_image} */}
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
                id="review_description"
                name="review_description"
                placeholder="Let the community know what you think!.."
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
                Submit Review
            </Button>
        </Form>
    </div>
  )
}

export default CollectionReview
