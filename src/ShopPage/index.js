import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ShopCSS.css';
import NavBar from '../NavBar';
import FooterPage from '../Footer';
import ItemList from '../ItemList';


export class ShopPage extends Component {
  render() {
    return (
      <div>
        <NavBar />

          <div className="">
            <ItemList />
          </div>

        <FooterPage />
      </div>
    );
  }
}


export default ShopPage;
