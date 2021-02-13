import React from 'react'
import { NavLink } from 'react-router-dom'


import './NavLinks.css'

const NavLinks = () => {
    const isAuth = localStorage.getItem('jwtToken')

    const onLogOut = () => {
        localStorage.removeItem('jwtToken')
        window.location.reload();
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
                <NavLink onClick={onLogOut} to='/'>
                    <i className="fas fa-sign-out-alt"></i>
                </NavLink>
            </li>
            }
        </ul>
    )
}

export default NavLinks
