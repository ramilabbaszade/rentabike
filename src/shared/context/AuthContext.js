import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('jwtToken'))
  const logOutAuth = () => {
      localStorage.removeItem('jwtToken')
      setIsAuth(null)
  }
  return (
    <AuthContext.Provider value={{ isAuth, logOutAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider