import React from 'react'
import NavigationItems from '../NavigationItems/Index'
import DrawerToggle from '../SideDrawer/DrawerToggle/Index'
import classes from './Toolbar.module.css'

const Toolbar = ({ drawerToggleClicked }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      {/* <div className={classes.Logo}>
      <img src="/logos/blue.svg" alt="Videowork" />
      </div> */}
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
