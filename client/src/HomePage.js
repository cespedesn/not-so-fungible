import React, { useEffect, useState } from 'react'
import NftTile from './NftTile'

function HomePage() {
  const [user, setUser] = useState(null)
  const [nfts, setNfts] = useState([])
  const [errors, setErrors] = useState(false)
  

    useEffect(() => {
        fetch('/nfts')
        .then(res => {
            if(res.ok){
                res.json().then((data) => {
                    console.log(data)
                    setNfts(data.slice(0,4))
                })
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    })
    // console.log(nfts)
    

  const nftsToDisplay = nfts.map((nft) => {
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
      <div>{nftsToDisplay}</div>
    </div>
  )
  }else {
    return null
  }
}
export default HomePage