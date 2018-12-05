import React, { Component } from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <img class="image" alt="" src="../images/EpochLogo_1.png" />
      </div>
        <p>"A period of time in history or a person's life, typically one marked by notable events or particular characteristics."</p>

        <br/>
        <br/>

          <div>
          <Button href="/home" size='massive'>Enter</Button>
          </div>

      </div>
    );
  }
}

export default LandingPage;
