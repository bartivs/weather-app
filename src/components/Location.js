import React,{ createRef} from "react"; 
import { MapContainer, TileLayer, Marker, Popup }  from 'react-leaflet';

const position = [51.505, -0.09];

export default class Location extends React.Component {

    constructor() {
        super()
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13
        }
        this.setCurrentPos=this.setCurrentPos.bind(this);
      }
      

      handleClick = () => {
        const map = this.mapRef.current
        if (map != null) {
          map.leafletElement.locate()
        }
      }
      handleLocationFound = (e) => {
        this.setState({
          hasLocation: true,
          latlng: e.latlng,
        })
      }
      
      render() {
        const position = [this.state.lat, this.state.lng];
        return (
        <div>
            <MapContainer center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            </Marker>
          </MapContainer>
          <button id='locate' className="button" onClick={()=>this.handleClick()}>Locate me!</button>
        </div>
        );
      }
  }

  