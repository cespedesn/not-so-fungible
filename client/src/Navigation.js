import React, { useState, useContext } from 'react'
import { ThemeContext } from './App';
import Marquee from "react-fast-marquee";
import ReactSwitch from 'react-switch'
import Logout from './Logout';
import nsf_logo2 from './nsf_logo2.png'
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
} from 'reactstrap'




function Navigation({setCurrentUser}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {theme, toggleTheme} = useContext(ThemeContext);


  return (
    <div className='nav-parent'>
      <div className='marquee'>
          <Marquee speed={150}>
            <h6>Community marketplace on Jan-Michael VeChain network is here! .  .  |  .  . </h6>
            
            <h6>Beta access coming 2023</h6>
            .  .  .  .  .
            <h6>Community marketplace on Jan-Michael VeChain network is here! .  .  |  .  . </h6>
            
            <h6>Beta access coming 2023</h6>
          </Marquee>
      </div>
      <div >
      <Navbar >
        
        <NavbarBrand fixed='top' className='nav-text' href="/"><img className='nav-logo' src={nsf_logo2} alt='[not so] FUNgible'/></NavbarBrand>
        <NavbarToggler 
        color='default-color' light expand='md'
        onClick={toggle} />
        <Collapse className='nav-text' isOpen={isOpen} navbar>
          <Nav  navbar>
            <NavItem>
              <NavLink  href='/collections'><strong>View Collections</strong></NavLink>
            </NavItem>
            <NavItem>
              
            </NavItem>
            <NavItem>
              {/* <NavLink href='/nftplayground'>
              Create an NFT
              </NavLink> */}
            </NavItem>
            <UncontrolledDropdown className='nav-text' nav inNavbar>
              <DropdownToggle  nav caret>
                <strong>More</strong>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><NavLink href='/collectiontable'><strong>Description | Ratings | Reviews</strong></NavLink></DropdownItem>
                <DropdownItem><NavLink href='/collectionreview'><strong>Leave a Review</strong></NavLink></DropdownItem>
                <DropdownItem><NavLink href= '/wallet'><strong>My Wallet</strong></NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Logout setCurrentUser={setCurrentUser}/>
                  <br/>
                  <div className='network-div'>
                    <h6 className='network'><strong>Built on the Jan-Michael VeChain Network</strong></h6>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>nsFUN</NavbarText> */}
            <div className="switch">
                <label> 
                  {theme === "light" ? "Light Mode " : "Dark Mode "}
                </label>
                <ReactSwitch 
                onChange={toggleTheme}
                checked={theme === "dark"}
                />
                <br/>
            </div>
        </Collapse>
      </Navbar>
      </div>
    </div>
  )
}

export default Navigation