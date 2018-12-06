import React, { Component } from 'react';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ShoppingCart from './ShoppingCart';
import LoginForm from './Login';
import RegisterForm from './Register';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">


      <Provider>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/cart" component={ShoppingCart}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/register" component={RegisterForm}/>
        </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
