import React from 'react'
import BikesList from '../components/BikesList'
import MapContainer from '../../shared/components/UIElements/MapContainer'
import {BIKES} from '../../data'

import './Bikes.css'

const Bikes = () => {
    return <div className="bikes-page">
        <BikesList items={BIKES} />
        <div className="bikes-map">
            <MapContainer coords={BIKES} mapZoom={9}/>
        </div>
    </div>
}

export default Bikes
