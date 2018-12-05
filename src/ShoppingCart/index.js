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
    e.preventDefault();
    swal(product.name + ' Has Been Added In Your Cart!');
    let jsonObj = {
      name: product.name,
      price: product.price,
      category: product.category,
      image_url: product.image_url,
    }
    try {
      const buyWatches = await fetch('http://localhost:9000/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(jsonObj),
        headers: {
          'Content-Type': 'application/json'
        }
      });
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
    let cartData;
    if(this.state.cartData.data) {


    cartData = this.state.cartData.data.map((product, index) => {

      return(
        <div key={product._id}>
        <button class="ui inverted black button">Delete</button>
          <p>{product.image_url}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>
      );
    })

  }
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
<FooterPage />
      </div>
    )
  }
}

export default ShoppingCart;
