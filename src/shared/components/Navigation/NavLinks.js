import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/list' exact>List</NavLink>
            </li>
            <li>
                <NavLink to='/u1/bikes'>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to='/bikes/new'>Add bike</NavLink>
            </li>
            <li>
                <NavLink to='/register'>Register</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
