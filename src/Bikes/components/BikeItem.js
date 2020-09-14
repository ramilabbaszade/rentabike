import React from 'react'
import { Link } from 'react-router-dom'

import './BikeItem.css'

const BikeItem = props => {
    return (
        <li className="bike-item__container">
            <div className="bike-item">
                <div className="bike-item__image">
                    <Link to={`/${props.id}`}> <img src={props.image} alt={props.title} /></Link>
                </div>
                <div className="bike-item__content">
                    <div className="bike-item__content__header">
                        <small className="bike-item__content__date">01.11.2020</small>
                        <Link to={`/${props.id}`}><h2>{props.title}</h2></Link>
                        <hr className="bike-item-title__bottom-line" />
                        <div className="small-text">Bike<span aria-hidden="false"> · </span>Road<span aria-hidden="false"> · </span>{props.size}" </div>
                        <div className="small-text"> Helmet<span aria-hidden="false"> · </span>Light<span aria-hidden="false"> · </span>Horn </div>
                    </div>

                    <div className="bike-item__content__footer">
                        <div className="small-text bike-item__content__city"><i class="far fa-compass"></i> {props.city} </div>
                        <div className="bike-item__content__price"><b style={{ fontSize: '24px' }}>${props.price}</b>/s</div>
                    </div>
                </div>
            </div >
            <hr className="bike-bottom-line" />
        </li>
    )
}

export default BikeItem
