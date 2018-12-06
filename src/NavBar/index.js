import React, { Component } from 'react';
import { Button, Container, Menu, Segment, Icon, Image, Header, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render(){
    const mobile = '1em';
    return(
      <Menu
        fixed={'top'}
        background='grey'

        size='large'
      >
        <Container>
          <Menu.Item as='a' active>
            <Image style={{width: 180, height: 30, float: 'left'}} href="/" src="../images/EpochLogo_1.png"/>
          </Menu.Item>

          <Menu.Item href='/home'>Home</Menu.Item>
          <Menu.Item href='/shop'>Shop</Menu.Item>
          <Menu.Item position='right'>
            <Button basic color='black' href='/login' >
              Log in
            </Button>
            <Button basic color='black' href='/register' style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
          <Menu.Item href='/cart'><Icon name='shopping cart' color='black' size='large'/></Menu.Item>
        </Container>
      </Menu>
    )
}
}


  export default NavBar;
