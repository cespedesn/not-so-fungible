import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import Rating from './Rating'
import EditForm from './EditForm'

function ReviewList({user, title, description, rating, handleDelete, id, review, reviews, setReviews}) {
    const navigate = useNavigate()
    //toggle show 
    const [showEdit, setShowEdit] = useState(false)
    const [newReview, setNewReview] = useState({
        review_title: "",
        review_description: "",
        rating: "",
        collection_id: "",
        user_id: user.id
    })

  return (
    <div className='reviewlist-body'>
        {!showEdit ?
        <Card
            className='review-tile'
            body
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Sample"
                src="https://previews.dropbox.com/p/thumb/ABv1ti5Ubt1P8FK2q4hB97QR59Q4_LpQBqHPPA4aFUAGji0PXMJE-ghJOm4rpYbuZlEBIlALBify_HW1W3OzyzTcFssmy0bNid-w6DuzsBELplaTLmwmu1wnzq-07Kt46NiqSA6gri6dKxUmlcPmfT-X6QmP9Jsh_y8T97v2KkT9vi_Ytz7y4yNSJ6y3SORmX4TThALIaLrP4hss3t84kCH8MsjH49ETSmwaM15UD3W740GGCIAMQYrNzIa1mzVScLAn2sj1FSpkWtEfOPAiEkXRx2tQj6wyk8Ysp6gj1bFzrJmc4AlLaiJm_-p9lMOBtn9squkCuTyagUYBUa_xGXwqqr-AW-gkR9jwPoDQrLBF42ikQkYgovdYFBI4RS7Njt13O_o9WEm-MoMUlSs148XG/p.png"
            />
            <CardBody >
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                    {user}
                </CardSubtitle>
                <CardText>
                    {description}
                </CardText>
                <CardText>
                    <Rating rating={rating}/>
                </CardText>
                <CardText>
                    {user.id === reviews.user_id && (
                    <button onClick={() => handleDelete(id)}>
                        <FaTrashAlt />
                    </button>)}
                </CardText>
                <CardText>
                    <button onClick={() => setShowEdit(!showEdit)}>
                        <FaEdit 
                        />
                    </button>
                </CardText>
            </CardBody>
        </Card> : <EditForm review={review} currentUser={user} setShowEdit={setShowEdit} showEdit={showEdit} reviews={reviews} setReviews={setReviews}/> }
    </div>
  )
}

export default ReviewList