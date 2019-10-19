import React, { Component } from 'react';
import Navbar from "./Navbar";
import '../../assets/scss/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header pt-3 position-relative bg-light" style={{top: 0, width: '100%', zIndex: 1}}>
                <div className="container">
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Header;
