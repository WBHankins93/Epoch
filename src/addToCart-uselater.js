import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import './watches.css'

class WatchList extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  handleClick = (e, props, data) => {
    e.preventDefault();
    console.log('The button was clicked.', data);

    this.setState({
      data: props
    });
    this.addToCart.bind(null, this.setState.state.data)
  }

  addToCart = async (product, e) => {
    e.preventDefault();
    console.log(product)
    let jsonObj = {
      name: product.name,
      price: product.price,
      category: product.category,
      image_url: product.image_url
    }
    try {
      const addedProduct = await fetch('http://localhost:9000/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(jsonObj),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('added user', addedProduct)
    } catch(err){
      console.log('error')
      console.log(err)
    }
  }

  render() {
    const watches = [
    {
      name: "Xeric Halograph Chrono Sapphire Gunmetal Green",
      price: "$269.00",
      category: "men",
      image_url:"https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/5928/34410/xeric-halograph-chrono-sapphire-hgs-3021__10179.1513104857.jpg?c=2"
    },
    {
      name: "Xeric Halograph Chrono Sapphire Mesh Gunmetal Red",
      price: "$269.00",
      category: "men",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6584/38124/xeric-halograph-chrono-sapphire-hgs-3017-mesh__06578.1531322437.jpg?c=2"
    },
    {
      name: "Citizen Eco-Drive Calendrier Chrono Brown",
      price: "$300.00",
      category: "men",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/5953/34877/citizen-eco-drive-BU2020-29X__23252.1516727019.jpg?c=2"
    },
    {
      name: "Citizen Eco-Drive Promaster Nighthawk Blue Angels Stainless Steel",
      price: "$380.00",
      category: "men",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/5951/34879/citizen-eco-drive-BJ7006-56L__24900.1516727044.jpg?c=2"
    },
    {
      name: "Citizen Eco-Drive Proximity Connected All Black",
      price: "$415.00",
      category: "men",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/5912/34349/citizen-BZ1005-51E-Proximity__82604.1512761633.jpg?c=2"
    },
    {
      name: "Mr. Jones Last Laugh Tattoo Automatic 45mm",
      price: "$489.00",
      category: "men",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/5852/34000/mr-jones-last-laugh-tattoo-45mm-4__74016.1512860290.jpg?c=2"
    },
    {
      name: "Mr. Jones Number Cruncher Automatic",
      price: "$275.00",
      category: "men",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6493/38826/MrJones-Number-Cruncher-Automatic-Watch-95-P8-stand__58996.1535483437.jpg?c=2"
    },
 {
      name: "Mr. Jones Last Laugh Tattoo Automatic Ladies Edition 31mm",
      price: "$213.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/5040/28905/mr-jones-last-laugh-ladies-2-2__26524.1477680686.jpg?c=2"
    },
    {
      name: "Mr. Jones Hidden City Limited Edition",
      price: "$248.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6199/35709/mr-jones-hidden-city-93-V8-flat-2__20672.1520893284.jpg?c=2"
    },
    {
      name: "Shinola Canfield 38mm Polished Taupe",
      price: "$850.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/7041/40122/Shinola-Watch-S0120121834_CF2__54809.1540340968.jpg?c=2"
    },
    {
      name: "Shinola Runwell 36mm Double Wrap Blue Silver",
      price: "$55.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6933/39631/Shinola-Runwell-Doublewrap-watch-S0120109244_CF2__92650.1538613655.jpg?c=2"
    },
    {
      name: "Fossil ES4427 Carlie Teal Green Stainless Steel",
      price: "$155.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6852/39406/Fossil-Watch-ES4427__52001.1537380983.jpg?c=2"
    },
    {
      name: "G-Shock G-MS Solar Rose Gold",
      price: "$240.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6758/38955/Casio-G-shock-MSG-S200DG-4A__08675.1535495157.jpg?c=2"
    },
    {
      name: "Projects Tangency Black",
      price: "$135.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6144/35484/projects-Tangency_front_view__34268.1519934022.jpg?c=2"
    },
    {
      name: "Fossil Georgia Rose Gold Stainless Steel",
      price: "$145.00",
      category: "women",
      image_url: "https://cdn7.bigcommerce.com/s-z74psfow/images/stencil/300x300/products/6011/35104/fossil-ES3226_main__96543.1518018423.jpg?c=2"
    }
  ];
  const display = watches.map((item) => {
    return (
      <Card>
        <Image src={item.image_url} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{item.price}</span>
          </Card.Meta>
          <Card.Description>{item.category}</Card.Description>
          <Button color='green' onClick={this.handleClick}>Add to Cart</Button>
        </Card.Content>
      </Card>
    )
  })
    return(
      <div className="watchContainer">
      <Card.Group>
        {display}
      </Card.Group>
      </div>

    )
  }
}
export default WatchList;



<div>
<Footer style={{border:'4px solid black'}} className="font-small pt-4 mt-4">



<div className="ui grid size wholeFoot">
<div className="four wide column logoFoot">
  <img className="footerLogo" src="./images/EpochLogo_1.png"></img><br/>
  <p>
    Your time is now.
  </p>
</div>
<div className="four wide column">
  <p><a href="#">Blog</a></p>
  <p><a href="#">Careers</a></p>
  <p><a href="#">Join Us!</a></p>
</div>
<div className="four wide column">
  <h3>Customer Care</h3>
  <p>Order Status</p>
  <p>FAQs</p>
  <p>Warranty</p>

</div>
<div className="four wide column">
  <h3>Contact Us</h3>
  <p>Email: <a href="mailto:epoch@epochsales.com"  target="_blank" className="email-link">epoch@epochsales.com</a></p>
  <p>512-555-5555</p>

</div>
</div>
</Footer>
</div>



<Header inverted as='h4' content='About' />
<List link inverted>
  <List.Item as='a'>Sitemap</List.Item>
  <List.Item as='a'>Contact Us</List.Item>
  <List.Item as='a'>Religious Ceremonies</List.Item>
  <List.Item as='a'>Gazebo Plans</List.Item>
</List>
</Grid.Column>
<Grid.Column width={3}>
<Header inverted as='h4' content='Services' />
<List link inverted>
  <List.Item as='a'>Banana Pre-Order</List.Item>
  <List.Item as='a'>DNA FAQ</List.Item>
  <List.Item as='a'>How To Access</List.Item>
  <List.Item as='a'>Favorite X-Men</List.Item>
</List>
</Grid.Column>
<Grid.Column width={7}>
<Header style={{width: 75}} as='h4' inverted>
  <video style={{height: 140, width: 300, color: 'white'}} src="./images/epoch.mov"></video><br/>
</Header>












<div>
  <img style={{maxWidth:'50%'}} src={item.image_url} />

    <section>{item.name}</section>
    <p>
      <span className='date'>{item.price}</span>
    </p>
    <div>{item.category}</div>
    <Button color='green' item={item} value={this.state.data.name} onClick={this.handleClick}>Add to Cart</Button>

</div>
