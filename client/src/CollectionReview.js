import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'

function CollectionReview() {
const navigate = useNavigate()
const [errors, setErrors] = useState(false)
const [reviews, setReviews] = useState([])
const [newReview, setNewReview] = useState({
    title: "",
    description: "",
    rating: ""
})

function addReview(newReviewObj){
    setReviews( previousReviews => [...previousReviews, newReviewObj])
  }

function handleReview(e) {
    e.preventDefault()
    fetch('/reviews', {
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
            res.json().then(data => setErrors(data.errors))
        }
    })
    
}

const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value})
}


  return (
    <div>
        <Form onSubmit={handleReview}>
            <FormGroup>
                <Label for="review_title">
                Review Title
                </Label>
                <Input
                onChange={handleChange}
                id="review_title"
                name="review_title"
                placeholder="Review Title.."
                type="title"
                />
                <Label for="review_collection">
                Select Collection
                </Label>
                <Input
                onChange={handleChange}
                id="review_collection"
                multiple
                name="review_collection"
                type="select"
                >
                <option>
                    Astronuts 
                </option>
                <option>
                    Baby Baboons
                </option>
                <option>
                    Bob Ross Flossies
                </option>
                <option>
                    Dance Battle Bears
                </option>
                <option>
                    Forrest Grumps
                </option>
                <option>
                    HotDawgs
                </option>
                <option>
                    Lonely Lemurs
                </option>
                <option>
                    MerMommas
                </option>
                <option>
                    MoMa Meow Meows
                </option>
                <option>
                    Nunchuck Norris
                </option>
                <option>
                    One Eyed Frens
                </option>
                <option>
                    Silly Sloths
                </option>
                <option>
                    Whos Wise
                </option>
                <option>
                    Yacht Chimps
                </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="review_description">
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
                Rating stars go here
            </FormGroup>
            <Button>
                Submit Review
            </Button>
        </Form>
    </div>
  )
}

export default CollectionReview