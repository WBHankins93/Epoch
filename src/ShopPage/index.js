import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import './ShopCSS.css';
import FooterPage from '../Footer';
import WatchList from '../ShowWatches';
import NavBar from '../NavBar';


class ShopPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="watchBox">
          <h1>Shop Our Products!</h1>

            <div>
              <WatchList />
            </div>

        </div>

        <FooterPage />

      </div>
    );
  }
}


export default ShopPage;
