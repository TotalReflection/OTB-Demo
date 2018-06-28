import React, { Component } from 'react';
import './App.css';
import bgimage from './assets/background.jpg'
import OfferControl from './components/OfferControl';
class App extends Component {
  render() {

    return ( 
      <div className="App" style ={ { backgroundImage: "url("+bgimage+")" } }>
        <OfferControl intialOrder={"price"} lang={"en"}/>
      </div>
    );
  }
}

export default App;
