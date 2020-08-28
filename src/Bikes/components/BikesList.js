import React from 'react'
import BikeItem from './BikeItem'

import './BikesList.css'

const BikesList = props => {
    if(props.items.length===0){
        return <h1>No Bikes found</h1>
    }
    
    return (
        <ul className="bikes-list">
            {props.items.map((bike)=> (
                <BikeItem
                    key={bike.id}
                    id = {bike.id}
                    image = {bike.images[0]}
                    title = {bike.title}
                    city = {bike.city}
                    size = {bike.size}
                    price = {bike.price.first}
                    creator = {bike.creator}
                />
            ))}
        </ul>
    )
}

export default BikesList
