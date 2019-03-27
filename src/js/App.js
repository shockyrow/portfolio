import React, {Component} from 'react';
import '../css/App.scss';
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <div className="container">
                    <Welcome/>
                    <About/>
                    <Skills/>
                </div>
            </div>
        );
    }
}

export default App;
