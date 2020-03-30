import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './slider-banner.css'
 
const slideImages = [
  '/entertainment.jpg',
  '/entertainment.jpg',


];
 
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
class SlideBanner extends Component {
    render(){
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div  id="banner-width" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div id="banner-width" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
    }
}
export default SlideBanner;