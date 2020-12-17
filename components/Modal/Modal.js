import React from 'react'

const Modal = ({ children, triggerOnClose, open, toggleOpen }) => {
  const closeModal = () => {
    triggerOnClose()
    toggleOpen(false)
  }

  const handleClickOutside = (e) => {
    if (e.target.className.includes('show-modal')) {
      closeModal()
    }
  }

  return (
    <div
      onClick={(e) => handleClickOutside(e)}
      className={open ? `show-modal modal` : `modal`}
    >
      <div className="modal-content rounded-lg pl-10 pr-10 pt-5 pb-5 lg:pl-20 lg:pr-20 lg:pt-10 lg:pb-10 text-center w-11/12 sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12">
        {/* <button onClick={() => closeModal()}>Close</button> */}
        {children}
      </div>
    </div>
  )
}

export default Modal
