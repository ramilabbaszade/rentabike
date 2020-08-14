import React from 'react'
import sellerProfile from '../../assets/img/android_to_browser_fqrxz-eH548_IMG_-zewlsn(1).jpg'

import './BikeItem.css'

const BikeItem = props => {
    return (
        <div className="bike-item">
            <div className="bike-item__image">
                <img src={props.image} alt="" />
            </div>
            <div className="bike-item__content">
                <img className="bike-item__content-renterImg" src={sellerProfile} alt="profile" />
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
