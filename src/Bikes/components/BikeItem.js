import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'

import './BikeItem.css'

const BikeItem = props => {
    return (
        <div className="bike-item">
            <div className="bike-item__image">
                <img src={props.image} alt="" />
            </div>
            <Link to={`/${props.id}`}>
                <div className="bike-item__image-gradient"></div>
            </Link>
            <div className="bike-item__content">
                <Avatar redirect={`/user/${props.creator.id}`} className="avatar-small" creatorImg={props.creator.avatar} />
                <div className="bike-item__content-text">
                    <div className="bike-item__content-subtext">
                        <h3>{props.title}</h3>
                        {props.city}, {props.size}"
                    </div>
                    <div className="bike-item__content-price"> <b>{props.price}</b>azn/s </div>
                </div>
            </div>
        </div >
    )
}

export default BikeItem
