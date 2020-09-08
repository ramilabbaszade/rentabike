import React from 'react'
import { USER } from '../../data'
import ProfileContainer from '../components/ProfileContainer'

import '../components/ProfileContainer.css'

const ProfileDashboard = () => {
    return (
        <div className="profile-dashboard container">
            <ProfileContainer
                id={USER.id}
                key={USER.id}
                name={USER.name}
                bio={USER.bio}
                avatar={USER.avatar}
                city={USER.city}
                bikes={USER.bikes}
            />
        </div>
    )
}

export default ProfileDashboard
