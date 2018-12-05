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
      </div>
    )
  }
}

export default ShoppingCart;
