import React, { Component } from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <img class="image" alt="" src="https://media.giphy.com/media/874Z2F7ZmX1GWbRaWw/giphy.gif" />
      </div>
        <p>"A period of time in history or a person's life, typically one marked by notable events or particular characteristics."</p>



        <br/>
        <br/>
          <div>
            <Button class='ui primary button' role='button'>
              Primary
            </Button>
            <Button class='ui secondary button' role='button'>
              Secondary
            </Button>
          </div>
          <div>
          <Button size='massive'>Massive</Button>
          </div>

      </div>
    );
  }
}

export default LandingPage;
