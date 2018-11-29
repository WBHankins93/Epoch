import React, { Component } from 'react';
import './HomePage.css';
import NavBar from '../NavBar';
import PicSlide from '../Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FooterPage from '../Footer';


class HomePage extends Component {
  render(){

    return(
      <div>
        <NavBar />
        <PicSlide />

        <FooterPage />
      </div>
    )
  }
}

export default HomePage;
