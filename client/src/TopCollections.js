import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TopTile from './TopTile'
import TopQuilt from './TopQuilt'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function TopCollections() {
    const [loading, setLoading] = useState(false)
    const [ycs, setYcs] = useState([])
    const [sss, setSss] = useState([])
    const [nns, setNns] = useState([])
    const [bbs, setBbs] = useState([])
    const [dbbs, setDbbs] = useState([])
    const [dds, setDds] = useState([])
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        fetch('/nfts')
        .then(res => {
            if(res.ok){
                res.json().then((data) => {
                    // console.log(data)
                    setLoading(data)
                    setBbs(data.slice(25,30))
                    setDbbs(data.slice(52,57))
                    setNns(data.slice(144,149))
                    setSss(data.slice(176,181))
                    setYcs(data.slice(225,230))
                    setDds(data.slice(241, 246))

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
   //Deryb Diaries map
   const ddsToDisplay = dds.map((nft) => {
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
    <div className='topcollection-div'>
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
                data-aos="flip-left"
                className='row'>
                  <Stack direction="row">
                    <Avatar alt="Dd" src="./images/dd11.png" />
                    <h3 className="nft-name-a"
                    data-aos="fade-down-right">Deryb Diaries</h3>{ddsToDisplay}
                  </Stack>
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-right"
                className='row'>
                  <Stack direction="row">
                    <Avatar alt="Yc" src="./images/yc9.png" />
                    <h3 className="nft-name-a"
                    data-aos="fade-down-right">Yacht Chimps</h3>{ycsToDisplay}
                  </Stack>
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-left"
                className='row'>
                  <Stack direction="row">
                    <Avatar alt="Bb" src="./images/bb2.png" />
                    <h3 className="nft-name-bb" 
                    data-aos="fade-down-right">Baby Baboons</h3>{bbsToDisplay}
                  </Stack>
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-right"
                className='row'>
                  <Stack direction="row">
                    <Avatar alt="Nn" src="./images/nn5.png" />
                    <h3 className="nft-name-nn"
                    data-aos="fade-down-right">Nunchuck Norris</h3>{nnsToDisplay}
                  </Stack>
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-left"
                className='row'>
                  <Stack direction="row">
                    <Avatar alt="Ss" src="./images/ss14.png" />
                    <h3 className="nft-name-ss"
                    data-aos="fade-down-right">Silly Sloths</h3>{sssToDisplay}
                  </Stack>
                </Row>
                <br/>
                <Row 
                sm="5"
                data-aos="flip-right"
                className='row'>
                  <Stack direction="row">
                    <Avatar alt="Dbb" src="./images/dbb3.png" />
                    <h3 className="nft-name"
                    data-aos="fade-down-right">Dance Battle Bears</h3>{dbbsToDisplay}
                  </Stack>
                </Row>
            </Col>
        </Container>
    </div>
  )
}

export default TopCollections