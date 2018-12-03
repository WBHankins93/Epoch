import React, { Component } from 'react';
import { Container, Menu, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  super(){
    return(
      <Container text>
          <Header
            as='h1'

            content='Shop Epoch Today!'
            inverted
            style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: mobile ? '1.5em' : '3em',
            }}
          />
          <Header
            as='h2'
            content=''

            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          <Button primary href="/shop" size='huge'>
            Start Here
            <Icon name='right arrow' />
          </Button>
        </Container>


    )



  export NavBar;
