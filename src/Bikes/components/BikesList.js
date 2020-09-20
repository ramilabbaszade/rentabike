import React from 'react'
import BikeItem from './BikeItem'

import './BikesList.css'

const BikesList = props => {
    if (props.items.length === 0) {
        return <h1>No Bikes found</h1>
    }

    return (
        <ul className="bikes-list">
            <div className="bike-filter">
                <select name="" id="">
                    <option value="Hey">Sıralama..</option>
                    <option value="Hey">Ən çox baxılan</option>
                    <option value="Hey">Ən son paylaşılan</option>
                </select>
                <select name="" id="">
                    <option value="Hey">Tipi</option>
                    <option value="Hey">Road</option>
                    <option value="Hey">Mountain</option>
                </select>
                <select name="" id="">
                    <option value="Hey">Şəhər</option>
                    <option value="Hey">Sumqayıt</option>
                    <option value="Hey">Bakı</option>
                </select>
                <select name="" id="">
                    <option value="Hey">Ölçü</option>
                    <option value="Hey">20</option>
                    <option value="Hey">24</option>
                </select>

                <hr className="bike-bottom-line"/>
            </div>
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
                />
            ))}
        </ul>
    )
}

export default BikesList
