import React, { useState } from 'react'

import NavLinks from './NavLinks'
import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'

import './MainNavigation.css'
import BrandLogo from '../UIElements/BrandLogo'

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }
    return (<React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen && (<SideDrawer onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        )}

        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <i class="fas fa-bars"></i>
            </button>
            <BrandLogo/>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
    </React.Fragment>
    )
}

export default MainNavigation
