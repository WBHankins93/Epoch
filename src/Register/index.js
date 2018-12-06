import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import NavBar from '../NavBar';

const RegisterForm = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <NavBar />
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 650 }}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src='./images/EpochLogo_1.png' /> Start a new account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='paper plane' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='paint brush'
              iconPosition='left'
              placeholder='Favorite Color'
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Name'
            />

            <Button color='black' fluid size='large' href="/home">
              Login
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  </div>
)

export default RegisterForm;
