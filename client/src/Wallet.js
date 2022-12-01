import React, { useState, useEffect } from 'react'
import WalletTile from './WalletTile'

function Wallet() {
    const [userWallets, setUserWallets] = useState([])
    const [wallet, setWallet] = useState([])
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        fetch('/user_wallets')
        .then(res => {
            if(res.ok) {
                res.json().then((data) => {
                    setUserWallets(data[0])
                    console.log(data[0])
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    },[])

    const walletsToDisplay = wallet.map((wallet) => {
        return (
            <WalletTile 
                key={wallet.user.id}
                wallet={wallet}
                name={wallet.user.user_name}
                funds={wallet.user_wallet_available_funds}
                nft_count={wallet.user.wallet_nft_count}
                purchased_nfts={wallet.purchased_nfts}
            />
        )
    })
  return (
    <div>{walletsToDisplay}</div>
  )
}

export default Wallet