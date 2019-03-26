import React, { Component } from 'react';
import '../css/App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import UnderConstruction from '../storage/img/construction.jpg';
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
            <About/>
        </div>
      </div>
    );
  }
}

export default App;
