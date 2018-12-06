import React from "react";
import { Header, Container, Grid, Segment, List, Item } from 'semantic-ui-react';
import './Footer.css';

class FooterPage extends React.Component {
render() {
return (

<div>
<Segment inverted vertical style={{ padding: '5em 0em' }}>
  <Container>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='About' />
          <List link inverted>
            <List.Item as='a'>Sitemap</List.Item>
            <List.Item as='a'>Contact Us</List.Item>
            <List.Item as='a'>Religious Ceremonies</List.Item>
            <List.Item as='a'>Gazebo Plans</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Services' />
          <List link inverted>
            <List.Item>Email: <a href="mailto:epoch@epochsales.com"  target="_blank" className="email-link">epoch@epochsales.com</a></List.Item>
            <List.Item as='a'>512-555-5555</List.Item>
            <List.Item as='a'>How To Access</List.Item>
            <List.Item as='a'>Favorite X-Men</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header style={{width: 75}} as='h4' inverted>
            <video style={{height: 140, width: 300, color: 'white'}} src="./images/epoch.mov"></video><br/>
          </Header>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
</Segment>
</div>
);
}
}


export default FooterPage;
