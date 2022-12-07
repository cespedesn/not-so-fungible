import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WalletTile from './WalletTile'

function Wallet() {
    const [userWallets, setUserWallets] = useState([])
    const [wallet, setWallet] = useState([])
    const [errors, setErrors] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        fetch(`/user_wallets`)
        .then(res => {
            if(res.ok) {
                res.json().then((data) => {
                    setUserWallets(data)
                    console.log(data)
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    },[])

    const walletsToDisplay = userWallets.map((wallet) => {
        return (
            <WalletTile 
                key={wallet.id}
                wallet={wallet}
                name={wallet.user.user_name}
                redeemed_nft={wallet.redeemed_nft}
            />
        )
    })

  
  return (
    <div>{walletsToDisplay}</div>
  )
}

export default Wallet


































// useEffect(() => {
//     if(walletsToDisplay === []) {
//         return 
//     } else {
//         setWalletsToDisplay(() => {
//             userWallets.map((wallet) => {
//                 return (
//                     <WalletTile 
//                         key={wallet.id}
//                         wallet={wallet}
//                         name={wallet.user.user_fullname}
//                         funds={wallet.user_wallet_available_funds}
//                         nft_count={wallet.wallet_nft_count}
//                         purchased_nfts={wallet.purchased_nfts}
//                     />
//                 )
                
//             })
            
//         })
//         console.log({userWallets})
//     }
// },[userWallets])

