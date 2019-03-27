import React, { Component } from 'react';
import Navbar from "./Navbar";
import '../../css/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header pt-3 bg-warning">
                <div className="container">
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Header;
