import React, { useState } from 'react'
import nsf_logo2 from './nsf_logo2.png'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import Rating from './Rating'
import EditForm from './EditForm'

function ReviewList({user, title, description, rating, handleDelete, id, review, reviews, setReviews}) {
//toggle show 
    const [showEdit, setShowEdit] = useState(false)
    


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
                src={nsf_logo2}
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
        </Card> : 
        <EditForm 
        review={review} 
        currentUser={user} 
        setShowEdit={setShowEdit} 
        showEdit={showEdit} 
        reviews={reviews} 
        setReviews={setReviews}/> }
    </div>
  )
}

export default ReviewList