import React, { Component } from 'react';
import './App.css';
import OfferControl from './components/OfferControl';

class App extends Component {
  render() {
    return ( 
      <div className="offersApp" style ={ { backgroundImage: "url(./assets/background.jpg)" } }>
        <OfferControl intialOrder={"price"} lang={"en"}/>
      </div>
    );
  }
}

export default App;
