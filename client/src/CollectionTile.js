import React from 'react'
import { Card, CardLink, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

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
            </Card>
    </div>
  )
}

export default CollectionTile