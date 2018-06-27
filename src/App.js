import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OfferControl from './components/OfferControl';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <OfferControl intialOrder={"price"} lang={"en"}/>
      </div>
    );
  }
}

export default App;
