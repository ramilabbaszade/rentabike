import React, { useState , useEffect} from 'react'
import ProfileContainer from '../components/ProfileContainer'

import '../components/ProfileContainer.css'

const ProfileDashboard = () => {
    const [user,setUser] = useState()
    useEffect(()=>{
        fetch('http://velorent-api.herokuapp.com/api/v1/profile/',{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
            }
        })
        .then(res=>res.json())
        .then((data)=> {
            setUser(data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="profile-dashboard container">
            {user ? <ProfileContainer
                id={user.id}
                key={user.id}
                name={user.user_name}
                bio={user.bio}
                avatar={user.avatar}
                city={user.city}
                date={user.created_at}
                bikes={user.bikes}
            /> : 'not found'}
        </div>
    )
}

export default ProfileDashboard
