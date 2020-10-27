import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import iconBike from '../../../assets/icons/bike1con.png'

import './MapContainer.css'
import { Link } from 'react-router-dom';

const MapContainer = (props) => {
    const DEFAULT_LATITUDE = 40.500;
    const DEFUALT_LANGITUDE = 49.500;
    const MAX_LENGTH = 24;
    const biker = new Icon({
        iconUrl: iconBike,
        iconSize: [38, 43]
    })
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
                                icon={biker}
                                opacity={props.isHovered === mark.id ? .7 :1}
                                key={mark.id} >
                                <Popup className="popup">
                                    <Link to={`/b/${mark.id}`} className="popup-container">
                                        <img src={mark.images[0]} alt={mark.title} />
                                        <div className="popup-container__title">
                                            <h3> {mark.title.length < MAX_LENGTH ? mark.title : `${mark.title.substring(0, MAX_LENGTH)}...`} </h3>
                                            {mark.size}" · {mark.price.first}azn/s
                                    </div>
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
                        key={props.id}
                    >
                        <Popup className="popup">
                            <div className="popup-container">
                                <img src={props.images[0]} alt={props.title} />
                                <div className="popup-container__title">
                                    <h3> {props.title.length < MAX_LENGTH ? props.title : `${props.title.substring(0, MAX_LENGTH)}...`} </h3>
                                    {props.size}" · {props.price.first}azn/s
                            </div>
                            </div>
                        </Popup>
                    </Marker> : null
            }

        </Map >
    )
}

export default MapContainer
