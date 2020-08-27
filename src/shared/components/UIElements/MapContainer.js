import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import iconBike from '../../../assets/icons/bike1con.png'

import './MapContainer.css'
import { Link } from 'react-router-dom';

const biker = new Icon({
    iconUrl: iconBike,
    iconSize: [38, 43]
})

const MapContainer = (props) => {
    const DEFAULT_LATITUDE = 40.500;
    const DEFUALT_LANGITUDE = 49.500;
    return (
        <Map style={props.mapStyle} center={[DEFAULT_LATITUDE, DEFUALT_LANGITUDE]} zoom={props.mapZoom || 7} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                props.coords ?
                    props.coords.map(mark => {
                        return <Marker
                            position={[mark.location.lat, mark.location.lng]}
                            icon={biker} >
                            <Popup className="popup">
                                <Link to={`/${mark.id}`} className="popup-container">
                                    <img src={mark.image} alt={mark.title}/>
                                    <div> {mark.title} ~ {mark.size}" ~ {mark.price}azn/s </div>
                                </Link>
                            </Popup>
                        </Marker>
                    }) : null
            }
            {
                props.singleCoord ?
                    <Marker
                        position={[props.singleCoord.lat, props.singleCoord.lng]}
                        icon={biker}
                    >
                        <Popup>
                            <div> {props.title} </div>
                        </Popup>
                    </Marker> : null
            }

        </Map >
    )
}

export default MapContainer
