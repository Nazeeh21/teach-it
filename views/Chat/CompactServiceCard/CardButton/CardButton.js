import React from 'react'
import { dropShadow } from '../../../../assets/constants'

const disabledClass =
  'shadow bg-highlight text-opacity-25 text-darkGrey border-0 text-sm rounded-md w-full my-2 px-3 p-1 cursor-not-allowed'

const CardButton = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      className={
        disabled
          ? disabledClass
          : `shadow bg-primary text-white text-sm rounded-md my-2 w-full px-3 p-1`
      }
      onClick={clickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default CardButton
