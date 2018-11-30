import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ShopCSS.css';
import NavBar from '../NavBar';
import FooterPage from '../Footer';


export class ShopPage extends Component {
  render() {
    return (
      <div>
        <NavBar />

          <div>
            height: 90%;
            width: 90%;
          </div>

        <FooterPage />
      </div>
    );
  }
}


export default ShopPage;
