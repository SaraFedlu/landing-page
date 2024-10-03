import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavItem>Our features</NavItem>
        <NavItem>Areas</NavItem>
      </NavMenu>
      <NavMenu>
        <NavItem>FAQs</NavItem>
        <NavItem>The wishlist</NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #000;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 10px;
`;

const NavItem = styled.a`
  color: white;
  cursor: pointer;
  padding-left: 100px;
`;

export default Navbar;
