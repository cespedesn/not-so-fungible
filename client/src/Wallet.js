import React, { useState, useEffect } from 'react'
import WalletTile from './WalletTile'

function Wallet() {
const [wallet, setWallet] = useState([])
const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/user_wallets')
    .then(res => {
        if(res.ok) {
            res.json().then((data) => {
                setWallet(data)
                // console.log(wallet)
            })
        } else {
            res.json().then((data) => setErrors(data.errors))
        }
    })
  },[])

  const userWalletToDisplay = wallet.map((wallet) => {
    return (
        <WalletTile 
            key = {wallet.id}
            wallet = {wallet}
            user_wallet = {wallet.user.user_fullname}
            funds = {wallet.user_wallet_available_funds}
            user_nfts = {wallet.wallet_nft_count}
        />
    )
  })
  return (
    <div>{userWalletToDisplay}</div>
  )
}

export default Wallet