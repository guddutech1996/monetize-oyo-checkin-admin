import React, { Component } from 'react'
import SlideBanner from './slider-banner/slider-banner'
import Header from './header/header';
import Iconslist from './iconslist/iconslist';

class Dashboard extends Component{
    render(){
        return(
        <div>
            <Header/>
            <SlideBanner/>
            <Iconslist/>
        </div>
        )
    }
}

export default Dashboard;