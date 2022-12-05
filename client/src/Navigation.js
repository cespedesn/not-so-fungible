import React, { useState } from 'react'
import Logout from './Logout';
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




function Navigation({setCurrentUser}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='nav-parent'>
      <div >
      <Navbar>
        <NavbarBrand color='white' href="/">[not so] FUNgible</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="main-nav" navbar>
            <NavItem>
              <NavLink className='nav-text' href='/collections'>View Collections</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink href='/nftplayground'>
              Create an NFT
              </NavLink> */}
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='nav-text' nav caret>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><NavLink href='/collectiontable'>Description | Ratings | Reviews</NavLink></DropdownItem>
                <DropdownItem><NavLink href='/collectionreview'>Leave a Review</NavLink></DropdownItem>
                <DropdownItem><NavLink href= '/wallet'>My Wallet</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Logout setCurrentUser={setCurrentUser}/></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>nsFUN</NavbarText> */}
        </Collapse>
      </Navbar>
      </div>
    </div>
  )
}

export default Navigation