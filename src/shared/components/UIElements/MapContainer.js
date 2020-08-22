import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import iconBike from '../../../assets/icons/bike1con.png'

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
                            <Popup>
                                <div> {mark.title} </div>
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
                            <div> {props.singleCoord.title} </div>
                        </Popup>
                    </Marker> : null
            }

        </Map >
    )
}

export default MapContainer
