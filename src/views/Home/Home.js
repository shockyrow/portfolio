import React, {Component} from 'react';
import '../../assets/scss/Home.scss';
import Skills from "../../components/Skills";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Skills/>
            </div>
        );
    }
}

export default Home;
