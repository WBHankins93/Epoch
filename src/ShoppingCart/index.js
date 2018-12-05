import React, {Component} from 'react';
import NavBar from '../NavBar';
import swal from '@sweetalert/with-react';
import FooterPage from '../Footer'


class ShoppingCart extends Component {
  constructor(){
    super();

    this.state = {
      cartData: []
    }
  }

  addToCart = async (product, e) => {
    try {
      const buyWatches = await fetch('http://localhost:9000/');
      const buyJson = await buyWatches.json();
      console.log(buyJson, 'RUNITUP');
      return buyJson;
    } catch(err){
      console.log('error')
      console.log(err)
    }
  }

  componentDidMount() {
    this.addToCart().then((data) => {
      this.setState({
        cartData: data
      })
    }).catch((err) => {
      console.log(err);
    })
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
        <h1 style={{'fontSize':'60px', color:'white'}} >Shopping Cart</h1>
        <ul>

        </ul>
        </div>
<FooterPage />
      </div>
    )
  }
}

export default ShoppingCart;
