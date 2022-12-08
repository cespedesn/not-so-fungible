import React from 'react'
import Waitlist from './Waitlist'
import { Card, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, CardLink } from 'reactstrap';

function CollectionTile({name, image, nft_name, price }) {

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
                    <CardText>
                    {nft_name}
                    </CardText>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>
                    {price}
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    <CardLink href="collectiontable">
                        Description
                    </CardLink>
                    <Waitlist />
                </CardBody>
            </Card>
    </div>
  )
}

export default CollectionTile