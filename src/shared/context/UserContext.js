import React, { createContext, useState } from 'react'
import { USER } from '../../data'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState(USER)
    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
