import React, { Fragment } from 'react'
import BackDrop from '../../Backdrop'
import NavItems from '../../Nav/NavItems'
import NavigationItems from '../NavigationItems/Index'
import classes from './SideDrawer.module.css'

const SideDrawer = ({ open, closed, children }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]

  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Fragment>
      <BackDrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className="w-full m-auto sm:w-8/12 md:max-w-6/12">{children}</div>
        {/* <div className={classes.Logo}>
          <img src="/logos/blue.svg" alt="Videowork" />
        </div> */}
        {/* <nav>
          <NavigationItems />
        </nav> */}
        <div className="mt-2">
          <NavItems />
        </div>
      </div>
    </Fragment>
  )
}

export default SideDrawer
