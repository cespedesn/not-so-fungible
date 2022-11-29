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
    <div>
      <Navbar >
        <NavbarBrand href="/">Not So FUNgible</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href='/nftplayground'>Create an NFT!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                <Logout setCurrentUser={setCurrentUser}/>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><NavLink href='/collectiontable'>NFT Collections</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><NavLink href='/wallet'>My Wallet</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation