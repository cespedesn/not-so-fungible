import React from 'react'
import Waitlist from './Waitlist'
import { Card, CardLink, CardBody,
    CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

function TopTile({name, price, image}) {
const filename = image.split("/").pop()
  return (
    <div>
        <Card 
            className='card'
            style={{width: '12rem'}}>
                <img
                    className='nft-tiles'
                    alt="Card"
                    src={`./images/${filename}`}
                    loading="lazy"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {name}
                    </CardTitle>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>
                    {price}
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    <CardLink href="/collections">
                        <h6>Collection</h6>
                    </CardLink>
                    <Waitlist />
                </CardBody>
            </Card>
    </div>
  )
}

export default TopTile