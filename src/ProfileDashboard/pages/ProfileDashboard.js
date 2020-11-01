import React, { useContext } from 'react'
import { UserContext } from '../../shared/context/UserContext'
import ProfileContainer from '../components/ProfileContainer'

import '../components/ProfileContainer.css'

const ProfileDashboard = () => {
    const {user} = useContext(UserContext)
    return (
        <div className="profile-dashboard container">
            <ProfileContainer
                id={user.id}
                key={user.id}
                name={user.name}
                bio={user.bio}
                avatar={user.avatar}
                city={user.city}
                date={user.date}
                bikes={user.bikes}
            />
        </div>
    )
}

export default ProfileDashboard
