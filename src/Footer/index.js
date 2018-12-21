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
            <List.Item><a href="https://github.com/WBHankins93/epoch">GitHub</a></List.Item>
            <List.Item><a href="https://ben_hankins.surge.sh">My Portfolio</a></List.Item>
            <List.Item>World Domination</List.Item>
            <List.Item>Gazebo Plans</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Contact' />
          <List link inverted>
            <List.Item>Email: <a href="mailto:epoch@epochsales.com"  target="_blank" className="email-link">epoch@epochsales.com</a></List.Item>
            <List.Item>512-555-5555</List.Item>
            <List.Item>600 Congress Ave. <br/>(Starbucks, not WeWork)</List.Item>
            <List.Item>Austin, TX 78701</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header style={{width: 75}} as='h4' inverted>
            <img style={{height: 90, width: 300, color: 'white'}} src="./images/epoch_footer.png"></img><br/>
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
