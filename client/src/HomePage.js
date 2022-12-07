import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ClipLoader from "react-spinners/ClipLoader";
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import NftTile from './NftTile'
import Slider from './Slider'




function HomePage() {
  const [user, setUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)
  const [topCollection, setTopCollection] = useState([])
  const [ans, setAns] = useState([])
  const [bbs, setBbs] = useState([])
  const [brfs, setBrfs] = useState([])
  const [dbbs, setDbbs] = useState([])
  const [fgs, setFgs] = useState([])
  const [hds, setHds] = useState([])
  const [lls, setLls] = useState([])
  const [mms, setMms] = useState([])
  const [mmms, setMmms] = useState([])
  const [nns, setNns] = useState([])
  const [oefs, setOefs] = useState([])
  const [sss, setSss] = useState([])
  const [sms, setSms] = useState([])
  const [wws, setWws] = useState([])
  const [ycs, setYcs] = useState([])
  

    useEffect(() => {
        fetch('/nfts')
        .then(res => {
            if(res.ok){
                res.json().then((data) => {
                    // console.log(data)
                    setLoading(data)
                    setAns(data.slice(0,5))
                    setBbs(data.slice(25,30))
                    setBrfs(data.slice(33,38))
                    setDbbs(data.slice(52,57))
                    setFgs(data.slice(66,71))
                    setHds(data.slice(80,85))
                    setLls(data.slice(106,111))
                    setMms(data.slice(120,125))
                    setMmms(data.slice(128,133))
                    setNns(data.slice(144,149))
                    setOefs(data.slice(166,171))
                    setSss(data.slice(176,181))
                    setSms(data.slice(193,198))
                    setWws(data.slice(210,215))
                    setYcs(data.slice(225,230))

                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }, [])
    


    
//Astronuts map
  const ansToDisplay = ans.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Baby Baboons map
  const bbsToDisplay = bbs.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Bob Ross Flossies map
  const brfsToDisplay = brfs.map((nft) => {
    return (
      <NftTile 
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
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Forest Grumps map
  const fgsToDisplay = fgs.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Hot Dawgs map
  const hdsToDisplay = hds.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Lonely Lemurs map
  const llsToDisplay = lls.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //MerMommas map
  const mmsToDisplay = mms.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //MoMa Meow Meows map
  const mmmsToDisplay = mmms.map((nft) => {
    return (
      <NftTile 
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
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //One Eyed Frens map
  const oefsToDisplay = oefs.map((nft) => {
    return (
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Snail mail map
  const smsToDisplay = sms.map((nft) => {
    return (
      <NftTile 
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
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })
  //Whos Wise map
  const wwsToDisplay = wws.map((nft) => {
    return (
      <NftTile 
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
      <NftTile 
        key={nft.id}
        nft={nft}
        name={nft.nft_name}
        price={nft.nft_price}
        description={nft.nft_description}
        image={nft.nft_image}
      />
    )
  })



useEffect(() => {
  fetch("/login").then((res) => {
    if (res.ok) {
      res.json().then((user) => setUser(user));
    }
  });
}, []);

if (user) {
  return (
    <div className="homepage-div">
      <h1>Welcome, {user.user_name}!</h1>
      <Slider />
      <div className='top-collection-btn-div'>
        <Link to="/topcollections">
          <button className='button'>View Top Collections</button>
        </Link>
      </div>
      <Container >
        <Col >
        <br/>
          <Row 
          sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/a15.png" />
              <h3 className="nft-name-a"
              data-aos="fade-down-right" >Astronuts</h3>{ansToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/bb2.png" />
              <h3 className="nft-name-bb" 
              data-aos="fade-down-left">Baby Baboons</h3>{bbsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/brf12.png" />
              <h3 className="nft-name-brf" 
              data-aos="fade-down-right">Bob Ross Flossies</h3>{brfsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
          <Stack direction="row">
            <Avatar alt="Remy Sharp" src="./images/dbb3.png" />
            <h3 className="nft-name"
            data-aos="fade-down-left">Dance Battle Bears</h3>{dbbsToDisplay}
          </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/fg3.png" />
              <h3 className="nft-name-fg"
              data-aos="fade-down-right">Forest Grumps</h3>{fgsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/hd1.png" />
              <h3 className="nft-name"
              data-aos="fade-down-left">Hot Dawgs</h3>{hdsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/ll14.png" />
              <h3 className="nft-name"
              data-aos="fade-down-right">Lonely Lemurs</h3>{llsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/mm9.png" />
              <h3 className="nft-name-mm"
              data-aos="fade-down-left">MerMommas</h3>{mmsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/mmm1.png" />
              <h3 className="nft-name"
              data-aos="fade-down-right">MoMa Meow Meows</h3>{mmmsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/nn5.png" />
              <h3 className="nft-name-nn"
              data-aos="fade-down-left">Nunchuck Norris</h3>{nnsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/oef8.png" />
              <h3 className="nft-name-oef"
              data-aos="fade-down-right">One Eyed Frens</h3>{oefsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/sm1.png" />
              <h3 className="nft-name-sm"
              data-aos="fade-down-left">Snail Mail</h3>{smsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/ss14.png" />
              <h3 className="nft-name-ss"
              data-aos="fade-down-right">Silly Sloths</h3>{sssToDisplay}
            </Stack>
          </Row>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/ww1.png" />
              <h3 className="nft-name-ww"
              data-aos="fade-down-left">Whos Wise</h3>{wwsToDisplay}
            </Stack>
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <Stack direction="row">
              <Avatar alt="Remy Sharp" src="./images/yc9.png" />
              <h3 className="nft-name"
              data-aos="fade-down-right">Yacht Chimps</h3>{ycsToDisplay}
            </Stack>
          </Row>
          <br/>
        </Col>
      </Container>
    </div>
  )
  }else {
    return null
  }
}
export default HomePage