import React from 'react'
import BikeAdItem from './BikeAdItem'

const BikeAdList = (props) => {
    return (
        <div className="bike-ad container">
            {props.items.map((bike) => {
                return <BikeAdItem
                    key={bike.id}
                    id={bike.id}
                    title={bike.title}
                    description={bike.description}
                    images={bike.images}
                    price={bike.price}
                    views={bike.views}
                    type={bike.type}
                    size={bike.size}
                    date={bike.date}
                    city={bike.city}
                    accessories={bike.accessories}
                    address={bike.address}
                    location={bike.location}
                    creator={bike.creator}
                />
            })}
        </div>
    )
}

export default BikeAdList
