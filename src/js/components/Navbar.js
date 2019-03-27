import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logo from '../../storage/img/is_logo_inverted.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg rounded">
                <a className="navbar-brand" href="#">
                    <img src={Logo} width="30" height="30" className="p-1" alt=""/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Education
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Experience
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Honors & Award
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
