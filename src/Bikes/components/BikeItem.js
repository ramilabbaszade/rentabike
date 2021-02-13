import React from 'react'
import { Link } from 'react-router-dom'
import manat from '../../assets/icons/mini-icons/manat.png'

import './BikeItem.css'

const BikeItem = props => {
    const MAX_LENGTH = props.maxLength || 24;
    return (
        <li onMouseEnter={props.handleHoverMarker ? ()=> props.handleHoverMarker(props.id):null} onMouseLeave={props.handleHoverMarker ?()=>props.handleHoverMarker(null):null} key={props.id} style={props.marginR && { marginRight: '.5rem' }} className="bike-item__container">
            <div className={`bike-item ${props.vertical && 'bike-item_vertical'}`}>
                <div className={`bike-item__image ${props.vertical && 'bike-item__image_vertical'}`}>
                    <Link to={`/b/${props.id}`}> <img className={`${props.vertical && 'bike-item_img_vertical'}`} src={props.image && props.image?.image_path} alt={props.title} /></Link>
                </div>
                <div className={`bike-item__content ${props.vertical && 'bike-item__content_vertical'}`}>
                    <div className="bike-item__content__header">
                        <small className="bike-item__content__date"> {props.date} </small>
                        <Link to={`/b/${props.id}`}><h2>{props.title.length < MAX_LENGTH ? props.title : `${props.title.substring(0, MAX_LENGTH)}...`} </h2></Link>
                        <hr className="bike-item-title__bottom-line" />
                        <div className="small-text">
                            {
                                props.accessories.length === 0 ? <span className="small-text">...</span> 
                                : props.accessories.map(acc => {
                                    return <span key={acc.id} id={acc.id} className="small-text"> {acc.name_az} · </span>
                                })
                            }
                        </div>
                        <div className="small-text">{props.type?.name_az} <span aria-hidden="false"> · </span>{props.size} <i className="fas fa-circle-notch"></i> </div>
                        <div className="small-text bike-item_views"><i className="fas fa-eye"></i> {props.views}</div>
                    </div>

                    <div className={`bike-item__content__footer ${props.vertical && 'bike-item__content__footer_vertical'}`}>
                        <div className="small-text bike-item__content__city"><i className="far fa-compass"></i> {props.city.name_az} </div>
                        <div className="bike-item__content__price"><b style={{ fontSize: '24px' }}>{props.price}</b><img className="azn-manat" src={manat} alt="azn"/>/s</div>
                    </div>
                </div>
            </div >
            <div key={props.id}>
                {props.children}
            </div>
            {
                !props.nonLine &&
                <hr className="bike-bottom-line" />
            }
        </li >
    )
}

export default BikeItem
