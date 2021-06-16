import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu';

export class Header extends Component {
    render() {
        return <header className="main-header flex">
            
            <nav className="flex main-container">
                <div className="flex">
                <NavLink exact to="/"><h1 role="img" aria-label="logo">myteam</h1></NavLink>
                <NavLink exact to="/"><p>home</p></NavLink>
                <NavLink exact to="/about"><p>about</p></NavLink>
                </div>
                {/* <NavLink to="/login">Login</NavLink> */}
                {/* <NavLink exact to="/">User Reviews</NavLink>
                <NavLink to="/chat">Chat Room</NavLink> */}
                <div className="flex btn-container">
                <button className="btn-pill">contact us</button>
                </div>
            </nav>
           
        </header>
    }

}
