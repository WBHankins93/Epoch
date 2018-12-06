import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import './ShopCSS.css';
import FooterPage from '../Footer';
import WatchList from '../ShowWatches';
import NavBar from '../NavBar';
import ShoppingCart from '../ShoppingCart';


class ShopPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="watchBox">
          <h1>Shop Our Products!</h1>
              <WatchList />
              <FooterPage />
        </div>



      </div>
    );
  }
}


export default ShopPage;
