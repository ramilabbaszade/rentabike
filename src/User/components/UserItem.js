import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'

import './UserItem.css'

const UserItem = (props) => {
    return (
        <div className="user-item">
            <div className="user-item__header">
                <Avatar imageUrl={props.avatar} className="avatar-large" />
                <div className="user-item__header_main">
                    <h1>{props.fullName}</h1>
                    <p>{props.bio}</p>
                    <div className="user-item__header__city">
                        <i class="fas fa-map-marker-alt"></i>
                        {props.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem
