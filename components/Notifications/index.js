import React from 'react'
import BackDrop from '../Backdrop'

export default ({ show, clickHandler }) => (
  <div>
    <BackDrop show={show} clicked={clickHandler}/>
    Notifications
  </div>
)
