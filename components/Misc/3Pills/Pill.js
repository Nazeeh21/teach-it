import React from 'react'

export const Pill = ({
  label,
  clickHandler,
  inactive = false,
  color,
  textColor,
}) => {
  const inactiveClass = 'flex-1 text-xs text-darkGrey border-none m-1 p-2'

  return (
    <button
      style={{outline: 'none'}}
      className={
        inactive
          ? inactiveClass
          : `text-xs flex-1 bg-${color} text-${textColor} rounded-full  m-1  p-2`
      }
      onClick={() => clickHandler()}
    >
      {label}
    </button>
  )
}
