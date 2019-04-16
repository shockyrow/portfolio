import React, {Component, Fragment} from 'react';
import AboutMe from '../../assets/img/aboutme.png';
import Welcome from "../Components/Sections/Welcome";
import Navbar from "../Components/Navbar";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Welcome/>
                <Welcome/>
            </Fragment>
        );
    }
}

export default App;
