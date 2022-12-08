import React, { useState, useEffecft } from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, NavLink} from 'reactstrap'
import WalletModal from './WalletModal'
import Schmklz from './Schmklz.png'

function WalletTile({name, redeemed_nft}) {

  return (
    <div className='wallet-div'>
          
        <Card
            className='wallet'
            color='warning'
            outline
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Schmklz.png"
                src={Schmklz}
            />
            <CardBody>
                <CardTitle tag="h5">
                {name}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                Redeemed NFT: {redeemed_nft}
                <br/>
                </CardSubtitle>
                <CardText>
                Redeem and stake your exclusive schmeckle coins 2024 on nsFUNgible!
                </CardText>
                    <WalletModal />
            </CardBody>
        </Card>
    </div>
  )
}

export default WalletTile