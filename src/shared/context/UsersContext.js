import React, { createContext, useState } from 'react'
import {USERS} from '../../data'

export const UsersContext = createContext()

const UsersContextProvider = (props) => {
    const [users, setUsers] = useState(USERS)
    return (
        <UsersContext.Provider value={{users}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider
