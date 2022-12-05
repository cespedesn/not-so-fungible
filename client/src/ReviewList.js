import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

function ReviewList({user, title, description, rating, handleDelete, editReview, id}) {
   

  return (
    <div >
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
                    {rating}
                </CardText>
                <CardText>
                    <button onClick={() => handleDelete(id)}>
                        <FaTrashAlt />
                    </button>
                </CardText>
                <CardText>
                    {/* <button onClick={() => handleEdit(id)}>
                        <FaEdit />
                    </button> */}
                </CardText>
            </CardBody>
        </Card>
    </div>
  )
}

export default ReviewList