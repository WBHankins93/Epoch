import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import './Carousel.css';

class PicSlide extends Component {
  render() {
    return(
      <div className="caroDisplay">
        <Carousel autoPlay>
        <div>
          <img src="https://xbiea28tts93kyji95usas99-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/rw1212-skeleton-collection-banner.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-300-480-2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-300-480-3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-300-480-4.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        </Carousel>
      </div>
    )
  }
}

export default PicSlide;
