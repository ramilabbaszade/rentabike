import React from 'react'
import { useParams } from 'react-router-dom'
import BikeAdList from '../components/BikeAdList'

import {BIKES} from '../../data'

const BikeAd = () => {
    const bikeId = useParams().bikeId;
    const loadedBikes = BIKES.filter(bike => bike.id === bikeId)
    return (<BikeAdList items={loadedBikes} />
    )
}

export default BikeAd
