import React from 'react'

const BackDrop = ({ show, clicked }) =>
  show && <div className="Backdrop" onClick={clicked}></div>

export default BackDrop
