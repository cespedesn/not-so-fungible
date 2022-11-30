import React, { useState } from 'react'
import Logout from './Logout';
import { Link } from 'react-router-dom';
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
    <div>
      <Navbar >
        <NavbarBrand href="/">[not so] FUNgible</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href='/collections'>View Collections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/nftplayground'>
              Create an NFT
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><NavLink href='/collectiontable'>Collection Ratings</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><NavLink href='/wallet'>My Wallet</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Logout setCurrentUser={setCurrentUser}/></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation