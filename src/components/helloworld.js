import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]


class Helloworld extends React.Component {
  render() {
    return <div><h1>Hello, {this.props.name}</h1>
    <Map center={position} zoom={13} id="mapid">
      <TileLayer url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        maxZoom="18"
        id= 'mapbox.streets'
        accessToken= 'pk.eyJ1IjoibWloYWdpcyIsImEiOiJjanR5bWxld3YyZG9vNDRxbmlkMTRuOGVrIn0.IMviALsHDa4NJlHVvxbBuw'
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
    </div>
  }
}

export default Helloworld;
