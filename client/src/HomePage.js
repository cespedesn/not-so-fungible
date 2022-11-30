import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import NftTile from './NftTile'
import Slider from './Slider'


function HomePage() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState(false)
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
    <div>
      <h1>Welcome, {user.user_name}!</h1>
      <Slider />
      <Container >
        <Col>
          <Row sm="5">
          <h2>Astronuts</h2>{ansToDisplay}
          </Row>
         
          <Row sm="5">
          <h2>Baby Baboons</h2>{bbsToDisplay}
          </Row>
          
          <Row sm="5">
          <h2>Bob Ross Flossies</h2>{brfsToDisplay}
          </Row>
          
          <Row sm="5">
          <h2>Dance Battle Bears</h2>{dbbsToDisplay}
          </Row>
        
          <Row sm="5">
          <h2>Forest Grumps</h2>{fgsToDisplay}
          </Row>

          <Row sm="5">
            <h2>Hot Dawgs</h2>{hdsToDisplay}
          </Row>

          <Row sm="5">
            <h2>Lonely Lemurs</h2>{llsToDisplay}
          </Row>

          <Row sm="5">
            <h2>MerMommas</h2>{mmsToDisplay}
          </Row>

          <Row sm="5">
            <h2>MoMa Meow Meows</h2>{mmmsToDisplay}
          </Row>

          <Row sm="5">
            <h2>Nunchuck Norris</h2>{nnsToDisplay}
          </Row>

          <Row sm="5">
            <h2>One Eyed Frens</h2>{oefsToDisplay}
          </Row>

          <Row sm="5">
            <h2>Snail Mail</h2>{smsToDisplay}
          </Row>

          <Row sm="5">
            <h2>Silly Sloths</h2>{sssToDisplay}
          </Row>
          <Row sm="5">
            <h2>Whos Wise</h2>{wwsToDisplay}
          </Row>

          <Row sm="5">
            <h2>Yacht Chimps</h2>{ycsToDisplay}
          </Row>

        </Col>
      </Container>
      
    </div>
  )
  }else {
    return null
  }
}
export default HomePage