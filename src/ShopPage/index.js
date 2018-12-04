import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ShopCSS.css';
import FooterPage from '../Footer';
import WatchList from '../ShowWatches';

class ShopPage extends Component {
  render() {
    return (
      <div className="watchBox">
        <h1>Shop Our Products!</h1>

          <div>
            <WatchList />
          </div>

        <FooterPage />
      </div>
    );
  }
}


export default ShopPage;
