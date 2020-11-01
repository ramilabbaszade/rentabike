import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

import './NavLinks.css'

const NavLinks = () => {
    const {logOutAuth, isAuth} = useContext(AuthContext)
    const onLogOut = () => {
        logOutAuth()
    }
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/list' exact>List</NavLink>
            </li>
            {
                isAuth && <li>
                    <NavLink to='/me'>Me</NavLink>
                </li>
            }
            <li className="styled-navlink">
                <NavLink to={`${isAuth ? '/bikes/new' : '/login'}`}>Elan yarat</NavLink>
            </li>
            { !isAuth && <li>
                <NavLink to='/register'>Qeydiyyat</NavLink>
            </li>}
            { isAuth && <li>
                <NavLink to='/inbox'>
                    <i className="fas fa-envelope"></i>
                </NavLink>
            </li>
            }
            { isAuth && <li>
                <NavLink onClick={onLogOut} to='/'>
                    <i className="fas fa-sign-out-alt"></i>
                </NavLink>
            </li>
            }
        </ul>
    )
}

export default NavLinks
