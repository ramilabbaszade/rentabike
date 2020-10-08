import React from 'react'
import BikeItem from './BikeItem'

import './BikesList.css'

const BikesList = (props) => {
    if (props.items.length === 0) {
        return <h2>Elan tapılmadı</h2>
    }

    return (
        <ul className="bikes-list">
            {props.items.map((bike) => (
                <BikeItem
                    key={bike.id}
                    id={bike.id}
                    image={bike.images[0]}
                    title={bike.title}
                    city={bike.city}
                    size={bike.size}
                    price={bike.price.first}
                    creator={bike.creator}
                    maxLength={24}
                />
            ))}
        </ul>
    )
}

export default BikesList
