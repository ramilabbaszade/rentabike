import React from 'react'
import sellerProfile from '../../assets/img/android_to_browser_fqrxz-eH548_IMG_-zewlsn(1).jpg'
import Avatar from '../../shared/components/UIElements/Avatar'

import './BikeItem.css'

const BikeItem = props => {
    return (
        <div className="bike-item">
            <div className="bike-item__image">
                <img src={props.image} alt="" />
            </div>
            <div className="bike-item__content">
                <Avatar className="avatar-small" imageUrl={sellerProfile} />
                <div className="bike-item__content-text">
                    <div className="bike-item__content-subtext">
                        <h3>{props.title}</h3>
                        {props.city}, {props.size}*
                    </div>
                    <div className="bike-item__content-price"> {props.price}azn/s </div>
                </div>
            </div>
        </div>
    )
}

export default BikeItem
