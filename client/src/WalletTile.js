import React from 'react'
import PurchasedNfts from './PurchasedNfts'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, NavLink} from 'reactstrap'
import Schmklz from './Schmklz.png'
function WalletTile({user_wallet, funds, user_nfts}) {
  return (
    <div className='wallet-div'>
        <PurchasedNfts />
        <Card
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
                {user_wallet}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                {funds}
                <br/>
                Nft Count: {user_nfts}
                </CardSubtitle>
                <CardText>
                Redeem your exclusive schmeckle coins here on nsFUNgible!
                </CardText>
                <Button>
                    <NavLink href= '/purchasednfts'>My NFT's</NavLink>
                </Button>
            </CardBody>
        </Card>
    </div>
  )
}

export default WalletTile