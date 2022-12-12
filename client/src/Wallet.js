import React, { useState, useEffect } from 'react'
import WalletTile from './WalletTile'

function Wallet() {
    const [userWallets, setUserWallets] = useState([])

    useEffect(() => {
        fetch(`/user_wallets`)
        .then(res => {
            if(res.ok) {
                res.json().then((data) => {
                    setUserWallets(data)
                    console.log(data)
                })
            } else {
//Error Handling
                res.json().then(data => alert(data.errors))
            }
        })
    },[])

    const walletsToDisplay = userWallets.map((wallet) => {
        return (
            <WalletTile 
                key={wallet.id}
                wallet={wallet}
                name={wallet.user.user_fullname}
                redeemed_nft={wallet.redeemed_nft}
            />
        )
    })

  
  return (
    <div>
        {walletsToDisplay}
    </div>
  )
}

export default Wallet