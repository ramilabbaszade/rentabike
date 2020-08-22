// import React from 'react';
// import { geolocated } from 'react-geolocated';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


// const DEFAULT_LATITUDE = 40.500;
// const DEFUALT_LANGITUDE = 48.500;

// class MapContainer extends React.Component {
//     render() {
//         const latitude = DEFAULT_LATITUDE;
//         const longitude = DEFUALT_LANGITUDE;
//         return (
//             <Map center={[latitude, longitude]} zoom={8} >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {
//                     !this.props.coords &&
//                     <div className="loading"> Loading ...</div>
//                 }
//                 {
//                     this.props.coords &&
//                     <Marker
//                         position={[latitude, longitude]} >
//                         <Popup>
//                             <div>You are here!</div>
//                         </Popup>
//                     </Marker>
//                 }

//             </Map >
//         )
//     }
// }

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 10000,
// })(MapContainer);

import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = (props) => {
    const DEFAULT_LATITUDE = 40.500;
    const DEFUALT_LANGITUDE = 48.500;
    return (
        <Map center={[DEFAULT_LATITUDE, DEFUALT_LANGITUDE]} zoom={8} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                props.coords ?
                    props.coords.map(mark => {
                        return <Marker
                            position={[mark.location.lat, mark.location.lng]} >
                            <Popup>
                                <div> {mark.title} </div>
                            </Popup>
                        </Marker>
                    }):null
            }
            {
                props.singleCoord ?
                <Marker
                    position={[props.singleCoord.lat, props.singleCoord.lng]} >
                    <Popup>
                        <div> {props.singleCoord.title} </div>
                    </Popup>
                </Marker> :null
            }

        </Map >
    )
}

export default MapContainer
