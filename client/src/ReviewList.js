import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa'

function ReviewList({user, title, description, rating, handleDelete}) {
   

  return (
    <div className='reviewlist-div'>
        <Card
            body
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Sample"
                src="https://picsum.photos/300/200"
            />
            <CardBody>
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
                    {rating}
                </CardText>
                <CardText>
                    <button onClick={handleDelete}>
                        <FaTrashAlt />
                    </button>
                </CardText>
            </CardBody>
        </Card>
    </div>
  )
}

export default ReviewList