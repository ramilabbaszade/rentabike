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
                    imageUrl={bike.image}
                    price={bike.price}
                    size={bike.size}
                />
            })}
        </div>
    )
}

export default BikeAdList
