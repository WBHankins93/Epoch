import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Form,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import NavBar from '../NavBar'
import PicSlide from '../Carousel'
import FooterPage from '../Footer'
import './hompage.css';
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
 const HomepageHeading = ({ mobile }) => (
   <Container text>
     <Header
       as='h1'
       content='Welcome to Epoch.'
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
       content='The home of affordable luxury.'
       inverted
       style={{
         fontSize: mobile ? '1.5em' : '1.7em',
         fontWeight: 'normal',
         marginTop: mobile ? '0.5em' : '1.5em',
       }}
     />
     <Button inverted size='huge' href="/shop">
       SHOP NOW
     </Button>
   </Container>
 )

 HomepageHeading.propTypes = {
   mobile: PropTypes.bool,
 }

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment

            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              background='grey'
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <NavBar />

            </Menu>
            <HomepageHeading />

          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>

            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
      Shop Our Collection Today!
    </Header>
      <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={7}>

          <Image id="menWomen" bordered rounded size='large' src='https://precisionwatches.com/wp-content/uploads/2018/02/Omega-banner-precision-watches-new.jpg' />

        </Grid.Column>

        <Grid.Column floated='right' width={7}>
          <Image id="menWomen" bordered rounded size='large' src='http://www.americanswiss.co.za/docs/4308/Gifts%20LandingPageBanners2_x678_80.jpg' />
        </Grid.Column>

      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated='right' width={8}>
          <Button basic color='black' href="/shop" size='massive'>Shop Mens</Button>
        </Grid.Column>
        <Grid.Column floated='left' width={8}>
          <Button basic color='black' href="/shop" size='massive'>Shop Womens</Button>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '5em 0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image rounded className="gridPic"  src="https://cdn.squaremile.com/gallery/59ef6862637b4.jpeg" />
            <Header as='h3' style={{ fontSize: '2em' }}>
              <Button color='black' href="/shop" size='huge'>COLLECTIONS</Button>
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image rounded className="gridPic" src="https://images.askmen.com/1080x540/2016/08/15-030953-best_watch_straps.jpg" />
            <Header as='h3' style={{ fontSize: '2em' }}>
              <Button color='black' href="/shop" size='huge'>ACCESSORIES</Button>
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>

          <Image rounded className="gridPic" src="http://www.uncleseiko.com/uploads/7/6/8/5/76851891/s378755113293535586_p37_i2_w640.jpeg" />
            <Header as='h3' style={{ fontSize: '2em' }}>
              <Button color='black' href="/shop" size='huge'>SALE</Button>
            </Header>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
        <Grid.Column id="column1" style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Our Mission
          </Header>
          <p style={{ fontSize: '1em', paddingTop: '5%' }}>“To represent the most refined qualities of Western “Art de Vivre” (art of living) around the world; to be synonymous with both elegance and creativity; to blend tradition and innovation, and kindle dream and fantasy.”</p>
        </Grid.Column>
          <Grid.Column id="column2" style={{ paddingBottom: '5em', paddingTop: '5em', textAlign: 'center' }}>
          <div id="column2" style={{display:'inline-block'}}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Core Values
            </Header>
            <ul style={{ fontSize: '1em', paddingTop: '5%' }}>
              <li>Providing the best possible services to our retailers and consumers, and recognizing their importance to our continued success.</li><br/>
              <li>Constantly striving for excellence. We believe our people are critical to the achievement of this goal, and their continuous development is essential.</li><br/>
              <li>Treating everyone with respect, and making integrity the core of our actions and relationships. Striving to have employees, vendors and retailers feel like they are part of the same team.</li><br/>
            </ul>
          </div>
          </Grid.Column>

        </Grid.Row>
      </Grid>
      </Container>
    </Segment>

    <FooterPage />
  </ResponsiveContainer>
)

export default HomepageLayout;
