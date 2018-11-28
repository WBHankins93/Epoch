import React, { Component } from 'react';
import { Navbar, Header, Brand, NavItem, Nav } from 'react-bootstrap';


class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
  </Nav>
</Navbar>
      </div>
    )
  }
}

export default NavBar;
