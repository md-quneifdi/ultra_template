import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor  } 
from './NavbarStyle';

const Navbar = () => {
    return (
      <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>                
                
                <UlList>
                    <ListItem><NavLink to="/" className="link">Home</NavLink></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><NavLink className="link" to="/contact">Contact</NavLink></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    );
}

export default Navbar;
