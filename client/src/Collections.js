import React, { useState, useEffect } from 'react'
import CollectionTile from './CollectionTile'
import { Container, Row, Col } from 'reactstrap'
import { preview, transformWithEsbuild } from 'vite'

function Collections() {
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
    const [showCollection, setShowCollection] = useState(false)
    
  
      useEffect(() => {
          fetch('/nfts')
          .then(res => {
              if(res.ok){
                  res.json().then((data) => {
                      console.log(data)
                      setAns(data.slice(0,15))
                      setBbs(data.slice(16,32))
                      setBrfs(data)
                      setDbbs(data)
                      setFgs(data)
                      setHds(data)
                      setLls(data)
                      setMms(data)
                      setMmms(data)
                      setNns(data)
                      setOefs(data)
                      setSss(data)
                      setSms(data)
                      setWws(data)
                      setYcs(data)
  
                  })
              } else {
                  res.json().then(data => setErrors(data.errors))
              }
          })
      }, [])
      
  
  
      
  //Astronuts map
    const ansToDisplay = ans.map((nft) => {
      return (
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
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
        <CollectionTile 
          key={nft.id}
          nft={nft}
          name={nft.nft_name}
          price={nft.nft_price}
          description={nft.nft_description}
          image={nft.nft_image}
        />
      )
    })

    // const toggleCollection = () => {
    //     setShowCollection(!showCollection)
    // };

  return (
    <div>
        <Container>
            <Col>
            { showCollection ? 
                <Row sm='5'>
                    <div>
                    <h2>Astronuts</h2>{ansToDisplay}
                    <button onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                    </div>
                </Row>
                : null }
                
                {/* <Row sm="5">
                    <h2>Baby Baboons</h2>{bbsToDisplay}
                </Row> */}
                
                {/*
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
                </Row> */}
            </Col>
        </Container>
        
    </div>
  )
}

export default Collections