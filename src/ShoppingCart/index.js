import React, {Component} from 'react';
import NavBar from '../NavBar';


class ShoppingCart extends Component {
  constructor(){
    super();

    this.state = {
      CartData: []
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 style={{'fontSize':'60px'}} >Shopping Cart</h1>
        <ul>
          <li>{this.CartData}</li>

        </ul>
        </div>

      </div>
    )
  }
}

export default ShoppingCart;
