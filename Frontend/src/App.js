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
      lat: 0,
      lng: 0
    };
  }

  update_location() {
    fetch('http://10.20.111.46:9292', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: this.state.name, lat: this.state.lat, lng: this.state.lng})
    })
      .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
      .catch(error => console.error(error));
  };

  enterName = (name) => {
    this.setState({name: name}, this.update_location)
    console.log("EnterName has been called!")
  };



  componentDidMount() { //make a call to a server and fetch the locations
    const _this = this
    navigator.geolocation.getCurrentPosition(
      function(location) {
        console.log("getting location..", location)
        _this.setState({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        });
      }
    )
  }

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
