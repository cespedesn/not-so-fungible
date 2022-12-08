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
                src="https://previews.dropbox.com/p/thumb/ABsDCKgmUfw8xkcCuFqP8FUm7qvemsKy1MROHuWUMczuEnv2hrH-zE0v2G39qzH1YMC2f9xyMoYuEmTKp2JuNMaA3KP_FuVbXFhncJFePxbSILDgngoUdFkfPco5gMa3CCQ6qID3YREz1dI_AqLm8YQshcq2KL2YwtQZvH3R_5-gP0fqNeBuHVIrw2Ohi0NS2ePfT1AytgciTXfs7TKDDnH8viwy1TQBLKGbIh0pc0SWq8yhibk2ysD8eN6_3EZ3cEp0SJ4tm_SBqnQgTSS86iF4DGnoCRkazIN_xBWuQqu4Tah6j3LdoRjsUuI9pBzE_sQ-4qOkCP4hpY0GZnwSrgrEwOaC0rmfeUhAnTcSfIQuXimUtzHR4dRJSiDFIRtisUh12LztHBdVQ_uJ_rB64Fdg/p.png"
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