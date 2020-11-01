import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  const logInAuth = () => {
    setIsAuth(true)
  }
  const logOutAuth = () => {
    setIsAuth(false)
  }
  useEffect(() => {
    localStorage.setItem('isAuth', isAuth)
  }, [isAuth])
  return (
    <AuthContext.Provider value={{ isAuth, logInAuth, logOutAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider