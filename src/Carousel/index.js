import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import './Carousel.css';

class PicSlide extends Component {
  render() {
    return(
      <div className="caroDisplay">
        <Carousel  autoPlay>
        <div>
          <img src="http://www.watchkings.co.uk/wp-content/themes/watchkings/images/banner.jpg" />
          <p className="legend">Legend 1</p>
          <button className="SHOP">SHOP NOW</button>
        </div>
        <div>
          <img src="http://www.watchkings.co.uk/wp-content/themes/watchkings/images/banner.jpg" />
          <p className="legend">Legend 2</p>
          <button className="SHOP">SHOP NOW</button>
        </div>
        <div>
          <img src="https://royaljewelers.com/wp-content/uploads/2017/02/6-dress-watches-banner.jpg" />
          <p className="legend">Legend 3</p>
          <button className="SHOP">SHOP NOW</button>
        </div>
        <div>
          <img src="http://www.hislider.com/showcase/watches/dataimages/Breitling-IWC_opener_LG.jpg" />
          <p className="legend">Legend 4</p>
          <button className="SHOP">SHOP NOW</button>
        </div>
        </Carousel>
      </div>
    )
  }
}

export default PicSlide;

// https://xbiea28tts93kyji95usas99-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/rw1212-skeleton-collection-banner.jpg
