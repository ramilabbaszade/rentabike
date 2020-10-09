import React from 'react'
import { useParams } from 'react-router-dom'

import { USER } from '../../data'
import UpdateBikeForm from './UpdateBikeForm';

const UpdateBike = () => {
    const bikeId = useParams().bId;
    const loadedBikes = USER.bikes.filter(bike => bike.id === bikeId)
    return (<div> {
        loadedBikes.map(item => {
            return  <UpdateBikeForm bike={item} />
        })}
    </div>)
}
export default UpdateBike
