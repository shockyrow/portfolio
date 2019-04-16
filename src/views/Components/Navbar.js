import React, {Component, Fragment} from 'react';
import Logo from '../../assets/img/is_logo.png';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-lg fixed-top rounded-0">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} width="30" height="30" alt=""/>
                        </a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ml-auto">
                                <a className="nav-item nav-link" href="#">
                                    Home
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    About
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    Educations
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    Experiences
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;
