import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContainer from '../components/UserContainer';
import { UsersContext } from '../../shared/context/UsersContext';

const User = () => {
    const {users} = useContext(UsersContext)
    const userId = useParams().userId;
    const loadedUsers = users.filter(user => user.id === userId)
    return (<UserContainer items={loadedUsers} />)
}

export default User
