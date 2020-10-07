import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/auth-context'

import './NavLinks.css'

const NavLinks = () => {
    const auth = useContext(AuthContext)
    const onLogOut = ()=>{
        auth.logout()
    }
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/list' exact>List</NavLink>
            </li>
            {
                auth.isLoggedIn && <li>
                    <NavLink to='/me'>Me</NavLink>
                </li>
            }
            { auth.isLoggedIn && <li>
                <NavLink to='/inbox'>Inbox</NavLink>
            </li>
            }
            <li>
                <NavLink to={`${auth.isLoggedIn ? '/bikes/new': '/login'}`}>Add bike</NavLink>
            </li>
            { !auth.isLoggedIn && <li>
                <NavLink to='/register'>Register</NavLink>
            </li>}
            { auth.isLoggedIn && <li>
                <NavLink onClick={onLogOut} to='/'>Logout</NavLink>
            </li>
            }
        </ul>
    )
}

export default NavLinks
