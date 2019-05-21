import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer} from 'react-leaflet'
//import L from 'leaflet'

class Helloworld extends React.Component {
  constructor() {
    super();
    this.state = {
      position: [50.82, -0.14]
    };
  }

  componentDidMount() {
    const _this = this
    navigator.geolocation.getCurrentPosition(
      function(location) {
        console.log("getting location..", location)
        _this.setState({
          position: [location.coords.latitude, location.coords.longitude]
        });
      }
    )
  }

  render() {
    return <div><h1>Hello, {this.props.name}. We are at</h1>
    <Map center={this.state.position} zoom={13} id="mapid">
      <TileLayer url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        maxZoom="18"
        id= 'mapbox.streets'
        accessToken= 'pk.eyJ1IjoibWloYWdpcyIsImEiOiJjanR5bWxld3YyZG9vNDRxbmlkMTRuOGVrIn0.IMviALsHDa4NJlHVvxbBuw'
      />
      <Marker position={this.state.position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
    </div>
  }
}

export default Helloworld;
