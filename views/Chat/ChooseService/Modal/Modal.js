import React from 'react'

import './Modal.css'

const Modal = ({ children, triggerOnClose, open, toggleOpen }) => {
  const closeModal = () => {
    triggerOnClose()
    toggleOpen(false)
  }

  // const handleClickOutside = (e) => {
  //   if (e.target.className.includes('modal')) {
  //     closeModal()
  //   }
  // }

  return (
    <div
      // onClick={(e) => handleClickOutside(e)}
      className={open ? `show-modal modal` : `modal`}
    >
      <div className='modal-content rounded-lg'>
        {/* <button onClick={() => closeModal()}>Close</button> */}
        {children}
      </div>
    </div>
  )
};

export default Modal;
