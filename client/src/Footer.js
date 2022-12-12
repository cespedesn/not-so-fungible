import React, { useState, useContext } from 'react'
import Marquee from "react-fast-marquee"
import { ThemeContext } from './App';
import ReactSwitch from "react-switch"
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
  } from 'reactstrap'

function Footer() {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className='footer'>
        <Navbar >
            <NavbarBrand  
            href="/">
            <img
            className='logo' 
            src='https://previews.dropbox.com/p/thumb/ABu77kNauS5YjjRicRN3moKjKkYUeaxJ5l57xhuT95gieUAvh8VhwTyJ8iG6hkZEAf8yVJvk_EbjkXy7bT6Cc-r8YvFDYksJLUyVQgvTNuKLUEmsmQjf56LoLH5Tt-YC6n69uAUc6tyctOc-Qpj7J-mb0KEAe-ls2_g2HbCnIeB0t4coXDPqPojsQbHTHbhUjHMvg8JJms8ZxWh8FJZoOOlcR4En8rU8lt_8MekAlmuwLVINxYO7kydTplE5PvFUmxud_EB7m1gCaxNxSMuc7d9j_LJHii7hZbY_s3bS8PYZv5dU8Az4-es60fj5BB20dQzvMNIVqnAvCS5FpTOazrS0ejaDboDFJBC0Zbf_vo3fjHCeD_s1D08LzDueTvq7HFA/p.png' alt='[not so] FUNgible'/></NavbarBrand>
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
                    <DropdownItem> <Logout /> </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
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
        <div className='marquee'>
          <Marquee speed={150}>
            <h6>Community marketplace on Jan-Michael VeChain network is here! .  .  |  .  . </h6>
            
            <h6>Beta access coming 2023</h6>
            .  .  .  .  .
            <h6>Community marketplace on Jan-Michael VeChain network is here! .  .  |  .  . </h6>
            
            <h6>Beta access coming 2023</h6>
          </Marquee>
        </div>
    </div>
  )
}

export default Footer

