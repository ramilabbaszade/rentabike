import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'
import BikeItem from '../../Bikes/components/BikeItem'

import './ProfileContainer.css'

const ProfileContainer = (props) => {
    return (
        <div>
            <div className="profile-header">
                <div className="profile-header__i">
                    <Avatar creatorImg={props.avatar} className="avatar-large" />
                    <div className="profile-header__info">
                        <h2> {props.name} </h2>
                        <p className="profile-header__city"> <i className='fas fa-map-marker-alt'></i> {props.city} </p>
                        <p className='profile-header__bio'> {props.bio} </p>
                    </div>
                </div>
                <Link className="profile-header__edit-btn" to='/me/edit'>
                    Edit
                    <i style={{ marginLeft: '10px' }} className="fas fa-user-edit"></i>
                </Link>
            </div>

            <div className="profile-body">
                <h3 className='profile-body__title'>Shared Bikes</h3>
                <div className="profile-body__shared-bikes">
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
                                            <i class="fas fa-pen"></i>
                                        </Link>
                                        <Link to='/' className="bike-item__action-icon icon-remove">
                                            <i class="fas fa-trash-alt"></i>
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
