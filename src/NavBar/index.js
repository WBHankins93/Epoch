import React, { Component } from 'react';
import { Menu, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Segment>
        <Menu fixed='top' size='large'  >
          <Menu.Item>
            <img className="logoTitle" src="./images/EpochLogo_1.png"></img>
          </Menu.Item>
          <div className='search-input'>

          </div>
          <Menu.Menu position='right'>
            <Menu.Item>
            <Link to='/cart'>
            <Icon className='cursor' size='large' name='shop' />
            </Link>
            {this.props.cartLength > 0 && <Label size='mini' color='red' >{this.props.cartLength}</Label> }
            </Menu.Item>
            <Menu.Item>

            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
      </div>
    )
  }
}

export default NavBar;
