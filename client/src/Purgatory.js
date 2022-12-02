import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom'

function Purgatory() {
  return (
    <div>
        <Slider />
        <div className='purgatory-div'>
            <p className='p'>
                <strong>
                NFTs (non-fungible tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. "Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.
                </strong>
            </p>
        </div>
        <Link to="/">
            <button className='button'> Acces Granted </button>
        </Link>
    </div>
  )
}

export default Purgatory