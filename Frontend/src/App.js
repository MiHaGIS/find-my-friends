import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapDisplay from './components/map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapDisplay name='Mike'/>
      </div>
    );
  }
}

export default App;
