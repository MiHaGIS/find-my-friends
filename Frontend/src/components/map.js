import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'

function Markers(props) {
  const markers = Object.entries(props.users).map(([person, location]) =>
    <Marker position={[location.lat, location.lng]} key={person}>
      <Popup>{person}</Popup>
    </Marker>);
  return markers
};

class MapDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [this.props.lat, this.props.lng],
      people: {}
    };
  }

  componentWillMount() {
    fetch('http://192.168.0.20:9292')
      .then(response => response.json())
      .then(data => this.setState({people: data}));
  }

  componentDidMount() { //make a call to a server and fetch the locations
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
    return <div>
      <h1>Hello, { this.props.name }.</h1>
      <Map center={this.state.position} zoom={13} id="mapid">
        <TileLayer url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          maxZoom="18"
          id= 'mapbox.streets'
          accessToken= 'pk.eyJ1IjoibWloYWdpcyIsImEiOiJjanR5bWxld3YyZG9vNDRxbmlkMTRuOGVrIn0.IMviALsHDa4NJlHVvxbBuw'
        />
        <Markers users={this.state.people}/>
      </Map>
    </div>
  }
}

export default MapDisplay;
