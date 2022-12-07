import React, { useState, useEffect } from 'react'
import CollectionTile from './CollectionTile'
import { Container, Row, Col } from 'reactstrap'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CollectionsQuilt from './CollectionsQuilt'
import ClipLoader from "react-spinners/ClipLoader";

function Collections() {
    const [errors, setErrors] = useState(false)
    const [loading, setLoading] = useState(true)
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
    const [showAnsCollection, setShowAnsCollection] = useState(false)
    const [showBbsCollection, setShowBbsCollection] = useState(false)
    const [showBrfsCollection, setShowBrfsCollection] = useState(false)
    const [showDbbsCollection, setShowDbbsCollection] = useState(false)
    const [showFgsCollection, setShowFgsCollection] = useState(false)
    const [showHdsCollection, setShowHdsCollection] = useState(false)
    const [showLlsCollection, setShowLlsCollection] = useState(false)
    const [showMmsCollection, setShowMmsCollection] = useState(false)
    const [showMmmsCollection, setShowMmmsCollection] = useState(false)
    const [showNnsCollection, setShowNnsCollection] = useState(false)
    const [showOefsCollection, setShowOefsCollection] = useState(false)
    const [showSssCollection, setShowSssCollection] = useState(false)
    const [showSmsCollection, setShowSmsCollection] = useState(false)
    const [showWwsCollection, setShowWwsCollection] = useState(false)
    const [showYcsCollection, setShowYcsCollection] = useState(false)
    
  
      useEffect(() => {
          fetch('/nfts')
          .then(res => {
              if(res.ok){
                  res.json().then((data) => {
                      // console.log(data)
                      setLoading(true)
                      setTimeout(() => {
                        setLoading(data)
                      }, 2000)
                      
                      setAns(data.slice(0,15))
                      setBbs(data.slice(16,32))
                      setBrfs(data.slice(32,48))
                      setDbbs(data.slice(48,64))
                      setFgs(data.slice(64,80))
                      setHds(data.slice(80,96))
                      setLls(data.slice(96,112))
                      setMms(data.slice(112,128))
                      setMmms(data.slice(128,144))
                      setNns(data.slice(144,160))
                      setOefs(data.slice(160,176))
                      setSss(data.slice(176,192))
                      setSms(data.slice(192,208))
                      setWws(data.slice(208,224))
                      setYcs(data.slice(224,240))
  
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


   
    
  return (
    <div className='allcollections-div'>
      {/* <ClipLoader
        color={'#36d7b7'}
        loading={loading}
        size={150} /> */}
        <div>
          <h1>All Collections</h1>
        </div>
        <CollectionsQuilt />
        <Container>
            <Col>
                <Row className='row'
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right" >
                      <div className='collection-name-div'><h2 className='collection-name'>Astronuts</h2>
                  
                      </div>
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowAnsCollection((showAnsCollection) => !showAnsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showAnsCollection && ansToDisplay}
                </Row>
                
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Baby Baboons</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowBbsCollection((showBbsCollection) => !showBbsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showBbsCollection && bbsToDisplay}
                </Row>
                
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Bob Ross Flossies</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowBrfsCollection((showBrfsCollection) => !showBrfsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showBrfsCollection && brfsToDisplay}
                </Row>
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Dance Battle Bears</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowDbbsCollection((showDbbsCollection) => !showDbbsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showDbbsCollection && dbbsToDisplay}
                </Row>
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Forest Grumps</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowFgsCollection((showFgsCollection) => !showFgsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showFgsCollection && fgsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Hot Dawgs</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowHdsCollection((showHdsCollection) => !showHdsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showHdsCollection && hdsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Lonely Lemurs</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowLlsCollection((showLlsCollection) => !showLlsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showLlsCollection && llsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>MerMommas</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowMmsCollection((showMmsCollection) => !showMmsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showMmsCollection && mmsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>MoMa Meow Meows</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowMmmsCollection((showMmmsCollection) => !showMmmsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showMmmsCollection && mmmsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Nunchuck Norris</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowNnsCollection((showNnsCollection) => !showNnsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showNnsCollection && nnsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>One Eyed Frens</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowOefsCollection((showOefsCollection) => !showOefsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showOefsCollection && oefsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Snail Mail</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowSmsCollection((showSmsCollection) => !showSmsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showSmsCollection && smsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Silly Sloths</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowSssCollection((showSssCollection) => !showSssCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showSssCollection && sssToDisplay}
                </Row>
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Whos Wise</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowWwsCollection((showWwsCollection) => !showWwsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showWwsCollection && wwsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div data-aos="zoom-in-right">
                      <div className='collection-name-div'><h2 className='collection-name'>Yacht Chimps</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowYcsCollection((showYcsCollection) => !showYcsCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {showYcsCollection && ycsToDisplay}
                </Row>
            </Col>
        </Container> 
    </div>
  )
}

export default Collections