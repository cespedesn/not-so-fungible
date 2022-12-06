import React, { useEffect, useState } from 'react'
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
                    setAns(data.slice(0,4))
                    setBbs(data.slice(25,29))
                    setBrfs(data.slice(33,37))
                    setDbbs(data.slice(52,56))
                    setFgs(data.slice(66,70))
                    setHds(data.slice(80,84))
                    setLls(data.slice(106,110))
                    setMms(data.slice(120,124))
                    setMmms(data.slice(128,132))
                    setNns(data.slice(144,148))
                    setOefs(data.slice(166,170))
                    setSss(data.slice(176,180))
                    setSms(data.slice(193,197))
                    setWws(data.slice(210,214))
                    setYcs(data.slice(225,229))

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
          <h2 data-aos="fade-down-right" >Astronuts</h2>{ansToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
          <h2 data-aos="fade-down-left">Baby Baboons</h2>{bbsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
          <h2 data-aos="fade-down-right">Bob Ross Flossies</h2>{brfsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
          <h2 data-aos="fade-down-left">Dance Battle Bears</h2>{dbbsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
          <h2 data-aos="fade-down-right">Forest Grumps</h2>{fgsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-left">Hot Dawgs</h2>{hdsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-right">Lonely Lemurs</h2>{llsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-left">MerMommas</h2>{mmsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-right">MoMa Meow Meows</h2>{mmmsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-left">Nunchuck Norris</h2>{nnsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-right">One Eyed Frens</h2>{oefsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-left">Snail Mail</h2>{smsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-right">Silly Sloths</h2>{sssToDisplay}
          </Row>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-left">Whos Wise</h2>{wwsToDisplay}
          </Row>
          <br/>
          <Row sm="5"
          data-aos="flip-right"
          className='row'>
            <h2 data-aos="fade-down-right">Yacht Chimps</h2>{ycsToDisplay}
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