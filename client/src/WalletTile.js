import React from 'react'
import PurchasedNfts from './PurchasedNfts'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, NavLink} from 'reactstrap'
import Schmklz from './Schmklz.png'

function WalletTile({name, funds, nft_count, purchased_nfts}) {
  return (
    <div className='wallet-div'>
        THIS IS A TEST
        {/* <PurchasedNfts /> */}
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
                {name}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                {funds}
                <br/>
                Nft Count: {nft_count}
                </CardSubtitle>
                <CardText>
                Redeem your exclusive schmeckle coins here on nsFUNgible!
                </CardText>
                <Button>
                    <NavLink href= '/purchasednfts'>{purchased_nfts}</NavLink>
                </Button>
            </CardBody>
        </Card>
    </div>
  )
}

export default WalletTile