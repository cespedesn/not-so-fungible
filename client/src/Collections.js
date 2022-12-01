import React, { useState, useEffect } from 'react'
import CollectionTile from './CollectionTile'
import { Container, Row, Col } from 'reactstrap'


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
                      // console.log(data)
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

    // const toggleCollection = () => {
    //     setShowCollection(!showCollection)
    // };

  return (
    <div>
        <Container>
            <Col>
                <Row className='row'
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Astronuts</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {ansToDisplay}
                </Row>
                
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Baby Baboons</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {bbsToDisplay}
                </Row>
                
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Bob Ross Flossies</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {brfsToDisplay}
                </Row>
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Dance Battle Bears</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {dbbsToDisplay}
                </Row>
                
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Forest Grumps</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {fgsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Hot Dawgs</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {hdsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Lonely Lemurs</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {llsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>MerMommas</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {mmsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>MoMa Meow Meows</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {mmmsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Nunchuck Norris</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {nnsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>One Eyed Frens</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {oefsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Snail Mail</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {smsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Silly Sloths</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {sssToDisplay}
                </Row>
                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Whos Wise</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {wwsToDisplay}
                </Row>

                <Row 
                color='warning'
                outline
                style={{ width: '73rem'}}
                sm="6">
                    <div>
                      <div className='collection-name-div'><h2 className='collection-name'>Yacht Chimps</h2></div>
                      
                      <div className='collection-btn-div'>
                      <button className= "collection-btn"
                      onClick={() => setShowCollection((showCollection) => !showCollection)}>Toggle Collection</button>
                      </div>
                    </div>
                    {ycsToDisplay}
                </Row>
            </Col>
        </Container>
        
    </div>
  )
}

export default Collections