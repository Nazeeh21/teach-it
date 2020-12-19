import React from 'react'
import classses from './DrawerToggle.module.css'

const DrawerToggle = ({ clicked }) => {
  return (
    <div className={classses.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle
