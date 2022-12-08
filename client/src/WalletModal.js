import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Confetti from 'react-confetti'

function WalletModal() {
    const [modal, setModal] = useState(false);
    const [btn, setBtn] = useState(false)
    const [dimension, setDimension] = useState({
      width: window.outerWidth,
      height: window.outerHeight
    })
    
    const detectSize = () => {
      setDimension({ 
        width: window.outerWidth, 
        height: window.outerHeight})
    }
    
    useEffect(() => {
      window.addEventListener('resize', detectSize)
      return () => {
        window.removeEventListener('resize', detectSize)
      }
    }, [])
    
    
    const toggle = () => setModal(!modal);
    
    const confettiToggle = () => {
      setBtn(!btn)
    }

  return (
    <div>
        <Button 
        color="primary" onClick={toggle}>
        Waitlist
        </Button>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader
        className='modal-img' 
        toggle={toggle}> <strong>[not so] FUNgible</strong>
        </ModalHeader>
        <ModalBody>
        For optimal user functionality, usability, reliability, and compatibility backend beta testing on user wallets is still in progress. Please join the waitlist to recieve updates on user wallet progress. 
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={confettiToggle}>
            Join waitlist
            </Button>{' '}
            {btn && <Confetti  
              width={dimension.width} 
              height={dimension.height}
              tweenDuration={500}
            />}
            <Button color="secondary" onClick={toggle}>
            Cancel
            </Button>
        </ModalFooter>
        </Modal>
    </div>
  )
}

export default WalletModal