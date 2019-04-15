import React, {Component, Fragment} from 'react';
import AboutMe from '../../assets/img/aboutme.png';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-light rounded shadow my-2">
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
                </div>
            </Fragment>
        );
    }
}

export default App;
