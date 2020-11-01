import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BikeAdList from '../components/BikeAdList'

import { BikesContext } from '../../shared/context/BikesContext'

const BikeAd = () => {
    const {bikes} = useContext(BikesContext)

    const bikeId = useParams().bikeId;
    const loadedBikes = bikes.filter(bike => bike.id === bikeId)
    return (<BikeAdList items={loadedBikes} />
    )
}

export default BikeAd
