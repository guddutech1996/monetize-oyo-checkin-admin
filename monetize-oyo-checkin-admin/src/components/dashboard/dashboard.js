import React, { Component } from 'react'
import SlideBanner from './slider-banner/slider-banner'

class Dashboard extends Component{

    state = {
        loading:  true,
        response: null,
        banners: [],
        services: []
    }
    async componentDidMount(){
        const url = "https://api.myjson.com/bins/1eprzw";
        const response = await fetch(url);
        const data = await response.json();
        console.log("response is");
        console.log(data);
            this.setState({
                banners: data.banners,
                services:  data.services
            })
    }

    render(){
        return(
            <div>
            <SlideBanner banners = {this.state.banners}/>
        </div>
        )
    }
}

export default Dashboard;