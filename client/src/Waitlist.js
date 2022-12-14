import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Waitlist() {
const [modal, setModal] = useState(false);
const [btn, setBtn] = useState(false)
const [dimension, setDimension] = useState({
  width: window.innerWidth,
  height: window.innerHeight
})

const detectSize = () => {
  setDimension({ 
    width: window.innerWidth, 
    height: window.innerHeight})
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
            All collections will be releasing in 2024. Stay ahead of the game and join the waitlist. 
            Those who join the waitlist will receive notifications from the developers working on each collection.
            Aside from notifications, users will also receive priority status for presales in 2024.
            Don't waste any time and join today!
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

export default Waitlist