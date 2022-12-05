import React from 'react'
import PSlider from './PSlider'
import { Link } from 'react-router-dom'

function Purgatory() {
  return (
    <div>
        <PSlider />
        <div className='purgatory-div'>
            <p className='p'>
                <strong>
                NFTs (non-fungible tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. 
                </strong>
            </p>
            <p className='p'>
                <strong>
                NFTs can represent real-world items like artwork and real estate. 
                </strong>
            </p>
            <p className='p'>
                <strong>
                "Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.
                </strong>
            </p>
            <Link to="/">
                <button className='button'> Access Granted </button>
            </Link>
        </div>
    </div>
  )
}

export default Purgatory