import React, {Component} from 'react';
import '../css/App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <div className="container">
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/about/" component={About}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
