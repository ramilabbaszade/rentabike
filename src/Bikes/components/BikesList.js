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
                    type={bike.type}
                    views={bike.views}
                    size={bike.size}
                    accessories={bike.accessories}
                    price={bike.price.first}
                    creator={bike.creator}
                    date={bike.date}
                    maxLength={24}
                    handleHoverMarker={props.handleHoverMarker}
                />
            ))}
        </ul>
    )
}

export default BikesList
