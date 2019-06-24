import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, WMSTileLayer} from 'react-leaflet'
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
    return <div>
    <h1>Hello, { this.props.name }.</h1>
    <Map center={this.state.position} zoom={13} id="mapid">
      <WMSTileLayer url="http://localhost:8080/geoserver/gwc/service/wms?"
        layers="os_zoomstack-night"
        format="image/png"
        transparent="true"
      />
      <Markers users={people}/>
    </Map>
    </div>
  }
}

export default MapDisplay;
