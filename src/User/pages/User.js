import React from 'react'
import { useParams } from 'react-router-dom'
import UserContainer from '../components/UserContainer';

import { USERS } from '../../data'

const User = () => {
    const userId = useParams().userId;
    const loadedUsers = USERS.filter(user => user.id === userId)
    return (<UserContainer items={loadedUsers} />)
}

export default User
