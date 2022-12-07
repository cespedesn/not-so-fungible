import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Waitlist from './Waitlist';
import { Card, CardLink, CardText, CardBody,
  CardTitle, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { VscDiffAdded } from 'react-icons/vsc'



function NftTile({name, price, image}) {
const [freeNft, setFreeNft] = useState([])
const navigate = useNavigate()
const filename = image.split("/").pop()

//Adding free nft
function addFreeNft(addedNft){
  setFreeNft(prev => [addedNft, prev])
}

//Posting free nft to wallet
function onAddFreeNft(e) {
  e.preventDefault()
  fetch(`/nfts`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(addFreeNft)
  })
  .then(res => {
    if(res.ok) {
      res.json().then((freeNft) => {
        addFreeNft(freeNft)
        navigate('/user_wallets')
      })
    }
  })
}


  return (
    <div className='collection-div'>
            <Card 
            className='card'
            style={{width: '10rem'}}>
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
                    <Waitlist /> <VscDiffAdded onSubmit={onAddFreeNft}/>
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