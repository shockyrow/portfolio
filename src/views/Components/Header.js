import React, { Component } from 'react';
import Navbar from "./Navbar";
import '../../assets/scss/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header pt-3 bg-light position-absolute" style={{top: 0, width: '100%'}}>
                <div className="container">
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Header;
