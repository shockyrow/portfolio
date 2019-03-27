import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logo from '../../storage/img/is_logo_inverted.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow rounded">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} width="30" height="30" className="p-1" alt=""/>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about/">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/education/">
                                Education
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/experience/">
                                Experience
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/experience/">
                                Skills
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/experience/projects">
                                Projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/honors/">
                                Honors & Award
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact/">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
