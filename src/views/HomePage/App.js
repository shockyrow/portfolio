import React, {Component, Fragment} from 'react';
import AboutMe from '../../assets/img/aboutme.png';

class App extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top p-0">
                    <button className="navbar-toggler ml-auto btn btn-lg btn-dark border-0 border-dark" type="button" data-toggle="collapse"
                            data-target="#navbarMenu" aria-controls="navbarMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarMenu">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item btn-lg active">
                                <a className="nav-link" href={""}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn-lg" href={"#"}>
                                    About Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="min-vh-100 d-flex justify-content-center align-items-center">
                    <div className="p-3">
                        <img src={AboutMe} className="w-100" alt=""/>
                    </div>
                    <div className="bg-dark rounded shadow p-3">
                        Hello!
                    </div>
                </div>

                <div className="min-vh-100 d-flex justify-content-center align-items-center">
                    <div className="p-3">
                        <img src={AboutMe} className="w-100" alt=""/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
