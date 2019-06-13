import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapDisplay from './components/map.js'
import TypeInYourName from './components/user.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User..",
    };
  }

  enterName = (name) => {
    this.setState({name: name})
    console.log("EnterName has been called!")
  };

  render() {
    return (
      <div className="App">
        <TypeInYourName name={this.state.name} NameTypedIn={this.enterName}/>
        <MapDisplay name={this.state.name}/>
      </div>
    );
  }
}

export default App;
