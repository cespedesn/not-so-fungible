import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap'

function Footer() {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='footer'>
        <div >
            <Navbar >
                <NavbarBrand  
                href="/">
                <img
                className='logo' 
                src='https://previews.dropbox.com/p/thumb/ABuBjpMutCJEm5jJ5t5cGJ4nJO8ZhAlff7_6Kk1HHV0wcDoe0bFHt2cayWBCsAzCIf617232wPUugseSAJEgrYfPMo3ho_2P7msWgnljWk8Egp3hdPhcqDvFEW0PwaAQ7N8iT4e1ltUpsQgqYVgtIBvRnfKsffEtuUuipKJG3sEJ2qQiSF-lFv1lx9C6L3vSTm1RwR72tz8fV0PcrzPUcvRQoJIoRR1NjbbswQZ1eS6Od31Ecr9PbQ4SlfXUyiMDOD1gqkxjDfB-cX_rAdrw3pL7ux-W0iQ7WAZoeNHJHv1IuDv3WngBgtOphfisGym6ZOgEqgZmCDGhaeNZU3PWJzBsRZ9Mnf5iXSJ5A_WY8QWMdBPNvAvR5mYM-6yQ1ULXKnk/p.png' alt='[not so] FUNgible'/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                    <NavLink href='/collections'>View Collections</NavLink>
                    </NavItem>
                    <NavItem>
                    {/* <NavLink href='/nftplayground'>
                    Create an NFT
                    </NavLink> */}
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        More
                    </DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem><NavLink href='/collectiontable'>Description | Ratings | Reviews</NavLink></DropdownItem>
                        <DropdownItem><NavLink href='/collectionreview'>Leave a Review</NavLink></DropdownItem>
                        <DropdownItem><NavLink href= '/wallet'>My Wallet</NavLink></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem></DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>nsFUN</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    </div>
  )
}

export default Footer