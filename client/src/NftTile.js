import React from 'react'
import { Card, CardLink, CardText, CardBody,
  CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
  import { Link } from'react-router-dom';


function NftTile({name, price, description, image}) {
  return (
    <div>
        <Card style={{width: '18rem'}}>
            <img
                alt="Card"
                src={image}
            />
            <CardBody>
                <CardTitle tag="h5">
                {name}
                </CardTitle>
                <CardText>
                {description}
                </CardText>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>
                {price}
                </ListGroupItem>
            </ListGroup>
            <CardBody>
                <CardLink href="Collection">
                    <Link to = "/collection"> <h5>Collection</h5> </Link>
                </CardLink>
            </CardBody>
        </Card>
    </div>
  )
}

export default NftTile