import React, { useState, useEffect } from 'react'
import { Card, CardLink, CardText, CardBody,
  CardTitle, ListGroup, ListGroupItem } from 'reactstrap';



function NftTile({name, price, image}) {
const filename = image.split("/").pop()



  return (
    <div className='collection-div'>
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
                    {/* {description} */}
                    </CardText>
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
                </CardBody>
            </Card>
    </div>
  )
}

export default NftTile


// const [nft, setNft] = useState({})
// const {id} = useParams()
//     useEffect(() => {
//     fetch(`/nfts/${id}`)
//     .then((res) => {
//       if (res.ok) {
//         res.json()
//         .then((data) => {
//             // setNft(data)
//             console.log(data)
//         })
//       }
//     });
//   }, []);

  

//     const nftReview = nft?.reviews?.map((review) => {
//         return (
//             <NftReviews 
//                 key={review.id}
//                 review={review}
//             />
//         )
//     })
//     console.log(nftReview)