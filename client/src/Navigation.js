import React, { useState, useContext } from 'react'
import { ThemeContext } from './App';
import ReactSwitch from 'react-switch'
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
  const {theme, toggleTheme} = useContext(ThemeContext);


  return (
    <div className='nav-parent'>
      <div >
      <Navbar >
        <NavbarBrand fixed='top' className='nav-text' href="/"><img className='nav-logo' src='https://previews.dropbox.com/p/thumb/ABu77kNauS5YjjRicRN3moKjKkYUeaxJ5l57xhuT95gieUAvh8VhwTyJ8iG6hkZEAf8yVJvk_EbjkXy7bT6Cc-r8YvFDYksJLUyVQgvTNuKLUEmsmQjf56LoLH5Tt-YC6n69uAUc6tyctOc-Qpj7J-mb0KEAe-ls2_g2HbCnIeB0t4coXDPqPojsQbHTHbhUjHMvg8JJms8ZxWh8FJZoOOlcR4En8rU8lt_8MekAlmuwLVINxYO7kydTplE5PvFUmxud_EB7m1gCaxNxSMuc7d9j_LJHii7hZbY_s3bS8PYZv5dU8Az4-es60fj5BB20dQzvMNIVqnAvCS5FpTOazrS0ejaDboDFJBC0Zbf_vo3fjHCeD_s1D08LzDueTvq7HFA/p.png' alt='[not so] FUNgible'/></NavbarBrand>
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