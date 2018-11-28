import React, { Component } from 'react';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">



        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={HomePage}/>

        </Switch>
      </div>
    );
  }
}

export default App;
