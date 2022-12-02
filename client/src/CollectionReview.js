import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'

function CollectionReview({currentUser}) {
const navigate = useNavigate()
let {id} = useParams()
const [errors, setErrors] = useState(false)
const [reviews, setReviews] = useState([])
const [newReview, setNewReview] = useState({
    review_title: "",
    review_description: "",
    rating: "",
    collection_id: "",
    user_id: currentUser.id
})

const [collections, setCollections] = useState([])
// const [selectedCollections, setSelectedCollections] = useState([])


useEffect(() => {
    fetch('/collections')
    .then(res => {
        if(res.ok) {
            res.json().then(setCollections)
        }
    })
}, [])


//Spread reviews and new ones to the list of reviews
function addReview(newReviewObj){
    setReviews( previousReviews => [...previousReviews, newReviewObj])
  }


  //Post Review
function handleReview(e) {
    e.preventDefault()
    fetch(`/reviews/`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newReview)
    })
    .then(res => {
        if(res.ok) {
            res.json().then((review) => {
                addReview(review)
                navigate("/collectiontable")
                console.log("chuck norris rules")
            })
        } else {
            res.json().then(data => setErrors(data.errors))
        }
    })
    
}

//Delete review
function handleDelete(id) {
    fetch(`/reviews/${id}`, {
        method: 'DELETE'
    })
}


//Handle Change on character inputs
const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value})
}

const handleDropDown = (e) => {
    console.log(e.target.value)
    setNewReview({...newReview, collection_id: e.target.value})
    
}

  return (
    <div>
        <Form 
        className='review-form'
        onSubmit={handleReview}>
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
                            </option>
                        )
                    })}
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
            <Input
                onChange={handleChange}
                id="review_rating"
                name="review_rating"
                placeholder="Review Rating.."
                type="text"
                />
            </FormGroup>
            <Button>
                Submit Review
            </Button>
        </Form>
    </div>
  )
}

export default CollectionReview