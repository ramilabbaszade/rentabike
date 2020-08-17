import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import NavLinks from './NavLinks'
import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'

import './MainNavigation.css'

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }
    return (<>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen && (<SideDrawer onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        )}

        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">RentaBike</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
    </>
    )
}

export default MainNavigation
