import React, { Component } from 'react'
import './header.css'
class Header extends Component{
    render(){
        return(
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <div class="login-container">
                    <form action="/action_page.php">
                    <input type="text" placeholder="Mobile Number" name="phoneNo"/>
                    <input type="text" placeholder="Booking ID" name="bookingId"/>
                    <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Header;