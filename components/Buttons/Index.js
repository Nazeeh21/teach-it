import React from 'react'
import { dropShadow } from '../../assets/constants'

const disabledClass =
  'bg-highlight text-opacity-25 text-darkGrey border-0 text-innerTitle rounded-md m-2 w-full p-3 cursor-not-allowed'

export const PrimaryButton = ({
  label,
  clickHandler,
  disabled = false,
  styles,
  textSize = 'innerTitle'
}) => {
  return (
    <div className={styles}>
      <button
        className={
          disabled
            ? disabledClass
            : `bg-primary text-white text-${textSize} rounded-md w-full p-3`
        }
        onClick={(e) => clickHandler(e.target.value)}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  )
}

export const SecondaryButton = ({
  label,
  clickHandler,
  disabled = false,
  color = 'secondary',
}) => {
  return (
    <button
      className={
        disabled
          ? disabledClass
          : `border-${color} border-2 text-${color} text-innerTitle rounded-md w-full p-3`
      }
      onClick={(e) => clickHandler(e.target.value)}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export const DiscourageButton = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      className={
        disabled
          ? disabledClass
          : `bg-red text-white text-innerTitle rounded-md m-2 w-1/4 p-3`
      }
      onClick={(e) => clickHandler(e.target.value)}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export const SpecialButton = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      style={dropShadow}
      className={
        disabled
          ? disabledClass
          : `bg-primary text-white text-innerTitle rounded-full m-2 w-1/6 p-3`
      }
      onClick={(e) => clickHandler(e.target.value)}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export const CardButton = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      className={
        disabled
          ? disabledClass
          : `bg-primary text-white text-sm rounded-md m-2 w-full pl-3 pr-3 pt-1 pb-1`
      }
      onClick={(e) => clickHandler(e.target.value)}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export const SubButton = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      style={dropShadow}
      className={
        disabled
          ? disabledClass
          : `bg-secondary text-white text-generalCardTitle rounded-l-full rounded-r-none m-2 w-1/6 p-3`
      }
      onClick={(e) => clickHandler(e.target.value)}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export const Link = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      className={
        disabled
          ? disabledClass
          : `bg-white text-secondary text-generalCardTitle m-2 w-1/6 p-3`
      }
      onClick={(e) => clickHandler(e.target.value)}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export const Pill = ({
  label,
  clickHandler,
  inactive = false,
  color,
  textColor,
}) => {
  const inactiveClass =
    'bg-none text-md border-none inline w-full px-8 py-2'

  return (
    <button
      style={{ outline: 'none' }}
      className={
        inactive
          ? inactiveClass
          : `bg-${color} text-${textColor} text-md rounded-full inline w-full px-8 py-2`
      }
      onClick={(e) => clickHandler(e.target.value)}
    >
      {label}
    </button>
  )
}

export const ViewMoreButton = ({ label = 'View all', clickHandler }) => (
  <button
    className='w-full text-secondary text-sm pt-2 pb-2 pl-4 pr-4 rounded-md bg-lightGrey mb-6'
    onClick={clickHandler}
  >
    {label}
  </button>
)
