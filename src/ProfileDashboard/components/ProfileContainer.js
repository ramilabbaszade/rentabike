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
                        <p> {props.bio} </p>
                        <p> {props.city} </p>
                    </div>
                </div>
                <Link  to='/me/edit'>
                    Edit
                    <i style={{marginLeft:'10px'}} className="fas fa-user-edit"></i>
                </Link>
            </div>

            <div className="profile-body">
                <h3>Shared Bikes</h3>
                <div className="profile-body__shared-bikes">
                    {props.bikes.map(bike=>{
                        return <BikeItem
                            id={bike.id}
                            key={bike.id}
                            title={bike.title}
                            size={bike.size}
                            city={bike.city}
                            price={bike.price.first}
                            creator={bike.creator}
                            image={bike.images[0]}
                        />
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProfileContainer
