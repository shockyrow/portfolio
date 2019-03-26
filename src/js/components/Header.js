import React, { Component } from 'react';
import Navbar from "./Navbar";
import '../../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header bg-warning pt-3">
                <div className="container">
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Header;
