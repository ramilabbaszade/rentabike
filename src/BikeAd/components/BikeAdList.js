import React from 'react'
import BikeAdItem from './BikeAdItem'

const BikeAdList = (props) => {
    return (
        <div className="bike-ad">
            {props.items.map((bike) => {
                return <BikeAdItem
                    key={bike.id}
                    id={bike.id}
                    title={bike.title}
                    description={bike.description}
                    images={bike.image}
                    price={bike.price}
                    size={bike.size}
                    city={bike.city}
                    address={bike.address}
                    location={bike.location}
                    creator={bike.creator}
                />
            })}
        </div>
    )
}

export default BikeAdList
