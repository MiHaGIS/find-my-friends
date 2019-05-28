import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'

function Markers(props) {
  const markers = props.users.map((user) =>
    <Marker position={[user.lat, user.lng]}>
      <Popup>{user.name}</Popup>
    </Marker>
  )
  return markers
}

const people = [ // this from a server
  {
    "name": "Mike",
    "lat": 50.820,
    "lng": -0.137
  },{
    "name": "Rainer",
    "lat": 50.825,
    "lng": -0.132
  }
]

class MapDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      position: [50.82, -0.14]
    };
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
      <Markers users={people}/>
    </Map>
    </div>
  }
}

export default MapDisplay;
