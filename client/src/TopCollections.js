import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TopTile from './TopTile'
import TopQuilt from './TopQuilt'


function TopCollections() {
    const [loading, setLoading] = useState(false)
    const [ycs, setYcs] = useState([])
    const [sss, setSss] = useState([])
    const [nns, setNns] = useState([])
    const [bbs, setBbs] = useState([])
    const [dbbs, setDbbs] = useState([])
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        fetch('/nfts')
        .then(res => {
            if(res.ok){
                res.json().then((data) => {
                    // console.log(data)
                    setLoading(data)
                    setBbs(data.slice(25,29))
                    setDbbs(data.slice(52,56))
                    setNns(data.slice(144,148))
                    setSss(data.slice(176,180))
                    setYcs(data.slice(225,229))

                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }, [])

    //Baby Baboons map
  const bbsToDisplay = bbs.map((nft) => {
    return (
      <TopTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })

  //Dance Battle Bears map
  const dbbsToDisplay = dbbs.map((nft) => {
    return (
      <TopTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })

   //Nunchuck Norris map
   const nnsToDisplay = nns.map((nft) => {
    return (
      <TopTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })


  //Silly Sloths map
  const sssToDisplay = sss.map((nft) => {
    return (
      <TopTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })

   //Yacht Chimps map
   const ycsToDisplay = ycs.map((nft) => {
    return (
      <TopTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  return (
    <div>
        <div>
            <h1>Top Collections</h1>
        </div>
        <div >
            <TopQuilt />
        </div>
        <Container>
            <Col>
                <Row 
                sm="5"
                data-aos="flip-right"
                className='row'>
                <h2 data-aos="fade-down-right">Yacht Chimps</h2>{ycsToDisplay}
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-left"
                className='row'>
                <h2 data-aos="fade-down-right">Baby Baboons</h2>{bbsToDisplay}
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-right"
                className='row'>
                <h2 data-aos="fade-down-right">Nunchuck Norris</h2>{nnsToDisplay}
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-left"
                className='row'>
                <h2 data-aos="fade-down-right">Silly Sloths</h2>{sssToDisplay}
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-right"
                className='row'>
                <h2 data-aos="fade-down-right">Dance Battle Bears</h2>{dbbsToDisplay}
                </Row>
            </Col>
        </Container>
    </div>
  )
}

export default TopCollections