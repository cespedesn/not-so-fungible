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
      <br/>
      <h1>Welcome, {user.user_name}!</h1>
      <Slider />
      <div className='top-collection-btn-div'>
        <Link to="/topcollections">
          <button className='button'>View Top Collections</button>
        </Link>
      </div >
      
      <div 
      data-aos="fade-down"
      className='nft-section'>
        <Container >
          
          <Col >
          <br/>
            <Row 
            sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="A" src="./images/a15.png" />
                <h3 className="nft-name-a"
                 >Astronuts</h3>{ansToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Bb" src="./images/bb2.png" />
                <h3 className="nft-name-bb" 
                >Baby Baboons</h3>{bbsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Brf" src="./images/brf12.png" />
                <h3 className="nft-name-brf" 
                >Bob Ross Flossies</h3>{brfsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
            <Stack direction="row">
              <Avatar alt="Dbb" src="./images/dbb3.png" />
              <h3 className="nft-name"
              >Dance Battle Bears</h3>{dbbsToDisplay}
            </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Fg" src="./images/fg3.png" />
                <h3 className="nft-name-fg"
                >Forest Grumps</h3>{fgsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Hd" src="./images/hd1.png" />
                <h3 className="nft-name"
                >Hot Dawgs</h3>{hdsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Ll" src="./images/ll14.png" />
                <h3 className="nft-name"
                >Lonely Lemurs</h3>{llsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Mm" src="./images/mm9.png" />
                <h3 className="nft-name-mm"
                >MerMommas</h3>{mmsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Mmm" src="./images/mmm1.png" />
                <h3 className="nft-name"
                >MoMa Meow Meows</h3>{mmmsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Nn" src="./images/nn5.png" />
                <h3 className="nft-name-nn"
                >Nunchuck Norris</h3>{nnsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Oef" src="./images/oef8.png" />
                <h3 className="nft-name-oef"
                >One Eyed Frens</h3>{oefsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Sm" src="./images/sm1.png" />
                <h3 className="nft-name-sm"
                >Snail Mail</h3>{smsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Ss" src="./images/ss14.png" />
                <h3 className="nft-name-ss"
                >Silly Sloths</h3>{sssToDisplay}
              </Stack>
            </Row>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Ww" src="./images/ww1.png" />
                <h3 className="nft-name-ww"
                >Whos Wise</h3>{wwsToDisplay}
              </Stack>
            </Row>
            <br/>
            <Row sm="5"
            // data-aos="flip-right"
            className='row'>
              <Stack direction="row">
                <Avatar alt="Yc" src="./images/yc9.png" />
                <h3 className="nft-name"
                >Yacht Chimps</h3>{ycsToDisplay}
              </Stack>
            </Row>
            <br/>
          </Col>
        </Container>
      </div>
    </div>
  )
  }else {
    return null
  }
}
export default HomePage