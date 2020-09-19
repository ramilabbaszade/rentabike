import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'
import BikeItem from '../../Bikes/components/BikeItem'

import './ProfileContainer.css'

const ProfileContainer = (props) => {
    return (
        <div className="profile_container">
            <div className="profile-header">
                <div className="profile-header__i">
                    <Avatar redirect="#" creatorImg={props.avatar} className="avatar-large" />
                    <div className="profile-header__confirmed">
                        <div className="profile-header__info_icon-container">
                            <i className="far fa-smile"></i>
                            <span> Yeni üzv </span>
                        </div>
                        <div className="profile-header__info_icon-container">
                            <i className="fas fa-check"></i>
                            <span>Hesab təsdiqləndi</span>
                        </div>
                    </div>

                    <div className="profile-header__editBtn">
                        <Link to='/'>
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>

            <div className="profile-body">
                <section className="profile-body__section1">
                    <h1> {props.name} </h1>
                    <small className="small-text">Qoşuldu: 01.08.2020</small>
                </section>
                <section className="profile-body__section2">
                    <h1 className="profile-body__section2_title">Haqqında</h1>
                    <p >{props.bio}</p>
                    <div className="icon-container">
                        <i className="fas fa-street-view"></i>
                        <div>{props.city}</div>
                    </div>
                </section>
                <hr className="bike-bottom-line" />
                <div className="profile-body__shared-bikes">
                    <h2 className='profile-body__title'>Aktiv elanlar</h2>
                    {props.bikes.length === 0 ? (
                        <h4>Bike not found</h4>
                    ) : (
                            props.bikes.map(bike => {
                                return <BikeItem
                                    id={bike.id}
                                    key={bike.id}
                                    title={bike.title}
                                    size={bike.size}
                                    city={bike.city}
                                    price={bike.price.first}
                                    creator={bike.creator}
                                    image={bike.images[0]}
                                    actionicons
                                >
                                    <div className="bike-item__action-icons">
                                        <Link to="/" className="bike-item__action-icon icon-edit">
                                            <i className="fas fa-pen"></i>
                                        </Link>
                                        <Link to='/' className="bike-item__action-icon icon-remove">
                                            <i className="fas fa-trash-alt"></i>
                                        </Link>
                                    </div>
                                </BikeItem>
                            }))}

                </div>
            </div>

        </div>
    )
}

export default ProfileContainer
