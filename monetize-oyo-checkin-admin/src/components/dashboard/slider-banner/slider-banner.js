import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './slider-banner.css'
import Banner from '../banner';
 
 
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

    state = {
        slideBanners: [],
        index: 0 
    }
    render(){
        console.log("Banners prop is");
        console.log(this.props.banners);
        const banners = this.props.banners;
    return (
      <div className="slide-container">
        {<Slide {...properties}>
        {banners.map(banner => 
            <Banner banner = {banner}/>
        )}
        </Slide> 
        }
      </div>
    )
    }
}
export default SlideBanner;