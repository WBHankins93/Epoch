import React, { Component } from 'react';
import '../App.css';
import { Button, Link } from 'semantic-ui-react';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <a href="/home"><img class="image" alt="" src="../images/EpochLogo_1.png" /></a>
      </div>

      <div>
        <p style={{marginTop:'5%'}}>"A period of time in history or a person's life, typically one marked by notable events or particular characteristics."</p>
      </div>

        <br/>
        <br/>



      </div>
    );
  }
}

export default LandingPage;
