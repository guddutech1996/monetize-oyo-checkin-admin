import React, { Component } from "react"

class Banner extends Component{


    render(){
        console.log("banner img: ",this.props.banner.image_url);
        return(
        <div className="each-slide">
        <div  id="banner-width" style={{'backgroundImage': `url(${this.props.banner.image_url})`}}>
        </div>
        </div>
        )
    }

}

export default Banner;